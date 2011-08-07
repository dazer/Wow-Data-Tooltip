<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>WowDataTooltip - Test Suite, cleaned ;-)</title>
</head>
<body>
	<h3>Battle.net Links</h3>
	<p>Charakter: <a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">http://eu.battle.net/wow/de/character/gilneas/Rhil/</a></p>
	<p>Guild: <a href="http://eu.battle.net/wow/en/guild/gilneas/Ascension/">http://eu.battle.net/wow/en/guild/gilneas/Ascension/</a></p>
	<h3>Explicit Tooltips</h3>
	<p>Character: <span data-wowdatatooltip="character:eu.gilneas.agonya(de)">Agonya</span></p>
	<p>Guild: <span data-wowdatatooltip="guild:eu.gilneas.Out of Range(en)">Out of Range</span></p>
	<p>Realm: <span data-wowdatatooltip="realm:eu.gilneas(de)">Gilneas</span></p>
	<script type="text/javascript">
		window.___WowDataTooltip_Config = {
			'files': {
				'qtip2.js' : 'qtip2/jquery.qtip.min.js',
				'qtip2.css': 'qtip2/jquery.qtip.min.css',
				'wdt.css'  : 'wdt/WowDataTooltip.css'
			},
			'applyTo': {
				'battlenet': true,
				'explicit': true,
			}
		};
	</script>
	<script type="text/javascript" src="wdt/WowDataTooltip.js"></script>
</body>
</html>