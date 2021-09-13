import axios from "axios";


export function getUsers() {
  return axios.get(
    "https://gist.githubusercontent.com/dewo66/21a9a54192693647f9f614d6df93c785/raw/de81b34b164ebbba1a0d400a6dac6e2b4953d75c/music"
  )
}
