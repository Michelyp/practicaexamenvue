<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Imagen</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="alumno in alumnos" :key="alumno">
      <th>{{alumno.nombre}}</th>
      <td>{{alumno.apellidos}}</td>
      <td><img :src="alumno.imagen" style="width:150px"/></td>
      <td><router-link class="btn btn-dark" :to="'/detalle/'+alumno.idAlumno">Detalle</router-link></td>
      <td><router-link class="btn btn-dark" :to="'/modificar/'+alumno.idAlumno">Modificar</router-link></td>
      <td><router-link class="btn btn-dark" :to="'/eliminar/'+alumno.idAlumno">Eliminar</router-link></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import ServiceAlumnos from './../services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
    name:"ListarAlumnos",
    data(){
      return{
        alumnos:{}
      }
    },
    mounted(){
      service.getAlumnos().then(response =>{
        this.alumnos = response.data
      })
    }
}
</script>

<style>

</style>