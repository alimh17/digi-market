import axios from "axios"
import config from '../config/config.json'


const { BASE_URL } = config
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';


export const newSmartWatchRequest = async (data) => {
    console.log(data);
    const formData = new FormData()
    const keys = Object.keys(data)
    const values = Object.values(data)
    keys.forEach((item, index) => {
        formData.append(item, values[index])
    });
    for (const keys of data.image) {
        formData.append("image", keys)
    }
    formData.append("mainImage", data.mainImage[0])
    formData.append("category", "smartwatch")
    try {
        const req = await axios.post(`${BASE_URL}/smart_watch`, formData, {
            Accept: "application/json"
        })
        return req
    } catch (err) {
        console.log(err)
    }
}

export const getAllSmartWatch = async () => {
    try {
        let res = await axios(`${BASE_URL}/get_smart_wath`)
        const { data } = res.data
        return data[0]
    } catch (err) {
        console.log(err)
    }
}
export const getAllSmartWatchs = async () => {
    try {
        let res = await axios(`${BASE_URL}/get_smart_wath`)
        const { data } = res.data
        return data
    } catch (err) {
        console.log(err)
    }
}




//!  ------------------------------------------------------------

export const deleteSmartWatchRequest = async (id) => {
    try {
        const req = await axios.post(`${BASE_URL}/del_smart_watch`, {
            id
        })
        return req
    } catch (err) {
        console.log(err)
    }
}