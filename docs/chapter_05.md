# 5. Conductores

Los conductores son el elemento que transporta la energía eléctrica desde el cuadro hasta los receptores.

Para trabajar correctamente con cables no basta con saber que:

> "Este circuito lleva 2,5 mm²."

Hay que saber **por qué lleva esa sección**, qué intensidad puede soportar, cómo debe identificarse, por dónde debe instalarse y qué caída de tensión puede producirse.

Las referencias principales para este capítulo son:

* **ITC-BT-19** — Prescripciones generales de las instalaciones interiores o receptoras.
* **ITC-BT-20** — Sistemas de instalación.
* **ITC-BT-21** — Tubos y canales protectoras.
* **ITC-BT-25** — Instalaciones interiores de viviendas.

---

# 5.1. Las tres cosas que nunca debes confundir

Cuando hablamos de un conductor hay tres conceptos diferentes:

### Sección

Es el tamaño de la sección conductora, expresado en **mm²**.

Ejemplo:

```text
1,5 mm²
2,5 mm²
4 mm²
6 mm²
10 mm²
```

### Intensidad admisible

Es la intensidad que el conductor puede transportar en unas determinadas condiciones de instalación sin superar la temperatura máxima admisible.

No existe una única intensidad para cada sección.

La misma sección puede admitir intensidades diferentes dependiendo de:

* Tipo de cable.
* Tipo de aislamiento.
* Número de conductores cargados.
* Forma de instalación.
* Temperatura ambiente.
* Agrupamiento.
* Otros factores de corrección.

### Protección

Es el dispositivo que protege el circuito frente a sobreintensidades.

Por ejemplo:

```text
Conductor: 2,5 mm²
       │
       ▼
    PIA 16 A
```

La protección debe ser compatible con la capacidad del conductor y con las características del circuito.

---

# 5.2. Secciones habituales en viviendas

En instalaciones domésticas encontramos habitualmente estas secciones:

|               Sección | Usos habituales                                 |
| --------------------: | ----------------------------------------------- |
|           **1,5 mm²** | Iluminación                                     |
|           **2,5 mm²** | Tomas de corriente                              |
|             **4 mm²** | Determinados receptores de mayor potencia       |
|             **6 mm²** | Cocina, horno y determinadas cargas importantes |
|            **10 mm²** | Alimentaciones y circuitos de mayor sección     |
|            **16 mm²** | Alimentaciones principales y otras aplicaciones |
| **25 mm² o superior** | Instalaciones de mayor potencia                 |

> **Importante:** esta tabla es orientativa. No significa que una sección concreta pueda utilizarse siempre para ese uso.

La sección se determina considerando las condiciones reales de la instalación.

---

# 5.3. La tabla que debes memorizar primero

Para el trabajo habitual en viviendas, estas cinco relaciones son especialmente importantes:

| Circuito                                | Sección mínima |  PIA |
| --------------------------------------- | -------------: | ---: |
| **C1 – Iluminación**                    |        1,5 mm² | 10 A |
| **C2 – Tomas generales**                |        2,5 mm² | 16 A |
| **C3 – Cocina y horno**                 |          6 mm² | 25 A |
| **C4 – Lavadora, lavavajillas y termo** |          4 mm² | 20 A |
| **C5 – Tomas baño/cocina auxiliar**     |        2,5 mm² | 16 A |

Estos son los circuitos básicos de vivienda tratados en la ITC-BT-25.

Pero atención:

> **La intensidad del PIA no es lo mismo que la intensidad máxima admisible del conductor.**

Son conceptos relacionados, pero diferentes.

---

# 5.4. Intensidad máxima admisible

La ITC-BT-19 establece que las intensidades máximas admisibles se determinan en función de las condiciones de instalación y de las tablas correspondientes.

Por eso no debemos utilizar una tabla del tipo:

| Sección | "Intensidad máxima" |
| ------: | ------------------: |
| 1,5 mm² |                10 A |
| 2,5 mm² |                16 A |
|   4 mm² |                20 A |
|   6 mm² |                25 A |

