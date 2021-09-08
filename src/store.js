import { createStore } from "vuex";


const store = createStore({
    state:{
        activeComponent:"AnaSayfa",
        MusicData:[]

    },
    getters:{
        /* sanatci: state => state.MusicData.filter(i => console.log(i)) */
    }
})

export default store;