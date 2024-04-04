import axios from "axios";
export default function AxiosCallRequest() {
    axios.post("http://localhost:8000/")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}