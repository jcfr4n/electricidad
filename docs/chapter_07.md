# 7. Cuadros eléctricos

El cuadro eléctrico es el **centro de protección y distribución** de una instalación.

Desde él salen los diferentes circuitos que alimentan:

* Iluminación.
* Tomas de corriente.
* Cocina y horno.
* Lavadora.
* Lavavajillas.
* Termo.
* Climatización.
* Otros receptores.

Pero el cuadro no es simplemente una caja donde "se juntan los cables".

Cada elemento tiene una función concreta.

---

# 7.1. El cuadro de una vivienda

Un cuadro doméstico típico puede contener:

```text
RED
 │
 ▼
┌──────────────────────┐
│       CUADRO         │
│                      │
│  IGA                 │
│   │                  │
│  SPD                 │
│   │                  │
│  DIFERENCIAL         │
│   │                  │
│  PIAs                │
│   ├── C1             │
│   ├── C2             │
│   ├── C3             │
│   ├── C4             │
│   └── C5             │
│                      │
└──────────────────────┘
```

Los elementos concretos y su configuración dependen de las características de la instalación.

---

# 7.2. Orden general que debes entender

En una instalación de vivienda, conceptualmente podemos pensar:

```text
RED
 │
 ▼
IGA
 │
 ▼
PROTECCIÓN CONTRA SOBRETENSIONES
 │
 ▼
DIFERENCIAL
 │
 ▼
PIAs
 │
 ├──── C1
 ├──── C2
 ├──── C3
 ├──── C4
 └──── C5
```

No memorices este dibujo como si fuera válido para cualquier cuadro.

Lo importante es entender **qué función desempeña cada elemento** y comprobar siempre el esquema correspondiente al material y a la instalación.

---

# 7.3. IGA

IGA significa:

> **Interruptor General Automático**

Es uno de los elementos fundamentales del cuadro.

Su función es proteger la instalación frente a **sobrecargas y cortocircuitos**, además de permitir el corte general de la instalación.

Conceptualmente:

```text
RED
 │
 ▼
┌─────────┐
│   IGA   │
└─────────┘
 │
 ▼
RESTO DEL CUADRO
```

Cuando abrimos el IGA, dejamos sin alimentación la instalación aguas abajo del mismo.

---

# 7.4. ¿Qué hace realmente el IGA?

Supongamos una vivienda con varios circuitos.

Si tenemos:

```text
C1 → 10 A
C2 → 16 A
C3 → 25 A
C4 → 20 A
C5 → 16 A
```

no significa que debamos instalar un IGA cuya intensidad sea simplemente la suma:

```text
10 + 16 + 25 + 20 + 16 = 87 A
```

No funciona así.

El dimensionamiento del IGA depende de la instalación, la previsión de cargas y las condiciones correspondientes.

> **Nunca dimensionamos el IGA sumando directamente los calibres de los PIAs.**

---

# 7.5. IGA: qué debe recordar el aprendiz

Cuando el oficial pregunte:

> "¿Para qué sirve el IGA?"

Una buena respuesta es:

> **"Es el interruptor general automático que protege la instalación frente a sobrecargas y cortocircuitos y permite realizar el corte general."**

---

# 7.6. ICP: un elemento histórico

ICP significa:

> **Interruptor de Control de Potencia**

Durante muchos años se utilizó como elemento de control de la potencia contratada.

El aprendiz puede encontrárselo en cuadros antiguos:

```text
┌─────────┐
│   ICP   │
└─────────┘
```

Pero hay que tener cuidado:

> **El ICP no debe tratarse como un componente equivalente al IGA en las instalaciones actuales.**

Con los contadores digitales y los sistemas actuales de control de potencia, el control de la potencia contratada se realiza normalmente mediante el equipo de medida.

Por eso el ICP tiene hoy principalmente interés para:

* Reconocer instalaciones antiguas.
* Entender cuadros existentes.
* Trabajar en reformas.
* Identificar componentes históricos.

