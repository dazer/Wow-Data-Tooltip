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
			}
		}
	},
		
	init: function() {
		// generate merged config
		this.mergeConfig();
		// this.config['merged'] = jQuery.extend(true, {}, this.config['default'], this.config['user']);
		// attach event handlers
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
		this.config['merged'] = cfgm;
	},
	
	attachEventHandlers: function() {
		yepnope([{
			test: window.jQuery,
			nope: WowDataTooltip.getSetting(['files', 'jquery.js']),
			complete: function () {
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
				apicall = this.mustache.process(this['patterns']['api']['realm'], params);
				content = this.getFromCache('template', 'realm', apicall);
				if(content != false) {
					this.addTip(element, content);
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-realm'));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						that: this,
						success: function(data) {
							var content = this.that.buildRealmTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							this.that.addToCache('template', 'realm', apicall, content);
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
				apicall = this.mustache.process(this['patterns']['api']['character'], params);
				content = this.getFromCache('template', 'character', apicall);
				if(content != false) {
					this.addTip(element, content);
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-character'));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						that: this,
						success: function(data) {
							var content = this.that.buildCharacterTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							this.that.addToCache('template', 'character', apicall, content);
						}
					});
				}
			}
			/* ------------------------------------------------------------
			 * - Character Tooltip from [data-wowdatatooltip]
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
				apicall = this.mustache.process(this['patterns']['api']['guild'], params);
				content = this.getFromCache('template', 'guild', apicall);
				if(content != false) {
					this.addTip(element, content);
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-guild'));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						that: this,
						success: function(data) {
							var content = this.that.buildGuildTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							this.that.addToCache('template', 'guild', apicall, content);
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
				apicall = this.mustache.process(this['patterns']['api']['character'], params);
				content = this.getFromCache('template', 'character', apicall);
				if(content != false) {
					this.addTip(element, content);
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-character'));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						that: this,
						success: function(data) {
							var content = this.that.buildCharacterTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							this.that.addToCache('template', 'character', apicall, content);
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
				apicall = this.mustache.process(this['patterns']['api']['guild'], params);
				content = this.getFromCache('template', 'guild', apicall);
				if(content != false) {
					this.addTip(element, content);
				} else {
					this.addTip(element, this.localize(this.getLocaleData(params.locale), 'loading-guild'));
					jQuery.ajax({
						url: apicall,
						crossDomain: true,
						dataType: 'JSONP',
						jsonp: 'jsonp',
						that: this,
						success: function(data) {
							var content = this.that.buildGuildTooltip(params['host'], params.locale, data);
							jQuery(element).qtip('api').set('content.text', content);
							this.that.addToCache('template', 'guild', apicall, content);
						}
					});
				}
			}
		}		
	},
	
	addTip: function(element, tipcontent) {
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
				'width': '300px',
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
	
	localize: function(repository, keys, replacements) {
		var temp   = repository;
		var result = '';
		
		if('string' === typeof(keys)) {
			keys = [keys]; 
		}
		
		for (var i = 0; i < keys.length; i++) {
			if('undefined' === typeof(temp[keys[i]])) {
				result = '';
				break;
			} else {
				if('object' === typeof(temp[keys[i]])) {
					temp = temp[keys[i]];
				} else {
					result = temp[keys[i]];
					break;
				}
			}
		}
		
		if(('' !== result) && ('object' === typeof(replacements))) {
			for (i in replacements) {
				var regexp = new RegExp('\{'+i+'\}', 'gi');
				result = result.replace(regexp, replacements[i]);
			}
		}
		
		return result;
	},
	
	getMetaTVars: function() {
		return {
			'extendedActive'      : this.getSetting(['extendedMode', 'active']),
			'extendedKeyCodeLabel': this.getSetting(['extendedMode', 'keyCode.label'])
		};
	},
	
	buildRealmTooltip: function(host, locale, data) {
		var content   = '';
		var loc       = this.getLocaleData(locale);
		var region    = this.getRegionFromHost(host);
		var mediahost = this.getMediahostFromRegion(region);
        
		if(data.realms.length == 1) {
			var realm                = data.realms[0];
			var tvars                = jQuery.extend(true, {}, this.getMetaTVars(), realm);
			var realmtype            = this.localize(loc, ('realmtype:'+realm.type))
			var realmqueue           = this.localize(loc, ('realmqueue:'+realm.queue))
			var realmstatus          = this.localize(loc, ('realmstatus:'+realm.status))
			var realmpopulation      = this.localize(loc, ('realmpopulation:'+realm.population))
			tvars['path.host']       = 'http://' + host;
			tvars['path.host.media'] = 'http://' + mediahost;
			tvars['region']          = region;
			tvars['type-text']       = realmtype;
			tvars['queue-text']      = realmqueue;
			tvars['status-text']     = realmstatus;
			tvars['population-text'] = realmpopulation;
		} else {
			var tvars = {
				'notfound': this.localize(loc, 'realm-not-found')
			};
		}
        
		return this.mustache.process(this.getTemplate('default', 'realm'), tvars);
	},
	
	buildCharacterTooltip: function(host, locale, data) {
		var content   = '';
		var loc       = this.getLocaleData(locale);
		
		// var test = this.getRaceData(host, locale);
		
		var classname = this.localize(loc, [('class:'+data['class']), ('gender:'+data['gender'])]);
		var racename  = this.localize(loc, [('race:'+data['race']),  ('gender:'+data['gender'])]);
		var region    = this.getRegionFromHost(host);
		var mediahost = this.getMediahostFromRegion(region);
		
		var tvars = jQuery.extend(true, {}, this.getMetaTVars(), data);
		
		tvars['path.host']       = 'http://' + host;
		tvars['path.host.media'] = 'http://' + mediahost;
		tvars['region']          = region;
		tvars['classname']       = classname;
		tvars['racename']        = racename;
		
		var partials = {
			'char-sri' : this.localize(loc, ['templates', 'char-sri']),
			'char-ilvl': this.localize(loc, ['templates', 'char-ilvl'])
		};
		
		return this.mustache.process(this.getTemplate('default', 'character'), tvars, partials);
	},
	
	buildGuildTooltip: function(host, locale, data) {
		var content   = '';
		var loc       = this.getLocaleData(locale);
		
		var sidename  = this.localize(loc, ('side:'+data['side']));
		var region    = this.getRegionFromHost(host);
		var mediahost = this.getMediahostFromRegion(region);
		
		var tvars = jQuery.extend(true, {}, this.getMetaTVars(), data);
		
		tvars['path.host']       = 'http://' + host;
		tvars['path.host.media'] = 'http://' + mediahost;
		tvars['region']          = region;
		tvars['sidename']        = sidename;
		tvars['membercount']     = data['members'].length || 0;
		
		var partials = {
			'guild-sri'    : this.localize(loc, ['templates', 'guild-sri']),
			'guild-members': this.localize(loc, ['templates', 'guild-members'])
		};
		
		return this.mustache.process(this.getTemplate('default', 'guild'), tvars, partials);
	},
	
	getRaceData: function(host, locale) {
		var tvars = {
			'host'  : host,
			'locale': locale
		};
		var apicall = this.mustache.process(this['patterns']['api']['data.races'], tvars);
		var data    = this.getFromCache('data', 'character-race', apicall);
		if(data != false) {
			return data;
		} else {
			jQuery.ajax({
				url: apicall,
				crossDomain: true,
				dataType: 'JSONP',
				jsonp: 'jsonp',
				that: this,
				success: function(data) {
					this.that.addToCache('data', 'character-race', apicall, data);
					return data;
				}
			});
		}
	},
	
	addToCache: function(type, scheme, apicall, content) {
		this['cache'][type][scheme][apicall] = content;
		return true;
	},
	
	getFromCache: function(type, scheme, apicall) {
		if('undefined' == typeof(this['cache'][type])) {
			this['cache'][type] = {};
			return false;
		}
		if('undefined' == typeof(this['cache'][type][scheme])) {
			this['cache'][type][scheme] = {};
			return false;
		}
		if('string' == typeof(this['cache'][type][scheme][apicall])) {
			return this['cache'][type][scheme][apicall];
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
	
	mustache: function() {
		
		var Renderer = function() {};
		
		Renderer.prototype = {
			otag: "{{",
			ctag: "}}",
			pragmas: {},
			buffer: [],
			pragmas_implemented: {
				"IMPLICIT-ITERATOR": true
			},
			context: {},
		    render: function(template, context, partials, in_recursion) {
				
				// reset buffer & set context
				if(!in_recursion) {
					this.context = context;
					this.buffer = []; // TODO: make this non-lazy
				}
				
				// fail fast
				if(!this.includes("", template)) {
					if(in_recursion) {
						return template;
					} else {
						this.send(template);
						return;
					}
				}
				
				template = this.render_pragmas(template);
				var html = this.render_section(template, context, partials);
				if(in_recursion) {
					return this.render_tags(html, context, partials, in_recursion);
				}
				
				this.render_tags(html, context, partials, in_recursion);
				
			},
			
			/*
				Sends parsed lines
			*/
			send: function(line) {
				
				if(line != "") {
					this.buffer.push(line);
				}
				
			},
			
			/*
				Looks for %PRAGMAS
			*/
			render_pragmas: function(template) {
				
				// no pragmas
				if(!this.includes("%", template)) {
					return template;
				}
				
				var that = this;
				var regex = new RegExp(this.otag + "%([\\w-]+) ?([\\w]+=[\\w]+)?" + this.ctag, "g");
				return template.replace(regex, function(match, pragma, options) {
					if(!that.pragmas_implemented[pragma]) {
						throw({message: 
							"This implementation of mustache doesn't understand the '" +
							pragma + "' pragma"});
					}
					that.pragmas[pragma] = {};
					if(options) {
						var opts = options.split("=");
						that.pragmas[pragma][opts[0]] = opts[1];
					}
	        		return "";
					// ignore unknown pragmas silently
				});
				
			},
			
			/*
				Tries to find a partial in the curent scope and render it
			*/
			render_partial: function(name, context, partials) {
				
				name = this.trim(name);
				if(!partials || partials[name] === undefined) {
					throw({message: "unknown_partial '" + name + "'"});
				}
				if(typeof(context[name]) != "object") {
					return this.render(partials[name], context, partials, true);
				}
				return this.render(partials[name], context[name], partials, true);
			},
			
			/*
				Renders inverted (^) and normal (#) sections
			*/
			render_section: function(template, context, partials) {
				if(!this.includes("#", template) && !this.includes("^", template)) {
					return template;
				}
				var that = this;
				// CSW - Added "+?" so it finds the tighest bound, not the widest
				var regex = new RegExp(this.otag + "(\\^|\\#)\\s*(.+)\\s*" + this.ctag + "\n*([\\s\\S]+?)" + this.otag + "\\/\\s*\\2\\s*" + this.ctag + "\\s*", "mg");
				// for each {{#foo}}{{/foo}} section do...
				return template.replace(regex, function(match, type, name, content) {
					var value = that.find(name, context);
					if(type == "^") { // inverted section
						if(!value || that.is_array(value) && value.length === 0) {
							// false or empty list, render it
							return that.render(content, context, partials, true);
						} else {
							return "";
						}
					} else if(type == "#") { // normal section
						if(that.is_array(value)) { // Enumerable, Let's loop!
							return that.map(value, function(row) {
								return that.render(content, that.create_context(row), partials, true);
							}).join("");
						} else if(that.is_object(value)) { // Object, Use it as subcontext!
							return that.render(content, that.create_context(value), partials, true);
						} else if(typeof value === "function") {
							// higher order section
							return value.call(context, content, function(text) {
								return that.render(text, context, partials, true);
							});
						} else if(value) { // boolean section
							return that.render(content, context, partials, true);
						} else {
							return "";
						}
					}
				});
			},
			
			/*
				Replace {{foo}} and friends with values from our view
			*/
			render_tags: function(template, context, partials, in_recursion) {
				// tit for tat
				var that = this;
				var new_regex = function() {
					return new RegExp(that.otag + "(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?" + that.ctag + "+", "g");
				};
				var regex = new_regex();
				var tag_replace_callback = function(match, operator, name) {
					switch(operator) {
						case "!": // ignore comments
							return "";
						case "=": // set new delimiters, rebuild the replace regexp
							that.set_delimiters(name);
							regex = new_regex();
							return "";
						case ">": // render partial
							return that.render_partial(name, context, partials);
						case "{": // the triple mustache is unescaped
							return that.find(name, context);
						default: // escape the value
							return that.escape(that.find(name, context));
					}
	      		};
	      		var lines = template.split("\n");
				for(var i = 0; i < lines.length; i++) {
					lines[i] = lines[i].replace(regex, tag_replace_callback, this);
					if(!in_recursion) {
						this.send(lines[i]);
					}
				}
				if(in_recursion) {
					return lines.join("\n");
				}
			},
			
			set_delimiters: function(delimiters) {
				
				var dels = delimiters.split(" ");
				this.otag = this.escape_regex(dels[0]);
				this.ctag = this.escape_regex(dels[1]);
				
			},
			
			escape_regex: function(text) {
				
				// thank you Simon Willison
				if(!arguments.callee.sRE) {
					var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
					arguments.callee.sRE = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	      		}
				
				return text.replace(arguments.callee.sRE, '\\$1');
				
			},
			
			/*
				find `name` in current `context`. That is find me a value
				from the view object
			*/
			find: function(name, context) {
				
				name = this.trim(name);
				
				// Checks whether a value is thruthy or false or 0
				function is_kinda_truthy(bool) {
					
					return bool === false || bool === 0 || bool;
					
				}
				
				var value;
				if(is_kinda_truthy(context[name])) {
					value = context[name];
				} else if(is_kinda_truthy(this.context[name])) {
					value = this.context[name];
				}
				
				if(typeof value === "function") {
					return value.apply(context);
				}
				if(value !== undefined) {
					return value;
				}
				// silently ignore unkown variables
				return "";
				
			},
			
			// Utility methods
			
			/* includes tag */
			includes: function(needle, haystack) {
				
				return haystack.indexOf(this.otag + needle) != -1;
				
			},
			
			/*
				Does away with nasty characters
			*/
			escape: function(s) {
				
				s = String(s === null ? "" : s);
				return s.replace(/&(?!\w+;)|["'<>\\]/g, function(s) {
					switch(s) {
						case "&": return "&amp;";
						case "\\": return "\\\\";
						case '"': return '&quot;';
						case "'": return '&#39;';
						case "<": return "&lt;";
						case ">": return "&gt;";
						default: return s;
					}
				});
			},
			
			// by @langalex, support for arrays of strings
			create_context: function(_context) {
				
				if(this.is_object(_context)) {
					return _context;
				} else {
					var iterator = ".";
					if(this.pragmas["IMPLICIT-ITERATOR"]) {
						iterator = this.pragmas["IMPLICIT-ITERATOR"].iterator;
					}
					var ctx = {};
					ctx[iterator] = _context;
					return ctx;
				}
				
			},
			
			is_object: function(a) {
				
				return a && typeof a == "object";
				
			},
			
			is_array: function(a) {
				
				return Object.prototype.toString.call(a) === '[object Array]';
				
			},
			
			/*
				Gets rid of leading and trailing whitespace
			*/
			trim: function(s) {
				
				return s.replace(/^\s*|\s*$/g, "");
				
			},
			
			/*
				Why, why, why? Because IE. Cry, cry cry.
			*/
			map: function(array, fn) {
				
				if (typeof array.map == "function") {
					return array.map(fn);
				} else {
					var r = [];
					var l = array.length;
					for(var i = 0; i < l; i++) {
						r.push(fn(array[i]));
					}
					return r;
				}
			}
		};
		
		return({
			name: "mustache.js",
			version: "0.3.1-dev",
			
			/*
				Turns a template and view into HTML
			*/
			process: function(template, view, partials, send_fun) {
				
				var renderer = new Renderer();
				if(send_fun) {
					renderer.send = send_fun;
				}
				renderer.render(template, view, partials);
				if(!send_fun) {
					return renderer.buffer.join("\n");
				}
			}
		});
	}(),
	
	'templates': {
		'default': {
			'character': (
				'<div class="tooltip-character template-default">' +
			    	'<img class="thumbnail" src="{{path.host}}/static-render/{{region}}/{{thumbnail}}?alt=/wow/static/images/2d/avatar/{{race}}-{{gender}}.jpg" />' +
			    	 /* --- START simple mode -------------------------------- */
					'<div class="data wdt-show-only-simple">' +
			    		'<div class="name cclass-{{class}}">{{name}}</div>' +
			    		'<div class="char-sri">{{> char-sri}}</div>' +
						'{{#talents}}' +
			    			'<div class="talentspec {{#selected}} active{{/selected}}">' +
								'<img class="icon-talentspec" src="{{path.host.media}}/wow/icons/18/{{#icon}}{{icon}}{{/icon}}{{^icon}}inv_misc_questionmark{{/icon}}.jpg"/> {{name}}' +
							'</div>' +
						'{{/talents}}' +
						'{{#guild}}' +
							'<div class="guild">' +
								'<div class="guildname">&lt;{{name}}&gt;{{#level}}<span class="guildlevel"> ({{level}})</span>{{/level}}</div>' +
							'</div>' +
						'{{/guild}}' +
						'<div class="realm">{{realm}}</div>' +
						'<div class="achievementpoints{{^extendedActive}} last{{/extendedActive}}"><span class="achpoints">{{achievementPoints}}</span></div>' +
				    	'{{#extendedActive}}' +
							'<div class="info-meta last">Hold [{{extendedKeyCodeLabel}}] to switch modes!</div>' +
				    	'{{/extendedActive}}' +
			    	'</div>' +
					 /* --- END simple mode ---------------------------------- */
					 /* --- START extended mode ------------------------------ */
			    	'{{#extendedActive}}' +
						'<div class="data wdt-show-only-extended">' +
				    		'<div class="name cclass-{{class}}">{{name}}</div>' +
				    		'<div class="level class race">{{lrc}}</div>' +
							'{{#items}}' +
								'<div class="itemlevel">{{> char-ilvl}}</div>' +
							'{{/items}}' +
							'{{#professions}}' +
								'<div class="professions wdt-show-only-extended">' +
									'{{#primary}}{{#rank}}' +
										'<div class="profession-primary">' +
											'<img class="icon-profession" src="{{path.host.media}}/wow/icons/18/{{#icon}}{{icon}}{{/icon}}{{^icon}}inv_misc_questionmark{{/icon}}.jpg"/> {{name}}: {{rank}}' +
										'</div>' +
									'{{/rank}}{{/primary}}' +
									'{{#secondary}}{{#rank}}' +
										'<div class="profession-secondary">' +
											'<img class="icon-profession" src="{{path.host.media}}/wow/icons/18/{{#icon}}{{icon}}{{/icon}}{{^icon}}inv_misc_questionmark{{/icon}}.jpg"/> {{name}}: {{rank}}' +
										'</div>' +
									'{{/rank}}{{/secondary}}' +
								'</div>' +
							'{{/professions}}' +
							'<div class="info-meta last">Release [{{extendedKeyCodeLabel}}] to switch modes!</div>' +
				    	'</div>' +
				   	'{{/extendedActive}}' +
					 /* --- END extended mode -------------------------------- */
			    '</div>'
			),
			'guild': (
				'<div class="tooltip-guild template-default">' +
	    			'<div class="name cside-{{side}}">{{name}}</div>' +
		    		'<div class="guild-sri">{{> guild-sri}}</div>' +
					'{{#membercount}}' +
		    			'<div class="guild-members">{{> guild-members}}</div>' +
					'{{/membercount}}' +
					'<div class="achievementpoints last"><span class="achpoints">{{achievementPoints}}</span></div>' +
				'</div>'
			),
			'realm': (
				'<div class="tooltip-realm template-default">' +
					'{{#notfound}}' +
	    				'<div class="notfound">{{notfound}}</div>' +
					'{{/notfound}}' +
					'{{^notfound}}' +
    					'<div class="type type-{{type}}">{{type-text}}</div>' +
    					'<div class="name">{{name}}</div>' +
						'{{#status}}' +
							'{{#queue}}' +
    							'<div class="status queue-{{queue}}">{{status-text}} ({{queue-text}})</div>' +
							'{{/queue}}' +
							'{{^queue}}' +
    							'<div class="status status-{{status}}">{{status-text}}</div>' +
							'{{/queue}}' +
						'{{/status}}' +
						'{{^status}}' +
    						'<div class="status status-{{status}}">{{status-text}}</div>' +
						'{{/status}}' +
    					'<div class="population">{{population-text}}</div>' +
					'{{/notfound}}' +
				'</div>'
			)
		}
	},
	
	'i18n': {
		'en_US': {
			'templates': {
				'char-sri'     : '{{level}} {{racename}} {{classname}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} average item level ({{averageItemLevel}})',
				'guild-sri'    : 'Level {{level}} {{sidename}} Guild, {{realm}}',
				'guild-members': '{{membercount}} members'
			},
			'loading-realm'    : 'Loading realm...',
			'loading-character': 'Loading character...',
			'loading-guild'    : 'Loading guild...',
			'realm-not-found'  : 'Realm not found!',
			'class:1' : 'Warrior',
			'class:2' : 'Paladin',
			'class:3' : 'Hunter',
			'class:4' : 'Rogue',
			'class:5' : 'Priest',
			'class:6' : 'Death Knight',
			'class:7' : 'Shaman',
			'class:8' : 'Mage',
			'class:9' : 'Warlock',
			'class:11': 'Druid',
			'race:1'  : 'Human',
			'race:2'  : 'Orc',
			'race:3'  : 'Dwarf',
			'race:4'  : 'Night Elf',
			'race:5'  : 'Forsaken',
			'race:6'  : 'Tauren',
			'race:7'  : 'Gnome',
			'race:8'  : 'Troll',
			'race:9'  : 'Goblin',
			'race:10' : 'Blood Elf',
			'race:11' : 'Draenei',
			'race:22' : 'Worgen',
			'side:0'  : 'Alliance',
			'side:1'  : 'Horde',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : 'No queue',
			'realmqueue:true'       : 'Queue',
			'realmstatus:false'     : 'Offline',
			'realmstatus:true'      : 'Online',
			'realmpopulation:low'   : 'Low population',
			'realmpopulation:medium': 'Medium population',
			'realmpopulation:high'  : 'High population'
		},
		'es_MX': {
			'templates': {
				'char-sri'     : '{{classname}} de {{racename}}, nivel {{level}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} nvl. de obj. promedio ({{averageItemLevel}})',
				'guild-sri'    : 'Hermandad {{sidename}}, nivel {{level}}, {{realm}}',
				'guild-members': '{{membercount}} miembros'
			},
			'loading-realm'    : 'Cargando reino ...',
			'loading-character': 'Cargando carácter ...',
			'loading-guild'    : 'Carga del gremio ...',
			'realm-not-found'  : 'Reino que no se encuentra!',
			'class:1' : {'gender:0': 'Guerrero',               'gender:1': 'Guerrera'},
			'class:2' : {'gender:0': 'Paladín',                'gender:1': 'Paladín'},
			'class:3' : {'gender:0': 'Cazador',                'gender:1': 'Cazadora'},
			'class:4' : {'gender:0': 'Pícaro',                 'gender:1': 'Pícara'},
			'class:5' : {'gender:0': 'Sacerdote',              'gender:1': 'Sacerdotisa'},
			'class:6' : {'gender:0': 'Caballero de la Muerte', 'gender:1': 'Caballero de la Muerte'},
			'class:7' : {'gender:0': 'Chamán',                 'gender:1': 'Chamán'},
			'class:8' : {'gender:0': 'Mago',                   'gender:1': 'Maga'},
			'class:9' : {'gender:0': 'Brujo',                  'gender:1': 'Bruja'},
			'class:11': {'gender:0': 'Druida',                 'gender:1': 'Druida'},
			'race:1'  : {'gender:0': 'Humano',                 'gender:1': 'Humana'},
			'race:2'  : {'gender:0': 'Orco',                   'gender:1': 'Orco'},
			'race:3'  : {'gender:0': 'Enano',                  'gender:1': 'Enana'},
			'race:4'  : {'gender:0': 'Elfo de la noche',       'gender:1': 'Elfa de la noche'},
			'race:5'  : {'gender:0': 'No-muerto',              'gender:1': 'No-muerta'},
			'race:6'  : {'gender:0': 'Tauren',                 'gender:1': 'Tauren'},
			'race:7'  : {'gender:0': 'Gnomo',                  'gender:1': 'Gnoma'},
			'race:8'  : {'gender:0': 'Trol',                   'gender:1': 'Trol'},
			'race:9'  : {'gender:0': 'Goblin',                 'gender:1': 'Goblin'},
			'race:10' : {'gender:0': 'Elfo de sangre',         'gender:1': 'Elfa de sangre'},
			'race:11' : {'gender:0': 'Draenei',                'gender:1': 'Draenei'},
			'race:22' : {'gender:0': 'Huargen',                'gender:1': 'Huargen'},
			'side:0'  : 'Alianza',
			'side:1'  : 'Horda',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : 'no hay cola',
			'realmqueue:true'       : 'cola',
			'realmstatus:false'     : 'fuera de línea',
			'realmstatus:true'      : 'en línea',
			'realmpopulation:low'   : 'población de bajos',
			'realmpopulation:medium': 'población media',
			'realmpopulation:high'  : 'población de alto'
		},
		'en_GB': {
			'templates': {
				'char-sri'     : '{{level}} {{racename}} {{classname}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} average item level ({{averageItemLevel}})',
				'guild-sri'    : 'Level {{level}} {{sidename}} Guild, {{realm}}',
				'guild-members': '{{membercount}} members'
			},
			'loading-realm'    : 'Loading realm...',
			'loading-character': 'Loading character...',
			'loading-guild'    : 'Loading guild...',
			'realm-not-found'  : 'Realm not found!',
			'class:1' : 'Warrior',
			'class:2' : 'Paladin',
			'class:3' : 'Hunter',
			'class:4' : 'Rogue',
			'class:5' : 'Priest',
			'class:6' : 'Death Knight',
			'class:7' : 'Shaman',
			'class:8' : 'Mage',
			'class:9' : 'Warlock',
			'class:11': 'Druid',
			'race:1'  : 'Human',
			'race:2'  : 'Orc',
			'race:3'  : 'Dwarf',
			'race:4'  : 'Night Elf',
			'race:5'  : 'Forsaken',
			'race:6'  : 'Tauren',
			'race:7'  : 'Gnome',
			'race:8'  : 'Troll',
			'race:9'  : 'Goblin',
			'race:10' : 'Blood Elf',
			'race:11' : 'Draenei',
			'race:22' : 'Worgen',
			'side:0'  : 'Alliance',
			'side:1'  : 'Horde',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : 'No queue',
			'realmqueue:true'       : 'Queue',
			'realmstatus:false'     : 'Offline',
			'realmstatus:true'      : 'Online',
			'realmpopulation:low'   : 'Low population',
			'realmpopulation:medium': 'Medium population',
			'realmpopulation:high'  : 'High population'
		},
		'es_ES': {
			'templates': {
				'char-sri'     : '{{racename}} {{classname}} {{level}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} Nivel medio de objeto ({{averageItemLevel}})',
				'guild-sri'    : 'Hermandad ({{sidename}}), nivel {{level}}, {{realm}}',
				'guild-members': '{{membercount}} miembros'
			},
			'loading-realm'    : 'Cargando reino ...',
			'loading-character': 'Cargando carácter ...',
			'loading-guild'    : 'Carga del gremio ...',
			'realm-not-found'  : 'Reino que no se encuentra!',
			'class:1' : {'gender:0': 'Guerrero',               'gender:1': 'Guerrera'},
			'class:2' : {'gender:0': 'Paladín',                'gender:1': 'Paladín'},
			'class:3' : {'gender:0': 'Cazador',                'gender:1': 'Cazadora'},
			'class:4' : {'gender:0': 'Pícaro',                 'gender:1': 'Pícara'},
			'class:5' : {'gender:0': 'Sacerdote',              'gender:1': 'Sacerdotisa'},
			'class:6' : {'gender:0': 'Caballero de la Muerte', 'gender:1': 'Caballero de la Muerte'},
			'class:7' : {'gender:0': 'Chamán',                 'gender:1': 'Chamán'},
			'class:8' : {'gender:0': 'Mago',                   'gender:1': 'Maga'},
			'class:9' : {'gender:0': 'Brujo',                  'gender:1': 'Bruja'},
			'class:11': {'gender:0': 'Druida',                 'gender:1': 'Druida'},
			'race:1'  : {'gender:0': 'Humano',                 'gender:1': 'Humana'},
			'race:2'  : {'gender:0': 'Orco',                   'gender:1': 'Orco'},
			'race:3'  : {'gender:0': 'Enano',                  'gender:1': 'Enana'},
			'race:4'  : {'gender:0': 'Elfo de la noche',       'gender:1': 'Elfa de la noche'},
			'race:5'  : {'gender:0': 'No-muerto',              'gender:1': 'No-muerta'},
			'race:6'  : {'gender:0': 'Tauren',                 'gender:1': 'Tauren'},
			'race:7'  : {'gender:0': 'Gnomo',                  'gender:1': 'Gnoma'},
			'race:8'  : {'gender:0': 'Trol',                   'gender:1': 'Trol'},
			'race:9'  : {'gender:0': 'Goblin',                 'gender:1': 'Goblin'},
			'race:10' : {'gender:0': 'Elfo de sangre',         'gender:1': 'Elfa de sangre'},
			'race:11' : {'gender:0': 'Draenei',                'gender:1': 'Draenei'},
			'race:22' : {'gender:0': 'Huargen',                'gender:1': 'Huargen'},
			'side:0'  : 'Alianza',
			'side:1'  : 'Horda',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : 'no hay cola',
			'realmqueue:true'       : 'cola',
			'realmstatus:false'     : 'fuera de línea',
			'realmstatus:true'      : 'en línea',
			'realmpopulation:low'   : 'población de bajos',
			'realmpopulation:medium': 'población media',
			'realmpopulation:high'  : 'población de alto'
		},
		'fr_FR': {
			'templates': {
				'char-sri' : '{{classname}} {{racename}} niv. {{level}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} Niveau moyen des objets ({{averageItemLevel}})',
				'guild-sri'    : 'Guilde de niveau {{level}}, faction {{sidename}}, {{realm}}',
				'guild-members': '{{membercount}} membres'
			},
			'loading-realm'    : 'Chargement realm ...',
			'loading-character': 'Chargement de caractère ...',
			'loading-guild'    : 'Chargement de guilde ...',
			'realm-not-found'  : 'Realm pas été trouvé!',
			'class:1' : {'gender:0': 'Guerrier',             'gender:1': 'Guerrière'},
			'class:2' : {'gender:0': 'Paladin',              'gender:1': 'Paladin'},
			'class:3' : {'gender:0': 'Chasseur',             'gender:1': 'Chasseresse'},
			'class:4' : {'gender:0': 'Voleur',               'gender:1': 'Voleuse'},
			'class:5' : {'gender:0': 'Prêtre',               'gender:1': 'Prêtresse'},
			'class:6' : {'gender:0': 'Chevalier de la mort', 'gender:1': 'Chevalier de la mort'},
			'class:7' : {'gender:0': 'Chaman',               'gender:1': 'Chamane'},
			'class:8' : {'gender:0': 'Mage',                 'gender:1': 'Mage'},
			'class:9' : {'gender:0': 'Démoniste',            'gender:1': 'Démoniste'},
			'class:11': {'gender:0': 'Druide',               'gender:1': 'Druidesse'},
			'race:1'  : {'gender:0': 'Humain',               'gender:1': 'Humaine'},
			'race:2'  : {'gender:0': 'Orc',                  'gender:1': 'Orque'},
			'race:3'  : {'gender:0': 'Nain',                 'gender:1': 'Naine'},
			'race:4'  : {'gender:0': 'Elfe de la nuit',      'gender:1': 'Elfe de la nuit'},
			'race:5'  : {'gender:0': 'Mort-vivant',          'gender:1': 'Morte-vivante'},
			'race:6'  : {'gender:0': 'Tauren',               'gender:1': 'Tauren'},
			'race:7'  : {'gender:0': 'Gnome',                'gender:1': 'Gnome'},
			'race:8'  : {'gender:0': 'Troll',                'gender:1': 'Trollesse'},
			'race:9'  : {'gender:0': 'Gobelin',              'gender:1': 'Gobeline'},
			'race:10' : {'gender:0': 'Elfe de sang',         'gender:1': 'Elfe de sang'},
			'race:11' : {'gender:0': 'Draeneï',              'gender:1': 'Draeneï'},
			'race:22' : {'gender:0': 'Worgen',               'gender:1': 'Worgen'},
			'side:0'  : 'Alliance',
			'side:1'  : 'Horde',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : 'aucune file d\'attente',
			'realmqueue:true'       : 'file d\'attente',
			'realmstatus:false'     : 'Hors',
			'realmstatus:true'      : 'En ligne',
			'realmpopulation:low'   : 'la population est faible',
			'realmpopulation:medium': 'la population moyenne',
			'realmpopulation:high'  : 'élevée de la population'
		},
		'ru_RU': {
			'templates': {
				'char-sri'     : '{{classname}}-{{racename}} {{level}} yp.',
				'char-ilvl'    : '{{averageItemLevelEquipped}} средний ({{averageItemLevel}})',
				'guild-sri'    : 'Гильдия {{level}}-го ур. ({{sidename}}), {{realm}}',
				'guild-members': 'Членов гильдии: {{membercount}}'
			},
			'loading-realm'    : 'Загрузка области ...',
			'loading-character': 'Загрузка характер ...',
			'loading-guild'    : 'Загрузка гильдии ...',
			'realm-not-found'  : 'Площадь не найден!',
			'class:1' : {'gender:0': 'Воин',          'gender:1': 'Воин'},
			'class:2' : {'gender:0': 'Паладин',       'gender:1': 'Паладин'},
			'class:3' : {'gender:0': 'Охотник',       'gender:1': 'Охотница'},
			'class:4' : {'gender:0': 'Разбойник',     'gender:1': 'Разбойница'},
			'class:5' : {'gender:0': 'Жрец',          'gender:1': 'Жрица'},
			'class:6' : {'gender:0': 'Рыцарь смерти', 'gender:1': 'Рыцарь смерти'},
			'class:7' : {'gender:0': 'Шаман',         'gender:1': 'Шаманка'},
			'class:8' : {'gender:0': 'Маг',           'gender:1': 'Маг'},
			'class:9' : {'gender:0': 'Чернокнижник',  'gender:1': 'Чернокнижница'},
			'class:11': {'gender:0': 'Друид',         'gender:1': 'Друид'},
			'race:1'  : {'gender:0': 'Человек',       'gender:1': 'Человек'},
			'race:2'  : {'gender:0': 'Орк',           'gender:1': 'Орк'},
			'race:3'  : {'gender:0': 'Дворф',         'gender:1': 'Дворф'},
			'race:4'  : {'gender:0': 'Ночной эльф',   'gender:1': 'Ночная эльфийка'},
			'race:5'  : {'gender:0': 'Отрекшийся',    'gender:1': 'Нежить'},
			'race:6'  : {'gender:0': 'Таурен',        'gender:1': 'Таурен'},
			'race:7'  : {'gender:0': 'Гном',          'gender:1': 'Гном'},
			'race:8'  : {'gender:0': 'Тролль',        'gender:1': 'Тролль'},
			'race:9'  : {'gender:0': 'Гоблин',        'gender:1': 'Гоблин'},
			'race:10' : {'gender:0': 'Эльф крови',    'gender:1': 'Эльфийка крови'},
			'race:11' : {'gender:0': 'Дреней',        'gender:1': 'Дреней'},
			'race:22' : {'gender:0': 'Ворген',        'gender:1': 'Ворген'},
			'side:0'  : 'Альянс',
			'side:1'  : 'Орда',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : 'Нет очередей',
			'realmqueue:true'       : 'очередь',
			'realmstatus:false'     : 'автономно',
			'realmstatus:true'      : 'Интернет',
			'realmpopulation:low'   : 'Низкий населения',
			'realmpopulation:medium': 'Средний населения',
			'realmpopulation:high'  : 'Высокая населения'
		},
		'de_DE': {
			'templates': {
				'char-sri'     : '{{level}}, {{racename}}, {{classname}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} Durchschnittliche Gegenstandsstufe ({{averageItemLevel}})',
				'guild-sri'    : 'Stufe {{level}} {{sidename}}-Gilde, {{realm}}',
				'guild-members': '{{membercount}} Mitglieder'
			},
			'loading-realm'    : 'Lade Realm...',
			'loading-character': 'Lade Charakter...',
			'loading-guild'    : 'Lade Gilde...',
			'realm-not-found'  : 'Realm nicht gefunden!',
			'class:1' : {'gender:0': 'Krieger',      'gender:1': 'Kriegerin'},
			'class:2' : {'gender:0': 'Paladin',      'gender:1': 'Paladin'},
			'class:3' : {'gender:0': 'Jäger',        'gender:1': 'Jägerin'},
			'class:4' : {'gender:0': 'Schurke',      'gender:1': 'Schurkin'},
			'class:5' : {'gender:0': 'Priester',     'gender:1': 'Priesterin'},
			'class:6' : {'gender:0': 'Todesritter',  'gender:1': 'Todesritter'},
			'class:7' : {'gender:0': 'Schamane',     'gender:1': 'Schamanin'},
			'class:8' : {'gender:0': 'Magier',       'gender:1': 'Magierin'},
			'class:9' : {'gender:0': 'Hexenmeister', 'gender:1': 'Hexenmeisterin'},
			'class:11': {'gender:0': 'Druide',       'gender:1': 'Druidin'},
			'race:1'  : {'gender:0': 'Mensch',       'gender:1': 'Mensch'},
			'race:2'  : {'gender:0': 'Orc',          'gender:1': 'Orc'},
			'race:3'  : {'gender:0': 'Zwerg',        'gender:1': 'Zwerg'},
			'race:4'  : {'gender:0': 'Nachtelf',     'gender:1': 'Nachtelfe'},
			'race:5'  : {'gender:0': 'Untoter',      'gender:1': 'Untote'},
			'race:6'  : {'gender:0': 'Tauren',       'gender:1': 'Tauren'},
			'race:7'  : {'gender:0': 'Gnom',         'gender:1': 'Gnom'},
			'race:8'  : {'gender:0': 'Troll',        'gender:1': 'Troll'},
			'race:9'  : {'gender:0': 'Goblin',       'gender:1': 'Goblin'},
			'race:10' : {'gender:0': 'Blutelf',      'gender:1': 'Blutelfe'},
			'race:11' : {'gender:0': 'Draenei',      'gender:1': 'Draenei'},
			'race:22' : {'gender:0': 'Worgen',       'gender:1': 'Worgen'},
			'side:0'  : 'Allianz',
			'side:1'  : 'Horde',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : 'Keine Warteschlange',
			'realmqueue:true'       : 'Warteschlange',
			'realmstatus:false'     : 'Offline',
			'realmstatus:true'      : 'Online',
			'realmpopulation:low'   : 'Niedrige Bevölkerung',
			'realmpopulation:medium': 'Mittlere Bevölkerung',
			'realmpopulation:high'  : 'Hohe Bevölkerung'
		},
		'ko_KR': {
			'templates': {
				'char-sri'     : '{{level}} {{racename}} {{classname}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} 평균 아이템 레벨 ({{averageItemLevel}})',
				'guild-sri'    : '{{level}} 레벨 {{sidename}} 길드, {{realm}}',
				'guild-members': '구성원 {{membercount}}명'
			},
			'loading-realm'    : '영역을로드하는 중 ...',
			'loading-character': '문자를로드 중입니다 ...',
			'loading-guild'    : '로딩 길드 ...',
			'realm-not-found'  : '영역을 찾을 수 없습니다!',
			'class:1' : '전사',
			'class:2' : '성기사',
			'class:3' : '사냥꾼',
			'class:4' : '도적',
			'class:5' : '사제',
			'class:6' : '죽음의 기사',
			'class:7' : '주술사',
			'class:8' : '마법사',
			'class:9' : '흑마법사',
			'class:11': '드루이드',
			'race:1'  : '인간',
			'race:2'  : '오크',
			'race:3'  : '드워프',
			'race:4'  : '나이트 엘프',
			'race:5'  : '언데드',
			'race:6'  : '타우렌',
			'race:7'  : '노움',
			'race:8'  : '트롤',
			'race:9'  : '고블린',
			'race:10' : '블러드 엘프',
			'race:11' : '드레나이',
			'race:22' : '늑대인간',
			'side:0'  : '얼라이언스',
			'side:1'  : '호드',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : '없음 대기열 없음',
			'realmqueue:true'       : '대기열',
			'realmstatus:false'     : '오프라인',
			'realmstatus:true'      : '온라인으로',
			'realmpopulation:low'   : '낮은 인구',
			'realmpopulation:medium': '중간 인구',
			'realmpopulation:high'  : '높은 인구'
		},
		'zh_TW': {
			'templates': {
				'char-sri' : '{{level}} {{racename}} {{classname}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} 平均物品等級 ({{averageItemLevel}})',
				'guild-sri'    : '等級{{level}}{{sidename}}公會, {{realm}}',
				'guild-members': '共{{membercount}}位成員'
			},
			'loading-realm'    : '載入境界...',
			'loading-character': '載入字符...',
			'loading-guild'    : '載入公會...',
			'realm-not-found'  : '境界不存在！',
			'class:1' : '戰士',
			'class:2' : '聖騎士',
			'class:3' : '獵人',
			'class:4' : '流氓',
			'class:5' : '牧師',
			'class:6' : '死亡騎士',
			'class:7' : '巫',
			'class:8' : '法師',
			'class:9' : '術士',
			'class:11': '德魯伊',
			'race:1'  : '人類',
			'race:2'  : '獸人',
			'race:3'  : '侏儒',
			'race:4'  : '暗夜精靈',
			'race:5'  : '被遺忘者',
			'race:6'  : '牛頭人',
			'race:7'  : '侏儒',
			'race:8'  : '拖釣',
			'race:9'  : '小妖精',
			'race:10' : '血精靈',
			'race:11' : '德萊尼',
			'race:22' : '狼人',
			'side:0'  : '的聯盟',
			'side:1'  : '部落',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : '沒有隊列',
			'realmqueue:true'       : '隊列中',
			'realmstatus:false'     : '離線',
			'realmstatus:true'      : '在線',
			'realmpopulation:low'   : '低人口',
			'realmpopulation:medium': '中等人口',
			'realmpopulation:high'  : '高人口'
		},
		'zh_CN': {
			'templates': {
				'char-sri'     : '{{level}} {{racename}} {{classname}}',
				'char-ilvl'    : '{{averageItemLevelEquipped}} 物品平均等级 ({{averageItemLevel}})',
				'guild-sri'    : '{{level}} 级 {{sidename}} 公会, {{realm}}',
				'guild-members': '{{membercount}} 个成员'
			},
			'loading-realm'    : '载入境界...',
			'loading-character': '载入字符...',
			'loading-guild'    : '正在载入公会...',
			'realm-not-found'  : '没有发现的境界！',
			'class:1' : '战士',
			'class:2' : '圣骑士',
			'class:3' : '猎人',
			'class:4' : '潜行者',
			'class:5' : '牧师',
			'class:6' : '死亡骑士',
			'class:7' : '萨满祭司',
			'class:8' : '法师',
			'class:9' : '术士',
			'class:11': '德鲁伊',
			'race:1'  : '人类',
			'race:2'  : '兽人',
			'race:3'  : '矮人',
			'race:4'  : '暗夜精灵',
			'race:5'  : '亡灵',
			'race:6'  : '牛头人',
			'race:7'  : '侏儒',
			'race:8'  : '巨魔',
			'race:9'  : '地精',
			'race:10' : '血精灵',
			'race:11' : '德莱尼',
			'race:22' : '狼人',
			'side:0'  : '联盟',
			'side:1'  : '部落',
			'realmtype:pve'         : 'PvE',
			'realmtype:pvp'         : 'PvP',
			'realmtype:rp'          : 'RP',
			'realmtype:rppvp'       : 'RPPvP',
			'realmqueue:false'      : '没有队列',
			'realmqueue:true'       : '队列中',
			'realmstatus:false'     : '离线',
			'realmstatus:true'      : '在线',
			'realmpopulation:low'   : '低人口',
			'realmpopulation:medium': '中等人口',
			'realmpopulation:high'  : '高人口'
		}
	},
	
	'patterns': {
		'explicit': {
			'realm'    : /realm:(us|eu|kr|tw|cn)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'character': /character:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
			'guild'    : /guild:(us|eu|kr|tw|cn)\.([^\.]+)\.([^\(]+)\((en|de|fr|es|ru|ko|zh)\)/,
		},
		'battlenet': {
			'character': /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/.*/,
			'guild'    : /http:\/\/(us\.battle\.net|eu\.battle\.net|kr\.battle\.net|tw\.battle\.net|www\.battlenet\.com\.cn)\/wow\/(en|de|fr|es|ru|ko|zh)\/guild\/([^\/]+)\/([^\/]+)\/.*/
		},
		'api': {
			'data.classes': 'http://{{host}}/api/wow/data/character/classes?locale={{locale}}',
			'data.races'  : 'http://{{host}}/api/wow/data/character/races?locale={{locale}}',
			'realm'       : 'http://{{host}}/api/wow/realm/status?realm={{realm}}&locale={{locale}}',
			'character'   : 'http://{{host}}/api/wow/character/{{realm}}/{{character}}?fields=guild,talents,items,professions&locale={{locale}}',
			'guild'       : 'http://{{host}}/api/wow/guild/{{realm}}/{{guild}}?fields=members&locale={{locale}}',
		}
	},
	
	'maps': {
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
			'character': {},
			'guild'    : {}			
		}
	},
	
	'activeTooltips': []
	
};

WowDataTooltip.init();
