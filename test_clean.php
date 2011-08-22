<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>WowDataTooltip - Test Suite, cleaned ;-)</title>
</head>
<body>
	<h3>Battle.net Links</h3>
	<p>Item: <a href="http://us.battle.net/wow/en/item/69558">http://us.battle.net/wow/en/item/69558</a></p>
	<p>Item: <a href="http://us.battle.net/wow/en/item/71424">http://us.battle.net/wow/en/item/71424</a></p>
	<p>Item: <a href="http://us.battle.net/wow/en/item/44096">http://us.battle.net/wow/en/item/44096</a></p>
	<p>Charakter: <a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">http://eu.battle.net/wow/de/character/gilneas/Rhil/</a></p>
	<p>Guild: <a href="http://eu.battle.net/wow/en/guild/gilneas/Ascension/">http://eu.battle.net/wow/en/guild/gilneas/Ascension/</a></p>
	<h3>Explicit Tooltips</h3>
	<p>Item: <span data-wowdatatooltip="item:us.49623(en)">Shadowmourne (en)</span></p>
	<p>Character: <span data-wowdatatooltip="character:eu.gilneas.agonya(de)">Agonya (de)</span></p>
	<p>Character: <span data-wowdatatooltip="character:eu.gilneas.rakel(en)">Rakel (en)</span></p>
	<p>Guild: <span data-wowdatatooltip="guild:us.terokkar.Reforged(en)">Reforged</span></p>
	<p>Realm: <span data-wowdatatooltip="realm:us.gilneas(en)">Gilneas</span></p>
	
	<h3>Item Tooltips Test</h3>
	<ul>
		<li><h4>Fallback language</h4></li>
		<li><a href="http://eu.battle.net/wow/de/item/49623">German: Shadowmourne</a></li>
		
		<li><h4>Bindings</h4></li>
		<li><a href="http://us.battle.net/wow/en/item/18266">Bound to Zone: Gordok Courtyard Key</a></li>
		<li><a href="http://us.battle.net/wow/en/item/54536">Bound to Event: Satchel of Chilled Goods</a></li>
		<li><a href="http://us.battle.net/wow/en/item/30313">Bound to Instance: Staff of Disintegration</a></li>
		<li><a href="http://us.battle.net/wow/en/item/49919">Bound on Pickup: Cryptmaker</a></li>
		<li><a href="http://us.battle.net/wow/en/item/47315">Bound on Equip: Band of the Traitor King</a></li>
		<li><a href="http://us.battle.net/wow/en/item/48933">Bound on Use: Wormhole Generator: Northrend</a></li>
		<li><a href="http://us.battle.net/wow/en/item/44095">Bound to Battle.net Account: Grand Staff of Jordan</a></li>
		<li><h4>Classifications</h4></li>
		<li><a href="http://us.battle.net/wow/en/item/49869">Quest: Light's Vengeance</a></li>
		<li><a href="http://us.battle.net/wow/en/item/71424">Heroic: Incendic Chestguard</a></li>
		<li><a href="http://us.battle.net/wow/en/item/65499">Conjured: Conjured Mana Cake</a></li>
		<li><a href="http://us.battle.net/wow/en/item/52569">Unique: Ashen Band of Might</a></li>
		<li><a href="http://us.battle.net/wow/en/item/65499">Unique (x): Conjured Mana Cake</a></li>
		<li><a href="http://us.battle.net/wow/en/item/50255">Unique Equipped: Dread Pirate Ring</a></li>
		<li><a href="http://us.battle.net/wow/en/item/21872">Bag: Ebon Shadowbag</a></li>
		<li><a href="http://us.battle.net/wow/en/item/60218">Special Bag: Lure Master Tackle Box</a></li>
		
		<li><h4>Requirements</h4></li>
		<li><a href="http://us.battle.net/wow/en/item/59491">Profession Rank: Flashing Cogwheel</a></li>
		
		<li><h4>Misc</h4></li>
		<li><a href="http://us.battle.net/wow/en/item/50379">Starts a Quest: Battered Hilt</a></li>
		<li><a href="http://us.battle.net/wow/en/item/50968">Extra Armor: Cataclysmic Chestguard</a></li>
		<li><a href="http://us.battle.net/wow/en/item/19364">Flavour Text: Ashkandi, Greatsword of the Brotherhood</a></li>
		
		<li><h4>Special Types</h4></li>
		<li><a href="http://us.battle.net/wow/en/item/40897">Glyph: Glyph of Maul</a></li>
		<li><a href="http://us.battle.net/wow/en/item/25899">Meta Gem: Brutal Earthstorm Diamond</a></li>
		
	</ul>
	
	
	
	<script type="text/javascript">
		window.___WowDataTooltip_Config = {
			'files': {
				'jquote2.js': 'jqote2/jquery.jqote2.min.js',
				'qtip2.js'  : 'qtip2/jquery.qtip.min.js',
				'qtip2.css' : 'qtip2/jquery.qtip.min.css',
				'wdt.css'   : 'wdt/WowDataTooltip.css'
			},
			'applyTo': {
				'battlenet': true,
				'explicit': true,
			},
			'layout': {
				'width': {
					'realm'    : 200,
					'item'     : 420,
					'character': 300,
					'guild'    : 200
				}
			}
		};
	</script>
	<script type="text/javascript" src="wdt/WowDataTooltip.js"></script>
</body>
</html>