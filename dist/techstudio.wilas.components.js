(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.techstudio||(g.techstudio = {}));g=(g.wilas||(g.wilas = {}));g.components = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var DataAdapter = exports.DataAdapter = function () {
	function DataAdapter(src) {
		babelHelpers.classCallCheck(this, DataAdapter);

		this.setSrc(src);
	}

	babelHelpers.createClass(DataAdapter, [{
		key: "adapter",
		value: function adapter(src) {
			return src;
		}
	}, {
		key: "setSrc",
		value: function setSrc(src) {
			this.src = src;
		}
	}, {
		key: "getData",
		value: function getData() {
			if (this.data == null) {
				if (this.src != null) {
					this.data = this.adapter(this.src);
				}
			}
			return this.data;
		}
	}]);
	return DataAdapter;
}();

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var _data = require('./es6/data.es6');

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

var _echarts = (typeof window !== "undefined" ? window['echarts'] : typeof global !== "undefined" ? global['echarts'] : null);

var ec = babelHelpers.interopRequireWildcard(_echarts);

var _moment = (typeof window !== "undefined" ? window['moment'] : typeof global !== "undefined" ? global['moment'] : null);

var mo = babelHelpers.interopRequireWildcard(_moment);


var moment = mo.default;
console.log(moment(new Date()).format('YYYY-MM-DD'));

var D = function () {
	function D() {
		babelHelpers.classCallCheck(this, D);

		this.name = "D test";
	}

	babelHelpers.createClass(D, [{
		key: 'd',
		value: function d() {
			console.log(this.name);
		}
	}]);
	return D;
}();

var components = {
	data: {
		DataAdapter: _data.DataAdapter
	},
	D: D
};

module.exports = components;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./es6/data.es6":1}]},{},[2])(2)
});