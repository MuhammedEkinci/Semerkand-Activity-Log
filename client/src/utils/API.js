import axios from "axios";

//save user into database for register
export const registerUser = function (newUser) {
    return axios.post("/api/users/register", newUser);
}