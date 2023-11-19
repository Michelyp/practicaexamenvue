<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/crear"
                  >Registrar</router-link
                >
              </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/listar"
                >Lista Alumnos</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <router-link
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                cursos
              </router-link>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    v-for="curso in cursos"
                    :key="curso"
                    class="dropdown-item"
                    :to="'/curso/' + curso"
                    >{{ curso }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceAlumno from "./../services/ServiceAlumnos";
const service = new ServiceAlumno();
export default {
  name: "MenuComponent",
  data() {
    return {
      cursos: null,
    };
  },
  mounted() {
    this.loadMarcas();
  },
  methods: {
    loadMarcas() {
      service.getAlumnosCursos().then(result => {
        this.cursos = result.data;
      });
    },
  },
};
</script>

<style></style>
