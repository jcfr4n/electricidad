# 13. Averías típicas

Una instalación eléctrica puede funcionar perfectamente durante años y, de repente, aparecer un problema:

* salta un magnetotérmico;
* dispara el diferencial;
* una parte de la vivienda se queda sin corriente;
* una toma deja de funcionar;
* aparece tensión donde no debería;
* una carcasa metálica presenta un problema de aislamiento;
* una protección dispara aparentemente "sin motivo".

Para el aprendiz, una avería no debería convertirse en:

> "Vamos a probar cosas a ver qué pasa."

El objetivo es aprender a trabajar de otra manera:

```text
SÍNTOMA
   ↓
OBSERVAR
   ↓
FORMULAR HIPÓTESIS
   ↓
MEDIR
   ↓
DESCARTAR
   ↓
LOCALIZAR
   ↓
REPARAR
   ↓
VOLVER A COMPROBAR
```

> **Un buen diagnóstico no consiste en acertar. Consiste en descartar sistemáticamente hasta encontrar la causa.**

---

# 13.1. Antes de buscar una avería

Antes de abrir un cuadro o tocar conductores debemos saber:

* qué ha ocurrido;
* cuándo empezó;
* qué estaba funcionando;
* qué protección ha disparado;
* si el problema es permanente o intermitente;
* si afecta a toda la instalación o solamente a un circuito.

Preguntas aparentemente sencillas pueden ahorrar mucho tiempo.

Por ejemplo:

> "¿Qué estaba conectado cuando ocurrió?"

puede ser mucho más útil que empezar inmediatamente a desmontar el cuadro.

---

# 13.2. El método del electricista

Una forma práctica de pensar ante una avería:

```text
1. ¿QUÉ HA PASADO?
        ↓
2. ¿QUÉ PROTECCIÓN HA ACTUADO?
        ↓
3. ¿QUÉ CIRCUITO ESTÁ AFECTADO?
        ↓
4. ¿CUÁNDO OCURRE?
        ↓
5. ¿QUÉ ELEMENTOS TIENEN ALGO EN COMÚN?
        ↓
6. ¿QUÉ PUEDO MEDIR?
        ↓
7. ¿QUÉ RESULTADO ESPERO?
        ↓
8. ¿COINCIDE CON LA MEDIDA?
```

La pregunta número 7 es especialmente importante.

> **No midas por medir. Antes de medir, intenta saber qué resultado esperas encontrar.**

---

# 13.3. Seguridad antes del diagnóstico

Una avería no convierte automáticamente una instalación en segura para manipular.

Al contrario:

> **Una instalación averiada puede ser más peligrosa que una instalación funcionando normalmente.**

Podemos encontrarnos con:

* conductores dañados;
* aislamiento deteriorado;
* tensiones inesperadas;
* neutros interrumpidos;
* masas metálicas con problemas;
* conexiones recalentadas.

Antes de intervenir debemos aplicar las medidas de seguridad correspondientes.

---

# 13.4. Herramientas de diagnóstico

Dependiendo de la avería podemos utilizar:

* multímetro;
* comprobador de tensión;
* pinza amperimétrica;
* pinza de fugas;
* medidor de aislamiento;
* comprobador de continuidad;
* comprobador de diferenciales;
* herramientas de inspección visual.

Pero recuerda:

> **No todas las averías se solucionan con un multímetro.**

---

# 13.5. Avería 1 — Cortocircuito

Un cortocircuito se produce cuando aparece una conexión eléctrica de impedancia muy baja entre puntos que deberían permanecer a diferente potencial.

En una situación simplificada:

```text
FASE ───────────────┐
                    │
                    X
                    │
NEUTRO ─────────────┘
```

La corriente puede aumentar rápidamente y actuar la protección correspondiente.

---

# 13.6. Síntoma típico

Un síntoma frecuente:

```text
SUBIMOS EL PIA
      ↓
DISPARA INMEDIATAMENTE
      ↓
VOLVEMOS A SUBIR
      ↓
DISPARA OTRA VEZ
```

Esto puede indicar un cortocircuito o una sobreintensidad importante.

Pero no debemos asumir inmediatamente que existe un cortocircuito.

También puede haber:

* una carga defectuosa;
* un equipo averiado;
* una conexión incorrecta;
* un problema de cableado.

---

# 13.7. Primer diagnóstico

Preguntaremos:

### ¿Dispara con todo desconectado?

