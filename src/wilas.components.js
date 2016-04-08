
import {DataAdapter} from './es6/data.es6'
import $ from 'jquery';
import * as ec from 'echarts';
import * as mo from 'moment';

var moment = mo.default;
console.log(moment(new Date()).format('YYYY-MM-DD'));
class D{
	constructor(){
		this.name = "D test"
	}
	d(){
		console.log(this.name);
	}
}

var components = {
    data:{
    	DataAdapter:DataAdapter,
    },
    D:D
}

module.exports = components;