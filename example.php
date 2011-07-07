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
		
	</style>
</head>
<body>
	
	<h1>WowDataTooltip - Demo Page</h1>
	<p><a href="http://code.google.com/p/wow-data-tooltip/">Projekt Homepage auf Googlecode</a></p>	
	
	<h2>Marketing Gesabbel a.k.a. "Warum ist dieses Tooltip Addon so toll?!":</h2>
	<p>
		<ul id="reasons-pro">
			<li>Rein Javascript-basierend <span class="comment">( = portabel und nicht an den Webserver gebunden )</span></li>
			<li><a href="http://yepnopejs.com/" title="yepnope.js | A Conditional Loader For Your Polyfills!">Asynchrones Laden von Ressourcen</a> <span class="comment">( = Ladezeit der Seite ändert sich nur minimal )</span></li>
			<li>Basiert auf <a href="http://jquery.com/" title="jQuery: The Write Less, Do More, JavaScript Library">jQuery</a> <span class="comment">( = Browserübergreifend und zuverlässig )</span></li>
			<li>Basiert auf <a href="http://craigsworks.com/projects/qtip2/" title="qTip2 - Pretty powerful tooltips" >qTip2</a> <span class="comment">( = Brandaktuell und sehr flexibel )</span></li>
			<li>Direkter Zugriff auf die <a href="http://us.battle.net/wow/en/forum/2626217/" title="Community Platform API">Battle.net API</a> <span class="comment">( = Die aktuellste und zuverlässigste Datenquelle )</span></li>
			<li></li>
		</ul>
	</p>
	
	<h2>Erklärung &amp; Beispiele</h2>
	
	<h3>Was wird mit einem Tooltip versehen?</h3>
	<p>Das WowDataTooltip Plugin verpasst jedem Link dessen URL auf ein Battle.net Charakterprofil zeigt einen Tooltip. Zum Beispiel <a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">http://eu.battle.net/wow/de/character/gilneas/Rhil/</a>.</p>
	<p>Dabei ist es auch nicht wichtig ob der Link über weitere Parameter verfügt:</p>
	<p>
		<ul>
			<li><a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced">http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced</a></li>
			<li><a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary">http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary</a></li>
			<li><a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883">http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883</a></li>
		</ul>
	</p>
	
	<h3>I18N - Mehrsprachige Tooltips</h3>
	<p>Derzeit unterstützt die Battle.net API das Anfordern von spezifischen Sprachdaten leider nocht nicht. Ich habe somit selbst eine Lokalisierungslib eingebaut welche die grundlegenden Funktionen zur Verfügung stellt.</p>
	<p>Der Tooltip wird in derselben Sprache angezeigt wie die verlinkte Battl.net Profilseite:</p>
	<p>
		<ul>
			<li><a href="http://eu.battle.net/wow/de/character/gilneas/Agonya/">Deutsch: Agonya</a></li>
			<li><a href="http://eu.battle.net/wow/en/character/gilneas/Rancora/">Englisch: Rancora</a></li>
			<li><a href="http://eu.battle.net/wow/fr/character/gilneas/Rakel/">Französisch: Rakel</a></li>
			<li><a href="http://eu.battle.net/wow/es/character/gilneas/Nhyria/">Spanisch: Nhyria</a></li>
			<li><a href="http://eu.battle.net/wow/ru/character/gilneas/Necry/">Russisch: Necry</a></li>
			<li><a href="http://eu.battle.net/wow/ko/character/gilneas/Lhoyra/">Hanguk (Südkorea): Lhoyra</a></li>
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
	
	<h2>Item und Realm Tooltips <span class="comment">( In Arbeit ^^ )</span></h2>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script type="text/javascript">
		
		jQuery(function () {
			
			jQuery('#wdt-dynamic-character-profile-button').bind('click', function() {
				
				var url = jQuery('#wdt-dynamic-character-profile-input').attr('value');
				
				if(url != '') {
					jQuery('#wdt-dynamic-character-profile-hyperlinks').append('<li><a href="'+url+'">'+url+'</a></li>');
				}
				
			});
			
		});
		
	</script>
	<script type="text/javascript" src="wdt/WowDataTooltip.js"></script>
</body>
</html>