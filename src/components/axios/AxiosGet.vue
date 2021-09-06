<template>
  <div>{{ itemList }}</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      itemList: [],
    };
  },
  created() {
    axios
      .get(
        "https://gist.githubusercontent.com/dewo66/21a9a54192693647f9f614d6df93c785/raw/de81b34b164ebbba1a0d400a6dac6e2b4953d75c/music"
      )
      .then((items_response) => {
        this.pushData(items_response);
        // console.log("items_response :>> ", this.itemsList.forEach(element => this.provideData.todoList.push(element)));
      });
  },
  methods() {
        pushData (items_response) {
        this.itemsList = items_response.data;
        }
  },
};
</script>
