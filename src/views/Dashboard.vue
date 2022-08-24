<template>
<div class="container">
    <div class="row mt-5">
        <section class="col-sm float-left mr-10">
        <span class="fw-bold float-left">Indicaciones clave</span>
        <div class="mt-4">
            <label class="pr-5">Total de requerimientos:     </label>
            <button class="btn btn-secondary btn-lg ml-5" disabled>3</button>
        </div>
        
        <table class="container mt-5">
            <tr class="flex-fill">
                <td class="bg-danger"><button class="btn btn-secondary btn-lg" disabled>1</button></td>
                <td class="bg-warning"><button class="btn btn-secondary btn-lg" disabled>1</button></td>
                <td class="bg-success"><button class="btn btn-secondary btn-lg" disabled>1</button></td>
            </tr>

            <tr>
                <td>Vencido</td>
                <td>En proceso</td>
                <td>Comprobado</td>
            </tr>
        </table>
        </section>

        <form class="col-sm d-flex flex-column w-50 px-5">
            <span class="fw-bold">Filtrar por</span>
            <div class="row g-3 align-items-center mt-3">
                <div class="col-auto w-25">
                    <label for="pProyect">Proyecto</label>
                </div>
                <div class="col-auto w-50">
                    <select class="form-select" aria-label=".form-select-sm example">
                        <option selected >Seleccionar</option>
                        <option value="1">Reporte 22</option>
                        <option value="2">Reporte 21</option>
                        <option value="3">Reporte 20</option>
                    </select>
                </div>
            </div>
            <div class="row g-3 align-items-center mt-3">
                <div class="col-auto w-25">
                    <label for="pPilar">Pilar</label>
                </div>
                <div class="col-auto w-50">
                    <select class="form-select" aria-label=".form-select-sm example">
                        <option selected>Seleccionar</option>
                        <option value="1">Ambiental</option>
                        <option value="2">Social</option>
                        <option value="3">Gobierno</option>
                    </select>
                </div>
            </div>
            <div class="row g-3 align-items-center mt-3">
                <div class="col-auto w-25">
                    <label for="pResponsable">Responsable</label>
                </div>
                <div class="col-auto w-50">
                    <select class="form-select" aria-label=".form-select-sm example">
                        <option selected>Seleccionar</option>
                        <option value="1">Maria Caceres</option>
                        <option value="2">Lorena Alva</option>
                        <option value="3">Alvaro Olea</option>
                    </select>
                </div>
            </div>
        </form>
    </div>

    <div class="row mt-5">
        <div class="d-flex justify-content-center">
            <button type="submit" @click="" class="btn btn-danger">Ver todos los proyectos</button>
        </div>
    </div>
</div>
</template>