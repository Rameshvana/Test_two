import axios from 'axios';

let Url = 'http://localhost:4000/posts/'

 export function saveData(Url,data){
          return axios.post(Url,data)
}