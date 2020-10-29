import fs from 'fs';
import path from 'path';
import axios from 'axios';
import getCommission from './utils';
import fetchData, { cashIn, cashOutJuridical, cashOutNatural } from './api';
import jsonData from './mockData/input.json';

let useData = jsonData;

global.__dirname = path.resolve('./');
const args = process.argv.slice(2);
const fileName = args && args[0];
const filePath = global.__dirname + '\\src\\' + fileName;

if (fileName && filePath) {
	const newFilePath = filePath.replace(/\\/g, '/');
	const contents = fs.readFileSync(newFilePath, 'utf8');

	useData = JSON.parse(contents);
}

class App {
	
	async loadConfig () {
		let config = {}
		const requestObjects = {
			cashIn, 
			cashOutJuridical, 
			cashOutNatural
		};
		const req = Object.values(requestObjects).map((value) => fetchData(value));
		const result = await axios.all(req);
		
		result.forEach((val, i) => {
			config = {
				...config,
				[Object.keys(requestObjects)[i]]: val
			}
		})
		return config
	}
	
	async init() {
		const config = await this.loadConfig();
		const commission = getCommission(useData, config);
        console.log(commission.join('\r\n'));
	}
}

export default App;
