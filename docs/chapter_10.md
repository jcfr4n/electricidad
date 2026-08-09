# 10. Interpretación de planos

Un electricista no trabaja solamente con cables, tubos y herramientas. También trabaja con **planos y esquemas**.

Antes de empezar una instalación, el plano nos dice:

* dónde están los mecanismos;
* dónde están los puntos de luz;
* dónde están las tomas de corriente;
* qué circuito alimenta cada elemento;
* dónde está el cuadro;
* por dónde discurren las canalizaciones;
* qué protecciones tiene cada circuito;
* cómo están conectados los diferentes elementos.

Aprender a leer un plano eléctrico no significa memorizar todos los símbolos. Significa aprender a **seguir la instalación sobre el papel**.

> **El plano es la instalación antes de construirla.**

---

# 10.1. Los tres dibujos que más te vas a encontrar

En instalaciones eléctricas de viviendas podemos encontrarnos diferentes formas de representación. Para empezar, quédate con estas tres:

| Representación | Responde principalmente a |
|---|---|
| Plano de vivienda / planta | ¿Dónde está cada elemento? |
| Esquema unifilar | ¿Cómo está organizada la instalación? |
| Esquema multifilar | ¿Cómo se conectan los conductores? |

Una forma sencilla de recordarlo:

```text
PLANO DE PLANTA
       ↓
     DÓNDE


UNIFILAR
       ↓
      QUÉ


MULTIFILAR
       ↓
     CÓMO
```

---

# 10.2. Plano de vivienda

El plano de planta representa la vivienda vista desde arriba. Sobre él se colocan los elementos de la instalación eléctrica. Por ejemplo:

* puntos de luz;
* interruptores;
* conmutadores;
* tomas de corriente;
* tomas específicas;
* cuadro eléctrico;
* cajas de conexión;
* recorridos de canalizaciones.

Un plano real puede parecer bastante más complicado que un dibujo de libro. Y eso es precisamente lo que queremos que el aprendiz aprenda a manejar.

---

# 10.3. Lo primero: localizar el cuadro

Cuando recibas un plano eléctrico, no empieces mirando los enchufes. **Busca primero el cuadro.**

```text
                VIVIENDA

┌──────────────────────────────┐
│                              │
│      SALÓN                   │
│                              │
│                              │
│                 ┌──────┐     │
│                 │CUADRO│     │
│                 └──────┘     │
│                              │
│      COCINA                  │
│                              │
└──────────────────────────────┘
```

Desde el cuadro salen los diferentes circuitos. Por eso el cuadro es nuestro **punto de partida**.

---

# 10.4. Segundo paso: localizar los puntos de utilización

Una vez localizado el cuadro, buscamos:

**Iluminación** — Símbolos correspondientes a puntos de luz:

```text
       ○
       │
     LUZ
```

**Interruptores:**

```text
──────╱
```

**Tomas de corriente** — Normalmente aparecen mediante el símbolo correspondiente de toma.

**Tomas específicas** — Por ejemplo:

* horno;
* cocina;
* lavadora;
* lavavajillas;
* termo;
* climatización.

> **No todos los planos utilizan exactamente la misma representación gráfica**, por lo que debemos consultar siempre la leyenda del plano.

---

# 10.5. La leyenda es tu diccionario

Un plano profesional suele incorporar una leyenda. La leyenda nos permite saber qué significa cada símbolo utilizado en ese plano concreto. Por ejemplo:

| Símbolo | Puede representar |
|---|---|
| Punto de luz | Luminaria |
| Interruptor | Mecanismo de mando |
| Toma | Base de enchufe |
| Cuadro | Cuadro de mando y protección |
| Caja | Caja de conexión |
| Tierra | Conductor / conexión de protección |

La simbología eléctrica está normalizada y la **UNE-EN 60617** es la referencia para la representación gráfica de componentes y sistemas electrotécnicos.

> **No adivines un símbolo: busca la leyenda.**

---

# 10.6. Ejercicio de lectura de un plano

Cuando tengas delante un plano, intenta contestar:

1. ¿Dónde está el cuadro?
2. ¿Cuántos dormitorios hay?
3. ¿Dónde están los puntos de luz?
4. ¿Dónde están los interruptores?
5. ¿Dónde están las tomas de corriente?
6. ¿Qué elementos pertenecen a la cocina?
7. ¿Dónde están las tomas específicas?
8. ¿Qué circuito alimenta cada elemento?

Si puedes contestar estas preguntas, ya estás empezando a leer el plano, no simplemente a mirar símbolos.

