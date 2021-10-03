// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll(".needs-validation");
  let datos = [];
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          let productUnit = form["validationUnit"].value;
          let nameProduct = form["validationnameProduct"].value;
          let state = form["validationState"].value;
          let description = form["validationDescription"].value;
          datos.push({precio: productUnit, nombre: nameProduct, estado: state, description: description})
          form.reset();
          // console.log(datos);
          // Agregamos los datos en localStorage
          localStorage.setItem('datosG', JSON.stringify(datos));
          event.preventDefault();
          alert('Producto Guardado correctamente');
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
  // Obteniendo lo agregado
  let guardado = localStorage.getItem('datosG');
  console.log('objetoObtenido: ', JSON.parse(guardado));
})();
