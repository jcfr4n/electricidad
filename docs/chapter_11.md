# 11. Herramientas

Un buen electricista necesita buenas herramientas, pero más importante todavía es **saber utilizarlas correctamente**.

Una herramienta mal utilizada puede:

* dar una medición falsa;
* dañar el instrumento;
* dañar la instalación;
* provocar un cortocircuito;
* generar una situación peligrosa.

Por eso, antes de utilizar una herramienta eléctrica, debemos conocer:

1. Para qué sirve.
2. Qué puede medir o hacer.
3. Cómo se conecta.
4. Qué rango debemos seleccionar.
5. Qué errores debemos evitar.

> **Una herramienta no sustituye los conocimientos ni las medidas de seguridad.**

---

# 11.1. Clasificación rápida

Podemos dividir las herramientas de este capítulo en tres grupos:

### Herramientas de medida

* Multímetro.
* Pinza amperimétrica.
* Detector de tensión.
* Medidor de aislamiento.
* Buscapolos.

### Herramientas de instalación

* Guía pasacables.
* Crimpadora.
* Pelacables.
* Prensa terminales.

### Herramientas que requieren especial atención

* Multímetro.
* Pinza amperimétrica.
* Medidor de aislamiento.

Estas últimas merecen aprenderse especialmente bien.

---

# 11.2. Multímetro

El multímetro es probablemente una de las herramientas más utilizadas por un electricista.

Permite realizar diferentes tipos de medidas, dependiendo del instrumento:

* Tensión.
* Corriente.
* Resistencia.
* Continuidad.
* Diodos.
* Capacitancia.
* Frecuencia.
* Otras funciones.

Un multímetro típico dispone de:

```text
┌──────────────────────┐
│                      │
│      DISPLAY         │
│                      │
├──────────────────────┤
│                      │
│     SELECTOR         │
│                      │
├──────────┬───────────┤
│ COM      │ V Ω       │
│          │ A / mA    │
└──────────┴───────────┘
```

---

# 11.3. Las puntas de prueba

Normalmente encontraremos:

```text
NEGRA
  │
  ▼
COM
```

y:

```text
ROJA
  │
  ▼
V / Ω / etc.
```

La conexión depende de la medida que vayamos a realizar.

Una regla básica:

> **Antes de medir, comprueba dónde están conectadas las puntas.**

Muchos accidentes con multímetros empiezan por tener la punta roja conectada en la entrada de corriente y después intentar medir tensión.

---

# 11.4. Medir tensión

Para medir tensión debemos seleccionar la función correspondiente.

Por ejemplo:

```text
        MULTÍMETRO

        V AC
         │
         ▼

FASE ────●       ●──── NEUTRO
          \     /
           \___/
```

El multímetro se conecta **en paralelo** con el elemento o circuito cuya tensión queremos comprobar.

---

# 11.5. Tensión alterna

En instalaciones domésticas de baja tensión encontraremos normalmente tensión alterna.

En el multímetro podemos encontrar:

```text
V~
```

o una indicación equivalente.

Debemos seleccionar:

```text
V AC
```

cuando el instrumento lo requiera.

---

# 11.6. Medir resistencia

La resistencia se mide en:

> **ohmios (Ω)**

Normalmente:

```text
Ω
```

Para una medida de resistencia:

> **El circuito debe estar sin tensión.**

No debemos medir resistencia en un circuito energizado salvo que el procedimiento específico del instrumento indique expresamente otra cosa, algo que no corresponde al uso normal del multímetro para esta función.

---

# 11.7. Continuidad

La función de continuidad permite comprobar si existe un camino eléctrico entre dos puntos.

El símbolo suele parecerse a:

```text
))) 
```

o aparecer como un símbolo de zumbador.

Ejemplo:

```text
A ─────────────── B
       │
       │
    CONTINUIDAD
```

Si existe continuidad, el instrumento normalmente emite un sonido.

Pero recuerda:

> **Que haya continuidad no significa necesariamente que la instalación sea correcta.**

Solo nos indica que existe un camino eléctrico dentro de las condiciones de la prueba.

---

# 11.8. Error típico con el multímetro

Un error muy frecuente:

```text
PUNTA ROJA
     │
     ▼
10 A
```

