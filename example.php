<?php

$data = array();
$data['project']['homepage']  = 'http://code.google.com/p/wow-data-tooltip/';
$data['download']['status']   = 'beta';
$data['download']['revision'] = '73';
$data['download']['link']     = 'http://code.google.com/p/wow-data-tooltip/downloads/detail?name=wdt-'.$data['download']['status'].'-r'.$data['download']['revision'].'.zip';

$lang = 'en';

if(isset($_GET['lang'])) {
	switch($_GET['lang']) {
		case 'en':
		case 'de':
			$lang = $_GET['lang'];
			break;
	}
}

$repository_lang = array(
	'en' => array(
		'lang label'              => 'English',
		'lang switch title'       => 'Display this page in english',
		'lang select title'       => 'Choose a language:',
		'title'                   => 'WowDataTooltip - Demo Page',
		'project home'            => 'Project home on Googlecode',
		'download title'          => 'Download file from googlecode',
		'download label rev'      => 'Download! ('.$data['download']['status'].'-r'.$data['download']['revision'].')',
		'reasons pro header'      => 'Marketing Bla bla, a.k.a. "What\'s so great about this Addon?!":',
		'reasons pro 1'           => 'It\'s pure Javascript <span class="comment">( = portable and not dependant on your server\'s setup )</span>',
		'reasons pro 2'           => '<a href="http://yepnopejs.com/" title="yepnope.js | A Conditional Loader For Your Polyfills!">Asynchronous resource loading</a> <span class="comment">( = page load time remains virtually unchanged )</span>',
		'reasons pro 3'           => 'Based on <a href="http://jquery.com/" title="jQuery: The Write Less, Do More, JavaScript Library">jQuery</a> <span class="comment">( = Cross-browser compatible and reliable )</span>',
		'reasons pro 4'           => 'Based on the tooltip addon <a href="http://craigsworks.com/projects/qtip2/" title="qTip2 - Pretty powerful tooltips" >qTip2</a> <span class="comment">( = up to date and higly flexible )</span>',
		'reasons pro 5'           => 'Integrated mini-template engine: <a href="http://aefxx.com/jquery-plugins/jqote2/" title="aefxx / jQote2" >jQote2</a> <span class="comment">( = very speedy and modular )</span>',
		'reasons pro 6'           => 'Direct access to the new <a href="http://us.battle.net/wow/en/forum/2626217/" title="Community Platform API">Battle.net API</a> <span class="comment">( = most relevant and reliable data source )</span>',
		'installation header'     => 'How do I install this thing?',
		'installation step 1'     => '<a href="'.$data['download']['link'].'" title="Filedownload on Googlecode">Download the files</a>',
		'installation step 2'     => 'Unzip and upload to your webserver',
		'installation step 3'     => 'Populate config to match your server\'s path and include <code>wdt/WowDataTooltip.js</code> on your pages (Any omitted value will be set to it\'s default):',
		'installation code 1'     => '<pre class="code">&lt;script type="text/javascript"&gt;
	window.___WowDataTooltip_Config = {
		\'files\': {
			\'jquery.js\' : \'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\',
			\'qtip2.js\'  : \'{{webpath to qtip2 directory}}/jquery.qtip.min.js\',
			\'qtip2.css\' : \'{{webpath to qtip2 directory}}/jquery.qtip.min.css\',
			\'wdt.css\'   : \'{{webpath to wdt directory}}/WowDataTooltip.css\'
		},
		\'applyTo\': {
			\'battlenet\': true, // Set to false to disable automatic battle.net link tooltips
			\'explicit\' : true, // Set to false to disable explicit tooltips
		},
		\'layout\': {
			\'width\': {
				\'realm\'    : 200, // Width of realm tooltips in pixels
				\'item\'     : 425, // Width of item tooltips in pixels
				\'character\': 325, // Width of character tooltips in pixels
				\'guild\'    : 200  // Width of guild tooltips in pixels
			}
		},
		\'extras\': {
			\'applyCssColorToCaller\': false // Set to true to color the anchor element of any tooltip via css classes
		}
	};
