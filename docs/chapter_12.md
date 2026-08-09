# 12. Comprobaciones antes de energizar

Antes de poner una instalación eléctrica en tensión no basta con comprobar que:

> "Los cables están conectados."

Una instalación puede estar aparentemente terminada y, sin embargo, tener:

* un conductor mal conectado;
* una tierra interrumpida;
* un aislamiento deteriorado;
* un borne flojo;
* una protección incorrecta;
* una polaridad equivocada;
* un circuito cruzado;
* una conexión que provoca un disparo;
* un elemento sin identificar.

Por eso, antes de energizar debemos realizar una **secuencia ordenada de comprobaciones**.

> **Primero comprobamos. Después energizamos.**

---

# 12.1. La secuencia general

Una forma sencilla de recordar el proceso es:

```text
INSTALACIÓN TERMINADA
        ↓
INSPECCIÓN VISUAL
        ↓
COMPROBACIONES SIN TENSIÓN
        ↓
CORRECCIÓN DE DEFECTOS
        ↓
ENERGIZACIÓN CONTROLADA
        ↓
COMPROBACIONES CON TENSIÓN
        ↓
PRUEBA DE PROTECCIONES
        ↓
ETIQUETADO Y DOCUMENTACIÓN
```

No todas las comprobaciones se realizan en el mismo momento.

Esta distinción es importante.

---

# 12.2. Antes de empezar

Antes de conectar tensión debemos comprobar visualmente la instalación.

### Comprobación visual

* Cuadro correctamente montado.
* Envolventes cerradas.
* Conductores correctamente identificados.
* No existen conductores sueltos.
* No hay cobre innecesariamente expuesto.
* Canalizaciones correctamente instaladas.
* Mecanismos correctamente fijados.
* Cajas cerradas.
* Protecciones identificadas.
* Conductores PE correctamente conectados.
* No existen daños visibles.

```text
┌─────────────────────────────┐
│     INSPECCIÓN VISUAL       │
├─────────────────────────────┤
│ □ Cuadro                    │
│ □ Conductores               │
│ □ Protecciones              │
│ □ Tierra                    │
│ □ Canalizaciones            │
│ □ Mecanismos                │
│ □ Etiquetas                 │
└─────────────────────────────┘
```

---

# 12.3. Comprobaciones sin tensión

Antes de realizar determinadas pruebas debemos asegurarnos de que el circuito está sin tensión.

Podemos encontrar una secuencia como:

```text
DESCONEXIÓN
     ↓
BLOQUEO / SEÑALIZACIÓN
     ↓
COMPROBACIÓN DE AUSENCIA
DE TENSIÓN
     ↓
TRABAJO
```

La ausencia de tensión debe verificarse mediante un procedimiento y un instrumento adecuados.

> **Nunca debemos asumir que un circuito está sin tensión simplemente porque hemos bajado un magnetotérmico.**

---

# 12.4. 1 — Continuidad del conductor de protección

La primera comprobación de nuestra lista es la continuidad de tierra.

En realidad, estamos comprobando la continuidad del **conductor de protección (PE)** y de las conexiones que forman el camino de protección.

Conceptualmente:

```text
CUADRO
  │
  │ PE
  │
  ├─────────────► TOMA
  │
  ├─────────────► CARCASA
  │
  └─────────────► OTROS ELEMENTOS
```

Queremos asegurarnos de que existe un camino conductor continuo.

---

# 12.5. ¿Por qué es tan importante?

Imagina una carcasa metálica que accidentalmente queda conectada a fase.

Si el conductor de protección está correctamente conectado:

```text
FASE
 ↓
CARCASA
 ↓
PE
 ↓
TIERRA / SISTEMA DE PROTECCIÓN
```

la instalación dispone de un camino previsto para la corriente de defecto y las protecciones pueden actuar conforme al sistema de puesta a tierra y las condiciones de la instalación.

Si el PE está interrumpido:

```text
FASE
 ↓
CARCASA
 ↓
   X
 PE INTERRUMPIDO
```

la carcasa puede quedar en una situación peligrosa.

> **La continuidad del PE no es un detalle. Es una comprobación de seguridad.**

---

# 12.6. ¿Cómo se comprueba?

La comprobación se realiza con un instrumento adecuado para medir continuidad, siguiendo el procedimiento correspondiente.

