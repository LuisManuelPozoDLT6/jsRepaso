// Realizar una solicitud GET a una API utilizando Fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Trabajar con los datos recibidos
    console.log(data);
  })
  .catch(error => {
    // Manejar cualquier error que pueda ocurrir
    console.log(error);
  });

// Realizar una solicitud POST a una API utilizando Fetch
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => {
    // Trabajar con la respuesta del servidor
    console.log(data);
  })
  .catch(error => {
    // Manejar cualquier error que pueda ocurrir
    console.log(error);
  });

  // Realizar una solicitud GET a una API utilizando jQuery
$.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      // Trabajar con los datos recibidos
      console.log(data);
    },
    error: function(error) {
      // Manejar cualquier error que pueda ocurrir
      console.log(error);
    }
  });
  
  // Realizar una solicitud POST a una API utilizando jQuery
  $.ajax({
    url: 'https://api.example.com/data',
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      name: 'John Doe',
      age: 30
    }),
    success: function(data) {
      // Trabajar con la respuesta del servidor
      console.log(data);
    },
    error: function(error) {
      // Manejar cualquier error que pueda ocurrir
      console.log(error);
    }
  });
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>