---

# 7.7. No confundas ICP e IGA

| Elemento | Función principal                        |
| -------- | ---------------------------------------- |
| **IGA**  | Protección general de la instalación     |
| **ICP**  | Control histórico de potencia contratada |

Un error típico de un aprendiz es decir:

> "El ICP es el automático general."

No.

Son elementos diferentes.

---

# 7.8. Protector contra sobretensiones

El protector contra sobretensiones, habitualmente denominado **SPD**, protege la instalación y los equipos frente a determinados fenómenos de sobretensión.

Podemos encontrarnos con protección frente a:

* Sobretensiones transitorias.
* Sobretensiones temporales, según el dispositivo y el esquema utilizado.

El objetivo es limitar los efectos de una sobretensión sobre la instalación.

Conceptualmente:

```text
RED
 │
 ▼
SPD
 │
 ▼
INSTALACIÓN
```

---

# 7.9. ¿De dónde pueden venir las sobretensiones?

Las sobretensiones pueden tener diferentes orígenes.

Por ejemplo:

```text
RAYO
  │
  ▼
RED
  │
  ▼
SOBRETENSIÓN
```

También pueden producirse por determinadas maniobras o perturbaciones de la red.

No debemos pensar únicamente en:

> "Un rayo que cae directamente sobre la casa."

Una sobretensión puede propagarse por la red sin que el rayo impacte físicamente en la vivienda.

---

# 7.10. Diferencial

El interruptor diferencial es uno de los elementos de protección más importantes de una vivienda.

Su función es detectar una **corriente diferencial o de fuga** y desconectar el circuito cuando se supera el umbral correspondiente.

En viviendas es habitual encontrar diferenciales de:

> **30 mA**

como medida de protección de las personas frente a determinados contactos indirectos y fugas.

---

# 7.11. Cómo funciona un diferencial

Imaginemos:

```text
FASE
 │
 │ 10 A
 ▼
RECEPTOR
 │
 │ 10 A
 ▼
NEUTRO
```

La corriente que sale por la fase debe regresar por el neutro.

Si:

```text
FASE → 10 A
NEUTRO ← 10 A
```

el diferencial no detecta una diferencia significativa entre ambas corrientes.

Pero imaginemos que parte de la corriente se desvía:

```text
             ┌──────► TIERRA
             │
FASE ──► RECEPTOR
             │
             └──────► 9,97 A → NEUTRO
```

Entonces:

```text
10 A - 9,97 A = 0,03 A
```

es decir:

```text
30 mA
```

El diferencial puede detectar esa diferencia y desconectar.

---

# 7.12. Esquema simplificado del diferencial

```text
             DIFERENCIAL
          ┌───────────────┐
FASE ────►│               │────► FASE
          │      ΔI       │
NEUTRO ──►│               │────► NEUTRO
          └───────────────┘
                  │
                  ▼
             DETECCIÓN
             DE FUGA
```

La idea fundamental es:

> **Lo que entra por fase debe coincidir con lo que vuelve por neutro.**

Si existe una diferencia significativa, el diferencial actúa.

---

# 7.13. Una confusión muy habitual

El diferencial **no sustituye al magnetotérmico**.

Cada uno protege frente a situaciones diferentes.

| Elemento           | Protege principalmente frente a |
| ------------------ | ------------------------------- |
| **Magnetotérmico** | Sobrecargas y cortocircuitos    |
| **Diferencial**    | Corrientes diferenciales/fugas  |

Por eso encontramos ambos en el cuadro.

---

# 7.14. Magnetotérmicos

Los interruptores magnetotérmicos, habitualmente llamados:

> **PIA**

protegen los diferentes circuitos frente a sobrecargas y cortocircuitos.

Por ejemplo:

```text
DIFERENCIAL
     │
     ├── PIA C1 → Iluminación
     │
     ├── PIA C2 → Tomas
     │
     ├── PIA C3 → Cocina
     │
     ├── PIA C4 → Lavadora/termo
     │
     └── PIA C5 → Tomas auxiliares
```

