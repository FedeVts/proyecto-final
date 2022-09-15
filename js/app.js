let carrito = []

const listaProductos = [
  {
    nombre: "Flandria Vainilla",
    descripcion: "Fino tabaco de origen Belga saborizado vainilla",
    precio: 890,
    imagen: "realTABACO FLANDRIA VAINILLA 30gr.jpeg",
  },
  {
    nombre: "Flandria Virginia",
    descripcion: "Fino tabaco de origen Belga del tipo Virginia Blend",
    precio: 700,
    imagen: "2flandria-silver-tabaco-precios.jpg",
  },
  {
    nombre: "Cerrito Vainilla",
    descripcion: "Tabaco importado de Chile sabor vainilla",
    precio: 600,
    imagen: "4tabaco-cerrito-vainilla-venta-768x768.jpg.webp",
  },
  {
    nombre: "Achalay Virginia",
    descripcion: "Fino tabaco importado de variedad Virginia blend",
    precio:750,
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
  for (let p of listaProductos) {
    let card = document.createElement("div");
    
    card.innerHTML = `
    <img
    src="../assets/img-productos/${p.imagen}"
    class="card-img-top"
    alt="..."
    />
    <div class="card-body">
    <p class="card-text">
    <h5 class="d-block text-center">${p.nombre}</h5>
    <br>
    ${p.descripcion}
    </p>
    <span class="d-block text-center"><strong>${p.precio}</strong></span>
    <br>
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
    
      boton.addEventListener("click" , agregarCarrito)
       
    }
    contenedor.append(card);
  };
}

function agregarCarrito(e){
let marcador = e.target.parentNode;
let nombreProducto = marcador.querySelector('h5').textContent
let precioProducto = parseInt(marcador.querySelector('span').textContent)
let fotoProducto = marcador.parentNode.querySelector('img').src
let producto = {
  nombre: nombreProducto,
  precio: precioProducto,
  imagen: fotoProducto,
  
}
carrito.push(producto)
console.log(carrito);

renderizarCarrito()


}


function renderizarCarrito(e){
  let container = document.getElementById('carrito')
  let card = document.createElement('div')
  for(let p of carrito){
card.classList.add('carrito-container');
    card.innerHTML = `
    <img class="card-img-top" src="${p.imagen}"></img>
    <li>${p.nombre}</li>`
    container.append(card);
  }
}



const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
let DOMbotonVaciar = document.querySelector('#boton-vaciar');

let storage = localStorage.setItem('listaProductos', JSON.stringify(carrito))


function vaciarCarrito(){
  carrito = [];
  renderizarCarrito();
}
DOMbotonVaciar.addEventListener('click', vaciarCarrito);


// renderizarProductos();
renderizarCarrito();




























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
