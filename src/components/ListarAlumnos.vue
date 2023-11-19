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
        <th>{{ alumno.nombre }}</th>
        <td>{{ alumno.apellidos }}</td>
        <td><img :src="alumno.imagen" style="width: 150px" /></td>
        <td>
          <router-link class="btn btn-dark" :to="'/detalle/' + alumno.idAlumno"
            >Detalle</router-link
          >
        </td>
        <td>
          <router-link
            class="btn btn-dark"
            :to="'/modificar/' + alumno.idAlumno"
            >Modificar</router-link
          >
        </td>
        <td>
          <router-link
            class="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            :to="'/eliminar/' + alumno.idAlumno"
            >Eliminar</router-link
          >
        </td>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Eliminar {{ alumno.nombre }}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->
</template>

<script>
import ServiceAlumnos from "./../services/ServiceAlumnos";
const service = new ServiceAlumnos();
export default {
  name: "ListarAlumnos",
  data() {
    return {
      alumnos: [],
    };
  },
  mounted() {
    service.getAlumnos().then((response) => {
      this.alumnos = response.data;
    });
  },
};
</script>

<style></style>
