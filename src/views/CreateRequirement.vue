<template>
  <div class='container align-items-center  row g-0'>
    <div class='Back'>
      <p><button><img height='20' class="rounded-circle" src='../assets/Back.jpg' alt='Logo' /></button>
        Lista de Requerimientos</p>
    </div>
    <form class='row g-30 '>
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
        </div>
        <div class='Referencer'>
          <p><button><img height='20' class="rounded-circle" src='../assets/R.png' alt='Logo' /></button>
            Referenciar</p>
        </div>
      </div>
      <div class="row g-1 align-items-center ">
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
  width: 25%;
  border-radius: 10px;
  border: none;
  margin-top: 3%;
  margin-left: 40%;
  background-color: rgb(219, 83, 106);
  color: white;

}

.Referencer {
  margin-top: -3%;
  margin-left: 60%;
}

.Back {
  color: rgb(219, 83, 106);
  font-size: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>

