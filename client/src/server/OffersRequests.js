import axios from 'axios'
import config from '../config/config.json'

const { BASE_URL } = config
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';


export const sendOfferProduct = async (data, product) => {

    try {
        await axios.post(`${BASE_URL}/offers`, {
            data: { allData: data, singleData: product }
        })
    } catch (err) {
        console.log(err)
    }

}


export const getOfferProduct = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/get_offers`)
        return res.data
    } catch (err) {
        console.log(err)
    }
}


export const delOfferProduct = async (data, product) => {
    try {
        await axios.post(`${BASE_URL}/del_offers`, {
            data: { allProduct: data, singleProduct: product }
        })
    } catch (err) {
        console.log(err)
    }
}