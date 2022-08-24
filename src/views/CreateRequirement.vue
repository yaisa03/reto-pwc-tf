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
          <select class="form-select" aria-label="Default select example">
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
          <input type="text" class="form-control" id="inputext" placeholder="Escribir">
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
          <input type="text" class="form-control" id="inputext" placeholder="Escribir">
        </div>
      </div>
      <div class="row g-1 align-items-center ">
        <label for="inputTheme" class="col-sm-2 col-form-label fw-bold">Contenidos Temáticos</label>
        <div class="col-sm-5">
          <select class="form-select" aria-label="Default select example">
            <option selected>Seleccionar</option>
            <option value="1">GR1 301</option>
            <option value="2">GR2 302</option>
            <option value="3">GR3 303</option>
          </select>
        </div>
      </div>
      <div class="row g-1 align-items-center ">
        <label for="inputTheme" class="col-sm-2 col-form-label fw-bold"> Responsable </label>
        <div class="col-sm-5">
          <select class="form-select" aria-label="Default select example">
            <option selected>Seleccionar</option>
            <option value="1">Maria Caceres</option>
            <option value="2">Lorena Alva</option>
            <option value="3">Alvaro olea</option>
          </select>
        </div>
      </div>
      <div class="row g-1 align-items-center">
        <label for="pStart" class=" col-sm-2 col-form-label fw-bold">Fecha de vencimiento</label>
        <div class="col-sm-5">
          <input type="date" id="pStart" placeholder="Seleccionar" class="form-control">
        </div>
      </div>
      <div class="row g-1 align-items-center">
        <label for="formFileMultiple" class="col-sm-2 col-form-label fw-bold">Subir Template</label>
        <div class="col-sm-5">
          <input class="form-control" type="file" id="formFileMultiple" multiple>
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
/* /* import { getItemsById } from '../firebase.js' */

const docId = window.localStorage.getItem('ID');

/* const themes = async () => {
  return await getItemsById(docId)
    .then((res) => {
      return console.log(res);
    }).catch((err) => err);
}

const bababa = getItemsById(docId)
const router = useRouter()
const projectRequirements = () => {
  router.push('/pmo/projectRequirements')
}
 */
onMounted(console.log(bababa));
</script>

