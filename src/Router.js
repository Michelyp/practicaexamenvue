import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import CrearAlumno from './components/CrearAlumno.vue';
import DetalleAlumno from './components/DetalleAlumno.vue';
import EliminarAlumno from './components/EliminarAlumno.vue';
import ListarAlumnos from './components/ListarAlumnos.vue';
import ModificarAlumno from './components/ModificarAlumno.vue';
import CursoComponent from './components/CursoComponent.vue';


const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/crear", component: CrearAlumno
    },
    {
        path: "/detalle/:idAlumno", component: DetalleAlumno
    },
    {
        path: "/eliminar/:idAlumno", component: EliminarAlumno
    },
    {
        path: "/listar", component: ListarAlumnos
    },
    {
        path: "/modificar/:idAlumno", component: ModificarAlumno
    },
    {
        path: "/curso/:annyo", component: CursoComponent
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;