<template>
    <div>
        <House-Animation/>
        <div class="devices-container">
            <h4 class="device-heading mt-3 ml-10">Devices</h4>
            <div class="card-deck center">
                <device-cards/>
                <device-cards/>
                <device-cards/>    
                <device-cards/>
            </div>
        </div>
    </div>
</template>

<script>
import HouseAnimation from '~/components/houseAnimation'
import deviceCards from "~/components/deviceCards"


export default {
    layout: 'main-overview',

    components: {
      HouseAnimation,
      deviceCards
    }
}
</script>


<style scoped>

.devices-container{
    background-color: #f3f7fd !important;
    padding: 20px !important;
}

.device-heading {
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #c7c7c7;
  color: #474747;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  font-size: 2rem;
  font-weight: 400;
  font-family:'Helvetica Neue', Arial, sans-serif;
}

.device-heading span {
  position: relative;
  top: 13px;
  padding: 0 10px;
}

</style>