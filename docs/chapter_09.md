# 9. Puesta a tierra

La puesta a tierra es uno de los elementos fundamentales de seguridad de una instalación eléctrica.

Su objetivo principal es proporcionar un camino adecuado para las **corrientes de defecto** y mantener determinadas partes conductoras a un potencial que reduzca el riesgo para las personas.

En una instalación doméstica, cuando hablamos de tierra normalmente estamos hablando del sistema formado por:

* Electrodos de puesta a tierra.
* Conductores de tierra.
* Conductores de protección (**PE**).
* Bornes o barras de tierra.
* Uniones equipotenciales.
* Elementos metálicos que deban conectarse al sistema de protección.

Una idea fundamental:

> **La tierra no está para que "la electricidad se vaya por ahí". Está para proporcionar una protección frente a determinados defectos eléctricos.**

---

# 9.1. El concepto básico

Imagina un aparato eléctrico con una carcasa metálica.

En condiciones normales:

```text
FASE ───────────────► RECEPTOR
NEUTRO ─────────────► RECEPTOR

CARCASA
   │
   │
   PE
   │
   ▼
TIERRA
```

La carcasa no debe quedar conectada directamente a la fase.

Pero puede producirse un fallo:

```text
FASE
 │
 │  ❌ FALLO DE AISLAMIENTO
 ▼
CARCASA METÁLICA
```

Si la carcasa está correctamente conectada al PE:

```text
FASE
 │
 ▼
FALLO
 │
 ▼
CARCASA
 │
 ▼
PE
 │
 ▼
SISTEMA DE TIERRA
```

La corriente de defecto puede circular por el camino previsto y hacer actuar las protecciones correspondientes.

---

# 9.2. El sistema TT

En España es muy habitual encontrar instalaciones con esquema de conexión a tierra **TT**.

La primera T indica que un punto de la fuente de alimentación está conectado directamente a tierra.

La segunda T indica que las masas de la instalación están conectadas a una toma de tierra independiente de la puesta a tierra de la fuente.

Simplificando:

```text
              RED
               │
        ┌──────┴──────┐
        │             │
        L             N
        │             │
        │             └─────────┐
        │                       │
        │                    TIERRA
        │                       │
        │                       ▼
        │                     RED
        │
        ▼
     RECEPTOR
        │
     CARCASA
        │
        ▼
       PE
        │
        ▼
   TOMA DE TIERRA
        │
        ▼
      TERRENO
```

No hay que memorizar el dibujo sin entenderlo.

La idea fundamental es:

> **La instalación dispone de su propia conexión de las masas a tierra.**

---

# 9.3. Esquema TT simplificado

Podemos representarlo de una forma más completa:

```text
                 TRANSFORMADOR
              ┌───────────────┐
              │               │
              │     N         │
              └──────┬────────┘
                     │
                     │
                   TIERRA
                     │
                     ▼
                   ⏚ RA

                     RED
          L ────────────────────────┐
                                    │
          N ────────────────────────┤
                                    │
                                    ▼
                               INSTALACIÓN
                                    │
                                  MASA
                                    │
                                    ▼
                                   PE
                                    │
                                    ▼
                                  ⏚ RB
                                    │
                                    ▼
                                  TIERRA
```

Donde, simplificando:

* **RA** representa la puesta a tierra de la fuente.
* **RB** representa la puesta a tierra de la instalación.

En el sistema TT, estas tierras son eléctricamente independientes como parte del esquema de conexión a tierra.

---

# 9.4. ¿Por qué es importante el diferencial en TT?

Esta es una relación que debes entender.

En un esquema TT, una corriente de defecto puede tener una impedancia de retorno relativamente elevada.

Por ello, la protección mediante dispositivos diferenciales tiene un papel fundamental.

De forma simplificada:

```text
FASE
 │
 ▼
FALLO DE AISLAMIENTO
 │
 ▼
CARCASA
 │
 ▼
PE
 │
 ▼
TIERRA
 │
 ▼
TIERRA DE LA RED
 │
 ▼
TRANSFORMADOR
```

El diferencial detecta la diferencia entre la corriente que sale por los conductores activos y la que retorna por ellos.

Si se supera el umbral correspondiente:

```text
CORRIENTE DIFERENCIAL
        │
        ▼
   DIFERENCIAL
        │
        ▼
     DISPARO
```

---

# 9.5. Una idea muy importante

No pienses:

> "La tierra hace saltar el diferencial."

La realidad es más precisa.

El diferencial actúa porque detecta una **diferencia de corriente** entre los conductores activos que atraviesan el dispositivo.