Cada PIA protege el circuito correspondiente.

---

# 7.15. PIA

PIA significa:

> **Pequeño Interruptor Automático**

En una vivienda encontramos habitualmente:

| Circuito | Uso                                   | PIA habitual según ITC-BT-25 |
| -------- | ------------------------------------- | ---------------------------: |
| **C1**   | Iluminación                           |                         10 A |
| **C2**   | Tomas generales                       |                         16 A |
| **C3**   | Cocina y horno                        |                         25 A |
| **C4**   | Lavadora, lavavajillas y termo        |                         20 A |
| **C5**   | Tomas de baños y auxiliares de cocina |                         16 A |

Estos valores corresponden a la configuración básica de circuitos de vivienda de la ITC-BT-25.

---

# 7.16. El magnetotérmico tiene dos protecciones

El nombre "magnetotérmico" nos da una pista.

Tiene dos mecanismos de disparo:

```text
MAGNETOTÉRMICO
      │
      ├── TÉRMICO
      │      ↓
      │   SOBRECARGA
      │
      └── MAGNÉTICO
             ↓
        CORTOCIRCUITO
```

### Protección térmica

Actúa frente a sobrecargas mantenidas.

### Protección magnética

Actúa rápidamente frente a corrientes muy elevadas, como las asociadas a cortocircuitos.

---

# 7.17. Peines

El peine eléctrico es un accesorio utilizado para distribuir la alimentación entre varios dispositivos modulares.

Ejemplo:

```text
              PEINE
────────────────────────────────
      │       │       │       │
      ▼       ▼       ▼       ▼
     PIA     PIA     PIA     PIA
      │       │       │       │
     C1      C2      C3      C4
```

Su ventaja principal es conseguir una distribución:

* Más limpia.
* Más ordenada.
* Más rápida de montar.
* Más fiable cuando se utiliza el accesorio adecuado.

---

# 7.18. Peine de fase

Un peine puede distribuir la fase a varios dispositivos.

Por ejemplo:

```text
FASE
 │
 ▼
═══════════════════════════
   │      │      │      │
   ▼      ▼      ▼      ▼
  C1     C2     C3     C4
```

Pero hay que utilizar el peine compatible con:

* El tipo de aparato.
* El número de polos.
* La tensión.
* La intensidad admisible.
* La disposición del cuadro.

---

# 7.19. Nunca cortes un peine "a ojo"

Un error bastante habitual en montajes rápidos es cortar el peine sin comprobar:

* Dónde debe comenzar.
* Cuántos módulos alimentará.
* Qué terminales quedarán libres.
* Cómo quedarán las tapas finales.
* Qué intensidad debe soportar.

Una vez colocado, el peine debe quedar correctamente protegido y aislado.

---

# 7.20. Barra de neutro

La barra de neutro permite realizar la distribución y conexión de los conductores neutros.

Conceptualmente:

```text
                 BARRA N
             ┌──────────────┐
             │ N  N  N  N  │
             └─┬──┬──┬──┬──┘
               │  │  │  │
              C1 C2 C3 C4
```

En un cuadro podemos encontrar diferentes configuraciones según el número de diferenciales y la organización del cuadro.

---

# 7.21. Una regla importantísima: el neutro debe pasar por el diferencial

Si un circuito está protegido por un diferencial determinado:

```text
FASE ───► DIFERENCIAL ───► CIRCUITO
NEUTRO ─► DIFERENCIAL ───► CIRCUITO
```

ambos conductores activos deben pasar por el diferencial correspondiente.

No debemos hacer:

```text
FASE ───► DIFERENCIAL ───► CIRCUITO

NEUTRO ──────────────────► CIRCUITO
```

porque el diferencial ya no verá correctamente la corriente que entra y sale.

---

# 7.22. El error del neutro mezclado

Este es uno de los fallos que más puede encontrarse al trabajar sobre cuadros.