---

# 10.7. No confundas ubicación con conexión

Un plano de planta nos puede decir: *«Aquí hay una toma de corriente.»* Pero no necesariamente nos muestra con todo detalle cómo están conectados los conductores dentro de la instalación. Para eso recurrimos a otros esquemas.

```text
PLANO DE PLANTA
       │
       └── ¿DÓNDE?


UNIFILAR
       │
       └── ¿QUÉ CIRCUITO?


MULTIFILAR
       │
       └── ¿CÓMO SE CONECTA?
```

---

# 10.8. El esquema unifilar

El esquema unifilar es una representación **simplificada** de la instalación. Cada circuito se representa mediante una línea, aunque realmente esté compuesto por varios conductores. La cantidad de conductores puede indicarse mediante pequeñas marcas o mediante una anotación.

En una vivienda podemos encontrar algo parecido a:

```text
             IGA
              │
              ▼
       DIFERENCIAL
              │
        ┌─────┴─────┐
        │     │     │
       C1    C2    C3
        │     │     │
      LUZ   TOMAS  COCINA
```

El unifilar nos permite comprender rápidamente la **estructura de la instalación**.

En España, el esquema unifilar forma parte de la documentación exigida en la Memoria Técnica de Diseño en los casos en que esta sea aplicable. La **ITC-BT-04** incluye el esquema unifilar y las características de los dispositivos de protección entre la documentación mínima.

---

# 10.9. ¿Qué información podemos sacar de un unifilar?

Un buen esquema unifilar puede indicarnos:

* IGA.
* Diferenciales.
* PIAs.
* Circuitos.
* Secciones.
* Número de conductores.
* Canalizaciones.
* Denominación de circuitos.
* Características de determinadas protecciones.

Por ejemplo:

```text
C1

10 A

3 × 1,5 mm²

Tubo Ø16

ILUMINACIÓN
```

Eso nos está dando mucha más información que simplemente: `C1 → LUZ`.

---

# 10.10. Un ejemplo real

En un ejemplo de instalación de vivienda se puede ver cómo el esquema relaciona:

* protección;
* circuitos C1–C5;
* intensidad de los PIAs;
* sección de conductores;
* diámetro de tubo.

La lectura que debe hacer el aprendiz es:

```text
C1
 ↓
ILUMINACIÓN
 ↓
PIA 10 A
 ↓
1,5 mm²
```

Y después:

```text
C2
 ↓
TOMAS
 ↓
PIA 16 A
 ↓
2,5 mm²
```

No hace falta memorizar el dibujo completo. Hay que aprender a **extraer información de él**.

---

# 10.11. El esquema multifilar

Aquí cambia la película. En un esquema multifilar se representan **individualmente** los conductores que intervienen en el circuito.

Por ejemplo:

```text
FASE ────────┐
             │
             ├── INTERRUPTOR ─── LÁMPARA
             │
NEUTRO ────────────────────────────┘

PE ─────────────────────────────── CARCASA
```

En lugar de representar todo mediante una única línea, podemos seguir cada conductor. El esquema multifilar ofrece una representación más detallada de las conexiones.

---

# 10.12. Unifilar frente a multifilar

Esta comparación tienes que dominarla.

| Unifilar | Multifilar |
|---|---|
| Simplificado | Detallado |
| Una línea representa el circuito | Cada conductor tiene su línea |
| Lectura rápida | Lectura del conexionado |
| Muy utilizado para documentación | Útil para montaje y análisis |
| Indica información mediante símbolos/anotaciones | Permite seguir cada conductor |

Podemos recordarlo así:

```text
UNIFILAR

──────────────
     C1
──────────────


MULTIFILAR

────────────── FASE
────────────── NEUTRO
────────────── PE
```

---

# 10.13. El mismo circuito representado de dos maneras

Supongamos una lámpara controlada por un interruptor.

**Unifilar:**

```text
FASE ──── INTERRUPTOR ──── LÁMPARA
NEUTRO ──────────────────── LÁMPARA
PE ──────────────────────── PE
```

En un plano unifilar real, la representación será mucho más simplificada.

**Multifilar:**

```text
L ──────────┐
            │
            ▼
        INTERRUPTOR
            │
            ▼
         LÁMPARA
            │
N ──────────┘

PE ─────────────────► PE
```

Aquí podemos seguir físicamente cada conductor.

---

# 10.14. ¿Para qué sirve cada uno?

Piensa en dos preguntas diferentes.

El oficial te pregunta: *«¿Qué circuito es este?»* — Probablemente mirarás el **unifilar**.