La corriente de defecto puede encontrar un camino diferente al retorno normal por los conductores activos:

```text
FASE ──► CARGA ──► NEUTRO
   │
   └──► DEFECTO ──► PE ──► TIERRA
```

Por eso el diferencial detecta que:

```text
CORRIENTE QUE SALE
        ≠
CORRIENTE QUE REGRESA
```

---

# 9.6. Conductores PE

PE significa:

> **Protective Earth / conductor de protección**

En español hablamos de **conductor de protección**.

Su función es conectar las masas de los receptores y determinadas partes conductoras con el sistema de puesta a tierra.

Ejemplo:

```text
CUADRO
  │
  │ PE
  ▼
┌──────────────┐
│  RECEPTOR    │
│              │
│  CARCASA ────┤
└──────────────┘
```

El PE no es un conductor activo.

---

# 9.7. Fase, neutro y PE

Debes distinguir claramente:

| Conductor  | Identificación habitual | Función          |
| ---------- | ----------------------- | ---------------- |
| **Fase**   | Marrón, negro o gris    | Conductor activo |
| **Neutro** | Azul                    | Conductor activo |
| **PE**     | Verde/amarillo          | Protección       |

En una instalación convencional:

```text
L  → FASE
N  → NEUTRO
PE → PROTECCIÓN
```

---

# 9.8. El conductor verde/amarillo

El color verde/amarillo está reservado para la identificación del conductor de protección.

Por tanto:

```text
VERDE/AMARILLO
       ↓
      PE
       ↓
PROTECCIÓN
```

No debemos utilizarlo para:

* Fase.
* Neutro.
* Retornos.
* Señales.

Aunque alguien diga:

> "Es solo un trozo de cable."

El color tiene significado eléctrico.

---

# 9.9. ¿Dónde termina el PE?

En un cuadro podemos encontrar:

```text
              BARRA PE
        ┌──────────────────┐
        │ PE PE PE PE PE   │
        └─┬──┬──┬──┬──┬───┘
          │  │  │  │  │
          ▼  ▼  ▼  ▼  ▼
         C1 C2 C3 C4 C5
```

Desde ahí, cada circuito lleva su conductor de protección cuando corresponde.

Por ejemplo:

```text
CUADRO
 │
 ├──── L ─────► C1
 ├──── N ─────► C1
 └──── PE ────► C1
```

---

# 9.10. El PE no se corta como un conductor activo

El conductor de protección debe mantenerse disponible para cumplir su función de seguridad.

Por eso no debemos colocar interruptores o dispositivos de corte en el PE de forma improvisada.

Conceptualmente:

```text
L  ──► PROTECCIÓN / CORTE ──► CARGA
N  ──► PROTECCIÓN / CORTE ──► CARGA
PE ──────────────────────────► CARCASA
```

La configuración exacta dependerá del sistema y del diseño de la instalación.

---

# 9.11. Continuidad del conductor de protección

No basta con que exista un cable verde/amarillo.

Hay que garantizar que exista **continuidad eléctrica** desde las masas hasta el sistema de tierra.

Por ejemplo:

```text
CUADRO
  │
  ▼
PE
  │
  ▼
CAJA
  │
  ▼
PE
  │
  ▼
RECEPTOR
  │
  ▼
CARCASA
```

Si hay una interrupción:

```text
PE ────────X──────── CARCASA
```

la protección queda comprometida.

---

# 9.12. Equipotencialidad

La equipotencialidad es otro concepto que suele confundirse con la puesta a tierra.

Su objetivo es reducir las diferencias de potencial peligrosas entre diferentes masas y elementos conductores.

Imaginemos:

```text
TUBERÍA METÁLICA
       │
       │
       ├──────────────┐
       │              │
CARCASA              │
METÁLICA              │
       │              │
       └──────┬───────┘
              │
              ▼
      CONEXIÓN EQUIPOTENCIAL
```

La idea es que diferentes elementos conductores queden unidos eléctricamente de forma adecuada.

---

# 9.13. ¿Por qué necesitamos equipotencialidad?

Imagina una persona tocando simultáneamente:

```text
        CARCASA
           │
           │
        PERSONA
           │
           │
      TUBERÍA METÁLICA
```

Si existen diferencias de potencial importantes entre ambos elementos, puede circular corriente por el cuerpo.

La equipotencialidad ayuda a reducir esas diferencias.

Por eso es especialmente importante en determinados locales y situaciones.

---

# 9.14. Equipotencialidad no significa "poner todo a tierra"

