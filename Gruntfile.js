module.exports = function(grunt) {
	var helper = require('./src/helpers.js');
	var config = require('./src/config.js');
	console.log(config);

	// helper
	helper.createPaths();
	var helperFile = helper.createHelper();
	// grunt
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			options: {
				external:config.externals,
				transform: [
					'browserify-shim',
					['babelify',{
						presets:['es2015'],
						plugins:['external-helpers']
					}]
				],
			},
			main: {
				src: config.src.main,
				dest: config.build.main,
				options: {
					browserifyOptions: {
						standalone: config.globalExport
					},
				},
			},
			components:{
				src: config.src.components,
				dest: config.build.components,
				options:{
					browserifyOptions: {
						standalone: config.globalExportComponents
					},
				}
			}
		},
 		concat: {
 			options:{
				separator:';'
			},
 			main:{
 				src: [helperFile,config.build.main],
				dest: '<%=pkg.main%>'
 			},
			components: {
				src: [config.build.components],
				dest: '<%=pkg.subs.components%>'
			}
		},
		uglify: {
			options: {
				mangle: {
					except: ['jQuery', '$', 'echarts','moment']
				}
			},
			target: {
				files: {
				'dist/techstudio.wilas.min.js': ['<%=pkg.main%>'],
				'dist/techstudio.wilas.components.min.js': ['<%=pkg.subs.components%>']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('build', ['browserify','concat','uglify']);
	grunt.registerTask('dev', ['browserify','concat']);
	grunt.registerTask('default', ['build']);
};