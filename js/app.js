/* ============================================================
   Manual del Electricista Aprendiz — Lógica de la Aplicación
   ============================================================ */

// ── Chapter Registry -----------------------------------------
const CHAPTERS = [
  { file: 'chapter_01.md', num: '01', title: 'Introducción' },
  { file: 'chapter_02.md', num: '02', title: 'Seguridad eléctrica' },
  { file: 'chapter_03.md', num: '03', title: 'El REBT explicado para trabajar' },
  { file: 'chapter_04.md', num: '04', title: 'Circuitos de viviendas C1-C13' },
  { file: 'chapter_05.md', num: '05', title: 'Conductores' },
  { file: 'chapter_06.md', num: '06', title: 'Canalizaciones' },
  { file: 'chapter_07.md', num: '07', title: 'Cuadros eléctricos' },
  { file: 'chapter_08.md', num: '08', title: 'Protecciones' },
  { file: 'chapter_09.md', num: '09', title: 'Puesta a tierra' },
  { file: 'chapter_10.md', num: '10', title: 'Interpretación de planos' },
  { file: 'chapter_11.md', num: '11', title: 'Herramientas' },
  { file: 'chapter_12.md', num: '12', title: 'Comprobaciones antes de energizar' },
  { file: 'chapter_13.md', num: '13', title: 'Averías típicas' },
  { file: 'chapter_14.md', num: '14', title: 'Tablas rápidas' },
  { file: 'chapter_15.md', num: '15', title: 'Tablas rápidas (continuación)' },
  { file: 'anexos.md',    num: '—',  title: 'Anexos (glosario, siglas, símbolos)' },
];

// ── DOM References -------------------------------------------
const sidebar   = document.getElementById('sidebar');
const toggleBtn = document.getElementById('menuToggle');
const overlay   = document.getElementById('overlay');
const contentEl = document.getElementById('chapterContent');
const listEl    = document.getElementById('chapterList');
const searchInp = document.getElementById('searchInput');
const scrollBtn = document.getElementById('scrollTop');

let currentFile = null;

// ── Initialise -----------------------------------------------
document.addEventListener('DOMContentLoaded', init);

function init() {
  buildSidebar();
  bindEvents();
  routeFromHash();
}

// ── Build Sidebar Navigation ---------------------------------
function buildSidebar() {
  const frag = document.createDocumentFragment();

  CHAPTERS.forEach((ch, i) => {
    if (i > 0 && ch.num === '01') {
      // no separator needed here
    }
    const li = document.createElement('li');
    if (ch.file === 'anexos.md') li.className = 'annex-item';

    const a = document.createElement('a');
    a.href = '#' + ch.file;
    a.dataset.file = ch.file;

    const numSpan = document.createElement('span');
    numSpan.className = 'chapter-num';
    numSpan.textContent = ch.num;

    a.appendChild(numSpan);
    a.appendChild(document.createTextNode(ch.title));
    li.appendChild(a);
    frag.appendChild(li);
  });

  listEl.appendChild(frag);
}

// ── Bind Events ----------------------------------------------
function bindEvents() {
  toggleBtn.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);
  window.addEventListener('hashchange', routeFromHash);
  scrollBtn.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', handleScrollVisibility);
  searchInp.addEventListener('input', filterChapters);

  const sidebarHeader = document.querySelector('.sidebar-header');
  if (sidebarHeader) {
    sidebarHeader.addEventListener('click', () => {
      showWelcome();
      closeSidebar();
    });
    sidebarHeader.style.cursor = 'pointer';
  }

  listEl.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();
    closeSidebar();
    loadChapter(a.dataset.file);
    window.location.hash = a.dataset.file;
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });
}

// ── Sidebar Toggle (Mobile) ----------------------------------
function toggleSidebar() {
  const open = sidebar.classList.toggle('open');
  overlay.classList.toggle('open', open);
  toggleBtn.setAttribute('aria-expanded', open);
  toggleBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-label', 'Abrir menú');
}

// ── Scroll-to-Top --------------------------------------------
function scrollToTop() {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
  // also works: window.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScrollVisibility() {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
}

// ── Search / Filter Chapters ---------------------------------
function filterChapters() {
  const term = searchInp.value.toLowerCase().trim();
  const items = listEl.querySelectorAll('li');

  items.forEach(li => {
    const a = li.querySelector('a');
    if (!a) return;
    const text = a.textContent.toLowerCase();
    li.style.display = term === '' || text.includes(term) ? '' : 'none';
  });
}

// ── Hash Routing ---------------------------------------------
function routeFromHash() {
  const hash = window.location.hash.slice(1); // remove #
  if (hash && hash.endsWith('.md')) {
    loadChapter(hash);
  } else {
    showWelcome();
  }
}

