<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<title>WowDataTooltip - Demo Page</title>
	
	<style type="text/css">
		
		html {
			background-color: #000022;
			color: #DDDDDD;
		}
		
		body {
			font-family: Arial, Verdana, sans-serif;
			font-size: 14px;
			line-height: 17px;
			margin: 1em;
		}
		
		a {
			color: #BBBBEE;
		}
		
		#reasons-pro {
			margin-left: 2em;
			padding-left: 0;
			list-style-type: none;
		}
		
		li {
			line-height: 1.75em;
		}
		
		.comment {
			color: #999;
			font-size: 90%;
			line-height: 17px;
		}
		
		h1 {
			font-size: 200%;
			color: #FFB100;
		}
		
		h2 {
			color: #DD9100;
			margin-top: 2em;
			font-size: 130%;
		}
		
		h2.hint {
			padding: 10px 15px;
			font-style: italic;
			color: #b0f;
			border-radius: 10px;
			background-color: #406;
		}
		
		h3 {
			color: #BB7100;
			margin-top: 2em;
			font-size: 115%;
		}
		
		#form {
			margin-left: 4em;
		}
		
		#wdt-dynamic-character-profile-input {
			width: 33em;
		}
		
		#wdt-dynamic-character-profile-button:hover {
			cursor: pointer;
			background-color: #663300;
		}
		
		#wdt-dynamic-character-profile-input,
		#wdt-dynamic-character-profile-button {
			border: 2px solid #DD9100;
			background-color: #442200;
			color: #FFB100;
			padding: 3px;
			font-size: 12px;
		}
		
		.wdt-hover {
			color: #0fb;
		}
		
		#installation pre {
			padding: 6px 10px;
			border-radius: 4px;
			background-color: #036;
			color: #0bf;
		}
		
		#issues li {
			color: #f66;
		}
		
		#issues .fixed {
			color: #6f6;
			text-decoration: line-through;
		}
		
		#gplus1 {
			padding: 10px;
			border-radius: 4px;
			background-color: #eee;
			float: right;
		}
		
	</style>
