<script setup>
import { addOneReq, referencia, referenciaReq, updateReq } from '../firebase'
import { ref, onMounted } from 'vue';
import { getDoc } from '@firebase/firestore'
import { useRouter } from 'vue-router'

const router = useRouter()
let detailReq = ref('')
let dateReq = ref('')
let evidenceofintegrity = ref('')
let evidenceofsuport =ref('')

const handleSubmit = (e) =>{
    const objt = {
        detalle: detailReq.value,
        dato: dateReq.value,
        evidenciaInt: evidenceofintegrity.value,
        evidenciaSup: evidenceofsuport.value,
        dateEntry: new Date().toLocaleString()
    }
    addOneReq(objt)
    .then((res) => {
        console.log(res)
        e.target.reset()
        updateReq(window.localStorage.getItem('reqID'), {status: "Completado", newDate: new Date().toLocaleString()})
        router.push('/user')
    })
}

const docRef = referencia(window.localStorage.getItem('ID'))
const reqRef = referenciaReq(window.localStorage.getItem('reqID'))
const project = ref('')
const req = ref('')
const getData = async () => {
    try {
        const myProject = await getDoc(docRef)
        project.value = myProject.data()
        console.log('name', project.value)
        const myReq = await getDoc(reqRef)
        req.value = myReq.data()
        console.log('req', req.value)
    } catch (err) {
        console.log(err)
        console.log(err.stack)
        console.log(err.message)
    }
}

onMounted(getData)

</script>
<template>
    <ul class="list-group list-group-horizontal mt-3">
        <li class="list-group-item  flex-fill bg-light">
            <p class="fw-bold">Nombre del proyecto</p>
            <p>{{project.name}}</p>
        </li>
        <li class="list-group-item  flex-fill bg-light">
            <p class="fw-bold">Requerimiento</p>
            <p>{{req.requirement}}</p>
        </li>
        <li class="list-group-item  flex-fill bg-light">
            <p class="fw-bold">Descripción del Requerimiento</p>
            <p>{{req.reqDescription}}</p>
        </li>
        <li class="list-group-item  flex-fill bg-light">
            <p class="fw-bold">Fecha de creación</p>
            <p>{{req.date}}</p>
        </li>
        <li class="list-group-item  flex-fill bg-light">
            <p class="fw-bold">Fecha de Vencimiento</p>
            <p>{{project.end}}</p>
        </li>
        <li class="list-group-item  flex-fill bg-light">
            <p class="fw-bold">Estatus</p>
            <p>{{req.status}}</p>
        </li>
    </ul>
    <form class="p-4 mt-2 d-flex flex-column gap-4" @submit.prevent="handleSubmit" >
        <div class="row g-3 align-items-center">
            <div class="col-auto w-25">
                <label for="pName" class="col-form-label fw-bold">Detalle del contenido</label>
            </div>
            <div class="col-auto" style="width: 40%;">
                <input v-model="detailReq" type="text" id="pName" placeholder="Escribir" class="form-control" required>
            </div>
        </div>
        <div class="row g-3 align-items-center">
            <div class="col-auto w-25">
                <label for="pName" class="col-form-label fw-bold">Dato</label>
            </div>
            <div class="col-auto" style="width: 40%;">
                <input v-model="dateReq" type="text" id="pName" placeholder="Escribir" class="form-control" required>
            </div>
        </div>
        <div class="d-flex flex-column w-100 ">
            <div class="row">
                <div class="col-auto w-25">
                    <label for="pName" class="fw-bold">Evidencia de integridad</label>
                </div>
                <div class="col-auto" style="width: 40%;">
                    <input v-model="evidenceofintegrity" type="text" id="pName" placeholder="Escribir" class="form-control" required>
                </div>
            </div>
            <div class="row" style="width: 25%; margin-left: 25%;">
                <label for="formFileMultiple" class="col-form-label"></label>
                <div class="">
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column w-100 ">
            <div class="row">
                <div class="col-auto w-25">
                    <label for="pName" class="fw-bold">Evidencia de soporte</label>
                </div>
                <div class="col-auto" style="width: 40%;">
                    <input v-model="evidenceofsuport" type="text" id="pName" placeholder="Escribir" class="form-control" required>
                </div>
            </div>
            <div class="row" style="width: 25%; margin-left: 25%;">
                <label for="formFileMultiple" class="col-form-label"></label>
                <div class="">
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                </div>
            </div>
            
        </div>
        <div class="d-flex justify-centerd justify-content-center gap-5 mt-4 mb-3 col-12">
        <button type="submit" class="btn bttn size" style="width: 20%;">Enviar</button>
        <!-- <button type="button" class="btn bttn size" style="width: 20%;">Editar</button>
        <button type="button" class="btn bttn size" style="width: 20%;">Guardar Borrador</button> -->
    </div>
    </form>
    
 <!--    <div class="mb-3 d-flex send">
        <div class="d-flex flex-column m-2">
            <label class="form-label">Evidencia de soporte</label>
            <button type="submit" class="btn bttn">Iniciar</button>
        </div>
        <input type="text" class="col-7">
    </div> -->
    <br>
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

