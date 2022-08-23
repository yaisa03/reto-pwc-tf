<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { addProject } from '../firebase.js'
let pName = ref('')
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
const router = useRouter()
const route = useRoute()
const handleSubmit = (e) => {
  const dataObj = {
    name: pName.value,
    start: pStart.value,
    end: pEnd.value,
    leader: leader.value,
    standard: standard.value,
    ambiental: ambiental.value,
    social: social.value,
    gobierno: gobierno.value
  }
  addProject(dataObj)
    .then(() => {
      e.target.reset()
      // this.$router.push('/requirementList')
      router.push('/pmo/requirementList')
    })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="row g-3 align-items-center">
      <div class="col-auto w-25">
        <label for="pName" class="col-form-label fw-bold">Nombre del proyecto</label>
      </div>
      <div class="col-auto w-25">
        <input v-model="pName" type="text" id="pName" placeholder="Ejemplo: Reporte 23" class="form-control" required>
      </div>
    </div>
    <div class="row g-3 align-items-center">
      <div class="col-auto w-25">
        <label for="pStart" class="col-form-label fw-bold">Fecha de inicio</label>
      </div>
      <div class="col-auto w-25">
        <input v-model="pStart" type="date" id="pStart" placeholder="Seleccionar" class="form-control">
      </div>
    </div>
    <div class="row g-3 align-items-center">
      <div class="col-auto w-25">
        <label for="pEnd" class="col-form-label fw-bold">Fecha de fin</label>
      </div>
      <div class="col-auto w-25">
        <input v-model="pEnd" type="date" id="pStart" placeholder="Seleccionar" class="form-control">
      </div>
    </div>
    <div class="row g-3 align-items-center">
      <div class="col-auto w-25">
        <label for="leader" class="col-form-label fw-bold">Líder del proyecto</label>
      </div>
      <div class="col-auto w-25">
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
      <div class="col-auto w-25">
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
      <div class="col-auto w-25 flex">
        <div class="border border-dark rounded outline">Ambiental</div>
        <div class="border border-dark rounded outline">Social</div>
        <div class="border border-dark rounded outline">Gobierno</div>
      </div>
    </div>

    <div class="row">
      <div class="col-auto w-25">
        <label class="col-form-label fw-bold">Temas</label>
      </div>
      <div class="col-auto w-25 flex">
        <div>
          <div v-for="el in ambiental">
            <input type="checkbox" :name="el" @click="el.bool = !el.bool">
            <label for="el">{{ el.name }}</label>
          </div>
          <div>
            <input type="text" class="form-control">
            <button>Agregar</button>
          </div>
        </div>
        <div>
          <div v-for="el in social">
            <input type="checkbox" :name="el" @click="el.bool = !el.bool">
            <label for="el">{{ el.name }}</label>
          </div>
          <div>
            <input type="text" class="form-control">
            <button>Agregar</button>
          </div>
        </div>
        <div>
          <div v-for="el in gobierno">
            <input type="checkbox" :name="el" @click="el.bool = !el.bool">
            <label for="el">{{ el.name }}</label>
          </div>
          <div>
            <input type="text" class="form-control">
            <button>Agregar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-outline-dark">Crear Proyecto</button>
    </div>
  </form>
</template>

<style>
.outline {
  width: fit-content;
  padding: 5px 13px;
}

.btn {
  background-color: rgb(219, 83, 106);
  color: white;
  border: none;
}

.topics {
  display: grid;
  grid-template-columns: 20vw 20vw 20vw;
}

.flex {
  display: flex;
}
</style>