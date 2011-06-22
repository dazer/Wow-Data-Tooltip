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

class Localizer {
	
	protected $locale     = 'en';
	protected $repository = array();
	
	public function __construct($locale) {
		$this->locale     = $locale;
		$this->repository = include(dirname(__FILE__).'/../config/translations.php');
	}
	
	public function t($query, $locale = null) {
		if($locale === null) $locale = $this->locale;
		if(isset($this->repository[$locale])) {
			$rpos = $this->repository[$locale];
		} else {
			$rpos = reset($this->repository);
		}
		if(!empty($query)) {
			foreach($query as $e) {
				if(isset($rpos[$e])) {
					$rpos = $rpos[$e];
				} else {
					// If nothing was found, return the last query element
					return(end($query));
				}
			}
			return($rpos);
		}
		return(null);
	}
}

?>