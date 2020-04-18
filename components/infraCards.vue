<template>
   <div>
        <div class="card infra-card m-4">
            <div class="card-header text-center font-weight-bold">
                {{name}}
            </div>
            <div class="card-body">
                <div class="img-container">
                    <img class="device-img" rounded="circle" :src="imgUrl" alt="Circle image" />
                </div>
                
                <table class="table table-striped mt-3">
                    <tbody>
                        <tr>
                            <th scope="row">Type</th>
                            <td>{{type}}</td>
                        </tr>
                        <tr>
                            <th scope="row">file size</th>
                            <td>{{fileSize}}</td>
                        </tr>
                        <tr>
                            <th scope="row">admin</th>
                            <td>{{admin}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nuxt-link class="text-center" :to="deviceUrl">Go to devices <i class="fas fa-external-link-alt"></i></nuxt-link>
        </div>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
    name: "infraCards",

    props: {
        name: {
            type: String,
            default: "",
        },
        deviceId: {
            type: String,
            default: "",    
        },
        type: {
            type: String,
            default: "",
        },
        fileSize: {
            type: String,
            default: "",
        },
        admin: {
            type: Boolean,
            default: true,
        }
    },

    data() {
        return {
            imgProp: { width: 100, height: 100},
            imgUrl: require('~/assets/train.svg'),
            deviceUrl: "/infrastructure/" + this.deviceId + "/devices"
        }
    },
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