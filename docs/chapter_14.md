# 14. Tablas rápidas

Este capítulo está pensado para ser consultado rápidamente durante las prácticas o el trabajo.

No sustituye al REBT, a sus ITC-BT, a las normas UNE aplicables ni a las instrucciones del fabricante.

> **Las tablas de este capítulo son una ayuda para recordar y comprobar, no una autorización para elegir un valor sin comprobar las condiciones de la instalación.**

---

# 14.1. Secciones habituales de conductores

En instalaciones de baja tensión encontramos habitualmente las siguientes secciones:

| Sección | Uso habitual orientativo                                |
| ------: | ------------------------------------------------------- |
| 1,5 mm² | Iluminación y determinados circuitos                    |
| 2,5 mm² | Tomas de corriente y determinados circuitos             |
|   4 mm² | Circuitos de mayor potencia                             |
|   6 mm² | Cocina, horno y determinadas cargas                     |
|  10 mm² | Alimentaciones y circuitos de mayor intensidad          |
|  16 mm² | Alimentaciones principales y determinadas instalaciones |
|  25 mm² | Alimentaciones de mayor capacidad                       |
|  35 mm² | Alimentaciones de mayor capacidad                       |
|  50 mm² | Alimentaciones de mayor capacidad                       |

> **La sección no se elige solamente por la potencia del receptor.** Hay que considerar intensidad, método de instalación, longitud, temperatura, agrupamiento, caída de tensión y protección, entre otros factores.

---

# 14.2. Secciones habituales en viviendas

Como referencia para los circuitos interiores de vivienda:

| Circuito | Uso                            |           Sección |      PIA habitual |
| -------- | ------------------------------ | ----------------: | ----------------: |
| C1       | Iluminación                    |           1,5 mm² |              10 A |
| C2       | Tomas de uso general           |           2,5 mm² |              16 A |
| C3       | Cocina y horno                 |             6 mm² |              25 A |
| C4       | Lavadora, lavavajillas y termo |             4 mm² |              20 A |
| C5       | Tomas de cocina y baños        |           2,5 mm² |              16 A |
| C6       | Climatización                  |    Según proyecto |    Según proyecto |
| C7       | Calefacción                    | Según instalación | Según instalación |
| C8       | Secadora                       | Según instalación | Según instalación |
| C9       | Automatización                 |    Según proyecto |    Según proyecto |
| C10      | Reserva                        |    Según proyecto |    Según proyecto |

> **Importante:** los circuitos C6–C10 pueden estar condicionados por la configuración concreta de la vivienda y por las previsiones de carga. No deben tratarse como una tabla universal de "sección = PIA".

---

# 14.3. Intensidad aproximada según sección

Una de las preguntas más frecuentes del aprendiz es:

> "¿Cuántos amperios aguanta un cable de 2,5 mm²?"

La respuesta correcta es:

> **Depende de cómo esté instalado.**

La intensidad admisible depende, entre otros factores, de:

* material del conductor;
* tipo de aislamiento;
* método de instalación;
* temperatura ambiente;
* número de conductores cargados;
* agrupamiento;
* condiciones de disipación;
* longitud y caída de tensión.

Por tanto, no debemos utilizar una única tabla simplificada como si fuera válida para cualquier instalación.

### Regla práctica

```text
SECCIÓN
   ↓
MÉTODO DE INSTALACIÓN
   ↓
CONDICIONES
   ↓
INTENSIDAD ADMISIBLE
   ↓
PROTECCIÓN
```

---

# 14.4. Regla fundamental de protección

Una forma sencilla de recordar el criterio es:

```text
IB ≤ IN ≤ IZ
```

donde:

* **IB** = intensidad de diseño del circuito.
* **IN** = corriente nominal del dispositivo de protección.
* **IZ** = intensidad admisible del conductor en las condiciones de instalación.

En determinadas situaciones hay que considerar además las características de actuación del dispositivo y otros criterios reglamentarios.

> **No se selecciona el magnetotérmico antes de conocer las condiciones del conductor.**

---

# 14.5. Conversión rápida W → A

Para corriente continua o cargas resistivas sencillas:

```text
I = P / V
```

Donde:

* `I` = intensidad en amperios.
* `P` = potencia en vatios.
* `V` = tensión en voltios.

### Ejemplo

Una carga de 2.300 W a 230 V:

```text
I = 2300 / 230

I = 10 A
```

---

