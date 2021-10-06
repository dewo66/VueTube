<template>
  <div class="AnaSayfa">
    
<div class="body">
      <section>
        <sections postTitle="Yeni Çıkanlar" />
      </section>

      
      <section>
        <sections postTitle="Albüm ve teklifler" />
      </section>
      <section>

        <sections postTitle="Muzik videoları" />
      </section>

    </div>


  </div>
</template>

<script>
import Sections from '../../components/sections/sections.vue'

export default {
  components: {
    Sections,
  },

  data() {
    return {
    };
  },
}
</script>

<style>



</style>