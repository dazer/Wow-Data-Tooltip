The WowDataTooltip javascript library handles the generation of dynamic tooltips
containing World of Warcraft relevant data on Battle.net links and explicit
elements.

Copyright (C) 2011  Martin Gelder (darkspotinthecorner {at} gmail {dot} com)

Project Homepage: https://github.com/darkspotinthecorner/Wow-Data-Tooltip
       Demo Page: http://dev.dsitc.de/demos/wow-data-tooltip/

--------------------------------------------------------------------------------
This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this module. If not, see http://www.gnu.org/licenses/gpl.html.
--------------------------------------------------------------------------------



Requirements:
------------------------------------------------------------

From qtip2:
> Google Chrome     v8+
> Firefox           v3+
> Internet Explorer v6+
> Opera             v9+
> Safari            v2+



Installation:
------------------------------------------------------------

1. Download here: https://github.com/darkspotinthecorner/Wow-Data-Tooltip/archives/master

2. Unzip and upload to your webserver

3. Populate config to match your server's path and include wdt/WowDataTooltip.js
   on your pages:

<script type="text/javascript">
	window.___WowDataTooltip_Config = {
		'files': {
			'jquery.js': 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js', // The jQuery library
			'qtip2.js' : '{Path to the contained /qtip2 directory}/jquery.qtip.min.js',      // qTip2 javascript lib
			'qtip2.css': '{Path to the contained /qtip2 directory}/jquery.qtip.min.css',     // qTip2 css styles
			'wdt.css'  : '{Path to the contained /wdt directory}/WowDataTooltip.css',        // WowDataTooltip css styles
			'locale'   : '{Path to the contained /wdt directory}/locales/'                   // WowDataTooltip locale dir
		},
		'applyTo': {
			'explicit' : true, // Set to true if you want to apply tooltips to explicit flagged elements
			'battlenet': true  // Set to true if you want to apply tooltips to all battle.net links
		},
		'extendedMode': {
			'active': true, // Set to true if you want to use the extended mode functionality
		}
	};
</script>
<script type="text/javascript" src="{Path to the contained /wdt directory}/WowDataTooltip.js"></script>



Configuration
------------------------------------------------------------

All data assigned to the ___WowDataTooltip_Config object is passed into the lib
at launch and will override the default configuration. All available parameters
are described below:


> files / jquery.js
    [ String ] | Default: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js'
    Relative or absolute uri that points to the jQuery core lib

> files / qtip2.js
    [ String ] | Default: 'qtip2/jquery.qtip.min.js'
    Relative or absolute uri that points to the qTip2 lib file that comes
    together with this tooltip lib

> files / qtip2.css
    [ String ] | Default: 'qtip2/jquery.qtip.min.css'
    Relative or absolute uri that points to the qTip2 css file that comes
    together with this tooltip lib

> files / wdt.css
    [ String ] | Default: 'wdt/WowDataTooltip.css'
    Relative or absolute uri that points to the WowDataTooltip css file

> files / locales
    [ String ] | Default: 'wdt/locales/'
    Relative or absolute uri that points to the path containing the locale files


> applyTo / explicit
    [ Boolean ] | Default: true
    When this is true, all elements assigned explicit tooltip data will display
    a tooltip

> applyTo / battlenet
    [ Boolean ] | Default: true
    When this is true, all hyperlink elements that point to supported battle.net
    pages will display a tooltip


> extendedMode / active
    [ Boolean ] | Default: true
    When this is true, the tooltips will have support for extended modes that
    are only visible when a certain key is held down

> extendedMode / keyCode
    [ Integer ] | Default: 16
    This defines the key that is used to activate the extended mode
    Key Code Reference: http://www.cambiaresearch.com/c4/702b8cd1-e5b0-42e6-83ac-25f0306e3e25/Javascript-Char-Codes-Key-Codes.aspx

> extendedMode / keyCodeLabel
    [ String ] | Default: 'SHIFT'
    This is the label that is used to display the extended mode help message at
    the bottom of the tooltips


> layout / width / 404
    [ Integer ] | Default: 300
    The width of the 404 tooltips

> layout / width / realm
    [ Integer ] | Default: 200
    The width of the realm tooltips

> layout / width / quest
    [ Integer ] | Default: 325
    The width of the quest tooltips

> layout / width / item
    [ Integer ] | Default: 425
    The width of the item tooltips

> layout / width / character
    [ Integer ] | Default: 325
    The width of the character tooltips

> layout / width / guild
    [ Integer ] | Default: 200
    The width of the guild tooltips

> layout / width / arena
    [ Integer ] | Default: 325
    The width of the arena tooltips


> locales
    [ Array ] | Default: ['de_DE','en_GB','es_ES','es_MX','fr_FR','ko_KR','ru_RU','zh_CN','zh_TW']
    The locales that will be loaded by the lib on startup



What does ist do?
------------------------------------------------------------

* Any Battle.net Hyperlink to a character, guild, item or arena team profile
  will be given a tooltip that is displayed on mouseover

* Additionally, you may define explicit hovers on any element:

  1. Realms: <span data-wowdatatooltip="realm:eu.gilneas(de)">This is some text</span>
     Broken up: "realm:{region}.{server name or slug}({language})"

  2. Quests: <span data-wowdatatooltip="quest:eu.25(de)">This is some text</span>
     Broken up: "realm:{region}.{questid}({language})"

  3. Items: <span data-wowdatatooltip="item:eu.49623(de)">This is some text</span>
     Broken up: "character:{region}.{itemid}({language})"

  4. Chracters: <span data-wowdatatooltip="character:eu.gilneas.rhil(de)">This is some text</span>
     Broken up: "character:{region}.{server name or slug}.{character name}({language})"

  5. Guilds: <span data-wowdatatooltip="guild:eu.gilneas.ascension(de)">This is some text</span>
     Broken up: "guild:{region}.{server name or slug}.{guild name}({language})"

  6. Arena teams: <span data-wowdatatooltip="arena:us.bonechewer.2v2.Samurai Jack(en)">This is some text</span>
     Broken up: "arena:{region}.{server name or slug}.{team size (2v2, 3v3 or 5v5)}.{team name}({language})"



Extended Mode?!
------------------------------------------------------------

Some tooltips feature an extended mode (characters, items and arena teams
currently). This means that the tooltip will display other / extended
information as long a predefined key on your keybord is held down!

By default this key is the SHIFT key.

> The character tooltips are set up to display item level and profession
information as long as the key is held.

> The item tooltips display itemid, sell price, and other minor information as
long as the key is held.

> The arena team tooltips display current week statistics (as opposed to season
statistics) while the key is pressed.

You may deactivate this behavior by setting "extendedMode.active" to false in
the plugin's config.



Localization
------------------------------------------------------------

If you happen to know your was around "es_ES", "es_MX", "fr_FR", "ru_RU",
"ko_KR", "zh_TW" or "zh_CN" and want to lend a helping hand, please feel free to
contact me! :-)



FAQ
------------------------------------------------------------

Nothing yet! ;-)


