import axios from 'axios'

export const inquiryList = () => {
    return {
        type: 'INQUIRYLIST',
        payload: axios.get('http://localhost:3000/stock/list')
    }
}