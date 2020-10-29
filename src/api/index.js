import axios from 'axios';

export const fetchData = async url => {
	try {
		const result = await axios.get(url)
		return result && result.data
	} catch (err) {
		console.log(err);
	}
};

const cashIn = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in';
const cashOutNatural = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural';
const cashOutJuridical = 'http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical';

export {
	cashIn,
	cashOutNatural,
	cashOutJuridical
};

export default fetchData;
