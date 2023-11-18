import Global from "./../Global";
import axios from "axios";

export default class ServiceAlunnos {
  getToken() {
    const headers = {
      "Authorization": "Bearer " + localStorage.getItem("token")
    };
    return headers;
  }
  getLogin(usuario) {
    return new Promise(function (resolve) {
      var request = "api/auth/login";
      var url = Global.urlApiAlumnos + request;
      axios.post(url, usuario).then((response) => {
        resolve(response);
      });
    });
  }
  getAlumnos() {
    const headers = this.getToken();
    return new Promise(function (resolve) {
      var request = "api/alumnos/alumnostoken";
      var url = Global.urlApiAlumnos + request;
      axios.get(url,{headers}).then(response =>{
        resolve(response);
      })

    });
  }
  getAlumnosCursos() {
    const headers = this.getToken();
    return new Promise(function (resolve) {
      var request = "api/alumnos/cursostoken";
      var url = Global.urlApiAlumnos + request;
      axios.get(url,{headers}).then(response =>{
        resolve(response);
      })

    });
  }
  getAlumnosFiltrarCursos(curso){
    const headers = this.getToken();
    return new Promise(function(resolve){
        var request ="api/alumnos/filtrarcursotoken/" + curso;
        var url = Global.urlApiAlumnos + request;
        axios.get(url,{headers}).then(response =>{
            resolve(response);
          })
    })
  }
  postCreateAlumno(alumno){
    
  }

}
