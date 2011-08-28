WowDataTooltip.addLocale('zh_TW',{
	'meta':{
		'locale':'zh_TW'
	},
	'templates':{
		'character':{
			'sri':'<%= this["level"] %> <%= this.localize(["characterRace", this["race"]]) %> <%= this.localize(["characterClass", this["class"]]) %>',
			'ilvl':'<%= this.averageItemLevelEquipped %> 平均物品等級 (<%= this.averageItemLevel %>)'
		},
		'guild':{
			'sri':'等級<%= this["level"] %><%= this.localize(["factionSide", this["side"]]) %>公會, <%= this["realm"] %>',
			'members':'共<%= this["members"].length %>位成員'
		}
	},
	'loading-realm':'載入境界...',
	'loading-item':'加載項...',
	'loading-character':'載入字符...',
	'loading-guild':'載入公會...',
	'realm-not-found':'境界不存在！',
	'characterClass':{'1':'戰士','2':'聖騎士','3':'獵人','4':'流氓','5':'牧師','6':'死亡騎士','7':'巫','8':'法師','9':'術士','11':'德魯伊'},
	'characterRace':{'1':'人類','2':'獸人','3':'侏儒','4':'暗夜精靈','5':'被遺忘者','6':'牛頭人','7':'侏儒','8':'拖釣','9':'小妖精','10':'血精靈','11':'德萊尼','22':'狼人'},
	'factionSide':{'0':'的聯盟','1':'部落','alliance':'的聯盟','horde':'部落'},
	'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
	'realmQueue':{'false':'沒有隊列','true':'隊列中'},
	'realmStatus':{'false':'離線','true':'在線'},
	'realmPopulation':{'low':'低人口','medium':'中等人口','high':'高人口'}
});