```text
TODAS LAS CARGAS
      ↓
DESCONECTADAS
      ↓
SUBIR PIA
```

Si sigue disparando, el problema puede encontrarse en:

* el cableado;
* una caja;
* un mecanismo;
* el propio circuito;
* el dispositivo de protección.

Si deja de disparar:

```text
CARGA DESCONECTADA
        ↓
PIA NO DISPARA
        ↓
SOSPECHA DE LA CARGA
```

---

# 13.8. Localización por sectores

Una técnica básica consiste en dividir el circuito.

```text
CUADRO
  │
  ├──── CAJA 1
  │
  ├──── CAJA 2
  │
  ├──── CAJA 3
  │
  └──── RECEPTOR
```

Podemos ir aislando sectores hasta localizar dónde aparece el problema.

La idea es:

> **reducir el problema a una parte cada vez más pequeña de la instalación.**

---

# 13.9. Cortocircuito durante una instalación nueva

En una instalación recién ejecutada debemos sospechar especialmente de:

* conductores mal conectados;
* hilos sueltos;
* bornes incorrectos;
* mecanismos mal cableados;
* conductores pellizcados;
* aislamiento dañado;
* cajas mal montadas.

Por ejemplo:

```text
FASE ──────┐
           │
           X  ← conductor pellizcado
           │
NEUTRO ────┘
```

---

# 13.10. Una pista muy útil

Si el problema apareció justo después de realizar un trabajo:

> **el trabajo realizado es una de las primeras cosas que debemos revisar.**

Esto parece obvio, pero en la práctica se pierde mucho tiempo buscando una avería "misteriosa" que apareció inmediatamente después de modificar la instalación.

---

# 13.11. Avería 2 — Fugas

Una fuga aparece cuando parte de la corriente encuentra un camino no deseado.

Por ejemplo:

```text
FASE
 │
 │
 ▼
EQUIPO
 │
 │
 ├──────────────► CARGA
 │
 └────► PE / TIERRA
```

La corriente que circula por un camino distinto del previsto puede provocar la actuación del diferencial.

---

# 13.12. Fuga no significa cortocircuito

Esta distinción es fundamental.

Un cortocircuito:

```text
FASE ─── X ─── NEUTRO
```

puede generar una corriente muy elevada.

Una fuga:

```text
FASE ─── CARGA
          │
          └────► PE
```

puede ser mucho menor y aun así provocar el disparo del diferencial.

Por tanto:

> **Un diferencial puede disparar aunque no exista un cortocircuito.**

---

# 13.13. Síntoma típico de una fuga

```text
CONECTAMOS CIRCUITO
        ↓
DIFERENCIAL DISPARA
        ↓
REARMAMOS
        ↓
VUELVE A DISPARAR
```

O puede ocurrir:

```text
FUNCIONA DURANTE HORAS
        ↓
SE CONECTA UN EQUIPO
        ↓
DISPARA DIFERENCIAL
```

---

# 13.14. Fuga permanente vs intermitente

Es muy importante distinguirlas.

### Fuga permanente

```text
CONECTAR
   ↓
DISPARAR
   ↓
SIEMPRE
```

Puede indicar un defecto permanente.

### Fuga intermitente

```text
FUNCIONA
   ↓
TIEMPO
   ↓
DISPARA
   ↓
REARMA
   ↓
FUNCIONA
```

Puede estar relacionada con:

* humedad;
* temperatura;
* un equipo;
* aislamiento deteriorado;
* varios receptores acumulando pequeñas fugas.

---

# 13.15. Cómo localizar una fuga

Una estrategia sencilla:

```text
TODOS LOS CIRCUITOS
       ↓
DESCONECTAR
       ↓
CONECTAR UNO
       ↓
OBSERVAR
       ↓
AÑADIR SIGUIENTE
       ↓
OBSERVAR
```

Cuando aparece el problema:

```text
ÚLTIMO CIRCUITO CONECTADO
           ↓
        SOSPECHOSO
```

No significa necesariamente que sea el culpable, pero reduce mucho el campo de búsqueda.

---

# 13.16. Pinza detectora de fugas

Cuando tenemos acceso a una pinza adecuada para corrientes de fuga podemos realizar una búsqueda más precisa.

La idea básica es medir la corriente residual asociada al conjunto de conductores correspondiente.

```text
        PINZA
       ┌─────┐
       │  ○  │
       └──┬──┘
          │
       L + N
          │
          ▼
        CARGA
```

