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
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.estado}</td>
                        <td>${producto.description}</td>
                        <td>Activo</td>
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
    alert("The product will be removed")
  });

  on(document, "click", ".btnEditar", (e) => {
    // parentNode obtiene el elemento donde estamos clickeando
    const fila = e.target.parentNode.parentNode;
    const id = fila.firstElementChild.innerHTML;
    guardadotable.forEach((dato, index) => {
      if (index == id) {
        document.getElementById("id").value = index;
        document.getElementById("nameUpdate").value = dato.nombre;
        document.getElementById("unitUpdate").value = dato.precio;
        document.getElementById("statusUpdate").value = dato.estado;
        document.getElementById("descripUdate").value = dato.description;
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
    
    let idProduct = document.forms["formUpdate"]["id"].value
    let nameProduct = document.forms["formUpdate"]["nameUpdate"].value
    let unitProduct = document.forms["formUpdate"]["unitUpdate"].value
    let statusProduct = document.forms["formUpdate"]["statusUpdate"].value
    let descProduct = document.forms["formUpdate"]["descripUdate"].value
    guardadotable.forEach((dato, index) => {
        if (index == idProduct) {
            dato.nombre = nameProduct
            dato.precio = unitProduct
            dato.estado = statusProduct
            dato.description = descProduct
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