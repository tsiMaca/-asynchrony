//async await y es muy facil capturar el error
async function getNombre(username) {
  const url = `https://api.github.com/users/${username}`;
  const respuesta = await fetch(url);
  const json = await respuesta.json();
  if (respuesta.status !== 200) throw Error("el usuario no existe");

  return json.name;
}

//esto es con sintaxis de promesas y capturando el error
/* getNombre("tsisaaMaca")
  .then((nombre) => console.log(nombre))
  .catch((e) => console.log(e));
 */

  (async function() {
    try{
        const nombre = await getNombre('tsiMaca')
        console.log(nombre);
    } catch (e) {
        console.log(`Error:' ${e}`)
    }

  })()