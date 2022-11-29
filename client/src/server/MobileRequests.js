import axios from "axios"
import config from '../config/config.json'


const { BASE_URL } = config
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';


export const newMobileRequest = async (data) => {
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
    formData.append("category", "mobile")
    try {
        const req = await axios.post(`${BASE_URL}/mobile`, formData, {
            Accept: "application/json"
        })
        return req
    } catch (err) {
        console.log(err)
    }
}

export const getAllMobiles = async () => {
    try {
        let req = await axios(`${BASE_URL}/get_mobiles`)
        const { data } = req.data
        return data
    } catch (err) {
        console.log(err)
    }
}


//!  ------------------------------------------------------------

export const deleteMobileRequest = async (id) => {
    try {
        const req = await axios.post(`${BASE_URL}/del_mobiles`, {
            id
        })
        return req
    } catch (err) {
        console.log(err)
    }
}