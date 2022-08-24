<template>
    <div class="row g-3 align-items-center mt-1 w-50 p-3">
        <div class="col-auto">
            <label class="col-form-label fw-bold">Reporte</label>
        </div>
        <div class="col-auto">
            <select class='form-select' name="project">
                <option value="Reporte 20">Reporte 20</option>
                <option value="Reporte 21">Reporte 21</option>
                <option value="Reporte 22">Reporte 22</option>
            </select>
        </div>
    </div>

    <div class="container mt-3">
        <div class="table-responsive table-bordered">
            <table class="table table-responsive align-middle ">
                <thead class="align-middle">
                    <tr class="bg-light text-center">
                        <th scope="col" width="15%">Pilar</th>
                        <th scope="col" width="10%">Tema</th>
                        <th scope="col" width="15%">Requerimiento</th>
                        <th scope="col" width="10%">Dato</th>
                        <th scope="col" width="10%">¿Se mide?</th>
                        <th scope="col" width="10%">¿Se tiene soporte?</th>
                        <th scope="col" width="15%">¿Se tiene evidencia de integridad?</th>
                        <th scope="col" width="15%">Calificación</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr>
                        <td>Ambiental</td>
                        <td>Energía</td>
                        <td>Consumo de energía</td>
                        <td>60 kWh</td>
                        <td>Si</td>
                        <td>Si</td>
                        <td>Si</td>
                        <td><div class="border border-success bg-success">10</div></td>
                    </tr>

                    <tr>
                        <td> Ambiental</td>
                        <td>Agua</td>
                        <td>Consumo de agua</td>
                        <td>10L</td>
                        <td>Si</td>
                        <td>No</td>
                        <td>Si</td>
                        <td><div class="border border-success bg-success">6</div></td>
                    </tr>
                    <tr>
                        <td>Social</td>
                        <td>Empleo</td>
                        <td>Nivel de empleabilidad</td>
                        <td>40 %</td>
                        <td>Si</td>
                        <td>No</td>
                        <td>Si</td>
                        <td><div class="border border-success bg-success">6</div></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>