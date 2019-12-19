
import axios from 'axios'


export default {
    getRate,
}

async function getRate() {
    const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1&cors=true')
    return rate
}