y después:

```text
"Voy a medir tensión."
```

Esto puede provocar un cortocircuito si conectamos el instrumento incorrectamente.

Antes de medir:

```text
1. ¿QUÉ QUIERO MEDIR?
        ↓
2. ¿QUÉ FUNCIÓN NECESITO?
        ↓
3. ¿DÓNDE VAN LAS PUNTAS?
        ↓
4. ¿QUÉ RANGO?
        ↓
5. ¿CÓMO REALIZO LA MEDIDA?
```

---

# 11.9. Vídeo recomendado: multímetro

Para el manual conviene incluir un vídeo práctico que enseñe:

* identificación de bornes;
* selección de función;
* medición de tensión;
* continuidad;
* resistencia;
* errores habituales.

En la versión definitiva podemos seleccionar un vídeo concreto de un canal técnico fiable y conservar la URL de referencia.

> **Importante:** un vídeo sirve para aprender el manejo, pero no sustituye los procedimientos de seguridad del trabajo real.

---

# 11.10. Pinza amperimétrica

La pinza amperimétrica permite medir corriente sin tener que abrir el circuito para insertar el instrumento en serie.

Su característica principal es la mordaza:

```text
       ┌───────────┐
       │           │
       │     ┌─────┤
       │     │     │
       │     │     │
       └─────┘     │
             CABLE │
```

La pinza detecta el campo magnético asociado a la corriente que circula por el conductor.

---

# 11.11. Regla fundamental de la pinza

Para medir la corriente de un conductor:

```text
        ┌─────────┐
        │  PINZA  │
        │    ○    │
        └────┬────┘
             │
             │
             │
            FASE
```

La mordaza debe rodear **el conductor cuya corriente queremos medir**.

No debemos abrazar simultáneamente fase y neutro cuando queremos medir la corriente de carga de un circuito monofásico.

¿Por qué?

Porque los campos magnéticos producidos por las corrientes de ida y retorno se compensan en gran medida.

---

# 11.12. Correcto e incorrecto

### Correcto

```text
       PINZA
      ┌─────┐
      │  ○  │
      └──┬──┘
         │
         │ FASE
         │
```

### Incorrecto para medir la corriente de carga

```text
       PINZA
      ┌─────┐
      │  ○  │
      └──┬──┘
       ┌─┴─┐
       │ L │
       │ N │
       └───┘
```

---

# 11.13. Pinza de fugas

Existen pinzas diseñadas específicamente para medir corrientes de fuga.

PLC Madrid dispone de material específico sobre el uso de este tipo de pinzas y explica su utilización tanto para fugas como para determinadas medidas de corriente.

En una pinza de fugas podemos trabajar con corrientes mucho menores que las habituales de una pinza amperimétrica convencional.

Por ejemplo:

```text
A
mA
µA
```

según el instrumento.

---

# 11.14. Vídeo recomendado: pinza

Este es uno de los instrumentos que sí merece vídeo.

Busca que el vídeo muestre:

1. Apertura de la mordaza.
2. Selección de escala.
3. Colocación sobre un único conductor.
4. Lectura.
5. Medición de corriente de fuga cuando corresponda.

PLC Madrid tiene contenido práctico relacionado con pinzas detectoras de fugas y explica su utilización.

---

# 11.15. Detector de tensión

El detector de tensión permite comprobar de forma rápida la presencia de tensión, dependiendo del tipo de detector.

Existen diferentes tecnologías:

* Detectores sin contacto.
* Detectores bipolares.
* Comprobadores específicos.

Un detector sin contacto puede tener una apariencia similar a:

```text
       ┌─────────┐
       │ DETECTOR│
       │         │
       │   LED   │
       └────┬────┘
            │
            ▼
          CABLE
```

---

# 11.16. Detector sin contacto

Es muy cómodo para realizar una primera comprobación.

Por ejemplo:

```text
DETECTOR
   │
   ▼
┌───────┐
│ CABLE │
└───────┘
```

Puede indicar presencia de un campo eléctrico.

Pero:

> **No debemos utilizarlo como única comprobación para declarar un circuito sin tensión.**

Para trabajos eléctricos debemos aplicar los procedimientos de seguridad correspondientes y utilizar un comprobador adecuado.