En determinadas verificaciones reglamentarias se utiliza un comprobador específico de baja resistencia.

El objetivo no es simplemente:

> "Que pite."

Debemos conocer:

* qué puntos estamos comprobando;
* qué resistencia estamos midiendo;
* qué valor es aceptable para la instalación;
* qué procedimiento corresponde.

---

# 12.7. Error frecuente

Un error típico es comprobar solamente:

```text
PE DEL CUADRO
     ↓
PRIMERA TOMA
```

y dar por terminada la prueba.

Debemos comprobar los puntos que correspondan a la instalación y al procedimiento de verificación.

---

# 12.8. 2 — Resistencia de aislamiento

La siguiente comprobación importante es el aislamiento.

Aquí entra en juego el instrumento que vimos en el capítulo anterior:

> **el medidor de aislamiento o megóhmetro.**

Conceptualmente:

```text
CONDUCTOR
    │
    │
══════════════
 AISLAMIENTO
══════════════
    │
    │
OTRO CONDUCTOR
```

Queremos comprobar que el aislamiento mantiene una resistencia suficientemente elevada.

---

# 12.9. ¿Qué buscamos?

De forma simplificada:

```text
AISLAMIENTO CORRECTO
        ↓
RESISTENCIA ALTA


AISLAMIENTO DEFECTUOSO
        ↓
RESISTENCIA BAJA
```

Una resistencia de aislamiento baja puede indicar:

* deterioro;
* humedad;
* daño mecánico;
* contaminación;
* conductor mal instalado;
* contacto no deseado entre conductores.

---

# 12.10. Precaución con equipos electrónicos

Antes de realizar una prueba de aislamiento debemos saber qué elementos están conectados.

Podemos encontrar:

* fuentes de alimentación;
* electrónica de control;
* variadores;
* equipos informáticos;
* detectores;
* reguladores;
* dispositivos electrónicos.

Algunos equipos pueden resultar afectados por determinadas tensiones de prueba.

Por eso:

> **No conectes un megóhmetro indiscriminadamente a toda la instalación.**

La prueba debe realizarse conforme al procedimiento aplicable y teniendo en cuenta los equipos conectados.

---

# 12.11. 3 — Polaridad

La polaridad consiste, entre otras cosas, en comprobar que los conductores están conectados donde corresponde.

En una instalación monofásica debemos distinguir:

```text
L → FASE
N → NEUTRO
PE → PROTECCIÓN
```

Una representación simplificada:

```text
       CUADRO

        L ──────────► INTERRUPTOR
                         │
                         ▼
                       LUZ

        N ───────────────► LUZ

        PE ──────────────► PE
```

---

# 12.12. Un error importante

En determinados circuitos de iluminación:

```text
CORRECTO

FASE
 ↓
INTERRUPTOR
 ↓
LÁMPARA
 ↓
NEUTRO
```

No queremos que el interruptor deje permanentemente la luminaria conectada a fase cuando está "apagada".

La comprobación de polaridad ayuda a detectar conexiones incorrectas.

---

# 12.13. Polaridad en las tomas

En una toma de corriente debemos comprobar que los conductores están correctamente asignados según el sistema y el tipo de instalación.

No debemos confiar simplemente en:

```text
"El cable azul es neutro."
```

El color nos ayuda a identificar conductores, pero:

> **la instalación debe comprobarse eléctricamente.**

---

# 12.14. 4 — Apriete de bornes

Una de las comprobaciones más sencillas y más olvidadas:

> **comprobar las conexiones mecánicas.**

Un borne mal apretado puede provocar:

```text
MAL CONTACTO
     ↓
RESISTENCIA DE CONTACTO
     ↓
CALENTAMIENTO
     ↓
DETERIORO
     ↓
AVERÍA
```

---

# 12.15. No significa "apretar a muerte"

Un error frecuente del aprendiz:

> "Si está bien apretado, cuanto más apriete mejor."

No.

Cada dispositivo o borne puede tener un **par de apriete especificado por el fabricante**.

Por eso:

```text
APRIETE CORRECTO
       ↓
PAR ESPECIFICADO
       ↓
HERRAMIENTA ADECUADA
```

Cuando el fabricante especifica un par, debemos respetarlo.

---

# 12.16. ¿Dónde prestar especial atención?

Revisaremos especialmente:

