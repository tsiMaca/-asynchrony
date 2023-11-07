//con fech y la sintaxis de promesas aca directamente no se como capturar el error

function getNombre(username) {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((json) => {
      return json.name;
    })
   
}
getNombre("tsiMaca")
  .then((nombre) => console.log(nombre))

