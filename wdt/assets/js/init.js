/* **************************************************************************
 * The WowDataTooltip plugin handles the display of tooltips for World of
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

jQuery(document).ready(function($) {
	
	$('body').delegate('[data-wowdatatooltip]', 'mouseover', function() {
		
		// alert($(this).data('wowdatatooltip'));
		
		$(this).qtip({
			overwrite: false, // Make sure another tooltip can't overwrite this one without it being explicitly destroyed
			show: {
				ready: true // Needed to make it show on first mouseover event
			},
			content: {
				text: 'Loading...',
				// url: 'wdt/api/tooltip_api.php',
				url: 'http://dev.dsitc.de/api/wdt/tooltip_api.php',
				data: {
					query: encodeURIComponent($(this).data('wowdatatooltip')),
				},
				method: 'get'
			},
			position: {
				corner: {
					target:  'rightMiddle',
					tooltip: 'leftMiddle'
				},
				adjust: {
					screen: true
				}
			},
			hide: 'mouseout',
			style: {
				background: 'rgba(32, 32, 32, 0.66)',
				border: {
					width:  3,
					radius: 3,
					color:  'rgb(96, 96, 96)'
				},
				padding: '4px 8px',
				width:  400,
				name:   'dark'
			}
		});
		
	});
	
	$('body').delegate('[data-wowdatatooltip]', 'mouseout', function() {
		
		$(this).qtip('destroy');
		
	});
	
});