&lt;/script&gt;
&lt;script type="text/javascript" src="{{webpath to wdt directory}}/WowDataTooltip.js"&gt;&lt;/script&gt;</pre>',
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
		'char tt i18n example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Agonya/">German: Agonya @ Gilneas (EU)</a>',
		'char tt i18n example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/character/gilneas/Rancora/">English: Rancora @ Gilneas (EU)</a>',
		'char tt i18n example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/character/gilneas/Rakel/">French: Rakel @ Gilneas (EU)</a>',
		'char tt i18n example 4'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/character/gilneas/Nhyria/">Spanish: Nhyria @ Gilneas (EU)</a>',
		'char tt i18n example 5'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/character/gilneas/Necry/">Russian: Necry @ Gilneas (EU)</a>',
		'char tt i18n example 6'  => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/character/달라란/축복은셀프입니다/">Hanguk: 축복은셀프입니다 @ 달라란 (KO)</a>',
		'char tt i18n example 7'  => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/character/冬握湖/阿露卡多/">Traditional chinese: 阿露卡多 @ 冬握湖 (TW)</a>',
		'char tt i18n example 8'  => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/character/熔火之心/楼兰风行/">Simplified chinese: 楼兰风行 @ 熔火之心 (CN)</a>',
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
		'guild tt i18n example 1' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/guldan/IPhönixI/roster">German: &lt;IPhönixI&gt; @ Guldan (EU)</a>',
		'guild tt i18n example 2' => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/guild/gilneas/Auge des Sturms/roster">English: &lt;Auge des Sturms&gt; @ Gilneas (EU)</a>',
		'guild tt i18n example 3' => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/guild/gilneas/Out of Range/roster">French: &lt;Out of Range&gt; @ Gilneas (EU)</a>',
		'guild tt i18n example 4' => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/guild/nathrezim/Myst/roster">Spanish: &lt;Myst&gt; @ Nathrezim (EU)</a>',
		'guild tt i18n example 5' => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/guild/dethecus/deCurseMe/roster">Russian: &lt;deCurseMe&gt; @ Dethecus (EU)</a>',
		'guild tt i18n example 6' => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/guild/알렉스트라자/나는 쓰랄과 제이나의 불륜현장을 목격했다/">Hanguk: &lt;나는 쓰랄과 제이나의 불륜현장을 목격했다&gt; @ 알렉스트라자 (KR)</a>',
		'guild tt i18n example 7' => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/guild/冬握湖/人在冏途身不由己/">Traditional chinese: &lt;人在冏途身不由己&gt; @ 冬握湖 (TW)</a>',
		'guild tt i18n example 8' => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/guild/熔火之心/凌烟阁/">Simplified chinese: &lt;凌烟阁&gt; @ 熔火之心 (CN)</a>',
		'item tt header'          => 'Item tooltips <span class="comment">( Description &amp; examples )</span>',
		'item tt text 1'          => 'The item data API is now public but still missing some common information. This means that the item tooltips are now functional but not yet feature-complete.',
		'item tt text 2'          => 'As soon as the item data API is updated I will be adding the missing information to the tooltips.',
		'item tt what header'     => 'Which elements will be granted a tooltip?',
		'item tt what text 1'     => 'An item tooltip is added to each hyperlink that points to a Battle.net item information page. E.g.',
		'item tt what text 2'     => 'It\'s not important if that hyperlink is pointing to a subpage of a character profile:',
		'item tt what text 3'     => 'You may also set up an item tooltip on any html element manually:',
		'item tt what example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/item/58133">http://eu.battle.net/wow/de/item/58133</a>',
		'item tt what example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/item/58133#tab=comments">http://eu.battle.net/wow/de/item/58133#tab=comments</a>',
		'item tt what example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/item/58133#tab=disenchantItems">http://eu.battle.net/wow/de/item/58133#tab=disenchantItems</a>',
		'item tt what example 4'  => '<pre class="code">&lt;span data-wowdatatooltip="item:eu.58133(en)"&gt;Englisch: Mask of Vines @ EU&lt;/span&gt;</pre>',
		'realm tt header'         => 'Realm Tooltips <span class="comment">( Description &amp; examples )</span>',
		'realm tt text 1'         => 'Realm tooltips are now available, too.',
		'realm tt text 2'         => 'Since there is no battle.net url that may be hijacked for realms, I included a way of adding explicit tooltips to any element:',
		'realm tt code 1'         => '<pre class="code">&lt;span data-wowdatatooltip="realm:eu.gilneas(en)"&gt;German: Gilneas @ EU&lt;/span&gt;</pre>',
		'realm tt example 1'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.gilneas(de)">German: Gilneas @ EU</span>',
		'realm tt example 2'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.gilnarf(de)">German: Gilnarf @ EU</span> *invalid*',
		'realm tt example 3'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.amanthul(en)">English: Aman\'Thul @ EU</span>',
		'realm tt example 4'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.aegwynn(en)">English: Aegwynn @ EU</span>',
		'realm tt example 5'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.argent-dawn(en)">English: Argent Dawn @ EU</span>',
		'realm tt example 6'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.der-abyssische-rat(de)">German: Der abyssische Rat @ EU</span>',
		'issues header'           => 'Known "features"... erm, Bugs! ^^',
		'issues 1'                => 'The labels for talent specs are not yet localized and will be handed out in the browsers default language. (that\'s the theory...)',
		'issues 2'                => 'The labels for item level, guild info etc. are not yet localized and presented in english.',
		'issues 3'                => 'Firefox seems to have some issues with binding of hotkeys to switch between simple and extended mode. :-/',
		'issues 4'                => 'Because the included jQuery plugin qTip2 itself is quite new and not yet "stable" there may be some smaller issues with it. These should clean up as the project matures... *g*',
		'issues 5'                => 'Localization is not yet complete. Only the locales "en_US", "en_GB" and "de_DE" are fully localized. If an element cannot be localized in any locale the system will fall back to "en_US".',
	),
	'de' => array(
		'lang label'              => 'Deutsch',
		'lang switch title'       => 'Diese Seite auf Deutsch anzeigen',
		'lang select title'       => 'Wählen Sie eine Sprache:',
		'title'                   => 'WowDataTooltip - Demo Seite',
		'project home'            => 'Projekt Homepage auf Googlecode',
		'download title'          => 'Dateidownload auf googlecode',
		'download label rev'      => 'Download! ('.$data['download']['status'].'-r'.$data['download']['revision'].')',
		'reasons pro header'      => 'Marketing Gesabbel a.k.a. "Warum ist dieses Tooltip Addon so toll?!":',
		'reasons pro 1'           => 'Rein Javascript-basierend <span class="comment">( = portabel und nicht an den Webserver gebunden )</span>',
		'reasons pro 2'           => '<a href="http://yepnopejs.com/" title="yepnope.js | A Conditional Loader For Your Polyfills!">Asynchrones Laden von Ressourcen</a> <span class="comment">( = Ladezeit der Seite ändert sich nur minimal )</span>',
		'reasons pro 3'           => 'Basiert auf <a href="http://jquery.com/" title="jQuery: The Write Less, Do More, JavaScript Library">jQuery</a> <span class="comment">( = Browserübergreifend und zuverlässig )</span>',
		'reasons pro 4'           => 'Basiert auf <a href="http://craigsworks.com/projects/qtip2/" title="qTip2 - Pretty powerful tooltips" >qTip2</a> <span class="comment">( = Brandaktuell und sehr flexibel )</span>',
		'reasons pro 5'           => 'Integrierte Mini-Template Engine: <a href="http://aefxx.com/jquery-plugins/jqote2/" title="aefxx / jQote2" >jQote2</a> <span class="comment">( = sehr schnell und dabei doch modular )</span>',
		'reasons pro 6'           => 'Direkter Zugriff auf die <a href="http://us.battle.net/wow/en/forum/2626217/" title="Community Platform API">Battle.net API</a> <span class="comment">( = Die aktuellste und zuverlässigste Datenquelle )</span>',
		'installation header'     => 'Wie installiere ich dieses Ding?',
		'installation step 1'     => '<a href="'.$data['download']['link'].'" title="Dateidownload auf googlecode">Herunterladen der Dateien</a>',
		'installation step 2'     => 'Entpacken und auf den eigenen Webserver hochladen',
		'installation step 3'     => 'Konfiguration an den eigenen Serverpfad anpassen und <code>wdt/WowDataTooltip.js</code> in die entsprechenden Webseiten einbinden (Werte die weggelassen werden, werden als Standard vorbelegt):',
		'installation code 1'     => '<pre class="code">&lt;script type="text/javascript"&gt;
	window.___WowDataTooltip_Config = {
		\'files\': {
			\'jquery.js\' : \'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js\',
			\'qtip2.js\'  : \'{{Webpfad zum qtip2 Verzeichnis}}/jquery.qtip.min.js\',
			\'qtip2.css\' : \'{{Webpfad zum qtip2 Verzeichnis}}/jquery.qtip.min.css\',
			\'wdt.css\'   : \'{{Webpfad zum wdt Verzeichnis}}/WowDataTooltip.css\'
		},
		\'applyTo\': {
			\'battlenet\': true, // Auf false setzen um keine automatischen Tooltips auf Battle.net Links zu erzeugen
			\'explicit\' : true, // Auf false setzen um keine expliziten Tooltips anzuzeigen
		},
		\'layout\': {
			\'width\': {
				\'realm\'    : 200, // Breite des Realm-Tooltips in Pixeln
				\'item\'     : 425, // Breite des Gegenstands-Tooltips in Pixeln
				\'character\': 325, // Breite des Charakter-Tooltips in Pixeln
				\'guild\'    : 200  // Breite des Gilden-Tooltips in Pixeln
			}
		},
		\'extras\': {
			\'applyCssColorToCaller\': false // Auf true setzen wenn das Ankerelements eines Tooltips ebenfalls einen CSS Farbcode erhalten soll
		}
	};
