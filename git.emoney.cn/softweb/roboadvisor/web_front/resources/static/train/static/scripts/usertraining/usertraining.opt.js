!function(){var r={nonedataHtml:'<div class="no-info">暂无课程安排，课程回放也很精彩哦</div>',UID:"",appIDlive:appIDlive,curDatimesel:"2018-09-18",curAreasel:"默认",curTagsel:"0",isChangeLiveroom:!0,curPageOpts:{NewsID:0,ColumnID:16,StrategyID:0,currpage:1,pageSize:3,LiveID:0,ExpertLiveroom:"http://yqq.emoney.cn/Live/UserLive?lid=93",isbg:!1,newsidzan:[],zanparams:[]},init:function(){var t=this;t.curDatimesel=t.servTimeFormat($("#nowTime").val()),t.getStaticData(),t.$loadingBox=$("#loadingBox"),t.UID=$.cookie("expertnews.uid")||utils.GetQueryString("uid")||utils.GetQueryString("cid"),$.support.cors=!0,utils.EMSSO(),t.resetLiveContboxSize(),r.scrollContent(),t.bindEvents(),t.videolist(),t.select(),window.pickedFunc=function(){r.datePickedFunc()},window.pulldownLoad=function(){var e,a=!0;window.liveFrmNS1=null,$(function(){liveFrmNS1.jqbind("#videoScrollList","scroll",function(){liveFrmNS1.newscrolly==liveFrmNS1.page.maxh&&a&&0!=t.curTagsel&&1==t.byTag&&(a=!a,clearTimeout(e),e=setTimeout(function(){t.curPageOpts.currpage=parseInt(t.curPageOpts.currpage)+1,r.getDataByTag(t.curTagsel,1,1),a=!a},500))})})}},getStaticData:function(){$("#pageInitData").val()&&(window.winData=JSON.parse($("#pageInitData").val()))},datePickedFunc:function(){var e=this,a=$("#curDateshow");e.curDatimesel=$("#d11").val();var t=e.curNowTime();e.curDatimesel==t?a.text("今天"):a.text(e.curDatimesel),e.getDataByDateArea()},curNowTime:function(){var e=new Date;return e.getFullYear()+"-"+("00"+(e.getMonth()+1)).slice(-2)+"-"+("00"+e.getDate()).slice(-2)},servTimeFormat:function(e,a){var t="",i=null;return t=(t=e.replace("T"," ")).replace("Z",""),t=(i=new Date(t)).getFullYear()+"-"+("00"+(i.getMonth()+1)).slice(-2)+"-"+("00"+i.getDate()).slice(-2)},servTimeFilter:function(e){return e.replace("T"," ").replace("Z","")},resetLiveContboxSize:function(){var e=this;e.reCountLiveCntSize(),$(window).resize(function(){e.reCountLiveCntSize()})},reCountLiveCntSize:function(){var e=$(window).height();$(window).width();$("#videoFrame").height(e-68),$("#videoScrollList").height(e-68)},scrollContent:function(e){this.srcollBar=function(){$.each(["#videoScrollList"],function(e,a){0<$(a).length&&$(a).niceScroll({cursorcolor:"#666",cursoropacitymax:.5,touchbehavior:!1,cursorwidth:"6px",cursorborder:"0",cursorborderradius:"8px",autohidemode:!1})})},this.srcollBar()},tabswitch:function(){var t=this,i=$("#TopTagsMenu"),r=$(".tlt-menu span",i);i.on("click",".tlt-menu span",function(){var e=$(this),a=e.attr("data-tagid");"0"===a?i.addClass("latest"):i.removeClass("latest"),t.curTagsel==a&&0!=a||(r.removeClass("active"),e.addClass("active"),t.curTagsel=a,t.curPageOpts.currpage=1,"0"==t.curTagsel?(t.curDatimesel=t.servTimeFormat($("#nowTime").val()),$("#curDateshow").text("今天"),$("#d11").val(t.curDatimesel),t.setSelectToDefault(),t.getDataByDateArea()):(t.curPageOpts.currpage=1,t.getDataByTag(a,1,1)))})},bindEvents:function(){var e=this;e.tabswitch(),$("#videoList").on("click",".livideo-box",function(){var e=$(this),a=$("#videoFrame"),t=$("#TVTitle"),i=e.attr("data-videourl")||"",r=e.attr("data-videotit")||"",s=e.attr("data-videotag1")||"",n=(e.attr("data-videotag2"),"<h2>"+r+'</h2><div class="sp-info">讲师：'+s+"</div>");e.hasClass("active")||e.hasClass("starting")||e.hasClass("recording")||($("#videoList .livideo-box").removeClass("active"),e.addClass("active"),a.attr("src",i),t.html(n))}),$("#areaSelect").on("change",function(){e.curAreasel=$(this).val(),e.getDataByDateArea()}).focus(function(){})},playFirstCan:function(){var e=$("#classListBox"),a=$(".living, .playback",e).eq(0),t=$("#videoFrame"),i=$("#TVTitle"),r=a.attr("data-videourl")||"",s="<h2>"+(a.attr("data-videoTit")||" ")+'</h2><div class="sp-info">讲师：'+(a.attr("data-videoTag1")||" ")+"</div>";t.attr("src",r),i.html(s),a.addClass("active")},getDataByTag:function(e,a,t){var i=this;i.byTag=!0,$.ajax({url:window.gConfig.trainapiHost+"gettrainlistbytag",type:"GET",timeout:ajaxTimeout,dataType:"JSON",data:{trainTag:e,currpage:i.curPageOpts.currpage,pageSize:"20"},success:function(e){0==e.RetCode&&e.Message&&0<e.Message.length?(window.winData=JSON.parse(JSON.stringify(e)),i.videolist(window.winData)):$("#classListBox").html(r.nonedataHtml)},error:function(e){$("#classListBox").html(r.nonedataHtml)},complete:function(){}})},getDataByDateArea:function(){var a=this;$.ajax({url:window.gConfig.trainapiHost+"gettrainlistbydateandarea",type:"GET",timeout:ajaxTimeout,dataType:"JSON",data:{area:a.curAreasel,date:a.curDatimesel},success:function(e){0==e.RetCode&&e.Message&&0<e.Message.length?(window.winTimeData=JSON.parse(JSON.stringify(e)),a.videolist(window.winTimeData)):$("#classListBox").html(r.nonedataHtml)}})},videolist:function(e){var u=this,a=winData,t=$("#classListBox");e&&(a=e);var i=["{{#each Message}}","<div>",'<div class="livideo-box {{ livestatestyle Class_date EndDate Video_url }}"  data-videourl="{{videoplayurl  Class_date EndDate Gensee_URL Video_url }}" data-videotit="{{ Mtg_name }}" data-videotag1="{{Txtteachar }}" data-videotag2="{{ Meeting_type }}"  >','    <div class="p" >','        <div class="video-info">','           <div class="sp">','                <div class="live-item " {{liveClickTongji Class_date EndDate Video_url ID}}>','                    <div class="imgview"> <img src="{{ CoverImg }}" alt="">','                        <div class="live-state">{{showlivestate Class_date EndDate Video_url}}</div>',"                    </div>",'                    <div class="live-info">','                        <div class="txt"> {{ Mtg_name }}</div>','                       <div class="tags"> <span class="tag1">{{Txtteachar}}</span><span class="tag2"> {{ TrainTagName }}</span></div>',"                   </div>","               </div>","           </div>","        </div>",'        <div class="time"><span>{{renderTimetag Class_date}}</span></div>','        <div class="clearfloat"></div>',"    </div>","</div>","</div>","{{/each}}"].join("");Handlebars.registerHelper("renderTimetag",function(e){var a;return e==undefined||null==e||0==e.length?a="":(a=(a=e.replace("T"," ")).replace("Z",""),a=0==u.curTagsel?a.substr(11,5):a.substr(5,5)),new Handlebars.SafeString(a)}),Handlebars.registerHelper("videoplayurl",function(e,a,t,i){var r,s,n,l,o,c,d,v="";return o=u.servTimeFilter($("#nowTime").val()),c=u.servTimeFilter(e),d=u.servTimeFilter(a),l=""!=i,r=new Date(o).getTime(),s=new Date(c).getTime(),n=new Date(d).getTime(),r<=s?("starting",v=""):s<r&&r<=n?("living",v=t):n<r&&!l?("recording",v=""):n<r&&l&&("playback",v=i),new Handlebars.SafeString(v)}),Handlebars.registerHelper("isfirstvideo",function(e){var a="";return a=0==e?"first-hot":"",new Handlebars.SafeString(a)}),Handlebars.registerHelper("liveClickTongji",function(e,a,t,i){var r,s,n,l,o,c,d,v="playback";return o=u.servTimeFilter($("#nowTime").val()),c=u.servTimeFilter(e),d=u.servTimeFilter(a),l=""!=t,r=new Date(o).getTime(),s=new Date(c).getTime(),n=new Date(d).getTime(),r<=s?v="":s<r&&r<=n?v='clickkey="liveSidebar|list" clickdata="'+i+'|userTraining"  clickremark="" ':n<r&&!l?v="":n<r&&l&&(v='clickkey="liveSidebar|list" clickdata="'+i+'|userTraining"  clickremark="" '),new Handlebars.SafeString(v)}),Handlebars.registerHelper("livestatestyle",function(e,a,t,i){var r,s,n,l,o,c,d,v="playback";return o=u.servTimeFilter($("#nowTime").val()),c=u.servTimeFilter(e),d=u.servTimeFilter(a),l=""!=t,r=new Date(o).getTime(),s=new Date(c).getTime(),n=new Date(d).getTime(),r<=s?v="starting":s<r&&r<=n?v="living":n<r&&!l?v="recording":n<r&&l&&(v="playback"),new Handlebars.SafeString(v)}),Handlebars.registerHelper("showlivestate",function(e,a,t){var i,r,s,n,l,o,c,d="回放";return l=u.servTimeFilter($("#nowTime").val()),o=u.servTimeFilter(e),c=u.servTimeFilter(a),n=""!=t,i=new Date(l).getTime(),r=new Date(o).getTime(),s=new Date(c).getTime(),i<=r?d="即将开始":r<i&&i<=s?d="直播中":s<i&&!n?d="录制中":s<i&&n&&(d="回放"),new Handlebars.SafeString(d)});var r=Handlebars.compile(i)(a);1<u.curPageOpts.currpage?t.append(r):t.html(r),u.playFirstCan()},select:function(){var t=$("#areaSelect"),i=$("#selectWrapper"),r=this;t.click(function(){i.addClass("open")}),t.on("click",".option",function(e){var a=$(this);e.stopPropagation(),$(".option",i).removeClass("selected"),a.addClass("selected"),i.removeClass("open"),$(".title",t).text($(this).text()),r.curAreasel=$(this).attr("data-value"),r.getDataByDateArea()}).on("mouseleave",function(){i.removeClass("open")})},setSelectToDefault:function(){$("#areaSelect .title").text("默认"),this.curAreasel="默认",$("#areaSelect .selected").removeClass("selected")}};r.init()}();