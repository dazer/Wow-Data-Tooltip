WowDataTooltip.addLocale('es_MX',{
	/* Routes to es_ES if no localization was found */
	'meta':{
		'locale':'es_MX',
		'fallback':'es_ES'
	},
	'templates':{
		'character':{
			'sri':'<%= this._loc(["characterClass", this["class"], this["gender"]]) %> de <%= this._loc(["characterRace", this["race"], this["gender"]]) %>, nivel <%= this["level"] %>',
			//'ilvl':'<%= this["averageItemLevelEquipped"] %> nvl. de obj. promedio (<%= this["averageItemLevel"] %>)'
		},
		'guild':{
			'sri':'Hermandad <%= this._loc(["factionSide", this["side"]]) %>, nivel <%= this["level"] %>, <%= this["realm"] %>'
		}
	}
});