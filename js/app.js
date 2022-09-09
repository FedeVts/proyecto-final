const carrito = [];

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
];

// const botonCarrito = document.getElementsByClassName("botonCarrito");
// console.log(botonCarrito);

function agregarACarrito(e) {
  localStorage.setItem("carrito", "perro");
  console.log(e.target);
}

document.addEventListener("DOMContentLoaded", mounted);

function mounted() {
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
    <span class="d-block text-center">${producto.nombre}</span>
    <br>
    ${producto.descripcion}
    </p>
    <button name="botonCarrito" type="button" class="btn btn-primary btn-lg botonCarrito">
    Agregar a Carrito
    </button>
    </div>
    
    `;
    card.className = "card mb-3 col mx-4";

    contenedor.append(card);
  });
}

let btn_compra = document.querySelectorAll("[name='botonCarrito']");
console.log(btn_compra);

// for( let boton of btn_compra){

//     boton.addEventListener("click" , agregar_a_carrito);
// }

// function agregar_a_carrito(e){

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
