require.config({baseUrl:window.gConfig.staticPath+"static/",waitSeconds:30,paths:{jquery:"libs/jquery/jquery.min",cors:"libs/jquery/jquery.xdomainrequest.min",handlebars:"libs/handlebars/handlebars.min",json2:"libs/json2/json2.min",utils:"scripts/modules/public/utils",rules:"scripts/zixuan_testing/rules",investStyle:"scripts/zixuan_testing/invest_style"},shim:{cors:["jquery"],utils:["jquery"]}}),require(["investStyle"],function(s){});