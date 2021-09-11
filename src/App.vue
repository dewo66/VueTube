<template>
  <div class="container">
  <Header/>
  <AxiosGet/>
  </div>
</template>
<script>
import Header from "./components/header/header.vue";
import AxiosGet from "./components/axios/AxiosGet.vue"
export default {
  
  components: {
    Header,
    AxiosGet
  },
  data() {
    return {
      provideData: {
        todoList: [
        ],
      },
    };
  },
  created(){
    console.log( this.$store.getters.sanatci)
  },
 
  methods: {
    Musicdata() {
      this.itemList.forEach(element => this.provideData.todoList.push(element))
      console.log(this.provideData)
    }
  },
};
</script>
