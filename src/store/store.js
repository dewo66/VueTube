import { createStore } from "vuex";

const store = createStore({
  state: {
    activeComponent: "AnaSayfa",
    MusicData: [],
  },
  mutations: {
    addMusicData(state, MusicData) {
      // mutate state
      state.MusicData.push(MusicData);
    },
  },
});

export default store;
