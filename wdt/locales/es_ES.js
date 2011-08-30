WowDataTooltip.addLocale('es_ES',{
	'meta':{
		'locale':'es_ES'
	},
	'templates':{
		'character':{
			'sri':'<%= this._loc(["characterRace", this["race"], this["gender"]]) %> <%= this._loc(["characterClass", this["class"], this["gender"]]) %> <%= this["level"] %>',
			'ilvl':'<%= this.averageItemLevelEquipped %> Nivel medio de objeto (<%= this.averageItemLevel %>)'
		},
		'guild':{
			'sri':'Hermandad (<%= this._loc(["factionSide", this["side"]]) %>), nivel <%= this["level"] %>, <%= this["realm"] %>',
			'members':'<%= this["members"].length %> miembros'
		}
	},
	'loading-realm':'Cargando reino ...',
	'loading-item':'Cargando Objeto...',
	'loading-character':'Cargando carácter ...',
	'loading-guild':'Carga del gremio ...',
	'realm-not-found':'Reino que no se encuentra!',
	'characterClass':{'1':{'0':'Guerrero','1':'Guerrera'},'2':{'0':'Paladín','1':'Paladín'},'3':{'0':'Cazador','1':'Cazadora'},'4':{'0':'Pícaro','1':'Pícara'},'5':{'0':'Sacerdote','1':'Sacerdotisa'},'6':{'0':'Caballero de la Muerte','1':'Caballero de la Muerte'},'7':{'0':'Chamán','1':'Chamán'},'8':{'0':'Mago','1':'Maga'},'9':{'0':'Brujo','1':'Bruja'},'11':{'0':'Druida','1':'Druida'}},
	'characterRace':{'1':{'0':'Humano','1':'Humana'},'2':{'0':'Orco','1':'Orco'},'3':{'0':'Enano','1':'Enana'},'4':{'0':'Elfo de la noche','1':'Elfa de la noche'},'5':{'0':'No-muerto','1':'No-muerta'},'6':{'0':'Tauren','1':'Tauren'},'7':{'0':'Gnomo','1':'Gnoma'},'8':{'0':'Trol','1':'Trol'},'9':{'0':'Goblin','1':'Goblin'},'10':{'0':'Elfo de sangre','1':'Elfa de sangre'},'11':{'0':'Draenei','1':'Draenei'},'22':{'0':'Huargen','1':'Huargen'}},
	'factionSide':{'0':'Alianza','1':'Horda','alliance':'Alianza','horde':'Horda'},
	'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
	'realmQueue':{'false':'no hay cola','true':'cola'},
	'realmStatus':{'false':'fuera de línea','true':'en línea'},
	'realmPopulation':{'low':'población de bajos','medium':'población media','high':'población de alto'}
});