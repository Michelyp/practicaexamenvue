import Global from "./../Global";
import axios from "axios";

export default class ServiceAlunnos {
  getToken() {
    const headers = {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
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
  // getAlumnos() {
  //   return new Promise(function (resolve) {
  //     var request = "api/alumnos/alumnostoken";
  //     var url = Global.urlApiAlumnos + request;
  //     axios.get(url).then(response =>{
  //       resolve(response.data);
  //     })

  //   });
  // }
  //traer alumno por id
  getAlumno(id) {
    const headers = this.getToken();
    return new Promise(function (resolve) {
      var request = "api/alumnos/findalumnotoken/"+id;
      var url = Global.urlApiAlumnos + request;
      axios.get(url,{headers}).then(response =>{
        resolve(response);
      })

    });
  }
  // getAlumnosCursos() {
  //   const headers = this.getToken();
  //   return new Promise(function (resolve) {
  //     var request = "api/alumnos/cursostoken";
  //     var url = Global.urlApiAlumnos + request;
  //     axios.get(url,{headers}).then(response =>{
  //       resolve(response);
  //     })

  //   });
  // }
  getAlumnosCursos() {
    return new Promise(function (resolve) {
      var request = "api/alumnos/cursos";
      var url = Global.urlApiAlumnos + request;
      axios.get(url).then(response =>{
        resolve(response);
      })

    });
  }
  // getAlumnosFiltrarCursos(curso){
  //   const headers = this.getToken();
  //   return new Promise(function(resolve){
  //       var request ="api/alumnos/filtrarcursotoken/" + curso;
  //       var url = Global.urlApiAlumnos + request;
  //       axios.get(url,{headers}).then(response =>{
  //           resolve(response);
  //         })
  //   })
  // }
  getAlumnosFiltrarCursos(curso){
    return new Promise(function(resolve){
        var request ="api/alumnos/filtrarcurso/" + curso;
        var url = Global.urlApiAlumnos + request;
        axios.get(url).then(response =>{
            resolve(response);
          })
    })
  }
  postCreateAlumno(alumno){
    const headers = this.getToken();
    return new Promise(function(resolve){
        var request = "api/alumnos/insertalumnotoken";
        var url = Global.urlApiAlumnos + request;
        axios.post(url, alumno,{headers}).then(response=>{
            resolve(response);
        })
    })
  }
  putModificarAlumno(alumno){
    const headers = this.getToken();
    return new Promise(function(resolve){
        var request = "api/alumnos/updatealumnotoken";
        var url = Global.urlApiAlumnos + request;
        axios.put(url, alumno,{headers}).then(response=>{
            resolve(response);
        })
    })
  }
}
