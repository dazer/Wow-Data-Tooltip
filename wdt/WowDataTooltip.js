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
	
	'settings': {
		'multiMode': true
	},
	
	'resources': {
		'jquery'         : 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
		'qtip2.plugin'   : 'qtip2/jquery.qtip.min.js',
		'qtip2.css'      : 'qtip2/jquery.qtip.min.css',
		'wdt.css'        : 'wdt/WowDataTooltip.css'
	},
	
	addToActiveTooltips: function(id) {
		var found = false;
		for (var i = 0; i < WowDataTooltip.activeTooltip.length; i++) {
			if(WowDataTooltip.activeTooltip[i] === id) {
				found = true;
			}
		}
		if(found === false) {
			WowDataTooltip.activeTooltip.push(id);
		}
	},
	
	removeFromActiveTooltips: function(id) {
		var found = false;
		for (var i = 0; i < WowDataTooltip.activeTooltip.length; i++) {
			if(WowDataTooltip.activeTooltip[i] === id) {
				found = i;
			}
		}
		if(found !== false) {
			WowDataTooltip.activeTooltip.splice(i, 1);
		}
	},
	
	repositionActiveTooltips: function() {
		// Find all active wdt tooltips and run .reposition on them
		for (var i = 0; i < WowDataTooltip.activeTooltip.length; i++) {
			jQuery('#ui-tooltip-'+WowDataTooltip.activeTooltip[i]).qtip('reposition');
		}
	},
	
	addTip: function(element, tipcontent) {
		jQuery(element).qtip({
			overwrite: false, // Make sure another tooltip can't overwrite this one without it being explicitly destroyed
			show: {
				ready: true // Needed to make it show on first mouseover event
			},
			events: {
				render: function(event, api) {
					var tooltip = api.elements.tooltip;
					tooltip.bind('tooltipshow', function(event, api) {
						WowDataTooltip.addToActiveTooltips(api.id);
					});
					tooltip.bind('tooltiphide', function(event, api) {
						WowDataTooltip.removeFromActiveTooltips(api.id);
					});
				},
			},
			content: {
				text: tipcontent
			},
			position: {
				my: 'bottom middle',
				at: 'top middle',
				viewport: jQuery(window),
				effect: false
			},
			hide: 'mouseout',
			style: {
				classes: 'wdt-tooltip ui-tooltip-wdt-dark'
			}
		});
	},
	
	getLocale: function(lang) {
		if('object' === typeof(WowDataTooltip['i18n'][lang])) {
			var loc = WowDataTooltip['i18n'][lang];
		} else {
			var loc = WowDataTooltip['i18n']['en'];
		}
		return loc;
	},
	
	getTemplate: function(template, type) {
		if('undefined' == typeof(WowDataTooltip['templates'][template])) {
			return 'Template "'+template+'" not found!';
		}
		if('undefined' == typeof(WowDataTooltip['templates'][template][type])) {
			return 'Type "'+type+'" not found in template "'+template+'"!';
		}
		return WowDataTooltip['templates'][template][type];
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
				// 	.log({'i':i, 'replacements[i]': replacements[i]});
				var regexp = new RegExp('\{'+i+'\}', 'gi');
				result = result.replace(regexp, replacements[i]);
			}
		}
		
		return result;
	},
	
	buildCharacterTooltip: function(region, loc, apicall, data) {
		var content   = '';
		
		var classname = this.localize(loc, [('class:'+data['class']), ('gender:'+data['gender'])]);
		var racename  = this.localize(loc, [('race:'+data['race']),  ('gender:'+data['gender'])]);
		var lrc       = this.localize(loc, 'format:level+class+race', {'level': data['level'], 'race': racename, 'class': classname});
		
		var host = apicall.replace(/\/api\/wow\/.+$/i, '');
		
		var tvars = {
			'path.host':         host,
			'region':            region,
			'thumbnail':         data['thumbnail'],
			'talents':           data['talents'],
			'name':              data['name'],
			'realm':             data['realm'],
			'guild':             data['guild'],
			'classid':           data['class'],
			'raceid':            data['race'],
			'genderid':          data['gender'],
			'achievementpoints': data['achievementPoints'],
			'items':             data['items'],
			'lrc':               lrc
		};
		
		var content = WowDataTooltip.mustache.to_html(WowDataTooltip.getTemplate('default', 'character'), tvars);
		
		return content;
	},
	
	addToCache: function(type, apicall, content) {
		WowDataTooltip['cache'][type][apicall] = content;
		return true;
	},
	
	getFromCache: function(type, apicall) {
		if('undefined' == typeof(WowDataTooltip['cache'][type])) {
			WowDataTooltip['cache'][type] = {};
			return false;
		}
		if('string' == typeof(WowDataTooltip['cache'][type][apicall])) {
			return WowDataTooltip['cache'][type][apicall];
		}
		return false;
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
			to_html: function(template, view, partials, send_fun) {
				
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
			    	'<img class="thumbnail" src="{{path.host}}/static-render/{{region}}/{{thumbnail}}?alt=/wow/static/images/2d/avatar/{{raceid}}-{{genderid}}.jpg" />' +
			    	'<div class="data">' +
			    		'<div class="name cclass-{{classid}}">{{name}}</div>' +
						'{{#items}}' +
						'<div class="itemlevel wdt-show-only-extended">Avg. iLevel: {{averageItemLevelEquipped}} / {{averageItemLevel}}</div>' +
						'{{/items}}' +
			    		'<div class="level class race">{{lrc}}</div>' +
						'{{#talents}}' +
			    		'<div class="talentspec wdt-show-only-extended{{#selected}} active{{/selected}}">' +
							'<img class="icon-talentspec" src="http://{{region}}.media.blizzard.com/wow/icons/18/{{icon}}.jpg"/> {{name}}' +
						'</div>' +
						'{{/talents}}' +
						'{{#guild}}' +
						'<div class="guild">' +
						'<div class="guildname">&lt;{{name}}&gt;<span class="guildlevel wdt-show-only-extended"> ({{level}})</span></div>' +
						'<div class="guildmembers wdt-show-only-extended">{{members}} Members</div>' +
						'<div class="guildachievementpoints wdt-show-only-extended"><span class="achpoints">{{achievementPoints}}</span></div>' +
						'</div>' +
						'{{/guild}}' +
						'<div class="realm">{{realm}}</div>' +
						'<div class="achievementpoints"><span class="achpoints">{{achievementpoints}}</span></div>' +
						'<div class="info-meta wdt-show-only-simple">Hold down [Alt] for extended mode!</div>' +
						'<div class="info-meta wdt-show-only-extended">Release [Alt] for simple mode!</div>' +
			    	'</div>' +
			    '</div>'
			)
		}
	},
	
	'i18n': {
		'en': {
			'format:level+class+race': '{level} {race} {class}',
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
		},
		'de': {
			'format:level+class+race': '{level}, {race}, {class}',
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
		},
		'fr': {
			'format:level+class+race': '{class} {race} niv. {level}',
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
		},
		'es': {
			'format:level+class+race': '{race} {class} {level}',
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
		},
		'ru': {
			'format:level+class+race': '{class}-{race} {level} yp.',
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
		},
		'ko': {
			'format:level+class+race': '{level} {race} {class}',
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
		},
		'zh': {
			'format:level+class+race': '{level} {race} {class}',
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
		}
	},
	
	'patterns': {
		'character': {
			'regex' : /http:\/\/(eu|us|kr|tw).battle.net\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/.*/,
			'api'   : 'http://$1.battle.net/api/wow/character/$3/$4?fields=guild,talents,items',
			'avatar': 'http://{region}.battle.net/static-render/{region}/{thumbnail}?alt=/wow/static/images/2d/avatar/{race}-{gender}.jpg'
		}
	},
	
	'cache': {
		'character': {}
	},
	
	'activeTooltip': []
	
};