como si fueran valores universales.

Esa tabla puede coincidir con determinadas configuraciones de circuitos de vivienda, pero **no es una tabla general de intensidades admisibles**.

---

# 5.5. Tabla práctica de referencia

Para que el aprendiz tenga una referencia inicial, podemos utilizar:

|  Sección Cu | Orden de magnitud habitual en vivienda* |
| ----------: | --------------------------------------: |
| **1,5 mm²** |                               ≈ 10–16 A |
| **2,5 mm²** |                               ≈ 16–20 A |
|   **4 mm²** |                               ≈ 20–25 A |
|   **6 mm²** |                               ≈ 25–32 A |
|  **10 mm²** |                               ≈ 40–50 A |
|  **16 mm²** |                               ≈ 50–63 A |

* **No son intensidades reglamentarias universales.**

Son únicamente una referencia para familiarizarse con el orden de magnitud.

La intensidad admisible real debe obtenerse de la tabla correspondiente al **método de instalación**, tipo de conductor y factores de corrección aplicables.

> **Regla de oro:** nunca dimensionar un circuito únicamente mirando esta tabla.

---

# 5.6. ¿Por qué un mismo cable puede soportar diferentes intensidades?

Imagina dos conductores de cobre de 2,5 mm².

Uno está:

```text
Tubo empotrado
con pocos conductores
temperatura normal
```

y otro:

```text
Canalización agrupada
muchos conductores
temperatura elevada
```

Aunque ambos sean de 2,5 mm², las condiciones de disipación del calor son diferentes.

El segundo puede necesitar una corrección de su intensidad admisible.

Por eso:

```text
SECCIÓN
   ↓
CONDICIONES DE INSTALACIÓN
   ↓
INTENSIDAD ADMISIBLE
   ↓
PROTECCIÓN
```

---

# 5.7. El calor es el enemigo del conductor

Cuando circula corriente por un conductor se produce calentamiento.

De forma simplificada:

```text
Más corriente
     ↓
Más calentamiento
     ↓
Mayor temperatura
     ↓
Mayor riesgo de deterioro
```

Por eso el dimensionamiento del conductor no consiste simplemente en preguntar:

> "¿Cuántos amperios necesito?"

Hay que preguntar:

> "¿Qué corriente circulará y en qué condiciones estará instalado el conductor?"

---

# 5.8. Colores normalizados

La identificación de los conductores es fundamental para trabajar con seguridad.

Según la ITC-BT-19:

| Función                          | Identificación |
| -------------------------------- | -------------- |
| **Neutro (N)**                   | Azul claro     |
| **Protección (PE)**              | Verde/amarillo |
| **Fase**                         | Marrón o negro |
| **Tercera fase, cuando proceda** | Gris           |

El REBT establece expresamente la identificación mediante estos colores.

En una instalación monofásica doméstica podemos encontrarnos habitualmente:

```text
FASE
Marrón / Negro
    │
    ▼
    L


NEUTRO
Azul
    │
    ▼
    N


PROTECCIÓN
Verde/amarillo
    │
    ▼
    PE
```

---

# 5.9. Una advertencia sobre los colores

El color es una ayuda para identificar un conductor.

No es una prueba de ausencia de tensión.

Especialmente en:

* Instalaciones antiguas.
* Reformas.
* Instalaciones modificadas.
* Instalaciones mal ejecutadas.

podemos encontrar conductores identificados incorrectamente.

Por tanto:

> **Nunca trabajes sobre un conductor solamente porque "es azul" o "parece que es tierra".**

La identificación debe verificarse.

---

# 5.10. Conductor de protección

El conductor de protección, normalmente denominado **PE**, tiene una función fundamental de seguridad.

Su identificación es:

**verde/amarillo**

Y, en las condiciones establecidas por el REBT, debe acompañar a los conductores activos dentro de la canalización correspondiente.

Esquema:

```text
┌───────────────────────┐
│        TUBO           │
│                       │
│  L  ────────────────  │
│  N  ────────────────  │
│  PE ────────────────  │
│                       │
└───────────────────────┘
```

