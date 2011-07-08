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
	addTip: function(element, tipcontent) {
		jQuery(element).qtip({
			overwrite: false, // Make sure another tooltip can't overwrite this one without it being explicitly destroyed
			show: {
				ready: true // Needed to make it show on first mouseover event
			},
			content: {
				text: tipcontent
			},
			position: {
				my: 'bottom left',
				at: 'top right',
				viewport: jQuery(window)
			},
			hide: 'mouseout',
			style: {
				classes: 'ui-tooltip-wdt-dark'
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
	buildCharacterTooltip: function(region, loc, href, data) {
		var content   = '';
		var avataruri = WowDataTooltip['patterns']['character']['avatar'];
		avataruri     = avataruri.replace(/\{region\}/g,    region);
		avataruri     = avataruri.replace(/\{thumbnail\}/g, data['thumbnail']);
		avataruri     = avataruri.replace(/\{race\}/g,      data['race']);
		avataruri     = avataruri.replace(/\{gender\}/g,    data['gender']);
		if('object' === typeof(loc['class:'+data['class']])) {
			var classname = loc['class:'+data['class']]['gender:'+data['gender']];
		} else {
			var classname = loc['class:'+data['class']];
		}
		if('object' === typeof(loc['race:'+data['race']])) {
			var racename = loc['race:'+data['race']]['gender:'+data['gender']];
		} else {
			var racename = loc['race:'+data['race']];
		}
		var lrc = loc['format:level+class+race'];
		lrc     = lrc.replace(/\{level\}/g, data['level']);
		lrc     = lrc.replace(/\{race\}/g,  racename);
		lrc     = lrc.replace(/\{class\}/g, classname);
		
		content = WowDataTooltip.getTemplate('default', 'character');
		content = content.replace(/\{avataruri\}/g,         avataruri);
		content = content.replace(/\{classid\}/g,           data['class']);
		content = content.replace(/\{name\}/g,              data['name']);
		content = content.replace(/\{realm\}/g,             data['realm']);
		content = content.replace(/\{achievementpoints\}/g, data['achievementPoints']);
		content = content.replace(/\{lrc\}/g,               lrc);
		if(data['guild']) {
			content = content.replace(/\{guild\}/g, ('&lt;' + data['guild']['name'] + '&gt;'));
		} else {
			content = content.replace(/\{guild\}/g, '');
		}
		return content;
	},
	addToCache: function(type, apicall, content) {
		WowDataTooltip['cache'][type][apicall] = content;
		return true;
	},
	getCache: function(type, apicall) {
		if('undefined' == typeof(WowDataTooltip['cache'][type])) {
			WowDataTooltip['cache'][type] = {};
			return false;
		}
		if('string' == typeof(WowDataTooltip['cache'][type][apicall])) {
			return WowDataTooltip['cache'][type][apicall];
		}
		return false;
	},
	'resources': {
		'jquery'      : 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
		'qtip2.plugin': 'qtip2/jquery.qtip.min.js',
		'qtip2.css'   : 'qtip2/jquery.qtip.min.css',
		'wdt.css'     : 'wdt/WowDataTooltip.css'
	},
	'templates': {
		'default': {
			'character': (
				'<div class="tooltip_character template-default">'                 + "\n" +
			    '    <img class="avatar" src="{avataruri}" />'                     + "\n" +
			    '    <div class="data">'                                           + "\n" +
			    '        <div class="name cclass-{classid}">{name}</div>'          + "\n" +
			    '        <div class="level class race">{lrc}</div>'                + "\n" +
				'        <div class="guild">{guild}</div>'                         + "\n" +
				'        <div class="realm">{realm}</div>'                         + "\n" +
				'        <div class="achievementpoints">{achievementpoints}</div>' + "\n" +
			    '    </div>'                                                       + "\n" +
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
			'api'   : 'http://$1.battle.net/api/wow/character/$3/$4?fields=guild,talents',
			'avatar': 'http://{region}.battle.net/static-render/{region}/{thumbnail}?alt=/wow/static/images/2d/avatar/{race}-{gender}.jpg'
		}
	},
	'cache': {
		'character': {}
	}
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
					
					jQuery('body').delegate('a[href]', 'mouseover', function() {
						
						// In a tooltip is already attached, don't re-render it, just show it
						if('object' === typeof(jQuery(this).data('qtip'))) {
							
							jQuery(this).qtip('show');
							
						} else {
							
							var content = 'No valid Tooltip found!';
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
								// console.log('API Calling: '+apicall);
								
								content = WowDataTooltip.getCache('character', apicall);
								
								if(content != false) {
									
									WowDataTooltip.addTip(this, content);
									
								} else {
									
									jQuery.ajax({
										url: apicall,
										crossDomain: true,
										context: jQuery(this),
										dataType: 'JSONP',
										jsonp: 'jsonp',
										success: function(data) {
											
											var loc     = WowDataTooltip.getLocale(params['lang']);
											var content = WowDataTooltip.buildCharacterTooltip(params['region'], loc, href, data);
											
											WowDataTooltip.addTip(this, content);
											
											WowDataTooltip.addToCache('character', apicall, content);
											
										}
									});
									
								}
								
							}
							
						}

					});
					
					// --- End of completion block -----------------------------
					
				});
			}
		});
	}
}]);