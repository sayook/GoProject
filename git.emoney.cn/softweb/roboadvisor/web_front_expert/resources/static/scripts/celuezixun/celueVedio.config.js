require.config({baseUrl:window.gConfig.staticPath+"static/",waitSeconds:30,paths:{jquery:"libs/jquery/jquery.min",layer:"libs/layer/layer",cors:"libs/jquery/jquery.xdomainrequest.min",moment:"libs/moment/moment.min",handlebars:"libs/handlebars/handlebars.min",nicescroll:"libs/nicescroll/jquery.nicescroll.min",utils:"scripts/modules/public/utils",celueVedio:"scripts/celuezixun/celueVedio"},shim:{cors:["jquery"],nicescroll:["jquery"],utils:["jquery"]}}),require(["celueVedio"],function(e){});