No debemos pensar:

> "La tierra es un cable que solamente sirve para conectar el enchufe."

Su función forma parte del sistema de protección contra contactos indirectos.

---

# 5.11. El conductor de protección no es opcional porque "no haga falta"

Una mala práctica que puede encontrarse en instalaciones antiguas consiste en eliminar el conductor de protección porque:

> "Ese enchufe nunca lo necesita."

No se debe hacer.

La presencia del conductor de protección forma parte del diseño de la instalación y de las medidas de protección correspondientes.

---

# 5.12. Caída de tensión

Cuando circula corriente por un conductor existe una caída de tensión.

En términos sencillos:

```text
CUADRO
230 V
  │
  │
  │  conductor
  │
  ▼
RECEPTOR
menos tensión
```

Cuanto mayor sea:

* La longitud.
* La corriente.
* La resistencia del circuito.

mayor será la caída de tensión.

---

# 5.13. Límites de caída de tensión

La ITC-BT-19 establece como regla general que la caída de tensión entre el origen de la instalación interior y cualquier punto de utilización sea:

| Instalación                                               | Caída máxima |
| --------------------------------------------------------- | -----------: |
| **Circuitos interiores de viviendas**                     |      **3 %** |
| **Alumbrado, otras instalaciones interiores/receptoras**  |      **3 %** |
| **Otros usos, otras instalaciones interiores/receptoras** |      **5 %** |

Para viviendas, el valor de referencia es por tanto:

> **3 %**

La propia ITC-BT-19 indica que el cálculo debe considerar los aparatos de utilización susceptibles de funcionar simultáneamente.

---

# 5.14. ¿Qué ocurre si el cable es demasiado largo?

Imagina una vivienda donde tenemos:

```text
CUADRO
  │
  │────────────── 5 m
  │
  ▼
TOMA
```

Probablemente la caída de tensión será pequeña.

Ahora:

```text
CUADRO
  │
  │────────────────────────────────────
  │
  │              50 m
  │
  ▼
TOMA
```

La situación cambia.

Puede ser necesario aumentar la sección para mantener la caída de tensión dentro del límite.

Por eso:

> **Más longitud puede significar mayor sección.**

---

# 5.15. Fórmula simplificada de caída de tensión

Para un circuito monofásico de corriente continua o alterna en condiciones simplificadas podemos utilizar:

```text
ΔV = 2 · L · I · ρ / S
```

donde:

* **ΔV** = caída de tensión en voltios.
* **L** = longitud de ida en metros.
* **I** = intensidad en amperios.
* **ρ** = resistividad del conductor.
* **S** = sección en mm².

La fórmula exacta que corresponda dependerá del tipo de circuito y de las condiciones consideradas.

Para el aprendiz, lo importante inicialmente es entender la relación:

```text
↑ longitud
↑ corriente
     ↓
↑ caída de tensión
```

y:

```text
↑ sección
     ↓
↓ caída de tensión
```

---

# 5.16. Tubos protectores

Los conductores pueden instalarse dentro de tubos protectores.

La ITC-BT-21 establece las características de los tubos y sus dimensiones mínimas en función del número y sección de los conductores.

Los tubos pueden ser, entre otros:

* Metálicos.
* No metálicos.
* Compuestos.
* Rígidos.
* Curvables.
* Flexibles, según el sistema de instalación.

El tubo debe permitir:

* Alojar los conductores.
* Extraerlos.
* Sustituirlos.
* Realizar la instalación correctamente.

---

# 5.17. Tabla de tubos para instalaciones habituales

Para **tubos en canalizaciones empotradas**, la ITC-BT-21 proporciona una tabla de diámetros exteriores mínimos.

Una selección práctica es:

