<?php

/* **************************************************************************
 * The wowdatatooltip plugin handles the display of tooltips for World of
 * Warcraft related data.
 * 
 * Copyright (C) 2011  Martin Gelder
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/gpl.html.
 * ************************************************************************** */

return(array(
	'realm' => array(
		'notfound' => 'Realm not found!',
		'status' => array(
			0 => 'Offline',
			1 => 'Online',
		),
		'queue' => array(
			0 => 'No Queue',
			1 => 'Queue'
		),
		'type' => array(
			'pve'   => 'PvE',
			'pvp'   => 'PvP',
			'rp'    => 'RP',
			'rppvp' => 'RPPvP',
		),
		'population' => array(
			'low'    => 'Low population',
			'medium' => 'Medium population',
			'high'   => 'High population',
			'n/a'    => 'Population not available',
		),
	),
));