La lectura puede ayudarnos a identificar qué circuito presenta una corriente de fuga significativa.

---

# 13.17. Una fuga puede tener varias causas

No debemos pensar automáticamente:

> "El aparato está roto."

También puede existir:

* humedad;
* cable deteriorado;
* aislamiento dañado;
* resistencia calefactora deteriorada;
* motor;
* filtro antiparasitario;
* conexión incorrecta;
* acumulación de pequeñas corrientes de fuga.

---

# 13.18. Avería 3 — Diferencial que dispara

Este es probablemente uno de los problemas que más se encuentra en instalaciones domésticas.

El síntoma:

```text
DIFERENCIAL
     ↓
DISPARA
```

La primera pregunta debería ser:

> **¿Dispara inmediatamente o después de un tiempo?**

---

# 13.19. Disparo inmediato

```text
REARMAR
   ↓
DISPARA
   ↓
REARMAR
   ↓
DISPARA
```

Debemos sospechar de:

* fuga importante;
* conexión incorrecta;
* equipo defectuoso;
* neutro asociado incorrectamente;
* problema de aislamiento.

---

# 13.20. Disparo después de un tiempo

```text
REARMAR
   ↓
FUNCIONA
   ↓
30 min
   ↓
DISPARA
```

Podemos investigar:

* humedad;
* temperatura;
* equipos que entran en funcionamiento posteriormente;
* resistencias calefactoras;
* motores;
* acumulación de fugas;
* problemas intermitentes.

---

# 13.21. Un clásico: neutros mezclados

Un error frecuente en cuadros eléctricos es asociar incorrectamente los neutros de circuitos protegidos por diferentes diferenciales.

Conceptualmente:

```text
DIFERENCIAL 1
      │
      ├── L ─── Circuito A
      │
      └── N ─── Circuito A


DIFERENCIAL 2
      │
      ├── L ─── Circuito B
      │
      └── N ─── Circuito B
```

No debemos mezclar:

```text
N del DIF. 1
      │
      └────────► circuito protegido por DIF. 2
```

Esto puede provocar disparos aparentemente inexplicables.

---

# 13.22. Diagnóstico por desconexión de circuitos

Una técnica práctica:

```text
DIFERENCIAL
     ↓
PIAs ABAJO
     ↓
REARMAR DIFERENCIAL
     ↓
SUBIR PIAs UNO A UNO
```

Si al conectar un determinado circuito vuelve a disparar:

```text
CIRCUITO
   ↓
SOSPECHOSO
```

A partir de ahí seguimos investigando ese circuito.

---

# 13.23. Pero cuidado

Que el diferencial dispare al conectar un circuito **no demuestra por sí solo** que el circuito tenga una avería.

Puede haber:

* una fuga acumulada;
* un problema de neutro;
* una conexión incorrecta;
* una característica propia de determinados equipos;
* un problema aguas arriba.

El diagnóstico requiere medir.

---

# 13.24. Avería 4 — Magnetotérmico que dispara

El magnetotérmico protege fundamentalmente frente a:

* sobrecargas;
* cortocircuitos.

Por eso debemos preguntar:

> **¿Dispara inmediatamente o después de un tiempo?**

---

# 13.25. Disparo inmediato

```text
CONECTAR
   ↓
PIA
   ↓
¡CLAC!
   ↓
DISPARA
```

Puede apuntar a:

* cortocircuito;
* corriente muy elevada;
* carga defectuosa;
* conexión incorrecta.

---

# 13.26. Disparo después de un tiempo

```text
CARGA
  ↓
FUNCIONA
  ↓
10 min
  ↓
DISPARA
```

Puede indicar una sobrecarga.

Por ejemplo:

```text
CARGA 1 ───┐
CARGA 2 ───┤
CARGA 3 ───┤──► PIA
CARGA 4 ───┘
```

La suma de las corrientes puede superar la capacidad prevista del circuito.

---

# 13.27. No subir el calibre "para que no dispare"

Este es uno de los errores más peligrosos.

Situación:

```text
PIA 16 A
   ↓
DISPARA
```

Respuesta incorrecta:

```text
"Ponemos uno de 20 A."
```

Peor todavía:

```text
"Ponemos uno de 25 A."
```

La protección no se selecciona para evitar el disparo.

Se selecciona para proteger adecuadamente:

* conductores;
* circuito;
* equipos;
* instalación.

> **Si un magnetotérmico dispara, hay que investigar por qué.**

