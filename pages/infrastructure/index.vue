<template>
    <div>
      <h3 class="infra-heading mt-3 mb-5"><span>Infrastructure</span></h3>
      <infra-cards/>
    </div>
</template>
<script>

import infraCards from "~/components/infraCards"

export default {
    layout: 'main-overview',

    middleware: ['protected-middleware'],

    components: {
      infraCards
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