| Sección de los conductores | 1 conductor |     2 |     3 |     4 |     5 |
| -------------------------: | ----------: | ----: | ----: | ----: | ----: |
|                **1,5 mm²** |       12 mm | 12 mm | 16 mm | 16 mm | 20 mm |
|                **2,5 mm²** |       12 mm | 16 mm | 20 mm | 20 mm | 20 mm |
|                  **4 mm²** |       12 mm | 16 mm | 20 mm | 20 mm | 25 mm |
|                  **6 mm²** |       12 mm | 16 mm | 25 mm | 25 mm | 25 mm |
|                 **10 mm²** |       16 mm | 25 mm | 25 mm | 32 mm | 32 mm |
|                 **16 mm²** |       20 mm | 25 mm | 32 mm | 32 mm | 40 mm |

> **Importante:** esta tabla corresponde a una configuración concreta de canalización. No debe utilizarse indistintamente para tubos superficiales, al aire o enterrados.

---

# 5.18. Ejemplos rápidos

### Tres conductores de 1,5 mm²

Para:

```text
L + N + PE
```

la tabla indica:

**tubo mínimo: 16 mm**

---

### Tres conductores de 2,5 mm²

Para:

```text
L + N + PE
```

la tabla indica:

**tubo mínimo: 20 mm**

---

### Tres conductores de 6 mm²

```text
L + N + PE
```

La tabla indica:

**tubo mínimo: 25 mm**

---

# 5.19. ¿Puedo meter más de cinco conductores?

Sí, pero no se debe simplemente continuar la tabla.

La ITC-BT-21 establece que, para más de cinco conductores por tubo o para conductores de diferentes secciones instalados conjuntamente, la sección interior del tubo debe ser, como mínimo, **2,5 veces la sección ocupada por los conductores** en el caso de la canalización empotrada correspondiente.

Esto es importante porque:

> **No se calcula el tubo únicamente sumando las secciones nominales de los cables y escogiendo cualquier tubo.**

Hay que aplicar las condiciones de la ITC-BT-21.

---

# 5.20. Número de conductores: no confundas "tres cables" con "tres circuitos"

Ejemplo:

```text
C1
 ├── Fase
 ├── Neutro
 └── Protección
```

Son **3 conductores**.

Pero si tenemos dos circuitos:

```text
C1
 ├── Fase
 ├── Neutro
 └── Protección

C2
 ├── Fase
 ├── Neutro
 └── Protección
```

tenemos:

**6 conductores**

El tubo debe dimensionarse teniendo en cuenta todos los conductores que realmente circulen por él.

---

# 5.21. Agrupamiento de conductores

Cuando agrupamos muchos circuitos dentro de una misma canalización, el calor generado por los conductores puede acumularse.

Por eso pueden ser necesarios **factores de corrección**.

Conceptualmente:

```text
1 circuito
   ↓
poca concentración


muchos circuitos
   ↓
más calor
   ↓
menor capacidad de disipación
   ↓
corrección de la intensidad admisible
```

Este es uno de los motivos por los que no debemos coger una tabla de internet y decir:

> "El cable de 2,5 mm² aguanta 20 A."

La pregunta correcta es:

> **"¿En qué condiciones?"**

---

# 5.22. Sección del conductor y protección

Una regla práctica fundamental:

```text
CARGA
  ↓
INTENSIDAD PREVISTA
  ↓
SECCIÓN DEL CONDUCTOR
  ↓
INTENSIDAD ADMISIBLE
  ↓
PROTECCIÓN
```

El objetivo es que el conductor quede correctamente protegido frente a sobreintensidades.

No debemos plantear el problema al revés:

```text
"Necesito un PIA de 25 A,
así que voy a poner un cable que aguante 25 A."
```

Hay que estudiar el circuito completo.

---

# 5.23. El error clásico: subir el PIA

Este error es especialmente importante para un aprendiz.

Tenemos:

```text
Cable: 2,5 mm²
PIA: 16 A
```

El cliente conecta varios aparatos y el PIA dispara.

Alguien propone:

> "Ponemos uno de 20 A y solucionado."

No necesariamente.

El PIA puede estar disparando porque:

* La carga es excesiva.
* Existe una avería.
* Hay demasiados receptores.
* El circuito está mal distribuido.
* Existe un problema de instalación.

