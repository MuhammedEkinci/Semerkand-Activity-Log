import axios from "axios";

export default {
    saveActivity: function(newActivity) {
        return axios({
            method: "post",
            url:"/api/users/activities",
            data: newActivity
        })
    },
    getActivities: function() {
        return axios.get("/api/users/activities");
    }
}