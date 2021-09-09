<template>
  <div class="container">
  <Header/>
  <Body/>
  <AxiosGet/>
  </div>
</template>
<script>
import Header from "./components/header/header.vue";
import Body from "./components/body/body.vue"
import AxiosGet from "./components/axios/AxiosGet.vue"
export default {
  
  components: {
    Header,
    Body,
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