# 14.6. Tabla W → A a 230 V

Para una carga monofásica sencilla con factor de potencia aproximadamente igual a 1:

| Potencia | Intensidad aproximada |
| -------: | --------------------: |
|    100 W |                0,43 A |
|    250 W |                1,09 A |
|    500 W |                2,17 A |
|    750 W |                3,26 A |
|  1.000 W |                4,35 A |
|  1.500 W |                6,52 A |
|  2.000 W |                8,70 A |
|  2.300 W |               10,00 A |
|  2.500 W |               10,87 A |
|  3.000 W |               13,04 A |
|  3.680 W |               16,00 A |
|  4.000 W |               17,39 A |
|  4.600 W |               20,00 A |
|  5.750 W |               25,00 A |

### Atajo

A 230 V:

```text
A ≈ W / 230
```

o aproximadamente:

```text
1 A ≈ 230 W
```

para una carga resistiva.

---

# 14.7. De amperios a vatios

La fórmula inversa:

```text
P = V × I
```

Ejemplo:

```text
230 V × 16 A = 3.680 W
```

Por tanto:

> Un circuito de 16 A a 230 V tiene una potencia aparente/resistiva de referencia de unos **3.680 W**, pero eso no significa que siempre podamos conectar una carga de 3.680 W a cualquier circuito protegido a 16 A.

La instalación completa determina lo que es admisible.

---

# 14.8. Corriente trifásica

Para una carga trifásica equilibrada:

```text
P = √3 × V × I × cos φ
```

Por tanto:

```text
I = P / (√3 × V × cos φ)
```

Donde:

* `P` = potencia activa.
* `V` = tensión entre fases.
* `I` = corriente de línea.
* `cos φ` = factor de potencia.

---

# 14.9. Ejemplo trifásico

Carga:

```text
P = 10.000 W
V = 400 V
cos φ = 1
```

Entonces:

```text
I = 10000 / (1,732 × 400)

I ≈ 14,43 A
```

---

# 14.10. Si conocemos la corriente trifásica

La fórmula inversa:

```text
P = √3 × V × I × cos φ
```

Por ejemplo:

```text
400 V
16 A
cos φ = 1
```

aproximadamente:

```text
P = 1,732 × 400 × 16

P ≈ 11.085 W
```

---

# 14.11. Factor de potencia

En cargas reales no siempre:

```text
cos φ = 1
```

Podemos encontrar motores, transformadores y equipos electrónicos cuyo factor de potencia sea diferente.

Entonces:

```text
P = V × I × cos φ
```

en monofásico, y:

```text
P = √3 × V × I × cos φ
```

en trifásico equilibrado.

> **No utilices la conversión W → A simplificada cuando el factor de potencia sea relevante.**

---

# 14.12. Caída de tensión

La caída de tensión aparece porque los conductores tienen resistencia e impedancia.

Conceptualmente:

```text
CUADRO
  │
  │ 230 V
  │
  ├───────────────────────┐
  │                       │
  │       CONDUCTOR       │
  │                       │
  └───────────────────────┘
                          │
                         CARGA

                      < 230 V
```

La tensión en la carga puede ser inferior a la tensión en el origen.

---

# 14.13. Fórmula simplificada monofásica

Para un cálculo sencillo de caída de tensión resistiva:

```text
ΔV = 2 × L × I × ρ / S
```

Donde:

* `ΔV` = caída de tensión en voltios.
* `L` = longitud de ida en metros.
* `I` = intensidad en amperios.
* `ρ` = resistividad del conductor.
* `S` = sección en mm².

El factor 2 aparece porque en un circuito monofásico tenemos:

```text
IDA + VUELTA
```

---

# 14.14. Porcentaje de caída de tensión

Para obtener el porcentaje:

```text
ΔV% = (ΔV / V) × 100
```

Ejemplo:

```text
ΔV = 5 V
V = 230 V
```

Entonces:

```text
ΔV% = (5 / 230) × 100

ΔV% ≈ 2,17 %
```

---

# 14.15. Resistividad orientativa

Para cálculos sencillos podemos utilizar aproximadamente:

| Material | ρ aproximada a 20 °C |
| -------- | -------------------: |
| Cobre    |       0,0175 Ω·mm²/m |
| Aluminio |        0,028 Ω·mm²/m |

En cálculos reales debemos considerar las condiciones y el método de cálculo aplicable.

---

# 14.16. Ejemplo de caída de tensión