Imagina dos diferenciales:

```text
DIF 1
 │
 ├── C1
 └── C2

DIF 2
 │
 ├── C3
 └── C4
```

Si accidentalmente conectamos el neutro de C3 en la barra de neutros asociada al diferencial 1:

```text
DIF 1 ──► FASE C3
       └─► NEUTRO C3 ❌
```

podemos provocar disparos inesperados del diferencial.

Por eso:

> **Cada circuito debe tener correctamente asociado su neutro al diferencial que lo protege.**

---

# 7.23. Barra de tierra

La barra de tierra, o barra de conductores de protección, permite distribuir los conductores **PE**.

Ejemplo:

```text
              BARRA PE
        ┌──────────────────┐
        │ PE PE PE PE PE   │
        └─┬──┬──┬──┬──┬───┘
          │  │  │  │  │
         C1 C2 C3 C4 C5
```

Los conductores de protección de los diferentes circuitos se conectan a esta distribución.

---

# 7.24. Neutro y tierra no son lo mismo

Esta diferencia debes aprenderla desde el primer día.

```text
NEUTRO
   ↓
N
   ↓
CONDUCTOR ACTIVO


TIERRA / PROTECCIÓN
   ↓
PE
   ↓
CONDUCTOR DE PROTECCIÓN
```

No deben tratarse como si fueran simplemente:

> "El cable azul y el verde."

Son conductores con **funciones diferentes**.

---

# 7.25. Esquema general simplificado

Una configuración conceptual puede representarse así:

```text
                 RED
                  │
                  ▼
              ┌───────┐
              │  IGA  │
              └───┬───┘
                  │
                  ▼
              ┌───────┐
              │  SPD  │
              └───┬───┘
                  │
                  ▼
           ┌─────────────┐
           │ DIFERENCIAL │
           └──────┬──────┘
                  │
          ┌───────┴─────────┐
          │                 │
          ▼                 ▼
      PEINE FASE         BARRA N
          │                 │
     ┌────┼────┐       ┌────┼────┐
     ▼    ▼    ▼       ▼    ▼    ▼
    C1   C2   C3      N1   N2   N3
     │    │    │
     ▼    ▼    ▼
  CIRCUITOS
```

Y los conductores PE:

```text
TIERRA
  │
  ▼
BARRA PE
  │
  ├────► PE C1
  ├────► PE C2
  ├────► PE C3
  ├────► PE C4
  └────► PE C5
```

---

# 7.26. Esquema paso a paso: entrada al cuadro

Vamos a seguir el recorrido desde la alimentación.

## Paso 1 — Entrada

Llegan al cuadro los conductores correspondientes a la alimentación:

```text
L ────────────────┐
N ────────────────┤
PE ───────────────┘
```

El PE tiene su propio recorrido de protección.

---

## Paso 2 — IGA

La alimentación activa pasa por el IGA:

```text
L ─────► IGA ─────►
N ─────► IGA* ────►
```

* La configuración de polos depende del tipo de instalación y del aparato.

---

## Paso 3 — Protección contra sobretensiones

Después se incorpora el sistema de protección contra sobretensiones correspondiente:

```text
IGA
 │
 ▼
SPD
 │
 ▼
RESTO DEL CUADRO
```

La conexión exacta del SPD depende del tipo de protector y del esquema de conexión.

---

## Paso 4 — Diferencial

Los conductores activos del circuito pasan por el diferencial correspondiente:

```text
L ─────────► DIF ─────────►
N ─────────► DIF ─────────►
```

---

## Paso 5 — Distribución de fase

La fase se distribuye hacia los PIAs:

```text
              PEINE
                │
     ═══════════╪═══════════
                │
        ┌───────┼───────┐
        ▼       ▼       ▼
       PIA     PIA     PIA
        │       │       │
       C1      C2      C3
```

---

## Paso 6 — Distribución de neutro

Los neutros correspondientes se distribuyen desde la barra o sistema de neutro asociado:

