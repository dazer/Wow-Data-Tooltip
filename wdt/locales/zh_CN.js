WowDataTooltip.addLocale('zh_CN',{
	'meta':{
		'locale':'zh_CN'
	},
	'templates':{
		'character':{
			'sri':'<%= this["level"] %> <%= this._loc(["characterRace", this["race"]]) %> <%= this._loc(["characterClass", this["class"]]) %>',
			'ilvl':'<%= this.averageItemLevelEquipped %> 物品平均等级 (<%= this.averageItemLevel %>)'
		},
		'guild':{
			'sri':'<%= this["level"] %> 级 <%= this._loc(["factionSide", this["side"]]) %> 公会, <%= this["realm"] %>',
			'members':'<%= this["members"].length %> 个成员'
		}
	},
	'loading-realm':'载入境界...',
	'loading-item':'载入项目...',
	'loading-character':'载入字符...',
	'loading-guild':'正在载入公会...',
	'realm-not-found':'没有发现的境界！',
	'characterClass':{'1':'战士','2':'圣骑士','3':'猎人','4':'潜行者','5':'牧师','6':'死亡骑士','7':'萨满祭司','8':'法师','9':'术士','11':'德鲁伊'},
	'characterRace':{'1':'人类','2':'兽人','3':'矮人','4':'暗夜精灵','5':'亡灵','6':'牛头人','7':'侏儒','8':'巨魔','9':'地精','10':'血精灵','11':'德莱尼','22':'狼人'},
	'factionSide':{'0':'联盟','1':'部落','alliance':'联盟','horde':'部落'},
	'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
	'realmQueue':{'false':'没有队列','true':'队列中'},
	'realmStatus':{'false':'离线','true':'在线'},
	'realmPopulation':{'low':'低人口','medium':'中等人口','high':'高人口'}
});