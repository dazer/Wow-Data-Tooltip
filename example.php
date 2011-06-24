<?php
/**
 * example.php, example of a wdt implementation
 * 
 * @author Martin Gelder <darkspotinthecorner {at} gmail {dot} com>
 */
// example.php

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<title>WowDataTooltip Example Usage</title>
	
	<style type="text/css">
		body {
			font-family: monospace;
			font-size: 14px;
		}
		
		span.realm {
			text-decoration: underline;
		}
	</style>
	
	<link rel="stylesheet" type="text/css" media="all" href="wdt/assets/css/tooltip_realm.css" />
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script> 
	<script type="text/javascript" src="qtip/jquery.qtip-1.0.0-rc3.min.js"></script>
	<script type="text/javascript" src="wdt/assets/js/init.js"></script>
	
</head>
<body>
	
	<h1>Wow Data Tooltip - Demo Page</h1>
	<p><a href="http://code.google.com/p/wow-data-tooltip/">Project Homepage</a></p>
	
	<hr />
	
	<h2>Realm Tooltips:</h2>
	<p>Besucht mich doch mal auf <span class="realm" data-wowdatatooltip="realm:eu.gilneas/de">Gilneas</span>, meinem Heimatrealm.</p>
	<p>Alternativ auch gerne auf <span class="realm" data-wowdatatooltip="realm:eu.amanthul/de">hier</span>.</p>
	<p>Oder auf <span class="realm" data-wowdatatooltip="realm:eu.rawglrgrlrrrlrlrlll/de">Rawglrgrlrrrlrlrlll</span>, einem nicht vorhandenen Realm... ;-)</p>
	<p>Hier ist noch ein ungültiger Server, aber diesmal auf englisch: <span class="realm" data-wowdatatooltip="realm:eu.foobar/en">Foobar</span></p>
	
</body>
</html>