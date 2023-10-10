function increaseQuantity(inputId) {
    const input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(inputId) {
    const input = document.getElementById(inputId);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function openModal(id) {
    fetch('producto.json')
      .then(response => response.json())
      .then(data => {
        const product = data.find(item => item.id === id);
        if (product) {
          document.getElementById('modal-title').textContent = product.nombre;
          document.getElementById('modal-description').textContent = product.descripcion;
          document.getElementById('modal-price').textContent = `Precio: ${product.precio}`;
          document.getElementById('modal-quantity').textContent = `Cantidad: ${product.cantidad}`;
          document.getElementById('modal-promotion').textContent = product.promocion ? 'En promoción' : 'Sin promoción';
          document.getElementById('modal').style.display = 'block';
        }
      });
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  

function mostrarPassword(){
    var cambio = document.getElementById("password1");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('far fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('far fa-eye-slash');
    }
}

// listar productos 

$(document).ready(function () {
  // Cargar la lista de productos desde el archivo JSON
  $.getJSON('producto.json', function (data) {
      var productList = $('#product-list');
      $.each(data, function (key, product) {
          productList.append(`
            
              <tr>
                  <td>${product.id}</td>
                  <td>${product.nombre}</td>
                  <td>${product.descripcion}</td>
                  <td>${product.precio}</td>
                  <td>${product.cantidad}</td>
                  <td>${product.promocion}</td>
                  <td>
                      <button class="btn btn-warning" onclick="openModalEdit(${product.id})">Editar</button>
                      <button class="btn btn-danger" onclick="alertEliminar()">Eliminar</button>
                  </td>
              </tr>
          `);
      });
  });



});

//----------------------------------
// Función para manejar la autenticación
function authenticate() {
  // Obtener los valores ingresados por el usuario
  const username = document.getElementById('username1').value;
  console.log(username, "este es el usuario");
  
  const password = document.getElementById('password1').value;
  console.log(password, "Este es el password");

  // Obtener el archivo JSON de usuarios
  fetch('usuario.json')
      .then((response) => response.json())
      .then((data) => {
          // Verificar si las credenciales son correctas
          const user = data.find((user) => user.username === username && user.password === password);

          if (user) {
              // Redireccionar a la página CRUD si las credenciales son correctas
              window.location.href = 'crud.html';
          } else {
              alert('Credenciales incorrectas. Inténtalo de nuevo.');
          }
      })
      .catch((error) => {
        console.error('Error al cargar el archivo JSON de usuarios', error);
      });
}

// Asociar la función de autenticación al botón "Entrar" por su id
document.getElementById('btnEntrar1716').addEventListener('click', authenticate);


//-------------------------

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})


function openModalCRUD() {
    document.getElementById('modal').style.display = 'block';
}
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  function openModalEdit(id) {
    fetch('producto.json')
      .then(response => response.json())
      .then(data => {
        const product = data.find(item => item.id === id);
        if (product) {
          document.getElementById('modal-title').textContent = product.nombre;
          document.getElementById('modal-description').textContent = product.descripcion;
          document.getElementById('modal-price').textContent = `Precio: ${product.precio}`;
          document.getElementById('modal-quantity').textContent = `Cantidad: ${product.cantidad}`;
          document.getElementById('modal-promotion').textContent = product.promocion ? 'En promoción' : 'Sin promoción';
          document.getElementById('modal').style.display = 'block';
        }
      });
  }
function alertEliminar(){
    alert("Esta seguro que desea eliminar el producto")
    alert("el producto se ha eliminado")
}

