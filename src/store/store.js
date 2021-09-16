import { createStore } from "vuex";

const store = createStore({
  state: {
    activeComponent: "AnaSayfa",
    MusicData: [],
    Mixes:[]
  },
  mutations: {
    addMusicData(state, MusicData) {
      // mutate state
      state.MusicData.push(MusicData);
    },
    addMixesData(state,Mixes){
      state.Mixes.push(Mixes);

    }
  },
});
export default store;
