# 8. Protecciones

Las protecciones eléctricas tienen una misión fundamental: **evitar que una situación anormal termine provocando daños en las personas, los conductores, los equipos o la instalación**.

En este capítulo aprenderemos a reconocer las protecciones más habituales, entender qué detecta cada una y relacionar su actuación con las posibles averías.

> **Importante:** que una protección dispare no significa necesariamente que la protección esté averiada. Muchas veces está haciendo exactamente aquello para lo que fue instalada.

---

## 8.1. Las protecciones que debes reconocer

En una instalación de baja tensión podemos encontrar diferentes dispositivos de protección.

Los más habituales en una vivienda o pequeña instalación son:

| Protección                                   | Protege principalmente frente a                          |
| -------------------------------------------- | -------------------------------------------------------- |
| Fusible                                      | Sobreintensidades                                        |
| Magnetotérmico / PIA                         | Sobrecargas y cortocircuitos                             |
| Interruptor diferencial                      | Corrientes diferenciales / fugas                         |
| Protector contra sobretensiones              | Determinadas sobretensiones                              |
| Conductor PE + puesta a tierra               | Contribuye a la protección frente a contactos indirectos |
| Protección contra sobretensiones permanentes | Sobretensiones mantenidas, cuando corresponde            |

Cada uno tiene una función diferente.

---

# 8.2. Regla fundamental

No debemos pensar:

```text
"Esta protección protege de todo."
```

Debemos pensar:

```text
¿QUÉ FENÓMENO DETECTA?
          ↓
¿QUÉ PROTEGE?
          ↓
¿CUÁNDO DEBE ACTUAR?
```

Por ejemplo:

```text
SOBRECARGA
    ↓
MAGNETOTÉRMICO
```

Mientras que:

```text
FUGA DE CORRIENTE
    ↓
DIFERENCIAL
```

Y:

```text
SOBRETENSIÓN
    ↓
PROTECTOR DE SOBRETENSIONES
```

---

# 8.3. Magnetotérmico

El interruptor automático magnetotérmico, conocido habitualmente como **PIA** cuando protege un circuito individual, protege frente a determinadas **sobreintensidades**.

Tiene dos mecanismos de actuación principales:

```text
              MAGNETOTÉRMICO
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      TÉRMICO              MAGNÉTICO
          │                   │
          ▼                   ▼
    SOBRECARGA           CORTOCIRCUITO
```

---

## 8.3.1. Parte térmica

La parte térmica responde al calentamiento producido por una corriente excesiva mantenida durante un determinado tiempo.

Ejemplo:

```text
Circuito diseñado para 16 A

       ↓

La carga demanda una corriente
excesiva durante cierto tiempo

       ↓

El conductor se calienta

       ↓

Actúa el mecanismo térmico
```

No necesariamente dispara instantáneamente.

---

## 8.3.2. Parte magnética

La parte magnética responde a corrientes muy elevadas, como las producidas por un cortocircuito.

Ejemplo:

```text
FASE ─────────┐
              │
              │ CORTOCIRCUITO
              │
NEUTRO ───────┘

        ↓

CORRIENTE MUY ELEVADA

        ↓

ACTUACIÓN MAGNÉTICA
```

La actuación es mucho más rápida que en una sobrecarga.

---

# 8.4. ¿Cuándo dispara un magnetotérmico?

Podemos pensar en dos escenarios principales:

### Sobrecarga

```text
Muchos receptores
       ↓
Demasiada corriente
       ↓
Calentamiento
       ↓
Disparo térmico
```

### Cortocircuito

```text
Contacto accidental
entre conductores
       ↓
Corriente muy elevada
       ↓
Disparo magnético
```

---

# 8.5. Cómo reconocer una avería por el comportamiento del PIA

Una primera pista es **cuándo dispara**.

| Comportamiento                        | Posible causa                           |
| ------------------------------------- | --------------------------------------- |
| Dispara inmediatamente                | Cortocircuito o defecto importante      |
| Dispara al conectar un aparato        | Posible avería en el aparato o circuito |
| Dispara después de un tiempo          | Posible sobrecarga                      |
| Dispara al conectar varios receptores | Posible exceso de carga                 |
| No rearma                             | El defecto puede seguir presente        |

Esto es únicamente una orientación.

