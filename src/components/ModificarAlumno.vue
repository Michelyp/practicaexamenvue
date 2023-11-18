<template>
  <form v-on:submit.prevent = "enviarDatos()">
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Nombre</label>
        <input type="text" v-model="alumno.nombre" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Apellidos</label>
        <input type="text" v-model="alumno.apellidos" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Imagen</label>
        <input type="text" v-model="alumno.imagen" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">ID Curso</label>
        <input type="text" v-model="alumno.idCurso" class="form-control" />
      </div>
    </div>
      <button type="submit" class="btn btn-primary btn-block mb-4">Modificar</button>
  </form>
</template>

<script>
import ServiceAlunnos from '@/services/ServiceAlumnos';
const service = new ServiceAlunnos();
export default {
  name: "CrearAlumno",
  data(){
    return{
      idAlumno:0,
      alumno:{
        idAlumno:0,
        nombre:"",
        apellidos:"",
        imagen:"",
        activo:1,
        idCurso:2023
      }
    }
  },    
  mounted(){
    this.idAlumno = this.$route.params.idAlumno;
    service.getAlumno(this.idAlumno).then(res=>{
      this.alumno = res.data;
    })
  },
  methods:{
      enviarDatos(){
        service.putModificarAlumno(this.alumno).then(res=>{
          this.$router.push("/listar");
          console.log(res);
        })
      }
    }
};
</script>
<style></style>
