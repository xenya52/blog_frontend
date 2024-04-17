import axios from "axios";
export default function AxiosCallRequest() {
    axios.get("http://localhost:8000/")
    .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
}