const search = Vue.createApp({
    data() {
      return {
        search: "",
        itemList: ["elma", "armut", "kiraz", "çilek"],
        //   filteredList: [],
      };
    },
    computed: {
      filteredList() {
        return this.itemList.filter((i) => i.includes(this.search));
      },
    },
  });
  search.mount("#search");
  