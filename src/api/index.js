import axios from 'axios';
const fetchData = (url) => axios.get(url);

const cashIn = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in';
const cashOutNatural = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural';
const cashOutLegal = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical';

export {
    cashIn,
    cashOutNatural,
    cashOutLegal
};

export default fetchData;