Hay que distinguir:

```text
PUESTA A TIERRA
       ↓
Conexión con el sistema de tierra


EQUIPOTENCIALIDAD
       ↓
Unión eléctrica de elementos conductores
para reducir diferencias de potencial
```

Pueden estar relacionadas, pero no son exactamente lo mismo.

---

# 9.15. Equipotencialidad en baños

Los baños tienen requisitos específicos en materia de protección.

La ITC-BT-27 establece condiciones particulares para instalaciones en:

* Bañeras.
* Duchas.
* Volúmenes de protección.
* Elementos conductores.

En determinadas situaciones se requiere estudiar las conexiones equipotenciales y los elementos metálicos presentes.

Por eso:

> **En un baño no basta con mirar dónde están los enchufes.**

Hay que estudiar también:

* Volúmenes.
* Masas.
* Elementos conductores.
* Protección diferencial.
* Puesta a tierra.
* Equipotencialidad.

---

# 9.16. La toma de tierra

La instalación necesita un sistema que permita realizar la conexión con el terreno.

Puede estar formado por elementos como:

* Electrodos.
* Picas.
* Conductores enterrados.
* Anillos.
* Otros sistemas previstos reglamentariamente.

Simplificando:

```text
CONDUCTOR DE TIERRA
        │
        ▼
      ELECTRODO
        │
        ▼
       TIERRA
```

---

# 9.17. La pica de tierra

Uno de los sistemas más conocidos es la pica.

```text
         CONDUCTOR
             │
             │
             ▼
        ┌─────────┐
        │         │
        │  PICA   │
        │         │
        │         │
        │         │
        ▼         │
      TERRENO     │
```

La pica establece contacto eléctrico con el terreno.

Pero no debemos pensar que:

> "Una pica siempre es suficiente."

El sistema de puesta a tierra debe diseñarse de acuerdo con las características de la instalación y del terreno.

---

# 9.18. El terreno importa

La resistencia de puesta a tierra depende, entre otros factores, de las características del terreno.

No todos los terrenos conducen igual.

Podemos encontrarnos:

```text
TERRENO A
───────
Características favorables


TERRENO B
───────
Características diferentes


TERRENO C
───────
Mayor resistividad
```

Por eso la puesta a tierra debe **medirse**, no suponerse.

---

# 9.19. Medición de la puesta a tierra

Una de las comprobaciones importantes es medir la resistencia de puesta a tierra.

Para ello se utiliza un instrumento específico:

> **Telurómetro.**

No debemos confundirlo con un multímetro convencional.

```text
TELURÓMETRO
     │
     ├──── instalación
     │
     ├──── electrodo auxiliar
     │
     └──── electrodo auxiliar
```

El procedimiento exacto depende del método de medida y del instrumento.

---

# 9.20. ¿Qué mide el telurómetro?

De forma simplificada, permite determinar la **resistencia de puesta a tierra** del sistema.

El resultado puede expresarse en:

> **ohmios (Ω)**

Por ejemplo:

```text
R = 18 Ω
```

No debemos interpretar automáticamente:

> "18 Ω = siempre correcto."

El valor admisible depende de las condiciones de la instalación y de las protecciones.

---

# 9.21. Relación entre resistencia de tierra y diferencial

En un esquema TT, existe una relación fundamental entre:

* Resistencia de puesta a tierra.
* Sensibilidad del diferencial.
* Tensión de contacto admisible.

Una condición simplificada utilizada en el REBT es:

```text
RA × Ia ≤ U
```

donde:

* **RA** = suma de las resistencias de la toma de tierra y de los conductores de protección de las masas.
* **Ia** = corriente que asegura el funcionamiento automático del dispositivo de protección.
* **U** = tensión de contacto límite convencional.

Para determinados casos se toma:

```text
U = 50 V
```

y en situaciones particulares puede aplicarse un valor inferior.

---

# 9.22. Ejemplo sencillo

Supongamos:

```text
RA = 20 Ω
Ia = 0,03 A
```

Entonces:

```text
RA × Ia

20 × 0,03 = 0,6 V
```

El valor queda muy por debajo de 50 V.

Pero cuidado:

> Este cálculo no sustituye las comprobaciones reglamentarias ni determina por sí solo que una instalación esté correctamente ejecutada.

---

# 9.23. Medición de continuidad del PE

Además de la resistencia de tierra, es importante comprobar la continuidad de los conductores de protección.

Por ejemplo:

```text
BARRA PE
   │
   │
   ▼
CAJA
   │
   │
   ▼
RECEPTOR
   │
   ▼
CARCASA
```