Tenemos:

```text
L = 20 m
I = 10 A
S = 2,5 mm²
ρ = 0,0175
```

Entonces:

```text
ΔV = 2 × 20 × 10 × 0,0175 / 2,5

ΔV ≈ 2,8 V
```

Porcentaje:

```text
ΔV% = 2,8 / 230 × 100

ΔV% ≈ 1,22 %
```

---

# 14.17. Trifásica

Para una aproximación resistiva en trifásico:

```text
ΔV = √3 × L × I × ρ / S
```

En cálculos profesionales deben considerarse también reactancia, factor de potencia y demás condiciones aplicables.

---

# 14.18. No confundir caída de tensión con intensidad admisible

Son dos comprobaciones diferentes.

```text
SECCIÓN
   │
   ├────────► ¿SOPORTA LA CORRIENTE?
   │
   └────────► ¿CAÍDA DE TENSIÓN CORRECTA?
```

Un conductor puede:

* soportar térmicamente la corriente;
* pero presentar demasiada caída de tensión debido a su longitud.

Por eso ambas comprobaciones son necesarias.

---

# 14.19. Tubos: diámetro y ocupación

No debemos memorizar:

> "Para tres cables de 2,5 mm² siempre tubo de X."

El diámetro necesario depende de:

* número de conductores;
* sección;
* tipo de conductor;
* diámetro exterior real;
* longitud;
* curvas;
* facilidad de instalación;
* ocupación permitida.

La sección eléctrica del conductor **no es lo mismo que su diámetro exterior**.

---

# 14.20. Regla práctica para tubos

Antes de seleccionar el tubo:

```text
¿CUÁNTOS CONDUCTORES?
          ↓
¿QUÉ SECCIÓN?
          ↓
¿QUÉ DIÁMETRO EXTERIOR?
          ↓
¿CUÁNTAS CURVAS?
          ↓
¿QUÉ LONGITUD?
          ↓
¿QUÉ DIÁMETRO DE TUBO?
```

---

# 14.21. Diámetros habituales de tubo

En instalaciones interiores encontramos habitualmente diámetros nominales como:

| Diámetro nominal | Uso orientativo                   |
| ---------------: | --------------------------------- |
|            16 mm | Instalaciones pequeñas            |
|            20 mm | Circuitos habituales              |
|            25 mm | Mayor número de conductores       |
|            32 mm | Canalizaciones de mayor capacidad |
|            40 mm | Canalizaciones de mayor capacidad |
|            50 mm | Canalizaciones de gran capacidad  |

> **Esta tabla no determina por sí sola el diámetro correcto.** Hay que comprobar la ocupación de la canalización y las condiciones de instalación.

---

# 14.22. Una buena regla de obra

Si una guía pasacables entra perfectamente:

```text
NO significa
```

que:

```text
EL TUBO ESTÉ CORRECTAMENTE DIMENSIONADO.
```

Y si conseguimos meter los conductores:

```text
NO significa
```

que:

```text
LA OCUPACIÓN SEA REGLAMENTARIA.
```

La canalización debe dimensionarse antes de instalar.

---

# 14.23. Colores de conductores

En instalaciones de baja tensión debemos respetar la identificación normalizada de conductores.

Como referencia:

| Color              | Identificación habitual |
| ------------------ | ----------------------- |
| **Azul claro**     | Neutro                  |
| **Verde/amarillo** | Conductor de protección |
| **Marrón**         | Fase                    |
| **Negro**          | Fase                    |
| **Gris**           | Fase                    |

En sistemas trifásicos es habitual:

```text
L1 → Marrón
L2 → Negro
L3 → Gris
N  → Azul
PE → Verde/amarillo
```

> **El color ayuda a identificar, pero nunca sustituye la comprobación eléctrica.**

---

# 14.24. El conductor de protección

El conductor de protección se identifica mediante:

```text
VERDE / AMARILLO
```

No debemos utilizar esta combinación de colores para otro conductor.

```text
🟩🟨  → PE
```

---

# 14.25. El neutro

El neutro se identifica mediante:

```text
AZUL CLARO
```

Una vez más:

> **No debemos confiar únicamente en el color cuando diagnosticamos una instalación existente.**

Una instalación antigua, modificada incorrectamente o reparada por otra persona puede contener errores.

---

# 14.26. Símbolos eléctricos básicos

