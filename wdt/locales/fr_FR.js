WowDataTooltip.addLocale('fr_FR',{
	'meta':{
		'locale':'fr_FR'
	},
	'templates':{
		'character':{
			'sri':'<%= this.localize(["characterClass", this["class"], this["gender"]]) %> <%= this.localize(["characterRace", this["race"], this["gender"]]) %> niv. <%= this["level"] %>',
			'ilvl':'<%= this.averageItemLevelEquipped %> Niveau moyen des objets (<%= this.averageItemLevel %>)'
		},
		'guild':{
			'sri':'Guilde de niveau <%= this["level"] %>, faction <%= this.localize(["factionSide", this["side"]]) %>, <%= this["realm"] %>',
			'members':'<%= this["members"].length %> membres'
		}
	},
	'loading-realm':'Chargement realm ...',
	'loading-item':'Chargement article ...',
	'loading-character':'Chargement de caractère ...',
	'loading-guild':'Chargement de guilde ...',
	'realm-not-found':'Realm pas été trouvé!',
	'characterClass':{'1':{'0':'Guerrier','1':'Guerrière'},'2':{'0':'Paladin','1':'Paladin'},'3':{'0':'Chasseur','1':'Chasseresse'},'4':{'0':'Voleur','1':'Voleuse'},'5':{'0':'Prêtre','1':'Prêtresse'},'6':{'0':'Chevalier de la mort','1':'Chevalier de la mort'},'7':{'0':'Chaman','1':'Chamane'},'8':{'0':'Mage','1':'Mage'},'9':{'0':'Démoniste','1':'Démoniste'},'11':{'0':'Druide','1':'Druidesse'}},
	'characterRace':{'1':{'0':'Humain','1':'Humaine'},'2':{'0':'Orc','1':'Orque'},'3':{'0':'Nain','1':'Naine'},'4':{'0':'Elfe de la nuit','1':'Elfe de la nuit'},'5':{'0':'Mort-vivant','1':'Morte-vivante'},'6':{'0':'Tauren','1':'Tauren'},'7':{'0':'Gnome','1':'Gnome'},'8':{'0':'Troll','1':'Trollesse'},'9':{'0':'Gobelin','1':'Gobeline'},'10':{'0':'Elfe de sang','1':'Elfe de sang'},'11':{'0':'Draeneï','1':'Draeneï'},'22':{'0':'Worgen','1':'Worgen'}},
	'factionSide':{'0':'Alliance','1':'Horde','alliance':'Alliance','horde':'Horde'},
	'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
	'realmQueue':{'false':'aucune file d\'attente','true':'file d\'attente'},
	'realmStatus':{'false':'Hors','true':'En ligne'},
	'realmPopulation':{'low':'la population est faible','medium':'la population moyenne','high':'élevée de la population'}
});