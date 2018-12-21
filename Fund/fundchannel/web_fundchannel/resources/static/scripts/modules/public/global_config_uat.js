if (!window.console) {
    window.console = {};
}
if (!window.console.log) {
    window.console.log = function(msg) {};
}
// window.onerror = killErrors; function killErrors() {  return true;}

window.gConfig = {
    apiHost: "http://pre.dsclient.emoney.cn/expert/",  // API 接口
    expertBaseUrl: "http://pre.dsclient.emoney.cn/expert/",    // 专家资讯地址
    strategyBaseUrl:"http://pre.dsclient.emoney.cn/expert/",   // 策略副窗地址
    myoptUrl: "http://pre.dsclient.emoney.cn/myoptional/",     // 我的自选地址
    // staticPath: "http://static.dsclient.emoney.cn/expert/",    // 静态服务器地址
    staticPath: "http://test.static.emoney.cn:8081/pre/zt/static/train/",
    likeDataServer: "http://ds.emoney.cn/newsapi/api/zan",      // 单个点赞接口
    likeListDataServer: "http://ds.emoney.cn/newsapi/api/zans/getlist",  // 点赞列表查询
    likeListDataServerJsonp: "http://ds.emoney.cn/newsapi/api/zans/getlistjsonp",   // 点赞列表查询（ie8以下）
    likeDataServerJsonp: 'http://ds.emoney.cn/newsapi/api/zans/submitjsonp',     // 点赞接口（ie8以下）
    zyapiyqq:"http://pre.dsclient.emoney.cn/yqqapi/",
    advertising:'http://static.emoney.cn/ds/jrtpad/jrtpadtongji_iv.js',  // 广告统计
    trainapiHost:"http://pre.dsclient.emoney.cn/zt/train/",// 用户培训接口地址
    resHost: "http://ds.emoney.cn/res/"   // 用户培训策略列表接口地址
};

// window.gConfig.virtualServerPath=window.gConfig.apiHost;
// window.gConfig.expertBaseUrl = window.gConfig.apiHost;
// window.gConfig.strategyBaseUrl = window.gConfig.apiHost;

var wsurl = "ws://wsproxy.emoney.cn/ws/onsocket";
var longpollurl = "http://wsproxy.emoney.cn/poll/onpolling";
var de = parseInt(Math.random() * 10000);
var nowtime = "";
var appIDnewsinfo = 1015001;    // 策略资讯
var appIDcloudinfo = 1015002;   // 云端资讯
var appIDstrategyinfo = 1015003;    // 策略
var appIDweiguba = 1015004;  // 微股吧资讯
var appIDstocknewsinfo = 1015005; // 股票相关资讯
var appIDlive = 1015006;    // // 直播
var appIDLiveInfo = 1015007;    // 直播间
var appIDTrainingInfo = 1015008;	// 策略培训
var confColumnID = 39;      // 线上columnId为 39，测试 16
var ajaxTimeout = 10000;    // ajax超时时间
var TagID =1; 
var configkey = 'db53da7c-33f8-46ae-80d5-60fd45c300ff';// 用户培训
// 统计埋点：expert 专家策略appid,strategy 策略appid
var tjAppid = {
    expert: '10163', strategy: '10167', usertraining: '10150'
};

var liveImg = window.gConfig.staticPath + "static/images/video.png";    // 策略副窗缺省图  
var imgplaceholder = window.gConfig.staticPath + "static/images/zhuanjiazixun/placeholder.png";
var imgDefault = window.gConfig.staticPath + "static/images/default-pic.png";
var defaultAvatar = window.gConfig.staticPath + "static/images/defaultavatar.png";
var imgLoading2 = window.gConfig.staticPath + "static/libs/layer/theme/default/loading-2.gif";
var imgLoadings = window.gConfig.staticPath + "static/images/loading.gif";
var defaultAudioImg = window.gConfig.staticPath + "static/images/audioplay_cover.png";
var hasNoLive = window.gConfig.staticPath + "static/images/hasnolive.png";
var videoMediaSDK = window.gConfig.staticPath + "static/htmls/videoMediaSDK.html";   // 媒体播放

var pagerouter = {
    home: window.gConfig.expertBaseUrl + 'page/home',
    liveVideo: window.gConfig.expertBaseUrl + 'page/live_video',
    yaowenArticle: window.gConfig.expertBaseUrl + 'page/yaowen_article',
    yaowenHome: window.gConfig.expertBaseUrl + 'page/yaowen_home',
    yqqHome: window.gConfig.expertBaseUrl + 'page/yqq_home',
    yuceArticle: window.gConfig.expertBaseUrl + 'page/yuce_article',
    zhuanjiacelueHome: window.gConfig.expertBaseUrl + 'page/zhuanjiacelue_home',
    zhuanjiacelueList: window.gConfig.expertBaseUrl + 'page/zhuanjiaceluelist',
    zhuanjiacelueVideo: window.gConfig.expertBaseUrl +"page/zhuanjiacelueVideo",
    zhuanjiacelueArticle: window.gConfig.expertBaseUrl + "page/zhuanjiacelueArticle",
    zhuti: window.gConfig.expertBaseUrl + 'page/zhuti',
    zhutiArticle: window.gConfig.expertBaseUrl + 'page/zhuti_article',
    yqqUserLive: 'http://yqq.emoney.cn/Live/UserLive',
    yqqPage: 'http://yqq.emoney.cn',
    share: window.gConfig.expertBaseUrl + "page/shareArticle",
    celueHome: window.gConfig.expertBaseUrl + "page/celue_home",
    celueArticle: window.gConfig.expertBaseUrl +"page/celuearticle",
    //策略副窗
    celueRightBar: window.gConfig.strategyBaseUrl +"strategyservice/celuelive",
    articleZixun: window.gConfig.myoptUrl + "myoptional/relatedarticle",
    liveVideoOnline: 'http://ds.emoney.cn/Video/live3/playeritemlist',
    celueReading: window.gConfig.strategyBaseUrl + "strategyservice/celuereading",
    celueVideo: window.gConfig.strategyBaseUrl + "strategyservice/celuevideo",
    celueTraining: window.gConfig.strategyBaseUrl + "strategyservice/celuetraining"
}