> **El comportamiento del dispositivo nos da una pista; la medición nos da el diagnóstico.**

---

# 8.6. Cómo comprobar un magnetotérmico

Una comprobación básica comienza por la observación.

### 1. Observar

```text
¿Está disparado?

¿Se puede rearmar?

¿Vuelve a disparar?

¿En qué momento?
```

### 2. Identificar el circuito

```text
PIA
 ↓
¿QUÉ CIRCUITO PROTEGE?
```

### 3. Desconectar cargas

Si el procedimiento de trabajo lo permite:

```text
Desconectar receptores
        ↓
Rearmar
        ↓
Observar
```

### 4. Medir

Según el tipo de avería pueden ser necesarias comprobaciones de:

* continuidad;
* resistencia;
* aislamiento;
* tensión;
* corriente.

---

# 8.7. Nunca aumentar el PIA para evitar que dispare

Este es uno de los errores más peligrosos que puede cometer un aprendiz.

Ejemplo:

```text
PIA 16 A
   ↓
DISPARA
   ↓
"Vamos a poner uno de 25 A"
```

**No.**

Primero hay que averiguar por qué dispara.

El PIA debe estar coordinado con:

* sección del conductor;
* método de instalación;
* corriente admisible;
* características del circuito;
* carga;
* condiciones de instalación.

> **Una protección que dispara está dando información. No debemos eliminar esa información cambiando la protección sin estudiar la causa.**

---

# 8.8. Interruptor diferencial

El diferencial compara la corriente que entra y la que sale por los conductores activos que atraviesan el dispositivo.

En una situación normal:

```text
             CORRIENTE
                ↓
             ┌─────┐
L ──────────►│     │──────────► CARGA
             │ ID  │
N ◄──────────│     │◄────────── CARGA
             └─────┘

Corriente que entra ≈
corriente que sale
```

Si parte de la corriente encuentra otro camino:

```text
                ↓
             ┌─────┐
L ──────────►│     │──────► CARGA
             │ ID  │
N ◄──────────│     │◄────── CARGA
             └─────┘
                 │
                 │ fuga
                 ▼
                PE
                 │
               TIERRA
```

aparece una corriente diferencial.

Si se alcanza el umbral de actuación correspondiente, el diferencial desconecta.

---

# 8.9. ¿Qué puede hacer disparar un diferencial?

Algunas causas habituales:

* aislamiento defectuoso;
* humedad;
* electrodoméstico averiado;
* cable deteriorado;
* corriente de fuga;
* conexiones incorrectas;
* neutros mezclados entre diferentes diferenciales;
* determinadas perturbaciones o características de las cargas.

---

# 8.10. Cómo reconocer una avería de diferencial

La pregunta más útil es:

> **¿Cuándo dispara?**

### Dispara inmediatamente

Puede existir:

```text
FUGA IMPORTANTE
      ↓
DEFECTO DE AISLAMIENTO
      ↓
PROBLEMA DE CONEXIÓN
```

### Dispara al conectar un aparato

```text
Conecto receptor
      ↓
Dispara ID
      ↓
Sospechar del receptor
o de su circuito
```

### Dispara después de un tiempo

Puede estar relacionado con:

* humedad;
* calentamiento;
* deterioro del aislamiento;
* acumulación de pequeñas corrientes de fuga;
* funcionamiento de determinados equipos.

---

# 8.11. Cómo localizar qué circuito provoca el disparo

Una técnica básica de diagnóstico consiste en aislar progresivamente los circuitos.

Conceptualmente:

```text
DIFERENCIAL
     │
     ├── C1
     ├── C2
     ├── C3
     ├── C4
     └── C5
```

Si existe una actuación:

```text
1. Desconectar / aislar circuitos
2. Rearmar según procedimiento seguro
3. Reconectar progresivamente
4. Observar cuándo reaparece el defecto
```

Así podemos pasar de:

```text
"El diferencial dispara"
```

a:

```text
"El problema aparece en C4"
```

Y después:

```text
"C4 → lavavajillas"
```

Y finalmente:

```text
"El defecto está relacionado con ese receptor"
```

---

# 8.12. Comprobación del diferencial

Los diferenciales disponen normalmente de un botón:

```text
TEST
```

Al accionarlo, el dispositivo debe provocar una actuación simulando una corriente diferencial.

