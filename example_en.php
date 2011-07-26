<?php

$data = array();
$data['project']['homepage']  = 'http://code.google.com/p/wow-data-tooltip/';
$data['download']['status']   = 'alpha';
$data['download']['revision'] = '30';
$data['download']['link']     = 'http://code.google.com/p/wow-data-tooltip/downloads/detail?name=wdt-'.$data['download']['status'].'-'.$data['download']['revision'].'.zip';

$lang = 'en';

if(isset($_GET['lang'])) {
	switch($_GET['lang']) {
		case 'en':
		case 'de':
			$lang = $_GET['lang'];
			break;
	}
}

$repository = array(
	'en' => array(
		'title'                   => 'WowDataTooltip - Demo Page',
		'project home'            => 'Project home on Googlecode',
		'download title'          => 'Download file from googlecode',
		'download label rev'      => 'Download! ('.$data['download']['status'].'-r'.$data['download']['revision'].')',
		'reasons pro header'      => 'Marketing Bla bla, a.k.a. "What\'s so great about this Addon?!":',
		'reasons pro 1'           => 'It\'s pure Javascript <span class="comment">( = portable and not dependant on your server\'s setup )</span>',
		'reasons pro 2'           => '<a href="http://yepnopejs.com/" title="yepnope.js | A Conditional Loader For Your Polyfills!">Asynchronous resource loading</a> <span class="comment">( = page load time remains virtually unchanged )</span>',
		'reasons pro 3'           => 'Based on <a href="http://jquery.com/" title="jQuery: The Write Less, Do More, JavaScript Library">jQuery</a> <span class="comment">( = Cross-browser compatible and reliable )</span>',
		'reasons pro 4'           => 'Based on the tooltip addon <a href="http://craigsworks.com/projects/qtip2/" title="qTip2 - Pretty powerful tooltips" >qTip2</a> <span class="comment">( = up to date and higly flexible )</span>',
		'reasons pro 5'           => 'Integrated mini-template engine: <a href="https://github.com/janl/mustache.js" title="janl / mustache.js" >mustache</a>',
		'reasons pro 6'           => 'Direct access to the new <a href="http://us.battle.net/wow/en/forum/2626217/" title="Community Platform API">Battle.net API</a> <span class="comment">( = most relevant and reliable data source )</span>',
		'installation header'     => 'How do I install this thing?',
		'installation step 1'     => '<a href="'.$data['download']['link'].'" title="Filedownload on Googlecode">Download the files</a>',
		'installation step 2'     => 'Unzip and upload to your webserver',
		'installation step 3'     => 'Update the paths inside <code>wdt/WowDataTooltip.js</code>:',
		'installation step 4'     => 'Include <code>wdt/WowDataTooltip.js</code> on your pages:',
		'installation code 1'     => '<pre>\'resources\': {
	\'jquery\'         : \'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\',
	\'qtip2.plugin\'   : \'{{Path to the contained /qtip2 directory}}/jquery.qtip.min.js\',
	\'qtip2.css\'      : \'{{Path to the contained /qtip2 directory}}/jquery.qtip.min.css\',
	\'wdt.css\'        : \'{{Path to the contained /wdt directory}}/WowDataTooltip.css\'
},</pre>',
		'installation code 2'     => '<pre>&lt;script type="text/javascript" src="{{Path to the contained /wdt directory}}/WowDataTooltip.js"&gt;&lt;/script&gt;</pre>',
		'char tt header'          => 'Character tooltips <span class="comment">( Description &amp; examples )</span>',
		'char tt hint'            => 'Try it! Hold down [Shift] while a tooltip is displayed! :)',
		'char tt what header'     => 'Which elements will be granted a tooltip?',
		'char tt what text 1'     => 'A character tooltip is added to each hyperlink that points to a Battle.net character profile page. E.g.',
		'char tt what text 2'     => 'It\'s not important if that hyperlink is pointing to a subpage of a character profile:',
		'char tt what example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">http://eu.battle.net/wow/de/character/gilneas/Rhil/</a>',
		'char tt what example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced">http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced</a>',
		'char tt what example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary">http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary</a>',
		'char tt what example 4'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883">http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883</a>',
		'char tt i18n header'     => 'I18N - Because the internet is a big, big place',
		'char tt i18n text 1'     => 'I\'m aiming at supporting the same range of regions and locales that the official Battle.net site does:',
		'char tt i18n example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Agonya/">German: Agonya @ Gilneas (EU)</a></li>',
		'char tt i18n example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/character/gilneas/Rancora/">English: Rancora @ Gilneas (EU)</a></li>',
		'char tt i18n example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/character/gilneas/Rakel/">French: Rakel @ Gilneas (EU)</a></li>',
		'char tt i18n example 4'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/character/gilneas/Nhyria/">Spanish: Nhyria @ Gilneas (EU)</a></li>',
		'char tt i18n example 5'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/character/gilneas/Necry/">Russian: Necry @ Gilneas (EU)</a></li>',
		'char tt i18n example 6'  => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/character/달라란/축복은셀프입니다/">Hanguk: 축복은셀프입니다 @ 달라란 (KO)</a></li>',
		'char tt i18n example 7'  => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/character/冬握湖/阿露卡多/">Traditional chinese: 阿露卡多 @ 冬握湖 (TW)</a> (API returns 404, maybe not fully live here)</li>',
		'char tt i18n example 8'  => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/character/熔火之心/楼兰风行/">Simplified chinese: 楼兰风行 @ 熔火之心 (CN)</a></li>',
		'tt dynamic header'       => 'Dynamic! Quite so...',
		'tt dynamic text 1'       => 'I\'m using jQuery\'s <code>delegate()</code> method to check each element as it is hovered and not just once on <code>document.ready</code>. This means that any ajax-generated content will be respected by this addon.',
		'tt dynamic text 2'       => 'Just try it yourself:',
		'tt dynamic form hint'    => 'Insert any Battle.net character profile url in this field and press "Generate!"',
		'tt dynamic form button'  => 'Generate!',
		'guild tt header'         => 'Guild tooltips <span class="comment">( Description &amp; examples )</span>',
		'guild tt what header'    => 'Which elements will be granted a tooltip?',
		'guild tt what text 1'    => 'A character tooltip is added to each hyperlink that points to a Battle.net guild profile page. E.g.',
		'guild tt what text 2'    => 'It\'s not important if that hyperlink is pointing to a subpage of a guild profile:',
		'guild tt what example 1' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/">http://eu.battle.net/wow/de/guild/gilneas/Ascension/</a>',
		'guild tt what example 2' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/roster">http://eu.battle.net/wow/de/guild/gilneas/Ascension/roster</a>',
		'guild tt what example 3' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/achievement#15077:a5421">http://eu.battle.net/wow/de/guild/gilneas/Ascension/achievement#15077:a5421</a>',
		'guild tt i18n header'    => 'I18N - Because the internet is a big, big place',
		'guild tt i18n text 1'    => 'Of course I\'m supporting the full range of regions and locale here, too:',
		'guild tt i18n example 1' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/guldan/IPhönixI/roster">German: &lt;IPhönixI&gt; @ Guldan (EU)</a></li>',
		'guild tt i18n example 2' => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/guild/gilneas/Auge des Sturms/roster">English: &lt;Auge des Sturms&gt; @ Gilneas (EU)</a></li>',
		'guild tt i18n example 3' => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/guild/gilneas/Out of Range/roster">French: &lt;Out of Range&gt; @ Gilneas (EU)</a></li>',
		'guild tt i18n example 4' => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/guild/nathrezim/Myst/roster">Spanish: &lt;Myst&gt; @ Nathrezim (EU)</a></li>',
		'guild tt i18n example 5' => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/guild/dethecus/deCurseMe/roster">Russian: &lt;deCurseMe&gt; @ Dethecus (EU)</a></li>',
		'guild tt i18n example 6' => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/guild/알렉스트라자/나는 쓰랄과 제이나의 불륜현장을 목격했다/">Hanguk: &lt;나는 쓰랄과 제이나의 불륜현장을 목격했다&gt; @ 알렉스트라자 (KR)</a></li>',
		'guild tt i18n example 7' => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/guild/冬握湖/人在冏途身不由己/">Traditional chinese: &lt;人在冏途身不由己&gt; @ 冬握湖 (TW)</a> (API returns 404, maybe not fully live here)</li>',
		'guild tt i18n example 8' => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/guild/熔火之心/凌烟阁/">Simplified chinese: &lt;凌烟阁&gt; @ 熔火之心 (CN)</a></li>',
		'item tt header'          => 'Item tooltips <span class="comment">( Under developement ^^ )</span>',
		'item tt text 1'          => 'The item data API queries are only available to authenticated users at the moment.',
		'item tt text 2'          => 'I have been granted access recently and I\'m now able to test this out... :)',
		'realm tt header'         => 'Realm Tooltips <span class="comment">( Maybe... )</span>',
		'realm tt text 1'         => 'I\'m yet unsure if I should be including realm tooltips in this addon.',
		'realm tt text 2'         => 'I suppose it\'s mainly because I don\'t know what Battle.net url these should be linked to. ;-P',
		'issues header'           => 'Known "features"... erm, Bugs! ^^',
		'issues 1'                => 'The labels for talent specs are not yet localized and will be handed out in the browsers default language. (that\'s the theory...)',
		'issues 2'                => 'The labels for item level, guild info and the helper text for the extended mode are not yet localized and presented in english.',
		'issues 3'                => 'Firefox seems to have some issues with binding of hotkeys to switch between simple and extended mode. :-/',
		'issues 4'                => 'Because the included jQuery plugin qTip2 itself is quite new and not yet "stable" there may be some smaller issues with it. These should clean up as the project matures... *g*',
	),
	'de' => array(
		'title'                   => 'WowDataTooltip - Demo Seite',
		'project home'            => 'Projekt Homepage auf Googlecode',
		'download title'          => 'Dateidownload auf googlecode',
		'download label rev'      => 'Download! ('.$data['download']['status'].'-r'.$data['download']['revision'].')',
		'reasons pro header'      => 'Marketing Gesabbel a.k.a. "Warum ist dieses Tooltip Addon so toll?!":',
		'reasons pro 1'           => 'Rein Javascript-basierend <span class="comment">( = portabel und nicht an den Webserver gebunden )</span>',
		'reasons pro 2'           => '<a href="http://yepnopejs.com/" title="yepnope.js | A Conditional Loader For Your Polyfills!">Asynchrones Laden von Ressourcen</a> <span class="comment">( = Ladezeit der Seite ändert sich nur minimal )</span>',
		'reasons pro 3'           => 'Basiert auf <a href="http://jquery.com/" title="jQuery: The Write Less, Do More, JavaScript Library">jQuery</a> <span class="comment">( = Browserübergreifend und zuverlässig )</span>',
		'reasons pro 4'           => 'Basiert auf <a href="http://craigsworks.com/projects/qtip2/" title="qTip2 - Pretty powerful tooltips" >qTip2</a> <span class="comment">( = Brandaktuell und sehr flexibel )</span>',
		'reasons pro 5'           => 'Integrierte Mini-Template Engine: <a href="https://github.com/janl/mustache.js" title="janl / mustache.js" >mustache</a>',
		'reasons pro 6'           => 'Direkter Zugriff auf die <a href="http://us.battle.net/wow/en/forum/2626217/" title="Community Platform API">Battle.net API</a> <span class="comment">( = Die aktuellste und zuverlässigste Datenquelle )</span>',
		'installation header'     => 'Wie installiere ich dieses Ding?',
		'installation step 1'     => '<a href="'.$data['download']['link'].'" title="Dateidownload auf googlecode">Herunterladen der Dateien</a>',
		'installation step 2'     => 'Entpacken und auf den eigenen Webserver hochladen',
		'installation step 3'     => 'Anpassen der Pfade in <code>wdt/WowDataTooltip.js</code>:',
		'installation step 4'     => 'Einbinden von <code>wdt/WowDataTooltip.js</code> in die entsprechenden Webseiten:',
		'installation code 1'     => '<pre>\'resources\': {
	\'jquery\'         : \'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\',
	\'qtip2.plugin\'   : \'{{Pfad zum enthaltenen /qtip2 Verzeichnisses des Plugins}}/jquery.qtip.min.js\',
	\'qtip2.css\'      : \'{{Pfad zum enthaltenen /qtip2 Verzeichnisses des Plugins}}/jquery.qtip.min.css\',
	\'wdt.css\'        : \'{{Pfad zum enthaltenen /wdt Verzeichnisses des Plugins}}/WowDataTooltip.css\'
},</pre>',
		'installation code 2'     => '<pre>&lt;script type="text/javascript" src="{{Pfad zum enthaltenen /wdt Verzeichnisses des Plugins}}/WowDataTooltip.js"&gt;&lt;/script&gt;</pre>',
		'char tt header'          => 'Charakter Tooltips <span class="comment">( Erklärung &amp; Beispiele )</span>',
		'char tt hint'            => 'Probiert es aus: Haltet [Shift] gedrückt während ein Tooltip angezeigt wird! :)',
		'char tt what header'     => 'Was wird mit einem Tooltip versehen?',
		'char tt what text 1'     => 'Das WowDataTooltip Plugin verpasst jedem Link dessen URL auf ein Battle.net Charakterprofil zeigt einen Tooltip. Zum Beispiel:',
		'char tt what text 2'     => 'Dabei ist es auch nicht wichtig ob der Link über weitere Parameter verfügt:',
		'char tt what example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">http://eu.battle.net/wow/de/character/gilneas/Rhil/</a>',
		'char tt what example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced">http://eu.battle.net/wow/de/character/gilneas/Rhil/advanced</a>',
		'char tt what example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary">http://eu.battle.net/wow/de/character/gilneas/Rhil/talent/primary</a>',
		'char tt what example 4'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883">http://eu.battle.net/wow/de/character/gilneas/Rhil/achievement#81:a883</a>',
		'char tt i18n header'     => 'I18N - Mehrsprachige Tooltips',
		'char tt i18n text 1'     => 'Ich versuche die gleichen Regionen und Sprachen zu unterstützen wie die offizielle Battle.net Seite:',
		'char tt i18n example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Agonya/">Deutsch: Agonya @ Gilneas (EU)</a></li>',
		'char tt i18n example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/character/gilneas/Rancora/">Englisch: Rancora @ Gilneas (EU)</a></li>',
		'char tt i18n example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/character/gilneas/Rakel/">Französisch: Rakel @ Gilneas (EU)</a></li>',
		'char tt i18n example 4'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/character/gilneas/Nhyria/">Spanisch: Nhyria @ Gilneas (EU)</a></li>',
		'char tt i18n example 5'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/character/gilneas/Necry/">Russisch: Necry @ Gilneas (EU)</a></li>',
		'char tt i18n example 6'  => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/character/달라란/축복은셀프입니다/">Hanguk: 축복은셀프입니다 @ 달라란 (KO)</a></li>',
		'char tt i18n example 7'  => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/character/冬握湖/阿露卡多/">Traditionelles Chinesisch: 阿露卡多 @ 冬握湖 (TW)</a> (API liefert hier immer 404, vermutlich noch nicht vollständig live)</li>',
		'char tt i18n example 8'  => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/character/熔火之心/楼兰风行/">Vereinfachtes Chinesisch: 楼兰风行 @ 熔火之心 (CN)</a></li>',
		'tt dynamic header'       => 'Dynamisch! Sogar sehr...',
		'tt dynamic text 1'       => 'Ich verwende die <code>delegate()</code> Methode von jQuery um mich auf den &lt;body&gt; zu hängen und alle Hyperlink im Dokument zu überprüfen. Dies hat zu Folge, dass auch dynamisch generierte Inhalte direkt mit Tooltips versehen werden.',
		'tt dynamic text 2'       => 'Probiert es doch einfach selbst aus:',
		'tt dynamic form hint'    => 'Füge hier die URL eines Battle.net Charakterprofils ein und drücke "Generieren!"',
		'tt dynamic form button'  => 'Generieren!',
		'guild tt header'         => 'Gilden Tooltips <span class="comment">( Erklärung &amp; Beispiele )</span>',
		'guild tt what header'    => 'Was wird mit einem Tooltip versehen?',
		'guild tt what text 1'    => 'Das WowDataTooltip Plugin verpasst jedem Link dessen URL auf ein Battle.net Gildenprofil zeigt einen Tooltip. Zum Beispiel:',
		'guild tt what text 2'    => 'Dabei ist es auch nicht wichtig ob der Link über weitere Parameter verfügt:',
		'guild tt what example 1' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/">http://eu.battle.net/wow/de/guild/gilneas/Ascension/</a>',
		'guild tt what example 2' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/roster">http://eu.battle.net/wow/de/guild/gilneas/Ascension/roster</a>',
		'guild tt what example 3' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/gilneas/Ascension/achievement#15077:a5421">http://eu.battle.net/wow/de/guild/gilneas/Ascension/achievement#15077:a5421</a>',
		'guild tt i18n header'    => 'I18N - Mehrsprachige Tooltips',
		'guild tt i18n text 1'    => 'Auch hier sind natürlich wieder diverse Sprachen und Regionen verfügbar:',
		'guild tt i18n example 1' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/guldan/IPhönixI/roster">Deutsch: &lt;IPhönixI&gt; @ Guldan (EU)</a></li>',
		'guild tt i18n example 2' => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/guild/gilneas/Auge des Sturms/roster">Englisch: &lt;Auge des Sturms&gt; @ Gilneas (EU)</a></li>',
		'guild tt i18n example 3' => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/guild/gilneas/Out of Range/roster">Französisch: &lt;Out of Range&gt; @ Gilneas (EU)</a></li>',
		'guild tt i18n example 4' => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/guild/nathrezim/Myst/roster">Spanisch: &lt;Myst&gt; @ Nathrezim (EU)</a></li>',
		'guild tt i18n example 5' => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/guild/dethecus/deCurseMe/roster">Russisch: &lt;deCurseMe&gt; @ Dethecus (EU)</a></li>',
		'guild tt i18n example 6' => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/guild/알렉스트라자/나는 쓰랄과 제이나의 불륜현장을 목격했다/">Hanguk: &lt;나는 쓰랄과 제이나의 불륜현장을 목격했다&gt; @ 알렉스트라자 (KR)</a></li>',
		'guild tt i18n example 7' => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/guild/冬握湖/人在冏途身不由己/">Traditionelles Chinesisch: &lt;人在冏途身不由己&gt; @ 冬握湖 (TW)</a> (API liefert hier immer 404, vermutlich noch nicht vollständig live)</li>',
		'guild tt i18n example 8' => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/guild/熔火之心/凌烟阁/">Vereinfachtes Chinesisch: &lt;凌烟阁&gt; @ 熔火之心 (CN)</a></li>',
		'item tt header'          => 'Item Tooltips <span class="comment">( In Arbeit ^^ )</span>',
		'item tt text 1'          => 'Derzeit sind die API Funktionen für Items nur für authentifizierte Calls einsichtlich.',
		'item tt text 2'          => 'Ich habe inzwischen Zugangsdaten erhalten und bin am Testen... :)',
		'realm tt header'         => 'Realm Tooltips <span class="comment">( Evtl..... )</span>',
		'realm tt text 1'         => 'Der Sinn und Zweck von Realm Tooltips steht bei mir noch nicht auf festen Füßen. Von daher stelle ich dieses Feature hinten an.',
		'realm tt text 2'         => 'Vor allem da ich nicht wüsste mit welcher Battle.net URL ich diese verknüpfen sollte... :-P',
		'issues header'           => 'Bekannte "Features"... äh, Bugs! ^^',
		'issues 1'                => 'Die Bezeichnung der Skillungen sind noch nicht lokalisiert und werden in der Standardsprache des Browsers geliefert. (theoretisch zumindest...)',
		'issues 2'                => 'Die Labels für Itemlevel, Gildeninfo sowie der Hilfe-text für den erweiterten Modus sind noch nicht lokalisiert und werden in Englisch dargestellt.',
		'issues 3'                => 'Firefox hat scheinbar Probleme mit dem Registrieren der Hotkeys für das Umschalten zwischen einfachem und erweitertem Modus. :-/',
		'issues 4'                => 'Da das von mir verwendete Tooltip Addon qTip2 selbst nocht nicht "stable" ist sondern auch noch in Entwicklung ist kann es gelegentlich zu kleinen Fehlern in der Darstellung kommen. Diese sollten sich aber im Laufe der Zeit auswachsen... *g*',
	),
);

