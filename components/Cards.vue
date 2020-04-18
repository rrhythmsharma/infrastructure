<template>
    <!-- <img class="card-img-top" :src="imgUrl" alt="Card image cap" width="218" height="200"> -->
    <div>
        <div class="card text-center">
            <div class="card-header font-weight-bold">
                Fan
            </div>
            <div class="card-body">
                <b-img v-bind="imgProp" rounded="circle" :src="imgUrl" alt="Circle image"></b-img>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cards",

    data() {
        return {
            imgUrl:  "https://i.picsum.photos/id/41/300/300.jpg",
            imgProp: { width: 100, height: 100, class: 'm-1' }
        }
    }
}
</script>

<style scoped>

.card-img-top{
    margin-top: 10px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    height: 100px !important;
    width: 118px !important;
    border-radius: 50% !important;
}

.list-group-item{
    padding-left: 0px !important;
}

</style>