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
  <form>
    <label for="pName">Nombre del proyecto</label>
    <input type="text" id="pName" placeholder="Ejemplo: Reporte 23">
    <label for="pStart">Fecha de inicio</label>
    <input type="date" id="pStart" placeholder="Seleccionar">
    <label for="pEnd">Fecha de fin</label>
    <input type="date" id="pEnd" placeholder="Seleccionar">
    <label for="leader">Líder del proyecto</label>
    <select name="leader">
      <option value="Maria Caceres">Maria Caceres</option>
      <option value="Lorena Alva">Lorena Alva</option>
      <option value="Alvaro Olea">Alvaro Olea</option>
    </select>
    <label for="estandar">Estándar del proyecto</label>
    <select name="estandar" id="estandar">
      <option value="1">Estándar 1</option>
      <option value="2">Estándar 2</option>
      <option value="3">Estándar 3</option>
    </select>
    <p>Pilares</p>
  </form>
  <div>
    <button @click="ambiental = !ambiental">Ambiental</button>
    <button @click="social = !social">Social</button>
    <button @click="gobierno = !gobierno">Gobierno</button>
  </div>
  <button @click="log">click me</button>
</template>