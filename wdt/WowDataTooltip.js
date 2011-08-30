/* **************************************************************************
 * The WowDataTooltip plugin handles the display of tooltips for World of
 * Warcraft related data.
 * 
 * Copyright (C) 2011  Martin Gelder
 * (darkspotinthecorner {at} gmail {dot} com)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
 * ************************************************************************** */

// Check if yepnope.js is defined, if not we need to define it
if(!window.yepnope) {
	/*yepnope1.0.2|WTFPL|webkit-fix*/(function(a,b,c){function H(){var a=z;a.loader={load:G,i:0};return a}function G(a,b,c){var e=b=="c"?r:q;i=0,b=b||"j",u(a)?F(e,a,b,this.i++,d,c):(h.splice(this.i++,0,a),h.length==1&&E());return this}function F(a,c,d,g,j,l){function q(){!o&&A(n.readyState)&&(p.r=o=1,!i&&B(),n.onload=n.onreadystatechange=null,e(function(){m.removeChild(n)},0))}var n=b.createElement(a),o=0,p={t:d,s:c,e:l};n.src=n.data=c,!k&&(n.style.display="none"),n.width=n.height="0",a!="object"&&(n.type=d),n.onload=n.onreadystatechange=q,a=="img"?n.onerror=q:a=="script"&&(n.onerror=function(){p.e=p.r=1,E()}),h.splice(g,0,p),m.insertBefore(n,k?null:f),e(function(){o||(m.removeChild(n),p.r=p.e=o=1,B())},z.errorTimeout)}function E(){var a=h.shift();i=1,a?a.t?e(function(){a.t=="c"?D(a):C(a)},0):(a(),B()):i=0}function D(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(o||j)){var g=function(a){e(function(){if(!d)try{((o&&a.sheet!==null)||(j&&a.sheet.cssRules.length))?(d=1,B()):g(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,e(function(){B()},0)):g(a)}},0)};g(c)}else c.onload=function(){d||(d=1,e(function(){B()},0))},a.e&&c.onload();e(function(){d||(d=1,B())},z.errorTimeout),!a.e&&f.parentNode.insertBefore(c,f)}function C(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&A(c.readyState)&&(d=1,B(),c.onload=c.onreadystatechange=null)},e(function(){d||(d=1,B())},z.errorTimeout),a.e?c.onload():f.parentNode.insertBefore(c,f)}function B(){var a=1,b=-1;while(h.length- ++b)if(h[b].s&&!(a=h[b].r))break;a&&E()}function A(a){return!a||a=="loaded"||a=="complete"}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j="MozAppearance"in d.style,k=j&&!!b.createRange().compareNode,l=j&&!k,m=k?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o="webkitAppearance"in d.style,p=o&&"async"in b.createElement("script"),q=j?"object":n||p?"img":"script",r=o?"img":q,s=Array.isArray||function(a){return g.call(a)=="[object Array]"},t=function(a){return Object(a)===a},u=function(a){return typeof a=="string"},v=function(a){return g.call(a)=="[object Function]"},w=[],x={},y,z;z=function(a){function h(a,b){function i(a){if(u(a))g(a,f,b,0,c);else if(t(a))for(h in a)a.hasOwnProperty(h)&&g(a[h],f,b,h,c)}var c=!!a.test,d=c?a.yep:a.nope,e=a.load||a.both,f=a.callback,h;i(d),i(e),a.complete&&b.load(a.complete)}function g(a,b,d,e,g){var h=f(a),i=h.autoCallback;if(!h.bypass){b&&(b=v(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,b,d,e,g);d.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(v(b)||v(i))&&d.load(function(){H(),b&&b(h.origUrl,g,e),i&&i(h.origUrl,g,e)})}}function f(a){var b=a.split("!"),c=w.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=x[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=w[h](f);return f}var b,d,e=this.yepnope.loader;if(u(a))g(a,0,e,0);else if(s(a))for(b=0;b<a.length;b++)d=a[b],u(d)?g(d,0,e,0):s(d)?z(d):t(d)&&h(d,e);else t(a)&&h(a,e)},z.addPrefix=function(a,b){x[a]=b},z.addFilter=function(a){w.push(a)},z.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",y=function(){b.removeEventListener("DOMContentLoaded",y,0),b.readyState="complete"},0)),a.yepnope=H()})(this,this.document)
}

var WowDataTooltip={
	'config':{
		'merged':{},
		'user':window.___WowDataTooltip_Config||{},
		'default':{
			'files':{
				'jquery.js':'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
				'qtip2.js':'qtip2/jquery.qtip.min.js',
				'qtip2.css':'qtip2/jquery.qtip.min.css',
				'wdt.css':'wdt/WowDataTooltip.css',
				'locales':'wdt/locales/'
			},
			'applyTo':{
				'explicit':true,
				'battlenet':true
			},
			'extendedMode':{
				'active':true,
				'keyCode':16,
				'keyCodeLabel':'SHIFT'
			},
			'layout':{
				'position':{
					'my':'bottom middle',
					'at':'top middle',
					'target':false
				},
				'width':{
					'404':300,
					'realm':200,
					'quest':325,
					'item':425,
					'character':325,
					'guild':200,
					'arena':325
				}
			},
			'locales':['de_DE','en_GB','es_ES','es_MX','fr_FR','ko_KR','ru_RU','zh_CN','zh_TW']
		}
	},
	init:function(){
		this.mergeConfig();
		this.attachEventHandlers();
	},
	mergeConfig:function(){
		var cfgu=this.config['user'];
		var cfgm=this.config['default'];
		if(typeof cfgu['files']!=='undefined'){
			if(typeof cfgu['files']['jquery.js']!=='undefined') cfgm['files']['jquery.js']=cfgu['files']['jquery.js'];
			if(typeof cfgu['files']['qtip2.js']!=='undefined') cfgm['files']['qtip2.js']=cfgu['files']['qtip2.js'];
			if(typeof cfgu['files']['qtip2.css']!=='undefined') cfgm['files']['qtip2.css']=cfgu['files']['qtip2.css'];
			if(typeof cfgu['files']['wdt.css']!=='undefined') cfgm['files']['wdt.css']=cfgu['files']['wdt.css'];			
		}
		if(typeof cfgu['applyTo']!=='undefined'){
			if(typeof cfgu['applyTo']['explicit']!=='undefined') cfgm['applyTo']['explicit']=cfgu['applyTo']['explicit'];
			if(typeof cfgu['applyTo']['battlenet']!=='undefined') cfgm['applyTo']['battlenet']=cfgu['applyTo']['battlenet'];
		}
		if(typeof cfgu['extendedMode']!=='undefined'){
			if(typeof cfgu['extendedMode']['active']!=='undefined') cfgm['extendedMode']['active']=cfgu['extendedMode']['active'];
			if(typeof cfgu['extendedMode']['keyCode']!=='undefined') cfgm['extendedMode']['keyCode']=cfgu['extendedMode']['keyCode'];
			if(typeof cfgu['extendedMode']['keyCodeLabel']!=='undefined') cfgm['extendedMode']['keyCodeLabel']=cfgu['extendedMode']['keyCodeLabel'];
		}
		if(typeof cfgu['layout']!=='undefined'){
			if(typeof cfgu['layout']['position']!=='undefined'){
				if(typeof cfgu['layout']['position']['my']!=='undefined') cfgm['layout']['position']['my']=cfgu['layout']['position']['my'];
				if(typeof cfgu['layout']['position']['at']!=='undefined') cfgm['layout']['position']['at']=cfgu['layout']['position']['at'];
				if(typeof cfgu['layout']['position']['target']!=='undefined') cfgm['layout']['position']['target']=cfgu['layout']['position']['target'];
			}
			if(typeof cfgu['layout']['width']!=='undefined'){
				if(typeof cfgu['layout']['width']['404']!=='undefined') cfgm['layout']['width']['404']=cfgu['layout']['width']['404'];
				if(typeof cfgu['layout']['width']['realm']!=='undefined') cfgm['layout']['width']['realm']=cfgu['layout']['width']['realm'];
				if(typeof cfgu['layout']['width']['quest']!=='undefined') cfgm['layout']['width']['quest']=cfgu['layout']['width']['quest'];
				if(typeof cfgu['layout']['width']['item']!=='undefined') cfgm['layout']['width']['item']=cfgu['layout']['width']['item'];
				if(typeof cfgu['layout']['width']['character']!=='undefined') cfgm['layout']['width']['character']=cfgu['layout']['width']['character'];
				if(typeof cfgu['layout']['width']['guild']!=='undefined') cfgm['layout']['width']['guild']=cfgu['layout']['width']['guild'];
				if(typeof cfgu['layout']['width']['arena']!=='undefined') cfgm['layout']['width']['arena']=cfgu['layout']['width']['arena'];
			}
		}
		if(typeof cfgu['locales']!=='undefined'){
			cfgm['locales']=cfgu['locales'];
		}
		this.config['merged']=cfgm;
	},
	addLocale:function(key,data){
		if(typeof this['i18n'][key]==='undefined'){
			this['i18n'][key]=data;
		}
	},
	attachEventHandlers:function(){
		yepnope([{
			test:window.jQuery,
			nope:WowDataTooltip.getSetting(['files','jquery.js']),
			complete:function(){
				if(!window.jQuery.jsonp){
					/* jquery.jsonp 2.1.4 (c)2010 Julian Aubourg | MIT License | http://code.google.com/p/jquery-jsonp/ */
					(function(e,b){function d(){}function t(C){c=[C]}function m(C){f.insertBefore(C,f.firstChild)}function l(E,C,D){return E&&E.apply(C.context||C,D)}function k(C){return/\?/.test(C)?"&":"?"}var n="async",s="charset",q="",A="error",r="_jqjsp",w="on",o=w+"click",p=w+A,a=w+"load",i=w+"readystatechange",z="removeChild",g="<script/>",v="success",y="timeout",x=e.browser,f=e("head")[0]||document.documentElement,u={},j=0,c,h={callback:r,url:location.href};function B(C){C=e.extend({},h,C);var Q=C.complete,E=C.dataFilter,M=C.callbackParameter,R=C.callback,G=C.cache,J=C.pageCache,I=C.charset,D=C.url,L=C.data,P=C.timeout,O,K=0,H=d;C.abort=function(){!K++&&H()};if(l(C.beforeSend,C,[C])===false||K){return C}D=D||q;L=L?((typeof L)=="string"?L:e.param(L,C.traditional)):q;D+=L?(k(D)+L):q;M&&(D+=k(D)+encodeURIComponent(M)+"=?");!G&&!J&&(D+=k(D)+"_"+(new Date()).getTime()+"=");D=D.replace(/=\?(&|$)/,"="+R+"$1");function N(S){!K++&&b(function(){H();J&&(u[D]={s:[S]});E&&(S=E.apply(C,[S]));l(C.success,C,[S,v]);l(Q,C,[C,v])},0)}function F(S){!K++&&b(function(){H();J&&S!=y&&(u[D]=S);l(C.error,C,[C,S]);l(Q,C,[C,S])},0)}J&&(O=u[D])?(O.s?N(O.s[0]):F(O)):b(function(T,S,U){if(!K){U=P>0&&b(function(){F(y)},P);H=function(){U&&clearTimeout(U);T[i]=T[o]=T[a]=T[p]=null;f[z](T);S&&f[z](S)};window[R]=t;T=e(g)[0];T.id=r+j++;if(I){T[s]=I}function V(W){(T[o]||d)();W=c;c=undefined;W?N(W[0]):F(A)}if(x.msie){T.event=o;T.htmlFor=T.id;T[i]=function(){/loaded|complete/.test(T.readyState)&&V()}}else{T[p]=T[a]=V;x.opera?((S=e(g)[0]).text="jQuery('#"+T.id+"')[0]."+p+"()"):T[n]=n}T.src=D;m(T);S&&m(S)}},0);return C}B.setup=function(C){e.extend(h,C)};e.jsonp=B})(jQuery,setTimeout);
				}
				if(!window.jQuery.jqote){
					/* jQote2 - client-side Javascript templating engine | Copyright (C) 2010, aefxx | http://aefxx.com/ | Dual licensed under the WTFPL v2 or MIT (X11) licenses | WTFPL v2 Copyright (C) 2004, Sam Hocevar | Date: Thu, Oct 21st, 2010 | Version: 0.9.7 */
					(function($){var _=false,E1="UndefinedTemplateError",E2="TemplateCompilationError",E3="TemplateExecutionError",A="[object Array]",S="[object String]",F="[object Function]",n=1,c="%",q=/^[^<]*(<[\w\W]+>)[^>]*$/,ts=Object.prototype.toString;function r(e,x){throw ($.extend(e,x),e)}function dns(f) {var a=[];if(ts.call(f)!==A)return _;for(var i=0,l=f.length;i<l;i++)a[i]=f[i].jqote_id;return a.length?a.sort().join('.').replace(/(\b\d+\b)\.(?:\1(\.|$))+/g,"$1$2"):_}function l(s,t){var f,g=[],t=t||c,x=ts.call(s);if(x===F)return s.jqote_id?[s]:_;if(x!==A)return[$.jqotec(s,t)];if(x===A)for(var i=0,l=s.length;i<l;i++)return g.length?g:_}$.fn.extend({jqote:function(x,y){var x=ts.call(x)===A?x:[x],d="";this.each(function(i){var f=$.jqotec(this,y);for(var j=0;j<x.length;j++)d+=f.call(x[j],i,j,x,f)});return d}});$.each({app:"append",pre:"prepend",sub:"html"},function(x,y){$.fn["jqote"+x]=function(e,d,t){var p,r,s=$.jqote(e,d,t),$$=!q.test(s)?function(s){return $(document.createTextNode(s))}:$;if(!!(p=dns(l(e))))r=new RegExp("(^|\\.)"+p.split(".").join("\\.(.*)?")+"(\\.|$)");return this.each(function(){var z=$$(s);$(this)[y](z);(z[0].nodeType===3?$(this):z).trigger("jqote."+x,[z,r])})}});$.extend({jqote:function(e,d,t){var s="",t=t||c,f=l(e);if(f===_)r(new Error("Empty or undefined template passed to $.jqote"),{type:E1});d=ts.call(d)!==A?[d]:d;for(var i=0,m=f.length;i<m;i++)for(var j=0;j<d.length;j++)s+=f[i].call(d[j],i,j,d,f[i]);return s},jqotec:function(x,t){var h,e,y,t=t||c,z=ts.call(x);if(z===S&&q.test(x)){e=y=x;if(h=$.jqotecache[x])return h}else{e=z===S||x.nodeType?$(x):x instanceof jQuery?x:null;if(!e[0]||!(y=e[0].innerHTML)&&!(y=e.text()))r(new Error("Empty or undefined template passed to $.jqotec"),{type:E1});if(h=$.jqotecache[$.data(e[0],"jqote_id")])return h}var s="",i,a=y.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g,"").split("<"+t).join(t+">\x1b").split(t+">");for(var m=0,k=a.length;m<k;m++)s+=a[m].charAt(0)!=="\x1b"?"out+='"+a[m].replace(/(\\|["'])/g,"\\$1")+"'":(a[m].charAt(1)==="="?";out+=("+a[m].substr(2)+");":(a[m].charAt(1)==="!"?";out+=$.jqotenc(("+a[m].substr(2)+"));":";"+a[m].substr(1)));s="try{"+('var out="";'+s+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=")+'}catch(e){e.type="'+E3+'";e.args=arguments;e.template=arguments.callee.toString();throw e;}';try{var f=new Function("i, j, data, fn",s)}catch(e){r(e,{type:E2})}i=e instanceof jQuery?$.data(e[0],"jqote_id",n):e;return $.jqotecache[i]=(f.jqote_id=n++,f)},jqotefn:function(e){var t=ts.call(e),i=t===S&&q.test(e)?e:$.data($(e)[0],"jqote_id");return $.jqotecache[i]||_},jqotetag:function(s){if(ts.call(s)===S)c=s},jqotenc:function(s){return s.toString().replace(/&(?!\w+;)/g,'&#38;').split('<').join('&#60;').split('>').join('&#62;').split('"').join('&#34;').split("'").join('&#39;')},jqotecache:{}});$.event.special.jqote={add:function(o){var n,h=o.handler,d=!o.data?[]:ts.call(o.data)!==A?[o.data]:o.data;if(!o.namespace)o.namespace="app.pre.sub";if(!d.length||!(n=dns(l(d))))return;o.handler=function(e,m,r){return !r||r.test(n)?h.apply(this,[e,m]):null}}}})(jQuery);
				}
				var addfiles=[
					WowDataTooltip.getSetting(['files','qtip2.js']),
					WowDataTooltip.getSetting(['files','qtip2.css']),
					WowDataTooltip.getSetting(['files','wdt.css'])
				];
				var addlocs=WowDataTooltip.getSetting(['locales']);
				if(addlocs){
					for(var i=0;i<addlocs.length;i++){
						addfiles.push(WowDataTooltip.getSetting(['files','locales'])+addlocs[i]+'.js');
					}
				}
				yepnope({
					test:jQuery.qtip,
					nope:addfiles,	
					complete:function(){
						jQuery(function(){
							if(WowDataTooltip.getSetting(['extendedMode','active'])){
								jQuery(document).keydown(function(event){
									if(event.keyCode==WowDataTooltip.getSetting(['extendedMode','keyCode'])){
										jQuery('body').addClass('wdt-show-extended');
										WowDataTooltip.repositionActiveTooltips();
									}
								});
								jQuery(document).keyup(function(event){
									if(event.keyCode==WowDataTooltip.getSetting(['extendedMode','keyCode'])){
										jQuery('body').removeClass('wdt-show-extended');
										WowDataTooltip.repositionActiveTooltips();
									}
								});
							}
							if(WowDataTooltip.getSetting(['applyTo','explicit'])){
								jQuery('[data-wowdatatooltip]').live('mouseover',function(){
									WowDataTooltip.handleHover('explicit',this);
								});
							}
							if(WowDataTooltip.getSetting(['applyTo','battlenet'])){
								jQuery('a[href]').live('mouseover',function(){
									WowDataTooltip.handleHover('battlenet',this);
								});
							}
						});
					}
				});
			}
		}]);
	},
	repositionActiveTooltips:function(){
		for(var i=0;i<this.activeTooltips.length;i++){
			jQuery('#ui-tooltip-'+this.activeTooltips[i]).qtip('reposition');
		}
	},
	handleHover:function(type,element){
		if(typeof jQuery(element).data('qtip')==='object'){
			jQuery(element).qtip('show');
		}else{
			if(typeof this['maps']['type2schemes'][type]!=='undefined'){
				for(var i=0;i<this['maps']['type2schemes'][type].length;i++){
					this.checkAndInit(type,this['maps']['type2schemes'][type][i],element);
				}
			}
		}
	},
	checkAndInit:function(type,scheme,element){
		if(typeof jQuery(element).data('qtip')==='object'){
			jQuery(element).qtip('show');
		}else{
			if(type==='explicit'){
				var testme=new String(jQuery(element).data('wowdatatooltip'));
			}
			if(type==='battlenet'){
				var testme=new String(jQuery(element).attr('href'));
			}
			var result=testme.match(this['patterns'][type][scheme]);
			if(result){
				var params=this.getParamsForPattern(type,scheme,result);
				if(!params['region']&&params['host']){
					params['region']=this.getRegionFromHost(params['host']);
				}
				if(!params['host']&&params['region']){
					params['host']=this.getHostFromRegion(params['region']);
				}
				params['locale']=this.getLocaleFromRegionLang(params['region'],params['lang']);
				apicall=jQuery.jqote(this['patterns']['api'][scheme],params);
				hash=jQuery.jqote(this['patterns']['hash'][scheme],params);
				content=this.getFromCache('template',scheme,hash);
				if(content!==false){
					this.addTip(element,content,WowDataTooltip.getSetting(['layout','width',scheme]));
				}else{
					this.addTip(element,this.localize(this.getLocaleData(params['locale']),('loading-'+scheme)),WowDataTooltip.getSetting(['layout','width',scheme]));
					jQuery.jsonp({
						url:apicall,
						callbackParameter:'jsonp',
						success:function(data){
							WowDataTooltip.buildTooltip(scheme,params,element,data);
						},
						error:function(options){
							WowDataTooltip.buildTooltip(scheme,params,element);
						}
					});
				}
			}
		}
	},
	getParamsForPattern:function(type,scheme,result){
		var params={};
		var map=this['maps']['pattern2params'][type][scheme];
		for(var p in map){
			params[map[p]]=result[p];
		}
		return params;
	},
	addTip:function(element,tipcontent,width){
		if(typeof width==='undefined'){
			width=300;
		}
		jQuery(element).qtip({
			'overwrite':false,
			'show':{
				'ready':true
			},
			'events':{
				'render':function(event,api){
					var tooltip=api.elements.tooltip;
					tooltip.bind('tooltipshow',function(event,api){WowDataTooltip.addToActiveTooltips(api.id);});
					tooltip.bind('tooltiphide',function(event,api){WowDataTooltip.removeFromActiveTooltips(api.id);});
				},
			},
			'content':{
				'text':tipcontent
			},
			'position':{
				'my':this.getSetting(['layout','position','my']),
				'at':this.getSetting(['layout','position','at']),
				'target':this.getSetting(['layout','position','target']),
				'viewport':jQuery(window),
				'effect':false
			},
			'hide':'mouseout',
			'style':{
				'width':width+'px',
				'classes':'wdt-tooltip ui-tooltip-cluetip'
			}
		});
	},
	buildTooltip:function(scheme,params,element,data){
		var content='';
		var loc=this.getLocaleData(params['locale']);
		var mediahost=this.getMediahostFromRegion(params['region']);
		var add={
			'path_host':'http://'+params['host'],
			'path_host_media':'http://'+mediahost,
			'region':params['region']
		};
		var validated=this.validateData(scheme,data);
		if(validated){
			jQuery(element).qtip('api').set('style.width',WowDataTooltip.getSetting(['layout','width',scheme]));
			content=jQuery.jqote(
				this.getTemplate('core',scheme),
				jQuery.extend(true,{},this.getTemplateTools(loc),validated,add)
			);
		}else{
			jQuery(element).qtip('api').set('style.width',WowDataTooltip.getSetting(['layout','width','404']));
			content=jQuery.jqote(
				this.getTemplate('core',(scheme+'-404')),
				jQuery.extend(true,{},this.getTemplateTools(loc),params,add)
			);
		}
		jQuery(element).qtip('api').set('content.text',content);
		WowDataTooltip.addToCache('template',scheme,hash,content);
	},
	validateData:function(scheme,data){
		if(data===undefined){
			return false;
		}
		if(scheme==='realm'){
			if(data['realms'].length===1){
				return data['realms'][0];
			}
			return false;
		}
		return data;
	},
	addToActiveTooltips:function(id){
		var found=false;
		for(var i=0;i<this.activeTooltips.length;i++){
			if(this.activeTooltips[i]===id){
				found=true;
			}
		}
		if(found===false){
			this.activeTooltips.push(id);
		}
	},
	removeFromActiveTooltips:function(id){
		var found=false;
		for(var i=0;i<this.activeTooltips.length;i++){
			if(this.activeTooltips[i]===id){
				found=i;
			}
		}
		if(found!==false){
			this.activeTooltips.splice(i,1);
		}
	},
	getLocaleData:function(locale){
		if(typeof this['i18n'][locale]==='object'){
			var loc=this['i18n'][locale];
			if((typeof loc['meta']['redirect']==='string')&&(typeof this['i18n'][loc['meta']['redirect']]==='object')){
				var loc=this['i18n'][loc['meta']['redirect']];
			}
		}else{
			var loc=this['i18n']['en_US'];
		}
		return loc;
	},
	getTemplate:function(template,type){
		if(typeof this['templates'][template]==='undefined'){
			return 'Template "'+template+'" not found!';
		}
		if(typeof this['templates'][template][type]==='undefined'){
			return 'Type "'+type+'" not found in template "'+template+'"!';
		}
		return this['templates'][template][type];
	},
	getSetting:function(route){
		var temp=this['config']['merged'];
		var result=undefined;
		if(typeof route==='string'){
			route=[route];
		}
		for(var i=0;i<route.length;i++){
			if(typeof temp[route[i]]==='undefined'){
				break;
			}else{
				temp=temp[route[i]];
				result=temp;
			}
		}
		return result;
	},
	localize:function(repository,keys){
		var crep=repository;
		var temp=crep;
		var result=undefined;
		if(typeof keys==='string'){
			keys=[keys];
		}
		for(var i=0;i<keys.length;i++){
			if(typeof temp[keys[i]]==='undefined'){
				if(typeof temp==='object'){
					result=undefined;
				}
				break;
			}else{
				temp=temp[keys[i]];
				result=temp;
			}
		}
		if((result===undefined)&&(typeof crep['meta']['fallback']!=='undefined')){
			var crep=this.getLocaleData(crep['meta']['fallback']);
			var temp=crep;
			for(var i=0;i<keys.length;i++){
				if(typeof temp[keys[i]]==='undefined'){
					if(typeof temp==='object'){
						result=undefined;
					}
					break;
				}else{
					temp=temp[keys[i]];
					result=temp;
				}
			}
		}
		if((result===undefined)&&(crep['meta']['locale']!=='en_US')){
			var crep=this.getLocaleData('en_US');
			var temp=crep;
			for(var i=0;i<keys.length;i++){
				if(typeof temp[keys[i]]==='undefined'){
					if(typeof temp==='object'){
						result=undefined;
					}
					break;
				}else{
					temp=temp[keys[i]];
					result=temp;
				}
			}
		}
		return result||'';
	},
	getTemplateTools:function(loc){
		return{
			'extendedActive':this.getSetting(['extendedMode','active']),
			'extendedKeyCodeLabel':this.getSetting(['extendedMode','keyCodeLabel']),
			'_sub':function(template,data){
				return jQuery.jqote(
					WowDataTooltip.getTemplate('fragments',template),
					jQuery.extend(true,{},WowDataTooltip.getTemplateTools(loc),data)
				);
			},
			'_subLoc':function(route,data){
				if(typeof route==='string'){
					route=[route];
				}
				route.unshift('templates');
				return jQuery.jqote(
					WowDataTooltip.localize(loc,route),
					jQuery.extend(true,{},WowDataTooltip.getTemplateTools(loc),data)
				);
			},
			'_loc':function(route){
				return WowDataTooltip.localize(loc,route);
			},
			'_renderCoins':function(total){
				var temp=total.toString();
				var result=temp.match(WowDataTooltip['patterns']['helper']['money']);
				var split={'gold':-1,'silver':-1,'copper':0};
				if(result){
					if(result[3]!==undefined){
						split={'gold':parseInt(result[1]),'silver':parseInt(result[2]),'copper':parseInt(result[3])};
					}else if(result[5]!==undefined){
						split={'gold':-1,'silver':parseInt(result[4]),'copper':parseInt(result[5])};
					}else{
						split={'gold':-1,'silver':-1,'copper':parseInt(result[6])};
					}
				}
				return jQuery.jqote(WowDataTooltip.getTemplate('fragments','coins'),split);
			},
		};
	},
	addToCache:function(type,scheme,hash,content){
		this['cache'][type][scheme][hash]=content;
		return true;
	},
	getFromCache:function(type,scheme,hash){
		if(typeof this['cache'][type]==='undefined'){
			this['cache'][type]={};
			return false;
		}
		if(typeof this['cache'][type][scheme]==='undefined'){
			this['cache'][type][scheme]={};
			return false;
		}
		if(typeof this['cache'][type][scheme][hash]!=='undefined'){
			return this['cache'][type][scheme][hash];
		}
		return false;
	},
	getHostFromRegion:function(region){
		if(typeof this['maps']['region2host'][region]!=='undefined'){
			return(this['maps']['region2host'][region]);
		}
		return '';
	},
	getRegionFromHost:function(host){
		for(var i in this['maps']['region2host']){
			if(this['maps']['region2host'][i]===host){
				return i;
			}
		}
		return '';
	},
	getMediahostFromRegion:function(region){
		if(typeof this['maps']['region2mediahost'][region]==='undefined'){
			return '';
		}else{
			return this['maps']['region2mediahost'][region];
		}
	},
	getLocaleFromRegionLang:function(region,lang){
		if(typeof this['maps']['regionlang2locale'][region]==='undefined'){
			return 'en_US';
		}else{
			if(typeof this['maps']['regionlang2locale'][region][lang]==='undefined'){
				return 'en_US';
			}else{
				return this['maps']['regionlang2locale'][region][lang];
			}
		}
	},
	'templates':{
		'core':{
			'realm':(
				'<div class="tooltip-realm">' +
					'<div class="type crealmtype-<%= this["type"] %>"><%= this._loc(["realmType", this["type"]]) %></div>' +
					'<div class="row name"><%= this["name"] %></div>' +
					'<div class="row battlegroup"><%= this["battlegroup"] %></div>' +
					'<div class="row status"><span class="crealmstatus-<%= this["status"] %>"><%= this._loc(["realmStatus", this["status"]]) %></span><% if(this["queue"]) { %> (<span class="crealmqueue-<%= this["queue"] %>"><%= this._loc(["realmQueue", this["queue"]]) %></span>)<% } %></div>' +
					'<div class="row population"><%= this._loc(["realmPopulation", this["population"]]) %></div>' +
				'</div>'				
			),
			'realm-404':(
				'<div class="tooltip-realm tooltip-404">' +
					'<div class="title">404<span class="sub"> / <%= this._loc("realm-not-found") %></span></div>' +
					'<div class="row realm"><span class="label"><%= this._loc("label-realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
					'<div class="row region"><span class="label"><%= this._loc("label-region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			    '</div>'
			),
			'quest':(
				'<div class="tooltip-quest">' +
					'<div class="row level"><%= this["level"] %></div>' +
					'<div class="row name"><%= this["title"] %></div>' +
					'<div class="row category"><%= this["category"] %></div>' +
					'<div class="row reqLevel"><%= this._subLoc(["quest","reqLevel"], this) %></div>' +
					'<% if(this["suggestedPartyMembers"] > 1) { %><%= this._subLoc(["quest","suggestedPartyMembers"], this) %><% } %>' +
				'</div>'				
			),
			'quest-404':(
				'<div class="tooltip-quest tooltip-404">' +
					'<div class="title">404<span class="sub"> / <%= this._loc("quest-not-found") %></span></div>' +
					'<div class="row quest"><span class="label"><%= this._loc("label-quest") %></span> <span class="value"><%= this["questid"] %></span></div>' +
					'<div class="row region"><span class="label"><%= this._loc("label-region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			    '</div>'
			),
			'item':(
				'<div class="tooltip-item">' +
		    		'<img class="icon" src="<%= this["path_host_media"] %>/wow/icons/56/<% if(this["icon"]) { %><%= this["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
			    	 // --- START simple mode -----------------------------------
					'<div class="data wdt-show-only-simple">' +
						'<div class="row name cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
						'<% if(this["heroic"]) { %><div class="row heroic"><%= this._subLoc(["item","heroic"], this) %></div><% } %>' +
						'<% if(this["boundZone"]) { %><div class="row boundZone"><%= this["boundZone"]["name"] %></div><% } %>' +
						'<% if(this["itemBind"]) { %><div class="row itemBind"><%= this._loc(["itemBind", this["itemBind"]]) %></div><% } %>' +
						'<% if(this["maxCount"]) { %><div class="row maxCount"><%= this._subLoc(["item","maxCount"], this) %></div><% } %>' +
						'<div class="row classification">' +
							'<% if(this["containerSlots"]) { %>' +
								'<div class="itemClass"><%= this._subLoc(["item","containerSlots"], this) %></div>' +
							'<% } else { %>' +
								'<% if(this["equippable"]) { %><div class="inventoryType"><%= this._loc(["inventoryType", this["inventoryType"]]) %></div><% } %>' +
								'<div class="itemClass"><%= this._loc(["itemClass", this["itemClass"], this["itemSubClass"]]) %></div>' +
							'<% } %>' +
						'</div>' +
						'<% if(this["baseArmor"]) { %><div class="row baseArmor"><%= this._subLoc(["item","baseArmor"], this) %></div><% } %>' +
						'<% if(this["weaponInfo"]) { %>' +
							'<div class="weaponInfo">' +
								'<% if(this["weaponInfo"]["damage"]) { for(var i=0; i<this["weaponInfo"]["damage"].length; i++) { var current = this["weaponInfo"]["damage"][i]; %><div class="row damage"><%= this._subLoc(["item","damage"], current) %></div><% } } %>' +
								'<div class="weaponSpeed"><%= this._subLoc(["item","weaponSpeed"], this["weaponInfo"]) %></div>' +
								'<div class="row dps"><%= this._subLoc(["item","dps"], this["weaponInfo"]) %></div>' +
							'</div>' +
						'<% } %>' +
						'<% if(this["bonusStats"]) { for(var i=0; i<this["bonusStats"].length; i++) { var current = this["bonusStats"][i]; if(current["stat"] in WowDataTooltip["maps"]["item"]["primaryStats"]) { %><div class="row primaryStat"><% if(current["amount"] >= 0) { %>+<% } %><%= current["amount"] %> <%= this._loc(["itemStat", current["stat"]]) %></div><% } } } %>' +
						'<% if(this["gemInfo"]) { %><div class="row gemInfo"><%= this["gemInfo"]["bonus"]["name"] %></div><% } %>' +
						'<% if(this["socketInfo"]) { %><div class="socketInfo"><% if(this["socketInfo"]["sockets"]) { for(var i=0; i<this["socketInfo"]["sockets"].length; i++) { var current = this["socketInfo"]["sockets"][i]; %><div class="row socket"><span class="icon-socket socket-<%= current["type"] %>"><span class="empty"></span><span class="frame"></span></span> <%= this._loc(["itemSocket", current["type"]]) %></div><% } } %></div><% } %>' +
						'<% if(this["maxDurability"]) { %><div class="row maxDurability"><%= this._subLoc(["item","maxDurability"], this) %></div><% } %>' +
						'<% if(this["allowableClasses"]) { %><div class="row allowableClasses"><%= this._subLoc(["item","allowableClasses"], this) %></div><% } %>' +
						'<% if(this["allowableRaces"]) { %><div class="row allowableRaces"><%= this._subLoc(["item","allowableRaces"], this) %></div><% } %>' +
						'<% if(this["requiredLevel"]) { %><div class="row requiredLevel"><%= this._subLoc(["item","requiredLevel"], this) %></div><% } %>' +
						'<% if(this["requiredSkill"]) { %><div class="row requiredSkill"><%= this._subLoc(["item","requiredSkill"], this) %></div><% } %>' +
						'<% if(this["requiredAbility"]) { %><div class="row requiredAbility"><%= this._subLoc(["item","requiredAbility"], this) %></div><% } %>' +
						'<% if(this["minFactionId"]) { %><div class="row minFactionId"><%= this._subLoc(["item","minFactionId"], this) %></div><% } %>' +
						'<% if(this["itemLevel"]) { %><div class="row itemLevel"><%= this._subLoc(["item","itemLevel"], this) %></div><% } %>' +
						'<% if(this["bonusStats"]) { for(var i=0; i<this["bonusStats"].length; i++) { var current = this["bonusStats"][i]; if(current["stat"] in WowDataTooltip["maps"]["item"]["secondaryStats"]) { %><div class="row secondaryStat"><%= this._subLoc(["item","itemStat",current["stat"]], current) %></div><% } } } %>' +
						'<% if(this["itemSpells"]) { for(var i=0; i<this["itemSpells"].length; i++) { var current = this["itemSpells"][i]; if(current["spell"]["description"]) { %><div class="row secondaryStat"><%= this._subLoc(["item","itemSpell"], current) %></div><% } } } %>' +
						'<% if(this["description"]) { %><div class="row description">&quot;<%= this["description"] %>&quot;</div><% } %>' +
				    	'<% if(this["extendedActive"]) { %><div class="row info-meta"><%= this._subLoc(["item","extendedInactive"], this) %></div><% } %>' +
					'</div>' +
					// --- END simple mode -------------------------------------
					// --- START extended mode ---------------------------------
				    '<% if(this["extendedActive"]) { %>' +
						'<div class="data wdt-show-only-extended">' +
							'<div class="row name cquality-<%= this["quality"] %>"><%= this["name"] %></div>' +
							'<div class="row id"><%= this._subLoc(["item","itemId"], this) %></div>' +
							'<% if(this["stackable"] > 1) { %><div class="row stackable"><%= this._subLoc(["item","stackable"], this) %></div><% } %>' +
							// itemSource, maybe...
							'<div class="row sellPrice"><%= this._subLoc(["item","sellPrice"], this) %></div>' +
							'<% if(this["isAuctionable"]) { %><div class="row isAuctionable"><%= this._loc("itemIsAuctionable") %></div><% } %>' +
							'<div class="row info-meta"><%= this._subLoc(["item","extendedActive"], this) %></div>' +
				    	'</div>' +
			    	'<% } %>' +
					// --- END extended mode -----------------------------------
				'</div>'
			),
			'item-404':(
				'<div class="tooltip-item tooltip-404">' +
					'<div class="title">404<span class="sub"> / <%= this._loc("item-not-found") %></span></div>' +
					'<div class="row item"><span class="label"><%= this._loc("label-item") %></span> <span class="value"><%= this["itemid"] %></span></div>' +
					'<div class="row region"><span class="label"><%= this._loc("label-region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			    '</div>'
			),
			'character':(
				'<div class="tooltip-character">' +
			    	'<img class="thumbnail" src="<%= this["path_host"] %>/static-render/<%= this["region"] %>/<%= this["thumbnail"] %>?alt=/wow/static/images/2d/avatar/<%= this["race"] %>-<%= this["gender"] %>.jpg" />' +
			    	 /* --- START simple mode -------------------------------- */
					'<div class="data wdt-show-only-simple">' +
			    		'<div class="row name cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
			    		'<div class="row sri"><%= this._subLoc(["character","sri"], this) %></div>' +
						'<% if(this["talents"]) { for(var i=0; i<this["talents"].length; i++) { var current = this["talents"][i]; %><div class="row talentspec <% if(current["selected"]) { %> active<% } %>"><img class="icon-talentspec" src="<%= this["path_host_media"] %>/wow/icons/18/<% if(current["icon"]) { %><%= current["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> <% if(current["name"]) { %><%= current["name"] %><% } else { %><%= this._loc("unused") %><% } %></div><% } } %>' +
						'<% if(this["guild"]) { %><div class="row guild"><div class="guildname">&lt;<%= this["guild"]["name"] %>&gt;<% if(this["guild"]["level"]) { %><span class="guildlevel"> (<%= this["guild"]["level"] %>)</span><% } %></div></div><% } %>' +
						'<div class="row realm"><%= this["realm"] %></div>' +
						'<div class="row achievementpoints"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
				    	'<% if(this["extendedActive"]) { %><div class="row info-meta"><%= this._subLoc(["character","extendedInactive"], this) %></div><% } %>' +
			    	'</div>' +
					 /* --- END simple mode ---------------------------------- */
					 /* --- START extended mode ------------------------------ */
				    '<% if(this["extendedActive"]) { %>' +
						'<div class="data wdt-show-only-extended">' +
				    		'<div class="row name cclass-<%= this["class"] %>"><%= this["name"] %></div>' +
							'<% if(this["items"]) { %><div class="row itemlevel"><%= this._subLoc(["character","ilvl"], this["items"]) %></div><% } %>' +
							'<% if(this["professions"]) { %><div class="professions">' +
								'<% if(this["professions"]["primary"]) { for(var i=0; i<this["professions"]["primary"].length; i++) { var current = this["professions"]["primary"][i]; if(current["rank"] > 0) { %><div class="row profession-primary"><img class="icon-profession" src="<%= this["path_host_media"] %>/wow/icons/18/<% if(current["icon"]) { %><%= current["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> <%= current["name"] %>: <%= current["rank"] %></div><% } } } %>' +
								'<% if(this["professions"]["secondary"]) { for(var i=0; i<this["professions"]["secondary"].length; i++) { var current = this["professions"]["secondary"][i]; if(current["rank"] > 0) { %><div class="row profession-secondary"><img class="icon-profession" src="<%= this["path_host_media"] %>/wow/icons/18/<% if(current["icon"]) { %><%= current["icon"] %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> <%= current["name"] %>: <%= current["rank"] %></div><% } } } %>' +
							'</div><% } %>' +
							'<% if(this["mounts"]) { %><div class="row mounts"><%= this._subLoc(["character","mounts"], this) %></div><% } %>' +
							'<% if(this["companions"]) { %><div class="row companions"><%= this._subLoc(["character","companions"], this) %></div><% } %>' +
							'<div class="row info-meta"><%= this._subLoc(["character","extendedActive"], this) %></div>' +
				    	'</div>' +
			    	'<% } %>' +
					 /* --- END extended mode -------------------------------- */
			    '</div>'
			),
			'character-404':(
				'<div class="tooltip-character tooltip-404">' +
					'<div class="title">404<span class="sub"> / <%= this._loc("character-not-found") %></span></div>' +
					'<div class="row character"><span class="label"><%= this._loc("label-character") %></span> <span class="value"><%= this["character"] %></span></div>' +
					'<div class="row realm"><span class="label"><%= this._loc("label-realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
					'<div class="row region"><span class="label"><%= this._loc("label-region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			    '</div>'
			),
			'guild':(
				'<div class="tooltip-guild">' +
	    			'<div class="row name cside-<%= this["side"] %>"><%= this["name"] %></div>' +
		    		'<div class="row sri"><%= this._subLoc(["guild","sri"], this) %></div>' +
					'<% if(this["members"]) { %><div class="guild-members"><%= this._subLoc(["guild","members"], this) %></div><% } %>' +
					'<div class="row achievementpoints"><span class="icon-achievenemtpoints"><%= this["achievementPoints"] %></span></div>' +
				'</div>'
			),
			'guild-404':(
				'<div class="tooltip-guild tooltip-404">' +
					'<div class="title">404<span class="sub"> / <%= this._loc("guild-not-found") %></span></div>' +
					'<div class="row guild"><span class="label"><%= this._loc("label-guild") %></span> <span class="value"><%= this["guild"] %></span></div>' +
					'<div class="row realm"><span class="label"><%= this._loc("label-realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
					'<div class="row region"><span class="label"><%= this._loc("label-region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			    '</div>'
			),
			'arena':(
				/* --- Extended mode is inline to avoid duplicate content --- */
				'<div class="tooltip-arena">' +
					'<div class="rank-current"><%= this._subLoc(["arena","rank-current"], this) %></div>' +
					'<div class="row name cside-<%= this["side"] %>"><%= this["name"] %></div>' +
					'<% if(this["extendedActive"]) { %><div class="row view-mode wdt-show-only-extended"><%= this._loc("view-mode-arena-current") %></div><% } %>' +
					'<div class="row view-mode wdt-show-only-simple"><%= this._loc("view-mode-arena-season") %></div>' +
					'<div class="row sri"><%= this._subLoc(["arena","sri"], this) %></div>' +
					'<div class="row rank-previous"><%= this._subLoc(["arena","rank-previous"], this) %></div>' +
					'<div class="row rating-team"><%= this._subLoc(["arena","rating-team"], this) %></div>' +
					'<% if(this["extendedActive"]) { %><div class="row matches wdt-show-only-extended"><%= this._subLoc(["arena","matches-current"], this) %></div><% } %>' +
					'<div class="row matches wdt-show-only-simple"><%= this._subLoc(["arena","matches-season"], this) %></div>' +
					'<% if(this["members"]) { %><div class="members"><% for(var i=0; i<this["members"].length; i++) { var current = this["members"][i]; %>' +
					'<div class="row member<% if(i % 2 == 0) { %> alt<% } %>">' +
							'<% if(this["extendedActive"]) { %><div class="matches wdt-show-only-extended"><%= this._subLoc(["arena","matches-current-short"], current) %></div><% } %>' +
							'<div class="matches wdt-show-only-simple"><%= this._subLoc(["arena","matches-season-short"], current) %></div>' +
							'<img src="<%= this["path_host_media"] %>/wow/icons/18/race_<%= current["character"]["race"] %>_<%= current["character"]["gender"] %>.jpg" /> ' +
							'<img src="<%= this["path_host_media"] %>/wow/icons/18/class_<%= current["character"]["class"] %>.jpg" /> ' +
							'<span class="cclass-<%= current["character"]["class"] %><% if(current["rank"]==0) { %> icon-leader-pvp<% } %>"><%= current["character"]["name"] %></span> <span class="rating-personal">(<%= current["personalRating"] %>)</span>' +
						'</div>' +
					'<% } %></div><% } %>' +
					'<% if(this["extendedActive"]) { %><div class="row info-meta wdt-show-only-extended"><%= this._subLoc(["arena","extendedActive"], this) %></div><% } %>' +
					'<% if(this["extendedActive"]) { %><div class="row info-meta wdt-show-only-simple"><%= this._subLoc(["arena","extendedInactive"], this) %></div><% } %>' +
				'</div>'
			),
			'arena-404':(
				'<div class="tooltip-arena tooltip-404">' +
					'<div class="title">404<span class="sub"> / <%= this._loc("arena-not-found") %></span></div>' +
					'<div class="row teamname"><span class="label"><%= this._loc("label-teamname") %></span> <span class="value"><%= this["teamname"] %></span></div>' +
					'<div class="row teamsize"><span class="label"><%= this._loc("label-teamsize") %></span> <span class="value"><%= this["teamsize"] %></span></div>' +
					'<div class="row realm"><span class="label"><%= this._loc("label-realm") %></span> <span class="value"><%= this["realm"] %></span></div>' +
					'<div class="row region"><span class="label"><%= this._loc("label-region") %></span> <span class="value"><%= this["region"] %></span></div>' +
			    '</div>'
			)
		},
		'fragments':{
			'coins':(
				'<% if(this["gold"] > -1) { %><span class="icon-gold"><%= this["gold"] %></span><% } %>' +
				'<% if(this["silver"] > -1) { %><span class="icon-silver"><%= this["silver"] %></span><% } %>' +
				'<% if(this["copper"]) { %><span class="icon-copper"><%= this["copper"] %></span><% } else { %>' +
				'<span class="icon-copper">0</span><% } %>'
			)
		}
	},
	'i18n':{
		'en_US':{
			'meta':{'locale':'en_US'},
			'templates':{
				'quest':{
					'reqLevel':'Requires Level <%= this["reqLevel"] %>',
					'suggestedPartyMembers':'Group Quest (<%= this["suggestedPartyMembers"] %>)'
				},
				'item':{
					'itemId':'Item ID: <%= this["id"] %>',
					'heroic':'Heroic',
					'maxCount':'Unique<% if(this["maxCount"] > 1) { %> (<%= this["maxCount"] %>)<% } %>',
					'containerSlots':'<%= this["containerSlots"] %> Slot <%= this._loc(["itemClass", this["itemClass"], this["itemSubClass"]]) %>',
					'damage':'<%= this["minDamage"] %> - <%= this["maxDamage"] %> Damage',
					'weaponSpeed':'Speed <%= this["weaponSpeed"] %>',
					'dps':'(<%= this["dps"].toFixed(2) %> damage per second)',
					'baseArmor':'<%= this["baseArmor"] %> Armor',
					'maxDurability':'Durability <%= this["maxDurability"] %> / <%= this["maxDurability"] %>',
					'requiredLevel':'Requires Level <%= this["requiredLevel"] %>',
					'requiredSkill':'Requires <%= this._loc(["characterSkill", this["requiredSkill"]]) %> (<%= this["requiredSkillRank"] %>)',
					'requiredAbility':'Requires <%= this["requiredAbility"]["name"] %>',
					'minFactionId':'Requires Faction ID <%= this["minFactionId"] %> - <%= this._loc(["reputationLevel", this["minReputation"]]) %>',
					'itemLevel':'Item Level <%= this["itemLevel"] %>',
					'allowableClasses':'Classes: <% for(var i=0; i<this["allowableClasses"].length; i++) { var current = this["allowableClasses"][i]; %><% if(i > 0) { %>, <% } %><span class="cclass-<%= current %>"><%= this._loc(["characterClass", current])%></span><% } %>',
					'allowableRaces':'Races: <% for(var i=0; i<this["allowableRaces"].length; i++) { var current = this["allowableRaces"][i]; %><% if(i > 0) { %>, <% } %><span><%= this._loc(["characterRace", current])%></span><% } %>',
					'itemStat':{
						'13':'Equip: Increases your dodge rating by <%= this["amount"] %>.',
						'14':'Equip: Increases your parry rating by <%= this["amount"] %>.',
						'31':'Equip: Increases your hit rating by <%= this["amount"] %>.',
						'32':'Equip: Increases your critical strike rating by <%= this["amount"] %>.',
						'35':'Equip: Increases your resilience rating by <%= this["amount"] %>.',
						'36':'Equip: Increases your haste rating by <%= this["amount"] %>.',
						'37':'Equip: Increases your expertise rating by <%= this["amount"] %>.',
						'38':'Equip: Increases your attack power by <%= this["amount"] %>.',
						'46':'Equip: Increases your health regeneration by <%= this["amount"] %>.',
						'45':'Equip: Increases spell power by <%= this["amount"] %>.',
						'47':'Equip: Increases spell penetration by <%= this["amount"] %>.',
						'49':'Equip: Increases your mastery rating by <%= this["amount"] %>.'
					},
					'itemSpell':'Equip / Use / Chance on Hit: <%= this["spell"]["description"] %>',
					'sellPrice':'Sell Price: <%= this._renderCoins(this["sellPrice"]) %>',
					'stackable':'Stackable (<%= this["stackable"] %>)',
					'extendedInactive':'Hold [<%= this["extendedKeyCodeLabel"] %>] to switch modes!',
					'extendedActive':'Release [<%= this["extendedKeyCodeLabel"] %>] to switch modes!'
				},
				'character':{
					'sri':'<%= this["level"] %> <%= this._loc(["characterRace", this["race"]]) %> <%= this._loc(["characterClass", this["class"]]) %>',
					'ilvl':'<%= this["averageItemLevelEquipped"] %> average item level (<%= this["averageItemLevel"] %>)',
					'mounts':'Mounts: <%= this["mounts"].length %>',
					'companions':'Companions: <%= this["companions"].length %>',
					'extendedInactive':'Hold [<%= this["extendedKeyCodeLabel"] %>] to switch modes!',
					'extendedActive':'Release [<%= this["extendedKeyCodeLabel"] %>] to switch modes!'
				},
				'guild':{
					'sri':'Level <%= this["level"] %> <%= this._loc(["factionSide", this["side"]]) %> Guild, <%= this["realm"] %>',
					'members':'<%= this["members"].length %> members'
				},
				'arena':{
					'sri':'<%= this["teamsize"] %>v<%= this["teamsize"] %> <%= this._loc(["factionSide", this["side"]]) %> Arena Team, <%= this["realm"] %>',
					'rating-team':'Rating: <%= this["rating"] %>',
					'rank-current':'Rank #<%= this["ranking"] %>',
					'rank-previous':'Last week\'s rank: <% if(this["lastSessionRanking"] > 0) { %>#<%= this["lastSessionRanking"] %><% } else { %>None<% } %>',
					'matches-current':'Matches: <span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span> <span class="matches-stats">(Total: <%= this["gamesPlayed"] %><% if(this["gamesPlayed"] > 0) { %>, <%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
					'matches-current-short':'<span class="matches-won"><%= this["gamesWon"] %></span> - <span class="matches-lost"><%= this["gamesLost"] %></span><% if(this["gamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["gamesWon"] / this["gamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
					'matches-season':'Matches: <span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span> <span class="matches-stats">(Total: <%= this["sessionGamesPlayed"] %><% if(this["sessionGamesPlayed"] > 0) { %>, <%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>% won<% } %>)</span>',
					'matches-season-short':'<span class="matches-won"><%= this["sessionGamesWon"] %></span> - <span class="matches-lost"><%= this["sessionGamesLost"] %></span><% if(this["sessionGamesPlayed"] > 0) { %> | <span class="matches-stats"><%= ((this["sessionGamesWon"] / this["sessionGamesPlayed"])*100).toFixed(0) %>%</span><% } %>',
					'extendedInactive':'Hold [<%= this["extendedKeyCodeLabel"] %>] to view current statistics!',
					'extendedActive':'Release [<%= this["extendedKeyCodeLabel"] %>] to view seasonal statistics!'
				}
			},
			'loading-realm':'Loading realm...',
			'loading-quest':'Loading quest...',
			'loading-item':'Loading item...',
			'loading-character':'Loading character...',
			'loading-guild':'Loading guild...',
			'loading-arena':'Loading arena team...',
			'label-region':'Region:',
			'label-realm':'Realm:',
			'label-quest':'Quest:',
			'label-item':'Item:',
			'label-character':'Character:',
			'label-guild':'Guild:',
			'label-teamname':'Name:',
			'label-teamsize':'Size:',
			'realm-not-found':'Realm not found!',
			'quest-not-found':'Quest not found!',
			'item-not-found':'Item not found!',
			'character-not-found':'Character not found',
			'guild-not-found':'Guild not found',
			'arena-not-found':'Arena team not found',
			'unused':'Not used',
			'view-mode-arena-current':'Viewing current week',
			'view-mode-arena-season':'Viewing complete season',
			'itemIsAuctionable':'Can be auctioned',
			'itemBind':{'1':'Binds when picked up','2':'Binds when equipped','3':'Binds when used'},
			'itemStat':{'3':'Agility','4':'Strength','5':'Intellect','6':'Spirit','7':'Stamina'},
			'itemSocket':{'BLUE':'Blue Socket','RED':'Red Socket','YELLOW':'Yellow Socket','META':'Meta Socket','ORANGE':'Orange Socket','PURPLE':'Purple Socket','GREEN':'Green Socket','PRISMATIC':'Prismatic Socket','HYDRAULIC':'Hydraulic Socket','COGWHEEL':'Cogwheel Socket'},
			'reputationFaction':{},
			'reputationLevel':{'0':'Hated','1':'Hostile','2':'Unfriendly','3':'Neutral','4':'Friendly','5':'Honored','6':'Revered','7':'Exalted'},
			'itemClass':{
				'0':{'0':'Consumeable','1':'Potion','2':'Elixir','3':'Flask','4':'Scroll','5':'Food &amp; Drink','6':'Item Enhancement','7':'Bandage','8':'Other'},
				'1':{'0':'Bag','1':'Soul Bag','2':'Herb Bag','3':'Enchanting Bag','4':'Engineering Bag','5':'Gem Bag','6':'Mining Bag','7':'Leatherworking Bag','8':'Inscription Bag','9':'Tackle Box'},
				'2':{'0':'Axe'/*1H*/,'1':'Axe'/*2H*/,'2':'Bow','3':'Gun','4':'Mace'/*1H*/,'5':'Mace'/*2H*/,'6':'Polearm','7':'Sword'/*1H*/,'8':'Sword'/*2H*/,'10':'Staff','13':'Fist Weapon','14':'Miscellaneous','15':'Dagger','16':'Thrown','18':'Crossbow','19':'Wand','20':'Fishing Pole'},
				'3':{'0':'Red Gem','1':'Blue Gem','2':'Yellow Gem','3':'Purple Gem','4':'Green Gem','5':'Orange Gem','6':'Meta Gem','7':'Simple Gem','8':'Prismatic Gem','9':'Hydraulic Gem','10':'Cogwheel Gem'},
				'4':{'0':'Miscellaneous','1':'Cloth','2':'Leather','3':'Mail','4':'Plate','6':'Shield','7':'Libram','8':'Idol','9':'Totem','10':'Sigil','11':'Relic'},
				'7':{'0':'Trade Goods','1':'Parts','2':'Explosives','3':'Devices','4':'Jewelcrafting','5':'Cloth','6':'Leather','7':'Metal &amp; Stone','8':'Meat','9':'Herb','10':'Elemental','11':'Other','12':'Enchanting','13':'Materials','14':'Item Enchantment'},
				'9':{'0':'Book','1':'Leatherworking','2':'Tailoring','3':'Engineering','4':'Blacksmithing','5':'Cooking','6':'Alchemy','7':'First Aid','8':'Enchanting','9':'Fishing','10':'Jewelcrafting','11':'Inscription'},
				'12':{'0':'Quest Item'},
				'13':{'0':'Key'},
				'15':{'0':'Junk','1':'Reagent','2':'Pet','3':'Holiday','4':'Other','5':'Mount'},
				'16':{'0':'Glyph','1':'Warrior','2':'Paladin','3':'Hunter','4':'Rogue','5':'Priest','6':'Death Knight','7':'Shaman','8':'Mage','9':'Warlock','11':'Druid'}
			},
			'inventoryType':{'1':'Head','2':'Neck','3':'Shoulder','4':'Shirt','5':'Chest','6':'Waist','7':'Legs','8':'Feet','9':'Wrist','10':'Hands','11':'Finger','12':'Trinket','13':'One-Hand','15':'Ranged'/*Bow*/,'16':'Back','17':'Two-Hand','18':'Bag','21':'Main-hand','22':'Off-hand','23':'Held in off-hand','25':'Ranged'/*Thrown*/,'26':'Ranged'/*Gun,Crossbow,Wand*/},
			'characterSkill':{'129':'First Aid','164':'Blacksmithing','165':'Leatherworking','171':'Alchemy','182':'Herbalism','185':'Cooking','186':'Mining','197':'Tailoring','202':'Engineering','333':'Enchanting','356':'Fishing','393':'Skinning','755':'Jewelcrafting','762':'Riding','773':'Inscription','794':'Archeology'},
			'characterClass':{'1':'Warrior','2':'Paladin','3':'Hunter','4':'Rogue','5':'Priest','6':'Death Knight','7':'Shaman','8':'Mage','9':'Warlock','11':'Druid'},
			'characterRace':{'1':'Human','2':'Orc','3':'Dwarf','4':'Night Elf','5':'Forsaken','6':'Tauren','7':'Gnome','8':'Troll','9':'Goblin','10':'Blood Elf','11':'Draenei','22':'Worgen'},
			'factionSide':{'0':'Alliance','1':'Horde','alliance':'Alliance','horde':'Horde'},
			'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
			'realmQueue':{'false':'No queue','true':'Queue'},
			'realmStatus':{'false':'Offline','true':'Online'},
			'realmPopulation':{'low':'Low population','medium':'Medium population','high':'High population'}
		}
	},
	'patterns':{
		'explicit':{
			'realm':/realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'quest':/quest:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'item':/item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'character':/character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'guild':/guild:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'arena':/arena:(us|eu|kr|tw|cn)\.([^\.]+)\.(2v2|3v3|5v5)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/
		},
		'battlenet':{
			'item':/http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/item\/([^\/#]+).*/,
			'character':/http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/#]+).*/,
			'guild':/http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/guild\/([^\/]+)\/([^\/#]+).*/,
			'arena':/http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/arena\/([^\/]+)\/(2v2|3v3|5v5)\/([^\/#]+).*/
		},
		'api':{
			'data.classes':'http://<%= this["host"] %>/api/wow/data/character/classes?locale=<%= this["locale"] %>',
			'data.races':'http://<%= this["host"] %>/api/wow/data/character/races?locale=<%= this["locale"] %>',
			'realm':'http://<%= this["host"] %>/api/wow/realm/status?realm=<%= this["realm"] %>&locale=<%= this["locale"] %>',
			'quest':'http://<%= this["host"] %>/api/wow/quest/<%= this["questid"] %>?locale=<%= this["locale"] %>',
			'item':'http://<%= this["host"] %>/api/wow/item/<%= this["itemid"] %>?locale=<%= this["locale"] %>',
			'character':'http://<%= this["host"] %>/api/wow/character/<%= this["realm"] %>/<%= this["character"] %>?fields=guild,talents,items,professions,companions,mounts&locale=<%= this["locale"] %>',
			'guild':'http://<%= this["host"] %>/api/wow/guild/<%= this["realm"] %>/<%= this["guild"] %>?fields=members&locale=<%= this["locale"] %>',
			'arena':'http://<%= this["host"] %>/api/wow/arena/<%= this["realm"] %>/<%= this["teamsize"] %>/<%= this["teamname"] %>?locale=<%= this["locale"] %>'
		},
		'hash':{
			'data.classes':'<%= this["host"] %>#<%= this["locale"] %>',
			'data.races':'<%= this["host"] %>#<%= this["locale"] %>',
			'realm':'<%= this["host"] %>#<%= this["realm"] %>#<%= this["locale"] %>',
			'quest':'<%= this["host"] %>#<%= this["questid"] %>#<%= this["locale"] %>',
			'item':'<%= this["host"] %>#<%= this["itemid"] %>#<%= this["locale"] %>',
			'character':'<%= this["host"] %>#<%= this["realm"] %>#<%= this["character"] %>#<%= this["locale"] %>',
			'guild':'<%= this["host"] %>#<%= this["realm"] %>#<%= this["guild"] %>#<%= this["locale"] %>',
			'arena':'<%= this["host"] %>#<%= this["realm"] %>#<%= this["teamsize"] %>#<%= this["teamname"] %>#<%= this["locale"] %>'
		},
		'helper': {
			'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/
		}
	},
	'maps':{
		'item':{
			'primaryStats':{'3':1/*Agility*/,'4':1/*Strength*/,'5':1/*Intellect*/,'6':1/*Spirit*/,'7':1/*Stamina*/},
			'secondaryStats':{'13':1/*Dodge rating*/,'14':1/*Parry rating*/,'31':1/*Hit rating*/,'32':1/*Critical strike rating*/,'35':1/*Resilience rating*/,'36':1/*Haste rating*/,'37':1/*Expertise rating*/,'38':1/*Attack power*/,'46':1/*Health regeneration*/,'45':1/*Spell power*/,'47':1/*Spell penetration*/,'49':1/*Mastery rating*/}
		},
		'region2host':{'us':'us.battle.net','eu':'eu.battle.net','kr':'kr.battle.net','tw':'tw.battle.net','cn':'www.battlenet.com.cn'},
		'region2mediahost':{'us':'us.media.blizzard.com','eu':'eu.media.blizzard.com','kr':'kr.media.blizzard.com','tw':'us.media.blizzard.com','cn':'content.battlenet.com.cn'},
		'regionlang2locale':{
			'us':{'en':'en_US','es':'es_MX'},
			'eu':{'en':'en_GB','es':'es_ES','fr':'fr_FR','ru':'ru_RU','de':'de_DE'},
			'kr':{'ko':'ko_KR','en':'en_US'},
			'tw':{'zh':'zh_TW','en':'en_US'},
			'cn':{'zh':'zh_CN','en':'en_US'}
		},
		'type2schemes':{
			'explicit':['realm','quest','item','character','guild','arena'],
			'battlenet':['item','character','guild','arena']
		},
		'pattern2params':{
			'explicit':{
				'realm':{'1':'region','2':'realm','3':'lang'},
				'quest':{'1':'region','2':'questid','3':'lang'},
				'item':{'1':'region','2':'itemid','3':'lang'},
				'character':{'1':'region','2':'realm','3':'character','4':'lang'},
				'guild':{'1':'region','2':'realm','3':'guild','4':'lang'},
				'arena':{'1':'region','2':'realm','3':'teamsize','4':'teamname','5':'lang'}
			},
			'battlenet':{
				'item':{'1':'host','2':'lang','3':'itemid'},
				'character':{'1':'host','2':'lang','3':'realm','4':'character'},
				'guild':{'1':'host','2':'lang','3':'realm','4':'guild'},
				'arena':{'1':'host','2':'lang','3':'realm','4':'teamsize','5':'teamname'}
			}
		}
	},
	'cache':{
		'data':{
			'item-quality':{},
			'character-class':{},
			'guild-side':{}
		},
		'template':{
			'realm':{},
			'quest':{},
			'item':{},
			'character':{},
			'guild':{},
			'arena':{}
		}
	},
	'activeTooltips':[]
};
WowDataTooltip.init();