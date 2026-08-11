/* ============================================================
   Calculadoras REBT — Lógica y UI de las calculadoras
   ============================================================ */

const SECCIONES = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300];
const PIAS_NORMALIZADOS = [6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125];

const CONDUCTIVIDAD = {
  'cu-pvc':  48,
  'cu-xlpe': 44,
  'al-pvc':  28,
  'al-xlpe': 26,
};

const K_CORTOCIRCUITO = {
  'cu-pvc':  115,
  'cu-xlpe': 143,
  'al-pvc':  76,
  'al-xlpe': 94,
};

// ── Tabla de simultaneidad REBT (n viviendas → coeficiente) ──
const SIMULTANEIDAD = {
  1:1, 2:2, 3:3, 4:3.8, 5:4.6, 6:5.4, 7:6.2, 8:7, 9:7.8, 10:8.5,
  11:9.2, 12:9.9, 13:10.6, 14:11.3, 15:11.9, 16:12.5, 17:13.1,
  18:13.7, 19:14.3, 20:14.8, 21:15.3,
};

// ── Helpers ──────────────────────────────────────────────────
function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

function round(v, d) {
  return Number(Math.round(Number(v) + 'e' + d) + 'e-' + d);
}

function input(name, opts = {}) {
  const { type = 'number', step, min, placeholder, value, cls } = opts;
  return '<input type="' + type + '" name="' + name + '"'
    + (step ? ' step="' + step + '"' : '')
    + (min !== undefined ? ' min="' + min + '"' : '')
    + (placeholder ? ' placeholder="' + placeholder + '"' : '')
    + (value !== undefined ? ' value="' + value + '"' : '')
    + (cls ? ' class="' + cls + '"' : '')
    + '>';
}

function select(name, options, def) {
  let h = '<select name="' + name + '">';
  options.forEach(o => {
    const sel = o.value === def ? ' selected' : '';
    h += '<option value="' + o.value + '"' + sel + '>' + o.label + '</option>';
  });
  return h + '</select>';
}

function result(value, unit) {
  return '<span class="calc-result">' + value + '</span>'
    + (unit ? ' <span class="calc-unit">' + unit + '</span>' : '');
}

function warnOk(cond, okMsg, warnMsg) {
  if (cond) return '<span class="calc-ok">' + okMsg + '</span>';
  return '<span class="calc-warn">' + warnMsg + '</span>';
}

function normalizeSeccion(s) {
  for (let i = 0; i < SECCIONES.length; i++) {
    if (SECCIONES[i] >= s) return SECCIONES[i];
  }
  return 300;
}

function normalizarPIA(i) {
  for (let n = 0; n < PIAS_NORMALIZADOS.length; n++) {
    if (PIAS_NORMALIZADOS[n] >= i) return PIAS_NORMALIZADOS[n];
  }
  return 125;
}

// ── Calculator Builders ──────────────────────────────────────

