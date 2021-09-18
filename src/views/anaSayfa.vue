<template>
  <div class="AnaSayfa">
    
<div class="body">
      <section>
        <sections postTitle="Canlı Performanslar" />
      </section>
      <section>
        <sections postTitle="Aksam Muzikleriniz" />
      </section>
      <section>
        <sections postTitle="En Sevdikleriniz" />
      </section>
      <section>
        <sections postTitle="Önerilen Music" />
      </section>
      <section>
        <sections postTitle="Gecenin sesi" />
      </section>
      <section>
        <sections postTitle="Şarkılarla türkülerle Türkiye" />
      </section>
      <section>
        <mixes postTitle="Size özel mix'ler: ruh hali" />
      </section>

          <section>
        <mixes postTitle="Sizin için derlenenler" />
      </section>
       <section>
        <mixes postTitle="En yeni müzik" />
      </section>
      <section>
        <mixes postTitle="Enerji deposu" />
      </section>


    </div>


  </div>
</template>

<script>
import mixes from "../components/sections/mixes/mixes.vue"
import Sections from '../components/sections/sections.vue'

export default {
  components: {
    mixes,
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