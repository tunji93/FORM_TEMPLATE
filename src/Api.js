import axios from "axios"

const request = axios.create({
    baseUrl: "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
})


export default request