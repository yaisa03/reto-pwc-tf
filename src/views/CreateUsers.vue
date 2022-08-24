<template>
<div class='container'>
<form class='row mt-40 '>
<div class="row g-2  align-items-center ">
        <label for="inputRequiment" class="col-sm-2 col-form-label fw-bold">Nombre</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" id="inputext" placeholder="Escribir">
        </div>
      </div>
      <div class="row g-2  align-items-center ">
        <label for="inputRequiment" class="col-sm-2 col-form-label fw-bold">Correo</label>
        <div class="col-sm-5">
           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe">
        </div>
      </div>
      <div class="row g-2  align-items-center ">
        <label for="inputRequiment" class="col-sm-2 col-form-label fw-bold">Cargo</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" id="inputext" placeholder="Escribe">
        </div>
      </div>
      <div class="row g-2  align-items-center ">
        <label for="inputRequiment" class="col-sm-2 col-form-label fw-bold">Compañia</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" id="inputext" placeholder="Escribir">
        </div>
      </div>
</form>
<button type="submit" class="Button">Agregar Usuario</button>
</div>
</template>
<style>
.container{
 margin-top: 33px;
 margin-left: 58px;
}
.Button {
  height: 42px;
    width: 26%;
    border-radius: 10px;
    border: none;
    margin-top: 10%;
    margin-left: 31%;
    background-color: rgb(219, 83, 106);
    color: white;
    }
</style>