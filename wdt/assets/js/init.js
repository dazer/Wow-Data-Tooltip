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
		
		if('object' === typeof($(this).data('qtip'))) {
			$(this).qtip('show');
		} else {
			$(this).qtip({
				overwrite: false, // Make sure another tooltip can't overwrite this one without it being explicitly destroyed
				show: {
					ready: true // Needed to make it show on first mouseover event
				},
				content: {
					text: '<div class="ajaxloading">Loading...</div>',
					ajax: {
						url: 'wdt/api/tooltip_api.php',
						type: 'get',
						data: {
							query: encodeURIComponent($(this).data('wowdatatooltip')),
						}
					}
				},
				position: {
					my: 'top left',
					at: 'bottom right',
					viewport: jQuery(window)
				},
				hide: 'mouseout',
				style: {
					classes: 'ui-tooltip-wdt-dark'
				}
			});
		}
		
	});
	
});