</head>
<body>
	
	<div id="gplus1">
		<g:plusone href="http://dev.dsitc.de/demos/wow-data-tooltip/"></g:plusone>
	</div>
	
	<h1>WowDataTooltip - Demo Page</h1>
	<p><a href="http://code.google.com/p/wow-data-tooltip/">Projekt Homepage auf Googlecode</a> | <a href="http://code.google.com/p/wow-data-tooltip/downloads/detail?name=wdt-alpha-r30.zip" title="Dateidownload auf googlecode">Download! (alpha-r30)</a></p>	
	
	<h2>Marketing Gesabbel a.k.a. "Warum ist dieses Tooltip Addon so toll?!":</h2>
	<p>
		<ul id="reasons-pro">
			<li>Rein Javascript-basierend <span class="comment">( = portabel und nicht an den Webserver gebunden )</span></li>
			<li><a href="http://yepnopejs.com/" title="yepnope.js | A Conditional Loader For Your Polyfills!">Asynchrones Laden von Ressourcen</a> <span class="comment">( = Ladezeit der Seite ändert sich nur minimal )</span></li>
			<li>Basiert auf <a href="http://jquery.com/" title="jQuery: The Write Less, Do More, JavaScript Library">jQuery</a> <span class="comment">( = Browserübergreifend und zuverlässig )</span></li>
			<li>Basiert auf <a href="http://craigsworks.com/projects/qtip2/" title="qTip2 - Pretty powerful tooltips" >qTip2</a> <span class="comment">( = Brandaktuell und sehr flexibel )</span></li>
			<li>Integrierte Mini-Template Engine: <a href="https://github.com/janl/mustache.js" title="janl / mustache.js" >mustache</a></li>
			<li>Direkter Zugriff auf die <a href="http://us.battle.net/wow/en/forum/2626217/" title="Community Platform API">Battle.net API</a> <span class="comment">( = Die aktuellste und zuverlässigste Datenquelle )</span></li>
			<li></li>
		</ul>
	</p>
	
	<h2>Wie installiere ich dieses Ding?</h2>
	<p>
		<ol id="installation">
			<li><a href="http://code.google.com/p/wow-data-tooltip/downloads/detail?name=wdt-alpha-r30.zip" title="Dateidownload auf googlecode">Herunterladen der Dateien</a></li>
			<li>Entpacken und auf den eigenen Webserver hochladen</li>
			<li>Anpassen der Pfade:
				<pre>'resources': {
	'jquery'         : 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
	'qtip2.plugin'   : '{{Pfad zum enthaltenen /qtip2 Verzeichnisses des Plugins}}/jquery.qtip.min.js',
	'qtip2.css'      : '{{Pfad zum enthaltenen /qtip2 Verzeichnisses des Plugins}}/jquery.qtip.min.css',
	'wdt.css'        : '{{Pfad zum enthaltenen /wdt Verzeichnisses des Plugins}}/WowDataTooltip.css'
},</pre>
			</li>
			<li>Einbinden in die entsprechenden Webseiten:
				<pre>&lt;script type="text/javascript" src="{{Pfad zum enthaltenen /wdt Verzeichnisses des Plugins}}/WowDataTooltip.js"&gt;&lt;/script&gt;</pre>
			</li>
		</ol>
	</p>
	
	<h2>Charakter Tooltips <span class="comment">( Erklärung &amp; Beispiele )</span></h2>
	
	<h2 class="hint">Probiert es aus: Haltet [Shift] gedrückt während ein Tooltip angezeigt wird! :)</h2>
	
	<h3>Was wird mit einem Tooltip versehen?</h3>
	<p>Das WowDataTooltip Plugin verpasst jedem Link dessen URL auf ein Battle.net Charakterprofil zeigt einen Tooltip. Zum Beispiel <a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">http://eu.battle.net/wow/de/character/gilneas/Rhil/</a>.</p>
	<p>Dabei ist es auch nicht wichtig ob der Link über weitere Parameter verfügt:</p>
	<p>
		<ul>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced">http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary">http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883">http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883</a></li>
		</ul>
	</p>
	
	<h3>I18N - Mehrsprachige Tooltips</h3>
	<p>Derzeit unterstützt die Battle.net API das Anfordern von spezifischen Sprachdaten leider nocht nicht. Ich habe somit selbst eine Lokalisierungslib eingebaut welche die grundlegenden Funktionen zur Verfügung stellt.</p>
	<p>Der Tooltip wird in derselben Sprache angezeigt wie die verlinkte Battl.net Profilseite:</p>
	<p>
		<ul>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Agonya/">Deutsch: Agonya @ Gilneas (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/en/character/gilneas/Rancora/">Englisch: Rancora @ Gilneas (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/fr/character/gilneas/Rakel/">Französisch: Rakel @ Gilneas (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/es/character/gilneas/Nhyria/">Spanisch: Nhyria @ Gilneas (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/ru/character/gilneas/Necry/">Russisch: Necry @ Gilneas (EU)</a></li>
			<li><a class="wdt-hover" href="http://kr.battle.net/wow/ko/character/달라란/축복은셀프입니다/">Hanguk: 축복은셀프입니다 @ 달라란 (KO)</a></li>
			<li><a class="wdt-hover" href="http://tw.battle.net/wow/zh/character/冬握湖/阿露卡多/">Traditionells Chinesisch: 阿露卡多 @ 冬握湖 (TW)</a> (API returns 404, maybe not fully live here)</li>
			<li><a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/character/熔火之心/楼兰风行/">Vereinfachtes Chinesisch: 楼兰风行 @ 熔火之心 (CN)</a></li>
		</ul>
	</p>
	
	<h3>Dynamisch! Sogar sehr...</h3>
	<p>Ich verwende die delegate() Methode von jQuery um mich auf den &lt;body&gt; zu hängen und alle Hyperlink im Dokument zu überprüfen. Dies hat zu Folge, dass auch dynamisch generierte Inhalte direkt mit Tooltips versehen werden.</p>
	<p>Probiert es doch einfach selbst aus:</p>
	<div id="form">
		<p><label for="wdt-dynamic-character-profile-input" class="comment">Füge hier die URL eines Battle.net Charakterprofils ein und drücke "Generieren!"</label></p>
		<p><input id="wdt-dynamic-character-profile-input" value="" /> <input type="button" id="wdt-dynamic-character-profile-button" value="Generieren!" /></p>
		<ol id="wdt-dynamic-character-profile-hyperlinks">
			
		</ol>
	</div>
	
	<h2>Gilden Tooltips <span class="comment">( Erklärung &amp; Beispiele )</span></h2>
	
	<h3>Was wird mit einem Tooltip versehen?</h3>
	<p>Das WowDataTooltip Plugin verpasst jedem Link dessen URL auf ein Battle.net Gildenprofil zeigt einen Tooltip. Zum Beispiel <a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/">http://eu.battle.net/wow/de/guild/gilneas/Ascension/</a>.</p>
	<p>Dabei ist es auch nicht wichtig ob der Link über weitere Parameter verfügt:</p>
	<p>
		<ul>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/roster">http://eu.battle.net/wow/de/guild/gilneas/Ascension/roster</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/achievement#15077:a5421">http://eu.battle.net/wow/de/guild/gilneas/Ascension/achievement#15077:a5421</a></li>
		</ul>
	</p>
	<p>Auch hier sind natürlich wieder diverse Sprachen und Regionen verfügbar:</p>
	<p>
		<ul>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/guldan/IPhönixI/roster">Deutsch: &lt;IPhönixI&gt; @ Guldan (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/en/guild/gilneas/Auge des Sturms/roster">Englisch: &lt;Auge des Sturms&gt; @ Gilneas (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/fr/guild/gilneas/Out of Range/roster">Französisch: &lt;Out of Range&gt; @ Gilneas (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/es/guild/nathrezim/Myst/roster">Spanisch: &lt;Myst&gt; @ Nathrezim (EU)</a></li>
			<li><a class="wdt-hover" href="http://eu.battle.net/wow/ru/guild/dethecus/deCurseMe/roster">Russisch: &lt;deCurseMe&gt; @ Dethecus (EU)</a></li>
			<li><a class="wdt-hover" href="http://kr.battle.net/wow/ko/guild/알렉스트라자/나는 쓰랄과 제이나의 불륜현장을 목격했다/">Hanguk: &lt;나는 쓰랄과 제이나의 불륜현장을 목격했다&gt; @ 알렉스트라자 (KR)</a></li>
			<li><a class="wdt-hover" href="http://tw.battle.net/wow/zh/guild/冬握湖/人在冏途身不由己/">Traditionells Chinesisch: &lt;人在冏途身不由己&gt; @ 冬握湖 (TW)</a> (API returns 404, maybe not fully live here)</li>
			<li><a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/guild/熔火之心/凌烟阁/">Vereinfachtes Chinesisch: &lt;凌烟阁&gt; @ 熔火之心 (CN)</a></li>
		</ul>
	</p>
	
	<h2>Item Tooltips <span class="comment">( In Arbeit ^^ )</span></h2>
	<p>Derzeit sind die API Funktionen für Items nur für authentifizierte Calls einsichtlich.</p>
	<p>Ich habe inzwischen Zugangsdaten erhalten und bin am Testen... :)</p>
	
	<h2>Realm Tooltips <span class="comment">( Evtl..... )</span></h2>
	<p>Der Sinn und Zweck von Realm Tooltips steht bei mir noch nicht auf festen Füßen. Von daher stelle ich dieses Feature hinten an.</p>
	<p>Vor allem da ich nicht wüsste mit welcher Battle.net URL ich diese verknüpfen müsste.</p>
	
	<h2>Bekannte "Features"... äh, Bugs! ^^</h2>
	<p>
		<ol id="issues">
			<li class="fixed">Die Bezeichnung der Skillungen sind noch nicht lokalisiert und werden in der Standardsprache des Browsers geliefert. (theoretisch zumindest...)</li>
			<li>Die Labels für Itemlevel, Gildeninfo sowie der Hilfe-text für den erweiterten Modus sind noch nicht lokalisiert und werden in Englisch dargestellt.</li>
			<li class="fixed">Firefox hat scheinbar Probleme mit dem Registrieren der Hotkeys für das Umschalten zwischen einfachem und erweitertem Modus. :-/</li>
			<li>Da das von mir verwendete Tooltip Addon qTip2 selbst nocht nicht "stable" ist sondern auch noch in Entwicklung ist kann es gelegentlich zu kleinen Fehlern in der Darstellung kommen. Diese sollten sich aber im Laufe der Zeit auswachsen... *g*</li>
		</ol>
	</p>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script type="text/javascript">
		
		jQuery(function () {
			
			jQuery('#wdt-dynamic-character-profile-button').bind('click', function() {
				
				var url = jQuery('#wdt-dynamic-character-profile-input').attr('value');
				
				if(url != '') {
					jQuery('#wdt-dynamic-character-profile-hyperlinks').append('<li><a class="wdt-hover" href="'+url+'">'+url+'</a></li>');
				}
				
			});
			
		});
		
	</script>
	<script type="text/javascript" src="wdt/WowDataTooltip.js"></script>
	
	<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
	  {lang: 'de'}
	</script>

</body>
</html>