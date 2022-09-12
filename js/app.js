const carrito = []

const listaProductos = [
  {
    nombre: "Flandria Vainilla",
    descripcion: "Fino tabaco de origen Belga saborizado vainilla",
    precio: 400,
    imagen: "realTABACO FLANDRIA VAINILLA 30gr.jpeg",
  },
  {
    nombre: "Flandria Virginia",
    descripcion: "Fino tabaco de origen Belga del tipo Virginia Blend",
    precio: 400,
    imagen: "2flandria-silver-tabaco-precios.jpg",
  },
  {
    nombre: "Cerrito Vainilla",
    descripcion: "Tabaco importado de Chile sabor vainilla",
    precio: 400,
    imagen: "4tabaco-cerrito-vainilla-venta-768x768.jpg.webp",
  },
  {
    nombre: "Achalay Virginia",
    descripcion: "Fino tabaco importado de variedad Virginia blend",
    precio: 400,
    imagen: "10achalay-tabaco-virginia.webp",
  },
  {
    nombre: "Achalay Virginia",
    descripcion: "Fino tabaco importado de variedad Virginia blend",
    precio: 400,
    imagen: "10achalay-tabaco-virginia.webp",
  },
];

// const botonCarrito = document.getElementsByClassName("botonCarrito");
// console.log(botonCarrito);

function agregarACarrito(e) {
  localStorage.setItem("carrito", "cantidad");
  console.log(e.target);
}

document.addEventListener("DOMContentLoaded", crearCards);

function crearCards() {
  let contenedor = document.getElementById("productos");
  listaProductos.forEach((producto) => {
    let card = document.createElement("div");
    
    card.innerHTML = `
    <img
    src="../assets/img-productos/${producto.imagen}"
    class="card-img-top"
    alt="..."
    />
    <div class="card-body">
    <p class="card-text">
    <h5 class="d-block text-center">${producto.nombre}</h5>
    <br>
    ${producto.descripcion}
    </p>
    <button name="botonCarrito" type="button" class="btn btn-primary btn-lg botonCarrito">
    Agregar a Carrito
    </button>
    </div>
    
    `;
    card.className = "card mb-3 col mx-4";
    
    let btn_compra = document.getElementsByClassName('botonCarrito');
    console.log(btn_compra);
    for( let boton of btn_compra){
      console.log(boton);
    
      boton.addEventListener("click" , agregarCarrito);
      
      
    }
    contenedor.append(card);
  });
}

function agregarCarrito(e){
carrito.pu
}


function reenderizarCarrito(e){
  let container = document.getElementById('container')
  container.innerHTML = `<div class="row">
  <!-- Elementos generados a partir del JSON -->
  <main id="items" class="col-sm-8 row"></main>
  <!-- Carrito -->
  <aside class="col-sm-4">
    <h2>Carrito</h2>
    <!-- Elementos del carrito -->
    <ul id="carrito" class="list-group"></ul>
    <hr>
    <!-- Precio total -->
    <p class="text-right">Total: <span id="total"></span>&dollar;</p>
    <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
  </aside>
  </div>`
}



const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');






























//     console.log("EL EVENTO ESTA EN:" , e.target);

//     let hijo = e.target;
//     let padre = hijo.parentNode;
//     let abuelo = padre.parentNode;
//     //console.log(padre);
//     //console.log(abuelo);

//     let nombre_producto = padre.querySelector("h5").textContent;

//     let precio = padre.querySelector("span").textContent;
//     let img = abuelo.querySelector("img").src;
//     //console.log(nombre_producto);
//     //console.log(precio);
//     //console.log(img);

//     let producto = {
//         nombre:nombre_producto,
//         img:img,
//         precio: precio,
//         cantidad:1
//     };

//     carrito.push(producto);

//     let arreglo_JSON = JSON.stringify(carrito);
//     localStorage.setItem("carrito" , arreglo_JSON);

//     console.log( carrito);

//     mostrar_carrito( producto );
// }

// botonCarrito.addEventListener("click", agregarACarrito);
