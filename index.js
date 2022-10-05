const traerDatos = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await respuesta.json();
    let listado = document.getElementById("listaUl");
    data.forEach(item => {
      let li = document.createElement("li");
      li.innerHTML = `
        <h1>Titulo: ${item.title}</h1>
        <h2>ID: ${item.id}</h2>
      `;
      listado.append(li);
    });
  };
  
  traerDatos();