// ── Load & Render Chapter ------------------------------------
async function loadChapter(filename) {
  if (currentFile === filename) return; // already loaded
  currentFile = filename;
  highlightActive(filename);

  contentEl.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--text-muted)">Cargando capítulo…</p>';

  try {
    const resp = await fetch('docs/' + filename);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const md = await resp.text();

    const ch = CHAPTERS.find(c => c.file === filename);
    const title = ch ? `Capítulo ${ch.num}. ${ch.title}` : filename;

    let parsed = parseMarkdown(md);
    parsed = parsed.replace(/^\s*<h1>[^<]*<\/h1>\s*\n?/, '');
    const html = '<h1>' + escapeHtml(title) + '</h1>\n' + parsed;
    contentEl.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    currentFile = null;
    contentEl.innerHTML = `
      <div class="not-found">
        <h2>Capítulo no disponible</h2>
        <p>No se pudo cargar <code>${escapeHtml(filename)}</code>.</p>
        <p style="font-size:0.85rem;color:var(--text-muted)">${escapeHtml(err.message)}</p>
      </div>`;
  }
}

function showWelcome() {
  currentFile = null;
  highlightActive(null);
  window.location.hash = '';
  contentEl.innerHTML = `
    <header class="welcome">
      <div class="welcome-icon" aria-hidden="true">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="36" stroke="#1a2a3a" stroke-width="4"/>
          <path d="M40 14 L40 36 L58 44" stroke="#1a2a3a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="20" y1="48" x2="60" y2="48" stroke="#e6a817" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="24" y1="56" x2="56" y2="56" stroke="#e6a817" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="28" y1="64" x2="52" y2="64" stroke="#e6a817" stroke-width="3.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h1>Manual del Electricista Aprendiz</h1>
      <p class="welcome-subtitle">Apuntes de consulta para la Formación en Centros de Trabajo</p>
      <p class="welcome-desc">Selecciona un capítulo del menú lateral para comenzar. Este manual cubre desde seguridad eléctrica y normativa REBT hasta diagnóstico de averías, pasando por circuitos, protecciones, herramientas y tablas de referencia rápida.</p>
      <div class="welcome-stats">
        <div class="stat"><strong>15</strong> capítulos</div>
        <div class="stat"><strong>1</strong> anexo completo</div>
        <div class="stat"><strong>+50</strong> tablas de consulta</div>
      </div>
    </header>`;
}

function highlightActive(filename) {
  listEl.querySelectorAll('a').forEach(a => {
    a.classList.toggle('active', a.dataset.file === filename);
  });
}

// ── Markdown → HTML Parser -----------------------------------

function parseMarkdown(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  const len = lines.length;

  while (i < len) {
    const raw = lines[i];

    // Fenced code block
    if (raw.trimStart().startsWith('```')) {
      const lang = raw.trimStart().slice(3).trim();
      const blockLines = [];
      i++;
      while (i < len && !lines[i].trimStart().startsWith('```')) {
        blockLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      const code = blockLines.join('\n');
      out.push('<pre><code' + (lang ? ' class="language-' + escapeAttr(lang) + '"' : '') + '>' + escapeHtml(code) + '</code></pre>');
      continue;
    }

    // Table (pipe)
    if (raw.trimStart().startsWith('|')) {
      const { rows, nextI } = parseTable(lines, i);
      i = nextI;
      out.push(renderTable(rows));
      continue;
    }

    // Heading
    const headingMatch = raw.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = inline(headingMatch[2]);
      out.push('<h' + level + '>' + text + '</h' + level + '>');
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(raw.trim())) {
      out.push('<hr>');
      i++;
      continue;
    }

    // Unordered list
    if (/^\s*[-*+]\s+/.test(raw)) {
      const { html, nextI } = parseList(lines, i, false);
      i = nextI;
      out.push(html);
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(raw)) {
      const { html, nextI } = parseList(lines, i, true);
      i = nextI;
      out.push(html);
      continue;
    }

    // Blockquote
    if (raw.trimStart().startsWith('>')) {
      const { html, nextI } = parseBlockquote(lines, i);
      i = nextI;
      out.push(html);
      continue;
    }

    // Blank line
    if (raw.trim() === '') {
      i++;
      continue;
    }

    // Paragraph
    const paraLines = [];
    while (i < len && lines[i].trim() !== '' &&
           !lines[i].trimStart().startsWith('#') &&
           !lines[i].trimStart().startsWith('```') &&
           !lines[i].trimStart().startsWith('|') &&
           !/^\s*[-*+]\s+/.test(lines[i]) &&
           !/^\s*\d+\.\s+/.test(lines[i]) &&
           !lines[i].trimStart().startsWith('>') &&
           !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      out.push('<p>' + inline(paraLines.join('\n')) + '</p>');
    }
  }

  return out.join('\n');
}

