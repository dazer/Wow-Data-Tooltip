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

$now   = time();

$t     = include(dirname(__FILE__).'/translations.php');

$html  = '';

$html .= '<div class="tooltip_realm">';
$html .= '<div class="name">'.$realm['name'].' <span class="type">('.$t['realm']['type'][$realm['type']].')</span></div>';
$html .= '<div class="status">'.($realm['status'] ? ('Online' . ($realm['queue'] ? ' <span class="queue">(Queue)</span>' : '')) : 'Offline').'</div>';
$html .= '<div class="population">'.$t['realm']['population'][$realm['population']].'</div>';
$html .= '</div>';

return($html);

?>