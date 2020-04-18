<template>
    <div>
        <div class="card m-4">
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
                            <th scope="row">Power</th>
                            <td>{{power}}</td>
                        </tr>
                        <tr>
                            <th scope="row">Value</th>
                            <td>{{value}}</td>
                        </tr>
                        <tr>
                            <th scope="row">State</th>
                            <td v-if="state === true" class="text-info">{{state}}</td>
                            <td v-else class="text-danger">{{state}}</td>
                        </tr>
                        <tr>
                            <th scope="row">Topic</th>
                            <td>{{topic}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default { 
    name: "deviceCards",

    props: {
        deviceId: {
            type: String,
            default: "",    
        },
        name: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "",
        },
        power: {
            type: Number,
        },
        value: {
            type: String,
            default: "",
        },
        state: {
            type: Boolean,
            default: "",
        },
        topic: {
            type: String,
            default: "",
        }
    },

    mounted() {
        if(this.name === "Fan") {
            this.imgUrl = this.fanUrl
        }else if(this.name === "Socket") {
            this.imgUrl = this.socketUrl
        }else if(this.name === "Tubelight") {
            this.imgUrl = this.tubelightUrl
        }else if(this.name === "Air Conditioner") {
            this.imgUrl = this.airConditionerUrl
        }else {
            this.imgUrl = this.fanUrl
        }
    },

    data() {
        return {
            imgProp: { width: 100, height: 100},
            imgUrl: "",
            fanUrl: require('../assets/fan.svg'),
            tubelightUrl: require('../assets/Tubelight.svg'),
            socketUrl: require('../assets/Socket.svg'),
            airConditionerUrl: require('../assets/AirConditioner.svg'),
        }
    },
}
</script>

<style scoped>

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