```text
BARRA N
 │
 ├────► N C1
 ├────► N C2
 └────► N C3
```

Recordando siempre qué diferencial protege cada circuito.

---

## Paso 7 — Distribución de protección

Los PE se conectan a la barra de protección:

```text
BARRA PE
 │
 ├────► PE C1
 ├────► PE C2
 └────► PE C3
```

---

# 7.27. Esquema completo de un circuito

Para C1:

```text
                 C1
                  │
FASE ──► PIA 10 A ├────────► L
                  │
NEUTRO ───────────┼────────► N
                  │
PE ───────────────┴────────► PE
```

En realidad, fase y neutro pasan por los elementos correspondientes de protección y corte, mientras que el PE sigue su camino de protección.

---

# 7.28. Esquema de un cuadro de cinco circuitos

```text
                         ALIMENTACIÓN
                              │
                       ┌──────┴──────┐
                       │             │
                       L             N
                       │             │
                    ┌──▼─────────────▼──┐
                    │        IGA         │
                    └──────────┬────────┘
                               │
                               ▼
                              SPD
                               │
                               ▼
                         DIFERENCIAL
                               │
                ┌──────────────┴──────────────┐
                │                             │
              FASE                         NEUTRO
                │                             │
             PEINE                          BARRA N
                │                             │
        ┌───────┼───────┬───────┬───────┐     │
        │       │       │       │       │     │
        ▼       ▼       ▼       ▼       ▼     │
       C1      C2      C3      C4      C5     │
        │       │       │       │       │     │
        └───────┴───────┴───────┴───────┴─────┘
                                               
                       BARRA PE
                          │
          ┌───────────────┼───────────────┐
          │       │       │       │       │
         PE C1   PE C2   PE C3   PE C4   PE C5
```

Este es un **esquema conceptual**, no un plano de montaje.

La configuración real debe realizarse conforme al esquema de la instalación, las características de los dispositivos y el REBT.

---

# 7.29. Un detalle importante: uno o varios diferenciales

Una vivienda puede tener uno o varios diferenciales.

No debemos pensar:

> "Todas las viviendas tienen exactamente un diferencial."

La configuración dependerá, entre otras cosas, de la organización de los circuitos y de las prescripciones aplicables.

Cuando existen varios:

```text
                 IGA
                  │
                 SPD
                  │
          ┌───────┴───────┐
          │               │
         DIF 1           DIF 2
          │               │
       ┌──┴──┐         ┌──┴──┐
       C1    C2         C3    C4
```

Esto permite distribuir los circuitos y evitar que una incidencia deje necesariamente toda la vivienda sin suministro.

---

# 7.30. El diferencial y sus PIAs

Un diferencial puede proteger varios PIAs.

Por ejemplo:

```text
DIFERENCIAL
     │
     ├── PIA C1
     ├── PIA C2
     ├── PIA C3
     └── PIA C4
```

Pero hay que dimensionar y organizar correctamente:

* El diferencial.
* Los PIAs.
* El peine.
* Los conductores.
* Los neutros.

---

# 7.31. Orden y limpieza del cuadro

Un buen cuadro debería permitir identificar rápidamente:

* De dónde viene la alimentación.
* Qué elemento es el IGA.
* Qué diferenciales existen.
* Qué PIA corresponde a cada circuito.
* Dónde está el neutro.
* Dónde está la protección.
* Qué circuito hay que desconectar.

Un cuadro lleno de cables cruzados:

```text
╲  │ ╱
 ──┼──
╱  │  ╲
  ╲│╱
```

no es una buena instalación aunque funcione.

Un cuadro ordenado:

```text
IGA
 │
SPD
 │
DIF
 │
PEINE
 │
C1 C2 C3 C4 C5
```

es mucho más fácil de mantener.

---

# 7.32. Identificación

Los circuitos deberían estar identificados.

Por ejemplo:

```text
C1  ILUMINACIÓN
C2  TOMAS GENERALES
C3  COCINA / HORNO
C4  LAVADORA / LAVAVAJILLAS / TERMO
C5  TOMAS BAÑO / COCINA
```

Así, si el oficial dice:

> "Desconecta C3."

no tienes que adivinar cuál es.

---

# 7.33. El cuadro no se cablea "por intuición"

Una de las cosas más importantes que debe aprender un aprendiz es que el cableado de un cuadro no se improvisa.

Antes de conectar hay que conocer:

1. Esquema.
2. Alimentación.
3. Protecciones.
4. Distribución.
5. Secciones.
6. Neutros.
7. Tierra.
8. Características de los dispositivos.

Después se realiza el montaje.

---

# 7.34. Secuencia práctica de montaje

En un montaje nuevo podemos pensar en esta secuencia:

```text
1. IDENTIFICAR ENVOLVENTE
          ↓
2. COLOCAR APARATOS
          ↓
3. IDENTIFICAR ENTRADAS Y SALIDAS
          ↓
4. COLOCAR PEINES
          ↓
5. PREPARAR NEUTROS
          ↓
6. PREPARAR PE
          ↓
7. CABLEAR
          ↓
8. IDENTIFICAR CIRCUITOS
          ↓
9. COMPROBAR APRIETES
          ↓
10. COMPROBAR EL ESQUEMA
          ↓
11. REALIZAR PRUEBAS
```

---

# 7.35. El apriete de los bornes

Un cuadro puede estar perfectamente diseñado y fallar por una mala conexión.

Un borne demasiado flojo puede provocar:

```text
MAL CONTACTO
     ↓
RESISTENCIA
     ↓
CALOR
     ↓
DAÑO
```

Por eso los bornes deben apretarse según las indicaciones del fabricante, utilizando el par de apriete especificado cuando corresponda.

> **No aprietes "a muerte". Aprieta con el par indicado por el fabricante.**

---

# 7.36. El error de dejar cobre desnudo

Al conectar un conductor:

```text
CORRECTO

┌─────────────┐
│   BORNE     │
│───────┐     │
│       │     │
└───────┴─────┘
        │
       CABLE
```

No debemos dejar una longitud innecesaria de cobre fuera del borne.

Una mala preparación puede provocar:

* Contactos accidentales.
* Cortocircuitos.
* Deterioro.
* Problemas de aislamiento.

---

# 7.37. Punteras o terminales

Dependiendo del tipo de conductor y del borne utilizado, pueden emplearse punteras o terminales adecuados.

Esto es especialmente importante con determinados conductores flexibles.

El objetivo es conseguir:

* Buen contacto eléctrico.
* Sujeción mecánica adecuada.
* Acabado profesional.

Siempre hay que respetar las instrucciones del fabricante del dispositivo.

---

# 7.38. El error de mezclar neutros

Recuerda este esquema:

```text
DIF 1
 │
 ├── C1
 └── C2

DIF 2
 │
 ├── C3
 └── C4
```

Los neutros deben mantenerse asociados correctamente:

```text
BARRA N1
 ├── N C1
 └── N C2


BARRA N2
 ├── N C3
 └── N C4
```

No:

```text
N C1 ─┐
N C2 ─┼── Barra cualquiera
N C3 ─┤
N C4 ─┘
```

si esa distribución no corresponde al esquema del cuadro.

---

# 7.39. El error de unir neutro y tierra

En un cuadro de distribución interior no debemos realizar conexiones improvisadas entre:

```text
N ──────────┐
            ├── ❌
PE ─────────┘
```

El tratamiento del neutro y del conductor de protección depende del esquema de puesta a tierra y del punto de la instalación.

En una vivienda no se debe hacer un puente N-PE simplemente porque:

> "Así no dispara el diferencial."

Si un diferencial dispara, hay que buscar la causa.

---

# 7.40. Cuando el diferencial dispara

Nunca debemos solucionar el problema de esta manera:

```text
DIFERENCIAL DISPARA
       ↓
"Lo puenteamos"
       ↓
PROBLEMA RESUELTO
```

No.

La secuencia correcta es:

```text
DIFERENCIAL DISPARA
       ↓
DESCONECTAR CARGAS
       ↓
IDENTIFICAR CIRCUITO
       ↓
COMPROBAR INSTALACIÓN
       ↓
LOCALIZAR FUGA / FALLO
       ↓
REPARAR
       ↓
COMPROBAR
```

---

# 7.41. Lo que debes reconocer de un vistazo

Cuando abras un cuadro deberías poder identificar:

```text
┌───────────────────────────────┐
│ IGA                           │
│ SPD                           │
│ DIFERENCIAL                   │
│                               │
│ C1  C2  C3  C4  C5            │
│                               │
│ PEINE                         │
│                               │
│ BARRA N                       │
│ BARRA PE                      │
└───────────────────────────────┘
```

No necesitas desmontarlo para saber qué es cada cosa.

---

# 7.42. Preguntas típicas del oficial

### "¿Qué hace el IGA?"

Protege y permite el corte general de la instalación.

### "¿Para qué sirve el diferencial?"

Detecta corrientes diferenciales/fugas y desconecta cuando se supera su umbral.

### "¿Qué protege un magnetotérmico?"

El circuito frente a sobrecargas y cortocircuitos.

### "¿Para qué sirve el peine?"

Para realizar una distribución ordenada de alimentación entre dispositivos compatibles.

### "¿Dónde conectas los PE?"

En la barra o sistema de distribución de conductores de protección.

### "¿Y los neutros?"

En el sistema de neutro correspondiente al diferencial que protege cada circuito.

### "¿Qué es ese ICP?"

Un dispositivo de control de potencia utilizado históricamente, que puede encontrarse en instalaciones antiguas.

---

# 7.43. La chuleta del cuadro

```text
IGA
│
├── CORTE GENERAL
└── PROTECCIÓN GENERAL


SPD
│
└── SOBRETENSIONES


DIFERENCIAL
│
└── FUGAS / CORRIENTE DIFERENCIAL


PIA
│
└── SOBRECARGA + CORTOCIRCUITO


PEINE
│
└── DISTRIBUCIÓN


BARRA N
│
└── NEUTROS


BARRA PE
│
└── PROTECCIÓN / TIERRA


ICP
│
└── CONTROL HISTÓRICO DE POTENCIA
```

---

# 7.44. El esquema mental que debes llevarte

Cuando mires un cuadro, piensa:

```text
             ¿DE DÓNDE VIENE?
                    │
                    ▼
                   IGA
                    │
                    ▼
                  SPD
                    │
                    ▼
              ¿QUIÉN PROTEGE?
                    │
                    ▼
               DIFERENCIAL
                    │
                    ▼
              ¿QUÉ CIRCUITO?
                    │
                    ▼
                  PIA
                    │
                    ▼
                RECEPTOR
```

Y en paralelo:

```text
NEUTRO ─────────► BARRA N ─────► CIRCUITOS


PE ─────────────► BARRA PE ─────► CIRCUITOS
```

---

# 7.45. La regla de oro del cuadro

> **Cada dispositivo debe tener una función, cada circuito debe estar correctamente protegido y cada conductor debe terminar donde corresponde.**

Y una segunda regla todavía más importante:

> **Nunca cablees un cuadro "de memoria" si no conoces el esquema concreto.**

Dos cuadros pueden parecer prácticamente iguales y tener configuraciones diferentes.

Antes de tocar:

```text
PARA
 ↓
IDENTIFICA
 ↓
ENTIENDE
 ↓
CORTA Y VERIFICA AUSENCIA DE TENSIÓN
 ↓
TRABAJA
 ↓
COMPRUEBA
```

El cuadro eléctrico es uno de los lugares donde más claramente se nota la diferencia entre **"saber conectar cables"** y **saber trabajar como electricista**.