| Elemento          | Símbolo conceptual |   |      |
| ----------------- | ------------------ | - | ---- |
| Tierra / PE       | ⏚                  |   |      |
| Interruptor       | —o/ o—             |   |      |
| Lámpara           | ⊗                  |   |      |
| Resistencia       | ///                |   |      |
| Motor             | M                  |   |      |
| Fusible           | —[ ]—              |   |      |
| Magnetotérmico    | —[ PIA ]—          |   |      |
| Diferencial       | —[ ID ]—           |   |      |
| Toma de corriente | ◉                  |   |      |
| Pulsador          | —o o—              |   |      |
| Bobina            | `( )`              |   |      |
| Contactor         | K                  |   |      |
| Relé              | K                  |   |      |
| Transformador     | `)))               |   | (((` |

> Los símbolos exactos pueden variar según la norma, el tipo de plano y el software utilizado.

---

# 14.27. Símbolos de una instalación de vivienda

Podemos encontrar representaciones como:

```text
○     Punto de luz

⊗     Luminaria

○/    Interruptor

◉     Toma de corriente

⏚     Tierra

[ ]   Protección

───   Conductor
```

La simbología debe interpretarse siempre dentro de la leyenda del plano cuando exista.

---

# 14.28. Fórmulas imprescindibles

## Ley de Ohm

```text
V = I × R
```

Despejes:

```text
I = V / R

R = V / I
```

---

# 14.29. Potencia

### Monofásica resistiva

```text
P = V × I
```

### Monofásica con factor de potencia

```text
P = V × I × cos φ
```

### Trifásica

```text
P = √3 × V × I × cos φ
```

---

# 14.30. Energía

```text
E = P × t
```

Si:

```text
P = 2 kW
t = 3 h
```

entonces:

```text
E = 2 × 3

E = 6 kWh
```

---

# 14.31. Conversión de unidades

```text
1 kW = 1.000 W

1 MW = 1.000 kW

1 A = 1.000 mA

1 mA = 1.000 µA

1 kΩ = 1.000 Ω

1 MΩ = 1.000 kΩ
```

---

# 14.32. Resistencia

Ley de Ohm:

```text
R = V / I
```

Para un conductor:

```text
R = ρ × L / S
```

Donde:

* `ρ` = resistividad;
* `L` = longitud;
* `S` = sección.

---

# 14.33. Resistencias en serie

```text
Rtotal = R1 + R2 + R3 + ...
```

Ejemplo:

```text
10 Ω + 20 Ω + 30 Ω = 60 Ω
```

---

# 14.34. Resistencias en paralelo

Para dos resistencias:

```text
Rtotal = (R1 × R2) / (R1 + R2)
```

Ejemplo:

```text
R1 = 10 Ω
R2 = 10 Ω

Rtotal = 5 Ω
```

---

# 14.35. Corriente en función de potencia

### A 230 V

```text
I ≈ P / 230
```

### A 400 V trifásicos

```text
I ≈ P / (1,732 × 400 × cos φ)
```

---

# 14.36. Par de apriete

Este apartado requiere una advertencia especial.

No existe un único:

> **"par de apriete para un magnetotérmico".**

El par depende del:

* fabricante;
* modelo;
* borne;
* sección;
* tipo de terminal;
* dispositivo;
* material;
* sistema de conexión.

Por tanto:

> **El dato correcto es siempre el especificado por el fabricante del dispositivo.**

---

# 14.37. Tabla de par de apriete orientativo

La siguiente tabla debe utilizarse únicamente como **referencia de orden de magnitud**, nunca como sustituto de la especificación del fabricante.

| Tipo de conexión                          | Orden de magnitud orientativo |
| ----------------------------------------- | ----------------------------: |
| Bornes pequeños de mecanismos             |                  ~0,5–1,5 N·m |
| Bornes de pequeños dispositivos modulares |                    ~1,5–3 N·m |
| Bornes de dispositivos de mayor sección   |                      ~2–6 N·m |
| Conexiones de potencia                    |        Puede ser muy superior |

> **Antes de aplicar un par concreto, consultar siempre la documentación del fabricante.**

---

# 14.38. La herramienta correcta: dinamométrica

Cuando el fabricante especifica un par:

```text
BORNE
  ↓
PAR ESPECIFICADO
  ↓
DESTORNILLADOR DINAMOMÉTRICO
  ↓
APRIETE CONTROLADO
```

No debemos confiar exclusivamente en:

