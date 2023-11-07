const usuarios = [
  { id: 1, nombre: "ricardo", profesion_id: 1 },
  { id: 2, nombre: "alejandro", profesion_id: 1 },
  { id: 3, nombre: "diego", profesion_id: 2 },
];
const profesion = {
  1: "programador",
  2: "disenador",
};
function getUsuarios(callback) {
  setTimeout(() => {
    callback(null, usuarios);
  }, 200);
}
function getUsuario(id, callback) {
  setTimeout(() => {
    callback(
      null,
      usuarios.filter((usuario) => usuario.id === id) [0])
  }, 200);
}
function getProfesion(id, callback) {
  setTimeout(() => {
    callback(null, profesion[id]);
  }, 200);
}
//queremos la profesion de alejandro esto era con callbacks 
getUsuarios((err, usuarios) => {
  const alejandroId = usuarios[1].id;

  getUsuario(alejandroId, (err, usuario) => {
    const profesionId = usuario.profesion_id

    getProfesion(profesionId, (err, profesion) => {
      console.log("la profesion de alejandro es ", profesion);
    });
  });
});
