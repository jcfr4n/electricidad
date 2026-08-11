# 16. Calculadoras REBT

Este capítulo reúne calculadoras interactivas basadas en las fórmulas del REBT, equivalentes a la hoja de cálculo Excel del material complementario. Introduce los datos en los campos azules y obtén el resultado al instante.

Al final del capítulo encontrarás un botón para descargar la guía completa y la hoja Excel original para usar sin conexión.

---

# 16.1. Puesta a Tierra (ITC-BT-18)

El dimensionado de la puesta a tierra depende de la resistividad del terreno y del tipo de electrodo. La comprobación de seguridad exige que la resistencia de puesta a tierra multiplicada por la sensibilidad del diferencial no supere la tensión límite de seguridad.

### Resistencia según tipo de electrodo

| Tipo de electrodo | Fórmula |
|---|---|
| Pica vertical | \( R = \rho / L \) |
| Conductor horizontal (anillo) | \( R = 2\rho / L \) |
| Placa enterrada | \( R = 0{,}8\rho / P \) |

Donde **ρ** es la resistividad del terreno en Ω·m, **L** la longitud en metros y **P** el perímetro de la placa en metros.

<div class="calc" data-calc="tierra-electrodo"></div>

### Comprobación de seguridad

La resistencia máxima permitida por seguridad es \( R_{max} = U / I_a \), donde **U** es la tensión límite (50 V en locales secos, 24 V en húmedos) e **Iₐ** la corriente de disparo del diferencial.

<div class="calc" data-calc="tierra-seguridad"></div>

### Distancia entre tierras independientes

Para garantizar la independencia entre tomas de tierra de AT y BT: \( D = \rho \cdot I_d / (2\pi \cdot U) \).

<div class="calc" data-calc="tierra-distancia"></div>

---

# 16.2. Previsión de Cargas (ITC-BT-10 / ITC-BT-52)

### Coeficiente de simultaneidad para conjuntos de viviendas

Para **n ≤ 21** viviendas se aplican valores tabulados del REBT. Para **n > 21** se usa la fórmula lineal: \( C_s = 15{,}3 + (n - 21) \cdot 0{,}5 \).

<div class="calc" data-calc="cargas-simultaneidad"></div>

### Previsión de garajes

La potencia mínima depende del tipo de ventilación: **10 W/m²** con ventilación natural, **20 W/m²** con ventilación forzada.

<div class="calc" data-calc="cargas-garaje"></div>

### Infraestructura de Recarga de Vehículo Eléctrico (IRVE)

La dotación obligatoria es del **10 %** de las plazas. El coeficiente de simultaneidad es **0,3** si se instala SPL (Sistema de Protección de Línea) o **1,0** sin SPL.

<div class="calc" data-calc="cargas-irve"></div>

---

# 16.3. Cálculo de Secciones (ITC-BT-19)

El dimensionado de conductores exige verificar **tres criterios** simultáneamente: caída de tensión, intensidad admisible (térmico) y cortocircuito. La sección definitiva es la mayor de las tres.

### Criterio de caída de tensión — Método simplificado por potencia

Monofásico: \( S = \dfrac{2 \cdot P \cdot L}{\gamma \cdot \Delta U \cdot U} \)

Trifásico: \( S = \dfrac{P \cdot L}{\gamma \cdot \Delta U \cdot U} \)

La conductividad **γ** depende del material y la temperatura de servicio:  
Cobre a 70 °C (PVC) → 48 m/(Ω·mm²), a 90 °C (XLPE/EPR) → 44 m/(Ω·mm²)  
Aluminio a 70 °C → 28 m/(Ω·mm²), a 90 °C → 26 m/(Ω·mm²)

<div class="calc" data-calc="secciones-caida"></div>

### Criterio térmico (sobrecargas)

Debe cumplirse \( I_b \leq I_n \leq I_{adm} \), donde **I₍b₎** es la intensidad de diseño, **I₍n₎** la del PIA normalizado inmediato superior, e **I₍adm₎** la intensidad admisible del cable corregida por factores de instalación.

<div class="calc" data-calc="secciones-termico"></div>

### Criterio de cortocircuito (adiabático)

\( S_{cc} = \dfrac{I_{cc} \cdot \sqrt{t}}{K} \)

Donde **K** depende del material y aislamiento: Cu/PVC = 115, Cu/XLPE = 143, Al/PVC = 76, Al/XLPE = 94. El tiempo **t** es la duración del cortocircuito en segundos (típicamente 0,1 s para interruptores rápidos).

<div class="calc" data-calc="secciones-cortocircuito"></div>

### Resultado definitivo

<div class="calc" data-calc="secciones-resultado"></div>

---

# 16.4. Autoconsumo y Redes (ITC-BT-40 / ITC-BT-06)

### Número máximo de inversores en paralelo (UNE 217001)

El número máximo de inversores que pueden acoplarse en paralelo depende del tiempo de respuesta de bucle abierto:

\( N \leq 1 + \dfrac{t_r}{t_1} \)

Donde **t₁** es el tiempo de ensayo del primer inversor y **t₍r₎** la diferencia de tiempos entre ensayos consecutivos (ambos en ms).

<div class="calc" data-calc="redes-inversores"></div>

### Red aérea trenzada — Cálculo térmico para Al 95 mm²

Para conductores de aluminio de 95 mm², la intensidad admisible se corrige por:
* Temperatura ambiente (distinta de 40 °C)
* Agrupamiento en apoyos
* Factor reductor **×0,9** por exposición directa a radiación solar

<div class="calc" data-calc="redes-aerea"></div>

---

# 16.5. Descarga de la calculadora Excel

Si necesitas trabajar sin conexión o prefieres la hoja de cálculo original, puedes descargar el pack completo:

<div class="calc" data-calc="descarga"></div>
