<template>
   <div>
        <div class="card infra-card">
            <div class="card-header text-center font-weight-bold">
                Infrastructure 1
            </div>
            <div class="card-body">
                <div class="img-container">
                    <img class="device-img" rounded="circle" :src="imgUrl" alt="Circle image" />
                </div>
                
                <table class="table table-striped mt-3">
                    <tbody>
                        <tr>
                            <th scope="row">Type</th>
                            <td>Home</td>
                        </tr>
                        <tr>
                            <th scope="row">file size</th>
                            <td>10MB</td>
                        </tr>
                        <tr>
                            <th scope="row">admin</th>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nuxt-link class="text-center" to="/infrastructure/1/devices">Go to devices <i class="fas fa-external-link-alt"></i></nuxt-link>
        </div>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
    name: "infraCards",

    data() {
        return {
            imgProp: { width: 100, height: 100},
            imgUrl: require('~/assets/fan.svg')
        }
    }
}
</script>

<style>

.infra-card {
    max-width: 250px !important;
}

.device-img {
    width: 100px !important;
    height: 100px !important;
}

.img-container{
    text-align:center
}

.card-img-top {
    margin-top: 10px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    height: 100px !important;
    /* width: 118px !important; */
    border-radius: 50% !important;
}

.list-group-item {
    padding-left: 0px !important;
}

</style>