// ── Table Parser ---------------------------------------------
function parseTable(lines, start) {
  const rawRows = [];
  let i = start;

  while (i < lines.length && lines[i].trimStart().startsWith('|')) {
    rawRows.push(lines[i]);
    i++;
  }

  const parsedRows = rawRows.map(r =>
    r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim())
  );

  // Remove separator row
  let header = parsedRows[0] || [];
  let body = [];

  if (parsedRows.length > 1 && /^:?-{3,}:?$/.test(parsedRows[1][0] || '')) {
    header = parsedRows[0];
    body = parsedRows.slice(2);
  } else if (parsedRows.length > 0) {
    body = parsedRows;
    header = [];
  }

  return { rows: { header, body }, nextI: i };
}

function renderTable({ header, body }) {
  const maxCols = Math.max(
    header.length,
    ...body.map(r => r.length),
    1
  );

  let html = '<table>\n';
  if (header.length > 0) {
    html += '<thead>\n<tr>';
    for (let c = 0; c < maxCols; c++) {
      html += '<th>' + inline(header[c] || '') + '</th>';
    }
    html += '</tr>\n</thead>\n';
  }
  html += '<tbody>\n';
  body.forEach(row => {
    html += '<tr>';
    for (let c = 0; c < maxCols; c++) {
      html += '<td>' + inline(row[c] || '') + '</td>';
    }
    html += '</tr>\n';
  });
  html += '</tbody>\n</table>';
  return html;
}

// ── List Parser (unordered / ordered) ------------------------
function parseList(lines, start, ordered) {
  const pattern = ordered ? /^(\s*)(\d+)\.\s+/ : /^(\s*)[-*+]\s+/;
  const topLevelIndent = lines[start].match(pattern)[1].length;
  const htmlLines = [];
  const tag = ordered ? 'ol' : 'ul';
  let i = start;
  const stack = [{ indent: topLevelIndent - 4, tag }]; // sentinel

  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(pattern);
    if (!match) {
      // Check for continuation / blank line
      if (line.trim() === '') { i++; continue; }
      if (!/^\s/.test(line)) break; // non-indented = not list continuation
      // continuation line — append to previous item
      const last = htmlLines[htmlLines.length - 1];
      if (last) {
        htmlLines[htmlLines.length - 1] = last + '<br>' + inline(line);
      }
      i++;
      continue;
    }

    const indent = match[0].length - match[0].trimStart().length; // indent in spaces
    const text = line.slice(match[0].length);

    while (stack.length > 1 && stack[stack.length - 1].indent > indent) {
      htmlLines.push('</' + stack.pop().tag + '>');
    }

    if (stack[stack.length - 1].indent < indent) {
      htmlLines.push('<' + tag + '>');
      stack.push({ indent, tag });
    }

    htmlLines.push('<li>' + inline(text) + '</li>');
    i++;
  }

  while (stack.length > 1) {
    htmlLines.push('</' + stack.pop().tag + '>');
  }

  return { html: htmlLines.join('\n'), nextI: i };
}

// ── Blockquote Parser ----------------------------------------
function parseBlockquote(lines, start) {
  const quoteLines = [];
  let i = start;

  while (i < lines.length && lines[i].trimStart().startsWith('>')) {
    quoteLines.push(lines[i].replace(/^>\s?/, ''));
    i++;
  }
  // Recurse for inner markdown
  const innerMd = quoteLines.join('\n');
  return { html: '<blockquote>' + parseMarkdown(innerMd) + '</blockquote>', nextI: i };
}

// ── Inline Formatting ----------------------------------------
function inline(text) {
  let t = text;

  // inline code (backticks) — protect first
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>');

  // bold + italic
  t = t.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  t = t.replace(/___(.+?)___/g, '<strong><em>$1</em></strong>');

  // bold
  t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/__(.+?)__/g, '<strong>$1</strong>');

  // italic
  t = t.replace(/\*(.+?)\*/g, '<em>$1</em>');
  t = t.replace(/_([^_]+)_/g, '<em>$1</em>');

  // links [text](url)
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // images ![alt](url) — convert to link since we don't host images
  t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">[img] $1</a>');

  // strikethrough
  t = t.replace(/~~(.+?)~~/g, '<del>$1</del>');

  return t;
}

// ── Utilities ------------------------------------------------
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return str.replace(/"/g, '&quot;');
}