* IGA;
* diferenciales;
* magnetotérmicos;
* barras de neutro;
* barras de tierra;
* bornes de entrada;
* bornes de salida;
* conexiones de conductores de mayor sección;
* terminales;
* elementos con vibración.

---

# 12.17. 5 — Magnetotérmicos correctos

No basta con que el magnetotérmico "quepa".

Debemos comprobar:

* calibre;
* número de polos;
* curva cuando corresponda;
* poder de corte;
* compatibilidad con la instalación;
* sección del conductor;
* circuito protegido.

Por ejemplo:

```text
C1
 ↓
ILUMINACIÓN
 ↓
PIA
 ↓
10 A
 ↓
1,5 mm²
```

No debemos seleccionar el PIA simplemente por costumbre.

---

# 12.18. Error frecuente

> "Para este circuito siempre pongo un 16 A."

No necesariamente.

La protección debe corresponder a:

* características del circuito;
* conductores;
* método de instalación;
* cargas;
* normativa aplicable.

---

# 12.19. 6 — Diferencial

El diferencial es uno de los dispositivos que debemos comprobar antes de dar por terminada la instalación.

Debemos verificar:

* tipo;
* corriente nominal;
* sensibilidad;
* número de polos;
* conexiones;
* circuitos protegidos;
* compatibilidad con la instalación.

---

# 12.20. Botón TEST

Muchos diferenciales disponen de un botón:

```text
┌──────────────────┐
│     DIFERENCIAL  │
│                  │
│       [ TEST ]   │
└──────────────────┘
```

El botón permite comprobar el funcionamiento del mecanismo de prueba del diferencial.

> **El botón TEST no sustituye a una verificación reglamentaria completa del diferencial.**

La prueba debe realizarse conforme a las características del dispositivo y al procedimiento aplicable.

---

# 12.21. 7 — Tensión entre fases

Esta comprobación depende del tipo de suministro.

En una instalación trifásica podemos encontrar:

```text
L1
L2
L3
N
PE
```

Entre fases podemos realizar:

```text
L1 ────────┐
           │
        MEDIDA
           │
L2 ────────┘
```

Y repetir:

```text
L1 ↔ L2

L2 ↔ L3

L1 ↔ L3
```

Los valores deben corresponder al sistema de suministro y mantenerse dentro de los márgenes aplicables.

---

# 12.22. ¿Por qué medir entre fases?

Porque podemos detectar problemas como:

* ausencia de una fase;
* conexiones incorrectas;
* tensiones anómalas;
* problemas de alimentación.

No debemos interpretar una lectura sin conocer previamente:

> **qué tipo de suministro tenemos.**

---

# 12.23. 8 — Tensión fase-neutro

En una instalación con neutro podemos comprobar:

```text
L ────────┐
          │
       MEDIDA
          │
N ────────┘
```

En una red habitual de baja tensión podemos esperar aproximadamente:

```text
L ─── N
≈ 230 V
```

Pero no debemos aprenderlo como:

> "Siempre tiene que marcar exactamente 230 V."

La tensión real puede variar dentro de los límites establecidos para el suministro.

---

# 12.24. 9 — Tensión fase-tierra

También podemos realizar:

```text
L ────────┐
          │
       MEDIDA
          │
PE ───────┘
```

Esta comprobación nos ayuda a evaluar la presencia de tensión respecto al conductor de protección.

En condiciones normales, la tensión fase-tierra será próxima a la tensión fase-neutro, pero el valor concreto depende de las condiciones de la red y de la instalación.

---

# 12.25. Las tres medidas juntas

En una instalación trifásica podemos plantear:

```text
           L1
          /  \
         /    \
       L2──────L3
```

y además:

```text
L1 ── N
L2 ── N
L3 ── N
```

y:

```text
L1 ── PE
L2 ── PE
L3 ── PE
```

No basta con hacer una única medida y asumir que todo está correcto.

---

# 12.26. Tabla de medidas

| Comprobación | Puntos                |
| ------------ | --------------------- |
| Entre fases  | L1–L2 / L2–L3 / L1–L3 |
| Fase-neutro  | L1–N / L2–N / L3–N    |
| Fase-tierra  | L1–PE / L2–PE / L3–PE |

En una instalación monofásica normalmente tendremos:

| Comprobación  | Puntos               |
| ------------- | -------------------- |
| Fase-neutro   | L–N                  |
| Fase-tierra   | L–PE                 |
| Neutro-tierra | N–PE, cuando proceda |

