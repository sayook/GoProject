!function(d,t,h){d(function(){d("input, textarea").placeholder({customClass:"pad-placeholder"})}),function(){var t=d(".tabs-pack");d(">.tabs-nav",t),d(">.tabs-nav + .tabs-cnt",t);t.on("click",">.tabs-nav li",function(){var t=d(this).parent().parent(),e=d("+.tabs-cnt > .tabsitem",t),a=d("li",t).removeClass("active").index(this);d(this).addClass("active"),e.removeClass("active").eq(a).addClass("active")})}(),d.extend({setHomeListScroll:function(){var t=d("#actList");d(".topstar",t)?d(".list-scrollbox",t).height(182-d(".topstar",t).height()):d(".list-scrollbox",t).height(182)},setUserStarsShow:function(t,e,a){var s={tlv:0,glv:0,slv:0},i={tlv:t,glv:e,slv:a};s=d.extend(s,i);var n="starlv";function r(t){var e=parseInt(t);return d.isNumeric(e)?e<0?0:10<e?10:e:0}i={tlv:r(t),glv:r(e),slv:r(a)},d.each(i,function(t,e){n+=" "+t+e}),d("#starlv").attr("class",n)},editUserName:function(i,n){d("#modyUsrname").click(function(){var t=d("a",this),e=d("#editUsrname"),a=d("input",e),s=d("b",e);"[编辑]"===t.text()?(d("#editUsrname").addClass("editing"),a.val(s.text()),t.text("[保存]"),d.isFunction(n)&&i()):(d("#editUsrname").removeClass("editing"),t.text("[编辑]"),s.text(a.val()).attr("title",a.val()),d.isFunction(n)&&n())})},userDecoration:function(t,e){var a,s={},i={wybb:"文娱标兵",hwbs:"好问博士",hddr:"互动达人",gpmz:"高朋满座"},n="",r=d("#userDecorationShow"),c="",o="UYhIKq9uZDecoration"+e,l=null;d.extend(s,t);var v=r.attr("class");function u(t){var e=parseInt(t);return e=isNaN(e)?0:e}n=v,a=d.cookie(o),d.cookie(o,JSON.stringify(s),{expires:365}),a&&(l=JSON.parse(a),d.each(s,function(t,e){l.hasOwnProperty(t)&&u(e)>u(l[t])&&(c+=i[t]+"、")}),c&&h.msg("你获得了新的"+c.slice(0,-1)+"勋章！",{icon:1,anim:1,tipsMore:!0})),d.each(s,function(t,e){var a;a=new RegExp("\\s"+t+"-ud\\d","g"),n=n.replace(a,""),n+=" "+t+"-ud"+e}),r.attr("class",n)},showActities:function(t){var e=d("#showActFrame");d("iframe",e).attr("src",t),e.show()}})}(jQuery,window,layer),$.setHomeListScroll();