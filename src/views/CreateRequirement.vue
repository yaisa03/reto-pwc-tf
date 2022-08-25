<template>
  <div class='container  row g-0 align-items-center'>
    <form class='row g-30 '>
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
            <option selected>Seleccionar</option>
            <option value="1">Energia</option>
            <option value="2">Agua</option>
            <option value="3">Empleo</option>
          </select>
        </div>
      </div>
      <div class="row g-1 align-items-center ">
        <label for="inputRequiment" class="col-sm-2 col-form-label fw-bold">Requerimiento</label>
        <div class="col-sm-5 ">
          <input v-model="req" type="text" class="form-control" id="inputext" placeholder="Escribir">
          <div class='Referencer'>
            <p class='ref'>Referenciar</p>
            <button class='arrowRight'><img height='33' class="rounded-circle" src='../assets/flechaRicht.png'
                alt='Logo' /></button>
          </div>
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
          <select v-model="responsable" @change="selectResponsable" class="form-select" aria-label="Default select example">
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
      <button type="submit" @click="createReq" class="Btn">Crear requerimiento</button>
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
import { getItemsById, addReq, referencia } from '../firebase.js'
const router = useRouter()
const projectRequirements = (e) => {
  e.preventDefault()
  router.push('/pmo/projectRequirements')
}

const docId = window.localStorage.getItem('ID');

let themes = ref('')
let req = ref('')
let reqDescription = ref('')
let content = ref('')
let responsable = ref('')
let eDate = ref('')
let formFile = ref('')

let project = ref([])
let id = window.localStorage.getItem('ID')
console.log(id)
const docRef = referencia(id)
let reqDoc = ref('')

const getData = async () => {
    console.log('holi')
    console.log(docId)
    // getDoc(docRef)
    // .then((response) => console.log(response.data()))
    try {
        const myProject = await getDoc(docRef)
        project.value = myProject.data()
        reqDoc.value = project.value.requerimientos
        console.log(reqDoc)
        console.log(project.value)
    } catch(err) {
        console.log(err)
        console.log(err.stack)
        console.log(err.message)
    }
}

const createReq = (e) => {
  e.preventDefault()
  const newReq = {
    theme: themes.value,
    requirement: req.value,
    reqDescription: reqDescription.value,
    themeContent: content.value,
    responsable: responsable.value,
    expirationDate: eDate.value,
    formFile: formFile.value,
    proyectID: docId
  }
  console.log(newReq);
  console.log(reqDoc.value)
  //agregar el requerimiento al archivo por su id
 addReq(newReq).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
}

onMounted(getData);
</script>

