# 4. Circuitos de viviendas (C1–C13)

Una de las primeras cosas que debe aprender un aprendiz cuando empieza a trabajar en viviendas es **reconocer los circuitos eléctricos**.

En una instalación doméstica no se conectan todos los receptores a un único circuito. La instalación se divide en varios circuitos independientes, cada uno con sus conductores y su dispositivo de protección.

Esta división permite:

* Repartir las cargas.
* Utilizar secciones adecuadas.
* Proteger correctamente los conductores.
* Facilitar el mantenimiento.
* Localizar averías.
* Evitar que un problema deje toda la vivienda sin servicio.

La referencia fundamental para estos circuitos es la **ITC-BT-25**, complementada por la ITC-BT-26.

> **Importante:** C1, C2, C3, C4 y C5 son los circuitos básicos de una vivienda. Los circuitos adicionales aparecen cuando las características o necesidades de la vivienda lo requieren.

---

## 4.1. La tabla que debes conocer

Esta es la tabla de referencia práctica para los circuitos básicos:

| Circuito | Uso                                                | Sección mínima |  PIA |
| -------- | -------------------------------------------------- | -------------: | ---: |
| **C1**   | Iluminación                                        |        1,5 mm² | 10 A |
| **C2**   | Tomas de uso general y frigorífico                 |        2,5 mm² | 16 A |
| **C3**   | Cocina y horno                                     |          6 mm² | 25 A |
| **C4**   | Lavadora, lavavajillas y termo eléctrico           |          4 mm² | 20 A |
| **C5**   | Tomas de corriente de baños y auxiliares de cocina |        2,5 mm² | 16 A |

Estos valores corresponden a los circuitos básicos definidos en la ITC-BT-25.

Los circuitos adicionales no deben memorizarse como una simple continuación de C1 a C10. Su presencia depende de las necesidades de la vivienda y del grado de electrificación.

---

# 4.2. Antes de memorizar C1, C2, C3...

Hay tres conceptos que debes distinguir:

### Sección

Es el tamaño de la sección conductora del cable, expresada normalmente en **mm²**.

Ejemplo:

```text
1,5 mm²
2,5 mm²
4 mm²
6 mm²
```

### PIA

El **PIA (Pequeño Interruptor Automático)** protege el circuito frente a sobreintensidades.

Por ejemplo:

```text
C1
 │
 ├── Conductores: 1,5 mm²
 │
 └── PIA: 10 A
```

### Diferencial

El diferencial no sustituye al PIA.

El PIA y el diferencial cumplen funciones diferentes.

De forma simplificada:

```text
PIA
 │
 └── Protege el circuito frente a sobreintensidades


DIFERENCIAL
 │
 └── Protege frente a corrientes de fuga
     y participa en la protección de las personas
```

Por eso, cuando alguien pregunte:

> "¿Qué protección tiene este circuito?"

no debes responder solamente:

> "Un diferencial."

Hay que distinguir **la protección contra sobreintensidades del circuito y la protección diferencial**.

---

# 4.3. Colores de los conductores

En las instalaciones de baja tensión los conductores se identifican mediante colores normalizados.

Como referencia práctica:

| Conductor           | Color habitual       |
| ------------------- | -------------------- |
| **Fase (L)**        | Marrón, negro o gris |
| **Neutro (N)**      | Azul claro           |
| **Protección (PE)** | Verde/amarillo       |

En una instalación monofásica doméstica es habitual encontrar:

```text
FASE       → Marrón
NEUTRO     → Azul
PROTECCIÓN → Verde/amarillo
```

Pero no debes identificar un conductor únicamente por "lo que parece".

Antes de manipular una instalación:

> **La identificación por color ayuda, pero no sustituye la comprobación.**

Especialmente en instalaciones antiguas, modificadas o mal ejecutadas, podemos encontrar colores utilizados incorrectamente.

---

# 4.4. ¿Todos los circuitos llevan su propio diferencial?

No necesariamente.

Una vivienda puede tener **uno o varios dispositivos diferenciales**, dependiendo de la configuración de la instalación.

