<template>
  <div class="container">
    <Header />
        <router-view></router-view>

  </div>
</template>
<script>
import Header from "./views/header/header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      provideData: {
        todoList: [],
      },
    };
  },
  created() {
    console.log(this.$store.getters);
  },

  methods: {},
};
</script>
