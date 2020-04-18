<template>
    <div>
        <House-Animation/>     
        <div class="devices-container">
            <b-card-group deck>            
                <Cards/>
                 <Cards/>
                  <Cards/>
                   <Cards/>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import HouseAnimation from '~/components/houseAnimation'
import Cards from "~/components/Cards"


export default {
    layout: 'main-overview',

    components: {
      HouseAnimation,
      Cards
    }
}
</script>


<style scoped>
.devices-container{
    background-color: #f3f7fd !important;
    padding: 20px !important;
}
</style>