function buildTierraElectrodo(container) {
  let html = '<div class="calc-form">';
  html += '<label>Tipo de electrodo ' + select('tipo', [
    { value: 'pica', label: 'Pica vertical (R = ρ / L)' },
    { value: 'anillo', label: 'Conductor horizontal / anillo (R = 2ρ / L)' },
    { value: 'placa', label: 'Placa enterrada (R = 0,8ρ / P)' },
  ], 'pica') + '</label>';
  html += '<label>Resistividad ρ (Ω·m) ' + input('rho', { value: '150', min: '1', step: '1' }) + '</label>';
  html += '<label>Longitud / Perímetro (m) ' + input('longitud', { value: '2', min: '0.1', step: '0.1' }) + '</label>';
  html += '<div class="calc-output" data-out="resultado">Resistencia: ' + result('—', 'Ω') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const tipo = $('select[name="tipo"]', container).value;
    const rho = parseFloat($('input[name="rho"]', container).value) || 0;
    const l = parseFloat($('input[name="longitud"]', container).value) || 0;
    if (!rho || !l) return;
    let r;
    if (tipo === 'pica') r = rho / l;
    else if (tipo === 'anillo') r = (2 * rho) / l;
    else r = (0.8 * rho) / l;
    $('[data-out="resultado"]', container).innerHTML = 'Resistencia: ' + result(round(r, 2), 'Ω');
  };

  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildTierraSeguridad(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>Tensión límite U <select name="u"><option value="50">50 V (locales secos)</option><option value="24">24 V (locales húmedos)</option></select></label>';
  html += '<label>Sensibilidad diferencial Iₐ (A) ' + input('ia', { value: '0.03', min: '0.001', step: '0.001', placeholder: 'ej. 0.03' }) + '</label>';
  html += '<label>Resistencia del electrodo R (Ω) ' + input('r', { value: '75', min: '0.01', step: '0.01' }) + '</label>';
  html += '<div class="calc-output" data-out="rmax">R máx permitida: ' + result('—', 'Ω') + '</div>';
  html += '<div class="calc-output" data-out="cumple">Cumple REBT: —</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const u = parseFloat($('select[name="u"]', container).value) || 50;
    const ia = parseFloat($('input[name="ia"]', container).value) || 0;
    const r = parseFloat($('input[name="r"]', container).value) || 0;
    if (!ia) return;
    const rmax = u / ia;
    $('[data-out="rmax"]', container).innerHTML = 'R máx permitida: ' + result(round(rmax, 2), 'Ω');
    $('[data-out="cumple"]', container).innerHTML = 'Cumple REBT: ' + warnOk(r <= rmax,
      'SÍ — R = ' + round(r, 2) + ' Ω ≤ ' + round(rmax, 2) + ' Ω',
      'NO — R = ' + round(r, 2) + ' Ω > ' + round(rmax, 2) + ' Ω. Añadir más electrodos.');
  };

  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildTierraDistancia(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>Resistividad ρ (Ω·m) ' + input('rho', { value: '150', min: '1' }) + '</label>';
  html += '<label>Intensidad de defecto I<sub>d</sub> (A) ' + input('id', { value: '1000', min: '1' }) + '</label>';
  html += '<label>Tensión límite U (V) ' + input('u', { value: '50', min: '1' }) + '</label>';
  html += '<div class="calc-output" data-out="distancia">Distancia mínima: ' + result('—', 'm') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const rho = parseFloat($('input[name="rho"]', container).value) || 0;
    const id  = parseFloat($('input[name="id"]', container).value) || 0;
    const u   = parseFloat($('input[name="u"]', container).value) || 0;
    if (!rho || !id || !u) return;
    const d = (rho * id) / (2 * Math.PI * u);
    $('[data-out="distancia"]', container).innerHTML = 'Distancia mínima: ' + result(round(d, 2), 'm');
  };

  container.querySelectorAll('input').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildCargasSimultaneidad(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>N.º de viviendas (n) ' + input('n', { value: '8', min: '1', type: 'number' }) + '</label>';
  html += '<div class="calc-output" data-out="cs">Coef. simultaneidad: ' + result('—', '') + '</div>';
  html += '<div class="calc-output" data-out="potencia">Potencia conjunta (kW): ' + result('—', 'kW') + '</div>';
  html += '<small style="color:var(--text-muted)">n ≤ 21 → tabla REBT &nbsp;|&nbsp; n ＞ 21 → 15,3 + (n − 21) × 0,5</small>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const n = parseInt($('input[name="n"]', container).value) || 0;
    if (!n || n < 1) return;
    let cs;
    if (n <= 21) cs = SIMULTANEIDAD[n] || 15.3 + (n - 21) * 0.5;
    else cs = 15.3 + (n - 21) * 0.5;
    const pBase = 5.75; // kW por vivienda (grado básico REBT)
    $('[data-out="cs"]', container).innerHTML = 'Coef. simultaneidad: ' + result(round(cs, 2), '');
    $('[data-out="potencia"]', container).innerHTML = 'Potencia conjunta: ' + result(round(cs * pBase, 2), 'kW');
  };

  container.querySelectorAll('input').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildCargasGaraje(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>Superficie (m²) ' + input('sup', { value: '400', min: '1' }) + '</label>';
  html += '<label>Ventilación <select name="vent"><option value="natural">Natural (10 W/m²)</option><option value="forzada">Forzada (20 W/m²)</option></select></label>';
  html += '<div class="calc-output" data-out="potencia">Potencia mínima: ' + result('—', 'W') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const sup = parseFloat($('input[name="sup"]', container).value) || 0;
    const vent = $('select[name="vent"]', container).value;
    const wm2 = vent === 'forzada' ? 20 : 10;
    const p = sup * wm2;
    $('[data-out="potencia"]', container).innerHTML = 'Potencia mínima: ' + result(round(p, 0), 'W');
  };
  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildCargasIRVE(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>N.º total de plazas ' + input('plazas', { value: '50', min: '1' }) + '</label>';
  html += '<label>Potencia por estación (kW) ' + input('pest', { value: '7.4', min: '0.1', step: '0.1' }) + '</label>';
  html += '<label>SPL instalado <select name="spl"><option value="si">Sí (Cs = 0,3)</option><option value="no">No (Cs = 1,0)</option></select></label>';
  html += '<div class="calc-output" data-out="dotacion">Plazas dotadas (10 %): ' + result('—', '') + '</div>';
  html += '<div class="calc-output" data-out="potencia">Potencia IRVE total: ' + result('—', 'kW') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const plazas = parseInt($('input[name="plazas"]', container).value) || 0;
    const pest = parseFloat($('input[name="pest"]', container).value) || 0;
    const cs = $('select[name="spl"]', container).value === 'si' ? 0.3 : 1;
    if (!plazas) return;
    const dotadas = Math.ceil(plazas * 0.1);
    const pTotal = dotadas * pest * cs;
    $('[data-out="dotacion"]', container).innerHTML = 'Plazas dotadas (10 %): ' + result(dotadas, '');
    $('[data-out="potencia"]', container).innerHTML = 'Potencia IRVE total: ' + result(round(pTotal, 2), 'kW');
  };
  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildSeccionesCaida(container) {
  let html = '<div class="calc-form">';
  html += '<label>Potencia P (W) ' + input('p', { value: '9200', min: '1' }) + '</label>';
  html += '<label>Longitud L (m) ' + input('l', { value: '50', min: '0.1', step: '0.1' }) + '</label>';
  html += '<label>Tensión U (V) ' + input('u', { value: '230', min: '1' }) + '</label>';
  html += '<label>Caída de tensión máx (%) ' + input('duPct', { value: '3', min: '0.1', step: '0.1' }) + '</label>';
  html += '<label>Sistema <select name="sist"><option value="mono">Monofásico</option><option value="tri">Trifásico</option></select></label>';
  html += '<label>Conductividad γ (m/Ω·mm²) <select name="gamma">'
    + '<option value="48">48 — Cobre PVC 70 °C</option>'
    + '<option value="44">44 — Cobre XLPE 90 °C</option>'
    + '<option value="28">28 — Aluminio PVC 70 °C</option>'
    + '<option value="26">26 — Aluminio XLPE 90 °C</option>'
    + '</select></label>';
  html += '<div class="calc-output" data-out="duV">Caída de tensión: ' + result('—', 'V') + '</div>';
  html += '<div class="calc-output" data-out="steorica">Sección teórica: ' + result('—', 'mm²') + '</div>';
  html += '<div class="calc-output" data-out="scomercial">Sección comercial: ' + result('—', 'mm²') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const p = parseFloat($('input[name="p"]', container).value) || 0;
    const l = parseFloat($('input[name="l"]', container).value) || 0;
    const u = parseFloat($('input[name="u"]', container).value) || 0;
    const duPct = parseFloat($('input[name="duPct"]', container).value) || 0;
    const sist = $('select[name="sist"]', container).value;
    const gamma = parseFloat($('select[name="gamma"]', container).value) || 48;
    if (!p || !l || !u || !duPct) return;
    const duV = u * (duPct / 100);
    let s;
    if (sist === 'mono') s = (2 * p * l) / (gamma * duV * u);
    else s = (p * l) / (gamma * duV * u);
    const sCom = normalizeSeccion(s);
    $('[data-out="duV"]', container).innerHTML = 'Caída de tensión: ' + result(round(duV, 2), 'V');
    $('[data-out="steorica"]', container).innerHTML = 'Sección teórica: ' + result(round(s, 2), 'mm²');
    $('[data-out="scomercial"]', container).innerHTML = 'Sección comercial: ' + result(sCom, 'mm²');
  };
  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildSeccionesTermico(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>Intensidad diseño I<sub>b</sub> (A) ' + input('ib', { value: '40', min: '0.1', step: '0.1' }) + '</label>';
  html += '<label>Sección conductor ' + select('seccion', SECCIONES.map(s => ({ value: String(s), label: s + ' mm²' })), '10') + '</label>';
  html += '<label>Intensidad admisible cable I<sub>adm</sub> (A) ' + input('iadm', { value: '54', min: '0.1', step: '0.1' }) + '</label>';
  html += '<div class="calc-output" data-out="pia">PIA normalizado: ' + result('—', 'A') + '</div>';
  html += '<div class="calc-output" data-out="cumple">Cumple (I<sub>b</sub> ≤ I<sub>n</sub> ≤ I<sub>adm</sub>): ' + result('—', '') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const ib = parseFloat($('input[name="ib"]', container).value) || 0;
    const iadm = parseFloat($('input[name="iadm"]', container).value) || 0;
    if (!ib) return;
    const iPia = normalizarPIA(ib);
    $('[data-out="pia"]', container).innerHTML = 'PIA normalizado: ' + result(iPia, 'A');
    $('[data-out="cumple"]', container).innerHTML = 'Cumple (I<sub>b</sub> ≤ I<sub>n</sub> ≤ I<sub>adm</sub>): '
      + warnOk(ib <= iPia && iPia <= iadm,
        'SÍ — ' + round(ib, 1) + ' ≤ ' + iPia + ' ≤ ' + round(iadm, 1),
        'NO — Verificar sección o condiciones de instalación');
  };
  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildSeccionesCortocircuito(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>I<sub>cc</sub> prevista (A) ' + input('icc', { value: '1500', min: '1' }) + '</label>';
  html += '<label>Tiempo t (s) ' + input('t', { value: '0.1', min: '0.001', step: '0.001' }) + '</label>';
  html += '<label>Material / K <select name="k">'
    + '<option value="115">115 — Cobre PVC</option>'
    + '<option value="143">143 — Cobre XLPE/EPR</option>'
    + '<option value="76">76 — Aluminio PVC</option>'
    + '<option value="94">94 — Aluminio XLPE/EPR</option>'
    + '</select></label>';
  html += '<div class="calc-output" data-out="scc">Sección mínima por cortocircuito: ' + result('—', 'mm²') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const icc = parseFloat($('input[name="icc"]', container).value) || 0;
    const t   = parseFloat($('input[name="t"]', container).value) || 0;
    const k   = parseFloat($('select[name="k"]', container).value) || 115;
    if (!icc || !t) return;
    const scc = (icc * Math.sqrt(t)) / k;
    const sCom = normalizeSeccion(scc);
    $('[data-out="scc"]', container).innerHTML = 'Sección mínima por cortocircuito: ' + result(round(scc, 2), 'mm²')
      + ' → comercial ' + result(sCom, 'mm²');
  };
  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildSeccionesResultado(container) {
  container.innerHTML = '<div class="calc-form">'
    + '<p style="margin:0;color:var(--text-muted);font-size:0.9rem">'
    + 'La <strong>sección definitiva</strong> es la mayor de las tres calculadas arriba '
    + '(caída de tensión, criterio térmico y cortocircuito). '
    + 'Utiliza las calculadoras anteriores introduciendo los mismos datos y compara los resultados.'
    + '</p>'
    + '</div>';
}

