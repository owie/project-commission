import fs from 'fs';
import path from 'path';
import axios from 'axios';
import getCommission, { getKey } from './utils';
import fetchData, { cashIn, cashOutLegal, cashOutNatural} from './api';
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

// fs.access(filePath, fs.F_OK, (err) => {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}

// 	//file exists
// 	const newFilePath = filePath.replace(/\\/g, '/');
// 	const contents = fs.readFileSync(newFilePath, 'utf8');
	
// 	useData = JSON.parse(contents);
// })


class App {
	constructor() {
		this.config = {}
	}
	
	async init() {
		const requestObjects = {
			cashIn, 
			cashOutLegal, 
			cashOutNatural
		};

		const request = Object.values(requestObjects).map(value => fetchData(value));

		await axios.all(request)
			.then((res) => {
				Object.keys(requestObjects).forEach((key, index) => {
					this.config = {
						...this.config,
						[getKey(key)]: res && res[index] && res[index].data
					}
				});
				
				getCommission(useData, this.config);
			})
			.catch(e => {
				console.log(e, 'error');
			}); 
	}
}

export default App;
