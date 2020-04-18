<template>
    <div>
        <div class="card">
            <div class="card-header text-center font-weight-bold">
                Fan
            </div>
            <div class="card-body">
                <div class="img-container">
                    <img class="device-img" rounded="circle" :src="imgUrl" alt="Circle image" />
                </div>
                
                <table class="table table-striped mt-3">
                    <tbody>
                        <tr>
                            <th scope="row">Type</th>
                            <td>FAN</td>
                        </tr>
                        <tr>
                            <th scope="row">Power</th>
                            <td>100.00</td>
                        </tr>
                        <tr>
                            <th scope="row">Value</th>
                            <td>40</td>
                        </tr>
                        <tr>
                            <th scope="row">State</th>
                            <td>false</td>
                        </tr>
                        <tr>
                            <th scope="row">Topic</th>
                            <td>device/excited/1</td>
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

    data() {
        return {
            imgProp: { width: 100, height: 100},
            imgUrl: require('~/assets/fan.svg')
        }
    }
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