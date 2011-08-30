WowDataTooltip.addLocale('ko_KR',{
	'meta':{
		'locale':'ko_KR'
	},
	'templates':{
		'character':{
			'sri':'<%= this["level"] %> <%= this._loc(["characterRace", this["race"]]) %> <%= this._loc(["characterClass", this["class"]]) %>',
			'ilvl':'<%= this.averageItemLevelEquipped %> 평균 아이템 레벨 (<%= this.averageItemLevel %>)'
		},
		'guild':{
			'sri':'<%= this["level"] %> 레벨 <%= this._loc(["factionSide", this["side"]]) %> 길드, <%= this["realm"] %>',
			'members':'구성원 <%= this["members"].length %>명'
		}
	},
	'loading-realm':'영역을로드하는 중 ...',
	'loading-item':'항목을로드 중 ...',
	'loading-character':'문자를로드 중입니다 ...',
	'loading-guild':'로딩 길드 ...',
	'realm-not-found':'영역을 찾을 수 없습니다!',
	'characterClass':{'1':'전사','2':'성기사','3':'사냥꾼','4':'도적','5':'사제','6':'죽음의 기사','7':'주술사','8':'마법사','9':'흑마법사','11':'드루이드'},
	'characterRace':{'1':'인간','2':'오크','3':'드워프','4':'나이트 엘프','5':'언데드','6':'타우렌','7':'노움','8':'트롤','9':'고블린','10':'블러드 엘프','11':'드레나이','22':'늑대인간'},
	'factionSide':{'0':'얼라이언스','1':'호드','alliance':'얼라이언스','horde':'호드'},
	'realmType':{'pve':'PvE','pvp':'PvP','rp':'RP','rppvp':'RPPvP'},
	'realmQueue':{'false':'없음 대기열 없음','true':'대기열'},
	'realmStatus':{'false':'오프라인','true':'온라인으로'},
	'realmPopulation':{'low':'낮은 인구','medium':'중간 인구','high':'높은 인구'}
});