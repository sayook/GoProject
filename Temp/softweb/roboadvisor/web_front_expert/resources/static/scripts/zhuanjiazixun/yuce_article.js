define(["jquery","cors","layer","utils","handlebars","nicescroll"],function(jquery,cors,layer,utils,Handlebars,nicescroll){layer.config({path:window.gConfig.staticPath+"static/libs/layer/"}),$.support.cors=!0;var page={nonedataHtml:'<div class="no-info">暂无数据显示，请稍后重试</div>',init:function(){utils.appendSSO();var i=this;i.index=0,i.source=1,i.flag=!0,i.firstArticle=!0,i.getUID=$.cookie("expertnews.uid")||utils.GetQueryString("uid")||0,i.NewsInfoId=utils.GetQueryString("NewsID"),i.getAppId=appIDcloudinfo,i.forcastNews(0),i.scrollContent(),i.share(),utils.thumbUP(".like",i.getUID,i.getAppId,"#yuceScroll"),window.pulldownLoad=function(){var e,t=null,a=!0;$(function(){(t=$("#yuceScroll").getNiceScroll(0)).jqbind("#yuceScroll","scroll",function(){t.newscrolly>=t.page.maxh-500&&a&&(a=!a,clearTimeout(e),e=setTimeout(function(){i.index>i.newDataArrayLength-1&&i.flag?(layer.tips("已加载全部","#yuceScroll",{offset:["400px","50px"],tips:[2,"#cb4b4b"]}),i.flag=!1):i.flag&&i.updateInfo(i.newDataArray[i.index].DataUrl),a=!a},500))}),t.scrollend(function(){var r,e=$("#yuceScroll .atticle-show");$.each(e,function(e,t){var a=$(t),i=a.offset().top,n=a.height();(i<=100&&n*(2/3)<i+n-60||100<i&&n*(2/3)<553-i+86)&&(r=a.attr("data-artid"))}),r!=undefined&&page.getNewsIDreadingCount(r)})})},window.pulldownLoad(),$("#goBack").on("click",function(){1<history.length?window.history.back():(window.location.href=pagerouter.home,window.event.returnValue=!1)})},scrollContent:function(){$.each(["#yuceScroll","#yaowenNlPack"],function(e,t){0<$(t).length&&$(t).niceScroll({cursorcolor:"#666",cursoropacitymax:.5,touchbehavior:!1,cursorwidth:"6px",cursorborder:"0",cursorborderradius:"8px",autohidemode:!1})})},getNewDataArray:function(e,t){var a=this;a.detailCode=["<div class='atticle-show section yaowen-article' id=\"atticleShow{{newsId}}\" data-artid={{newsId}}>","        <div class='a-iner'>","            <div class='art-title'>",'                <h3 id="artcleTitle" title="">{{article_title}}</h3>',"            </div>",'            <div class="art-subtitle">',"                <div class=' pull-right'>","                    <span class='view-tips'>",'                        <span class="vt-cell like" id="like{{newsId}}" data-channelid={{newsId}}>','                            <i class=\'icon-1\' id="likeicon{{newsId}}">&#xe61b;</i><span class="liked" id="liked{{newsId}}"></span></span>','                    <span class="vt-cell">',"                            <i class='icon-1'>&#xe602;</i><span id=\"reading{{newsId}}\"></span></span>",'                    <span class="vt-cell">','                        <div class="fl ml10 bdsharebuttonbox" data-tag="share_{{newsId}}" style=" display: inline-block; vertical-align: middle;  margin-top: -5px;">','                            <a href="javascript:;" class="bds_weixin" data-cmd="weixin" title="分享到微信" data-id="{{newsId}}" data-title="{{article_title}}"></a>','                            <a href="javascript:" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博" data-id="{{newsId}}" data-title="{{article_title}}"></a>',"                        </div>","                    </span>","                    </span>","                </div>",'                <div class="ac-submain">',"                    <span>来源：{{article_source}}</span>","                    <span>{{renderTime publish_time}}</span>","                </div>","            </div>",'            <div class="art-cnt">','                <div class="ac-iner">','                    <div class="ac-content ywac-content" id="acScrollbox" data-fontsizecnt>',"                        {{htmled content}}","                    </div>","                </div>","            </div>","        </div>","    </div>"].join(""),a.newDataArrayLength=e.Message.length,a.newDataArray=[],a.preDataArray=[],a.nextDataArray=[];for(var i=0;i<e.Message.length;i++)e.Message[i].NewsInformationId==t&&(a.preDataArray=e.Message.slice(0,i),a.nextDataArray=e.Message.slice(i+1,e.Message.length),a.newDataArray.push(e.Message[i]),a.newDataArray=a.newDataArray.concat(a.nextDataArray).concat(a.preDataArray))},updateInfo:function(e){var a=this,i=$("#yuceScroll");if(a.readTheFirstFourArticles=function(){a.index<4&&a.updateInfo(a.newDataArray[a.index].DataUrl)},$.support.cors=!0,a.currentArticleId=a.newDataArray[a.index].NewsInformationId,Handlebars.registerHelper("htmled",function(e){return e!=undefined&&null!=e&&0!=e.length||(e=""),new Handlebars.SafeString(e)}),Handlebars.registerHelper("renderTime",function(e){return e=e==undefined||null==e||0==e.length?"":"　"+e.slice(5,10)+" "+e.slice(11,16),new Handlebars.SafeString(e)}),window.XDomainRequest){var n=new XDomainRequest;n.open("get",e),n.onprogress=function(){},n.ontimeout=function(){},n.onerror=function(){i.html(page.nonedataHtml)},n.onload=function(){var e=JSON.parse(n.responseText);if(e.id!=undefined&&null!=e.id){$("#yuceScroll .no-info").remove(),$.extend(e,{newsId:a.currentArticleId});var t=Handlebars.compile(a.detailCode)(e);$("#yuceScroll").append(t),a.getReadCount(a.currentArticleId),a.getClickLike(a.getUID,a.currentArticleId,a.getAppId),a.index=a.index+1,a.readTheFirstFourArticles(),a.share(),window._bd_share_main&&window._bd_share_main.init&&window._bd_share_main.init()}else i.html(page.nonedataHtml)},setTimeout(function(){n.send()},0)}else $.ajax({url:e,type:"GET",timeout:ajaxTimeout,dataType:"json",beforeSend:function(e){a.index},success:function(e){if(e.id!=undefined&&null!=e.id){$("#yuceScroll .no-info").hide(),$.extend(e,{newsId:a.currentArticleId});var t=Handlebars.compile(a.detailCode)(e);$("#yuceScroll").append(t),a.getReadCount(a.currentArticleId),a.getClickLike(a.getUID,a.currentArticleId,a.getAppId),a.index=a.index+1,a.readTheFirstFourArticles(),a.share(),window._bd_share_main&&window._bd_share_main.init&&window._bd_share_main.init()}else i.html(page.nonedataHtml)},error:function(e,t,a){i.html(page.nonedataHtml)}})},forcastNews:function(n){var t,a,i,r=$("#farcast-list"),s=["{{#each Message}}",'<a class="item farcast-item" cid="{{NewsInformationId}}" clickkey="articleAside|title" clickdata="{{NewsInformationId}}|yuce_article" clickremark="">','<span class="date">{{renderDateTime PublishTime}}</span>','<div class="content">','<span class="tags">[{{NewsTags}}]</span>','<span class="title">{{ArticleTitle}}</span>',"</div>",'<div class="clearfloat"></div>',"</a>","{{/each}}"].join(""),l=this;Handlebars.registerHelper("subStr",function(e,t){return e==undefined||null==e||0==e.length?time="":e.length>t&&(e=$.trim(e).substr(0,t)+"..."),new Handlebars.SafeString(e)}),Handlebars.registerHelper("renderDateTime",function(e){return e==undefined||null==e||0==e.length?t="":(a=e.slice(5,10),i!=a?(t=e.slice(5,10),i=a):t=""),new Handlebars.SafeString(t)}),$.ajax({url:window.gConfig.apiHost+"expertnews/getclosingnews",contentType:"application/json",type:"GET",timeout:ajaxTimeout,dataType:"JSON",success:function(t){if(0==t.RetCode&&t.Message&&0<t.Message.length){for(var e=JSON.parse(JSON.stringify(t)),a=0;a<t.Message.length;a++)t.Message[a].ArticleTitle.slice(1,5)==t.Message[a].NewsTags&&(e.Message[a].ArticleTitle=t.Message[a].ArticleTitle.slice(6,t.Message[a].ArticleTitle.length));var i=Handlebars.compile(s)(e);$("#farcast-list").empty().append(i),l.getNewDataArray(t,l.NewsInfoId),l.updateInfo(l.newDataArray[n].DataUrl),$("#farcast-list .item").on("click",function(){var e=$(this);l.index=0,l.hotNewsId=e.attr("cid"),$("#yuceScroll").empty(),l.firstArticle=!0,l.getNewDataArray(t,l.hotNewsId),l.updateInfo(l.newDataArray[n].DataUrl)})}else r.html(page.nonedataHtml)},error:function(e,t,a){r.html(page.nonedataHtml)}})},getReadCount:function(t){var a=this;$.ajax({url:window.gConfig.apiHost+"click/queryclick",type:"GET",timeout:ajaxTimeout,dataType:"JSON",cache:!1,data:{identity:t,clickType:"news.information"},success:function(e){$("#reading"+t).text(e.Message.Result[t]),1==a.firstArticle&&(a.getNewsIDreadingCount(a.newDataArray[0].NewsInformationId),a.firstArticle=!1)},error:function(e,t,a){}})},getNewsIDreadingCount:function(e){var a;e!=undefined&&""!=e&&null!=e&&0!=e&&((a=$("#reading"+e)).attr("viewed")||(a.text(parseInt(a.text())+1),a.attr("viewed","1"),$.ajax({type:"get",timeout:ajaxTimeout,url:window.gConfig.apiHost+"click/addclick",contentType:"text/plain",cache:!1,data:{identity:e,clickType:"news.information"},dataType:"json",success:function(e,t){"success"===t&&0==e.RetCode&&"SUCCESS"==e.RetMsg&&a.text(e.Message)},error:function(e,t,a){}})))},getClickLike:function(e,i,t){$.ajax({type:"get",timeout:ajaxTimeout,contentType:"text/plain",dataType:"json",url:window.gConfig.likeDataServer,data:{uid:e,newsId:i,appId:t},success:function(e,t){e.isSucess?$("#like"+i).attr("data-channelid")==i&&($("#liked"+i).text(e.message.likes),!0===e.message.liked?($("#likeicon"+i).html("&#xe66b;"),$("#like"+i).addClass("liked")):($("#likeicon").html("&#xe61b;"),$("#like"+i).removeClass("liked"))):($("#likeicon").html("&#xe61b;"),$("#like"+i).removeClass("liked"))},error:function(e,t,a){$("#likeicon").html("&#xe61b;"),$("#like"+i).removeClass("liked")}})},share:function(){var _this=this,shareId="",title="";function SetConf(e,t){return shareId&&(t.bdUrl=url,t.bdText=title),t}with($(function(){$(".bdsharebuttonbox a").mouseover(function(){shareId=$(this).attr("data-id"),title=$(this).attr("data-title"),url=pagerouter.share+"?type=1&NewsID="+shareId+"&source="+_this.source})}),window._bd_share_config={common:{onBeforeClick:SetConf},share:[{bdSize:12}]},document)(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date/36e5)}};page.init(),$.emoneyAanalytics().Init(tjAppid.expert,"yuce_article","")});