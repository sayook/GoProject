define(["jquery","cors","utils","layer","handlebars","nicescroll"],function(g,e,u,r,i,t){r.config({path:window.gConfig.staticPath+"static/libs/layer/"}),{StrategyID:0,curPageOpts:{NewsID:0,ColumnID:confColumnID,StrategyID:0,currpage:1,pageSize:20,LiveID:0,ExpertLiveroom:pagerouter.yqqUserLive+"?lid="+u.GetQueryString("LiveID")+"&"+u.EMSSO()},init:function(){var e=this,t=u.GetQueryString("LiveID");e.getUID=u.getUID();u.EMSSO();u.appendSSO(),g.support.cors=!0,e.curPageOpts.NewsID=u.GetQueryString("NewsID"),e.curPageOpts.LiveID=t,e.curPageOpts.StrategyID=u.GetQueryString("StrategyID"),e.curPageOpts.currpage=u.GetQueryString("currpage"),e.curPageOpts.pageSize=u.GetQueryString("pageSize"),g("#gotoExpliveroom").attr("href",e.curPageOpts.ExpertLiveroom).hide(),e.setScroll(),e.StrategyArticleShow(),e.newsInfoListshow(),window.getLiveRoom(t),g("#goBack").on("click",function(){1<history.length?window.history.back():(window.location.href=pagerouter.celueHome,window.event.returnValue=!1)})},setScroll:function(){g.each(["#medialistScroll2","#iveNlPack2"],function(e,t){0<g(t).length&&g(t).niceScroll({cursorcolor:"#666",cursoropacitymax:.5,touchbehavior:!1,cursorwidth:"6px",cursorborder:"0",cursorborderradius:"8px",autohidemode:!1})})},StrategyArticleShow:function(){var n=this,e=u.GetQueryString("StrategyID"),r=u.GetQueryString("LiveID"),t=["<div><div class='cur-topic'>","\t<div class='ct-media pull-left'>","\t<span> <img src='{{StrategyImg}}' title='{{ StrategyName }}'> </span>","\t</div>","\t<div class='ct-right pull-left'>","\t<div class='pull-right'> 投顾编号：{{ StrategyTGNo }} </div>","   <h3><span>{{ StrategyName }}</span>　<span id='followBtn'  data-followed='followed'><span class='label '>　</span></span> </h3> ","   <div class='ct-txt '><span> {{StrategySummary StrategySummary }} </span></div>","<div class='topic-labels'>","{{#each TagsList}}","\t<span class='label label-info-pale'>{{Tags}}</span>","{{/each}}","</div>","\t</div>","\t<div class='clearfloat'></div>","</div>","</div>"].join("");if(""!=e){n.StrategyID=e,i.registerHelper("renderTime",function(e){return e=e==undefined||null==e||0==e.length?"":e.substr(0,10),new i.SafeString(e)}),i.registerHelper("StrategySummary",function(e){var t,a=g("<div>"+e+"</div>").text();return t=a.length>(a=a.slice(0,115)).length?"…":"",new i.SafeString(a+t)});var o=i.compile(t);g.ajax({type:"get",url:window.gConfig.apiHost+"strategy/GetStrategyInfoBySID",data:{StrategyID:n.StrategyID},success:function(e){if(0==e.RetCode){var t=o(e.Message);g("#StrategyInfoShow").html(t);var a=u.getUID(),i=n.StrategyID,s=appIDstrategyinfo;n.getLikesnum(g("#StrategyInfoShow .clickbtn-like .clickLikes"),a,i,s),n.isFollowed(a,n.StrategyID,r)}}})}},getLikesnum:function(e,t,a,i){var s=t,n=a,r=i,o=g(".clickbtn-like"),l=(g(".icon-1",o),e);g.ajax({type:"get",timeout:ajaxTimeout,url:window.gConfig.likeDataServerJsonp,contentType:"text/plain",dataType:"jsonp",data:{uid:s,newsId:n,appId:r},success:function(e,t){"success"===t&&e.isSucess&&l.text(e.message.likes)}})},newsInfoListshow:function(){var r=this;r.StrategyID=u.GetQueryString("StrategyID");var o={ColumnID:confColumnID,StrategyID:r.StrategyID,currpage:1,pageSize:10},e=u.objToQuery(o),l=0,t=["<div data-page={{ currpage }}>","{{#each Message}}","\t<div class='item section' id='{{NewsInfo.ID}}'>","\t\t<div class='item-content'>","\t\t\t<div class='ic-iner'>","\t\t\t\t<h3 class='ic-title'>","\t\t\t\t<span class='view-tips pull-right'>","\t\t\t\t<b class='clickbtn-like' data-chanelid='{{StrategyInfo.LiveID}}_{{NewsInfo.ID}}'><i class='icon-1'>&#xe61b;</i> <span class='clickLikes'></span></b>　<b>","\t\t\t\t<i class='icon-1'>&#xe602;</i> {{countReading NewsInfo.ClickNum }}</b>","\t\t\t\t<em class='time'> {{renderDateTime NewsInfo.CreateTime}} </em>","\t\t\t\t</span>","\t\t\t\t<span><a href='"+pagerouter.celueArticle+"?NewsID={{ NewsInfo.ID }}&LiveID={{ StrategyInfo.LiveID }}&source=ll&"+e+"' clickkey='articlelist|title' clickdata='{{ NewsInfo.ID }}|{{ StrategyInfo.ID }}|celue_article' clickremark='' >{{ NewsInfo.Title }} </a></span>","\t\t\t\t</h3>","\t\t\t\t<div class='ic-txt'> <a href='"+pagerouter.celueArticle+"?NewsID={{ NewsInfo.ID }}&LiveID={{ StrategyInfo.LiveID }}&source=ll&"+e+"'  clickkey='articlelist|summary' clickdata='{{ NewsInfo.ID }}|{{ StrategyInfo.ID }}|celue_article' clickremark='' >{{contentSummary NewsInfo.NewsContent}} </a></div>","\t\t\t</div>","\t\t</div>","\t</div>","{{/each}}","</div>"].join("");i.registerHelper("renderDateTime",function(e){var t;return t=e==undefined||null==e||0==e.length?"":(e=e.replace("T"," ")).substr(5,11),new i.SafeString(t)}),i.registerHelper("contentSummary",function(e){var t,a=g("<div>"+e+"</div>").text();return t=a.length>(a=a.slice(0,100)).length?"…":"",new i.SafeString(a+t)}),i.registerHelper("countReading",function(e){var t=parseInt(e);return t=isNaN(t)?0:t,l+=t,e});var c=i.compile(t);g.get(window.gConfig.apiHost+"strategy/GetStrategyNewsList",o,function(e){if(0==e.RetCode&&e.Message&&e.Message.length){g.extend(e,{currpage:o.currpage});var t=c(e);g("#StrategyInfoList").find(".no-info").remove(),g("#StrategyInfoList").removeClass("no-info-cnt").html(t);var a,i=u.getUID(),s=appIDLiveInfo,n=[];g("#curClickNum").html(l),g.each(g("#medialistScroll2 .clickbtn-like"),function(e,t){a=g(t).data("chanelid"),n.push({newsId:a,uid:i,appId:s})}),r.getLikesCollect(n)}})},getLikesCollect:function(e){var t,n={};g.ajax({type:"get",timeout:ajaxTimeout,contentType:"text/plain",dataType:"jsonp",url:window.gConfig.likeListDataServerJsonp,data:{jsondata:JSON.stringify(e)},beforeSend:function(e){t=r.load(2)},success:function(a){var i,s;r.close(t),a.isSucess&&(g.each(a.message,function(e,t){n[a.message[e].newsId]={liked:a.message[e].liked,likes:a.message[e].likes}}),g.each(g("#medialistScroll2 .clickbtn-like"),function(e,t){i=g(t),s=i.attr("data-chanelid"),g(".clickLikes",i).html(n[s].likes)}))}})},isFollowed:function(s,n,r){var o=this;g.ajax({type:"get",timeout:ajaxTimeout,url:window.gConfig.apiHost+"strategy/HasFocusStrategy",data:{UID:s,StrategyID:n},success:function(e,t){var a=g("#followBtn"),i=g("#curFansNum");"success"===t&&0==e.RetCode&&"SUCCESS"==e.RetMsg&&(1==e.Message?a.html("<span class='label'> 已关注 </span>").addClass("followed"):a.html("<span class='label label-warning'> 关注+ </span>").removeClass("followed"),a.on("click",function(){var e=i.text();e=parseInt(e),e=isNaN(e)?0:e,a.hasClass("followed")?(a.removeClass("followed"),a.html("<span class='label label-warning'> 关注+ </span>"),o.clicktoRemoveFollow(s,n,r),e=e-1<0?0:e-1):(a.addClass("followed"),a.html("<span class='label'> 已关注 </span>"),o.clicktoFollow(s,n,r),e+=1),i.text(e)}))}})},clicktoFollow:function(e,t,a){g.ajax({type:"get",timeout:ajaxTimeout,url:window.gConfig.apiHost+"strategy/AddFocusStrategy",data:{UID:e,StrategyID:t,LiveId:a},success:function(e,t){"success"===t&&0==e.RetCode&&e.RetMsg}})},clicktoRemoveFollow:function(e,t,a){g.ajax({type:"get",timeout:ajaxTimeout,url:window.gConfig.apiHost+"strategy/RemoveFocusStrategy",data:{UID:e,StrategyID:t,LiveId:a},success:function(e,t){"success"===t&&0==e.RetCode&&e.RetMsg}})}}.init(),g.emoneyAanalytics().Init(tjAppid.expert,"zhuanjiacelue_list","")});