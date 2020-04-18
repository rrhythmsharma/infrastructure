<template>
    <div>
        <House-Animation/>
        <div class="devices-container">
            <h4 class="device-heading mt-3 ml-10">Devices</h4>
            <div v-if="$fetchState.pending" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
                </div>
            </div>
            <p v-else-if="$fetchState.error">Error while fetching device details: {{ $fetchState.error.message }}</p>
            <div v-else>
                <div v-for="(device, index) in devices" :key="index">
                    <div v-for="(device_group, idx) in device" :key="idx">
                        <h4 class="device-heading-sm mt-3 ml-10">{{device_group.device_room}}</h4>
                        <div class="card-deck center">
                            <device-cards
                                v-for="(device_sensor, i) in device_group.device_sensors"
                                :key="i"  
                                :deviceID="device_sensor.device_id"
                                :name="device_sensor.device_name"
                                :type="device_sensor.device_type"
                                :power="device_sensor.device_power"
                                :value="device_sensor.device_value"
                                :state="device_sensor.device_state"
                                :topic="device_sensor.device_topic"
                            />
                        </div>
                    </div>
                </div>
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
    },

    data () {
      return {
        devices: {},
        interval: null
      }
    },

    created() {
        this.interval = setInterval(async () => {
            this.devices = await fetch(`https://test.bettad.xyz/infrastructures/1/devices`)
                                .then((res) => res.json())
            this.devices = this.devices.response
        }, 30000);
    },

    async fetch() {
        this.devices = await fetch(`https://test.bettad.xyz/infrastructures/1/devices`)
                            .then((res) => res.json())
        this.devices = this.devices.response
    },

    destroyed() {
        clearTimeout(this.interval);
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

.device-heading-sm{
  position: relative;
  margin-bottom: 30px;
  color: #474747;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  font-size: 1rem;
  font-weight: 400;
  font-family:'Helvetica Neue', Arial, sans-serif;
}

.device-heading span {
  position: relative;
  top: 13px;
  padding: 0 10px;
}

</style>