```text
"Lo aprieto hasta que me parezca bien."
```

---

# 14.39. Unidades de par

La unidad habitual es:

```text
N·m
```

Newton-metro.

Por ejemplo:

```text
2 N·m
```

no es lo mismo que:

```text
2 Nm
```

en el contexto informal puede escribirse sin punto, pero en documentación técnica es preferible:

```text
2 N·m
```

---

# 14.40. Tabla de prefijos

| Prefijo | Símbolo |    Factor |
| ------- | ------- | --------: |
| micro   | µ       |  0,000001 |
| mili    | m       |     0,001 |
| kilo    | k       |     1.000 |
| mega    | M       | 1.000.000 |

Ejemplos:

```text
500 mA = 0,5 A

2 kW = 2.000 W

5 MΩ = 5.000.000 Ω
```

---

# 14.41. Tabla rápida de potencias a 230 V

```text
        POTENCIA       CORRIENTE
       ─────────       ─────────
         500 W          2,17 A
       1.000 W          4,35 A
       1.500 W          6,52 A
       2.000 W          8,70 A
       2.300 W         10,00 A
       2.500 W         10,87 A
       3.000 W         13,04 A
       3.680 W         16,00 A
       4.600 W         20,00 A
       5.750 W         25,00 A
```

> Valores aproximados para cargas con factor de potencia ≈ 1.

---

# 14.42. Tabla rápida de potencia trifásica

Para:

```text
400 V
cos φ = 1
```

aproximadamente:

| Corriente | Potencia |
| --------: | -------: |
|       5 A |  3,46 kW |
|      10 A |  6,93 kW |
|      16 A | 11,09 kW |
|      20 A | 13,86 kW |
|      25 A | 17,32 kW |
|      32 A | 22,17 kW |
|      40 A | 27,71 kW |
|      50 A | 34,64 kW |
|      63 A | 43,65 kW |

---

# 14.43. Conversión rápida de tensión

```text
230 V
```

es la referencia habitual para circuitos monofásicos de baja tensión.

```text
400 V
```

es la referencia habitual entre fases en sistemas trifásicos de baja tensión.

Por tanto:

```text
L ─ N ≈ 230 V

L1 ─ L2 ≈ 400 V
L2 ─ L3 ≈ 400 V
L1 ─ L3 ≈ 400 V
```

Son valores nominales de referencia, no una exigencia de lectura exactamente igual en toda circunstancia.

---

# 14.44. Diferencia entre tensión nominal y tensión medida

No debemos confundir:

```text
TENSIÓN NOMINAL
```

con:

```text
TENSIÓN REAL MEDIDA
```

Por ejemplo:

```text
230 V
```

es la tensión nominal de referencia de un sistema.

El instrumento puede mostrar un valor ligeramente diferente.

---

# 14.45. Frecuencia

En la red eléctrica europea:

```text
f = 50 Hz
```

Esto significa:

```text
50 ciclos por segundo
```

---

# 14.46. Potencia aparente

En corriente alterna:

```text
S = V × I
```

en monofásico.

La unidad es:

```text
VA
```

En trifásico equilibrado:

```text
S = √3 × V × I
```

---

# 14.47. Relación entre potencia activa, reactiva y aparente

Podemos recordar:

```text
          S
         /|
        / |
       /  | Q
      /   |
     / φ  |
    ──────
       P
```

Donde:

* `P` = potencia activa, W.
* `Q` = potencia reactiva, var.
* `S` = potencia aparente, VA.

Y:

```text
S² = P² + Q²
```

---

# 14.48. Factor de potencia

```text
cos φ = P / S
```

Por tanto:

```text
P = S × cos φ
```

Esto explica por qué:

> **W y VA no siempre son lo mismo.**

---

# 14.49. Caída de tensión: chuleta

```text
MONOFÁSICO

ΔV = 2 × L × I × ρ / S


TRIFÁSICO

ΔV = √3 × L × I × ρ / S
```

Para porcentaje:

```text
ΔV% = ΔV / V × 100
```

En cálculos completos pueden intervenir impedancias, reactancias, factor de potencia y condiciones específicas.

---

# 14.50. Fórmulas imprescindibles — resumen

