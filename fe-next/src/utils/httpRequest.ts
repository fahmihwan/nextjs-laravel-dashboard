import axios from "axios";

export default axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    // credentials: "include",
    // headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    //   credentials: 'include'
});
// export default httpRequest;
