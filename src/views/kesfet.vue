<template>
<div>
  <section>
    <mixes postTitle="Yeni albümler ve tekliler" />
  </section>
  <section>
    <grid postTitle="Ruh halleri ve türleri" />
  </section>
  <section>
    <backless postTitle="Trend"/>
  </section>

  <section>
    <Sections postTitle="Yeni müzik videoları" />
  </section>


</div>

</template>

<script>
import mixes from "../components/sections/mixes/mixes.vue"
import Sections from '../components/sections/sections.vue'
import grid from "../components/sections/grid.vue"
import backless from "../components/sections/backless.vue"
export default {
  components: {
    mixes,
    Sections,
    grid,
    backless
  }

}
    
</script>

<style>

</style>