&lt;/script&gt;
&lt;script type="text/javascript" src="{{Webpfad zum wdt Verzeichnis}}/WowDataTooltip.js"&gt;&lt;/script&gt;</pre>',
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
		'char tt i18n example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/character/gilneas/Agonya/">Deutsch: Agonya @ Gilneas (EU)</a>',
		'char tt i18n example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/character/gilneas/Rancora/">Englisch: Rancora @ Gilneas (EU)</a>',
		'char tt i18n example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/character/gilneas/Rakel/">Französisch: Rakel @ Gilneas (EU)</a>',
		'char tt i18n example 4'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/character/gilneas/Nhyria/">Spanisch: Nhyria @ Gilneas (EU)</a>',
		'char tt i18n example 5'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/character/gilneas/Necry/">Russisch: Necry @ Gilneas (EU)</a>',
		'char tt i18n example 6'  => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/character/달라란/축복은셀프입니다/">Hanguk: 축복은셀프입니다 @ 달라란 (KO)</a>',
		'char tt i18n example 7'  => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/character/冬握湖/阿露卡多/">Traditionelles Chinesisch: 阿露卡多 @ 冬握湖 (TW)</a>',
		'char tt i18n example 8'  => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/character/熔火之心/楼兰风行/">Vereinfachtes Chinesisch: 楼兰风行 @ 熔火之心 (CN)</a>',
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
		'guild tt i18n example 1' => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/guild/guldan/IPhönixI/roster">Deutsch: &lt;IPhönixI&gt; @ Guldan (EU)</a>',
		'guild tt i18n example 2' => '<a class="wdt-hover" href="http://eu.battle.net/wow/en/guild/gilneas/Auge des Sturms/roster">Englisch: &lt;Auge des Sturms&gt; @ Gilneas (EU)</a>',
		'guild tt i18n example 3' => '<a class="wdt-hover" href="http://eu.battle.net/wow/fr/guild/gilneas/Out of Range/roster">Französisch: &lt;Out of Range&gt; @ Gilneas (EU)</a>',
		'guild tt i18n example 4' => '<a class="wdt-hover" href="http://eu.battle.net/wow/es/guild/nathrezim/Myst/roster">Spanisch: &lt;Myst&gt; @ Nathrezim (EU)</a>',
		'guild tt i18n example 5' => '<a class="wdt-hover" href="http://eu.battle.net/wow/ru/guild/dethecus/deCurseMe/roster">Russisch: &lt;deCurseMe&gt; @ Dethecus (EU)</a>',
		'guild tt i18n example 6' => '<a class="wdt-hover" href="http://kr.battle.net/wow/ko/guild/알렉스트라자/나는 쓰랄과 제이나의 불륜현장을 목격했다/">Hanguk: &lt;나는 쓰랄과 제이나의 불륜현장을 목격했다&gt; @ 알렉스트라자 (KR)</a>',
		'guild tt i18n example 7' => '<a class="wdt-hover" href="http://tw.battle.net/wow/zh/guild/冬握湖/人在冏途身不由己/">Traditionelles Chinesisch: &lt;人在冏途身不由己&gt; @ 冬握湖 (TW)</a>',
		'guild tt i18n example 8' => '<a class="wdt-hover" href="http://www.battlenet.com.cn/wow/zh/guild/熔火之心/凌烟阁/">Vereinfachtes Chinesisch: &lt;凌烟阁&gt; @ 熔火之心 (CN)</a>',
		'item tt header'          => 'Item Tooltips <span class="comment">( Erklärung &amp; Beispiele )</span>',
		'item tt text 1'          => 'Die Gegenstands API ist nun öffentlich verfügbar, allerdings fehlen ihr noch ein paar Daten. Dies bedeutet das die Item Tooltips nun ebenfalls live sind, aber die besagten Daten nicht dargestellt werden können.',
		'item tt text 2'          => 'Sobald die Daten in den APIs verfügbar sind werde ich diese auch in den Tooltips anzeigen können.',
		'item tt what header'     => 'Was wird mit einem Tooltip versehen?',
		'item tt what text 1'     => 'Das WowDataTooltip Plugin verpasst jedem Link dessen URL auf einen Battle.net Gegenstand zeigt einen Tooltip. Zum Beispiel:',
		'item tt what text 2'     => 'Dabei ist es auch nicht wichtig ob der Link über weitere Parameter verfügt:',
		'item tt what text 3'     => 'Es ist ebenso möglich einem beliebigen HTML Element einen expliziten Tooltip zuzuweisen:',
		'item tt what example 1'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/item/58133">http://eu.battle.net/wow/de/item/58133</a>',
		'item tt what example 2'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/item/58133#tab=comments">http://eu.battle.net/wow/de/item/58133#tab=comments</a>',
		'item tt what example 3'  => '<a class="wdt-hover" href="http://eu.battle.net/wow/de/item/58133#tab=disenchantItems">http://eu.battle.net/wow/de/item/58133#tab=disenchantItems</a>',
		'item tt what example 4'  => '<pre class="code">&lt;span data-wowdatatooltip="item:eu.58133(en)"&gt;Englisch: Mask of Vines @ EU&lt;/span&gt;</pre>',
		'realm tt header'         => 'Realm Tooltips <span class="comment">( Erklärung &amp; Beispiele )</span>',
		'realm tt text 1'         => 'Realm Tooltips sind nun auch verfügbar!',
		'realm tt text 2'         => 'Da es allerdings keine Battle.net Adressen gibt welche ich mit den Realms verknüpfen könnte, habe ich eine explizite Methode entwickelt um Tooltips zu beliebigen Elementen zuzuweisen:',
		'realm tt code 1'         => '<pre class="code">&lt;span data-wowdatatooltip="realm:eu.gilneas(en)"&gt;German: Gilneas @ EU&lt;/span&gt;</pre>',
		'realm tt example 1'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.gilneas(de)">German: Gilneas @ EU</span>',
		'realm tt example 2'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.gilnarf(de)">German: Gilnarf @ EU</span> *invalid*',
		'realm tt example 3'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.amanthul(en)">English: Aman\'Thul @ EU</span>',
		'realm tt example 4'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.aegwynn(en)">English: Aegwynn @ EU</span>',
		'realm tt example 5'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.argent-dawn(en)">English: Argent Dawn @ EU</span>',
		'realm tt example 6'      => '<span class="wdt-hover" data-wowdatatooltip="realm:eu.der-abyssische-rat(de)">German: Der abyssische Rat @ EU</span>',
		'issues header'           => 'Bekannte "Features"... äh, Bugs! ^^',
		'issues 1'                => 'Die Bezeichnung der Skillungen sind noch nicht lokalisiert und werden in der Standardsprache des Browsers geliefert. (theoretisch zumindest...)',
		'issues 2'                => 'Die Labels für Itemlevel, Gildeninfo usw. sind noch nicht lokalisiert und werden in Englisch dargestellt.',
		'issues 3'                => 'Firefox hat scheinbar Probleme mit dem Registrieren der Hotkeys für das Umschalten zwischen einfachem und erweitertem Modus. :-/',
		'issues 4'                => 'Da das von mir verwendete Tooltip Addon qTip2 selbst nocht nicht "stable" ist sondern auch noch in Entwicklung ist kann es gelegentlich zu kleinen Fehlern in der Darstellung kommen. Diese sollten sich aber im Laufe der Zeit auswachsen... *g*',
		'issues 5'                => 'Die Lokalisierung ist noch nicht abgeschlossen, bisher sind nur die Locales "en_US", "en_GB" und "de_DE" vollständig. Falls eine Übersetzung nicht vorhanden ist, so wird "en_US" alls Fallback heran gezogen.'
	),
);