Debe existir continuidad eléctrica.

Esta comprobación puede realizarse mediante instrumentos adecuados para las verificaciones de la instalación.

---

# 9.24. ¿Qué ocurre si no hay tierra?

Imagina un aparato con carcasa metálica:

```text
FASE
 │
 ▼
FALLO
 │
 ▼
CARCASA
 │
 X
 │
SIN PE
```

La carcasa puede quedar a un potencial peligroso.

Si una persona la toca y proporciona un camino hacia tierra:

```text
CARCASA
   │
   ▼
PERSONA
   │
   ▼
TIERRA
```

puede circular corriente por el cuerpo.

Por eso:

> **No debemos considerar la tierra un accesorio opcional.**

---

# 9.25. Error frecuente: "El diferencial sustituye a la tierra"

No.

El diferencial es un elemento de protección.

La puesta a tierra y el conductor PE forman parte del sistema de protección de la instalación.

Conceptualmente:

```text
         PROTECCIÓN
             │
      ┌──────┴──────┐
      │             │
      ▼             ▼
 DIFERENCIAL       PE
      │             │
      │             ▼
      │           TIERRA
      │
      ▼
 DETECCIÓN DE
 CORRIENTE DIFERENCIAL
```

Son sistemas relacionados, pero no equivalentes.

---

# 9.26. Error frecuente: utilizar el neutro como tierra

Nunca debemos pensar:

```text
"No tengo tierra.
Cojo el neutro."
```

Eso es una práctica peligrosa.

```text
N  ───────► ❌ CARCASA
```

El neutro y el conductor de protección tienen funciones diferentes.

Una instalación con un problema de puesta a tierra debe repararse correctamente.

---

# 9.27. Error frecuente: unir N y PE en un enchufe

Otra mala práctica:

```text
N ─────┐
       ├── ❌ PUENTE
PE ────┘
```

No debe hacerse para intentar conseguir una falsa "tierra".

Puede provocar:

* Corrientes por el conductor de protección.
* Disparos del diferencial.
* Tensiones peligrosas.
* Situaciones de riesgo.

---

# 9.28. Error frecuente: cortar el PE

Nunca debemos cortar el conductor de protección simplemente porque:

> "Ese aparato no lo necesita."

Si el circuito requiere PE, debe mantenerse.

```text
L  ─────►
N  ─────►
PE ─────►
```

Los tres conductores tienen funciones diferentes.

---

# 9.29. Error frecuente: confiar en el color

Encontrar un conductor verde/amarillo no demuestra que exista una puesta a tierra correcta.

Podemos tener:

```text
VERDE/AMARILLO
       │
       X
    INTERRUPCIÓN
```

El color es una identificación.

La protección real depende de que exista:

* Continuidad.
* Conexiones correctas.
* Sistema de puesta a tierra.
* Valores adecuados.
* Protecciones correctamente instaladas.

---

# 9.30. Error frecuente: medir con un multímetro y darlo por bueno

Un multímetro puede servir para determinadas comprobaciones, pero:

> **No sustituye al telurómetro para medir correctamente la resistencia de puesta a tierra.**

No debemos hacer:

```text
MULTÍMETRO
    │
    ▼
"Me da continuidad"
    │
    ▼
"Entonces la tierra está perfecta."
```

La continuidad y la resistencia de puesta a tierra son comprobaciones diferentes.

---

# 9.31. Error frecuente: pensar que cuanto menor, siempre mejor

En términos generales, una baja resistencia de puesta a tierra es favorable, pero no debemos convertirlo en:

> "Cuanto menor sea el número, todo está bien."

Hay que comprobar el valor obtenido en función de:

* Sistema de conexión a tierra.
* Protecciones.
* Características de la instalación.
* Condiciones reglamentarias.

---

# 9.32. Esquema completo de protección

Podemos imaginar el camino de protección así:

```text
                 RED
                  │
                  ▼
             CUADRO ELÉCTRICO
                  │
            ┌─────┴─────┐
            │           │
            ▼           ▼
          FASE         PE
            │           │
            ▼           ▼
         RECEPTOR     CARCASA
            │           │
            │           ▼
            │          PE
            │           │
            │           ▼
            │      PUESTA A TIERRA
            │           │
            │           ▼
            │         TERRENO
            │
            ▼
         NEUTRO
```

Si aparece un defecto:

```text
FASE
 │
 ▼
DEFECTO
 │
 ▼
CARCASA
 │
 ▼
PE
 │
 ▼
TIERRA
 │
 ▼
SISTEMA DE RED
```

