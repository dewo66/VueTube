import axios from "axios";


export function getUsers() {
  return axios.get(
"https://gist.githubusercontent.com/dewo66/21a9a54192693647f9f614d6df93c785/raw/3ca639e3a0cf6fdd34a89bbe1913b432969ef93a/music"  
)
}
