<template>
  <div class="AnaSayfa">
    
<div class="body">
      <section>
        <onerilensection/>
      </section>
      <section>
        <aksamMuzikleriniz/>
      </section>
      <section>
        <sevdikleriniz/>
      </section>
     <section>
        <canliPerformanslar/>
      </section>
      <section>
        <mixes/>
      </section>
    </div>


  </div>
</template>

<script>

import onerilensection from "../components/sections/onerilenMusic/onerilenSection.vue"
import aksamMuzikleriniz from "../components/sections/aksamMuzikleriniz/aksamMuzikleriniz.vue"
import sevdikleriniz from "../components/sections/enSevdikleriniz/sevdikleriniz.vue"
import canliPerformanslar from "../components/sections/canliPerformanslar/canliPerformanslar.vue"
import mixes from "../components/sections/mixes/mixes.vue"

export default {
  components: {

onerilensection,
aksamMuzikleriniz,
sevdikleriniz,
canliPerformanslar,
mixes,
  },

  data() {
    return {
    };
  },
}
</script>

<style>



</style>