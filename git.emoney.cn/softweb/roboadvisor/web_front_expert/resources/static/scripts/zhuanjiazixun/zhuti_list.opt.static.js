!function(){var l={nonedataHtml:'<div class="no-info">暂无数据显示，请稍后重试</div>',init:function(){var e=this;utils.EMSSO(),utils.appendSSO(),e.relationData={},e.topicID=utils.GetQueryString("topicId"),e.scrollbar(),e.getSwiperData()},buildThemesSwiper:function(){var t,a,i,n=this,e=$(".swiper-wrapper"),r=$(".item",e),s=r.length,l=$(".arrow-right"),d=$(".arrow-left"),o=null;try{o=new Swiper(".swiper-container",{pagenation:!1,paginationClickable:!1,centeredSlides:!1,slidesPerView:"auto",loop:!1,onlyExternal:!0,autoResize:!1,onSlideClick:function(e){t=e.clickedSlideIndex,a=e.clickedSlide,i=$(a).attr("data-topicId"),$(e.clickedSlide).css({width:"256px"}).siblings().css({width:"196px"}),o.reInit(),n.slidedData(i),n.relationInfo(i),$("#relation-part").getNiceScroll(0).doScrollTop(0,.01)},onInit:function(e){e.swipeTo(t),$(a).addClass("swiper-slide-active").siblings().removeClass("swiper-slide-active")}})}catch(c){}5<s&&(d.addClass("open"),l.addClass("open")),0==n.topicId&&d.addClass("disable"),r.eq($('[data-topicid="'+n.topicID+'"]').index()).trigger("click"),d.on("click",function(e){e.preventDefault();var t=$(".swiper-slide-active").index();1==t?($(this).addClass("disable"),l.removeClass("disable")):1<t&&($(this).removeClass("disable"),l.removeClass("disable")),0<t&&r.eq(o.clickedSlideIndex-1).trigger("click")}),l.on("click",function(e){e.preventDefault();var t=$(".swiper-slide-active").index();t==s-2?($(this).addClass("disable"),d.removeClass("disable")):t<s-2&&($(this).removeClass("disable"),d.removeClass("disable")),t<=s-2&&r.eq((o.clickedSlideIndex?o.clickedSlideIndex:o.activeIndex)+1).trigger("click")}),r.on("click",function(){var e=$(this).index();0==e?d.addClass("disable"):d.removeClass("disable"),e===s-1?l.addClass("disable"):l.removeClass("disable")})},scrollbar:function(){$("#relation-part").niceScroll({cursorcolor:"#666",cursoropacitymax:.5,touchbehavior:!1,cursorwidth:"6px",cursorborder:"0",cursorborderradius:"8px",autohidemode:!1})},getSwiperData:function(){var e=["{{#each Message}}",'<div class="item swiper-slide noSwiping" data-topicId="{{ID}}"  clickkey="topSlide|list" clickdata="{{ID}}|zhuti" clickremark="" style="width:{{widthAuto @index}};">','<div class="link">','{{#if TopicImg}}<img src="{{TopicImg}}" /> {{else}}<img src="'+imgplaceholder+'" /> {{/if}}','<p class="title">{{TopicName}}</p>','<div class="activedSummary">{{subStrs TopicSummary 70}}</div><div class="detail">',"{{subStrs TopicSummary 58}} ",'</div><p class="ConcernIndex">关注指数','    <i class="icon-1">{{starNum ConcernIndex}}</i>',"</p>","</div>","</div>","{{/each}}"].join(""),t=this;Handlebars.registerHelper("widthAuto",function(e){return e=0==e?"256px":"196px",new Handlebars.SafeString(e)}),Handlebars.registerHelper("lessWord",function(e){return e==undefined||null==e||0==e.length?e="":35<e.length?e="detail-tip":e.length<35&&(e="detail-tip less-word"),new Handlebars.SafeString(e)}),Handlebars.registerHelper("starNum",function(e){if(e==undefined||null==e||0==e.length)e="";else for(var t="",a=0;a<Math.floor(e);a++)t+="&#xe60a;";return new Handlebars.SafeString(t)}),t.dataUse={},Handlebars.registerHelper("subStrs",function(e,t){return e==undefined||null==e||0==e.length?e="":e.length>t&&(e=e.slice(0,t)+"..."),new Handlebars.SafeString(e)}),Handlebars.registerHelper("tipShowOrNot",function(e,t){return e=e==undefined||null==e||0==e.length?"":e.length>t?e:"",new Handlebars.SafeString(e)});var a=$("#slide .swiper-wrapper");if(t.loadSlideData=!0,0==PageData.RetCode&&PageData.Message&&0<PageData.Message.length){t.dataUse={Message:[]};for(var i=0;i<PageData.Message.length;i++)0!=PageData.Message[i].ID&&t.dataUse.Message.push(PageData.Message[i]);var n=Handlebars.compile(e)(t.dataUse);a.find(".no-info").find(".noContent").remove(),a.html(n),t.topicID="0"!==t.topicID&&t.topicID?t.topicID:t.dataUse.Message[0].ID,t.topicId=t.topicId||0;for(i=0;i<t.dataUse.Message.length;i++)t.dataUse.Message[i].ID==t.topicID&&(t.topicId=i);t.buildThemesSwiper(),t.slidedData(t.topicID)}else a.html(l.nonedataHtml)},slidedData:function(e){Handlebars.registerHelper("stockpriceCheck",function(e){return e==undefined||null==e||0==e.length?e="":0==e&&(e="-"),new Handlebars.SafeString(e)});var t=["{{#each RelatedStockList}}","<tr>",'<td class="name" data-stockCode="{{StockCodeCheck StockCode}}">{{StockName}}</td>','<td class="cont" title="{{StockSummary}}">{{subStr StockSummary 29}}&nbsp;</td>',"<td>{{stockpriceCheck StockPrice}}</td>","<td>{{toFixed StockPE}}</td>","</tr>","{{/each}}"].join(""),a=["{{#each RelatedBKList}}",'<li class="item {{updowncheck this.BKF }}" data-stockCode="{{BKCodeCheck this.BKCode}}">{{this.BKName}}<span class="increase {{upOrDown this.BKF}}">{{percent this.BKF}}</span></li>',"{{/each}}",'<li class="clearfloat"></li>'].join(""),i=this;Handlebars.registerHelper("subStr",function(e,t){return e==undefined||null==e||0==e.length?e="-":e.length>t&&(e=e.slice(0,t)+"..."),new Handlebars.SafeString(e)}),Handlebars.registerHelper("percent",function(e){function t(e){return Math.round(e)===e}if(e==undefined||null==e||0==e.length)time="";else if(t(e)){if(0==e){var a=new Date,i=a.getHours(),n=a.getMinutes();9==i&&0<=n&&n<=30?e="-":e+=".00%"}}else t(e)||(e+="%");return new Handlebars.SafeString(e)}),Handlebars.registerHelper("updowncheck",function(e){return 0<e?"little-red":e<0?"little-blue":"little-gray"}),Handlebars.registerHelper("upOrDown",function(e){return 0<e?"up":e<0?"down":""}),Handlebars.registerHelper("toFixed",function(e){return e=e==undefined||null==e||""==e?"-":new Number(e).toFixed(2),new Handlebars.SafeString(e)}),Handlebars.registerHelper("BKCodeCheck",function(e){return e=e==undefined||null==e||0==e.length?"":"2"+e,new Handlebars.SafeString(e)}),Handlebars.registerHelper("StockCodeCheck",function(e){return e==undefined||null==e||0==e.length?time="":e="6"!=e[0]?"1"+e:e,new Handlebars.SafeString(e)});for(var n=Handlebars.compile(a),r=Handlebars.compile(t),s=0;s<i.dataUse.Message.length;s++)if(i.dataUse.Message[s].ID==e)var l=n(i.dataUse.Message[s]),d=r(i.dataUse.Message[s]);$("#relation-list").html(l),$(".relation-shares .no-info").remove(),$("#relationsStockList").html(d),$("#relationsStockList .con").each(function(){12<$(this).text().length&&$(this).text($(this).text().slice(0,12)+"...")}),$("#relationsStockList").off("click").on("click",".name",function(){var e=$(this);utils.goThisStock(e.attr("data-stockCode"))}),$("#relation-list").off("click").on("click",".item",function(){var e=$(this);utils.goThisStock(e.attr("data-stockCode"))})},relationInfo:function(n){var r=["{{#each Message}}",'<div class="content-item">','<a class="desc" href="'+pagerouter.zhutiArticle+'?NewsID={{addParas NewsInformationId}}"  clickkey="relateArticleList|title" clickdata="{{NewsInformationId}}|zhuti_article" clickremark="" ><i class="icon-1">&#xe637;</i>{{ArticleTitle}}</a><span class="time">{{renderDateTime PublishTime}}</span>',"</div>","{{/each}}"].join(""),s=this;if(Handlebars.registerHelper("renderDateTime",function(e){var t;return t=e==undefined||null==e||0==e.length?"":e.slice(5,10),new Handlebars.SafeString(t)}),Handlebars.registerHelper("addParas",function(e){return e=e==undefined||null==e||0==e.length?"":e+"&TopId="+n,new Handlebars.SafeString(e)}),s.relationData[n]){var e=Handlebars.compile(r)(s.relationData[n]);$("#zixun-list").empty().append(e)}else $.ajax({url:window.gConfig.apiHost+"expertnews/gettopicnews",type:"GET",timeout:ajaxTimeout,dataType:"JSON",data:{TopicId:n},success:function(e){s.loadRelationInfo=!0;var t=JSON.parse(JSON.stringify(e)),a={Message:[]};if(0<t.Message.length&&(a.Message=t.Message.slice(0,11)),0<t.Message.length){s.relationData[n]=a;var i=Handlebars.compile(r)(a);$("#zixun-list").html(i)}else $("#zixun-list").html(l.nonedataHtml)},error:function(e,t,a){$("#zixun-list").html(l.nonedataHtml)}})},pageView:function(){var r;r=function(){var e,t,a,i=document.getElementsByTagName("script"),n=i[i.length-1].src.split("?"),r=2<=n.length?n[1].split("&"):undefined,s={};if(r!=undefined)for(var l=0,d=r.length;l<d;l++)t=(e=r[l].split("="))[0],a=e[1],"undefined"==typeof s[t]?s[t]=a:("string"==typeof s[t]&&(s[t]=[s[t]]),s[t].push(a));return function(){return s}}(),function(){try{var e=window.top.location.href,t=document.referrer;if(Code=r().code,app=module=remark="","undefined"!=typeof App&&(app=App),"undefined"!=typeof Module&&(module=Module),"undefined"!=typeof Remark&&(remark=Remark),Code!=undefined&&""!=Code){var a="http://aliapi.tongji.emoney.cn/Page/PageView?v="+Math.random()+"&code="+Code+"&referurl="+encodeURIComponent(t)+"&pageurl="+encodeURIComponent(e)+"&app="+app+"&module="+module+"&remark="+remark,i=document.createElement("script");i.src=a,document.body.appendChild(i)}}catch(n){}}()}};l.init(),$.emoneyAanalytics().Init(tjAppid.expert,"zhuti","")}();