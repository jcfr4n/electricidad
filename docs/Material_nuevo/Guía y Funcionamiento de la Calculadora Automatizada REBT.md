### 📂 Estructura y Funcionamiento del Libro

El documento está organizado en **cinco pestañas** especializadas, vinculadas entre sí mediante fórmulas dinámicas:

#### 1\. 📋 TOC y Leyenda

* **Función:** Actúa como menú principal e incluye enlaces directos hipervínculados a cada una de las pestañas para facilitar la navegación rápida.  
* **Leyenda técnica:** Explica el código de color y formato del libro:  
* **Celda de Entrada (Azul Claro \- \#DCE6F1):** Celdas editables donde introduces tus variables de diseño (longitud, potencia, resistividad).  
* **Celda de Resultado / Fórmula (Verde Claro \- \#E2EFDA):** Celdas que calculan automáticamente mediante expresiones del REBT. **¡No debes editarlas manualmente\!**  
* **Cabecera de Sección (Azul Medio \- \#4472C4):** Define los bloques según la instrucción técnica aplicable.

#### 2\. ⚡ Puesta a Tierra (ITC-BT-18)

* **Cálculo por electrodos:** Compara en paralelo la resistencia teórica resultante para tres tipos de toma: picas verticales (\\\\(R \= \\rho / L\\\\)), conductor horizontal en anillo (\\\\(R \= 2\\rho / L\\\\)) y placas enterradas (\\\\(R \= 0,8\\rho / P\\\\)).  
* **Comprobación de Seguridad:** Introduciendo la tensión límite (50 V o 24 V) y la sensibilidad del diferencial (ej. 30 mA), la celda calcula automáticamente la resistencia máxima permitida por seguridad (\\\\(R\_{max}\\\\)) y valida mediante un condicional si tu diseño cumple o requiere añadir más picas.  
* **Independencia de Tierras:** Automatiza la distancia de seguridad necesaria (\\\\(D\\\\)) para garantizar la separación entre tierras de AT y BT según la resistividad local (\\\\(\\rho\\\\)), intensidad de defecto (\\\\(I\_d\\\\)) y tensión límite (\\\\(U\\\\)).

#### 3\. 🏢 Previsión de Cargas (ITC-BT-10 e ITC-BT-52)

* **Conjunto de viviendas:** Automatiza el cálculo del coeficiente de simultaneidad mediante una **tabla de búsqueda interna** (VLOOKUP) que cubre de 1 a 21 viviendas, aplicando la fórmula lineal del REBT para conjuntos de más de 21 viviendas (\\\\(15,3 \+ (n-21) \\cdot 0,5\\\\)).  
* **Servicios generales, locales y garajes:** Aplica los mínimos normativos automáticamente (ej. mínimo de 100 W/m² o 3.450 W para locales; 10 W o 20 W/m² según sea ventilación natural o forzada para garajes).  
* **Infraestructura de Vehículo Eléctrico (IRVE):** Determina la dotación obligatoria del 10% de plazas y calcula la potencia requerida. Aplica automáticamente el coeficiente de reducción de simultaneidad de **\\\\(0,3\\\\) si se cuenta con Sistema de Protección de Línea (SPL)** o **\\\\(1,0\\\\) si no se instala**.

#### 4\. 📐 Cálculo de Secciones (ITC-BT-19)

Es el motor principal del libro. Permite dimensionar un cable introduciendo sus parámetros y realiza la validación bajo los tres criterios del REBT:

* **Criterio de Caída de Tensión (\\\\(\\Delta U\\\\)):** Calcula la caída de tensión en voltios y la sección teórica exacta para sistemas monofásicos y trifásicos. Modifica automáticamente la conductividad (\\\\(\\gamma\\\\)) del Cobre o Aluminio en función del material y de la temperatura máxima de servicio del aislamiento (\\\\(70^\\circ\\text{C}\\\\) para PVC y \\\\(90^\\circ\\text{C}\\\\) para XLPE/EPR).  
* **Normalización Comercial:** Utiliza la fórmula LOOKUP para aproximar la sección teórica al **diámetro comercial normalizado inmediato superior** (\\\\(1.5, 2.5, 4, 6, 10, 16, 25 \\dots \\text{ mm}^2\\\\)).  
* **Criterio Térmico (Sobrecargas):** Comprueba que la intensidad de diseño (\\\\(I\_b\\\\)) y la protección magnetotérmica (\\\\(I\_n\\\\)) cumplen la condición básica de sobrecarga frente a la capacidad real corregida del cable (\\\\(I\_b \\leq I\_n \\leq I\_{adm}\\\\)).  
* **Criterio de Cortocircuito (Adiabático):** Determina la sección mínima del cable frente a transitorios rápidos aplicando la fórmula:\\\\S \\geq \\frac{I\_{cc} \\cdot \\sqrt{t}}{K}\\\\Ajustando la constante \\\\(K\\\\) según el material del conductor (Cobre/Aluminio) y el aislamiento elegido. El libro indica en su celda final **la sección definitiva recomendada** (la mayor requerida por caída de tensión o cortocircuito).

#### 5\. 🔄 Autoconsumo y Redes (ITC-BT-40 e ITC-BT-06)

* **Sistemas Antivertido (UNE 217001):** Determina el número máximo de inversores (\\\\(N\\\\)) que pueden acoplarse en paralelo en base a los tiempos de respuesta del ensayo de bucle abierto (\\\\(t\_1\\\\) y diferencia \\\\(t\_r\\\\)).  
* **Redes Aéreas Trenzadas:** Automatiza el cálculo térmico para conductores de aluminio de \\\\(95\\text{ mm}^2\\\\) (posada sobre fachada o tensada con fiador de acero), aplicando factores de corrección por temperatura ambiente, agrupamiento en apoyos y el coeficiente reductor de **\\\\(0,9\\\\) si está expuesta directamente a radiación solar fuerte**.

### 💡 Ejemplo Práctico de Uso en la Hoja

Si abres la pestaña de **Cálculo de Secciones**, verás que viene preconfigurado el cálculo de una derivación monofásica de **\\\\(9.2\\text{ kW}\\\\)** de potencia a lo largo de **\\\\(50\\text{ m}\\\\)** de longitud.

1. **Caída de Tensión:** La hoja calcula una sección teórica de \\\\(13,17\\text{ mm}^2\\\\) y determina de inmediato que necesitas una sección comercial de **\\\\(16\\text{ mm}^2\\\\)**.  
2. **Criterio de Cortocircuito:** Para un cortocircuito de \\\\(1.500\\text{ A}\\\\) despejado en \\\\(0,1\\text{ s}\\\\), calcula que bastaría con una sección de \\\\(3,31\\text{ mm}^2\\\\).  
3. **Resultado Definitivo:** En la celda B35, Excel determina que la sección mínima requerida que garantiza ambos criterios es de **\\\\(16\\text{ mm}^2\\\\)**.

Puedes modificar cualquiera de las celdas de color azul en el libro (por ejemplo, cambiar el material a "Aluminio", aumentar la longitud o reducir la potencia) y verás cómo **todas las celdas de resultados se actualizan en tiempo real**.  
📊 ¿Te gustaría que añadamos en la pestaña de "Previsión de Cargas" un gráfico de barras dinámico que muestre visualmente la distribución de potencia del edificio (viviendas vs. garajes vs. recarga de vehículo eléctrico)?  
