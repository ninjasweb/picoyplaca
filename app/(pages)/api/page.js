const Api = () => {
  return ( 
    <>
    <h1>Documentación Técnica del API Pico y Placa</h1>

    <h2>Información General</h2>
    <p><strong>Nombre del API:</strong> Pico y Placa API</p>
    <p><strong>Descripción:</strong> Este API proporciona información sobre las restricciones de Pico y Placa para diferentes ciudades.</p>
    <p><strong>URL Base:</strong> https://picoyplaca.autos/api</p>

    <h2>Autenticación</h2>
    <p>El acceso a este API está disponible de forma pública durante un período de prueba. Para obtener acceso continuo después de ese período, será necesario solicitar una clave de API y realizar el pago correspondiente.</p>

    <h2>Recursos Disponibles</h2>
    <p>El API ofrece los siguientes recursos:</p>
    <ul>
        <li><strong>/automoviles</strong> (GET): Obtiene las restricciones de Pico y Placa de una ciudad específica.</li>
    </ul>

    <h2>Parámetros de Solicitud</h2>
    <p>Para obtener las restricciones de Pico y Placa de una ciudad, realiza una solicitud HTTP GET a la URL base seguida del recurso y el parámetro "city" con el nombre de la ciudad deseada:</p>
    <code>GET https://picoyplaca.autos/api/automoviles?city=(nommbre)</code>

    <h2>Respuestas del API</h2>
    <p>El API proporciona las siguientes respuestas:</p>

    <h3>Respuesta Exitosa (200 OK)</h3>
      <code>
        "1": [0, 1],
        "2": [2, 3],
        "3": [4, 5],
        "4": [6, 7],
        "5": [8, 9],
        "6": [],
        "7": []
      </code>
    <p>La respuesta exitosa devuelve un objeto JSON con las restricciones de Pico y Placa para la ciudad solicitada. Cada día de la semana (de 1 a 7) tiene un arreglo con los últimos dígitos de las placas restringidas. Los días sin restricciones tendrán un arreglo vacío.</p>
    <p>Por ejemplo, "1" representa el Lunes, y los valores [0, 1] indican que las placas terminadas en 0 y 1 están restringidas ese día.</p>

    <h3>Respuesta de Error (404 Not Found)</h3>
    <pre>

    "error": "City not found"

    </pre>
      <p>La respuesta de error 404 indica que la ciudad proporcionada no existe en la base de datos del API o no tiene restricciones de Pico y Placa registradas.</p>

      <h3>Respuesta de Error (500 Internal Server Error)</h3>
      <p>La respuesta de error 500 indica que se produjo un error interno en el servidor al procesar la solicitud. En este caso, se recomienda volver a intentar más tarde.</p>

      <h2>Restricciones de Pico y Placa por Ciudad</h2>

      <p>Esta estructura JSON muestra las ciudades disponibles en el API y sus respectivas restricciones de Pico y Placa. Cada ciudad tiene un objeto con las restricciones detalladas para cada día de la semana.</p>
      <h2>Ciudades Disponibles:</h2>
      <ul>
        <li>Bogotá: https://picoyplaca.autos/api/automoviles?city=bogota</li>
        <li>Ibagué: https://picoyplaca.autos/api/automoviles?city=ibague</li>
        <li>Cali: https://picoyplaca.autos/api/automoviles?city=cali</li>
        <li>Medellín: https://picoyplaca.autos/api/automoviles?city=medellin</li>
        <li>Santa Marta: https://picoyplaca.autos/api/automoviles?city=santamarta</li>
        <li>Bucaramanga: https://picoyplaca.autos/api/automoviles?city=bucaramanga</li>
        <li>Pereira: https://picoyplaca.autos/api/automoviles?city=pereira</li>
      </ul>
    </>
   )
}
 
export default Api