El REBT establece la protección diferencial y la subdivisión de circuitos correspondientes, y la distribución concreta debe permitir que la instalación quede adecuadamente protegida y que una avería no afecte innecesariamente a toda la vivienda.

Por eso no debemos memorizar:

```text
C1 → diferencial 1
C2 → diferencial 2
C3 → diferencial 3
...
```

Eso **no es así**.

Un mismo diferencial puede proteger varios circuitos.

Un esquema sencillo podría ser:

```text
             CUADRO
               │
       ┌───────┴────────┐
       │  DIFERENCIAL 1 │
       └───────┬────────┘
               │
       ┌───────┼────────┐
       ▼       ▼        ▼
      C1      C2       C3

       ┌────────────────┐
       │  DIFERENCIAL 2 │
       └───────┬────────┘
               │
          ┌────┴────┐
          ▼         ▼
         C4        C5
```

La distribución real dependerá del cuadro y de la instalación.

---

# 4.5. C1 — Iluminación

## Función

El circuito **C1** alimenta los puntos de iluminación de la vivienda.

Aquí encontramos normalmente:

* Lámparas.
* Plafones.
* Downlights.
* Pantallas.
* Otros puntos de luz.

## Conductores

Sección mínima habitual:

**1,5 mm²**

Protección:

**PIA de 10 A**

## Colores

En una instalación monofásica típica:

```text
Fase       → Marrón
Neutro     → Azul
Protección → Verde/amarillo
```

En determinados puntos de mando pueden aparecer otros conductores, como retornos de interruptores, que deben identificarse correctamente.

## Ejemplo de instalación

```text
             C1
              │
           PIA 10 A
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
      LUZ    LUZ    LUZ
       │      │      │
       └──────┴──────┘
              │
             N/PE
```

## Lo que debes saber

Una de las cosas más habituales que vas a hacer es instalar mecanismos de iluminación.

No confundas:

* Fase.
* Neutro.
* Retorno de lámpara.
* Conductor de protección.

En un interruptor convencional, normalmente se interrumpe el conductor de fase, no el neutro.

## Error frecuente

> "Como la lámpara está apagada, no hay tensión."

Incorrecto.

Puede existir tensión en determinados conductores del circuito aunque la lámpara esté apagada.

---

# 4.6. C2 — Tomas de uso general y frigorífico

## Función

El circuito **C2** alimenta las tomas de corriente de uso general de la vivienda y el frigorífico.

Se utiliza para los enchufes generales, dentro de las condiciones establecidas por el REBT.

## Conductores

Sección mínima:

**2,5 mm²**

PIA:

**16 A**

## Ejemplo

```text
             C2
              │
           PIA 16 A
              │
       ┌──────┼───────┐
       ▼      ▼       ▼
     TOMA    TOMA   FRIGO
       │      │       │
       └──────┴───────┘
```

## Lo que debes saber

No significa que podamos conectar cualquier cantidad de potencia a este circuito simplemente porque "hay enchufes".

Hay que respetar:

* Potencia prevista.
* Número de tomas.
* Protección.
* Sección.
* Condiciones de instalación.

## Error frecuente

Conectar varios equipos de elevada potencia en un circuito de uso general y después solucionar los disparos cambiando el PIA por otro de mayor intensidad.

**No se debe aumentar la protección sin comprobar que el circuito está dimensionado para ello.**

---

# 4.7. C3 — Cocina y horno

## Función

El **C3** está destinado específicamente a:

* Cocina eléctrica.
* Horno.

## Conductores

Sección mínima:

**6 mm²**

PIA:

**25 A**

## Ejemplo

```text
             C3
              │
           PIA 25 A
              │
          6 mm²
              │
       ┌──────┴──────┐
       ▼             ▼
    COCINA          HORNO
```

## Lo que debes saber

Este circuito puede manejar una potencia importante.

Por eso necesita una sección y protección superiores a las de los circuitos generales.

No debes confundir:

```text
C3 → Cocina + horno
```

con:

```text
C2 → Tomas generales
```

## Lo que suele preguntar el oficial

