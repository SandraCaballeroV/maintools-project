(function () {
  let resultados = "";
  let guardado = localStorage.getItem("datosG");
  let guardadotable = JSON.parse(guardado);
  console.log("objetoObtenido desde consultar : ", JSON.parse(guardado));
  const bodytable = document.querySelector("#bodyTable");
  //   Recorrer los productos
  guardadotable.forEach((producto, index) => {
    resultados += `<tr>
                        <td>${index}</td>
                        <td>${producto.fecha}</td>
                        <td>${producto.idVenta}</td>
                        <td>${producto.cliente}</td>
                        <td>${producto.tipo}</td>
                        <td>${producto.identificacion}</td>
                        <td>${producto.vendedor}</td>
                        <td><a class="btnEditar" title="Editar">&#128394</a></td>
                        <td><a class="btnBorrar" title="Eliminar">&#128465</a></td>
                   </tr>`;
  });
  bodytable.innerHTML = resultados;

  //   Evento jquery para los botenes editar y borrar
  const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
      if (e.target.closest(selector)) {
        handler(e);
      }
    });
  };

  on(document, "click", ".btnBorrar", (e) => {
    // parentNode obtiene el elemento donde estamos clickeando
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    alert("Se eliminara la venta")
  });

  on(document, "click", ".btnEditar", (e) => {
    // parentNode obtiene el elemento donde estamos clickeando
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    guardadotable.forEach((dato, index) => {
      if (index == id) {
        document.getElementById("id").value = index;
        document.getElementById("fechaUpdate").value = dato.fecha;
        document.getElementById("idventaUpdate").value = dato.idVenta;
        document.getElementById("clienteUpdate").value = dato.cliente;
        document.getElementById("tipoUpdate").value = dato.tipo;
        document.getElementById("numeroUpdate").value = dato.identificacion;
        document.getElementById("vendedorUpdate").value = dato.vendedor;
      }
    });
  });

  //Actualizar registro
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("formUpdate")
      .addEventListener("submit", updateDatos);
  });

  function updateDatos(event) {
    event.preventDefault();
    
    let idVent = document.forms["formUpdate"]["id"].value
    let fechaVenta = document.forms["formUpdate"]["fechaUpdate"].value
    let idVentaActual = document.forms["formUpdate"]["idventaUpdate"].value
    let clienteVenta = document.forms["formUpdate"]["clienteUpdate"].value
    let tipoIdVenta = document.forms["formUpdate"]["tipoUpdate"].value
    let numventa = document.forms["formUpdate"]["numeroUpdate"].value
    let vendedorVenta = document.forms["formUpdate"]["vendedorUpdate"].value
    guardadotable.forEach((dato, index) => {
        if (index == idVent) {
            dato.fecha = fechaVenta
            dato.idVenta = idVentaActual
            dato.cliente = clienteVenta
            dato.tipo = tipoIdVenta
            dato.identificacion = numventa
            dato.vendedor = vendedorVenta
        }
      });
    localStorage.setItem('datosG', JSON.stringify(guardadotable));
    location.reload();
  }

  //Cancelar registro
  document.getElementById('cancelar').addEventListener("click", function(){
      document.getElementById('formUpdate').reset()
  })

})();