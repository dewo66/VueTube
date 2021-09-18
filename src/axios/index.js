import axios from "axios";


export function getUsers() {
  return axios.get(
"https://gist.githubusercontent.com/dewo66/21a9a54192693647f9f614d6df93c785/raw/4d90924cca5cb15fc557e1ce71adf0b15f88052a/music"  
)
}
export function getmixes() {
  return axios.get(
"https://gist.githubusercontent.com/dewo66/4b2a5d451225fcdf1a0f31a8de866118/raw/21813d90b669dfe797c6e2d06149088817b0f04c/mixes"  
)
}
