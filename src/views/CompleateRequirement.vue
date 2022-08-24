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
            <p class="fw-bold">Descripcion del Requerimiento</p>
            <p></p>
        </li>
        <li class="list-group-item  flex-fill">
            <p class="fw-bold">Fecha de creacion</p>
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
            <div class="row g-1 align-items-center  mt-1">
                <label for="formFileMultiple" class="col-sm-2 col-form-label fw-bold"></label>
                <div class="col-sm-10">
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                </div>
            </div>
        </div>
        <div class="input-group mb-3">
            <label class="form-label col-4">Evidencia de soporte</label>
            <input type="text" class="col-7">
            <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckChecked">
        <div class="row g-1 align-items-center  mt-1">
                <label for="formFileMultiple" class="col-sm-2 col-form-label fw-bold"></label>
                <div class="col-sm-10">
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                </div>
            </div>
        </div>
    </form>
    <div class="d-flex justify-centerd justify-content-evenly mt-4 mb-3 col-12">
        <button type="submit" class="btn bttn size">Enviar</button>
        <button type="submit" class="btn bttn size">Editar</button>
        <button type="submit" class="btn bttn size">Guardar Borrador</button>
    </div>
    <div class="mb-3 d-flex send">
        <div class="d-flex flex-column m-2">
            <label class="form-label">Evidencia de soporte</label>
            <button type="submit" class="btn bttn">Iniciar</button>
        </div>
        <input type="text" class="col-7">
    </div>
</template>

<style>
.bttn {
  background-color: rgb(219, 83, 106);
  color: white;
  border-radius: 10px;
}
.size {
    width: 25%;
}
.send {
    border: black 1px solid;
    padding: 20px;
    
  border-radius: 10px;
}
</style>

