import axios from 'axios'
import config from '../config/config.json'

axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

export const getAllBanners = async () => {

    try {
        const res = await axios(`${config.BASE_URL}/all_banners`)
        const { data } = res.data
        return data

    } catch (err) {
        console.log(err)
    }
}

export const sendBanner = async (data) => {
    try {
        const req = await axios.post(`${config.BASE_URL}/banner`, data)
        return req
    } catch (err) {
        console.log(err)
    }
}

export const delBannersRequest = async (data) => {
    try {
        const req = await axios.post(`${config.BASE_URL}/del_banners`, {
            data,
        })
        return req
    } catch (err) {
        console.log(err)
    }
}


export const sendMidBanner = async (data) => {
    try {
        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("banner", data)
        const req = await axios.post(`${config.BASE_URL}/mid_banner`, formData
        )

        return req.data.data
    } catch (error) {
        console.log(error)
    }
}

export const getMiddBanner = async () => {
    try {
        const req = await axios(`${config.BASE_URL}/mid_banner`)
        const { data } = req.data
        return data
    } catch (err) {
        console.log(err)
    }
}