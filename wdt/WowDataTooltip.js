// Check if yepnope.js is defined, if not we need to define it
if(!window.yepnope) {
	/*yepnope1.0.2|WTFPL*/(function(a,b,c){function H(){var a=z;a.loader={load:G,i:0};return a}function G(a,b,c){var e=b=="c"?r:q;i=0,b=b||"j",u(a)?F(e,a,b,this.i++,d,c):(h.splice(this.i++,0,a),h.length==1&&E());return this}function F(a,c,d,g,j,l){function q(){!o&&A(n.readyState)&&(p.r=o=1,!i&&B(),n.onload=n.onreadystatechange=null,e(function(){m.removeChild(n)},0))}var n=b.createElement(a),o=0,p={t:d,s:c,e:l};n.src=n.data=c,!k&&(n.style.display="none"),n.width=n.height="0",a!="object"&&(n.type=d),n.onload=n.onreadystatechange=q,a=="img"?n.onerror=q:a=="script"&&(n.onerror=function(){p.e=p.r=1,E()}),h.splice(g,0,p),m.insertBefore(n,k?null:f),e(function(){o||(m.removeChild(n),p.r=p.e=o=1,B())},z.errorTimeout)}function E(){var a=h.shift();i=1,a?a.t?e(function(){a.t=="c"?D(a):C(a)},0):(a(),B()):i=0}function D(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(o||j)){var g=function(a){e(function(){if(!d)try{a.sheet.cssRules.length?(d=1,B()):g(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,e(function(){B()},0)):g(a)}},0)};g(c)}else c.onload=function(){d||(d=1,e(function(){B()},0))},a.e&&c.onload();e(function(){d||(d=1,B())},z.errorTimeout),!a.e&&f.parentNode.insertBefore(c,f)}function C(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&A(c.readyState)&&(d=1,B(),c.onload=c.onreadystatechange=null)},e(function(){d||(d=1,B())},z.errorTimeout),a.e?c.onload():f.parentNode.insertBefore(c,f)}function B(){var a=1,b=-1;while(h.length- ++b)if(h[b].s&&!(a=h[b].r))break;a&&E()}function A(a){return!a||a=="loaded"||a=="complete"}var d=b.documentElement,e=a.setTimeout,f=b.getElementsByTagName("script")[0],g={}.toString,h=[],i=0,j="MozAppearance"in d.style,k=j&&!!b.createRange().compareNode,l=j&&!k,m=k?d:f.parentNode,n=a.opera&&g.call(a.opera)=="[object Opera]",o="webkitAppearance"in d.style,p=o&&"async"in b.createElement("script"),q=j?"object":n||p?"img":"script",r=o?"img":q,s=Array.isArray||function(a){return g.call(a)=="[object Array]"},t=function(a){return Object(a)===a},u=function(a){return typeof a=="string"},v=function(a){return g.call(a)=="[object Function]"},w=[],x={},y,z;z=function(a){function h(a,b){function i(a){if(u(a))g(a,f,b,0,c);else if(t(a))for(h in a)a.hasOwnProperty(h)&&g(a[h],f,b,h,c)}var c=!!a.test,d=c?a.yep:a.nope,e=a.load||a.both,f=a.callback,h;i(d),i(e),a.complete&&b.load(a.complete)}function g(a,b,d,e,g){var h=f(a),i=h.autoCallback;if(!h.bypass){b&&(b=v(b)?b:b[a]||b[e]||b[a.split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,b,d,e,g);d.load(h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(v(b)||v(i))&&d.load(function(){H(),b&&b(h.origUrl,g,e),i&&i(h.origUrl,g,e)})}}function f(a){var b=a.split("!"),c=w.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=x[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=w[h](f);return f}var b,d,e=this.yepnope.loader;if(u(a))g(a,0,e,0);else if(s(a))for(b=0;b<a.length;b++)d=a[b],u(d)?g(d,0,e,0):s(d)?z(d):t(d)&&h(d,e);else t(a)&&h(a,e)},z.addPrefix=function(a,b){x[a]=b},z.addFilter=function(a){w.push(a)},z.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",y=function(){b.removeEventListener("DOMContentLoaded",y,0),b.readyState="complete"},0)),a.yepnope=H()})(this,this.document)
}

var wdtLocalize = {
	'en': {
		'class-1-0' : 'Warrior',
		'class-1-1' : 'Warrior',
		'class-2-0' : 'Paladin',
		'class-2-1' : 'Paladin',
		'class-3-0' : 'Hunter',
		'class-3-1' : 'Hunter',
		'class-4-0' : 'Rogue',
		'class-4-1' : 'Rogue',
		'class-5-0' : 'Priest',
		'class-5-1' : 'Priest',
		'class-6-0' : 'Death Knight',
		'class-6-1' : 'Death Knight',
		'class-7-0' : 'Shaman',
		'class-7-1' : 'Shaman',
		'class-8-0' : 'Mage',
		'class-8-1' : 'Mage',
		'class-9-0' : 'Warlock',
		'class-9-1' : 'Warlock',
		'class-11-0': 'Druid',
		'class-11-1': 'Druid',
		'race-1' : 'Human',
		'race-2' : 'Orc',
		'race-3' : 'Dwarf',
		'race-4' : 'Night Elf',
		'race-5' : 'Forsaken',
		'race-6' : 'Tauren',
		'race-7' : 'Gnome',
		'race-8' : 'Troll',
		'race-9' : 'Goblin',
		'race-10': 'Blood Elf',
		'race-11': 'Draenei',
		'race-22': 'Worgen',
	},
	'de': {
		'class-1-0' : 'Krieger',
		'class-1-1' : 'Kriegerin',
		'class-2-0' : 'Paladin',
		'class-2-1' : 'Paladin',
		'class-3-0' : 'Jäger',
		'class-3-1' : 'Jägerin',
		'class-4-0' : 'Schurke',
		'class-4-1' : 'Schurkin',
		'class-5-0' : 'Priester',
		'class-5-1' : 'Priesterin',
		'class-6-0' : 'Todesritter',
		'class-6-1' : 'Todesritter',
		'class-7-0' : 'Schamane',
		'class-7-1' : 'Schamanin',
		'class-8-0' : 'Magier',
		'class-8-1' : 'Magierin',
		'class-9-0' : 'Hexenmeister',
		'class-9-1' : 'Hexenmeisterin',
		'class-11-0': 'Druide',
		'class-11-1': 'Druidin',
		'race-1' : 'Mensch',
		'race-2' : 'Orc',
		'race-3' : 'Zwerg',
		'race-4' : 'Nachtelf',
		'race-5' : 'Untoter',
		'race-6' : 'Tauren',
		'race-7' : 'Gnom',
		'race-8' : 'Troll',
		'race-9' : 'Goblin',
		'race-10': 'Blutelf',
		'race-11': 'Draenei',
		'race-22': 'Worgen',
	},
	'fr': {
		'class-1-0' : 'Guerrier',
		'class-1-1' : 'Guerrière',
		'class-2-0' : 'Paladin',
		'class-2-1' : 'Paladin',
		'class-3-0' : 'Chasseur',
		'class-3-1' : 'Chasseresse',
		'class-4-0' : 'Voleur',
		'class-4-1' : 'Voleuse',
		'class-5-0' : 'Prêtre',
		'class-5-1' : 'Prêtresse',
		'class-6-0' : 'Chevalier de la mort',
		'class-6-1' : 'Chevalier de la mort',
		'class-7-0' : 'Chaman',
		'class-7-1' : 'Chamane',
		'class-8-0' : 'Mage',
		'class-8-1' : 'Mage',
		'class-9-0' : 'Démoniste',
		'class-9-1' : 'Démoniste',
		'class-11-0': 'Druide',
		'class-11-1': 'Druidesse',
		'race-1' : 'Humain',
		'race-2' : 'Orc',
		'race-3' : 'Nain',
		'race-4' : 'Elfe de la nuit',
		'race-5' : 'Réprouvé',
		'race-6' : 'Tauren',
		'race-7' : 'Gnome',
		'race-8' : 'Troll',
		'race-9' : 'Gobelin',
		'race-10': 'Elfe de sang',
		'race-11': 'Draeneï',
		'race-22': 'Worgen',
	},
	'es': {
		'class-1-0' : 'Guerrero',
		'class-1-1' : 'Guerrera',
		'class-2-0' : 'Paladín',
		'class-2-1' : 'Paladín',
		'class-3-0' : 'Cazador',
		'class-3-1' : 'Cazadora',
		'class-4-0' : 'Pícaro',
		'class-4-1' : 'Pícara',
		'class-5-0' : 'Sacerdote',
		'class-5-1' : 'Sacerdotisa',
		'class-6-0' : 'Caballero de la Muerte',
		'class-6-1' : 'Caballero de la Muerte',
		'class-7-0' : 'Chamán',
		'class-7-1' : 'Chamán',
		'class-8-0' : 'Mago',
		'class-8-1' : 'Maga',
		'class-9-0' : 'Brujo',
		'class-9-1' : 'Bruja',
		'class-11-0': 'Druida',
		'class-11-1': 'Druida',
		'race-1' : 'Humano',
		'race-2' : 'Orco',
		'race-3' : 'Enano',
		'race-4' : 'Elfo de la noche',
		'race-5' : 'No-muerto',
		'race-6' : 'Tauren',
		'race-7' : 'Gnomo',
		'race-8' : 'Trol',
		'race-9' : 'Goblin',
		'race-10': 'Elfo de sangre',
		'race-11': 'Draenei',
		'race-22': 'Huargen',
	},
	'ru': {
		'class-1-0' : 'Воин',
		'class-1-1' : 'Воин',
		'class-2-0' : 'Паладин',
		'class-2-1' : 'Паладин',
		'class-3-0' : 'Охотник',
		'class-3-1' : 'Охотница',
		'class-4-0' : 'Разбойник',
		'class-4-1' : 'Разбойница',
		'class-5-0' : 'Жрец',
		'class-5-1' : 'Жрица',
		'class-6-0' : 'Рыцарь смерти',
		'class-6-1' : 'Рыцарь смерти',
		'class-7-0' : 'Шаман',
		'class-7-1' : 'Шаманка',
		'class-8-0' : 'Маг',
		'class-8-1' : 'Маг',
		'class-9-0' : 'Чернокнижник',
		'class-9-1' : 'Чернокнижница',
		'class-11-0': 'Друид',
		'class-11-1': 'Друид',
		'race-1' : 'Человек',
		'race-2' : 'Орк',
		'race-3' : 'Дворф',
		'race-4' : 'Ночной эльф',
		'race-5' : 'Отрекшийся',
		'race-6' : 'Таурен',
		'race-7' : 'Гном',
		'race-8' : 'Тролль',
		'race-9' : 'Гоблин',
		'race-10': 'Эльф крови',
		'race-11': 'Дреней',
		'race-22': 'Ворген',		
	},
	'ko': {
		'class-1-0' : '전사',
		'class-1-1' : '전사',
		'class-2-0' : '성기사',
		'class-2-1' : '성기사',
		'class-3-0' : '사냥꾼',
		'class-3-1' : '사냥꾼',
		'class-4-0' : '도적',
		'class-4-1' : '도적',
		'class-5-0' : '사제',
		'class-5-1' : '사제',
		'class-6-0' : '죽음의 기사',
		'class-6-1' : '죽음의 기사',
		'class-7-0' : '주술사',
		'class-7-1' : '주술사',
		'class-8-0' : '마법사',
		'class-8-1' : '마법사',
		'class-9-0' : '흑마법사',
		'class-9-1' : '흑마법사',
		'class-11-0': '드루이드',
		'class-11-1': '드루이드',
		'race-1' : '인간',
		'race-2' : '오크',
		'race-3' : '드워프',
		'race-4' : '나이트 엘프',
		'race-5' : '언데드',
		'race-6' : '타우렌',
		'race-7' : '노움',
		'race-8' : '트롤',
		'race-9' : '고블린',
		'race-10': '블러드 엘프',
		'race-11': '드레나이',
		'race-22': '늑대인간',
	},
	'zh': {
		'class-1-0' : 'Warrior',
		'class-1-1' : 'Warrior',
		'class-2-0' : 'Paladin',
		'class-2-1' : 'Paladin',
		'class-3-0' : 'Hunter',
		'class-3-1' : 'Hunter',
		'class-4-0' : 'Rogue',
		'class-4-1' : 'Rogue',
		'class-5-0' : 'Priest',
		'class-5-1' : 'Priest',
		'class-6-0' : 'Death Knight',
		'class-6-1' : 'Death Knight',
		'class-7-0' : 'Shaman',
		'class-7-1' : 'Shaman',
		'class-8-0' : 'Mage',
		'class-8-1' : 'Mage',
		'class-9-0' : 'Warlock',
		'class-9-1' : 'Warlock',
		'class-11-0': 'Druid',
		'class-11-1': 'Druid',
		'race-1' : 'Human',
		'race-2' : 'Orc',
		'race-3' : 'Dwarf',
		'race-4' : 'Night Elf',
		'race-5' : 'Forsaken',
		'race-6' : 'Tauren',
		'race-7' : 'Gnome',
		'race-8' : 'Troll',
		'race-9' : 'Goblin',
		'race-10': 'Blood Elf',
		'race-11': 'Draenei',
		'race-22': 'Worgen',
	}
};

var wdtPatterns = {
	character: {
		regex: /http:\/\/(eu|us|kr|tw).battle.net\/wow\/(en|de|fr|es|ru|ko|zh)\/character\/([^\/]+)\/([^\/]+)\/.*/,
		api: 'http://$1.battle.net/api/wow/character/$3/$4?fields=guild,talents',
		avatar: 'http://$1.battle.net/static-render/$1/'
	}
};

yepnope([{
	test: window.jQuery,
	nope: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
	complete: function () {
		yepnope({
			test: jQuery.qtip,
			nope: [
				'qtip2/jquery.qtip.min.js',
				'qtip2/jquery.qtip.min.css',
				'wdt/WowDataTooltip.css'
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
							var result  = href.match(wdtPatterns['character']['regex']);
							if(result) {
								
								params = {
									region   : result[1],
									lang     : result[2],
									realm    : result[3],
									character: result[4]
								};
								
								apicall = href.replace(wdtPatterns['character']['regex'], wdtPatterns['character']['api']);
								
								jQuery.ajax({
									url: apicall,
									crossDomain: true,
									context: jQuery(this),
									dataType: 'JSONP',
									jsonp: 'jsonp',
									headers: {
										'Accept-Language': params['lang']
									},
									success: function(data) {
										
										console.log(data);
										
										var avataruri = href.replace(wdtPatterns['character']['regex'], wdtPatterns['character']['avatar']) + data['thumbnail'];
										
										content = '';
										content = content + '<div class="tooltip_character">';
										content = content + '<img class="avatar" src="'+avataruri+'" />';
										content = content +	'<div class="data">';
										
										content = content +	'<div class="name cclass-'+data['class']+'">'+data['name']+'</div>';
										
										content = content +	'<div class="level race class">';
										content = content +	data['level']+' ';
										content = content +	wdtLocalize[params['lang']]['class-'+data['class']+'-'+data['gender']]+' ';
										content = content +	wdtLocalize[params['lang']]['race-'+data['race']]+' ';
										content = content +	'</div>';
										
										if(data['guild']) {
											content = content +	'<div class="guild">&lt;'+data['guild']['name']+'&gt;</div>';
										}
										
										content = content + '<div class="realm">'+data['realm']+'</div>';
										
										content = content + '<div class="achievementpoints">'+data['achievementPoints']+'</div>';
										
										content = content +	'</div>';
										content = content + '</div>';
										
										jQuery(this).qtip({
											overwrite: false, // Make sure another tooltip can't overwrite this one without it being explicitly destroyed
											show: {
												ready: true // Needed to make it show on first mouseover event
											},
											content: {
												text: content
											},
											position: {
												my: 'top left',
												at: 'bottom right',
												viewport: jQuery(window)
											},
											hide: 'mouseout',
											style: {
												classes: 'ui-tooltip-wdt-dark'
											}
										});
										
									}
								});
								
							}
							
						}

					});
					
					// --- End of completion block -----------------------------
					
				});
			}
		});
	}
}]);