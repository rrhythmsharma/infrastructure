<template>
    <div>
      <h3 class="infra-heading mt-3 mb-5"><span>Infrastructure</span></h3>
      <div v-if="$fetchState.pending" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <p v-else-if="$fetchState.error">Error while fetching infrastructure details: {{ $fetchState.error.message }}</p>
      <div v-else>
          <infra-cards
            v-for="infra in infrastructures"
            :key="infra.infrastructure_id"
            :deviceId="infra.infrastructure_id"
            :name="infra.infrastructure_name"
            :type="infra.infrastructure_type"
            :fileSize="infra.infrastructure_file_size"
            :admin="infra.is_admin"
          />
      </div>
    </div>
</template>
<script>

import infraCards from "~/components/infraCards"

export default {
    layout: 'main-overview',

    middleware: ['protected-middleware'],

    components: {
      infraCards
    },

    data () {
      return {
        infrastructures: {}
      }
    },

    async fetch () {
      this.infrastructures = await fetch(`https://test.bettad.xyz/infrastructures`)
                              .then((res) => res.json())
      this.infrastructures = this.infrastructures.response
    }
}
</script>

<style>
.infra-heading {
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #EEE;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  font-size: 1.9rem;
  font-weight: 400;
  font-family:'Helvetica Neue', Arial, sans-serif;
}

.infra-heading span {
  position: relative;
  top: 13px;
  padding: 0 10px;
  background: #FFF;
}
</style>