> "¿Por qué aquí tenemos 6 mm²?"

Porque el circuito está destinado a una carga importante y la ITC-BT-25 establece esa sección mínima para el C3 en las condiciones indicadas.

## Error frecuente

Conectar cocina y horno a un circuito general de 2,5 mm² porque:

> "El enchufe funciona."

Que un receptor funcione no significa que la instalación sea reglamentaria.

---

# 4.8. C4 — Lavadora, lavavajillas y termo eléctrico

## Función

El C4 está destinado a:

* Lavadora.
* Lavavajillas.
* Termo eléctrico.

## Conductores

Sección mínima:

**4 mm²**

PIA:

**20 A**

## Ejemplo

```text
             C4
              │
           PIA 20 A
              │
            4 mm²
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
   LAVADORA LAVAV. TERMO
```

## Lo que debes saber

El C4 tiene una particularidad importante: alimenta receptores que pueden tener un consumo considerable.

Por eso se utiliza una sección superior a C2 y una protección de 20 A.

La configuración concreta y la posibilidad de desdoblar este circuito deben consultarse en la ITC-BT-25.

## Error frecuente

Pensar:

> "Como son electrodomésticos, todos van al C2."

No.

La instalación doméstica separa determinados receptores precisamente por sus características y potencia.

---

# 4.9. C5 — Tomas de baños y auxiliares de cocina

## Función

El C5 alimenta:

* Tomas de corriente de los baños.
* Tomas auxiliares de cocina.

## Conductores

Sección mínima:

**2,5 mm²**

PIA:

**16 A**

## Ejemplo

```text
             C5
              │
           PIA 16 A
              │
            2,5 mm²
              │
       ┌──────┴──────┐
       ▼             ▼
    BAÑO          COCINA
    TOMAS         AUXILIAR
```

## Lo que debes saber

Este circuito está relacionado con zonas donde encontramos receptores de uso habitual, pero no debe confundirse con el C2.

Además, en el baño hay que aplicar las condiciones especiales de la **ITC-BT-27**.

No basta con saber que la toma pertenece al C5.

También hay que saber:

> **Dónde está instalada.**

## Error frecuente

Pensar que cualquier enchufe de un baño puede colocarse en cualquier sitio.

La ubicación depende de los volúmenes y de las condiciones establecidas por la ITC-BT-27.

---

# 4.10. ¿Y qué ocurre con C6, C7, C8...?

Aquí aparece una confusión muy habitual.

No debemos aprender:

```text
C1
C2
C3
C4
C5
C6
C7
C8
C9
C10
```

como si fueran diez circuitos obligatorios.

La ITC-BT-25 contempla **circuitos adicionales** cuando la vivienda lo requiere.

Algunos están relacionados con:

* Calefacción eléctrica.
* Aire acondicionado.
* Secadora.
* Sistemas de automatización.
* Circuitos adicionales de tomas.
* Otras necesidades particulares.

Por tanto:

> **C6 en adelante depende de la configuración de la vivienda.**

---

# 4.11. C6 — Circuito adicional de iluminación

En determinadas configuraciones de vivienda puede existir un circuito adicional de iluminación.

Su finalidad es permitir una mayor subdivisión de la instalación.

La idea práctica es sencilla:

```text
C1
 │
 └── Primera parte de iluminación


C6
 │
 └── Segunda parte de iluminación
```

Esto permite dividir la instalación y evitar que una única avería deje toda la vivienda sin iluminación.

Los valores concretos deben consultarse en la configuración reglamentaria correspondiente.

---

# 4.12. C7 — Circuito adicional de tomas

El C7 es un circuito adicional destinado a tomas de uso general cuando las características de la vivienda requieren una ampliación respecto al circuito C2.

Por ejemplo:

```text
C2
 │
 └── Parte de las tomas


C7
 │
 └── Tomas adicionales
```

No significa que todas las viviendas tengan C7.

Su necesidad depende de las condiciones establecidas por el REBT.

---

# 4.13. C8 — Calefacción eléctrica

El C8 está relacionado con la **calefacción eléctrica**.