---

# 13.28. Sobrecarga

Una sobrecarga puede producirse cuando conectamos demasiada potencia a un circuito.

Por ejemplo:

```text
CIRCUITO
   │
   ├── 2.000 W
   ├── 1.500 W
   ├── 1.000 W
   └── 1.000 W
        │
        ▼
     DEMASIADA
     DEMANDA
```

La instalación debe estar diseñada para la carga prevista.

---

# 13.29. Avería 5 — Neutro cortado

Un neutro interrumpido puede producir síntomas muy diferentes dependiendo del tipo de instalación y de las cargas conectadas.

En un circuito monofásico:

```text
FASE ─────────────── CARGA

NEUTRO ───────X───── CARGA
              ↑
           CORTADO
```

La carga puede dejar de funcionar.

Pero en determinadas configuraciones, especialmente en instalaciones trifásicas con cargas conectadas entre fase y neutro, un problema de neutro puede generar **tensiones anómalas**.

---

# 13.30. Síntomas de un neutro defectuoso

Podemos encontrar:

* algunas cargas funcionando y otras no;
* tensiones extrañas;
* iluminación que cambia de intensidad;
* equipos que se comportan de manera anómala;
* tensiones fase-neutro diferentes de las esperadas.

En una instalación trifásica:

```text
        L1
         │
       CARGA
         │
         N
         │
       CARGA
         │
         L2
```

la pérdida o mala conexión del neutro puede alterar la distribución de tensiones entre cargas.

---

# 13.31. Diagnóstico del neutro

Podemos comparar medidas:

```text
L1 ─ N
L2 ─ N
L3 ─ N
```

y, cuando corresponda:

```text
L1 ─ L2
L2 ─ L3
L1 ─ L3
```

Si encontramos valores anómalos, debemos detenernos y analizar el circuito.

> **No debemos asumir que una tensión extraña es simplemente "un multímetro que mide mal".**

---

# 13.32. El neutro también puede tener un mal contacto

No siempre está completamente cortado.

Podemos encontrar:

```text
N ────────●───────
          ↑
      MAL CONTACTO
```

Un borne flojo puede provocar problemas intermitentes.

Por eso, si aparecen síntomas extraños:

> **revisar conexiones es una de las primeras comprobaciones.**

---

# 13.33. Avería 6 — Tierra defectuosa

Una instalación puede tener un problema en el sistema de protección aunque todo aparentemente funcione.

Por ejemplo:

```text
CUADRO
  │
  │ PE
  X  ← INTERRUPCIÓN
  │
  │
TOMA
```

La toma puede seguir funcionando.

Pero el conductor de protección puede haber perdido continuidad.

---

# 13.34. Síntoma peligroso

Una tierra defectuosa puede no producir ningún síntoma evidente.

Ese es precisamente el problema.

```text
LÁMPARA → FUNCIONA
TOMA    → FUNCIONA
EQUIPO  → FUNCIONA

        PERO...

PE      → DEFECTUOSO
```

Por eso las comprobaciones de protección no pueden basarse solamente en:

> "Todo funciona."

---

# 13.35. Comprobación del PE

Debemos verificar la continuidad del conductor de protección mediante el procedimiento y el instrumento adecuados.

Conceptualmente:

```text
BARRA PE
   │
   ├────────► TOMA 1
   │
   ├────────► TOMA 2
   │
   ├────────► TOMA 3
   │
   └────────► EQUIPO
```

La medición permite comprobar que el camino de protección es continuo.

---

# 13.36. Tierra no es lo mismo que neutro

Este error aparece especialmente en aprendices.

```text
N  ≠  PE
```

Son conductores con funciones diferentes.

No debemos solucionar una tierra defectuosa haciendo:

```text
"Un puente entre neutro y tierra."
```

porque eso puede crear una situación peligrosa y no constituye una reparación válida de una instalación.

---

# 13.37. Tabla rápida de síntomas

| Síntoma                                  | Posibles causas                                           |
| ---------------------------------------- | --------------------------------------------------------- |
| PIA dispara inmediatamente               | Cortocircuito, carga defectuosa, conexión incorrecta      |
| PIA dispara después de un tiempo         | Sobrecarga, calentamiento, carga excesiva                 |
| Diferencial dispara inmediatamente       | Fuga, aislamiento, neutro incorrecto, equipo defectuoso   |
| Diferencial dispara ocasionalmente       | Fuga intermitente, humedad, equipos, acumulación de fugas |
| Una toma no funciona                     | Fase, neutro, conexión, mecanismo, protección             |
| Varias cargas funcionan de forma extraña | Posible problema de neutro o alimentación                 |
| Todo funciona pero PE es incorrecto      | Fallo del sistema de protección                           |
| Problema aparece tras una reforma        | Revisar primero el trabajo realizado                      |