El oficial te pregunta: *«¿Cómo está conectado este interruptor?»* — Probablemente necesitarás un esquema más detallado, como el **multifilar**.

---

# 10.15. Esquema de una conmutada

Uno de los circuitos que debes aprender a interpretar es el de una conmutada. Dos mecanismos controlan una misma lámpara.

Conceptualmente:

```text
          CONMUTADOR 1
FASE ────────┐
             │
          ┌──┴──┐
          │     │
          │     │
          └──┬──┘
             │
             │
          ┌──┴──┐
          │     │
          │     │
          └──┬──┘
             │
          CONMUTADOR 2
             │
             ▼
           LUZ
             │
             ▼
           N
```

En un plano real no veremos necesariamente este dibujo. Veremos símbolos. La misión del aprendiz es reconocer:

```text
CONMUTADOR
     ↓
CONMUTADOR
     ↓
LÁMPARA
```

---

# 10.16. Cómo seguir una línea

Una habilidad fundamental es aprender a seguir una línea sin perderse.

Supongamos:

```text
CUADRO
  │
  │
  ├─────────────── C1
  │
  │
  └───────┐
          │
          ▼
       CAJA
          │
      ┌───┴───┐
      ▼       ▼
   LÁMPARA  INTERRUPTOR
```

No mires todo el plano a la vez. Hazlo por etapas:

```text
CUADRO
  ↓
C1
  ↓
CANALIZACIÓN
  ↓
CAJA
  ↓
MECANISMO
  ↓
RECEPTOR
```

---

# 10.17. El error de mirar solamente los símbolos

Un aprendiz puede reconocer perfectamente: *«Esto es un enchufe.»* Y aun así no saber leer el plano. Porque la pregunta importante es: **¿a qué circuito pertenece?**

```text
         TOMA
           │
           ▼
          C2
           │
           ▼
        CUADRO
```

No basta con identificar el símbolo. Hay que seguirlo hasta su circuito.

---

# 10.18. Circuitos de vivienda

Aquí conectamos con el **capítulo 4**.

Si vemos `C1`, debemos recordar: **circuito de iluminación**. Si vemos `C2`, pensaremos: **tomas de uso general y frigorífico**, según la configuración básica del REBT. Y así sucesivamente.

El plano de planta y el esquema unifilar se complementan:

```text
UNIFILAR
C2 → TOMAS
       │
       ▼
PLANO DE PLANTA
       │
       ├── TOMA SALÓN
       ├── TOMA DORMITORIO
       ├── TOMA PASILLO
       └── ...
```

---

# 10.19. Plano + unifilar = instalación completa

Esta es una de las ideas más importantes del capítulo.

El unifilar puede decir: `C3 → COCINA Y HORNO`. El plano nos permite saber **¿dónde están?**:

```text
       COCINA
          │
     ┌────┴────┐
     ▼         ▼
   HORNO      COCINA
```

Y el multifilar puede ayudarnos a entender **¿cómo están conectados?**

Por tanto:

```text
UNIFILAR
   +
PLANO
   +
MULTIFILAR
   =
VISIÓN COMPLETA
```

---

# 10.20. Simbología que debes dominar

No necesitas aprender cientos de símbolos para empezar a trabajar. Empieza por los que aparecen constantemente.

| Elemento | Qué debes reconocer |
|---|---|
| Punto de luz | Luminaria |
| Interruptor | Mando de iluminación |
| Conmutador | Mando desde dos puntos |
| Toma de corriente | Base de enchufe |
| Caja de derivación | Punto de conexión |
| Cuadro | Mando y protección |
| Tierra | Protección |
| Timbre | Señal acústica |
| Pulsador | Mando momentáneo |
| Lámpara | Receptor de iluminación |
| Motor | Receptor motriz |
| Ventilador | Receptor |

La tabla de símbolos debe consultarse siempre junto con la documentación del proyecto.

---

# 10.21. Símbolo y realidad

Una cosa que ayuda muchísimo a aprender es relacionar:

```text
SÍMBOLO
   ↓
PLANO
   ↓
MECANISMO
   ↓
REALIDAD
```

Por ejemplo:

```text
     ○
     │
     ▼
PUNTO DE LUZ
     │
     ▼
LÁMPARA REAL
```

Y:

```text
   SÍMBOLO
      ↓
   INTERRUPTOR
      ↓
   MECANISMO REAL
      ↓
   PARED
```

Cuando haces esta asociación varias veces, los planos empiezan a resultar mucho más fáciles.

