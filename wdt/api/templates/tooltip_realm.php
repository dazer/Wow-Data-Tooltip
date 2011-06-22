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

require_once(dirname(__FILE__).'/_init.php');

$html  = '';

$html .= '<div class="tooltip_realm">';

$html .= '<div class="name">'.$realm['name'].' <span class="type">('.$l->t(array('realm', 'type', $realm['type'])).')</span></div>';

if($realm['status']) {
	if($realm['queue']) {
		$html .= '<div class="status online queue">'.$l->t(array('realm', 'status', 'true')).' <span class="queue">('.$l->t(array('realm', 'queue', 'true')).')</span></div>';
	} else {
		$html .= '<div class="status online">'.$l->t(array('realm', 'status', 'true')).'</div>';
	}
} else {
	$html .= '<div class="status offline">'.$l->t(array('realm', 'status', 'false')).'</div>';
}

$html .= '<div class="population">'.$l->t(array('realm', 'population', $realm['population'])).'</div>';

$html .= '</div>';

return($html);

?>