function buildRedesInversores(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>t₁ — tiempo ensayo 1.ᵉʳ inversor (ms) ' + input('t1', { value: '50', min: '1' }) + '</label>';
  html += '<label>t<sub>r</sub> — diferencia entre ensayos (ms) ' + input('tr', { value: '500', min: '1' }) + '</label>';
  html += '<div class="calc-output" data-out="n">N.º máx de inversores: ' + result('—', '') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const t1 = parseFloat($('input[name="t1"]', container).value) || 0;
    const tr = parseFloat($('input[name="tr"]', container).value) || 0;
    if (!t1) return;
    const n = Math.floor(1 + tr / t1);
    $('[data-out="n"]', container).innerHTML = 'N.º máx de inversores: ' + result(n, '');
  };
  container.querySelectorAll('input').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildRedesAerea(container) {
  let html = '<div class="calc-form calc-form--row">';
  html += '<label>I<sub>adm</sub> base Al 95 mm² (A) ' + input('ibase', { value: '230', min: '1' }) + '</label>';
  html += '<label>Factor temp. ambiente (F<sub>T</sub>) ' + input('ft', { value: '0.91', min: '0.01', step: '0.01' }) + '</label>';
  html += '<label>Factor agrupamiento (F<sub>A</sub>) ' + input('fa', { value: '0.7', min: '0.01', step: '0.01' }) + '</label>';
  html += '<label>Exposición solar directa <select name="sol"><option value="si">Sí (×0,9)</option><option value="no">No (×1,0)</option></select></label>';
  html += '<div class="calc-output" data-out="iadm">Intensidad admisible corregida: ' + result('—', 'A') + '</div>';
  html += '</div>';
  container.innerHTML = html;

  const recalc = () => {
    const ibase = parseFloat($('input[name="ibase"]', container).value) || 0;
    const ft = parseFloat($('input[name="ft"]', container).value) || 1;
    const fa = parseFloat($('input[name="fa"]', container).value) || 1;
    const fsol = $('select[name="sol"]', container).value === 'si' ? 0.9 : 1;
    const iadm = ibase * ft * fa * fsol;
    $('[data-out="iadm"]', container).innerHTML = 'Intensidad admisible corregida: ' + result(round(iadm, 1), 'A');
  };
  container.querySelectorAll('input, select').forEach(el => el.addEventListener('input', recalc));
  recalc();
}