---

# 10.22. No todos los planos son iguales

En una obra puedes encontrar:

* planos muy sencillos;
* planos realizados a mano;
* planos CAD;
* planos BIM;
* planos llenos de anotaciones;
* planos antiguos;
* modificaciones sobre planos existentes.

No te sorprendas si el plano que encuentras en una obra no se parece al del libro. La habilidad importante es **saber interpretarlo**.

---

# 10.23. Aprende a buscar la leyenda

Cuando recibas un plano:

```text
1. BUSCA LA LEYENDA
          ↓
2. BUSCA EL CUADRO
          ↓
3. IDENTIFICA LOS CIRCUITOS
          ↓
4. LOCALIZA LOS ELEMENTOS
          ↓
5. SIGUE LAS LÍNEAS
```

La leyenda te evita tener que adivinar.

---

# 10.24. El plano también tiene escala

En planos de planta podemos encontrar escalas como `1:50` o `1:100`. Por ejemplo, `1:50` significa que **1 unidad medida en el plano representa 50 unidades en la realidad**.

Pero cuidado:

> **No midas distancias de instalación directamente sobre una imagen de pantalla o una captura de Internet.** Para medir correctamente necesitamos el plano original y su escala.

---

# 10.25. Orientación y referencias

Un plano profesional puede contener:

* Norte.
* Ejes.
* Cotas.
* Referencias.
* Nombres de habitaciones.
* Números de plano.
* Revisiones.
* Escala.
* Fecha.
* Autor.
* Leyenda.

**No ignores el cajetín.** Puede contener información necesaria para saber qué plano estás mirando y qué versión es.

---

# 10.26. El cajetín

En un plano profesional podemos encontrar algo parecido a:

```text
┌───────────────────────────────────┐
│ PROYECTO                          │
│                                   │
│ INSTALACIÓN ELÉCTRICA             │
│                                   │
│ PLANO: IE-05                      │
│ ESCALA: 1:50                      │
│ FECHA: xx/xx/xxxx                 │
│ REVISIÓN: 02                      │
└───────────────────────────────────┘
```

La **revisión** es especialmente importante. Puede existir `REV. 01`, `REV. 02`, `REV. 03` y no necesariamente contienen exactamente la misma instalación.

> **Antes de trabajar, comprueba que estás utilizando la revisión vigente.**

---

# 10.27. Cuando el plano y la obra no coinciden

Esto ocurre en la vida real. Puedes encontrar que el plano indica `TOMA AQUÍ` y al llegar a la obra: `TOMA ALLÍ`.

**No decidas por tu cuenta:** *«Bueno, la pongo donde está en el plano.»* Ni tampoco: *«La cambio porque aquí queda mejor.»*

Primero:

```text
DETENER
   ↓
COMUNICAR
   ↓
CONSULTAR
   ↓
ACTUALIZAR / CORREGIR
```

> **El aprendiz no debe modificar una instalación basándose en una interpretación personal del plano.**

---

# 10.28. Ejercicio: localizar un circuito

Mira un plano de vivienda y busca todas las tomas pertenecientes a C2. Hazlo así:

```text
C2
 ↓
CUADRO
 ↓
PLANO
 ↓
BUSCAR TOMAS
 ↓
MARCARLAS
```

Después comprueba:

* ¿Cuántas has encontrado?
* ¿En qué habitaciones?
* ¿Hay alguna toma que pertenezca a otro circuito?
* ¿Dónde está la caja de derivación?

Este ejercicio enseña mucho más que memorizar una tabla.

---

# 10.29. Ejercicio: seguir C1

Ahora haz lo mismo con iluminación:

```text
C1
 ↓
CUADRO
 ↓
CANALIZACIÓN
 ↓
CAJAS
 ↓
INTERRUPTORES
 ↓
PUNTOS DE LUZ
```

Intenta seguir el circuito completo. Si puedes hacerlo sin perderte, ya estás adquiriendo una habilidad profesional.

---

# 10.30. Ejercicio: del plano al cuadro

Busca en el plano: C1, C2, C3, C4, C5. Después busca esos mismos circuitos en el unifilar. Debería existir una correspondencia:

```text
PLANO                    UNIFILAR

C1 ────────────────────► C1

C2 ────────────────────► C2

C3 ────────────────────► C3

C4 ────────────────────► C4

C5 ────────────────────► C5
```

Esto es muy importante cuando se trabaja en una instalación real.

---

# 10.31. Una forma profesional de leer un plano

Cuando el oficial te entregue un plano, intenta seguir esta secuencia:

