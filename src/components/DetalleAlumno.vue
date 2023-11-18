<template>
<table class="table" v-if="alumno" >
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Imagen</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{{alumno.nombre}}</th>
      <td>{{alumno.apellidos}}</td>
      <td><img :src="alumno.imagen" style="width:150px"/></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import ServiceAlumnos from './../services/ServiceAlumnos';
const service = new ServiceAlumnos();
export default {
    name:"DetalleAlumno",
    data(){
      return{
        idAlumno:null,
        alumno:{}
      }
    },
    mounted(){
      this.idAlumno = this.$route.params.idAlumno;
      service.getAlumno(this.idAlumno).then(response =>{
        this.alumno = response.data;
        console.log(this.alumno);
      })
    }
}
</script>

<style>

</style>