---

# 12.27. 10 — Etiquetado

Una instalación correctamente montada también debe estar correctamente identificada.

Debemos poder reconocer:

* IGA;
* diferenciales;
* PIAs;
* circuitos;
* barras;
* entradas y salidas;
* conductores cuando sea necesario;
* equipos;
* cuadros.

Por ejemplo:

```text
┌──────────────────────────┐
│ IGA                      │
├──────────────────────────┤
│ ID 1                     │
│  ├─ C1 ILUMINACIÓN       │
│  ├─ C2 TOMAS             │
│  ├─ C3 COCINA            │
│  └─ C4 LAVADORA          │
├──────────────────────────┤
│ ID 2                     │
│  ├─ C5 BAÑO/COCINA       │
│  └─ C6 CLIMATIZACIÓN     │
└──────────────────────────┘
```

El etiquetado permite trabajar posteriormente con mayor seguridad y rapidez.

---

# 12.28. ¿Por qué etiquetar?

Imagina que dentro de seis meses alguien necesita desconectar:

> "El circuito de la lavadora."

Si el cuadro está correctamente identificado:

```text
LAVADORA
   ↓
C4
   ↓
PIA
```

La intervención es mucho más sencilla.

Si no hay etiquetas:

```text
¿CUÁL ES?
   ↓
PRUEBA
   ↓
DESCONECTA
   ↓
COMPRUEBA
   ↓
VUELVE A CONECTAR
```

Se pierde tiempo y aumenta la posibilidad de error.

---

# 12.29. Checklist de preenergización

Esta es la lista que podemos utilizar en obra.

## Inspección visual

* [ ] Cuadro terminado.
* [ ] Envolventes cerradas.
* [ ] Conductores correctamente conectados.
* [ ] No existen conductores sueltos.
* [ ] Canalizaciones terminadas.
* [ ] Mecanismos fijados.
* [ ] Conductores identificados.
* [ ] Protecciones identificadas.

## Comprobaciones sin tensión

* [ ] Continuidad del conductor de protección.
* [ ] Continuidad de conexiones necesarias.
* [ ] Resistencia de aislamiento.
* [ ] Polaridad.
* [ ] Comprobación de conexiones.
* [ ] Apriete de bornes.
* [ ] Magnetotérmicos correctos.
* [ ] Diferenciales correctamente conectados.
* [ ] Ausencia de cortocircuitos o conexiones indebidas.

## Energización controlada

* [ ] Energización realizada de forma controlada.
* [ ] Tensión fase-neutro.
* [ ] Tensión fase-tierra.
* [ ] Tensión entre fases, cuando proceda.
* [ ] Comprobación de circuitos.
* [ ] Prueba de diferenciales según procedimiento.
* [ ] Comprobación de funcionamiento de receptores.

## Final

* [ ] Etiquetado.
* [ ] Cuadro identificado.
* [ ] Circuitos identificados.
* [ ] Documentación actualizada.
* [ ] Resultados registrados cuando corresponda.

---

# 12.30. La secuencia completa

Podemos resumir todo el capítulo así:

```text
                  INSTALACIÓN
                     │
                     ▼
              INSPECCIÓN VISUAL
                     │
                     ▼
              ¿TODO CORRECTO?
                │          │
               NO         SÍ
                │          │
                ▼          ▼
             CORREGIR   SIN TENSIÓN
                           │
                           ▼
                 ┌─────────────────┐
                 │ CONTINUIDAD PE  │
                 │ AISLAMIENTO     │
                 │ POLARIDAD       │
                 │ APRIETES        │
                 │ PROTECCIONES    │
                 └────────┬────────┘
                          │
                          ▼
                   ¿TODO CORRECTO?
                     │          │
                    NO         SÍ
                     │          │
                     ▼          ▼
                  CORREGIR   ENERGIZAR
                                │
                                ▼
                     ┌──────────────────┐
                     │ FASE-NEUTRO      │
                     │ FASE-TIERRA      │
                     │ ENTRE FASES      │
                     │ DIFERENCIAL      │
                     │ FUNCIONAMIENTO   │
                     └────────┬─────────┘
                              │
                              ▼
                         ETIQUETAR
                              │
                              ▼
                         DOCUMENTAR
```

