<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import { projectColRef } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
const projects = ref([])
const router = useRouter()
function getProjects() {
    onSnapshot(projectColRef, (snapshot) => {
        const allProjects = snapshot.docs.map(doc => ({
            data: doc.data(),
            id: doc.id
        }))
        projects.value = allProjects
    })
}
const seeAllProjects = () => {
    router.push('/pmo/allProjects')
}
onMounted(getProjects);
</script>

<template>
    <div class="container">
        <div class="row">
            <section class="col-sm">
                <p class="fw-bold">Indicaciones clave</p>
                <label>Total de requerimientos:</label>
                <button class="btn btn-secondary btn-lg" disabled>3</button>
                <table class="flex-fill">
                    <tr class="flex-fill">
                        <td class="bg-danger"><button class="btn btn-secondary btn-lg" disabled>1</button></td>
                        <td class="bg-warning"><button class="btn btn-secondary btn-lg" disabled>1</button></td>
                        <td class="bg-success"><button class="btn btn-secondary btn-lg" disabled>1</button></td>
                    </tr>
                    <tr>
                        <td>Vencido</td>
                        <td>En proceso</td>
                        <td>Comprobado</td>
                    </tr>
                </table>
            </section>
            <form class="col-sm d-flex flex-column w-50">
                <p class="fw-bold">Filtrar por</p>
                <div class="row g-3 align-items-center">
                    <div class="col-auto w-25">
                        <label for="pProyect">Proyecto</label>
                    </div>
                    <div class="col-auto w-50">
                        <select class="form-select" aria-label=".form-select-sm example">
                            <option selected>Seleccionar</option>
                            <option v-for="p in projects" value="p.id">{{ p.data.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto w-25">
                        <label for="pPilar">Pilar</label>
                    </div>
                    <div class="col-auto w-50">
                        <select class="form-select" aria-label=".form-select-sm example">
                            <option selected>Seleccionar</option>
                            <option value="1">Ambiental</option>
                            <option value="2">Social</option>
                            <option value="3">Gobierno</option>
                        </select>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto w-25">
                        <label for="pResponsable">Responsable</label>
                    </div>
                    <div class="col-auto w-50">
                        <select class="form-select" aria-label=".form-select-sm example">
                            <option selected>Seleccionar</option>
                            <option value="1">Maria Caceres</option>
                            <option value="2">Lorena Alva</option>
                            <option value="3">Alvaro Olea</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="d-flex justify-content-center">
                <button type="submit" @click="seeAllProjects" class="btn btn-danger">Ver todos los proyectos</button>
            </div>
        </div>
    </div>
</template>