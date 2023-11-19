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
    </tr>
  </tbody>
</table>
</template>

<script>
import ServiceAlunnos from '@/services/ServiceAlumnos';
const service = new ServiceAlunnos();
export default {
    name:"CursoComponent",
    data(){
      return{
        alumnos:[],
        idCurso: null
      }
    },
    mounted(){
      this.idCurso = this.$route.params.annyo;
      this.cargarAlumnos();
    },
    watch:{
        '$route.params.annyo'(nextVal, oldVal){
            if(nextVal != oldVal){
                this.idCurso = parseInt(this.$route.params.annyo);
                this.cargarAlumnos();
            }
        }
    },
    methods:{
      cargarAlumnos(){
          service.getAlumnosFiltrarCursos(this.idCurso).then(response=>{
            this.alumnos=response.data;
          })
      }
    }
}
</script>

<style>

</style>