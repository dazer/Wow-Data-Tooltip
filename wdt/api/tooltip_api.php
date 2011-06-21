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

$repository = array(
	'realm' => array(
		'regex' => '/realm:(eu|us)\.([a-z\-]+)\/(de|en|fr|es|)/siu',
		'api'   => 'http://{region}.battle.net/api/wow/realm/status?realm={slug}',
	),
);

if(isset($_REQUEST['query']) && !empty($_REQUEST['query'])) {
	
	$query   = urldecode($_REQUEST['query']);
	$matches = array();
	
	if(preg_match($repository['realm']['regex'], $query, $matches)) {
		
		$realm_data = array(
			'region' => $matches[1],
			'slug'   => $matches[2],
			'locale' => $matches[3],
		);
		
		$url = preg_replace(
			array(
				0 => '/\{region\}/siu',
				1 => '/\{slug\}/siu',
			),
			array(
				0 => urlencode($realm_data['region']),
				1 => urlencode($realm_data['slug']),
			),
			$repository['realm']['api']
		);
		
		$result = file_get_contents($url);
		
		$parsed = json_decode($result, true);
		
		if(isset($parsed['realms']) && is_array($parsed['realms']) && (count($parsed['realms']) == 1)) {
			$realm = $parsed['realms'][0];
			#$realm['queue'] = true;
			die(include(dirname(__FILE__).'/templates/tooltip_realm.php'));
		} else {
			die(include(dirname(__FILE__).'/templates/tooltip_realm_404.php'));
		}
		
		
	}
	
	die('Nothing found for "'.$query.'"...');
	
}


?>