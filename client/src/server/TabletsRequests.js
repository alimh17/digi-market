import axios from "axios"
import config from '../config/config.json'


const { BASE_URL } = config
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';


export const newTabletRequest = async (data) => {
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
    formData.append("category", "tablet")
    try {
        const req = await axios.post(`${BASE_URL}/tablets`, formData, {
            Accept: "application/json"
        })
        return req
    } catch (err) {
        console.log(err)
    }
}

export const getAllTablets = async () => {
    try {
        let req = await axios(`${BASE_URL}/get_tablets`)
        const { data } = req.data
        return data
    } catch (err) {
        console.log(err)
    }
}


//!  ------------------------------------------------------------

export const deleteTabletRequest = async (id) => {
    try {
        const req = await axios.post(`${BASE_URL}/del_tablets`, {
            id
        })
        return req
    } catch (err) {
        console.log(err)
    }
}