yepnope([{
	test: window.jQuery,
	nope: WowDataTooltip['resources']['jquery'],
	complete: function () {
		yepnope({
			test: jQuery.qtip,
			nope: [
				WowDataTooltip['resources']['qtip2.plugin'],
				WowDataTooltip['resources']['qtip2.css'],
				WowDataTooltip['resources']['wdt.css']
			],	
			complete: function () {
				jQuery(function () {
					
					// --- Loading complete ------------------------------------
					
					jQuery('body').bind('keydown', function(event) {
						
						// Try to make ALT key change the tooltip style
						if(event.keyCode == 18) {
							// WowDataTooltip.extendedActive = true;
							jQuery('body').addClass('wdt-show-extended');
							WowDataTooltip.repositionActiveTooltips();
						}
						
					});
					
					jQuery('body').bind('keyup', function(event) {
						
						// Try to make ALT key change the tooltip style
						if(event.keyCode == 18) {
							// WowDataTooltip.extendedActive = false;
							jQuery('body').removeClass('wdt-show-extended');
							WowDataTooltip.repositionActiveTooltips();
						}
						
					});
					
					jQuery('body').delegate('a[href]', 'mouseover', function() {
						
						// In a tooltip is already attached, don't re-render it, just show it
						if('object' === typeof(jQuery(this).data('qtip'))) {
							
							jQuery(this).qtip('show');
							
						} else {
							
							var content = '';
							var href    = new String(jQuery(this).attr('href'));
							var apicall = null;
							var params  = null;
							
							var result  = href.match(WowDataTooltip['patterns']['character']['regex']);
							if(result) {
								
								params = {
									'region'   : result[1],
									'lang'     : result[2],
									'realm'    : result[3],
									'character': result[4]
								};
								
								apicall = href.replace(WowDataTooltip['patterns']['character']['regex'], WowDataTooltip['patterns']['character']['api']);
								
								content = WowDataTooltip.getFromCache('character', apicall);
								
								if(content != false) {
									
									WowDataTooltip.addTip(this, content);
									
								} else {
									
									WowDataTooltip.addTip(this, 'Loading character...');
									
									jQuery.ajax({
										url: apicall,
										crossDomain: true,
										context: jQuery(this),
										dataType: 'JSONP',
										jsonp: 'jsonp',
										success: function(data) {
											
											var loc     = WowDataTooltip.getLocale(params['lang']);
											var content = WowDataTooltip.buildCharacterTooltip(params['region'], loc, apicall, data);
											
											// WowDataTooltip.addTip(this, content);
											jQuery(this).qtip('api').set('content.text', content);
											
											WowDataTooltip.addToCache('character', apicall, content);
											
										}
									});
									
								}
								
							}
							
							result = false;
							if(result) {
								
							}
							
						}

					});
					
					// --- End of completion block -----------------------------
					
				});
			}
		});
	}
}]);