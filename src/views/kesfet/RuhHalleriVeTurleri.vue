<template>
  <div class="AnaSayfa">
    <div style="font-size:3vw; margin-top:5vw; margin-left:5vw;"> Ruh Halleri ve Türleri </div>
    
    <div class="body">
      <section>
        <grid postTitle="Size özel" :datas=sizeOzel />
      </section>
      
      <section>
        <grid postTitle="Ruh halleri ve anlar" :datas=Ruhhalleriveanlar  />
      </section>
      
      <section>
        <grid postTitle="Türler" :datas=Türler />
      </section>
    </div>


  </div>
</template>

<script>
import grid from '../../components/sections/grid.vue'

export default {
  components: {
    grid,
  },

  data() {
    return {
        sizeOzel:[
"Rock ve Metal",
"Dizi ve Film Müzikleri",
"2010'lar",
"Rahatlama",
"Indie ve Alternatif",
"Mevsimler",
"Pop",
"Parti",
        ],
Ruhhalleriveanlar:[
"Indie ve Alternatif",
"Mevsimler",
"Pop",
"Parti",
"1990'lar",
"Hip-Hop",
"Arabesk",
"2000'ler",
"Spor",
"Enerji",
"Türkü ve Geleneksel",
"Dans ve Elektronik",
"1970'ler",
"Klasik",
"1980'ler",
"Aile",
"Latin",
],
Türler:[
"Rock ve Metal",
"Dizi ve Film Müzikleri",
"1990'lar",
"Hip-Hop",
"Arabesk",
"2000'ler",
"Spor",
"Enerji",
"Türkü ve Geleneksel",
"Dans ve Elektronik",
"1970'ler",
"Klasik",
"1980'ler",
"Aile",
"Latin",
]



        
    };
  },
}
</script>

<style>



</style>