require.config({baseUrl:window.gConfig.staticPath+"static/",waitSeconds:30,paths:{jQuery:"libs/jquery/jquery.min",cors:"libs/jquery/jquery.xdomainrequest.min",handlebars:"libs/handlebars/handlebars.min",jqueryform:"libs/jqueryform/jquery.form",json2:"libs/json2/json2.min",utils:"scripts/modules/public/utils",rules:"scripts/zixuan_testing/rules",zixuanTesting:"scripts/zixuan_testing/zixuan_testing"},shim:{cors:["jQuery"],utils:["jQuery"],jqueryform:["jQuery"]}}),require(["zixuanTesting"],function(i){});