---

# 11.17. Vídeo recomendado: detector de tensión

Aquí sí tenemos un recurso de **PLC Madrid** especialmente apropiado:

El vídeo presenta las funciones de un detector de tensión electrónico.

---

# 11.18. Buscapolos

El buscapolos tradicional es una herramienta sencilla que permite realizar una comprobación indicativa de tensión.

Su aspecto típico:

```text
      ┌────────────┐
      │             │
      │ BUSCAPOLOS  │
      │             │
      └──────┬──────┘
             │
             ▼
           PUNTA
```

Sin embargo, hay que ser muy cuidadoso con su interpretación.

> **Un buscapolos no debe considerarse un instrumento suficiente para verificar la ausencia de tensión antes de realizar un trabajo eléctrico.**

Para ello debemos utilizar un procedimiento y un instrumento de comprobación adecuados.

---

# 11.19. Detector de tensión vs buscapolos

| Herramienta          | Uso principal                               |
| -------------------- | ------------------------------------------- |
| Detector de tensión  | Detección rápida                            |
| Buscapolos           | Comprobación indicativa                     |
| Comprobador adecuado | Verificación de tensión/ausencia de tensión |
| Multímetro           | Medición eléctrica                          |

No son intercambiables.

---

# 11.20. Medidor de aislamiento

El medidor de aislamiento, también llamado habitualmente **megóhmetro** o *Megger* por extensión coloquial, es un instrumento mucho más especializado.

Sirve para comprobar la resistencia de aislamiento de una instalación o equipo.

La medida se expresa normalmente en:

> **megaohmios (MΩ)**

---

# 11.21. ¿Qué estamos comprobando?

Imagina un conductor:

```text
FASE
 │
 │
 │
 ═══════════════
 AISLAMIENTO
 ═══════════════
 │
 │
OTRA PARTE
```

Queremos comprobar que el aislamiento mantiene separadas eléctricamente las partes que deben permanecer aisladas.

Simplificando:

```text
BUEN AISLAMIENTO
      ↓
RESISTENCIA ALTA


MAL AISLAMIENTO
      ↓
RESISTENCIA BAJA
```

---

# 11.22. El megóhmetro no es un multímetro

Esta diferencia es importante.

Un multímetro puede medir resistencia con una pequeña tensión de prueba.

Un medidor de aislamiento aplica una **tensión de prueba específica** para evaluar el aislamiento.

Por eso:

> **No se utiliza como si fuera un simple medidor de continuidad.**

---

# 11.23. Precaución fundamental

Antes de realizar una prueba de aislamiento:

```text
1. DESENERGIZAR
        ↓
2. AISLAR
        ↓
3. COMPROBAR AUSENCIA DE TENSIÓN
        ↓
4. DESCONECTAR / AISLAR EQUIPOS
   QUE PUEDAN RESULTAR AFECTADOS
        ↓
5. REALIZAR LA PRUEBA
```

La prueba puede aplicar una tensión considerable al circuito.

Por eso debemos conocer perfectamente:

* qué estamos probando;
* qué equipos están conectados;
* qué tensión de prueba debemos utilizar;
* qué resultado esperamos.

---

# 11.24. ¿Qué puede dañar una prueba de aislamiento?

Hay equipos electrónicos que no deben recibir directamente determinadas tensiones de prueba.

Por ejemplo, según la instalación podemos encontrarnos:

* fuentes electrónicas;
* equipos de control;
* reguladores;
* variadores;
* sistemas electrónicos;
* dispositivos sensibles.

Por eso:

> **Nunca conectes un megóhmetro a una instalación completa sin saber qué equipos están conectados.**

---

# 11.25. PLC Madrid y Megger

Aquí tenemos una combinación especialmente buena para nuestro manual.

PLC Madrid dispone de formación específica sobre **medidas eléctricas reglamentarias en baja tensión en colaboración con Megger**, y su formación aborda el uso de equipos de medida y la interpretación de resultados.

Además, Megger sigue ofreciendo actualmente formación sobre verificaciones eléctricas reglamentarias, incluyendo resistencia de aislamiento, continuidad e impedancia de bucle.

Para este apartado, por tanto, **sí pondría un vídeo o recurso audiovisual**.