function buildDescarga(container) {
  container.innerHTML = '<div class="calc-download">'
    + '<p>Pack descargable con la guía de funcionamiento en Markdown y la hoja de cálculo Excel original.</p>'
    + '<button class="btn-download" id="btnDownloadZip">'
    + '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px">'
    + '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
    + '</svg>Descargar ZIP</button>'
    + '<p class="calc-download-files">'
    + 'Contiene: <code>Guía y Funcionamiento de la Calculadora Automatizada REBT.md</code> + <code>calculadora-rebt.xlsx</code>'
    + '</p>'
    + '</div>';

  const btn = $('#btnDownloadZip', container);
  btn.addEventListener('click', createZipAndDownload);
}

// ── ZIP Download ─────────────────────────────────────────────
async function createZipAndDownload() {
  const btn = document.getElementById('btnDownloadZip');
  if (!btn) return;
  btn.disabled = true;
  btn.textContent = 'Preparando descarga...';

  try {
    // Dynamically load JSZip
    if (typeof JSZip === 'undefined') {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        s.onload = resolve;
        s.onerror = () => reject(new Error('No se pudo cargar la librería JSZip'));
        document.head.appendChild(s);
      });
    }

    // Fetch both files from Material_nuevo
    const base = 'docs/Material_nuevo/';
    const files = [
      'Guía y Funcionamiento de la Calculadora Automatizada REBT.md',
      'calculadora-rebt.xlsx',
    ];

    const zip = new JSZip();

    for (const file of files) {
      const resp = await fetch(base + file);
      if (!resp.ok) throw new Error('No se pudo leer ' + file);
      const blob = await resp.blob();
      zip.file(file, blob);
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calculadora-rebt.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    btn.textContent = 'Descarga completada';
    setTimeout(() => {
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Descargar ZIP';
      btn.disabled = false;
    }, 2500);
  } catch (err) {
    btn.textContent = 'Error al descargar';
    console.error(err);
    setTimeout(() => {
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Descargar ZIP';
      btn.disabled = false;
    }, 2500);
  }
}

// ── Registry ─────────────────────────────────────────────────
const CALC_BUILDERS = {
  'tierra-electrodo':     buildTierraElectrodo,
  'tierra-seguridad':     buildTierraSeguridad,
  'tierra-distancia':     buildTierraDistancia,
  'cargas-simultaneidad': buildCargasSimultaneidad,
  'cargas-garaje':        buildCargasGaraje,
  'cargas-irve':          buildCargasIRVE,
  'secciones-caida':      buildSeccionesCaida,
  'secciones-termico':    buildSeccionesTermico,
  'secciones-cortocircuito': buildSeccionesCortocircuito,
  'secciones-resultado':  buildSeccionesResultado,
  'redes-inversores':     buildRedesInversores,
  'redes-aerea':          buildRedesAerea,
  'descarga':             buildDescarga,
};

// ── Public API ───────────────────────────────────────────────
function initCalculators() {
  const containers = document.querySelectorAll('.calc');
  containers.forEach(c => {
    const type = c.dataset.calc;
    const builder = CALC_BUILDERS[type];
    if (builder) builder(c);
  });
}
