<template>
  <div class="container">
  <Header/>
  <Body :activeComponent="activeComponent" />
  </div>
</template>
<script>
import axios from "axios";
import Header from "./components/header/header.vue";
import Body from "./components/body/body.vue"
export default {
  
  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem,
    };
  },
  beforeMount() {
    console.log(this.activeComponent)
  },
  components: {
    Header,
    Body
  },
  data() {
    return {
      itemList: [],
      provideData: {
        todoList: [
        ],
      },
    };
  },
  mounted() {
    axios
      .get(
        "https://gist.githubusercontent.com/dewo66/21a9a54192693647f9f614d6df93c785/raw/de81b34b164ebbba1a0d400a6dac6e2b4953d75c/music"
      )
      .then((items_response) => {
        this.itemsList = items_response.data;
        this.Musicdata()
        // console.log("items_response :>> ", this.itemsList.forEach(element => this.provideData.todoList.push(element)));
      });
  },
  methods: {
    Musicdata() {
      this.itemsList.forEach(element => this.provideData.todoList.push(element))
    },
    deleteItem(todoItem) {
      this.provideData.todoList = this.provideData.todoList.filter(
        (t) => t !== todoItem
      );
    }
  },
};
</script>
