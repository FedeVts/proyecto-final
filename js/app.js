let carrito = [];

const listaProductos = [
  {
    id: 01,
    nombre: "Flandria Vainilla",
    descripcion: "Fino tabaco de origen Belga saborizado vainilla",
    precio: 890,
    imagen: "realTABACO FLANDRIA VAINILLA 30gr.jpeg",
  },
  {
    id: 02,
    nombre: "Flandria Virginia",
    descripcion: "Fino tabaco de origen Belga del tipo Virginia Blend",
    precio: 890,
    imagen: "2flandria-silver-tabaco-precios.jpg",
  },
  {
    id: 03,
    nombre: "Cerrito Vainilla",
    descripcion: "Tabaco importado de Chile sabor vainilla",
    precio: 600,
    imagen: "4tabaco-cerrito-vainilla-venta-768x768.jpg.webp",
  },
  {
    id: 04,
    nombre: "Achalay Virginia",
    descripcion: "Fino tabaco importado de variedad Virginia blend",
    precio: 750,
    imagen: "10achalay-tabaco-virginia.webp",
  },

  {
    id: 05,
    nombre: "Saint Natural",
    descripcion:"tabaco Virginia y tabaco Burley sin aditivos y con el sabor natural al tabaco.",
    precio: 900,
    imagen: "5saints-tabaco-natural-precio.jpg",
  },
  {
    id: 06,
    nombre: "Don Jose Dark",
    descripcion: "Tabaco importado de Mexico variedad Dark black",
    precio: 680,
    imagen: "6tabaco-don-jose-precio.jpg",
  },
  {
    id: 07,
    nombre: "Sairy Natural",
    descripcion: "Fino tabaco importado de variedad Virginia blend",
    precio: 1020,
    imagen: "7Tabaco-Sayri-tabaqueria-online-pop.webp",
  },
  {
    id: 08,
    nombre: "Achalay Menta",
    descripcion: "Fino tabaco importado de variedad Virginia blend",
    precio: 750,
    imagen: "9tabaco-achalay-menta-venta.jpg",
  },
  {
    id: 09,
    nombre: "Argento Natural",
    descripcion: "Tabaco Argento Natural sin conservantes",
    precio: 800,
    imagen: "tabaco-argento-natural-precio-1.jpg",
  },
  {
    id: 10,
    nombre: "Argento Chocolate",
    descripcion: "Tabaco Argento Saborizado Chocolate",
    precio: 800,
    imagen: "12tabaco-argento-chocolate-venta.jpg",
  },
  {
    id: 11,
    nombre: "Arlequin piña colada",
    descripcion: "Tabaco marca Arlequin saborizado piña colada",
    precio: 830,
    imagen: "11tabaco-arlequin-pina-colada-venta.jpg",
  },
  {
    id: 12,
    nombre: "Arlequin Choco Mint",
    descripcion: "Tabaco marca Arlequin saborizado chocolate y menta",
    precio: 830,
    imagen: "tabaco-arlequin-chocomint-precios-mayoristas.jpg",
    
  },
  
];

// const botonCarrito = document.getElementsByClassName("botonCarrito");
// console.log(botonCarrito);

function agregarACarrito(e) {
  localStorage.setItem("carrito", "cantidad");
  console.log(e.target);
}

document.addEventListener("DOMContentLoaded", crearCards);
window.addEventListener("load", () => {
  if (window.location == "../pages/galeriaProductos") {
    return;
  } else {
    Swal.fire({
      title: "Sos Mayor de Edad?",
      text: "Esta pagina es solo para Mayores de 18 años",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "No soy mayor de edad",
      cancelButtonText: "Soy mayor de edad",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Prohibido", "No podes ingresar.", "error");
        window.location.replace(
          "https://www.youtube.com/watch?v=mvcyruqSqr8&ab_channel=UrielGuzman"
        );
      }
    });
  }
});

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
    <span class="d-block text-center"><strong> ${p.precio}</strong></span>
    <br>
    <button name="botonCarrito" type="button" class="btn btn-primary btn-lg botonCarrito d-grid gap-2 col-6 mx-auto">
    Agregar
    </button>
    </div>
    
    `;
    card.className = "card mb-3 col mx-4";

    let btn_compra = document.getElementsByClassName("botonCarrito");
    console.log(btn_compra);
    contenedor.append(card);
    for (let boton of btn_compra) {
      console.log(boton);

      boton.addEventListener("click", agregarCarrito);
    }
  }
}

function agregarCarrito(e) {
  let marcador = e.target.parentNode;
  let nombreProducto = marcador.querySelector("h5").textContent;
  let precioProducto = parseInt(marcador.querySelector("span").textContent);
  let fotoProducto = marcador.parentNode.querySelector("img").src;
  let producto = {
    nombre: nombreProducto,
    precio: precioProducto,
    imagen: fotoProducto,
  };

  carrito.push(producto);
  console.log(carrito);

  renderizarCarrito();
}

function renderizarCarrito(e) {
  let container = document.getElementById("carrito");
  let card = document.createElement("div");
  for (let p of carrito) {
    card.classList.add("carrito-container");
    card.innerHTML = `
    <img class="card-img-top" src="${p.imagen}"></img>
    <li>${p.nombre}</li>
    <li>Precio: $<p class="precio-producto">${p.precio}</p></li>`;
    container.append(card);
    let total = document.getElementById("total");
    let precios = document.getElementsByClassName("precio-producto");
    let sumaTotal = 0;

    for (let precio of precios) {
      sumaTotal += parseInt(precio.innerText);
      total.innerHTML = `${sumaTotal}`;
    }
  }
}

const divisa = "$";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
let DOMbotonVaciar = document.querySelector("#boton-vaciar");
let DOMbotonComprar = document.querySelector("#boton-comprar");
console.log(DOMbotonVaciar);

let storage = localStorage.setItem("listaProductos", JSON.stringify(carrito));

// renderizarProductos();
renderizarCarrito();
DOMbotonVaciar.addEventListener("click", vaciarCarrito);
DOMbotonComprar.addEventListener("click", comprarProducto); //no funciona le falta una function que no se que ponerle

function vaciarCarrito() {
  carrito = [];
  let container = document.getElementById("carrito");
  container.innerHTML = "";
  let total = document.getElementById("total");
  total.innerHTML = 0;
  renderizarCarrito();
}
// NO FUNCIONA
let mismoProducto = carrito.some(
  (p) => p.nombre === nombreProducto.nombre
);
if(mismoProducto){
  let producto = carrito.map((p) => {
    if (p.nombre === producto.nombre){
      p.cantidad++;
      return p;
    }else{
    return p;
    }
  });
  
  carrito = [...producto];
  }else{
    carrito = [...carrito, producto];
  }
  let tabla = document.getElementById("tbody");
  tabla.innerHTML = "";
  mostrarCarrito(carrito);



function comprarProducto(e) {
  Swal.fire({
    title: "Confirmar compra?",
    text: "su pedido esta siendo procesado",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, confirmar compra",
    cancelButtonText:"Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();
    } else {
    }
  });
}

class Formulario{
constructor(nombre, email, mensaje){
  this.nombre = nombre;
  this.email = email;
  this.mensaje = mensaje;
}

}
 window.addEventListener("submit", ()=>{

  
 })
let nombre = [];
let email = [];
let mensaje = [];






































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