---

# 12.31. El error de "dar corriente para probar"

Una mala práctica es:

```text
"Vamos a darle corriente
y vemos si funciona."
```

Eso **no es un procedimiento de comprobación**.

Si existe un error de cableado:

```text
ENERGIZAR
   ↓
ERROR
   ↓
CORTOCIRCUITO
   ↓
DISPARO / DAÑO / RIESGO
```

Es mucho mejor detectar el problema:

```text
SIN TENSIÓN
   ↓
MEDIR
   ↓
DETECTAR ERROR
   ↓
CORREGIR
   ↓
ENERGIZAR
```

---

# 12.32. No confundir prueba funcional con verificación eléctrica

Que una lámpara se encienda:

```text
INTERRUPTOR
     ↓
LÁMPARA
     ↓
💡
```

no significa que toda la instalación esté correctamente verificada.

Podemos tener:

* una tierra incorrecta;
* un aislamiento deficiente;
* un diferencial incorrecto;
* un borne flojo;
* una protección inadecuada.

Por eso:

> **"Funciona" no significa necesariamente "está correctamente verificado".**

---

# 12.33. Qué debe aprender el aprendiz

No queremos que memorices solamente una lista.

Queremos que entiendas el motivo.

| Comprobación    | ¿Qué buscamos?                          |
| --------------- | --------------------------------------- |
| Continuidad PE  | Camino de protección continuo           |
| Aislamiento     | Evitar contactos eléctricos no deseados |
| Polaridad       | Conductores correctamente conectados    |
| Apriete         | Conexiones mecánicas fiables            |
| Magnetotérmicos | Protección adecuada                     |
| Diferencial     | Protección diferencial adecuada         |
| Fase-fase       | Alimentación correcta                   |
| Fase-neutro     | Tensión de servicio                     |
| Fase-tierra     | Comportamiento respecto al PE           |
| Etiquetado      | Identificación clara                    |

---

# 12.34. La chuleta del capítulo

Antes de energizar:

```text
👀 MIRAR
   ↓
🔌 DESENERGIZAR
   ↓
🔎 COMPROBAR
   ↓
🌍 TIERRA
   ↓
🛡️ AISLAMIENTO
   ↓
↔️ POLARIDAD
   ↓
🔩 APRIETES
   ↓
⚡ PROTECCIONES
   ↓
🔌 ENERGIZAR CONTROLADAMENTE
   ↓
📏 MEDIR
   ↓
🏷️ ETIQUETAR
   ↓
📋 DOCUMENTAR
```

---

# 12.35. Regla de oro

> **No energices una instalación para descubrir si está bien hecha.**

Primero:

> **comprueba que está bien hecha.**

Después:

> **energízala de forma controlada.**

Y finalmente:

> **comprueba que funciona correctamente.**

La diferencia parece pequeña, pero representa una forma completamente distinta de trabajar.

---

# 12.36. Checklist imprimible

```text
╔══════════════════════════════════════════╗
║       COMPROBACIÓN ANTES DE ENERGIZAR   ║
╠══════════════════════════════════════════╣
║                                          ║
║ INSPECCIÓN                               ║
║                                          ║
║ ☐ Cuadro terminado                       ║
║ ☐ Conductores revisados                  ║
║ ☐ Protecciones correctas                 ║
║ ☐ Canalizaciones terminadas              ║
║ ☐ Etiquetado                             ║
║                                          ║
║ SIN TENSIÓN                              ║
║                                          ║
║ ☐ Continuidad PE                         ║
║ ☐ Aislamiento                            ║
║ ☐ Polaridad                              ║
║ ☐ Apriete de bornes                      ║
║ ☐ Comprobación de protecciones            ║
║                                          ║
║ CON TENSIÓN                              ║
║                                          ║
║ ☐ Fase-neutro                            ║
║ ☐ Fase-tierra                            ║
║ ☐ Entre fases (si procede)               ║
║ ☐ Diferencial                            ║
║ ☐ Funcionamiento                         ║
║                                          ║
║ FINAL                                    ║
║                                          ║
║ ☐ Etiquetado definitivo                  ║
║ ☐ Documentación                          ║
║ ☐ Resultados registrados                 ║
║                                          ║
╚══════════════════════════════════════════╝
```

> **Una instalación se termina cuando está montada, comprobada, identificada y documentada.**