La comprobación debe realizarse:

1. con la instalación en condiciones adecuadas;
2. siguiendo las instrucciones del fabricante;
3. respetando los procedimientos de seguridad.

---

## 8.12.1. El botón TEST no lo comprueba todo

Esto es importante.

Que el diferencial dispare mediante el botón `TEST` significa que **su mecanismo de prueba ha actuado correctamente**.

No significa que hayamos realizado todas las comprobaciones necesarias de la instalación.

Para una verificación completa pueden utilizarse instrumentos específicos que permiten comprobar, según el equipo:

* corriente de disparo;
* tiempo de disparo;
* diferentes condiciones de prueba.

---

# 8.13. Protector contra sobretensiones

Los protectores contra sobretensiones están destinados a limitar determinadas sobretensiones que podrían afectar a la instalación y a los equipos conectados.

Existen diferentes tipos y soluciones.

Una distinción importante es:

```text
SOBRETENSIÓN TRANSITORIA
        ↓
PICOS DE TENSIÓN
        ↓
PROTECTOR ADECUADO
```

y:

```text
SOBRETENSIÓN PERMANENTE
        ↓
TENSIÓN ANORMALMENTE ELEVADA
DURANTE UN TIEMPO PROLONGADO
        ↓
PROTECCIÓN ESPECÍFICA
```

La solución concreta depende de la instalación.

---

# 8.14. Protector contra sobretensiones transitorias

Las sobretensiones transitorias pueden producirse, entre otras causas, por:

* fenómenos atmosféricos;
* maniobras en la red;
* conmutaciones.

Un protector adecuado desvía o limita el impulso de sobretensión según su tecnología.

Conceptualmente:

```text
RED
 │
 ▼
┌───────────────┐
│ PROTECTOR SPD │
└───────┬───────┘
        │
        │ derivación
        ▼
       PE
        │
        ▼
      TIERRA
```

---

# 8.15. Protector contra sobretensiones permanentes

Una sobretensión permanente no es un simple pico de corta duración.

Puede producirse, por ejemplo, por determinados defectos de la red.

En estos casos puede utilizarse un dispositivo que detecte la situación y desconecte la instalación.

> La configuración concreta debe ajustarse a la instalación y a la solución de protección adoptada.

---

# 8.16. Fusibles

Los fusibles son dispositivos de protección muy habituales en determinadas instalaciones.

Su funcionamiento es sencillo:

```text
CORRIENTE EXCESIVA
       ↓
CALENTAMIENTO DEL ELEMENTO
       ↓
FUSIÓN
       ↓
INTERRUPCIÓN DEL CIRCUITO
```

Una característica importante es que, normalmente:

> **Un fusible que ha actuado debe sustituirse.**

Nunca debe sustituirse por otro de características diferentes simplemente para evitar que vuelva a fundirse.

---

# 8.17. Puesta a tierra y conductor PE

La puesta a tierra no es una protección automática como un magnetotérmico o un diferencial.

Es parte del **sistema de protección de la instalación**.

Su función es proporcionar un camino de protección para determinadas corrientes de defecto y mantener las masas conectadas al sistema de tierra.

```text
MASA METÁLICA
      │
      ▼
     PE
      │
      ▼
BARRA DE TIERRA
      │
      ▼
ELECTRODO / SISTEMA
DE PUESTA A TIERRA
      │
      ▼
    TERRENO
```

---

# 8.18. ¿Qué ocurre si falla la tierra?

Una tierra defectuosa puede provocar que una protección no funcione como debería ante determinadas condiciones de defecto.

Por eso no debemos pensar:

```text
"Hay diferencial → no necesito tierra."
```

La protección de una instalación se basa en la **coordinación de diferentes medidas**, no en un único dispositivo.

---

# 8.19. Protección frente a contactos indirectos

Una instalación segura utiliza diferentes medidas para reducir el riesgo.

De forma simplificada:

```text
AISLAMIENTO
     +
PE
     +
PUESTA A TIERRA
     +
DIFERENCIAL
     +
PROTECCIONES ADECUADAS
```

Cada elemento cumple una función.

---

# 8.20. Tabla rápida de protecciones

