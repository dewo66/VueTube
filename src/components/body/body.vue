<template>
  <component class="body" :is="activeComponent"> </component>
</template>

<script>
import AnaSayfa from "./pageButtons/anaSayfa.vue";
import Kesfet from "./pageButtons/kesfet.vue";
import Kitaplik from "./pageButtons/kitaplik.vue";
import Yukselt from "./pageButtons/yükselt.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AnaSayfa,
    Kesfet,
    Kitaplik,
    Yukselt,
  },

  data() {
    return {
      activeComponent: this.$store.state.activeComponent,
    };
  },
  computed: {
    ...mapGetters({
      activeComponent : "activeComponent",
      MusicData : "MusicData"
      
    })
  },
};
</script>

<style>
</style>