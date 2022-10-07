let carrito;

let carritoLocal = JSON.parse(localStorage.getItem("carrito"));

if (!carritoLocal) {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

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
    descripcion: "Fino tabaco importado de variedad Virginia Blend",
    precio: 750,
    imagen: "10achalay-tabaco-virginia.webp",
  },

  {
    id: 05,
    nombre: "Saint Natural",
    descripcion:
      "tabaco Virginia y tabaco Burley sin aditivos y con el sabor natural al tabaco.",
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

if (window.location.pathname.includes("carrito.html")) {
  document.addEventListener("DOMContentLoaded", crearCards);
}
window.addEventListener("load", () => {
  if (window.location.pathname.includes("carrito.html")) {
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
      class="card-img-top m-2 mb-auto"
      alt="..."
      />
      <div class="card-body">
      <p class="card-text">
      <h5 class="d-block text-center">${p.nombre}</h5>
      <br>
      ${p.descripcion}
      </p>
      <span class="d-block text-center"><strong> ${p.precio.toLocaleString(
        "es-AR",
        { style: "currency", currency: "ARS" }
      )}</strong></span>
      <br>
      <button name="botonCarrito" type="button" class="btn btn-primary btn-lg botonCarrito d-grid gap-2 col-6 mx-auto">
      Agregar
      </button>
      </div>
      
      `;
    card.className = "card mb-3 col mx-4";

    let btn_compra = document.getElementsByClassName("botonCarrito");

    contenedor.append(card);
    for (let boton of btn_compra) {
      boton.addEventListener("click", agregarCarrito);
    }
  }
}

function agregarCarrito(e) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  let marcador = e.target.parentNode;
  let nombreProducto = marcador.querySelector("h5").textContent;
  let precioProducto = marcador.querySelector("span").textContent;
  let fotoProducto = marcador.parentNode.querySelector("img").src;

  let producto = {
    nombre: nombreProducto,
    precio: precioProducto,
    imagen: fotoProducto,
    cantidad: 1,
  };

  let mismoProducto = carrito.some((p) => p.nombre === nombreProducto);
  if (!mismoProducto) {
    carrito = [...carrito, producto];
  } else {
    let producto_ = carrito.map((p) => {
      if (p.nombre === producto.nombre) {
        p.cantidad++;
        return p;
      } else {
        return p;
      }
    });

    carrito = [...producto_];
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  let tabla = document.getElementById("carrito");
  tabla.innerHTML = "";

  renderizarCarrito(carrito);
}

function renderizarCarrito(carrito) {
  let container = document.getElementById("carrito");

  for (let p of carrito) {
    let precio = p.precio
      ? parseInt(
          p.precio
            .split("")
            .filter((simbolo) => simbolo !== "$")
            .join("")
        )
      : "";

    let card = document.createElement("li");
    card.classList.add("carrito-container");
    card.innerHTML = `
    <img class="card-img-top m-2" src="${p.imagen}"></img>
    <li class="nombre_producto">${p.nombre}</li>
    <button class='borrarP'>Borrar</button>
    <span class="d-flex justify-content-center">Precio: $<p class="precio-producto">${
      precio * p.cantidad
    }</p></span>
   
    <span>${p.cantidad}</span>`;
    container.appendChild(card);
    let botonesBorrar = document.getElementsByClassName("borrarP");
    for (let btn of botonesBorrar) {
      btn.addEventListener("click", borrar_unidad);
    }

    calcular_total();
  }
}

const calcular_total = () => {
  let total = document.getElementById("total");
  let precios = document.getElementsByClassName("precio-producto");
  let sumaTotal = 0;

  for (let precio of precios) {
    sumaTotal += parseInt(precio.innerText);
    total.innerHTML = `${sumaTotal}`;
  }
};

const borrar_unidad = (e) => {
  let target = e.target.parentNode;
  let nombres = e.target.parentNode.getElementsByTagName("li");
  let container = document.getElementById("carrito");

  for (let p of carrito) {
    for (let nombre of nombres) {
      if (p.cantidad > 1 && p.nombre === nombre.innerText) {
        p.cantidad--;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        container.innerHTML = "";
        carrito = JSON.parse(localStorage.getItem("carrito"));
        calcular_total();
        renderizarCarrito(carrito);
      } else if (
        carrito.length === 1 &&
        p.cantidad === 1 &&
        p.nombre === nombre.innerText
      ) {
        target.remove();
        carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito = carrito.filter((e) => e.nombre !== nombre.innerText);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        container.innerHTML = "";
        carrito = JSON.parse(localStorage.getItem("carrito"));
        renderizarCarrito(carrito);
        let total = document.getElementById("total");
        let sumaTotal = 0;
        total.innerHTML = `${sumaTotal}`;
        return carrito;
      } else if (p.cantidad === 1 && p.nombre === nombre.innerText) {
        target.remove();
        carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito = carrito.filter((e) => e.nombre !== nombre.innerText);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        container.innerHTML = "";
        carrito = JSON.parse(localStorage.getItem("carrito"));
        renderizarCarrito(carrito);
        return carrito;
      }
    }
  }
};

const divisa = "$";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
let DOMbotonVaciar = document.querySelector("#boton-vaciar");
let DOMbotonComprar = document.querySelector("#boton-comprar");

if (window.location.pathname.includes("carrito.html")) {
  DOMbotonVaciar.addEventListener("click", vaciarCarrito);
  DOMbotonComprar.addEventListener("click", comprarProducto); //no funciona le falta una function que no se que ponerle
}

function vaciarCarrito() {
  let container = document.getElementById("carrito");
  let total = document.getElementById("total");
  carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  container.innerHTML = "";
  total.innerHTML = 0;
  renderizarCarrito(carrito);
}
// NO FUNCIONA

function comprarProducto(e) {
  Swal.fire({
    title: "Confirmar compra?",
    text: "su pedido esta siendo procesado",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, confirmar compra",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();
    } else {
    }
  });
}

class Formulario {
  constructor(nombre, email, mensaje) {
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
  }
}
window.addEventListener("submit", () => {});
let nombre = [];
let email = [];
let mensaje = [];

// API CLIMA
const API_KEY = "ffd2e62b9e1ad6af1732fea1b6c786f9";

const fetchData = (position) => {
  const { latitude, longitude } = position.coords;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&lang=es&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => setWeatherData(data));
};
const setWeatherData = (data) => {
  const weatherData = {
    location: data.name,
    description: data.weather[0].main,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    temperature: data.main.temp,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    date: getDate(),
  };

  Object.keys(weatherData).forEach((key) => {
    document.getElementById(key).textContent = weatherData[key];
  });

  const cleanUp = () => {
    let contenedorApi = document.getElementById("contenedorApi");
    let loader = document.getElementById("loader");
    loader.style.display = "none";
    contenedorApi.style.display = "flex";
  };
};
const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${("0" + (date.getMonth() + 1)).slice(
    -2
  )}-${date.getFullYear()}`;
};

const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
};

function cargar_carrito_storage() {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  renderizarCarrito(carrito);
}

if (window.location.pathname.includes("carrito.html")) {
  if (carritoLocal !== 0) {
    cargar_carrito_storage();
  }
}