---

# 11.26. Vídeo recomendado: medidor de aislamiento

El vídeo que seleccionemos debería mostrar:

```text
EQUIPO
  ↓
CONEXIÓN
  ↓
TENSIÓN DE PRUEBA
  ↓
MEDICIÓN
  ↓
RESULTADO
  ↓
INTERPRETACIÓN
```

No interesa un vídeo que simplemente enseñe:

> "Pulso este botón y aparece 500 V."

Queremos que explique **qué se está midiendo y por qué**.

---

# 11.27. Guía pasacables

La guía pasacables sirve para introducir conductores por tubos y canalizaciones.

Es una herramienta muy sencilla, pero fundamental en obra.

```text
         GUÍA
          │
          ▼
══════════════════════════════
          TUBO
══════════════════════════════
                         │
                         ▼
                       SALIDA
```

---

# 11.28. Cómo utilizar una guía

La secuencia habitual:

```text
1. INTRODUCIR LA GUÍA
        ↓
2. AVANZAR POR EL TUBO
        ↓
3. LLEGAR AL DESTINO
        ↓
4. FIJAR LOS CONDUCTORES
        ↓
5. TIRAR DE LA GUÍA
        ↓
6. SACAR LOS CONDUCTORES
```

---

# 11.29. No fuerces la guía

Si la guía no avanza:

```text
GUÍA
  ↓
█████████ X
```

no significa:

> "Tengo que tirar más fuerte."

Puede haber:

* curva excesiva;
* tubo aplastado;
* exceso de ocupación;
* obstrucción;
* radio de curvatura incorrecto;
* conductores ya existentes.

Primero hay que averiguar qué está ocurriendo.

---

# 11.30. Crimpadora

La crimpadora permite realizar conexiones mediante terminales o punteras adecuadas.

Ejemplo:

```text
CONDUCTOR
    │
    ▼
┌──────────┐
│ TERMINAL │
└──────────┘
    ▲
    │
CRIMPADORA
```

El objetivo es conseguir una unión mecánica y eléctrica adecuada.

---

# 11.31. Punteras

Las punteras se utilizan habitualmente en determinados conductores flexibles para facilitar una conexión adecuada en bornes compatibles.

```text
CONDUCTOR FLEXIBLE
       │
       ▼
   ┌───────┐
   │PUNTERA│
   └───────┘
       │
       ▼
      BORNE
```

Hay que utilizar:

* sección correcta;
* puntera adecuada;
* herramienta adecuada.

---

# 11.32. No todas las crimpadoras son iguales

Podemos encontrar diferentes tipos:

* Crimpadoras para punteras.
* Crimpadoras para terminales.
* Crimpadoras hidráulicas.
* Crimpadoras específicas para determinados conectores.

No debemos asumir que una herramienta sirve para cualquier terminal.

---

# 11.33. Vídeo recomendado: crimpado

Aquí sí resulta útil un vídeo porque el movimiento de la herramienta se entiende mucho mejor viéndolo.

Un ejemplo interesante es:

El vídeo muestra el proceso de crimpado de terminales y punteras eléctricas.

---

# 11.34. Pelacables

El pelacables permite retirar el aislamiento del conductor sin dañar innecesariamente los hilos.

```text
ANTES

════════════════════
 AISLAMIENTO
════════════════════


DESPUÉS

───────┐
       │
       │ CONDUCTOR
       │
───────┘
```

---

# 11.35. El error de pelar con cualquier herramienta

Una mala práctica es utilizar:

* cuchillo;
* alicates;
* tijeras;
* cúter sin control.

Podemos terminar haciendo:

```text
AISLAMIENTO
     ↓
  CORTE
     ↓
CONDUCTOR DAÑADO
```

Un conductor con hilos cortados ha perdido parte de su sección efectiva y puede quedar debilitado mecánicamente.

> **El pelacables debe cortar el aislamiento, no el conductor.**

---

# 11.36. Pelar la longitud correcta

No debemos quitar más aislamiento del necesario.

```text
CORRECTO

──────────────┐
              │
              ▼
          TERMINAL
```

No:

```text
DEMASIADO AISLAMIENTO RETIRADO

───────────┐
           │
           │
           │
           ▼
```