Cuando una vivienda dispone de una instalación de calefacción eléctrica que requiere circuito específico, debe contemplarse la correspondiente configuración reglamentaria.

Ejemplo:

```text
             C8
              │
          PROTECCIÓN
              │
              ▼
       CALEFACCIÓN
       ELÉCTRICA
```

La sección y protección se determinarán según las condiciones reglamentarias y la potencia prevista.

> No memorices una sección aislada sin comprobar primero qué configuración concreta se está utilizando.

---

# 4.14. C9 — Aire acondicionado

El C9 está relacionado con el **aire acondicionado**.

Ejemplo:

```text
             C9
              │
          PROTECCIÓN
              │
              ▼
       AIRE ACONDICIONADO
```

El circuito debe dimensionarse teniendo en cuenta:

* Potencia de los equipos.
* Características de los receptores.
* Longitud.
* Método de instalación.
* Sección.
* Protección.

La potencia real del equipo y las instrucciones del fabricante también deben tenerse en cuenta.

---

# 4.15. C10 — Secadora

El C10 está destinado a la **secadora independiente** cuando la instalación requiere este circuito.

Ejemplo:

```text
             C10
              │
          PROTECCIÓN
              │
              ▼
          SECADORA
```

Es importante no confundirlo con el C4.

El C4 contempla lavadora, lavavajillas y termo eléctrico.

La secadora dispone de su circuito adicional cuando corresponde.

---

# 4.16. C11 — Automatización, gestión técnica de la energía y seguridad

El C11 está relacionado con determinados sistemas de:

* Automatización.
* Gestión técnica de la energía.
* Seguridad.
* Sistemas similares previstos por la instalación.

Por ejemplo:

```text
             C11
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
   DOMÓTICA  GESTIÓN  SEGURIDAD
             ENERGÍA
```

No debes confundir este circuito con los circuitos de potencia de los equipos que controla.

Un sistema domótico puede controlar una instalación de iluminación, calefacción o persianas, pero eso no significa que toda la potencia de esos equipos tenga que pasar por el C11.

---

# 4.17. C12 — Circuitos adicionales

El C12 permite contemplar otros circuitos adicionales cuando sean necesarios según las características de la vivienda y las prescripciones reglamentarias.

Aquí aparece una idea importante:

> **El REBT no intenta describir cada vivienda posible mediante una única combinación cerrada de circuitos.**

Las necesidades reales pueden variar.

Por eso, ante una vivienda concreta debemos comprobar:

* Grado de electrificación.
* Superficie.
* Equipamiento.
* Potencia prevista.
* Número de circuitos.
* Necesidades específicas.

---

# 4.18. C13 — Circuito para infraestructura de recarga de vehículo eléctrico

En instalaciones donde corresponda aplicar las prescripciones relativas a la **recarga de vehículos eléctricos**, deben contemplarse los circuitos y esquemas específicos establecidos por el REBT y, especialmente, por la **ITC-BT-52**.

Esto es importante porque una instalación preparada para un vehículo eléctrico no debe tratarse simplemente como:

> "Otro enchufe."

La potencia y las características de la recarga hacen necesario un planteamiento específico.

```text
             RED
              │
              ▼
           CUADRO
              │
              ▼
       PROTECCIÓN ESPECÍFICA
              │
              ▼
        PUNTO DE RECARGA
              │
              ▼
          VEHÍCULO
```

> **Nota:** En este manual se desarrolla la ITC-BT-52 en el apartado específico de infraestructura de recarga. Aquí basta con reconocer la relación.

---

# 4.19. Resumen rápido

Para el trabajo cotidiano conviene tener esta pequeña chuleta:

| Circuito | Recuerda                             |
| -------- | ------------------------------------ |
| **C1**   | Luz                                  |
| **C2**   | Tomas generales + frigorífico        |
| **C3**   | Cocina + horno                       |
| **C4**   | Lavadora + lavavajillas + termo      |
| **C5**   | Tomas de baño + cocina auxiliar      |
| **C6**   | Iluminación adicional                |
| **C7**   | Tomas adicionales                    |
| **C8**   | Calefacción eléctrica                |
| **C9**   | Aire acondicionado                   |
| **C10**  | Secadora                             |
| **C11**  | Automatización / gestión / seguridad |
| **C12**  | Circuitos adicionales                |
| **C13**  | Recarga de vehículo eléctrico        |

