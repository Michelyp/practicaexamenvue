<template>
  <form v-on:submit.prevent = "enviarDatos()">
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Nombre</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Apellidos</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Imagen</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">ID Curso</label>
        <input type="text" class="form-control" />
      </div>
    </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Crear</button>
  </form>
</template>

<script>
import ServiceAlunnos from '@/services/ServiceAlumnos';
const service = new ServiceAlunnos();
export default {
  name: "CrearAlumno",
  data(){
    return{
      alumno:{
        idAlumno:0,
        nombre:"",
        apellidos:"",
        imagen:"",
        activo:0,
        idCurso:2023
      }
    }
  },    
  methods:{
      enviarDatos(){
        service.postCreateAlumno(this.alumno).then(res=>{
          this.$router.push("/alumnos");
          console.log(res);
        })
      }
    }
};
</script>
<style></style>
