import { createStore } from "vuex";

const store = createStore({
  state: {
    activeComponent: "AnaSayfa",
    MusicData: [],
    Mixes:[],
    activeVideoData:{},
    },
  mutations: {
    addMusicData(state, MusicData) {
      state.MusicData.push(MusicData);
    },
    addMixesData(state,Mixes){
      state.Mixes.push(Mixes);
    },
    addActiveVideoData(state,Mixes){
      state.activeVideoData.push =Mixes;
    }
  },
});
export default store;
