<script setup>
import { onMounted, ref } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { referencia } from '../firebase.js'
/* let pName = ref('')
let pStart = ref('')
let pEnd = ref(null)
let leader = ref(null)
let standard = ref(null)
let ambiental = ref([
    { name: 'Materiales', bool: false },
    { name: 'Energía', bool: false },
    { name: 'Agua', bool: false }
])
let social = ref([
    { name: 'Empleo', bool: false },
    { name: 'Salud', bool: false },
    { name: 'Trabajo', bool: false }
])
let gobierno = ref([])
let customGobierno = ref('')
const addCustomTopic = (topic, pillar) => {
    topics.value.push({
        name: topic,
        bool: true,
        pillar: pillar
    })
} */
const router = useRouter()
/* const handleSubmit = (e) => {
    router.push('/pmo/allProjects')
} */
let project = ref([])
let id = window.localStorage.getItem('EDITID')
console.log(id)
const docRef = referencia(id)

const getData = async () => {
    console.log('holi')
    // getDoc(docRef)
    // .then((response) => console.log(response.data()))
    try {
        const myProject = await getDoc(docRef)
        project.value = myProject.data()
        console.log(project.value)
    } catch(err) {
        console.log(err)
        console.log(err.stack)
        console.log(err.message)
    }
}

onMounted(getData)
</script>

<!-- <template>
    <form class="p-4 mt-2 d-flex flex-column gap-2" @submit.prevent="handleSubmit" style="">
        <div class="row g-3 align-items-center">
            <div class="col-auto w-25">
                <label for="pName" class="col-form-label fw-bold">Nombre del proyecto</label>
            </div>
            <div class="col-auto" style="width: 30%;">
                <input v-model="pName" type="text" id="pName" placeholder="Ejemplo: Reporte 23" class="form-control"
                    required>
            </div>
        </div>
        <div class="row g-3 align-items-center">
            <div class="col-auto w-25">
                <label for="pStart" class="col-form-label fw-bold">Fecha de inicio</label>
            </div>
            <div class="col-auto" style="width: 30%;">
                <input v-model="pStart" type="date" id="pStart" placeholder="Seleccionar" class="form-control">
            </div>
        </div>
        <div class="row g-3 align-items-center">
            <div class="col-auto w-25">
                <label for="pEnd" class="col-form-label fw-bold">Fecha de fin</label>
            </div>
            <div class="col-auto" style="width: 30%;">
                <input v-model="pEnd" type="date" id="pStart" placeholder="Seleccionar" class="form-control">
            </div>
        </div>
        <div class="row g-3 align-items-center">
            <div class="col-auto w-25">
                <label for="leader" class="col-form-label fw-bold">Líder del proyecto</label>
            </div>
            <div class="col-auto" style="width: 30%;">
                <select v-model="leader" name="leader" class="form-select">
                    <option value="Maria Caceres">Maria Caceres</option>
                    <option value="Lorena Alva">Lorena Alva</option>
                    <option value="Alvaro Olea">Alvaro Olea</option>
                </select>
            </div>
        </div>
        <div class="row g-3 align-items-center">
            <div class="col-auto w-25">
                <label for="standard" class="col-form-label fw-bold">Estándar del proyecto</label>
            </div>
            <div class="col-auto" style="width: 30%;">
                <select v-model="standard" name="leader" class="form-select" aria-label="Default select example">
                    <option value="1">Estándar 1</option>
                    <option value="2">Estándar 2</option>
                    <option value="3">Estándar 3</option>
                </select>
            </div>
        </div>
        <div class="pilares row">
            <div class="col-auto w-25">
                <label class="col-form-label fw-bold">Pilares</label>
            </div>
            <div class="col-auto d-flex justify-content-between gap-1" style="width: 30%;">
                <div class="border border-dark rounded outline">Ambiental</div>
                <div class="border border-dark rounded outline">Social</div>
                <div class="border border-dark rounded outline">Gobierno</div>
            </div>
        </div>

        <div class="row">
            <div class="col-auto w-25">
                <label class="col-form-label fw-bold">Temas</label>
            </div>
            <div class="col-auto d-flex justify-content-between" style="width: 30%;">
                <div class="t-check">
                    <div v-for="(el, index) in ambiental" :key="index">
                        <input type="checkbox" :name="el" @click="el.bool = !el.bool">
                        <label for="el">{{ el.name }}</label>
                    </div>
                    <div>
                        <input v-model="customAmbiental" type="text" class="form-control">
                        <button @click="addCustomTopic(customAmbiental, ambiental)" type="button"
                            class="btn btn-light">Agregar</button>
                    </div>
                </div>
                <div class="t-check">
                    <div v-for="(el, index) in social" :key="index">
                        <input type="checkbox" :name="el" @click="el.bool = !el.bool">
                        <label for="el">{{ el.name }}</label>
                    </div>
                    <div>
                        <input v-model="customSocial" type="text" class="form-control">
                        <button @click="addCustomTopic(customSocial, social)" type="button"
                            class="btn btn-light">Agregar</button>
                    </div>
                </div>
                <div class="t-check">
                    <div v-for="(e, index) in gobierno" :key="index">
                        <input type="checkbox" :name="el" @click="el.bool = !el.bool">
                        <label for="el">{{ el.name }}</label>
                    </div>
                    <div class="d-flex gap-1 flex-column">
                        <input v-model="customGobierno" type="text" class="form-control" placeholder="Añadir">
                        <button @click="addCustomTopic(customGobierno, gobierno)" type="button"
                            class="btn btn-light">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button type="submit" class="submit btn btn-outline-dark">Crear Proyecto</button>
        </div>
    </form>
</template> -->

<template>
    <h1>HOLA {{ project }}</h1>
</template>

<style>
.outline {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
}

.t-check {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
}

.btn-outline-dark {
    background-color: rgb(219, 83, 106);
    color: white;
    border: none;
}

.submit {
    background-color: rgb(219, 83, 106);
    color: white;
    border: none;
}
</style>