---

# 13.38. El árbol de diagnóstico

Podemos utilizar este esquema como referencia rápida.

```text
                 ¿QUÉ OCURRE?
                      │
          ┌───────────┴───────────┐
          │                       │
     DISPARA PIA            DISPARA DIF.
          │                       │
          ▼                       ▼
 ¿INMEDIATO?                ¿INMEDIATO?
    │      │                  │      │
   SÍ     NO                 SÍ     NO
    │      │                  │      │
    ▼      ▼                  ▼      ▼
CORTO-   SOBRE-             FUGA   FUGA
CIRCUITO CARGA              /NEUTRO INTERMITENTE
```

Pero todavía debemos continuar:

```text
SÍNTOMA
  ↓
CIRCUITO AFECTADO
  ↓
CARGAS
  ↓
CABLEADO
  ↓
CONEXIONES
  ↓
MEDICIONES
```

---

# 13.39. Método de aislamiento del problema

Cuando tenemos muchos elementos, podemos dividir el circuito.

```text
                 CIRCUITO
                    │
          ┌─────────┴─────────┐
          │                   │
       SECTOR A            SECTOR B
          │                   │
       ¿FALLA?              ¿FALLA?
          │                   │
          ▼                   ▼
       AISLAR               AISLAR
```

Después:

```text
SECTOR A
   ↓
MITAD
   ↓
MITAD
   ↓
PUNTO
```

Esto es mucho más eficiente que desmontar toda la instalación.

---

# 13.40. La técnica de "dividir y vencer"

Imaginemos un circuito con 20 puntos:

```text
1─2─3─4─5─6─7─8─9─10
11─12─13─14─15─16─17─18─19─20
```

Si existe un defecto, no queremos comprobar los 20 uno por uno sin estrategia.

Podemos dividir:

```text
1────10
11───20
```

Después:

```text
1────5
6────10
```

Y así sucesivamente.

> **Cada medición debe reducir el número de posibilidades.**

---

# 13.41. No cambiar varias cosas a la vez

Un error muy común:

```text
CAMBIO EL PIA
+
CAMBIO EL DIFERENCIAL
+
CAMBIO EL CABLE
+
CAMBIO EL RECEPTOR
```

y después:

> "Ya funciona."

Pero no sabemos qué estaba fallando.

Durante un diagnóstico controlado es preferible:

```text
CAMBIO / COMPRUEBO
       ↓
MIDO
       ↓
OBSERVO
       ↓
SIGUIENTE PASO
```

---

# 13.42. La información del usuario

Cuando estamos reparando una instalación existente, la persona que estaba utilizando el circuito puede proporcionar información valiosa.

Preguntas útiles:

* ¿Cuándo ocurrió?
* ¿Qué estaba conectado?
* ¿Había humedad?
* ¿Se había realizado alguna obra?
* ¿Había olor a quemado?
* ¿Se escuchó un ruido?
* ¿Saltó el diferencial o el magnetotérmico?
* ¿Volvió a funcionar después de rearmar?
* ¿Ocurre siempre o solamente a veces?

No debemos despreciar esta información.

---

# 13.43. Olor, ruido y temperatura

Los sentidos también son herramientas de diagnóstico.

### Olor

Un olor a plástico o aislamiento quemado puede indicar:

```text
MAL CONTACTO
     ↓
CALENTAMIENTO
     ↓
DETERIORO
```

### Ruido

Un zumbido, chisporroteo o ruido anormal puede indicar un problema que requiere investigación.

### Temperatura

Una conexión excesivamente caliente puede ser una señal de:

* sobrecarga;
* mal contacto;
* resistencia de contacto elevada;
* componente defectuoso.

Pero:

> **Nunca debemos tocar directamente un elemento sospechoso para comprobar si está caliente.**

Utilizaremos procedimientos e instrumentos adecuados.

---

# 13.44. Cámara térmica

En determinados trabajos profesionales puede utilizarse una cámara termográfica.

Permite visualizar diferencias de temperatura:

```text
CONEXIÓN A     CONEXIÓN B
    ↓              ↓
   ██             ████
NORMAL          MÁS CALIENTE
```

Puede ayudar a detectar:

* bornes calientes;
* desequilibrios;
* sobrecargas;
* conexiones defectuosas.

No sustituye a las demás comprobaciones.

---

# 13.45. Una avería puede tener más de una causa

No siempre existe un único problema.

Podemos encontrar:

```text
NEUTRO DEFECTUOSO
       +
BORNE FLOJO
       +
CARGA DEFECTUOSA
```

Por eso, después de reparar el primer defecto:

> **hay que volver a comprobar la instalación completa afectada.**

---

# 13.46. Después de reparar

Nunca debemos quedarnos en:

> "Ya no dispara."

Hay que comprobar:

```text
REPARACIÓN
    ↓
INSPECCIÓN
    ↓
CONTINUIDAD / AISLAMIENTO
    ↓
ENERGIZACIÓN CONTROLADA
    ↓
MEDICIONES
    ↓
PRUEBA FUNCIONAL
```

La reparación no termina cuando desaparece el síntoma.

Termina cuando:

> **hemos encontrado la causa, la hemos corregido y hemos verificado que la instalación vuelve a ser segura y funcional.**

---

# 13.47. Tabla de diagnóstico rápido

| Lo que ves                      | Primera pregunta                                 |
| ------------------------------- | ------------------------------------------------ |
| PIA dispara al instante         | ¿Hay corto o carga defectuosa?                   |
| PIA dispara tras tiempo         | ¿Hay sobrecarga?                                 |
| Diferencial dispara al instante | ¿Hay fuga o problema de neutro?                  |
| Diferencial dispara después     | ¿Hay fuga intermitente o acumulada?              |
| Una zona sin corriente          | ¿Dónde se interrumpe fase o neutro?              |
| Tensiones extrañas              | ¿Hay problema de neutro?                         |
| Todo funciona pero PE falla     | ¿Dónde se interrumpe el conductor de protección? |
| Problema tras reforma           | ¿Qué se modificó?                                |

---

# 13.48. El aprendiz frente a una avería

Un principiante puede pensar:

> "¿Qué componente está roto?"

Un electricista empieza preguntando:

> "¿Qué ha cambiado?"

Después:

> "¿Qué protección ha actuado?"

Después:

> "¿Qué circuitos están afectados?"

Y finalmente:

> "¿Qué medición me permite descartar una hipótesis?"

Ese cambio de mentalidad es fundamental.

---

# 13.49. La chuleta del diagnóstico

```text
┌────────────────────────────────────┐
│         DIAGNÓSTICO ELÉCTRICO      │
├────────────────────────────────────┤
│                                    │
│ 1. OBSERVAR                        │
│                                    │
│ 2. PREGUNTAR                       │
│                                    │
│ 3. IDENTIFICAR PROTECCIÓN          │
│                                    │
│ 4. AISLAR EL CIRCUITO              │
│                                    │
│ 5. FORMULAR HIPÓTESIS              │
│                                    │
│ 6. MEDIR                           │
│                                    │
│ 7. DESCARTAR                       │
│                                    │
│ 8. LOCALIZAR                       │
│                                    │
│ 9. REPARAR                         │
│                                    │
│ 10. VOLVER A COMPROBAR             │
│                                    │
└────────────────────────────────────┘
```

---

# 13.50. Regla de oro del diagnóstico

> **No sustituyas piezas hasta que sepas por qué las estás sustituyendo.**

Un magnetotérmico que dispara no significa automáticamente que el magnetotérmico esté mal.

Un diferencial que dispara no significa automáticamente que el diferencial esté mal.

Una lámpara que no funciona no significa automáticamente que la lámpara esté mal.

Y una toma sin tensión no significa automáticamente que el mecanismo esté defectuoso.

La avería está en algún punto del sistema:

```text
ALIMENTACIÓN
     ↓
PROTECCIÓN
     ↓
CABLEADO
     ↓
CONEXIONES
     ↓
RECEPTOR
```

Nuestro trabajo consiste en descubrir **en qué punto se ha perdido la condición correcta**.

---

# 13.51. La frase que debe recordar el aprendiz

> **"Primero observo. Después pienso. Luego mido."**

No al revés.

Porque cambiar piezas al azar puede hacer que una avería desaparezca temporalmente.

Pero **entender por qué ocurrió** es lo que convierte una reparación en un trabajo profesional.