La longitud debe adaptarse al borne o terminal que vayamos a utilizar.

---

# 11.37. Prensa terminales

El término puede utilizarse para referirse a herramientas destinadas a prensar determinados terminales o conexiones.

Antes de utilizarla debemos identificar:

```text
¿QUÉ TERMINAL?
       ↓
¿QUÉ SECCIÓN?
       ↓
¿QUÉ HERRAMIENTA?
       ↓
¿QUÉ MATRIZ?
       ↓
¿QUÉ PRESIÓN / AJUSTE?
```

Una conexión prensada correctamente depende de que todas estas variables sean compatibles.

---

# 11.38. Una mala conexión puede parecer buena

Este es un concepto importante.

Una conexión puede tener buen aspecto exterior:

```text
┌───────────┐
│  TERMINAL │
└───────────┘
```

y estar mal prensada.

Puede presentar:

* mala sujeción mecánica;
* resistencia de contacto elevada;
* calentamiento;
* fallo posterior.

Por eso la conexión debe realizarse con la herramienta adecuada y siguiendo las especificaciones del sistema.

---

# 11.39. Comprobación visual después del crimpado

Después de crimpar:

```text
1. ¿El conductor está completamente introducido?
2. ¿El terminal está correctamente colocado?
3. ¿El prensado está en la zona correcta?
4. ¿Hay hilos sueltos?
5. ¿El conductor se mueve?
6. ¿El terminal está deformado correctamente?
```

Si el fabricante establece un procedimiento concreto, seguimos ese procedimiento.

---

# 11.40. Tabla rápida de herramientas

| Herramienta                | Función principal                | Cuidado especial                                         |
| -------------------------- | -------------------------------- | -------------------------------------------------------- |
| **Multímetro**             | Medir V, Ω, continuidad, etc.    | Selección de bornes y función                            |
| **Pinza amperimétrica**    | Medir corriente                  | Rodear el conductor correcto                             |
| **Detector de tensión**    | Detectar presencia de tensión    | No usarlo como única verificación de ausencia de tensión |
| **Medidor de aislamiento** | Medir resistencia de aislamiento | Tensión de prueba y equipos conectados                   |
| **Buscapolos**             | Comprobación indicativa          | No sustituye a un comprobador adecuado                   |
| **Guía pasacables**        | Pasar conductores                | No forzar                                                |
| **Crimpadora**             | Prensar terminales               | Terminal y sección adecuados                             |
| **Pelacables**             | Retirar aislamiento              | No dañar los hilos                                       |
| **Prensa terminales**      | Prensar determinados terminales  | Herramienta/matriz correctas                             |

---

# 11.41. Las cinco preguntas antes de medir

Antes de utilizar cualquier instrumento de medida:

```text
┌──────────────────────────────┐
│ 1. ¿QUÉ QUIERO MEDIR?        │
├──────────────────────────────┤
│ 2. ¿CON QUÉ INSTRUMENTO?     │
├──────────────────────────────┤
│ 3. ¿EN QUÉ FUNCIÓN?          │
├──────────────────────────────┤
│ 4. ¿DÓNDE CONECTO LAS PUNTAS?│
├──────────────────────────────┤
│ 5. ¿ES SEGURO REALIZAR LA    │
│    MEDIDA?                   │
└──────────────────────────────┘
```

Si no puedes responder las cinco:

> **No empieces la medición.**

---

# 11.42. Herramienta + procedimiento

Un error frecuente del aprendiz es pensar:

> "Tengo un multímetro, por tanto puedo medirlo."

No.

La herramienta es solamente una parte del proceso.

```text
HERRAMIENTA
     +
PROCEDIMIENTO
     +
CONOCIMIENTO
     +
SEGURIDAD
     =
MEDICIÓN ÚTIL
```

---

# 11.43. No confundir precisión con seguridad

Un instrumento puede ser muy preciso y utilizarse mal.

Por ejemplo:

```text
MULTÍMETRO PROFESIONAL
          +
CONEXIÓN INCORRECTA
          =
       PELIGRO
```

La calidad del instrumento no compensa una mala técnica.

---

# 11.44. Comprobación del instrumento

Antes de utilizar un instrumento de medida:

