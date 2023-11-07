const usuarios = [
  { id: 1, nombre: "ricardo", profesion_id: 1 },
  { id: 2, nombre: "alejandro", profesion_id: 1 },
  { id: 3, nombre: "diego", profesion_id: 2 },
];
const profesion = {
  1: "programador",
  2: "disenador",
};

function getUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios);
    }, 200);
  });
}
function getUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios.filter((usuario) => usuario.id === id)[0]);
    }, 200);
  });
}


function getProfesion(id){
    return new Promise ((resolve, reject)=>{
        setTimeout(
            resolve(profesion[id])
     ,200) })
}

Promise.all([getProfesion(1), getProfesion(2)])
.then((respuesta)=>console.log(respuesta))