| Dispositivo                               | ¿Qué detecta?            | ¿Cuándo actúa?                                     | Pista de avería                            |
| ----------------------------------------- | ------------------------ | -------------------------------------------------- | ------------------------------------------ |
| Magnetotérmico                            | Sobreintensidad          | Sobrecarga o cortocircuito                         | Disparo del PIA                            |
| Diferencial                               | Corriente diferencial    | Fuga que supera su umbral                          | Disparo del ID                             |
| Fusible                                   | Sobreintensidad          | Cuando su elemento se funde                        | Fusible abierto                            |
| SPD                                       | Sobretensión transitoria | Ante determinados impulsos                         | Indicador / estado según modelo            |
| Protección contra sobretensión permanente | Sobretensión mantenida   | Cuando se supera el umbral configurado             | Desconexión                                |
| PE / tierra                               | Corriente de defecto     | No "dispara"; forma parte del camino de protección | Continuidad / resistencia / comprobaciones |

---

# 8.21. ¿Qué protección ha disparado?

Una de las primeras cosas que debemos hacer ante una avería es identificar **qué dispositivo ha actuado**.

```text
             INSTALACIÓN
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
      PIA         ID         SPD
       │          │          │
       ▼          ▼          ▼
  SOBREINT.      FUGA     SOBRETENSIÓN
```

### Si dispara el PIA

Pensar primero en:

```text
SOBRECARGA
CORTOCIRCUITO
```

### Si dispara el diferencial

Pensar primero en:

```text
FUGA
AISLAMIENTO
HUMEDAD
RECEPTOR
```

### Si actúa la protección contra sobretensiones

Pensar en:

```text
PROBLEMA DE TENSIÓN
RED
FENÓMENO TRANSITORIO
```

Pero siempre hay que investigar antes de concluir.

---

# 8.22. Método práctico de diagnóstico

Cuando una protección actúa:

```text
┌───────────────────────┐
│ 1. ¿QUÉ HA DISPARADO? │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│ 2. ¿CUÁNDO DISPARÓ?   │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│ 3. ¿QUÉ ESTABA         │
│    FUNCIONANDO?        │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│ 4. AISLAR EL CIRCUITO │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│ 5. MEDIR              │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│ 6. LOCALIZAR          │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│ 7. REPARAR            │
└───────────┬───────────┘
            ▼
┌───────────────────────┐
│ 8. COMPROBAR          │
└───────────────────────┘
```

---

# 8.23. El error de "rearmar y probar"

Un aprendiz puede caer fácilmente en esta dinámica:

```text
DISPARA
  ↓
REARMO
  ↓
DISPARA
  ↓
REARMO
  ↓
DISPARA
  ↓
REARMO
```

Esto no es un método de diagnóstico.

Si una protección actúa repetidamente, debemos **detenernos y buscar la causa**.

> Una protección que dispara repetidamente está proporcionando información sobre la instalación.

---

# 8.24. Cinco preguntas antes de tocar nada

Cuando llegues a una instalación en la que ha actuado una protección:

```text
1. ¿QUÉ PROTECCIÓN HA ACTUADO?

2. ¿QUÉ CIRCUITO PROTEGE?

3. ¿CUÁNDO HA ACTUADO?

4. ¿QUÉ ESTABA CONECTADO?

5. ¿QUÉ PUEDO MEDIR PARA CONFIRMAR LA HIPÓTESIS?
```

Estas cinco preguntas suelen ser más útiles que empezar a desmontar cosas sin un plan.

---

# 8.25. Resumen para el aprendiz

```text
PIA
│
├── SOBRECARGA
└── CORTOCIRCUITO


DIFERENCIAL
│
└── CORRIENTE DIFERENCIAL / FUGA


SPD
│
└── SOBRETENSIONES


PE + TIERRA
│
└── CAMINO DE PROTECCIÓN


FUSIBLE
│
└── SOBREINTENSIDAD
```

Y la regla más importante:

```text
             PROTECCIÓN ACTÚA
                    │
                    ▼
              NO LA CULPES
                    │
                    ▼
              BUSCA LA CAUSA
                    │
                    ▼
                  MIDE
                    │
                    ▼
                REPARA
                    │
                    ▼
               COMPRUEBA
```

> **Una protección que actúa no es una molestia que hay que eliminar. Es una señal de que algo ha ocurrido y debemos averiguar qué.**
