<script setup>
import { ref } from 'vue'
let ambiental = ref(false)
let social = ref(false)
let gobierno = ref(false)
const log = () => console.log('ambiental', ambiental.value)
</script>

<template>
  <p>Crear proyecto</p>
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