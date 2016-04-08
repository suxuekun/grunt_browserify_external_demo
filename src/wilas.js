
import {DataAdapter} from './es6/data.es6'
import $ from 'jquery';
import * as ec from 'echarts';
import * as mo from 'moment';
console.log(' in jquery',$);
console.log(' in 2 ecc',ec.default);
console.log(' in 3 moo',mo.default);
var moment = mo.default;
console.log(moment(new Date()).format('YYYY-MM-DD'));
class a{
	constructor(){
		this.name = "a test"
	}
	a(){
		console.log(this.name);
	}
}

var wilas = {
    data:{
    	DataAdapter:DataAdapter,
    },
    a:a
}

module.exports = wilas;