* comprueba su estado;
* revisa cables y puntas;
* comprueba que no estén dañados;
* verifica que el selector funciona;
* revisa la categoría de medida adecuada;
* comprueba que la batería está en condiciones;
* utiliza el equipo conforme a sus instrucciones.

No trabajes con:

```text
CABLE ROTO
PUNTA DAÑADA
AISLAMIENTO DETERIORADO
DISPLAY DEFECTUOSO
```

---

# 11.45. Categorías de medida

Los multímetros y equipos de medida pueden estar clasificados por categorías de sobretensión, como:

```text
CAT I
CAT II
CAT III
CAT IV
```

Estas categorías indican el entorno de medida para el que está diseñado el instrumento.

En instalaciones eléctricas de edificios es especialmente importante prestar atención a la categoría del instrumento y a su tensión nominal.

> **No elijas un multímetro únicamente por el precio o por el número de funciones.**

---

# 11.46. Una herramienta profesional no es necesariamente complicada

La guía pasacables puede parecer muy sencilla:

```text
══════════════════════►
```

pero un buen uso de ella evita:

* daños en cables;
* pérdidas de tiempo;
* atascos;
* esfuerzos innecesarios.

Lo mismo ocurre con un pelacables.

La diferencia entre un principiante y alguien con experiencia muchas veces está en:

> **cómo utiliza las herramientas sencillas.**

---

# 11.47. Recursos audiovisuales

Para esta sección del manual utilizaremos vídeos únicamente cuando aporten algo que sea difícil explicar mediante texto.

### Prioridad alta

* Multímetro.
* Pinza amperimétrica.
* Medidor de aislamiento.
* Detector de tensión.

### Prioridad media

* Crimpadora.
* Pelacables.

### Normalmente no necesario

* Guía pasacables.
* Buscapolos.

Los vídeos deben considerarse **material complementario**.

El contenido principal del manual debe seguir siendo comprensible aunque un vídeo desaparezca de Internet.

---

# 11.48. Recursos recomendados

### PLC Madrid

PLC Madrid dispone de formación específica sobre medidas eléctricas reglamentarias en baja tensión, incluyendo instrumentación y procedimientos de medida.

También dispone de contenidos relacionados con detectores y pinzas de medida.

### Megger

Megger dispone actualmente de recursos formativos sobre verificaciones eléctricas, incluyendo resistencia de aislamiento, continuidad e impedancia de bucle.

### Crimpado

---

# 11.49. La chuleta del aprendiz

```text
MULTÍMETRO
    ↓
TENSIÓN / RESISTENCIA / CONTINUIDAD


PINZA
    ↓
CORRIENTE SIN ABRIR EL CIRCUITO


DETECTOR
    ↓
DETECCIÓN RÁPIDA DE TENSIÓN


BUSCAPOLOS
    ↓
COMPROBACIÓN INDICATIVA


MEGÓHMETRO
    ↓
RESISTENCIA DE AISLAMIENTO


GUÍA
    ↓
PASAR CONDUCTORES


PELACABLES
    ↓
QUITAR AISLAMIENTO


CRIMPADORA
    ↓
PRENSAR TERMINALES


PRENSA TERMINALES
    ↓
REALIZAR CONEXIONES PRENSADAS
```

---

# 11.50. Regla final

> **No utilices una herramienta porque sabes cómo encenderla. Utilízala porque sabes qué quieres hacer con ella, cómo hacerlo y cómo interpretar el resultado.**

Y especialmente con los instrumentos de medida:

> **Una lectura no es útil si no sabes qué estás midiendo.**

El objetivo del aprendiz no es tener una caja llena de herramientas.

Es llegar al punto en que, ante un problema, pueda pensar:

```text
¿QUÉ ESTOY BUSCANDO?
        ↓
¿QUÉ NECESITO COMPROBAR?
        ↓
¿QUÉ INSTRUMENTO ME SIRVE?
        ↓
¿CÓMO LO CONECTO?
        ↓
¿QUÉ RESULTADO ESPERO?
        ↓
¿QUÉ SIGNIFICA EL RESULTADO?
```

Ese es el momento en el que una herramienta empieza realmente a convertirse en una **herramienta profesional**.
