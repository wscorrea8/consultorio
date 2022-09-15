function listarRoles() {
    const apiListaRol = "http://localhost:8094/backen03/agencias/todas/";
    const miPrimeraPromesa = fetch(apiListaRol).then((resultado) =>
      resultado.json()
    );
    Promise.all([miPrimeraPromesa]).then((arregloDatos) => {
      const misDatos = arregloDatos[0];
      // Aca va el codigo de agregar las filas a la tabla de roles
      agregarFilas(misDatos);
    });
  }
  function agregarFilas(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const codigo = arregloExterno[i].codAgencia;
      const nombe = arregloExterno[i].nomAgencia;
  
      document.getElementById("tablaRoles").insertRow(-1).innerHTML =
        "<td>" + codigo + "</td>" + "<td>" + nombe + "</td>";
    }
  }
  