```text
                 PLANO
                   │
                   ▼
              ¿QUÉ PLANO?
                   │
                   ▼
                LEYENDA
                   │
                   ▼
                CUADRO
                   │
                   ▼
               CIRCUITOS
                   │
                   ▼
              ELEMENTOS
                   │
                   ▼
             CANALIZACIONES
                   │
                   ▼
                RECEPTOR
```

Después compara con el unifilar.

---

# 10.32. Lo que te puede preguntar el oficial

**«¿Qué tipo de esquema es este?»** — Mira si es: planta, unifilar, multifilar, funcional, u otro tipo de representación.

**«¿Qué circuito es ese?»** — Busca la referencia: C1, C2, C3...

**«¿Dónde está alimentado?»** — Sigue la línea hacia el cuadro.

**«¿Qué sección lleva?»** — Busca la anotación correspondiente en el esquema o documentación.

**«¿Cuántos conductores hay?»** — Mira la indicación del unifilar o el multifilar.

**«¿Dónde está la caja?»** — Localiza el símbolo correspondiente en el plano.

---

# 10.33. Errores frecuentes del aprendiz

**Error 1 — No mirar la leyenda.** *«Creo que ese símbolo es...»* No. Compruébalo.

**Error 2 — No localizar el cuadro.** Empezar por cualquier punto del plano suele provocar confusión. Empieza por el cuadro.

**Error 3 — Confundir unifilar y multifilar.** Recuerda:

* UNIFILAR → simplificado.
* MULTIFILAR → conductores individuales.

**Error 4 — Mirar solamente los símbolos.** Un símbolo no te dice necesariamente todo. Hay que saber: qué elemento es + a qué circuito pertenece + cómo está conectado.

**Error 5 — Trabajar con una revisión antigua.** Siempre comprueba: plano, revisión, fecha.

**Error 6 — Modificar la instalación porque «parece lógico».** Si el plano y la realidad no coinciden: pregunta antes de modificar.

---

# 10.34. La chuleta del capítulo

```text
PLANO DE PLANTA
       ↓
      DÓNDE


UNIFILAR
       ↓
      QUÉ


MULTIFILAR
       ↓
     CÓMO


LEYENDA
       ↓
¿QUÉ SIGNIFICA EL SÍMBOLO?


CUADRO
       ↓
¿DE DÓNDE SALE EL CIRCUITO?


CIRCUITO
       ↓
¿A DÓNDE VA?


REVISIÓN
       ↓
¿ESTOY USANDO EL PLANO CORRECTO?
```

---

# 10.35. El objetivo final

Al terminar este capítulo deberías poder coger un plano de una vivienda y decir:

*«Aquí está el cuadro.»*

Después: *«De aquí salen C1, C2, C3...»*

Después: *«C1 alimenta estos puntos de iluminación.»*

Y finalmente: *«Este interruptor controla este punto de luz y esta toma pertenece a C2.»*

Ese es el objetivo. No necesitas convertirte todavía en proyectista. Necesitas ser capaz de **entender el lenguaje gráfico** que utiliza el electricista para comunicar cómo debe hacerse una instalación.

---

# 10.36. Para recordar

* El plano te dice **dónde**.
* El unifilar te explica **qué** tienes instalado y cómo se organiza.
* El multifilar te permite seguir los conductores y entender el **conexionado**.
* La leyenda te dice **qué significa cada símbolo**.

Y una última regla:

> **Si no entiendes un plano, no improvises sobre la instalación. Pregunta.**

---

## Fuentes visuales y de consulta

Para las imágenes de este capítulo conviene conservar siempre la fuente original y su licencia en la versión publicada del manual.

* Material didáctico sobre sistemas de representación de instalaciones eléctricas — Junta de Andalucía — incluye ejemplos de representación en planta, unifilar y multifilar.
* Ejemplo de esquema unifilar de vivienda — REBT Studio — ejemplo actualizado y relacionado con ITC-BT-04, ITC-BT-17 e ITC-BT-25.
* Simbología eléctrica según UNE-EN 60617 — EleCalculador — tabla de referencia de símbolos.
* Plano de instalación eléctrica de vivienda — Bibliocad — ejemplo de plano de planta con instalación eléctrica.

*Nota editorial: para la versión definitiva del manual, se recomienda mantener las imágenes con una pequeña línea bajo cada una indicando `Fuente:` y, cuando sea posible, `Licencia:`. Así evitamos incorporar sin más imágenes encontradas en buscadores cuya reutilización no esté clara.*
