
var paths = {
    src:'src/',
    es6:'src/es6',
    es5:'src/es5',
    dist:'dist/',
    build:'build/'
}
var mainJS = 'wilas.js';
var componentsJS = 'wilas.components.js';
var globalExport = 'techstudio.wilas';
var globalExportComponents = 'techstudio.wilas.components';
var externals = ['jquery','echarts','moment'];

var entries = {
	main:mainJS,
	components:componentsJS,
};
var src={},dist={},build={};
var sets={};
sets[paths.src] = src;
sets[paths.dist] = dist;
sets[paths.build] = build;
Object.keys(sets).forEach(function(setName,index){
	Object.keys(entries).forEach(function(name,index){
		var set = sets[setName];
		var value = setName + entries[name];
		set[name] = value;
	});
});
var config = {
	paths:paths,
	src:src,
	dist:dist,
	build:build,
	globalExport:globalExport,
	globalExportComponents:globalExportComponents,
	externals:externals,

};
module.exports = config;