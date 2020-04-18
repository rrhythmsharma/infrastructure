<template>
    <div>
      <h1 class="heading-infra">This is infra page</h1>
      <Cards/>
    </div>
</template>
<script>

import Cards from "~/components/Cards"

export default {
    layout: 'main-overview',

    middleware: ['protected-middleware'],

    components: {
      Cards
    }
}
</script>

<style>
.heading-infra {
  
}
</style>