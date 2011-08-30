<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>WowDataTooltip - Test Suite, cleaned ;-)</title>
</head>
<body>
		
	<h3>Battle.net Links</h3>
	<ul>
		<li><a href="http://us.battle.net/wow/en/item/69558">Gegenstand: http://us.battle.net/wow/en/item/69558</a></li>
		<li><a href="http://us.battle.net/wow/en/item/71424">Gegenstand: http://us.battle.net/wow/en/item/71424</a></li>
		<li><a href="http://us.battle.net/wow/en/item/44096">Gegenstand: http://us.battle.net/wow/en/item/44096</a></li>
		<li><a href="http://us.battle.net/wow/en/item/223440923446">Ungültiger Gegenstand: http://us.battle.net/wow/en/item/223440923446</a></li>
		<li><a href="http://eu.battle.net/wow/de/character/gilneas/Rhil/">Charakter: http://eu.battle.net/wow/de/character/gilneas/Rhil/</a></li>
		<li><a href="http://eu.battle.net/wow/de/character/gilneas/Rhileu/">Ungültiger Charakter: http://eu.battle.net/wow/de/character/gilneas/Rhileu/</a></li>
		<li><a href="http://us.battle.net/wow/es/character/rexxar/Chalyss/">Locale Routing es_MX nach es_ES nach en_US: http://us.battle.net/wow/es/character/rexxar/Chalyss/</a></li>
		<li><a href="http://eu.battle.net/wow/en/guild/gilneas/Ascension/">Gilde: http://eu.battle.net/wow/en/guild/gilneas/Ascension/</a></li>
		<li><a href="http://eu.battle.net/wow/en/guild/gilneas/Ascension Number 2/">Ungültige Gilde: http://eu.battle.net/wow/en/guild/gilneas/Ascension Number 2/</a></li>
		<li><a href="http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jack/">Arenateam: http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jack/</a></li>
		<li><a href="http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jackson/">Ungültiges Arenateam: http://us.battle.net/wow/en/arena/bonechewer/2v2/Samurai Jackson/</a></li>
		<li><a href="http://us.battle.net/wow/en/arena/coilfang/5v5/ZOMGBRBICECREAMTRUCK/">Großes Arenateam: http://us.battle.net/wow/en/arena/coilfang/5v5/ZOMGBRBICECREAMTRUCK/</a></li>
		<li><a href="http://eu.battle.net/wow/de/arena/amanthul/5v5/Der Ösi Hat Lead/">Deutsches Arenateam: http://eu.battle.net/wow/de/arena/amanthul/5v5/Der Ösi Hat Lead/</a></li>
		<li><a href="http://eu.battle.net/wow/en/arena/amanthul/5v5/Der Ösi Hat Lead/">Deutsches Arenateam auf Englisch: http://eu.battle.net/wow/en/arena/amanthul/5v5/Der Ösi Hat Lead/</a></li>
	</ul>
	
	<h3>Explicit Tooltips</h3>
	<ul>
		<li><span data-wowdatatooltip="item:us.49623(en)">Gegenstand: Shadowmourne (en)</span></li>
		<li><span data-wowdatatooltip="item:us.49623bam(en)">Ungültiger Gegenstand: 49623bam (en)</span></li>
		<li><span data-wowdatatooltip="character:eu.gilneas.agonya(de)">Charakter: Agonya (de)</span></li>
		<li><span data-wowdatatooltip="character:eu.gilneas.rakel(en)">Charakter: Rakel (en)</span></li>
		<li><span data-wowdatatooltip="character:eu.gilneas.rakelchen(en)">Ungültiger Charakter: Rakelchen (en)</span></li>
		<li><span data-wowdatatooltip="guild:us.terokkar.Reforged(en)">Gilde: Reforged</span></li>
		<li><span data-wowdatatooltip="guild:us.terokkar.Reforged223(en)">Ungültige Gilde: Reforged223</span></li>
		<li><span data-wowdatatooltip="realm:us.gilneas(en)">Realm: Gilneas</span></li>
		<li><span data-wowdatatooltip="realm:eu.rhils-welt(de)">Ungültiger Realm: Rhil's Welt</span></li>
		<li><span data-wowdatatooltip="quest:us.25(en)">Englisch: Simmer Down Now</span></li>
		<li><span data-wowdatatooltip="quest:eu.25(de)">Deutsch: Und dann langsam abkühlen lassen</span></li>
		<li><span data-wowdatatooltip="quest:us.10781(en)">Englisch / Gruppenquest: Battle of the Crimson Watch</span></li>
		<li><span data-wowdatatooltip="quest:eu.10781(de)">Deutsch / Gruppenquest: Battle of the Crimson Watch</span></li>
		<li><span data-wowdatatooltip="quest:eu.10blubb781(de)">Ungültige Quest: 10blubb781</span></li>
		<li><span data-wowdatatooltip="arena:us.bonechewer.2v2.Samurai Jack(en)">Arenateam: Samurai Jack</span></li>
		<li><span data-wowdatatooltip="arena:us.bonechewer.2v2.Samurai Jackson(en)">Ungültiges Arenateam: Samurai Jackson</span></li>
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
	
	
	
	<script type="text/javascript">
		window.___WowDataTooltip_Config = {
			'files': {
				'qtip2.js' :'qtip2/jquery.qtip.min.js',
				'qtip2.css':'qtip2/jquery.qtip.min.css',
				'wdt.css'  :'wdt/WowDataTooltip.css',
				'locales'  :'wdt/locales/'
			},
			/*
			'layout':{
				'position':{
					'target':'mouse'
				}
			}
			*/
		};
	</script>
	<script type="text/javascript" src="wdt/WowDataTooltip.js"></script>
</body>
</html>