El sistema de protección debe provocar la actuación automática del dispositivo correspondiente.

---

# 9.33. Qué debe comprobar un aprendiz

Cuando estés delante de una instalación, acostúmbrate a preguntar:

### 1. ¿Existe conductor PE?

```text
¿Hay verde/amarillo?
```

Pero no te quedes ahí.

### 2. ¿Tiene continuidad?

```text
¿Está realmente conectado?
```

### 3. ¿Dónde está la barra de tierra?

```text
CUADRO → BARRA PE
```

### 4. ¿Dónde está la puesta a tierra?

```text
BARRA PE → CONDUCTOR DE TIERRA → ELECTRODO
```

### 5. ¿Está correctamente conectada?

Hay que comprobarlo.

### 6. ¿Se ha medido?

La instalación debe verificarse mediante las comprobaciones correspondientes.

---

# 9.34. Secuencia práctica de comprobación

Para una instalación sin tensión y aplicando los procedimientos de seguridad correspondientes:

```text
1. IDENTIFICAR EL SISTEMA
          ↓
2. LOCALIZAR LA BARRA PE
          ↓
3. COMPROBAR CONEXIONES
          ↓
4. COMPROBAR CONTINUIDAD
          ↓
5. MEDIR LA PUESTA A TIERRA
          ↓
6. COMPROBAR PROTECCIONES
          ↓
7. DOCUMENTAR RESULTADOS
```

Las mediciones deben realizarse con instrumentos adecuados y por personal que conozca el procedimiento.

---

# 9.35. Lo que te puede preguntar el oficial

### "¿Qué es el PE?"

El conductor de protección.

### "¿Para qué sirve?"

Para conectar las masas y elementos que corresponda al sistema de protección y proporcionar un camino para las corrientes de defecto.

### "¿Qué sistema de tierra tenemos normalmente aquí?"

En muchas instalaciones de baja tensión en España, esquema TT.

Pero hay que identificar siempre la instalación concreta.

### "¿Cómo medimos la tierra?"

Con un telurómetro y el método de medida adecuado.

### "¿En qué unidad?"

Ohmios.

### "¿Qué diferencia hay entre tierra y equipotencialidad?"

La puesta a tierra conecta el sistema de protección con tierra; la equipotencialidad une elementos conductores para reducir diferencias de potencial.

### "¿Puedo utilizar el neutro como tierra?"

No.

### "¿Puedo quitar el PE si el aparato funciona?"

No.

---

# 9.36. Chuleta rápida

```text
PE
│
└── CONDUCTOR DE PROTECCIÓN


TT
│
└── SISTEMA DE CONEXIÓN A TIERRA


TIERRA
│
└── ELECTRODO + CONDUCTORES + CONEXIONES


EQUIPOTENCIALIDAD
│
└── REDUCIR DIFERENCIAS DE POTENCIAL


TELURÓMETRO
│
└── MEDIR RESISTENCIA DE PUESTA A TIERRA


DIFERENCIAL
│
└── DETECTAR CORRIENTE DIFERENCIAL


VERDE/AMARILLO
│
└── PE
```

---

# 9.37. La regla de oro

> **La tierra no se supone: se instala, se conecta, se comprueba y se mide.**

Y recuerda:

```text
NO HAY TIERRA
      ≠
"NO PASA NADA"

HAY PE
      ≠
"LA TIERRA ESTÁ BIEN"

HAY CONTINUIDAD
      ≠
"LA RESISTENCIA DE TIERRA ES CORRECTA"
```

Una instalación segura necesita que todo el sistema de protección esté correctamente diseñado, instalado y verificado.

---

# 9.38. Para el aprendiz

Si mañana llegas a una obra y el oficial te dice:

> **"Mira la tierra."**

No te limites a buscar un cable verde/amarillo.

Piensa:

```text
¿DÓNDE ESTÁ LA BARRA PE?
          ↓
¿DÓNDE VA EL PE?
          ↓
¿DÓNDE ESTÁ EL CONDUCTOR DE TIERRA?
          ↓
¿DÓNDE ESTÁ EL ELECTRODO?
          ↓
¿HAY CONTINUIDAD?
          ↓
¿SE HA MEDIDO?
          ↓
¿EL RESULTADO ES ADECUADO?
```

Ese es el cambio de mentalidad que buscamos en este manual:

> **No aprender únicamente qué cable hay que conectar, sino entender qué función cumple y cómo se comprueba que realmente protege.**
