<template>
<div class="container">
    <div class="row mt-5">
        <section class="col-sm float-left mr-10">
        <span class="fw-bold float-left">Indicaciones clave</span>
        <div class="mt-4">
            <label class="pr-5">Total de requerimientos:</label>
            <button class="btn btn-secondary btn-lg ml-5 ms-4" disabled>{{finalFilter.length}}</button>
        </div>
        
        <table class="container mt-5">
            <tr class="fill">
                <td class=" p-1 text-center " style="background-color: rgb(224, 48, 30) ;"><button class="btn btn-secondary btn-lg" disabled>{{due}}</button></td>
                <td class="p-1 text-center " style="background-color: rgb(255, 182, 0);"><button class="btn btn-secondary btn-lg" disabled>{{pending}}</button></td>
                <td class=" p-1 text-center " style="background-color: rgb(173, 255, 38);"><button class="btn btn-secondary btn-lg" disabled>{{done}}</button></td>
            </tr>

            <tr>
                <td class="text-center">Vencido</td>
                <td class="text-center">En proceso</td>
                <td class="text-center">Completado</td>
            </tr>
        </table>
        </section>

        <form class="col-sm d-flex flex-column w-50 px-5">
            <span class="fw-bold">Filtrar por</span>
            <div class="row g-3 align-items-center mt-3">
                <div class="col-auto w-25">
                    <label for="pProyect">Proyecto</label>
                </div>
                <div class="col-auto w-50">
        <select v-model="currentProject" @change="selectId" class="form-select" aria-label="Default select example">
         <option selected>Seleccionar</option>
        <option v-for="p in projects" :value="p.id" :key="p">{{ p.data.name }}</option>
      </select>
                </div>
            </div>
            <div class="row g-3 align-items-center mt-3">
                <div class="col-auto w-25">
                    <label for="pPilar">Pilar</label>
                </div>
                <div class="col-auto w-50">
                    <select v-model="selectedPillar" @change="byPillar" class="form-select" aria-label=".form-select-sm example">
                        <option selected>Seleccionar</option>
                        <option value="Ambiental">Ambiental</option>
                        <option value="Social">Social</option>
                        <option value="Gobierno">Gobierno</option>
                    </select>
                </div>
            </div>
            <div class="row g-3 align-items-center mt-3">
                <div class="col-auto w-25">
                    <label for="pResponsable">Responsable</label>
                </div>
                <div class="col-auto w-50">
                    <select v-model="selectedResponsible" class="form-select" aria-label=".form-select-sm example">
                        <option selected>Seleccionar</option>
                        <option value="Maria Caceres">Maria Caceres</option>
                        <option value="Lorena Alva">Lorena Alva</option>
                        <option value="Alvaro Olea">Alvaro Olea</option>
                    </select>
                </div>
            </div>
        </form>
    </div>

    <div class="row mt-5">
        <div class="d-flex justify-content-center">
            <button type="submit" @click="seeAllProjects" class="btn btn-danger">Ver todos los proyectos</button>
        </div>
    </div>
</div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue';
import { projectColRef, refCol } from '../firebase'
import { onSnapshot } from '@firebase/firestore'
const projects = ref([])

let requirements = ref([])
let arrReq = ref([])
const arrPillar = ref([])

const router = useRouter()
function getProjects() {
    onSnapshot(projectColRef, (snapshot) => {
        const allProjects = snapshot.docs.map(doc => ({
            data: doc.data(),
            id: doc.id
        }))
        projects.value = allProjects
        console.log(projects.value)
    })
     onSnapshot(refCol, (snapshot) => {
    const allRequirements = snapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }))

    requirements.value = allRequirements
    arrReq.value = allRequirements
    console.log('requirements',requirements.value)
    console.log('requirements',requirements)
    // selectId == requirements.proyectID
  })
}
const seeAllProjects = () => {
    router.push('/pmo/allProjects')
}
let currentProject = ref('')
let selectedPillar = ref('')
let selectedResponsible = ref('')
const finalFilter = computed(()=>{
    let newArr = requirements.value
    if(currentProject.value){
        newArr = newArr.filter(req => req.data.proyectID === currentProject.value)
    }
    if(selectedPillar.value){
        newArr = newArr.filter(req => req.data.pillar ===selectedPillar.value)
    }
    if(selectedResponsible.value){
        newArr = newArr.filter(req => req.data.responsable === selectedResponsible.value)
    }
    return newArr
})
const due= computed(()=>{
return finalFilter.value.filter(req => req.data.status === 'Vencido').length

})
const pending = computed(()=>{
return finalFilter.value.filter(req => req.data.status === 'En Progreso').length

})
const done= computed(()=>{
return finalFilter.value.filter(req => req.data.status === 'Completado').length

})
/* 
const selectId = () => {
     arrReq.value = requirements.value
  window.localStorage.setItem('ID', currentProject.value)
const filteredReq = arrReq.value.filter(req => req.data.proyectID === currentProject.value)
arrReq.value = filteredReq
} */

/* 

const byPillar = () => {
    arrPillar.value = arrReq.value
    const filtered =arrReq.value.filter(req => req.data.pillar ===selectedPillar.value)
    arrReq.value = filteredReq
} */

onMounted(getProjects);
</script>