function te($sid) {
	global $repository, $lang;
	if(isset($repository[$lang][$sid])) {
		echo $repository[$lang][$sid];
	} else {
		echo '##### TRANSLATION MISSING : '.$lang.' &gt; '.$sid.' #####';
	}
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<title><?php te('title'); ?></title>
	
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
	
	<h1><?php te('title'); ?></h1>
	<p><a href="<?php echo($data['project']['homepage']); ?>"><?php te('project home'); ?></a> | <a href="<?php echo($data['download']['link']); ?>" title="<?php te('download title'); ?>"><?php te('download label rev'); ?></a></p>	
	
	<h2><?php te('reasons pro header'); ?></h2>
	<p>
		<ul id="reasons-pro">
			<li><?php te('reasons pro 1'); ?></li>
			<li><?php te('reasons pro 2'); ?></li>
			<li><?php te('reasons pro 3'); ?></li>
			<li><?php te('reasons pro 4'); ?></li>
			<li><?php te('reasons pro 5'); ?></li>
			<li><?php te('reasons pro 6'); ?></li>
			<li></li>
		</ul>
	</p>
	
	<h2><?php te('installation header'); ?></h2>
	<p>
		<ol id="installation">
			<li><?php te('installation step 1'); ?></li>
			<li><?php te('installation step 2'); ?></li>
			<li><?php te('installation step 3'); ?><?php te('installation code 1'); ?></li>
			<li><?php te('installation step 4'); ?><?php te('installation code 2'); ?></li>
		</ol>
	</p>
	
	<h2><?php te('char tt header'); ?></h2>
	
	<h2 class="hint"><?php te('char tt hint'); ?></h2>
	
	<h3><?php te('char tt what header'); ?></h3>
	<p><?php te('char tt what text 1'); ?> <?php te('char tt what example 1'); ?></p>
	<p><?php te('char tt what text 2'); ?></p>
	<p>
		<ul>
			<li><?php te('char tt what example 2'); ?></li>
			<li><?php te('char tt what example 3'); ?></li>
			<li><?php te('char tt what example 4'); ?></li>
		</ul>
	</p>
	
	<h3><?php te('char tt i18n header'); ?></h3>
	<p><?php te('char tt i18n text 1'); ?></p>
	<p>
		<ul>
			<li><?php te('char tt i18n example 1'); ?></li>
			<li><?php te('char tt i18n example 2'); ?></li>
			<li><?php te('char tt i18n example 3'); ?></li>
			<li><?php te('char tt i18n example 4'); ?></li>
			<li><?php te('char tt i18n example 5'); ?></li>
			<li><?php te('char tt i18n example 6'); ?></li>
			<li><?php te('char tt i18n example 7'); ?></li>
			<li><?php te('char tt i18n example 8'); ?></li>
		</ul>
	</p>
	
	<h3><?php te('tt dynamic header'); ?></h3>
	<p><?php te('tt dynamic text 1'); ?></p>
	<p><?php te('tt dynamic text 2'); ?></p>
	<div id="form">
		<p><label for="wdt-dynamic-character-profile-input" class="comment"><?php te('tt dynamic form hint'); ?></label></p>
		<p><input id="wdt-dynamic-character-profile-input" value="" /> <input type="button" id="wdt-dynamic-character-profile-button" value="<?php te('tt dynamic form button'); ?>" /></p>
		<ol id="wdt-dynamic-character-profile-hyperlinks"></ol>
	</div>
	
	<h2><?php te('guild tt header'); ?></h2>
	
	<h3><?php te('guild tt what header'); ?></h3>
	<p><?php te('guild tt what text 1'); ?> <?php te('guild tt what example 1'); ?></p>
	<p><?php te('guild tt what text 2'); ?></p>
	<p>
		<ul>
			<li><?php te('guild tt what example 2'); ?></li>
			<li><?php te('guild tt what example 3'); ?></li>
		</ul>
	</p>
	
	<h3><?php te('guild tt i18n header'); ?></h3>
	<p><?php te('guild tt i18n text 1'); ?></p>
	<p>
		<ul>
			<li><?php te('guild tt i18n example 1'); ?></li>
			<li><?php te('guild tt i18n example 2'); ?></li>
			<li><?php te('guild tt i18n example 3'); ?></li>
			<li><?php te('guild tt i18n example 4'); ?></li>
			<li><?php te('guild tt i18n example 5'); ?></li>
			<li><?php te('guild tt i18n example 6'); ?></li>
			<li><?php te('guild tt i18n example 7'); ?></li>
			<li><?php te('guild tt i18n example 8'); ?></li>
		</ul>
	</p>
	
	<h2><?php te('item tt header'); ?></h2>
	<p><?php te('item tt text 1'); ?></p>
	<p><?php te('item tt text 2'); ?></p>
	
	<h2><?php te('realm tt header'); ?></h2>
	<p><?php te('realm tt text 1'); ?></p>
	<p><?php te('realm tt text 2'); ?></p>
		
	<h2><?php te('issues header'); ?></h2>
	<p>
		<ol id="issues">
			<li class="fixed"><?php te('issues 1'); ?></li>
			<li><?php te('issues 2'); ?></li>
			<li class="fixed"><?php te('issues 3'); ?></li>
			<li><?php te('issues 4'); ?></li>
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