**Atención:** esta tabla es una **chuleta de identificación**, no sustituye las condiciones completas de la ITC-BT-25 ni las instrucciones particulares que correspondan.

---

# 4.20. Un ejemplo completo de cuadro de vivienda

Imaginemos una vivienda con:

* Iluminación.
* Tomas generales.
* Cocina eléctrica.
* Horno.
* Lavadora.
* Lavavajillas.
* Termo eléctrico.
* Tomas de baño.
* Aire acondicionado.
* Secadora.

Podríamos encontrarnos con una organización semejante a:

```text
                     CUADRO
                       │
                ┌──────┴──────┐
                │ INTERRUPTOR │
                │   GENERAL   │
                └──────┬──────┘
                       │
              ┌────────┴────────┐
              │   DIFERENCIAL   │
              └────────┬────────┘
                       │
        ┌──────────────┼───────────────┐
        │              │               │
        ▼              ▼               ▼
      C1 10A         C2 16A          C3 25A
      1,5 mm²        2,5 mm²         6 mm²
        │              │               │
      LUCES         TOMAS         COCINA/HORNO


        ┌──────────────┼───────────────┐
        │              │               │
        ▼              ▼               ▼
      C4 20A         C5 16A          C9
      4 mm²          2,5 mm²      A/A COND.
        │              │
   LAVADORA/       BAÑO/COCINA
   LAVAV./TERMO      AUXILIAR


        ┌──────────────┐
        ▼              ▼
      C10            OTROS
    SECADORA       CIRCUITOS
```

La distribución real del cuadro debe hacerse conforme al proyecto, memoria, características de la vivienda y prescripciones reglamentarias.

---

# 4.21. Lo que debes aprender de verdad

No te recomiendo memorizar una tabla de diez números.

Aprende primero esta asociación:

```text
C1 → LUZ
C2 → TOMAS
C3 → COCINA
C4 → ELECTRODOMÉSTICOS
C5 → BAÑO/COCINA AUXILIAR
```

Después aprende:

```text
C1 → 1,5 mm² → 10 A
C2 → 2,5 mm² → 16 A
C3 → 6 mm² → 25 A
C4 → 4 mm² → 20 A
C5 → 2,5 mm² → 16 A
```

Y finalmente aprende a **consultar el REBT para los circuitos adicionales**.

Ese orden es mucho más útil que intentar memorizar toda la tabla de golpe.

---

# 4.22. La pregunta del oficial

Imagina que el oficial te señala un cable y pregunta:

> "¿Qué circuito es este?"

No debería ser necesario adivinar.

Tu razonamiento debería ser:

```text
¿Dónde va?
    ↓
¿Qué receptor alimenta?
    ↓
¿Qué circuito corresponde?
    ↓
¿Qué sección debería tener?
    ↓
¿Qué protección debería tener?
    ↓
¿Coincide con la instalación?
```

Y si no coincide:

> **No lo corrijas por tu cuenta. Pregunta.**

Una instalación antigua puede tener modificaciones, ampliaciones o características que requieren analizar el conjunto.

---

# 4.23. Una última advertencia

Hay una tentación muy peligrosa cuando se empieza a trabajar:

> **"Como me sé que C2 es 2,5 mm² y 16 A, ya puedo montar cualquier C2."**

No.

La sección y la protección son solamente una parte de la instalación.

También hay que considerar:

* Longitud.
* Método de instalación.
* Temperatura.
* Agrupamiento.
* Caída de tensión.
* Potencia prevista.
* Características del receptor.
* Condiciones particulares del local.
* Protecciones adicionales.
* Estado de la instalación existente.

Por eso:

> **Una tabla sirve para orientarte. El REBT sirve para comprobar.**

Y esa diferencia es precisamente lo que debes aprender durante las FCT.