function te($sid) {
	global $repository_lang, $lang;
	if(isset($repository_lang[$lang][$sid])) {
		echo $repository_lang[$lang][$sid];
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
			margin: 15px;
			margin-top: 45px;
		}
		
		a {
			color: #BBBBEE;
		}
		
		#lang-select {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 18px;
			color: #0d9;
			background-color: #064;
			padding: 6px;
		}
		
		#lang-select a {
			color: #0fb;			
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
			color: #00ffbb;
		}
		
		pre.code {
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
		
		#moreexamples {
			margin-top: 2em;
			padding: 10px;
		}
		
	</style>
</head>
<body>
	
	<div id="lang-select">
		<?php te('lang select title'); ?>
		<?php
			$c = array();
			foreach($repository_lang as $l => $strings) {
				$c[$l] = '<a href="'.$_SERVER['SCRIPT_NAME'].'?lang='.$l.'" title="'.$strings['lang switch title'].'">'.$strings['lang label'].'</a>';
			}
			echo(implode(' | ', $c));
		?>
	</div>
	
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
	
	<h2><?php te('realm tt header'); ?></h2>
	<p><?php te('realm tt text 1'); ?></p>
	<p><?php te('realm tt text 2'); ?></p>
	<p><?php te('realm tt code 1'); ?></p>
	
	<p>
		<ul>
			<li><?php te('realm tt example 1'); ?></li>
			<li><?php te('realm tt example 2'); ?></li>
			<li><?php te('realm tt example 3'); ?></li>
			<li><?php te('realm tt example 4'); ?></li>
			<li><?php te('realm tt example 5'); ?></li>
			<li><?php te('realm tt example 6'); ?></li>
		</ul>
	</p>
	
	<h2><?php te('item tt header'); ?></h2>
	<p><?php te('item tt text 1'); ?></p>
	<p><?php te('item tt text 2'); ?></p>
	
	<h3><?php te('item tt what header'); ?></h3>
	<p><?php te('item tt what text 1'); ?> <?php te('item tt what example 1'); ?></p>
	<p><?php te('item tt what text 2'); ?></p>
	<p>
		<ul>
			<li><?php te('item tt what example 2'); ?></li>
			<li><?php te('item tt what example 3'); ?></li>
		</ul>
	</p>
	
	<p><?php te('item tt what text 3'); ?></p>
	<p><?php te('item tt what example 4'); ?></p>
	
	<h2><?php te('issues header'); ?></h2>
	<p>
		<ol id="issues">
			<li class="fixed"><?php te('issues 1'); ?></li>
			<li class="fixed"><?php te('issues 2'); ?></li>
			<li class="fixed"><?php te('issues 3'); ?></li>
			<li><?php te('issues 4'); ?></li>
			<li><?php te('issues 5'); ?></li>
		</ol>
	</p>
	
	<div id="moreexamples">
		<h3>Battle.net Links</h3>
		<ul>
			<li><a href="http://us.battle.net/wow/en/item/69558">http://us.battle.net/wow/en/item/69558</a></li>
			<li><a href="http://us.battle.net/wow/en/item/71424">http://us.battle.net/wow/en/item/71424</a></li>
			<li><a href="http://us.battle.net/wow/en/item/44096">http://us.battle.net/wow/en/item/44096</a></li>
			<li><a href="http://us.battle.net/wow/en/item/223440923446">http://us.battle.net/wow/en/item/223440923446</a></li>
			<li><a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">http://eu.battle.net/wow/de/character/gilneas/Rhil/</a></li>
			<li><a href="http://eu.battle.net/wow/de/character/gilneas/Rhileu/">http://eu.battle.net/wow/de/character/gilneas/Rhileu/</a></li>
			<li><a href="http://us.battle.net/wow/es/character/rexxar/Chalyss/">http://us.battle.net/wow/es/character/rexxar/Chalyss/</a></li>
			<li><a href="http://eu.battle.net/wow/en/guild/gilneas/Ascension/">http://eu.battle.net/wow/en/guild/gilneas/Ascension/</a></li>
			<li><a href="http://eu.battle.net/wow/en/guild/gilneas/Ascension Number 2/">http://eu.battle.net/wow/en/guild/gilneas/Ascension Number 2/</a></li>
			<li><a href="http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jack/">http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jack/</a></li>
			<li><a href="http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jackson/">http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jackson/</a></li>
			<li><a href="http://us.battle.net/wow/en/arena/coilfang/5v5/ZOMGBRBICECREAMTRUCK/">http://us.battle.net/wow/en/arena/coilfang/5v5/ZOMGBRBICECREAMTRUCK/</a></li>
			<li><a href="http://eu.battle.net/wow/de/arena/amanthul/5v5/Der Ösi Hat Lead/">http://eu.battle.net/wow/de/arena/amanthul/5v5/Der Ösi Hat Lead/</a></li>
			<li><a href="http://eu.battle.net/wow/en/arena/amanthul/5v5/Der Ösi Hat Lead/">http://eu.battle.net/wow/en/arena/amanthul/5v5/Der Ösi Hat Lead/</a></li>
		</ul>

		<h3>Explicit Tooltips</h3>
		<ul>
			<li><span data-wowdatatooltip="item:us.49623(en)">item:us.49623(en)</span></li>
			<li><span data-wowdatatooltip="item:us.49623bam(en)">item:us.49623bam(en)</span></li>
			<li><span data-wowdatatooltip="character:eu.gilneas.agonya(de)">character:eu.gilneas.agonya(de)</span></li>
			<li><span data-wowdatatooltip="character:eu.gilneas.rakel(en)">character:eu.gilneas.rakel(en)</span></li>
			<li><span data-wowdatatooltip="character:eu.gilneas.rakelchen(en)">character:eu.gilneas.rakelchen(en)</span></li>
			<li><span data-wowdatatooltip="guild:us.terokkar.Reforged(en)">guild:us.terokkar.Reforged(en)</span></li>
			<li><span data-wowdatatooltip="guild:us.terokkar.Reforged223(en)">guild:us.terokkar.Reforged223(en)</span></li>
			<li><span data-wowdatatooltip="realm:us.gilneas(en)">realm:us.gilneas(en)</span></li>
			<li><span data-wowdatatooltip="realm:eu.rhils-welt(de)">realm:eu.rhils-world(de)</span></li>
			<li><span data-wowdatatooltip="quest:us.25(en)">quest:us.25(en)</span></li>
			<li><span data-wowdatatooltip="quest:eu.25(de)">quest:eu.25(de)</span></li>
			<li><span data-wowdatatooltip="quest:us.10781(en)">quest:us.10781(en)</span></li>
			<li><span data-wowdatatooltip="quest:eu.10781(de)">quest:eu.10781(de)</span></li>
			<li><span data-wowdatatooltip="quest:eu.10blubb781(de)">quest:eu.10blubb781(de)</span></li>
			<li><span data-wowdatatooltip="arena:us.bonechewer.2v2.Samurai Jack(en)">arena:us.bonechewer.2v2.Samurai Jack(en)</span></li>
			<li><span data-wowdatatooltip="arena:us.bonechewer.2v2.Samurai Jackson(en)">arena:us.bonechewer.2v2.Samurai Jackson(en)</span></li>
		</ul>

		<h3>Item Tooltips Test</h3>
		<ul>
			<li>
				<h4>Bindings</h4>
				<ul>
					<li><a href="http://us.battle.net/wow/en/item/18266">Bound to Zone: Gordok Courtyard Key</a></li>
					<li><a href="http://us.battle.net/wow/en/item/54536">Bound to Event: Satchel of Chilled Goods</a></li>
					<li><a href="http://us.battle.net/wow/en/item/30313">Bound to Instance: Staff of Disintegration</a></li>
					<li><a href="http://us.battle.net/wow/en/item/49919">Bound on Pickup: Cryptmaker</a></li>
					<li><a href="http://us.battle.net/wow/en/item/47315">Bound on Equip: Band of the Traitor King</a></li>
					<li><a href="http://us.battle.net/wow/en/item/48933">Bound on Use: Wormhole Generator: Northrend</a></li>
					<li><a href="http://us.battle.net/wow/en/item/44095">Bound to Battle.net Account: Grand Staff of Jordan</a></li>
				</ul>
			</li>
			<li>
				<h4>Classifications</h4>
				<ul>
					<li><a href="http://us.battle.net/wow/en/item/49869">Quest: Light's Vengeance</a></li>
					<li><a href="http://us.battle.net/wow/en/item/71424">Heroic: Incendic Chestguard</a></li>
					<li><a href="http://us.battle.net/wow/en/item/65499">Conjured: Conjured Mana Cake</a></li>
					<li><a href="http://us.battle.net/wow/en/item/52569">Unique: Ashen Band of Might</a></li>
					<li><a href="http://us.battle.net/wow/en/item/65499">Unique (x): Conjured Mana Cake</a></li>
					<li><a href="http://us.battle.net/wow/en/item/50255">Unique Equipped: Dread Pirate Ring</a></li>
					<li><a href="http://us.battle.net/wow/en/item/21872">Bag: Ebon Shadowbag</a></li>
					<li><a href="http://us.battle.net/wow/en/item/60218">Special Bag: Lure Master Tackle Box</a></li>
				</ul>
			</li>
			<li>
				<h4>Requirements</h4>
				<ul>
					<li><a href="http://us.battle.net/wow/en/item/59491">Profession Rank: Flashing Cogwheel</a></li>
					<li><a href="http://us.battle.net/wow/en/item/40727">Profession Specialization: Gnomish Gravity Well</a></li>
					<li><a href="http://us.battle.net/wow/en/item/69001">Reputation: Ancient Petrified Seed</a></li>
				</ul>
			</li>
			<li>
				<h4>Misc</h4>
				<ul>
					<li><a href="http://us.battle.net/wow/en/item/50379">Starts a Quest: Battered Hilt</a></li>
					<li><a href="http://us.battle.net/wow/en/item/50968">Extra Armor: Cataclysmic Chestguard</a></li>
					<li><a href="http://us.battle.net/wow/en/item/19364">Flavour Text: Ashkandi, Greatsword of the Brotherhood</a></li>
				</ul>
			</li>
			<li>
				<h4>Special Types</h4>
				<ul>
					<li><a href="http://us.battle.net/wow/en/item/40897">Glyph: Glyph of Maul</a></li>
					<li><a href="http://us.battle.net/wow/en/item/25899">Meta Gem: Brutal Earthstorm Diamond</a></li>
				</ul>
			</li>
		</ul>
	</div>
	
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
	<script type="text/javascript">
		window.___WowDataTooltip_Config = {
			'files': {
				'jquery.js': 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js',
				'qtip2.js' : 'qtip2/jquery.qtip.min.js',
				'qtip2.css': 'qtip2/jquery.qtip.min.css',
				'wdt.css'  : 'wdt/WowDataTooltip.css'
			},
			'extras': {
				'applyCssColorToCaller': true
			}
		};
	</script>
	<script type="text/javascript" src="wdt/WowDataTooltip.js"></script>
	<script type="text/javascript" src="https://apis.google.com/js/plusone.js">
	  {lang: '<?php echo($lang); ?>'}
	</script>

</body>
</html>