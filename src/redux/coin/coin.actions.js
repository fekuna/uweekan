import axios from 'axios';
import jwtDecode from 'jwt-decode';
import coinTypes from './coin.types';

export const coinTopUp = (nominal) => (dispatch) => {
	localStorage.getItem('userId');
	axios
		.get(`http://127.0.0.1:8000/api/customer/`)
		.then((res) => {
            const username = res.data.data.username;
            const dataTopUp ={
                username_destination: username,
                topup_balance: nominal
            }
            console.log(dataTopUp, 'dataTopUp');
            return axios.post(`http://127.0.0.1:8000/api/coin/topup`, dataTopUp)
        })
        .then(res => {
            console.log('topup nich', res);
        })
		.catch((err) => { console.log(err);});
};
