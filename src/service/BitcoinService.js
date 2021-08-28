import axios from "axios";

class BitcoinService {

    static getDateByRange(start, end) {
        return axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)// Add proxy to package.json
        // return axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
    }
}

export default BitcoinService
