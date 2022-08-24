<script setup>
import { ref, computed } from 'vue'
const state = computed(() => {
  // create a computed property here
})
</script>
<template>
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item  flex-fill">
            <p class="fw-bold">Nombre del proyecto</p>
            <p>Proyecto23</p>
        </li>
        <li class="list-group-item  flex-fill">
            <p class="fw-bold">Requerimiento</p>
            <p></p>
        </li>
        <li class="list-group-item  flex-fill">
            <p class="fw-bold">Descripción del Requerimiento</p>
            <p></p>
        </li>
        <li class="list-group-item  flex-fill">
            <p class="fw-bold">Fecha de creación</p>
            <p></p>
        </li>
        <li class="list-group-item  flex-fill">
            <p class="fw-bold">Fecha de Vencimiento</p>
            <p></p>
        </li>
        <li class="list-group-item  flex-fill">
            <p class="fw-bold">Estatus</p>
            <p></p>
        </li>
    </ul>
    <form class="col-8 ms-3 mt-3">
        <div class="input-group mb-3">
            <label class="form-label col-4">Detalle del contenido</label>
            <input type="text" class="col-7">
        </div>
        <div class="input-group mb-3">
            <label class="form-label col-4">Dato</label>
            <input type="text" class="col-7">
            <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked">
        </div>
        <div class="input-group mb-3">
            <label class="form-label col-4">Evidencia de Integridad</label>
            <input type="text" class="col-7">
            <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked">
        </div>
        <div class="input-group mb-3">
            <label class="form-label col-4">Evidencia de soporte</label>
            <input type="text" class="col-7">
            <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked">
        </div>
    </form>
    <div class="d-flex justify-centerd justify-content-evenly mt-4 mb-3 col-12">
        <button type="submit" class="btn btn-primary col-3">Enviar</button>
        <button type="submit" class="btn btn-primary col-3">Editar</button>
        <button type="submit" class="btn btn-primary col-3">Guardar Borrador</button>
    </div>
    <div class="mb-3 d-flex">
        <div class="d-flex flex-column">
            <label class="form-label">Evidencia de soporte</label>
            <button type="submit" class="btn btn-primary">Iniciar</button>
        </div>
        <input type="text" class="col-7">
    </div>
</template>

<style lang="scss">
</style>

