The WowDataTooltip javascript library handles the generation of dynamic tooltips
containing World of Warcraft relevant data on Battle.net links and explicit
elements.

Copyright (C) 2011  Martin Gelder (darkspotinthecorner {at} gmail {dot} com)

Project Homepage: http://code.google.com/p/wow-data-tooltip/
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



Installation:
------------------------------------------------------------

1. Download here: http://code.google.com/p/wow-data-tooltip/downloads/list

2. Unzip and upload to your webserver

3. Populate config to match your server's path and include wdt/WowDataTooltip.js
   on your pages:

<script type="text/javascript">
	window.___WowDataTooltip_Config = {
		'files': {
			'jquery.js': 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js', // The jQuery library
			'qtip2.js' : '{Path to the contained /qtip2 directory}/jquery.qtip.min.js',      // qTip2 javascript lib
			'qtip2.css': '{Path to the contained /qtip2 directory}/jquery.qtip.min.css',     // qTip2 css styles
			'wdt.css'  : '{Path to the contained /wdt directory}/WowDataTooltip.css'         // WowDataTooltip css styles
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



What does ist do?
------------------------------------------------------------

* Any Battle.net Hyperlink to a character or guild profile will be given a
  tooltip that is displayed on mouseover

* Additionally, you may define explicit hovers on any element:

  1. Realms: <span data-wowdatatooltip="realm:eu.gilneas(de)">This is some text</span>
     Broken up: "realm:{region}.{server name or slug}({language})"

  2. Chracters: <span data-wowdatatooltip="character:eu.gilneas.rhil(de)">This is some text</span>
     Broken up: "character:{region}.{server name or slug}.{character name}({language})"

  3. Guilds: <span data-wowdatatooltip="guild:eu.gilneas.ascension(de)">This is some text</span>
     Broken up: "guild:{region}.{server name or slug}.{guild name}({language})"



Extended Mode?!
------------------------------------------------------------

Some tooltips feature an extended mode (currently only character tooltips). This
means that the tooltip will display other / extended information as long a
predefined key on your keybord is held down!

By default this key is the SHIFT key.

The character tooltips are set up to display item level and profession
information as long as the key is held.

You may deactivate this behavior by setting extendedMode.active to false in the
plugin's config.



FAQ
------------------------------------------------------------

Nothing yet, this is the first beta release! ;-)


