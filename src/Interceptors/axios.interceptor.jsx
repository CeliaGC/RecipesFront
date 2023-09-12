
// import axios from "axios";

// const user = JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : '.';

// const token = user.item1;
// const userName = user.item4;



// export const AxiosInterceptor = () => {

//     axios.interceptors.request.use((config) => {
//         config.headers.Authorization = `Bearer ${userName}:${token}`;
//         return config;
//     });
// }

import axios from "axios";

export const AxiosInterceptor = (instance) => {
    instance.interceptors.request.use((config) => {
        const user = JSON.parse(localStorage.getItem('userData')) || {};
        const token = user.item1;
        const userName = user.item4;

        config.headers.Authorization = `Bearer ${userName}:${token}`;
        return config;
    });
}


