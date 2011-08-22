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
	/*yepnope1.0.2|WTFPL*/(function(a,b,c){function H(){var a=z;a.loader={load:G,i:0};return a}function G(a,b,c){var e=b=="c"?r:q;i=0,b=b||"j",u(a)?F(e,a,b,this.i++,d,c):(h.splice(this.i++,0,a),h.length==1&&E());return this}function F(a,c,d,g,j,l){function q(){!o&&A(n.readyState)&&(p.r=o=1,!i&&B(),n.onload=n.onreadystatechange=null,e(function(){m.removeChild(n)},0))}var n=b.createElement(a),o=0,p={t:d,s:c,e:l};n.src=n.data=c,!k&&(n.style.display="none"),n.width=n.height="0",a!="object"&&(n.type=d),n.onload=n.onreadystatechange=q,a=="img"?n.onerror=q:a=="script"&&(n.onerror=function(){p.e=p.r=1,E()}),h.splice(g,0,p),m.insertBefore(n,k?null:f),e(function(){o||(m.removeChild(n),p.r=p.e=o=1,B())},z.errorTimeout)}function E(){var a=h.shift();i=1,a?a.t?e(function(){a.t=="c"?D(a):C(a)},0):(a(),B()):i=0}function D(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(o||j)){var g=function(a){e(function(){if(!d)try{a.sheet.cssRules.length?(d=1,B()):g(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,e(function(){B()},0)):g(a)}},0)};g(c)}else c.onload=function(){d||(d=1,e(function(){B()},0))},a.e&&c.onload();e(function(){d||(d=1,B())},z.errorTimeout),!a.e&&f.parentNode.insertBefore(c,f)}function C(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&A(c.readyState)&&(d=1,B(),c.onload=c.onreadystatechange=null)},e(function(){d||(d=1,B())},z.errorTimeout),a.e?c.onload():f.parentNode.insertBefore(c,f)}function B(){var a=1,b=-1;while(h.length- ++b)if(h[b].s&&!(a=h[b].r))break;a&&E()}function A(a){return!a||a=="loaded"||a=="complete"}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j="MozAppearance"in d.style,k=j&&!!b.createRange().compareNode,l=j&&!k,m=k?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o="webkitAppearance"in d.style,p=o&&"async"in b.createElement("script"),q=j?"object":n||p?"img":"script",r=o?"img":q,s=Array.isArray||function(a){return g.call(a)=="[object Array]"},t=function(a){return Object(a)===a},u=function(a){return typeof a=="string"},v=function(a){return g.call(a)=="[object Function]"},w=[],x={},y,z;z=function(a){function h(a,b){function i(a){if(u(a))g(a,f,b,0,c);else if(t(a))for(h in a)a.hasOwnProperty(h)&&g(a[h],f,b,h,c)}var c=!!a.test,d=c?a.yep:a.nope,e=a.load||a.both,f=a.callback,h;i(d),i(e),a.complete&&b.load(a.complete)}function g(a,b,d,e,g){var h=f(a),i=h.autoCallback;if(!h.bypass){b&&(b=v(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,b,d,e,g);d.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(v(b)||v(i))&&d.load(function(){H(),b&&b(h.origUrl,g,e),i&&i(h.origUrl,g,e)})}}function f(a){var b=a.split("!"),c=w.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=x[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=w[h](f);return f}var b,d,e=this.yepnope.loader;if(u(a))g(a,0,e,0);else if(s(a))for(b=0;b<a.length;b++)d=a[b],u(d)?g(d,0,e,0):s(d)?z(d):t(d)&&h(d,e);else t(a)&&h(a,e)},z.addPrefix=function(a,b){x[a]=b},z.addFilter=function(a){w.push(a)},z.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",y=function(){b.removeEventListener("DOMContentLoaded",y,0),b.readyState="complete"},0)),a.yepnope=H()})(this,this.document)
}

var WowDataTooltip = {
	
	'config': {
		'merged' : {},
		'user'   : window.___WowDataTooltip_Config || {},
		'default': {
			'files': {
				'jquery.js': 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
				'qtip2.js' : 'qtip2/jquery.qtip.min.js',
				'qtip2.css': 'qtip2/jquery.qtip.min.css',
				'wdt.css'  : 'wdt/WowDataTooltip.css'
			},
			'applyTo': {
				'explicit' : true,
				'battlenet': true
			},
			'extendedMode': {
				'active'       : true,
				'keyCode'      : 16,
				'keyCode.label': 'SHIFT'
			},
			'layout': {
				'width': {
					'realm'    : 200,
					'item'     : 300,
					'character': 300,
					'guild'    : 200
				}
			},
			'extras': {
				'applyCssColorToCaller': false
			}
		}
	},
		
	init: function() {
		this.mergeConfig();
		this.attachEventHandlers();
	},
	
	mergeConfig: function() {
		var cfgu = this.config['user'];
		var cfgm = this.config['default'];
		if('undefined' !== typeof(cfgu['auth'])) {
			if('undefined' !== typeof(cfgu['auth']['key']))    cfgm['auth']['key']    = cfgu['auth']['key'];
			if('undefined' !== typeof(cfgu['auth']['secret'])) cfgm['auth']['secret'] = cfgu['auth']['secret'];
		}
		if('undefined' !== typeof(cfgu['files'])) {
			if('undefined' !== typeof(cfgu['files']['jquery.js'])) cfgm['files']['jquery.js'] = cfgu['files']['jquery.js'];
			if('undefined' !== typeof(cfgu['files']['qtip2.js']))  cfgm['files']['qtip2.js']  = cfgu['files']['qtip2.js'];
			if('undefined' !== typeof(cfgu['files']['qtip2.css'])) cfgm['files']['qtip2.css'] = cfgu['files']['qtip2.css'];
			if('undefined' !== typeof(cfgu['files']['wdt.css']))   cfgm['files']['wdt.css']   = cfgu['files']['wdt.css'];			
		}
		if('undefined' !== typeof(cfgu['applyTo'])) {
			if('undefined' !== typeof(cfgu['applyTo']['explicit']))  cfgm['applyTo']['explicit']  = cfgu['applyTo']['explicit'];
			if('undefined' !== typeof(cfgu['applyTo']['battlenet'])) cfgm['applyTo']['battlenet'] = cfgu['applyTo']['battlenet'];
		}
		if('undefined' !== typeof(cfgu['extendedMode'])) {
			if('undefined' !== typeof(cfgu['extendedMode']['active']))        cfgm['extendedMode']['active']        = cfgu['extendedMode']['active'];
			if('undefined' !== typeof(cfgu['extendedMode']['keyCode']))       cfgm['extendedMode']['keyCode']       = cfgu['extendedMode']['keyCode'];
			if('undefined' !== typeof(cfgu['extendedMode']['keyCode.label'])) cfgm['extendedMode']['keyCode.label'] = cfgu['extendedMode']['keyCode.label'];
		}
		if('undefined' !== typeof(cfgu['layout'])) {
			if('undefined' !== typeof(cfgu['layout']['width'])) {
				if('undefined' !== typeof(cfgu['layout']['width']['realm']))     cfgm['layout']['width']['realm']     = cfgu['layout']['width']['realm'];
				if('undefined' !== typeof(cfgu['layout']['width']['item']))      cfgm['layout']['width']['item']      = cfgu['layout']['width']['item'];
				if('undefined' !== typeof(cfgu['layout']['width']['character'])) cfgm['layout']['width']['character'] = cfgu['layout']['width']['character'];
				if('undefined' !== typeof(cfgu['layout']['width']['guild']))     cfgm['layout']['width']['guild']     = cfgu['layout']['width']['guild'];
			}
		}
		if('undefined' !== typeof(cfgu['extras'])) {
			if('undefined' !== typeof(cfgu['extras']['applyCssColorToCaller'])) cfgm['extras']['applyCssColorToCaller'] = cfgu['extras']['applyCssColorToCaller'];
		}
		this.config['merged'] = cfgm;
	},
	
	attachEventHandlers: function() {
		yepnope([{
			test: window.jQuery,
			nope: WowDataTooltip.getSetting(['files', 'jquery.js']),
			complete: function () {
				if(!window.jQuery.jqote) {
					/* jQote2 - client-side Javascript templating engine | Copyright (C) 2010, aefxx | http://aefxx.com/ | Dual licensed under the WTFPL v2 or MIT (X11) licenses | WTFPL v2 Copyright (C) 2004, Sam Hocevar | Date: Thu, Oct 21st, 2010 | Version: 0.9.7 */
					(function($){var _=false,E1="UndefinedTemplateError",E2="TemplateCompilationError",E3="TemplateExecutionError",A="[object Array]",S="[object String]",F="[object Function]",n=1,c="%",q=/^[^<]*(<[\w\W]+>)[^>]*$/,ts=Object.prototype.toString;function r(e,x){throw ($.extend(e,x),e)}function dns(f) {var a=[];if(ts.call(f)!==A)return _;for(var i=0,l=f.length;i<l;i++)a[i]=f[i].jqote_id;return a.length?a.sort().join('.').replace(/(\b\d+\b)\.(?:\1(\.|$))+/g,"$1$2"):_}function l(s,t){var f,g=[],t=t||c,x=ts.call(s);if(x===F)return s.jqote_id?[s]:_;if(x!==A)return[$.jqotec(s,t)];if(x===A)for(var i=0,l=s.length;i<l;i++)return g.length?g:_}$.fn.extend({jqote:function(x,y){var x=ts.call(x)===A?x:[x],d="";this.each(function(i){var f=$.jqotec(this,y);for(var j=0;j<x.length;j++)d+=f.call(x[j],i,j,x,f)});return d}});$.each({app:"append",pre:"prepend",sub:"html"},function(x,y){$.fn["jqote"+x]=function(e,d,t){var p,r,s=$.jqote(e,d,t),$$=!q.test(s)?function(s){return $(document.createTextNode(s))}:$;if(!!(p=dns(l(e))))r=new RegExp("(^|\\.)"+p.split(".").join("\\.(.*)?")+"(\\.|$)");return this.each(function(){var z=$$(s);$(this)[y](z);(z[0].nodeType===3?$(this):z).trigger("jqote."+x,[z,r])})}});
					$.extend({jqote:function(e,d,t){var s="",t=t||c,f=l(e);if(f===_)r(new Error("Empty or undefined template passed to $.jqote"),{type:E1});d=ts.call(d)!==A?[d]:d;for(var i=0,m=f.length;i<m;i++)for(var j=0;j<d.length;j++)s+=f[i].call(d[j],i,j,d,f[i]);return s},jqotec:function(x,t){var h,e,y,t=t||c,z=ts.call(x);if(z===S&&q.test(x)){e=y=x;if(h=$.jqotecache[x])return h}else{e=z===S||x.nodeType?$(x):x instanceof jQuery?x:null;if(!e[0]||!(y=e[0].innerHTML)&&!(y=e.text()))r(new Error("Empty or undefined template passed to $.jqotec"),{type:E1});if(h=$.jqotecache[$.data(e[0],"jqote_id")])return h}var s="",i,a=y.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g,"").split("<"+t).join(t+">\x1b").split(t+">");for(var m=0,k=a.length;m<k;m++)s+=a[m].charAt(0)!=="\x1b"?"out+='"+a[m].replace(/(\\|["'])/g,"\\$1")+"'":(a[m].charAt(1)==="="?";out+=("+a[m].substr(2)+");":(a[m].charAt(1)==="!"?";out+=$.jqotenc(("+a[m].substr(2)+"));":";"+a[m].substr(1)));s="try{"+('var out="";'+s+";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=")+'}catch(e){e.type="'+E3+'";e.args=arguments;e.template=arguments.callee.toString();throw e;}';try{var f=new Function("i, j, data, fn",s)}catch(e){r(e,{type:E2})}i=e instanceof jQuery?$.data(e[0],"jqote_id",n):e;return $.jqotecache[i]=(f.jqote_id=n++,f)},
					jqotefn:function(e){var t=ts.call(e),i=t===S&&q.test(e)?e:$.data($(e)[0],"jqote_id");return $.jqotecache[i]||_},jqotetag:function(s){if(ts.call(s)===S)c=s},jqotenc:function(s){return s.toString().replace(/&(?!\w+;)/g,'&#38;').split('<').join('&#60;').split('>').join('&#62;').split('"').join('&#34;').split("'").join('&#39;')},jqotecache:{}});$.event.special.jqote={add:function(o){var n,h=o.handler,d=!o.data?[]:ts.call(o.data)!==A?[o.data]:o.data;if(!o.namespace)o.namespace="app.pre.sub";if(!d.length||!(n=dns(l(d))))return;o.handler=function(e,m,r){return !r||r.test(n)?h.apply(this,[e,m]):null}}}})(jQuery);
				}
				yepnope({
					test: jQuery.qtip,
					nope: [
						WowDataTooltip.getSetting(['files', 'qtip2.js']),
						WowDataTooltip.getSetting(['files', 'qtip2.css']),
						WowDataTooltip.getSetting(['files', 'wdt.css'])
					],	
					complete: function () {
						jQuery(function () {
							// --- Loading complete ------------------------------------
							if(WowDataTooltip.getSetting(['extendedMode', 'active'])) {
								jQuery(document).keydown(function(event) {
									// ExtendedMode Key is pressed
									if(event.keyCode == WowDataTooltip.getSetting(['extendedMode', 'keyCode'])) {
										jQuery('body').addClass('wdt-show-extended');
										WowDataTooltip.repositionActiveTooltips();
									}
								});
								jQuery(document).keyup(function(event) {
									// ExtendedMode Key is released
									if(event.keyCode == WowDataTooltip.getSetting(['extendedMode', 'keyCode'])) {
										jQuery('body').removeClass('wdt-show-extended');
										WowDataTooltip.repositionActiveTooltips();
									}
								});
							}
							if(WowDataTooltip.getSetting(['applyTo', 'explicit'])) {
								jQuery('[data-wowdatatooltip]').live('mouseover', function() {
									WowDataTooltip.handleExplicitHover(this);
								});
							}
							if(WowDataTooltip.getSetting(['applyTo', 'battlenet'])) {
								jQuery('a[href]').live('mouseover', function() {
									WowDataTooltip.handleHyperlinkHover(this);
								});
							}
							// --- End of completion block -----------------------------
						});
					}
				});
			}
		}]);
	},
	
	addToActiveTooltips: function(id) {
		var found = false;
		for (var i = 0; i < this.activeTooltips.length; i++) {
			if(this.activeTooltips[i] === id) {
				found = true;
			}
		}
		if(found === false) {
			this.activeTooltips.push(id);
		}
	},
	
	removeFromActiveTooltips: function(id) {
		var found = false;
		for (var i = 0; i < this.activeTooltips.length; i++) {
			if(this.activeTooltips[i] === id) {
				found = i;
			}
		}
		if(found !== false) {
			this.activeTooltips.splice(i, 1);
		}
	},
	
	repositionActiveTooltips: function() {
		// Find all active wdt tooltips and run .reposition on them
		for (var i = 0; i < this.activeTooltips.length; i++) {
			jQuery('#ui-tooltip-'+this.activeTooltips[i]).qtip('reposition');
		}
	},
	
	handleExplicitHover: function(element) {
		if('object' === typeof(jQuery(element).data('qtip'))) {
			jQuery(element).qtip('show');
		} else {
			var content  = '';
			var wdtroute = new String(jQuery(element).data('wowdatatooltip'));
			var apicall  = null;
			var hash     = null;
			var params   = null;
			/* ------------------------------------------------------------
			 * - Realm Tooltip from [data-wowdatatooltip]
			 * ------------------------------------------------------------ */
			var result  = wdtroute.match(this['patterns']['explicit']['realm']);
			if(result) {
				params = {
					'region'   : result[1],
					'realm'    : result[2],
					'lang'     : result[3],
					'locale'   : this.getLocaleFromRegionLang(result[1], result[3]),
					'host'     : this.getHostFromRegion(result[1])
				};
				apicall = jQuery.jqote(this['patterns']['api']['realm'], params);
				hash    = jQuery.jqote(this['patterns']['hash']['realm'], params);
				content = this.getFromCache('template', 'realm', hash);
				if(content != false) {
					this.addTip(element, content, WowDataTooltip.getSetting(['layout', 'width', 'realm']));
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-realm'), WowDataTooltip.getSetting(['layout', 'width', 'realm']));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						success: function(data) {
							var content = WowDataTooltip.buildRealmTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							WowDataTooltip.addToCache('template', 'realm', hash, content);
						}
					});
				}
			}
			/* ------------------------------------------------------------
			 * - Item Tooltip from [data-wowdatatooltip]
			 * ------------------------------------------------------------ */
			var result  = wdtroute.match(this['patterns']['explicit']['item']);
			if(result) {
				params = {
					'region': result[1],
					'itemid': result[2],
					'lang'  : result[3],
					'locale': this.getLocaleFromRegionLang(result[1], result[3]),
					'host'  : this.getHostFromRegion(result[1])
				};
				apicall = jQuery.jqote(this['patterns']['api']['item'], params);
				hash    = jQuery.jqote(this['patterns']['hash']['item'], params);
				content = this.getFromCache('template', 'item', hash);
				if(content != false) {
					this.addTip(element, content, WowDataTooltip.getSetting(['layout', 'width', 'item']));
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-item'), WowDataTooltip.getSetting(['layout', 'width', 'item']));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						success: function(data) {
							var content = WowDataTooltip.buildItemTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							if(WowDataTooltip.getSetting(['extras', 'applyCssColorToCaller'])) {
								jQuery(element).addClass('cquality-'+data['quality']);
							}
							WowDataTooltip.addToCache('template', 'item', hash, content);
						}
					});
				}
			}
			/* ------------------------------------------------------------
			 * - Character Tooltip from [data-wowdatatooltip]
			 * ------------------------------------------------------------ */
			var result  = wdtroute.match(this['patterns']['explicit']['character']);
			if(result) {
				params = {
					'region'   : result[1],
					'realm'    : result[2],
					'character': result[3],
					'lang'     : result[4],
					'locale'   : this.getLocaleFromRegionLang(result[1], result[4]),
					'host'     : this.getHostFromRegion(result[1])
				};
				apicall = jQuery.jqote(this['patterns']['api']['character'], params);
				hash    = jQuery.jqote(this['patterns']['hash']['character'], params);
				content = this.getFromCache('template', 'character', hash);
				if(content != false) {
					this.addTip(element, content, WowDataTooltip.getSetting(['layout', 'width', 'character']));
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-character'), WowDataTooltip.getSetting(['layout', 'width', 'character']));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						success: function(data) {
							var content = WowDataTooltip.buildCharacterTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							if(WowDataTooltip.getSetting(['extras', 'applyCssColorToCaller'])) {
								jQuery(element).addClass('cclass-'+data['class']);
							}
							WowDataTooltip.addToCache('template', 'character', hash, content);
						}
					});
				}
			}
			/* ------------------------------------------------------------
			 * - Guild Tooltip from [data-wowdatatooltip]
			 * ------------------------------------------------------------ */
			var result  = wdtroute.match(this['patterns']['explicit']['guild']);
			if(result) {
				params = {
					'region': result[1],
					'realm' : result[2],
					'guild' : result[3],
					'lang'  : result[4],
					'locale': this.getLocaleFromRegionLang(result[1], result[4]),
					'host'  : this.getHostFromRegion(result[1])
				};
				apicall = jQuery.jqote(this['patterns']['api']['guild'], params);
				hash    = jQuery.jqote(this['patterns']['hash']['guild'], params);
				content = this.getFromCache('template', 'guild', hash);
				if(content != false) {
					this.addTip(element, content, WowDataTooltip.getSetting(['layout', 'width', 'guild']));
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-guild'), WowDataTooltip.getSetting(['layout', 'width', 'guild']));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						success: function(data) {
							var content = WowDataTooltip.buildGuildTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							if(WowDataTooltip.getSetting(['extras', 'applyCssColorToCaller'])) {
								jQuery(element).addClass('cside-'+data['side']);
							}
							WowDataTooltip.addToCache('template', 'guild', hash, content);
						}
					});
				}
			}
		}
	},
	
	handleHyperlinkHover: function(element) {
		// In a tooltip is already attached, don't re-render it, just show it
		if('object' === typeof(jQuery(element).data('qtip'))) {
			jQuery(element).qtip('show');
		} else {
			var content = '';
			var href    = new String(jQuery(element).attr('href'));
			var apicall = null;
			var params  = null;
			/* ------------------------------------------------------------
			 * - Item Tooltip from a[href]
			 * ------------------------------------------------------------ */
			var result  = href.match(this['patterns']['battlenet']['item']);
			if(result) {
				params = {
					'host'  : result[1],
					'lang'  : result[2],
					'itemid': result[3],
					'locale': this.getLocaleFromRegionLang(this.getRegionFromHost(result[1]), result[2])
				};
				apicall = jQuery.jqote(this['patterns']['api']['item'], params);
				hash    = jQuery.jqote(this['patterns']['hash']['item'], params);
				content = this.getFromCache('template', 'item', hash);
				if(content != false) {
					this.addTip(element, content, WowDataTooltip.getSetting(['layout', 'width', 'item']));
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-item'), WowDataTooltip.getSetting(['layout', 'width', 'item']));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						success: function(data) {
							var content = WowDataTooltip.buildItemTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							if(WowDataTooltip.getSetting(['extras', 'applyCssColorToCaller'])) {
								jQuery(element).addClass('cquality-'+data['quality']);
							}
							WowDataTooltip.addToCache('template', 'item', hash, content);
						}
					});
				}
			}
			/* ------------------------------------------------------------
			 * - Character Tooltip from a[href]
			 * ------------------------------------------------------------ */
			var result  = href.match(this['patterns']['battlenet']['character']);
			if(result) {
				params = {
					'host'     : result[1],
					'lang'     : result[2],
					'realm'    : result[3],
					'character': result[4],
					'locale'   : this.getLocaleFromRegionLang(this.getRegionFromHost(result[1]), result[2])
				};
				apicall = jQuery.jqote(this['patterns']['api']['character'], params);
				hash    = jQuery.jqote(this['patterns']['hash']['character'], params);
				content = this.getFromCache('template', 'character', hash);
				if(content != false) {
					this.addTip(element, content, WowDataTooltip.getSetting(['layout', 'width', 'character']));
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-character'), WowDataTooltip.getSetting(['layout', 'width', 'character']));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						success: function(data) {
							var content = WowDataTooltip.buildCharacterTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							if(WowDataTooltip.getSetting(['extras', 'applyCssColorToCaller'])) {
								jQuery(element).addClass('cclass-'+data['class']);
							}
							WowDataTooltip.addToCache('template', 'character', hash, content);
						}
					});
				}
			}
			/* ------------------------------------------------------------
			 * - Guild Tooltip from a[href]
			 * ------------------------------------------------------------ */
			var result  = href.match(this['patterns']['battlenet']['guild']);
			if(result) {
				params = {
					'host'  : result[1],
					'lang'  : result[2],
					'realm' : result[3],
					'guild' : result[4],
					'locale': this.getLocaleFromRegionLang(this.getRegionFromHost(result[1]), result[2])
				};
				apicall = jQuery.jqote(this['patterns']['api']['guild'], params);
				hash    = jQuery.jqote(this['patterns']['hash']['guild'], params);
				content = this.getFromCache('template', 'guild', hash);
				if(content != false) {
					this.addTip(element, content, WowDataTooltip.getSetting(['layout', 'width', 'guild']));
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-guild'), WowDataTooltip.getSetting(['layout', 'width', 'guild']));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						success: function(data) {
							var content = WowDataTooltip.buildGuildTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							if(WowDataTooltip.getSetting(['extras', 'applyCssColorToCaller'])) {
								jQuery(element).addClass('cside-'+data['side']);
							}
							WowDataTooltip.addToCache('template', 'guild', hash, content);
						}
					});
				}
			}
		}		
	},
	
	addTip: function(element, tipcontent, width) {
		if('undefined' === typeof(width)) {
			width = 300;
		}
		
		jQuery(element).qtip({
			'overwrite': false, // Make sure another tooltip can't overwrite this one without it being explicitly destroyed
			'show': {
				'ready': true // Needed to make it show on first mouseover event
			},
			'events': {
				'render': function(event, api) {
					var tooltip = api.elements.tooltip;
					tooltip.bind('tooltipshow', function(event, api) {
						WowDataTooltip.addToActiveTooltips(api.id);
					});
					tooltip.bind('tooltiphide', function(event, api) {
						WowDataTooltip.removeFromActiveTooltips(api.id);
					});
				},
			},
			'content': {
				'text': tipcontent
			},
			'position': {
				'my': 'bottom middle',
				'at': 'top middle',
				'viewport': jQuery(window),
				'effect': false
			},
			'hide': 'mouseout',
			'style': {
				'width': width+'px',
				'classes': 'wdt-tooltip ui-tooltip-wdt-dark ui-tooltip-cluetip'
			}
		});
	},
	
	getLocaleData: function(locale) {
		if('object' === typeof(this['i18n'][locale])) {
			var loc = this['i18n'][locale];
		} else {
			var loc = this['i18n']['en_US'];
		}
		return loc;
	},
	
	getTemplate: function(template, type) {
		if('undefined' == typeof(this['templates'][template])) {
			return 'Template "'+template+'" not found!';
		}
		if('undefined' == typeof(this['templates'][template][type])) {
			return 'Type "'+type+'" not found in template "'+template+'"!';
		}
		return this['templates'][template][type];
	},
	
	getSetting: function(route) {
		var temp   = this.config.merged;
		var result = undefined;
		
		if('string' === typeof(route)) {
			route = [route]; 
		}
		
		for (var i = 0; i < route.length; i++) {
			if('undefined' === typeof(temp[route[i]])) {
				result = '';
				break;
			} else {
				if('object' === typeof(temp[route[i]])) {
					temp = temp[route[i]];
				} else {
					result = temp[route[i]];
					break;
				}
			}
		}
		
		return result;
	},
	
	localize: function(repository, keys) {
		var temp   = repository;
		var result = undefined;
		
		if('string' === typeof(keys)) {
			keys = [keys]; 
		}
		
		for (var i = 0; i < keys.length; i++) {
			if('undefined' === typeof(temp[keys[i]])) {
				if('object' === typeof(temp)) {
					result = undefined;
				}
				break;
			} else {
				temp   = temp[keys[i]];
				result = temp;
			}
		}
		
		// console.log('First level lookup in ('+repository.meta.locale+') yielded: '+result);
		
		if((result == undefined) && (repository['meta']['locale'] != 'en_US')) {
			var temp = this.getLocaleData('en_US');
			for (var i = 0; i < keys.length; i++) {
				if('undefined' === typeof(temp[keys[i]])) {
					if('object' === typeof(temp)) {
						result = undefined;
					}
					break;
				} else {
					temp   = temp[keys[i]];
					result = temp;
				}
			}
			// console.log('Second level lookup in (en_US) yielded: '+result);
		}
		
		return result || '';
	},
	
	getMetaTVars: function(loc, scheme) {
		return {
			'extendedActive': this.getSetting(['extendedMode', 'active']),
			'extendedKeyCodeLabel': this.getSetting(['extendedMode', 'keyCode.label']),
			localize: function(route) {
				return WowDataTooltip.localize(loc, route);
			},
			subrender: function(route, data) {
				if('string' === typeof(route)) {
					route = [route]; 
				}
				route.unshift('templates', scheme);
				return jQuery.jqote(WowDataTooltip.localize(loc, route), data);
			},
			moneySplitter: function(total) {
				var temp   = total.toString();
				var result = temp.match(WowDataTooltip['patterns']['helper']['money']);
				if(result) {
					if(result[3] != undefined) {
						return({ 'gold': parseInt(result[1]), 'silver': parseInt(result[2]), 'copper': parseInt(result[3]) });
					}
					if(result[5] != undefined) {
						return({ 'gold': -1, 'silver': parseInt(result[4]), 'copper': parseInt(result[5]) });
					}
					return({ 'gold': -1, 'silver': -1, 'copper': parseInt(result[6]) });
				}
				return({ 'gold': -1, 'silver': -1, 'copper': 0 });
			}
		};
	},
	
	buildRealmTooltip: function(host, locale, data) {
		var content   = '';
		var loc       = this.getLocaleData(locale);
		var region    = this.getRegionFromHost(host);
		var mediahost = this.getMediahostFromRegion(region);
        var realm     = {};

		if(data.realms.length == 1) {
			realm   = data.realms[0];
			var add = {
				'path_host'      : 'http://' + host,
				'path_host_media': 'http://' + mediahost,
				'region'         : region
			};
		} else {
			var add = {
				'notfound': this.localize(loc, 'realm-not-found')
			};
		}
		
		return window.jQuery.jqote(
			this.getTemplate('default', 'realm'),
			jQuery.extend(true, {}, this.getMetaTVars(loc, 'realm'), realm, add)
		);
		
	},
	
	buildItemTooltip: function(host, locale, data) {
		var loc       = this.getLocaleData(locale);
		var region    = this.getRegionFromHost(host);
		var mediahost = this.getMediahostFromRegion(region);
		
		var add = {
			'path_host'        : 'http://' + host,
			'path_host_media'  : 'http://' + mediahost,
			'region'           : region
		};
		
		return window.jQuery.jqote(
			this.getTemplate('default', 'item'),
			jQuery.extend(true, {}, this.getMetaTVars(loc, 'item'), data, add)
		);
	},
	
	buildCharacterTooltip: function(host, locale, data) {
		var loc       = this.getLocaleData(locale);
		var region    = this.getRegionFromHost(host);
		var mediahost = this.getMediahostFromRegion(region);
		
		var add = {
			'path_host'      : 'http://' + host,
			'path_host_media': 'http://' + mediahost,
			'region'         : region
		};
		
		return jQuery.jqote(
			this.getTemplate('default', 'character'),
			jQuery.extend(true, {}, this.getMetaTVars(loc, 'character'), data, add)
		);
	},
	
	buildGuildTooltip: function(host, locale, data) {
		var loc       = this.getLocaleData(locale);
		var region    = this.getRegionFromHost(host);
		var mediahost = this.getMediahostFromRegion(region);
		
		var add = {
			'path_host'      : 'http://' + host,
			'path_host_media': 'http://' + mediahost,
			'region'         : region,
			'membercount'    : data['members'].length || 0
		};
		
		return jQuery.jqote(
			this.getTemplate('default', 'guild'),
			jQuery.extend(true, {}, this.getMetaTVars(loc, 'guild'), data, add)
		);
	},
	
	addToCache: function(type, scheme, hash, content) {
		this['cache'][type][scheme][hash] = content;
		return true;
	},
	
	getFromCache: function(type, scheme, hash) {
		if('undefined' == typeof(this['cache'][type])) {
			this['cache'][type] = {};
			return false;
		}
		if('undefined' == typeof(this['cache'][type][scheme])) {
			this['cache'][type][scheme] = {};
			return false;
		}
		if('string' == typeof(this['cache'][type][scheme][hash])) {
			return this['cache'][type][scheme][hash];
		}
		return false;
	},
	
	getHostFromRegion: function(region) {
		if('undefined' !== typeof(this.maps['region2host'][region])) {
			return(this.maps['region2host'][region]);
		}
		return '';
	},
	
	getRegionFromHost: function(host) {
		if('undefined' !== typeof(this.maps['host2region'][host])) {
			return(this.maps['host2region'][host]);
		}
		return '';
	},
	
	getMediahostFromRegion: function(region) {
		if('undefined' === typeof(this.maps['region2mediahost'][region])) {
			return '';
		} else {
			return this.maps['region2mediahost'][region];
		}
	},
	
	getLocaleFromRegionLang: function(region, lang) {
		if('undefined' === typeof(this.maps['regionlang2locale'][region])) {
			return 'en_US';
		} else {
			if('undefined' == typeof(this.maps['regionlang2locale'][region][lang])) {
				return 'en_US';
			} else {
				return this.maps['regionlang2locale'][region][lang];
			}
		}
	},
	
	'templates': {
		'default': {
			'item': (
				'<div class="tooltip-item template-default">' +
		    		'<img class="icon" src="<%= this.path_host_media %>/wow/icons/56/<% if(this.icon) { %><%= this.icon %><% } else { %>inv_misc_questionmark<% } %>.jpg" />' +
			    	 /* --- START simple mode -------------------------------- */
					'<div class="data wdt-show-only-simple">' +
						'<div class="row name cquality-<%= this.quality %>"><%= this.name %></div>' +
						'<% if(this.heroic) { %><div class="row heroic"><%= this.subrender("heroic", this) %></div><% } %>' +
						'<% if(this.boundZone) { %><div class="row boundZone"><%= this.boundZone.name %></div><% } %>' +
						'<% if(this.itemBind) { %><div class="row itemBind"><%= this.localize(["itemBind", this.itemBind]) %></div><% } %>' +
						'<% if(this.maxCount) { %><div class="row maxCount"><%= this.subrender("maxCount", this) %></div><% } %>' +
						'<div class="row classification">' +
							'<% if(this.containerSlots) { %>' +
								'<div class="itemClass"><%= this.subrender("containerSlots", this) %></div>' +
							'<% } else { %>' +
								'<% if(this.equippable) { %><div class="inventoryType"><%= this.localize(["inventoryType", this.inventoryType]) %></div><% } %>' +
								'<div class="itemClass"><%= this.localize(["itemClass", this.itemClass, this.itemSubClass]) %></div>' +
							'<% } %>' +
						'</div>' +
						'<% if(this.baseArmor) { %><div class="row baseArmor"><%= this.subrender("baseArmor", this) %></div><% } %>' +
						'<% if(this.weaponInfo) { %>' +
							'<div class="weaponInfo">' +
								'<% if(this.weaponInfo.damage) { for(var i=0; i<this.weaponInfo.damage.length; i++) { var current = this.weaponInfo.damage[i]; %><div class="row damage"><%= this.subrender("damage", current) %></div><% } } %>' +
								'<div class="weaponSpeed"><%= this.subrender("weaponSpeed", this.weaponInfo) %></div>' +
								'<div class="row dps"><%= this.subrender("dps", this.weaponInfo) %></div>' +
							'</div>' +
						'<% } %>' +
						'<% if(this.bonusStats) { for(var i=0; i<this.bonusStats.length; i++) { var current = this.bonusStats[i]; if(current.stat in WowDataTooltip.maps.item.primaryStats) { %><div class="row primaryStat"><% if(current.amount >= 0) { %>+<% } %><%= current.amount %> <%= this.localize(["itemStat", current.stat]) %></div><% } } } %>' +
						'<% if(this.gemInfo) { %><div class="row gemInfo"><%= this.gemInfo.bonus.name %></div><% } %>' +
						'<% if(this.socketInfo) { %><div class="socketInfo"><% if(this.socketInfo.sockets) { for(var i=0; i<this.socketInfo.sockets.length; i++) { var current = this.socketInfo.sockets[i]; %><div class="row socket"><span class="icon-socket socket-<%= current.type %>"><span class="empty"></span><span class="frame"></span></span> <%= this.localize(["itemSocket", current.type]) %></div><% } } %></div><% } %>' +
						'<% if(this.maxDurability) { %><div class="row maxDurability"><%= this.subrender("maxDurability", this) %></div><% } %>' +
						'<% if(this.allowableClasses) { %><div class="row allowableClasses"><%= this.subrender("allowableClasses", this) %></div><% } %>' +
						'<% if(this.allowableRaces) { %><div class="row allowableRaces"><%= this.subrender("allowableRaces", this) %></div><% } %>' +
						'<% if(this.requiredLevel) { %><div class="row requiredLevel"><%= this.subrender("requiredLevel", this) %></div><% } %>' +
						'<% if(this.requiredSkill) { %><div class="row requiredSkill"><%= this.subrender("requiredSkill", this) %></div><% } %>' +
						'<% if(this.itemLevel) { %><div class="row itemLevel"><%= this.subrender("itemLevel", this) %></div><% } %>' +
						'<% if(this.bonusStats) { for(var i=0; i<this.bonusStats.length; i++) { var current = this.bonusStats[i]; if(current.stat in WowDataTooltip.maps.item.secondaryStats) { %><div class="row secondaryStat"><%= this.subrender(["itemStat", current.stat], current) %></div><% } } } %>' +
						'<% if(this.itemSpells) { for(var i=0; i<this.itemSpells.length; i++) { var current = this.itemSpells[i]; if(current.spell.description) { %><div class="row secondaryStat"><%= this.subrender("itemSpell", current) %></div><% } } } %>' +
						'<% if(this.description) { %><div class="row description">&quot;<%= this.description %>&quot;</div><% } %>' +
				    	'<% if(this.extendedActive) { %><div class="info-meta">Hold [<%= this.extendedKeyCodeLabel %>] to switch modes!</div><% } %>' +
					'</div>' +
					 /* --- END simple mode ---------------------------------- */
					 /* --- START extended mode ------------------------------ */
				    '<% if(this.extendedActive) { %>' +
						'<div class="data wdt-show-only-extended">' +
							'<div class="row name cquality-<%= this.quality %>"><%= this.name %></div>' +
							'<div class="row id"><%= this.subrender("itemId", this) %></div>' +
							'<% if(this.stackable > 1) { %><div class="row stackable"><%= this.subrender("stackable", this) %></div><% } %>' +
							// itemSource, maybe...
							'<div class="row sellPrice"><%= this.subrender("sellPrice", this) %></div>' +
							'<% if(this.isAuctionable) { %><div class="row isAuctionable"><%= this.localize("itemIsAuctionable") %></div><% } %>' +
							'<div class="info-meta">Release [<%= this.extendedKeyCodeLabel %>] to switch modes!</div>' +
				    	'</div>' +
			    	'<% } %>' +
					 /* --- END extended mode -------------------------------- */
				'</div>'
			),
			'character': (
				'<div class="tooltip-character template-default">' +
			    	'<img class="thumbnail" src="<%= this.path_host %>/static-render/<%= this.region %>/<%= this.thumbnail %>?alt=/wow/static/images/2d/avatar/<%= this.race %>-<%= this.gender %>.jpg" />' +
			    	 /* --- START simple mode -------------------------------- */
					'<div class="data wdt-show-only-simple">' +
			    		'<div class="name cclass-<%= this.class %>"><%= this.name %></div>' +
			    		'<div class="char-sri"><%= this.subrender("sri", this) %></div>' +
						'<% if(this.talents) { for(var i=0; i<this.talents.length; i++) { var current = this.talents[i]; %><div class="talentspec <% if(current.selected) { %> active<% } %>"><img class="icon-talentspec" src="<%= this.path_host_media %>/wow/icons/18/<% if(current.icon) { %><%= current.icon %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> <%= current.name %></div><% } } %>' +
						'<% if(this.guild) { %><div class="guild"><div class="guildname">&lt;<%= this.guild.name %>&gt;<% if(this.guild.level) { %><span class="guildlevel"> (<%= this.guild.level %>)</span><% } %></div></div><% } %>' +
						'<div class="realm"><%= this.realm %></div>' +
						'<div class="achievementpoints"><span class="achpoints"><%= this.achievementPoints %></span></div>' +
				    	'<% if(this.extendedActive) { %><div class="info-meta">Hold [<%= this.extendedKeyCodeLabel %>] to switch modes!</div><% } %>' +
			    	'</div>' +
					 /* --- END simple mode ---------------------------------- */
					 /* --- START extended mode ------------------------------ */
				    '<% if(this.extendedActive) { %>' +
						'<div class="data wdt-show-only-extended">' +
				    		'<div class="name cclass-<%= this.class %>"><%= this.name %></div>' +
							'<% if(this.items) { %><div class="itemlevel"><%= this.subrender("ilvl", this.items) %></div><% } %>' +
							'<% if(this.professions) { %><div class="professions">' +
								'<% if(this.professions.primary) { for(var i=0; i<this.professions.primary.length; i++) { var current = this.professions.primary[i]; if(current.rank > 0) { %><div class="profession-primary"><img class="icon-profession" src="<%= this.path_host_media %>/wow/icons/18/<% if(current.icon) { %><%= current.icon %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> <%= current.name %>: <%= current.rank %></div><% } } } %>' +
								'<% if(this.professions.secondary) { for(var i=0; i<this.professions.secondary.length; i++) { var current = this.professions.secondary[i]; if(current.rank > 0) { %><div class="profession-secondary"><img class="icon-profession" src="<%= this.path_host_media %>/wow/icons/18/<% if(current.icon) { %><%= current.icon %><% } else { %>inv_misc_questionmark<% } %>.jpg"/> <%= current.name %>: <%= current.rank %></div><% } } } %>' +
							'</div><% } %>' +
							'<div class="info-meta">Release [<%= this.extendedKeyCodeLabel %>] to switch modes!</div>' +
				    	'</div>' +
			    	'<% } %>' +
					 /* --- END extended mode -------------------------------- */
			    '</div>'
			),
			'guild': (
				'<div class="tooltip-guild template-default">' +
	    			'<div class="name cside-<%= this.side %>"><%= this.name %></div>' +
		    		'<div class="guild-sri"><%= this.subrender("sri", this) %></div>' +
					'<% if(this.membercount) { %><div class="guild-members"><%= this.subrender("members", this) %></div><% } %>' +
					'<div class="achievementpoints last"><span class="achpoints"><%= this.achievementPoints %></span></div>' +
				'</div>'
			),
			'realm': (
				'<div class="tooltip-realm template-default">' +
					'<% if(this.notfound) { %>' +
	    				'<div class="notfound"><%= this.notfound %></div>' +
					'<% } else { %>' +
    					'<div class="type type-<%= this.type %>"><%= this.localize(["realmType", this.type]) %></div>' +
    					'<div class="name"><%= this.name %></div>' +
						'<% if(this.queue) { %><div class="status queue-<%= this.queue %>"><%= this.localize(["realmStatus", this.status]) %> (<%= this.localize(["realmQueue", this.queue]) %>)</div><% } else { %><div class="status status-<%= this.status %>"><%= this.localize(["realmStatus", this.status]) %></div><% } %>' +
    					'<div class="population"><%= this.localize(["realmPopulation", this.population]) %></div>' +
					'<% } %>' +
				'</div>'				
			)
		}
	},
	
	'i18n': {
		'en_US': {
			'meta': {
				'locale':'en_US'
			},
			'templates': {
				'item': {
					'itemId':'Item ID: <%= this.id %>',
					'heroic':'Heroic',
					'maxCount':'Unique<% if(this.maxCount > 1) { %> (<%= this.maxCount %>)<% } %>',
					'containerSlots':'<%= this.containerSlots %> Slot <%= this.localize(["itemClass", this.itemClass, this.itemSubClass]) %>',
					'damage':'<%= this.minDamage %> - <%= this.maxDamage %> Damage',
					'weaponSpeed':'Speed <%= this.weaponSpeed %>',
					'dps':'(<%= this.dps.toFixed(2) %> damage per second)',
					'baseArmor':'<%= this.baseArmor %> Armor',
					'maxDurability':'Durability <%= this.maxDurability %> / <%= this.maxDurability %>',
					'requiredLevel':'Requires Level <%= this.requiredLevel %>',
					'requiredSkill':'Requires <%= this.localize(["characterSkill", this.requiredSkill]) %> (<%= this.requiredSkillRank %>)',
					'itemLevel':'Item Level <%= this.itemLevel %>',
					'allowableClasses':'Classes: <% for(var i=0; i<this.allowableClasses.length; i++) { var current = this.allowableClasses[i]; %><% if(i > 0) { %>, <% } %><span class="cclass-<%= current %>"><%= this.localize(["characterClass", current])%></span><% } %>',
					'allowableRaces':'Races: <% for(var i=0; i<this.allowableRaces.length; i++) { var current = this.allowableRaces[i]; %><% if(i > 0) { %>, <% } %><span><%= this.localize(["characterRace", current])%></span><% } %>',
					'itemStat':{
						'13':'Equip: Increases your dodge rating by <%= this.amount %>.',
						'14':'Equip: Increases your parry rating by <%= this.amount %>.',
						'31':'Equip: Increases your hit rating by <%= this.amount %>.',
						'32':'Equip: Increases your critical strike rating by <%= this.amount %>.',
						'35':'Equip: Increases your resilience rating by <%= this.amount %>.',
						'36':'Equip: Increases your haste rating by <%= this.amount %>.',
						'37':'Equip: Increases your expertise rating by <%= this.amount %>.',
						'38':'Equip: Increases your attack power by <%= this.amount %>.',
						'46':'Equip: Increases your health regeneration by <%= this.amount %>.',
						'45':'Equip: Increases spell power by <%= this.amount %>.',
						'47':'Equip: Increases spell penetration by <%= this.amount %>.',
						'49':'Equip: Increases your mastery rating by <%= this.amount %>.'
					},
					'itemSpell':'Equip / Use / Chance on Hit: <%= this.spell.description %>',
					'sellPrice':'<% var c = this.moneySplitter(this.sellPrice); %>Sell Price: <% if(c.gold > -1) { %><span class="icon-gold"><%= c.gold %></span><% } %><% if(c.silver > -1) { %><span class="icon-silver"><%= c.silver %></span><% } %><% if(c.copper) { %><span class="icon-copper"><%= c.copper %></span><% } else { %><span class="icon-copper">0</span><%} %>',
					'stackable':'Stackable (<%= this.stackable %>)'
				},
				'character': {
					'sri':'<%= this.level %> <%= this.localize(["characterRace", this.race]) %> <%= this.localize(["characterClass", this.class]) %>',
					'ilvl':'<%= this.averageItemLevelEquipped %> average item level (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri':'Level <%= this.level %> <%= this.localize(["factionSide", this.side]) %> Guild, <%= this.realm %>',
					'members':'<%= this.membercount %> members'
				}
			},
			'loading-realm':'Loading realm...',
			'loading-item':'Loading item...',
			'loading-character':'Loading character...',
			'loading-guild':'Loading guild...',
			'realm-not-found':'Realm not found!',
			'itemIsAuctionable':'Can be auctioned',
			'itemBind':{'1':'Binds when picked up','2':'Binds when equipped','3':'Binds when used'},
			'itemStat':{'3':'Agility','4':'Strength','5':'Intellect','6':'Spirit','7':'Stamina'},
			'itemSocket':{'BLUE':'Blue Socket','RED':'Red Socket','YELLOW':'Yellow Socket','META':'Meta Socket','ORANGE':'Orange Socket','PURPLE':'Purple Socket','GREEN':'Green Socket','PRISMATIC':'Prismatic Socket','HYDRAULIC':'Hydraulic Socket','COGWHEEL':'Cogwheel Socket'},
			'itemClass':{
				'0':{'0':'Consumeable','1':'Potion','2':'Elixir','3':'Flask','4':'Scroll','5':'Food & Drink','6':'Item Enhancement','7':'Bandage','8':'Other'},
				'1':{'0':'Bag','1':'Soul Bag','2':'Herb Bag','3':'Enchanting Bag','4':'Engineering Bag','5':'Gem Bag','6':'Mining Bag','7':'Leatherworking Bag','8':'Inscription Bag','9':'Tackle Box'},
				'2':{'0':'Axe'/*1H*/,'1':'Axe'/*2H*/,'2':'Bow','3':'Gun','4':'Mace'/*1H*/,'5':'Mace'/*2H*/,'6':'Polearm','7':'Sword'/*1H*/,'8':'Sword'/*2H*/,'10':'Staff','13':'Fist Weapon','14':'Miscellaneous','15':'Dagger','16':'Thrown','18':'Crossbow','19':'Wand','20':'Fishing Pole'},
				'3':{'0':'Red Gem','1':'Blue Gem','2':'Yellow Gem','3':'Purple Gem','4':'Green Gem','5':'Orange Gem','6':'Meta Gem','7':'Simple Gem','8':'Prismatic Gem','9':'Hydraulic Gem','10':'Cogwheel Gem'},
				'4':{'0':'Miscellaneous','1':'Cloth','2':'Leather','3':'Mail','4':'Plate','6':'Shield','7':'Libram','8':'Idol','9':'Totem','10':'Sigil','11':'Relic'},
				'7':{'0':'Trade Goods','1':'Parts','2':'Explosives','3':'Devices','4':'Jewelcrafting','5':'Cloth','6':'Leather','7':'Metal & Stone','8':'Meat','9':'Herb','10':'Elemental','11':'Other','12':'Enchanting','13':'Materials','14':'Item Enchantment'},
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
			'factionSide':{'0':'Alliance','1':'Horde'},
			'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
			'realmQueue':{'false':'No queue','true':'Queue'},
			'realmStatus':{'false':'Offline','true':'Online'},
			'realmPopulation':{'low':'Low population','medium':'Medium population','high':'High population'}
		},
		'es_MX': {
			'meta': {
				'locale': 'es_MX'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.localize(["characterClass", this.class, this.gender]) %> de <%= this.localize(["characterRace", this.race, this.gender]) %>, nivel <%= this.level %>',
					'ilvl': '<%= this.averageItemLevelEquipped %> nvl. de obj. promedio (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : 'Hermandad <%= this.localize(["factionSide", this.side]) %>, nivel <%= this.level %>, <%= this.realm %>',
					'members': '<%= this.membercount %> miembros'
				}
			},
			'loading-realm':'Cargando reino ...',
			'loading-item':'Cargando Objeto...',
			'loading-character':'Cargando carácter ...',
			'loading-guild':'Carga del gremio ...',
			'realm-not-found':'Reino que no se encuentra!',
			'characterClass':{'1':{'0':'Guerrero','1':'Guerrera'},'2':{'0':'Paladín','1':'Paladín'},'3':{'0':'Cazador','1':'Cazadora'},'4':{'0':'Pícaro','1':'Pícara'},'5':{'0':'Sacerdote','1':'Sacerdotisa'},'6':{'0':'Caballero de la Muerte','1':'Caballero de la Muerte'},'7':{'0':'Chamán','1':'Chamán'},'8':{'0':'Mago','1':'Maga'},'9':{'0':'Brujo','1':'Bruja'},'11':{'0':'Druida','1':'Druida'}},
			'characterRace':{'1':{'0':'Humano','1':'Humana'},'2':{'0':'Orco','1':'Orco'},'3':{'0':'Enano','1':'Enana'},'4':{'0':'Elfo de la noche','1':'Elfa de la noche'},'5':{'0':'No-muerto','1':'No-muerta'},'6':{'0':'Tauren','1':'Tauren'},'7':{'0':'Gnomo','1':'Gnoma'},'8':{'0':'Trol','1':'Trol'},'9':{'0':'Goblin','1':'Goblin'},'10':{'0':'Elfo de sangre','1':'Elfa de sangre'},'11':{'0':'Draenei','1':'Draenei'},'22':{'0':'Huargen','1':'Huargen'}},
			'factionSide':{'0':'Alianza','1':'Horda'},
			'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
			'realmQueue':{'false':'no hay cola','true':'cola'},
			'realmStatus':{'false':'fuera de línea','true':'en línea'},
			'realmPopulation':{'low':'población de bajos','medium':'población media','high':'población de alto'}
		},
		'en_GB': {
			'meta': {
				'locale':'en_GB'
			},
			'templates': {
				'item': {
					'itemId':'Item ID: <%= this.id %>',
					'heroic':'Heroic',
					'maxCount':'Unique<% if(this.maxCount > 1) { %> (<%= this.maxCount %>)<% } %>',
					'containerSlots':'<%= this.containerSlots %> Slot <%= this.localize(["itemClass", this.itemClass, this.itemSubClass]) %>',
					'damage':'<%= this.minDamage %> - <%= this.maxDamage %> Damage',
					'weaponSpeed':'Speed <%= this.weaponSpeed %>',
					'dps':'(<%= this.dps.toFixed(2) %> damage per second)',
					'baseArmor':'<%= this.baseArmor %> Armor',
					'maxDurability':'Durability <%= this.maxDurability %> / <%= this.maxDurability %>',
					'requiredLevel':'Requires Level <%= this.requiredLevel %>',
					'requiredSkill':'Requires <%= this.localize(["characterSkill", this.requiredSkill]) %> (<%= this.requiredSkillRank %>)',
					'itemLevel':'Item Level <%= this.itemLevel %>',
					'allowableClasses':'Classes: <% for(var i=0; i<this.allowableClasses.length; i++) { var current = this.allowableClasses[i]; %><% if(i > 0) { %>, <% } %><span class="cclass-<%= current %>"><%= this.localize(["characterClass", current])%></span><% } %>',
					'allowableRaces':'Races: <% for(var i=0; i<this.allowableRaces.length; i++) { var current = this.allowableRaces[i]; %><% if(i > 0) { %>, <% } %><span><%= this.localize(["characterRace", current])%></span><% } %>',
					'itemStat':{
						'13':'Equip: Increases your dodge rating by <%= this.amount %>.',
						'14':'Equip: Increases your parry rating by <%= this.amount %>.',
						'31':'Equip: Increases your hit rating by <%= this.amount %>.',
						'32':'Equip: Increases your critical strike rating by <%= this.amount %>.',
						'35':'Equip: Increases your resilience rating by <%= this.amount %>.',
						'36':'Equip: Increases your haste rating by <%= this.amount %>.',
						'37':'Equip: Increases your expertise rating by <%= this.amount %>.',
						'38':'Equip: Increases your attack power by <%= this.amount %>.',
						'46':'Equip: Increases your health regeneration by <%= this.amount %>.',
						'45':'Equip: Increases spell power by <%= this.amount %>.',
						'47':'Equip: Increases spell penetration by <%= this.amount %>.',
						'49':'Equip: Increases your mastery rating by <%= this.amount %>.'
					},
					'itemSpell':'Equip / Use / Chance on Hit: <%= this.spell.description %>',
					'sellPrice':'<% var c = this.moneySplitter(this.sellPrice); %>Sell Price: <% if(c.gold > -1) { %><span class="icon-gold"><%= c.gold %></span><% } %><% if(c.silver > -1) { %><span class="icon-silver"><%= c.silver %></span><% } %><% if(c.copper) { %><span class="icon-copper"><%= c.copper %></span><% } else { %><span class="icon-copper">0</span><%} %>',
					'stackable':'Stackable (<%= this.stackable %>)'
				},
				'character': {
					'sri':'<%= this.level %> <%= this.localize(["characterRace", this.race]) %> <%= this.localize(["characterClass", this.class]) %>',
					'ilvl':'<%= this.averageItemLevelEquipped %> average item level (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri':'Level <%= this.level %> <%= this.localize(["factionSide", this.side]) %> Guild, <%= this.realm %>',
					'members':'<%= this.membercount %> members'
				}
			},
			'loading-realm':'Loading realm...',
			'loading-item':'Loading item...',
			'loading-character':'Loading character...',
			'loading-guild':'Loading guild...',
			'realm-not-found':'Realm not found!',
			'itemIsAuctionable':'Can be auctioned',
			'itemBind':{'1':'Binds when picked up','2':'Binds when equipped','3':'Binds when used'},
			'itemStat':{'3':'Agility','4':'Strength','5':'Intellect','6':'Spirit','7':'Stamina'},
			'itemSocket':{'BLUE':'Blue Socket','RED':'Red Socket','YELLOW':'Yellow Socket','META':'Meta Socket','ORANGE':'Orange Socket','PURPLE':'Purple Socket','GREEN':'Green Socket','PRISMATIC':'Prismatic Socket','HYDRAULIC':'Hydraulic Socket','COGWHEEL':'Cogwheel Socket'},
			'itemClass':{
				'0':{'0':'Consumeable','1':'Potion','2':'Elixir','3':'Flask','4':'Scroll','5':'Food & Drink','6':'Item Enhancement','7':'Bandage','8':'Other'},
				'1':{'0':'Bag','1':'Soul Bag','2':'Herb Bag','3':'Enchanting Bag','4':'Engineering Bag','5':'Gem Bag','6':'Mining Bag','7':'Leatherworking Bag','8':'Inscription Bag','9':'Tackle Box'},
				'2':{'0':'Axe'/*1H*/,'1':'Axe'/*2H*/,'2':'Bow','3':'Gun','4':'Mace'/*1H*/,'5':'Mace'/*2H*/,'6':'Polearm','7':'Sword'/*1H*/,'8':'Sword'/*2H*/,'10':'Staff','13':'Fist Weapon','14':'Miscellaneous','15':'Dagger','16':'Thrown','18':'Crossbow','19':'Wand','20':'Fishing Pole'},
				'3':{'0':'Red Gem','1':'Blue Gem','2':'Yellow Gem','3':'Purple Gem','4':'Green Gem','5':'Orange Gem','6':'Meta Gem','7':'Simple Gem','8':'Prismatic Gem','9':'Hydraulic Gem','10':'Cogwheel Gem'},
				'4':{'0':'Miscellaneous','1':'Cloth','2':'Leather','3':'Mail','4':'Plate','6':'Shield','7':'Libram','8':'Idol','9':'Totem','10':'Sigil','11':'Relic'},
				'7':{'0':'Trade Goods','1':'Parts','2':'Explosives','3':'Devices','4':'Jewelcrafting','5':'Cloth','6':'Leather','7':'Metal & Stone','8':'Meat','9':'Herb','10':'Elemental','11':'Other','12':'Enchanting','13':'Materials','14':'Item Enchantment'},
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
			'factionSide':{'0':'Alliance','1':'Horde'},
			'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
			'realmQueue':{'false':'No queue','true':'Queue'},
			'realmStatus':{'false':'Offline','true':'Online'},
			'realmPopulation':{'low':'Low population','medium':'Medium population','high':'High population'}
		},
		'es_ES': {
			'meta': {
				'locale': 'es_ES'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.localize(["characterRace", this.race, this.gender]) %> <%= this.localize(["characterClass", this.class, this.gender]) %> <%= this.level %>',
					'ilvl': '<%= this.averageItemLevelEquipped %> Nivel medio de objeto (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : 'Hermandad (<%= this.localize(["factionSide", this.side]) %>), nivel <%= this.level %>, <%= this.realm %>',
					'members': '<%= this.membercount %> miembros'
				}
			},
			'loading-realm'    : 'Cargando reino ...',
			'loading-item'     : 'Cargando Objeto...',
			'loading-character': 'Cargando carácter ...',
			'loading-guild'    : 'Carga del gremio ...',
			'realm-not-found'  : 'Reino que no se encuentra!',
			'characterClass:1' : {'gender:0': 'Guerrero',               'gender:1': 'Guerrera'},
			'characterClass:2' : {'gender:0': 'Paladín',                'gender:1': 'Paladín'},
			'characterClass:3' : {'gender:0': 'Cazador',                'gender:1': 'Cazadora'},
			'characterClass:4' : {'gender:0': 'Pícaro',                 'gender:1': 'Pícara'},
			'characterClass:5' : {'gender:0': 'Sacerdote',              'gender:1': 'Sacerdotisa'},
			'characterClass:6' : {'gender:0': 'Caballero de la Muerte', 'gender:1': 'Caballero de la Muerte'},
			'characterClass:7' : {'gender:0': 'Chamán',                 'gender:1': 'Chamán'},
			'characterClass:8' : {'gender:0': 'Mago',                   'gender:1': 'Maga'},
			'characterClass:9' : {'gender:0': 'Brujo',                  'gender:1': 'Bruja'},
			'characterClass:11': {'gender:0': 'Druida',                 'gender:1': 'Druida'},
			'characterRace:1'  : {'gender:0': 'Humano',                 'gender:1': 'Humana'},
			'characterRace:2'  : {'gender:0': 'Orco',                   'gender:1': 'Orco'},
			'characterRace:3'  : {'gender:0': 'Enano',                  'gender:1': 'Enana'},
			'characterRace:4'  : {'gender:0': 'Elfo de la noche',       'gender:1': 'Elfa de la noche'},
			'characterRace:5'  : {'gender:0': 'No-muerto',              'gender:1': 'No-muerta'},
			'characterRace:6'  : {'gender:0': 'Tauren',                 'gender:1': 'Tauren'},
			'characterRace:7'  : {'gender:0': 'Gnomo',                  'gender:1': 'Gnoma'},
			'characterRace:8'  : {'gender:0': 'Trol',                   'gender:1': 'Trol'},
			'characterRace:9'  : {'gender:0': 'Goblin',                 'gender:1': 'Goblin'},
			'characterRace:10' : {'gender:0': 'Elfo de sangre',         'gender:1': 'Elfa de sangre'},
			'characterRace:11' : {'gender:0': 'Draenei',                'gender:1': 'Draenei'},
			'characterRace:22' : {'gender:0': 'Huargen',                'gender:1': 'Huargen'},
			'factionSide:0'  : 'Alianza',
			'factionSide:1'  : 'Horda',
			'realmType:pve'         : 'PvE',
			'realmType:pvp'         : 'PvP',
			'realmType:rp'          : 'RP',
			'realmType:rppvp'       : 'RPPvP',
			'realmQueue:false'      : 'no hay cola',
			'realmQueue:true'       : 'cola',
			'realmStatus:false'     : 'fuera de línea',
			'realmStatus:true'      : 'en línea',
			'realmPopulation:low'   : 'población de bajos',
			'realmPopulation:medium': 'población media',
			'realmPopulation:high'  : 'población de alto'
		},
		'fr_FR': {
			'meta': {
				'locale': 'fr_FR'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.localize(["characterClass", this.class, this.gender]) %> <%= this.localize(["characterRace", this.race, this.gender]) %> niv. <%= this.level %>',
					'ilvl': '<%= this.averageItemLevelEquipped %> Niveau moyen des objets (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : 'Guilde de niveau <%= this.level %>, faction <%= this.localize(["factionSide", this.side]) %>, <%= this.realm %>',
					'members': '<%= this.membercount %> membres'
				}
			},
			'loading-realm'    : 'Chargement realm ...',
			'loading-item'     : 'Chargement article ...',
			'loading-character': 'Chargement de caractère ...',
			'loading-guild'    : 'Chargement de guilde ...',
			'realm-not-found'  : 'Realm pas été trouvé!',
			'characterClass:1' : {'gender:0': 'Guerrier',             'gender:1': 'Guerrière'},
			'characterClass:2' : {'gender:0': 'Paladin',              'gender:1': 'Paladin'},
			'characterClass:3' : {'gender:0': 'Chasseur',             'gender:1': 'Chasseresse'},
			'characterClass:4' : {'gender:0': 'Voleur',               'gender:1': 'Voleuse'},
			'characterClass:5' : {'gender:0': 'Prêtre',               'gender:1': 'Prêtresse'},
			'characterClass:6' : {'gender:0': 'Chevalier de la mort', 'gender:1': 'Chevalier de la mort'},
			'characterClass:7' : {'gender:0': 'Chaman',               'gender:1': 'Chamane'},
			'characterClass:8' : {'gender:0': 'Mage',                 'gender:1': 'Mage'},
			'characterClass:9' : {'gender:0': 'Démoniste',            'gender:1': 'Démoniste'},
			'characterClass:11': {'gender:0': 'Druide',               'gender:1': 'Druidesse'},
			'characterRace:1'  : {'gender:0': 'Humain',               'gender:1': 'Humaine'},
			'characterRace:2'  : {'gender:0': 'Orc',                  'gender:1': 'Orque'},
			'characterRace:3'  : {'gender:0': 'Nain',                 'gender:1': 'Naine'},
			'characterRace:4'  : {'gender:0': 'Elfe de la nuit',      'gender:1': 'Elfe de la nuit'},
			'characterRace:5'  : {'gender:0': 'Mort-vivant',          'gender:1': 'Morte-vivante'},
			'characterRace:6'  : {'gender:0': 'Tauren',               'gender:1': 'Tauren'},
			'characterRace:7'  : {'gender:0': 'Gnome',                'gender:1': 'Gnome'},
			'characterRace:8'  : {'gender:0': 'Troll',                'gender:1': 'Trollesse'},
			'characterRace:9'  : {'gender:0': 'Gobelin',              'gender:1': 'Gobeline'},
			'characterRace:10' : {'gender:0': 'Elfe de sang',         'gender:1': 'Elfe de sang'},
			'characterRace:11' : {'gender:0': 'Draeneï',              'gender:1': 'Draeneï'},
			'characterRace:22' : {'gender:0': 'Worgen',               'gender:1': 'Worgen'},
			'factionSide:0'  : 'Alliance',
			'factionSide:1'  : 'Horde',
			'realmType:pve'         : 'PvE',
			'realmType:pvp'         : 'PvP',
			'realmType:rp'          : 'RP',
			'realmType:rppvp'       : 'RPPvP',
			'realmQueue:false'      : 'aucune file d\'attente',
			'realmQueue:true'       : 'file d\'attente',
			'realmStatus:false'     : 'Hors',
			'realmStatus:true'      : 'En ligne',
			'realmPopulation:low'   : 'la population est faible',
			'realmPopulation:medium': 'la population moyenne',
			'realmPopulation:high'  : 'élevée de la population'
		},
		'ru_RU': {
			'meta': {
				'locale': 'ru_RU'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.localize(["characterClass", this.class, this.gender]) %>-<%= this.localize(["characterRace", this.race, this.gender]) %> <%= this.level %> yp.',
					'ilvl': '<%= this.averageItemLevelEquipped %> средний (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : 'Гильдия <%= this.level %>-го ур. (<%= this.localize(["factionSide", this.side]) %>), <%= this.realm %>',
					'members': 'Членов гильдии: <%= this.membercount %>'
				}
			},
			'loading-realm'    : 'Загрузка области ...',
			'loading-item'     : 'Загрузка пункт ...',
			'loading-character': 'Загрузка характер ...',
			'loading-guild'    : 'Загрузка гильдии ...',
			'realm-not-found'  : 'Площадь не найден!',
			'characterClass:1' : {'gender:0': 'Воин',          'gender:1': 'Воин'},
			'characterClass:2' : {'gender:0': 'Паладин',       'gender:1': 'Паладин'},
			'characterClass:3' : {'gender:0': 'Охотник',       'gender:1': 'Охотница'},
			'characterClass:4' : {'gender:0': 'Разбойник',     'gender:1': 'Разбойница'},
			'characterClass:5' : {'gender:0': 'Жрец',          'gender:1': 'Жрица'},
			'characterClass:6' : {'gender:0': 'Рыцарь смерти', 'gender:1': 'Рыцарь смерти'},
			'characterClass:7' : {'gender:0': 'Шаман',         'gender:1': 'Шаманка'},
			'characterClass:8' : {'gender:0': 'Маг',           'gender:1': 'Маг'},
			'characterClass:9' : {'gender:0': 'Чернокнижник',  'gender:1': 'Чернокнижница'},
			'characterClass:11': {'gender:0': 'Друид',         'gender:1': 'Друид'},
			'characterRace:1'  : {'gender:0': 'Человек',       'gender:1': 'Человек'},
			'characterRace:2'  : {'gender:0': 'Орк',           'gender:1': 'Орк'},
			'characterRace:3'  : {'gender:0': 'Дворф',         'gender:1': 'Дворф'},
			'characterRace:4'  : {'gender:0': 'Ночной эльф',   'gender:1': 'Ночная эльфийка'},
			'characterRace:5'  : {'gender:0': 'Отрекшийся',    'gender:1': 'Нежить'},
			'characterRace:6'  : {'gender:0': 'Таурен',        'gender:1': 'Таурен'},
			'characterRace:7'  : {'gender:0': 'Гном',          'gender:1': 'Гном'},
			'characterRace:8'  : {'gender:0': 'Тролль',        'gender:1': 'Тролль'},
			'characterRace:9'  : {'gender:0': 'Гоблин',        'gender:1': 'Гоблин'},
			'characterRace:10' : {'gender:0': 'Эльф крови',    'gender:1': 'Эльфийка крови'},
			'characterRace:11' : {'gender:0': 'Дреней',        'gender:1': 'Дреней'},
			'characterRace:22' : {'gender:0': 'Ворген',        'gender:1': 'Ворген'},
			'factionSide:0'  : 'Альянс',
			'factionSide:1'  : 'Орда',
			'realmType:pve'         : 'PvE',
			'realmType:pvp'         : 'PvP',
			'realmType:rp'          : 'RP',
			'realmType:rppvp'       : 'RPPvP',
			'realmQueue:false'      : 'Нет очередей',
			'realmQueue:true'       : 'очередь',
			'realmStatus:false'     : 'автономно',
			'realmStatus:true'      : 'Интернет',
			'realmPopulation:low'   : 'Низкий населения',
			'realmPopulation:medium': 'Средний населения',
			'realmPopulation:high'  : 'Высокая населения'
		},
		'de_DE': {
			'meta': {
				'locale': 'de_DE'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.level %>, <%= this.localize(["characterRace", this.race, this.gender]) %>, <%= this.localize(["characterClass", this.class, this.gender]) %>',
					'ilvl': '<%= this.averageItemLevelEquipped %> Durchschnittliche Gegenstandsstufe (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : 'Stufe <%= this.level %> <%= this.localize(["factionSide", this.side]) %>-Gilde, <%= this.realm %>',
					'members': '<%= this.membercount %> Mitglieder'
				}
			},
			'loading-realm'    : 'Lade Realm ...',
			'loading-item'     : 'Lade Gegenstand ...',
			'loading-character': 'Lade Charakter ...',
			'loading-guild'    : 'Lade Gilde ...',
			'realm-not-found'  : 'Realm nicht gefunden!',
			'characterClass:1' : {'gender:0': 'Krieger',      'gender:1': 'Kriegerin'},
			'characterClass:2' : {'gender:0': 'Paladin',      'gender:1': 'Paladin'},
			'characterClass:3' : {'gender:0': 'Jäger',        'gender:1': 'Jägerin'},
			'characterClass:4' : {'gender:0': 'Schurke',      'gender:1': 'Schurkin'},
			'characterClass:5' : {'gender:0': 'Priester',     'gender:1': 'Priesterin'},
			'characterClass:6' : {'gender:0': 'Todesritter',  'gender:1': 'Todesritter'},
			'characterClass:7' : {'gender:0': 'Schamane',     'gender:1': 'Schamanin'},
			'characterClass:8' : {'gender:0': 'Magier',       'gender:1': 'Magierin'},
			'characterClass:9' : {'gender:0': 'Hexenmeister', 'gender:1': 'Hexenmeisterin'},
			'characterClass:11': {'gender:0': 'Druide',       'gender:1': 'Druidin'},
			'characterRace:1'  : {'gender:0': 'Mensch',       'gender:1': 'Mensch'},
			'characterRace:2'  : {'gender:0': 'Orc',          'gender:1': 'Orc'},
			'characterRace:3'  : {'gender:0': 'Zwerg',        'gender:1': 'Zwerg'},
			'characterRace:4'  : {'gender:0': 'Nachtelf',     'gender:1': 'Nachtelfe'},
			'characterRace:5'  : {'gender:0': 'Untoter',      'gender:1': 'Untote'},
			'characterRace:6'  : {'gender:0': 'Tauren',       'gender:1': 'Tauren'},
			'characterRace:7'  : {'gender:0': 'Gnom',         'gender:1': 'Gnom'},
			'characterRace:8'  : {'gender:0': 'Troll',        'gender:1': 'Troll'},
			'characterRace:9'  : {'gender:0': 'Goblin',       'gender:1': 'Goblin'},
			'characterRace:10' : {'gender:0': 'Blutelf',      'gender:1': 'Blutelfe'},
			'characterRace:11' : {'gender:0': 'Draenei',      'gender:1': 'Draenei'},
			'characterRace:22' : {'gender:0': 'Worgen',       'gender:1': 'Worgen'},
			'factionSide:0'  : 'Allianz',
			'factionSide:1'  : 'Horde',
			'realmType:pve'         : 'PvE',
			'realmType:pvp'         : 'PvP',
			'realmType:rp'          : 'RP',
			'realmType:rppvp'       : 'RPPvP',
			'realmQueue:false'      : 'Keine Warteschlange',
			'realmQueue:true'       : 'Warteschlange',
			'realmStatus:false'     : 'Offline',
			'realmStatus:true'      : 'Online',
			'realmPopulation:low'   : 'Niedrige Bevölkerung',
			'realmPopulation:medium': 'Mittlere Bevölkerung',
			'realmPopulation:high'  : 'Hohe Bevölkerung'
		},
		'ko_KR': {
			'meta': {
				'locale': 'ko_KR'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.level %> <%= this.localize(["characterRace", this.race]) %> <%= this.localize(["characterClass", this.class]) %>',
					'ilvl': '<%= this.averageItemLevelEquipped %> 평균 아이템 레벨 (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : '<%= this.level %> 레벨 <%= this.localize(["factionSide", this.side]) %> 길드, <%= this.realm %>',
					'members': '구성원 <%= this.membercount %>명'
				}
			},
			'loading-realm'    : '영역을로드하는 중 ...',
			'loading-item'     : '항목을로드 중 ...',
			'loading-character': '문자를로드 중입니다 ...',
			'loading-guild'    : '로딩 길드 ...',
			'realm-not-found'  : '영역을 찾을 수 없습니다!',
			'characterClass:1' : '전사',
			'characterClass:2' : '성기사',
			'characterClass:3' : '사냥꾼',
			'characterClass:4' : '도적',
			'characterClass:5' : '사제',
			'characterClass:6' : '죽음의 기사',
			'characterClass:7' : '주술사',
			'characterClass:8' : '마법사',
			'characterClass:9' : '흑마법사',
			'characterClass:11': '드루이드',
			'characterRace:1'  : '인간',
			'characterRace:2'  : '오크',
			'characterRace:3'  : '드워프',
			'characterRace:4'  : '나이트 엘프',
			'characterRace:5'  : '언데드',
			'characterRace:6'  : '타우렌',
			'characterRace:7'  : '노움',
			'characterRace:8'  : '트롤',
			'characterRace:9'  : '고블린',
			'characterRace:10' : '블러드 엘프',
			'characterRace:11' : '드레나이',
			'characterRace:22' : '늑대인간',
			'factionSide:0'  : '얼라이언스',
			'factionSide:1'  : '호드',
			'realmType:pve'         : 'PvE',
			'realmType:pvp'         : 'PvP',
			'realmType:rp'          : 'RP',
			'realmType:rppvp'       : 'RPPvP',
			'realmQueue:false'      : '없음 대기열 없음',
			'realmQueue:true'       : '대기열',
			'realmStatus:false'     : '오프라인',
			'realmStatus:true'      : '온라인으로',
			'realmPopulation:low'   : '낮은 인구',
			'realmPopulation:medium': '중간 인구',
			'realmPopulation:high'  : '높은 인구'
		},
		'zh_TW': {
			'meta': {
				'locale': 'zh_TW'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.level %> <%= this.localize(["characterRace", this.race]) %> <%= this.localize(["characterClass", this.class]) %>',
					'ilvl': '<%= this.averageItemLevelEquipped %> 平均物品等級 (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : '等級<%= this.level %><%= this.localize(["factionSide", this.side]) %>公會, <%= this.realm %>',
					'members': '共<%= this.membercount %>位成員'
				}
			},
			'loading-realm'    : '載入境界...',
			'loading-item'     : '加載項...',
			'loading-character': '載入字符...',
			'loading-guild'    : '載入公會...',
			'realm-not-found'  : '境界不存在！',
			'characterClass:1' : '戰士',
			'characterClass:2' : '聖騎士',
			'characterClass:3' : '獵人',
			'characterClass:4' : '流氓',
			'characterClass:5' : '牧師',
			'characterClass:6' : '死亡騎士',
			'characterClass:7' : '巫',
			'characterClass:8' : '法師',
			'characterClass:9' : '術士',
			'characterClass:11': '德魯伊',
			'characterRace:1'  : '人類',
			'characterRace:2'  : '獸人',
			'characterRace:3'  : '侏儒',
			'characterRace:4'  : '暗夜精靈',
			'characterRace:5'  : '被遺忘者',
			'characterRace:6'  : '牛頭人',
			'characterRace:7'  : '侏儒',
			'characterRace:8'  : '拖釣',
			'characterRace:9'  : '小妖精',
			'characterRace:10' : '血精靈',
			'characterRace:11' : '德萊尼',
			'characterRace:22' : '狼人',
			'factionSide:0'  : '的聯盟',
			'factionSide:1'  : '部落',
			'realmType:pve'         : 'PvE',
			'realmType:pvp'         : 'PvP',
			'realmType:rp'          : 'RP',
			'realmType:rppvp'       : 'RPPvP',
			'realmQueue:false'      : '沒有隊列',
			'realmQueue:true'       : '隊列中',
			'realmStatus:false'     : '離線',
			'realmStatus:true'      : '在線',
			'realmPopulation:low'   : '低人口',
			'realmPopulation:medium': '中等人口',
			'realmPopulation:high'  : '高人口'
		},
		'zh_CN': {
			'meta': {
				'locale': 'zh_CN'
			},
			'templates': {
				'character': {
					'sri' : '<%= this.level %> <%= this.localize(["characterRace", this.race]) %> <%= this.localize(["characterClass", this.class]) %>',
					'ilvl': '<%= this.averageItemLevelEquipped %> 物品平均等级 (<%= this.averageItemLevel %>)'
				},
				'guild': {
					'sri'    : '<%= this.level %> 级 <%= this.localize(["factionSide", this.side]) %> 公会, <%= this.realm %>',
					'members': '<%= this.membercount %> 个成员'
				}
			},
			'loading-realm'    : '载入境界...',
			'loading-item'     : '载入项目...',
			'loading-character': '载入字符...',
			'loading-guild'    : '正在载入公会...',
			'realm-not-found'  : '没有发现的境界！',
			'characterClass:1' : '战士',
			'characterClass:2' : '圣骑士',
			'characterClass:3' : '猎人',
			'characterClass:4' : '潜行者',
			'characterClass:5' : '牧师',
			'characterClass:6' : '死亡骑士',
			'characterClass:7' : '萨满祭司',
			'characterClass:8' : '法师',
			'characterClass:9' : '术士',
			'characterClass:11': '德鲁伊',
			'characterRace:1'  : '人类',
			'characterRace:2'  : '兽人',
			'characterRace:3'  : '矮人',
			'characterRace:4'  : '暗夜精灵',
			'characterRace:5'  : '亡灵',
			'characterRace:6'  : '牛头人',
			'characterRace:7'  : '侏儒',
			'characterRace:8'  : '巨魔',
			'characterRace:9'  : '地精',
			'characterRace:10' : '血精灵',
			'characterRace:11' : '德莱尼',
			'characterRace:22' : '狼人',
			'factionSide:0'  : '联盟',
			'factionSide:1'  : '部落',
			'realmType:pve'         : 'PvE',
			'realmType:pvp'         : 'PvP',
			'realmType:rp'          : 'RP',
			'realmType:rppvp'       : 'RPPvP',
			'realmQueue:false'      : '没有队列',
			'realmQueue:true'       : '队列中',
			'realmStatus:false'     : '离线',
			'realmStatus:true'      : '在线',
			'realmPopulation:low'   : '低人口',
			'realmPopulation:medium': '中等人口',
			'realmPopulation:high'  : '高人口'
		}
	},
	
	'patterns': {
		'explicit': {
			'realm'    : /realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'item'     : /item:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'character': /character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'guild'    : /guild:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
		},
		'battlenet': {
			'item'     : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/item\/([^\/#]+).*/,
			'character': /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/#]+).*/,
			'guild'    : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/guild\/([^\/]+)\/([^\/#]+).*/
		},
		'api': {
			'data.classes': 'http://<%= this.host %>/api/wow/data/character/classes?locale=<%= this.locale %>',
			'data.races'  : 'http://<%= this.host %>/api/wow/data/character/races?locale=<%= this.locale %>',
			'realm'       : 'http://<%= this.host %>/api/wow/realm/status?realm=<%= this.realm %>&locale=<%= this.locale %>',
			'item'        : 'http://<%= this.host %>/api/wow/item/<%= this.itemid %>?locale=<%= this.locale %>',
			'character'   : 'http://<%= this.host %>/api/wow/character/<%= this.realm %>/<%= this.character %>?fields=guild,talents,items,professions&locale=<%= this.locale %>',
			'guild'       : 'http://<%= this.host %>/api/wow/guild/<%= this.realm %>/<%= this.guild %>?fields=members&locale=<%= this.locale %>',
		},
		'hash': {
			'data.classes': '<%= this.host %>#<%= this.locale %>',
			'data.races'  : '<%= this.host %>#<%= this.locale %>',
			'realm'       : '<%= this.host %>#<%= this.realm %>#<%= this.locale %>',
			'item'        : '<%= this.host %>#<%= this.itemid %>#<%= this.locale %>',
			'character'   : '<%= this.host %>#<%= this.realm %>#<%= this.character %>#<%= this.locale %>',
			'guild'       : '<%= this.host %>#<%= this.realm %>#<%= this.guild %>#<%= this.locale %>',			
		},
		'helper': {
			'money': /^([0-9]+)([0-9]{2})([0-9]{2})$|([0-9]{1,2})([0-9]{2})$|([0-9]{1,2})$/
		}
	},
	
	'maps': {
		'item': {
			'primaryStats': {
				'3': true, // Agility
				'4': true, // Strength
				'5': true, // Intellect
				'6': true, // Spirit
				'7': true  // Stamina
			},
			'secondaryStats': {
				'13': true, // Dodge rating
				'14': true, // Parry rating
				'31': true, // Hit rating
				'32': true, // Critical strike rating
				'35': true, // Resilience rating
				'36': true, // Haste rating
				'37': true, // Expertise rating
				'38': true, // Attack power
				'46': true, // Health regeneration
				'45': true, // Spell power
				'47': true, // Spell penetration
				'49': true  // Mastery rating
			}
		},
		'host2region': {
			'us.battle.net'       : 'us',
			'eu.battle.net'       : 'eu',
			'kr.battle.net'       : 'kr',
			'tw.battle.net'       : 'tw',
			'www.battlenet.com.cn': 'cn'
		},
		'region2host': {
			'us': 'us.battle.net',
			'eu': 'eu.battle.net',
			'kr': 'kr.battle.net',
			'tw': 'tw.battle.net',
			'cn': 'www.battlenet.com.cn'
		},
		'region2mediahost': {
			'us': 'us.media.blizzard.com',
			'eu': 'eu.media.blizzard.com',
			'kr': 'kr.media.blizzard.com',
			'tw': 'us.media.blizzard.com',
			'cn': 'content.battlenet.com.cn'
		},
		'regionlang2locale': {
			'us': {
				'en': 'en_US',
				'es': 'es_MX'
			},
			'eu': {
				'en': 'en_GB',
				'es': 'es_ES',
				'fr': 'fr_FR',
				'ru': 'ru_RU',
				'de': 'de_DE'
			},
			'kr': {
				'ko': 'ko_KR',
				'en': 'en_US'
			},
			'tw': {
				'zh': 'zh_TW',
				'en': 'en_US'
			},
			'cn': {
				'zh': 'zh_CN',
				'en': 'en_US'
			}
		}
	},
	
	'cache': {
		'data': {
			'character-class': {},
			'character-race': {}
		},
		'template': {
			'item'     : {},
			'character': {},
			'guild'    : {}			
		}
	},
	
	'activeTooltips': []
	
};

WowDataTooltip.init();
