<template>
  <div class='container  row g-0 align-items-center'>
    <form class='row g-30 ' @submit.prevent="createReq">
      <div class='Back'>
        <p>
          <button class='arrow' @click="projectRequirements"><img class="rounded-circle" src='../assets/FlechaIzq.png'
              alt='Logo' /></button>
          Lista de Requerimientos
        </p>
      </div>
      <div class="row g-1 align-items-center ">
        <label for="inputTheme" class="col-sm-2 col-form-label fw-bold"> Tema </label>
        <div class="col-sm-5">
          <select v-model="themes" @change="selectTheme" class="form-select" aria-label="Default select example">
            <option v-for="el in filterByPillar(topics)" :key="el.name" :value="el.pillar + '_' + el.name">{{ el.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="row g-1 align-items-center ">
        <label for="inputRequiment" class="col-sm-2 col-form-label fw-bold">Requerimiento</label>
        <div class="col-sm-5 ">
          <input v-model="req" type="text" class="form-control" id="inputext" placeholder="Escribir">
          <!-- <div class='Referencer'>
            <p class='ref'>Referenciar</p>
            <button class='arrowRight'><img height='33' class="rounded-circle" src='../assets/flechaRicht.png'
                alt='Logo' /></button>
          </div> -->
        </div>

      </div>
      <div class="row g-1  align-items-center ">
        <label for="inputRequiment" class="col-sm-2 col-form-label fw-bold">Descripcion de Requerimiento</label>
        <div class="col-sm-5">
          <input v-model="reqDescription" type="text" class="form-control" id="inputext" placeholder="Escribir">
        </div>
      </div>
      <div class="row g-1 align-items-center ">
        <label for="inputTheme" class="col-sm-2 col-form-label fw-bold">Contenidos Temáticos</label>
        <div class="col-sm-5">
          <select v-model="content" @change="selectContent" class="form-select" aria-label="Default select example">
            <option selected>Seleccionar</option>
            <option value="GR1 301">GR1 301</option>
            <option value="GR2 302">GR2 302</option>
            <option value="GR2 303">GR3 303</option>
          </select>
        </div>
      </div>
      <div class="row g-1 align-items-center ">
        <label for="inputTheme" class="col-sm-2 col-form-label fw-bold"> Responsable </label>
        <div class="col-sm-5">
          <select v-model="responsable" @change="selectResponsable" class="form-select"
            aria-label="Default select example">
            <option selected>Seleccionar</option>
            <option value="Maria Caceres">Maria Caceres</option>
            <option value="Lorena Alva">Lorena Alva</option>
            <option value="Alvaro olea">Alvaro olea</option>
          </select>
        </div>
      </div>
      <div class="row g-1 align-items-center">
        <label for="pStart" class=" col-sm-2 col-form-label fw-bold">Fecha de vencimiento</label>
        <div class="col-sm-5">
          <input v-model="eDate" type="date" id="pStart" placeholder="Seleccionar" class="form-control">
        </div>
      </div>
      <div class="row g-1 align-items-center">
        <label for="formFileMultiple" class="col-sm-2 col-form-label fw-bold">Subir Template</label>
        <div class="col-sm-5">
          <input v-bind="formFile" class="form-control" type="file" id="formFileMultiple" multiple>
        </div>
      </div>
      <button type="submit" class="Btn">Crear requerimiento</button>
    </form>
  </div>
</template>

<style>
.Btn {
  height: 45px;
  width: 19%;
  border-radius: 10px;
  border: none;
  margin-top: 3%;
  margin-left: 46%;
  background-color: rgb(219, 83, 106);
  color: white;
}

.Referencer {
  margin-top: -3%;
  margin-left: 60%;
}

.Back {
  margin-top: 2%;
  margin-left: -40%;
  color: rgb(219, 83, 106);
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.arrow {
  background-color: inherit;
  border: none;
}

.Referencer {
  margin-top: -7.5%;
  margin-left: 109%;
}

.arrowRight {
  background-color: inherit;
  border: none;
  border-radius: 50%;
  height: 26px;
}

.ref {
  margin-top: 0px;
  margin-bottom: -1.5rem;
  margin-left: 42px;
}
</style>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { referencia, addReq, addReqId } from '../firebase.js'

const router = useRouter()

const docId = window.localStorage.getItem('ID');

let themes = ref('')
let req = ref('')
let reqDescription = ref('')
let content = ref('')
let responsable = ref('')
let eDate = ref('')
let formFile = ref('')

let project = ref([])
const docRef = referencia(docId)

let topics = ref([])

// let filtered = ref([])
const filterByPillar = (arr) => {
  console.log(arr)
  const filtered = arr.filter(topic => topic.bool === true)
  console.log(filtered)
  return filtered
}

const getData = async () => {
  try {
    const myProject = await getDoc(docRef)
    project.value = myProject.data()
    topics.value = project.value.topics
    // const filterByPillar=() => topics.value.filter(topic => topic.bool === true)
  } catch (err) {
    console.log(err)
    console.log(err.stack)
    console.log(err.message)
  }
}

const createReq = async (e) => {
  const theme = themes.value.split('_')
  const newReq = {
    pillar: theme[0],
    theme: theme[1],
    requirement: req.value,
    reqDescription: reqDescription.value,
    themeContent: content.value,
    responsable: responsable.value,
    expirationDate: eDate.value,
    formFile: formFile.value,
    proyectID: docId,
    status: "En Progreso",
    date: new Date().toLocaleString()
  }
  addReq(newReq)
  .then((res) => {
    const reqId = res.id
    console.log('reqId', reqId)
    addReqId(docId, reqId)
    e.target.reset()
    router.push('/pmo/projectRequirements')
  })
  .catch ((err) => {
    console.log(err)
    console.log(err.stack)
    console.log(err.message)
  })
}

const projectRequirements = (e) => {
  e.preventDefault()
  router.push('/pmo/projectRequirements')
}

onMounted(getData);
</script>