```text
┌──────────────────────────────────┐
│           LEY DE OHM             │
│                                  │
│ V = I × R                        │
│ I = V / R                        │
│ R = V / I                        │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│            POTENCIA              │
│                                  │
│ P = V × I                        │
│ P = V × I × cos φ                │
│ P = √3 × V × I × cos φ           │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│          RESISTENCIA             │
│                                  │
│ R = ρ × L / S                    │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│       CAÍDA DE TENSIÓN           │
│                                  │
│ ΔV = 2 × L × I × ρ / S           │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│             ENERGÍA              │
│                                  │
│ E = P × t                         │
└──────────────────────────────────┘
```

---

# 14.51. Tabla de símbolos matemáticos

| Símbolo | Significado        |
| ------- | ------------------ |
| `V`     | Tensión            |
| `I`     | Intensidad         |
| `R`     | Resistencia        |
| `P`     | Potencia activa    |
| `S`     | Potencia aparente  |
| `Q`     | Potencia reactiva  |
| `E`     | Energía            |
| `t`     | Tiempo             |
| `ρ`     | Resistividad       |
| `L`     | Longitud           |
| `S`     | Sección            |
| `cos φ` | Factor de potencia |
| `ΔV`    | Caída de tensión   |

> En una fórmula no debemos confundir la `S` de potencia aparente con la `S` utilizada habitualmente para sección. El significado depende del contexto.

---

# 14.52. La tabla que nunca debemos utilizar sola

Hay tres preguntas que no debemos resolver únicamente con una tabla:

### "¿Qué sección pongo?"

Depende de las condiciones de instalación.

### "¿Qué magnetotérmico pongo?"

Depende del circuito y de la protección del conductor.

### "¿Qué tubo pongo?"

Depende de los conductores y de la canalización.

La secuencia correcta es:

```text
DATOS DE LA INSTALACIÓN
          ↓
CÁLCULO
          ↓
TABLA / REBT / UNE
          ↓
COMPROBACIÓN
          ↓
ELECCIÓN
```

---

# 14.53. Mini tabla de consulta en obra

```text
┌─────────────────────────────────────────┐
│           CHULETA DEL ELECTRICISTA      │
├─────────────────────────────────────────┤
│ 230 V → referencia monofásica           │
│ 400 V → referencia entre fases          │
│ 50 Hz → frecuencia de red               │
│                                         │
│ I = P / V                               │
│ P = V × I                               │
│ V = I × R                               │
│ R = V / I                               │
│                                         │
│ P3φ = √3 × V × I × cos φ                │
│                                         │
│ ΔV% = ΔV / V × 100                      │
│                                         │
│ 1 kW = 1.000 W                          │
│ 1 A = 1.000 mA                           │
│ 1 MΩ = 1.000 kΩ                          │
│                                         │
│ N  → azul                               │
│ PE → verde/amarillo                     │
│ L  → marrón/negro/gris                  │
└─────────────────────────────────────────┘
```

---

# 14.54. Tabla final de comprobación

Cuando tengas una duda en obra, sigue este orden:

| Pregunta                        | Dónde buscar                       |
| ------------------------------- | ---------------------------------- |
| ¿Qué sección necesito?          | REBT + condiciones de instalación  |
| ¿Qué intensidad soporta?        | Tablas según método de instalación |
| ¿Qué PIA corresponde?           | Cálculo + protección del conductor |
| ¿Qué caída de tensión tengo?    | Cálculo                            |
| ¿Qué tubo necesito?             | Conductores + ocupación            |
| ¿Qué color corresponde?         | Identificación normalizada         |
| ¿Qué símbolo utilizo?           | Norma / leyenda del plano          |
| ¿Qué par de apriete?            | Fabricante                         |
| ¿Cuántos amperios son X vatios? | `I = P/V`                          |
| ¿Qué potencia son X amperios?   | `P = V×I`                          |

---

# 14.55. Regla final

Las tablas rápidas sirven para una cosa:

> **hacerte más rápido, no hacerte menos cuidadoso.**

Un profesional no memoriza todos los valores.

Sabe:

1. qué dato necesita;
2. dónde encontrarlo;
3. qué fórmula aplicar;
4. qué condiciones debe comprobar;
5. cuándo un valor es solamente orientativo.

Y sobre todo sabe reconocer cuándo una tabla **no es suficiente**.

```text
MEMORIA
   ↓
TABLA
   ↓
CÁLCULO
   ↓
REGLAMENTO
   ↓
FABRICANTE
   ↓
COMPROBACIÓN
```

> **Cuando una cifra pueda afectar a la seguridad de una instalación, no la adivines. Compruébala.**
