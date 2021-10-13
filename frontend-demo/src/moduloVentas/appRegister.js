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
          let valFecha = form["validationFecha"].value;
          let valIdVenta = form["validationIdVenta"].value;
          let valcliente = form["validationCliente"].value;
          let valtipo = form["validationTipo"].value;
          let valIdent = form["validationIdentificacion"].value;
          let valVendedor = form["validationVendedor"].value;

          //let description = form["validationDescription"].value;
          datos.push({fecha: valFecha, idVenta: valIdVenta, cliente: valcliente, tipo: valtipo, identificacion:valIdent, vendedor: valVendedor})
          form.reset();
          // console.log(datos);
          // Agregamos los datos en localStorage
          localStorage.setItem('datosG', JSON.stringify(datos));
          event.preventDefault();
          alert('Venta registrada correctamente');
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
