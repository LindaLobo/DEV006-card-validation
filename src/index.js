import validator from "./validator.js";

document.querySelector(".card-number-input").oninput = () => {
  const datos = document.querySelector(".card-number-input").value;
  const resultado = validator.maskify(datos);
  document.querySelector(".card-number-box").innerText = resultado;
};

document.querySelector(".card-holder-input").oninput = () => {
  document.querySelector(".card-holder-name").innerText = document
    .querySelector(".card-holder-input")
    .value.toUpperCase();
};

document.querySelector(".input-mes").oninput = () => {
  document.querySelector(".expiration-mm").innerText =
    document.querySelector(".input-mes").value;
};

document.querySelector(".input-year").oninput = () => {
  document.querySelector(".expiration-yy").innerText =
    document.querySelector(".input-year").value;
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

const boton = document.getElementById("nuevo_boton");

const contenedor = document.getElementById("numberTarjeta");

boton.addEventListener("click", function (e) {
  e.preventDefault();
  const container = contenedor.value;
  console.log(container);
  validator.maskify(container);
  validator.isValid(container);
  const response = validator.isValid(container);
  if (response === true) {
    document.getElementById("validador").innerText = "Su tarjeta paso, GRACIAS por la Donación";
  } else {
    document.getElementById("validador").innerText =
    "Verificar los datos de su Tarjeta";
  }
});

/* console.log(validator); */