Cambiar la protección sin comprobar la sección y las condiciones del circuito puede dejar el conductor insuficientemente protegido.

> **Nunca aumentes el calibre de una protección simplemente para evitar que dispare.**

---

# 5.24. Conductores en una vivienda: ejemplo completo

Supongamos un circuito de iluminación:

```text
CUADRO
  │
  ├── PIA 10 A
  │
  ▼
TUBO
  │
  ├── Marrón 1,5 mm² → Fase
  ├── Azul 1,5 mm²   → Neutro
  └── Verde/amarillo → PE
  │
  ▼
CAJA
  │
  ▼
INTERRUPTOR
  │
  ▼
LÁMPARA
```

El aprendiz debe ser capaz de identificar:

* Circuito.
* Sección.
* Protección.
* Fase.
* Neutro.
* Protección.
* Canalización.

---

# 5.25. Tabla rápida para el taller

| Pregunta                 | Respuesta que debes buscar |
| ------------------------ | -------------------------- |
| ¿Qué sección tiene?      | mm²                        |
| ¿Qué material?           | Cobre / aluminio           |
| ¿Qué aislamiento?        | Según cable                |
| ¿Qué intensidad circula? | A                          |
| ¿Qué intensidad admite?  | Según instalación          |
| ¿Qué protección tiene?   | PIA/fusible                |
| ¿Qué color es?           | Según función              |
| ¿Por dónde va?           | Tubo/canal/etc.            |
| ¿Cuánto mide?            | Longitud                   |
| ¿Hay agrupamiento?       | Sí/No                      |
| ¿Hay caída de tensión?   | Comprobar                  |
| ¿Qué tubo necesita?      | Según ITC-BT-21            |

---

# 5.26. La chuleta de un aprendiz

Si estás delante de una instalación y no sabes por dónde empezar:

```text
1. IDENTIFICA EL CIRCUITO
          ↓
2. IDENTIFICA LOS CONDUCTORES
          ↓
3. COMPRUEBA LA SECCIÓN
          ↓
4. COMPRUEBA LA PROTECCIÓN
          ↓
5. REVISA EL MÉTODO DE INSTALACIÓN
          ↓
6. COMPRUEBA AGRUPAMIENTO Y TEMPERATURA
          ↓
7. COMPRUEBA LA CAÍDA DE TENSIÓN
          ↓
8. COMPRUEBA LA CANALIZACIÓN
```

---

# 5.27. Lo que debes memorizar

No intentes memorizar todas las tablas del REBT.

Para empezar, memoriza estas asociaciones:

```text
1,5 mm² → iluminación → C1 → 10 A

2,5 mm² → tomas → C2/C5 → 16 A

4 mm² → C4 → 20 A

6 mm² → C3 → 25 A
```

Y recuerda:

```text
AZUL
 ↓
NEUTRO


VERDE/AMARILLO
 ↓
PROTECCIÓN


MARRÓN / NEGRO / GRIS
 ↓
FASES
```

Después aprende los conceptos que permiten comprobar si esos valores son realmente adecuados:

```text
SECCIÓN
INTENSIDAD ADMISIBLE
PROTECCIÓN
CAÍDA DE TENSIÓN
MÉTODO DE INSTALACIÓN
AGRUPAMIENTO
TUBO
```

---

# 5.28. La regla de oro de los conductores

> **No existe "un cable que aguanta X amperios" sin más.**

Existe:

> **un conductor de determinada sección, material, aislamiento y método de instalación, sometido a unas condiciones concretas, que tiene una determinada intensidad admisible.**

Esta forma de pensar es mucho más importante que memorizar números.

Cuando un oficial te pregunte:

> "¿Qué cable pondrías?"

la respuesta profesional no debería ser simplemente:

> "Uno de 2,5."

La respuesta correcta empieza por:

> **"Depende del circuito, la potencia, la longitud y de cómo vaya instalado."**

Y entonces se calcula o se consulta el REBT.
