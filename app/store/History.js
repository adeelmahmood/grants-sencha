Ext.define('grants.store.History', {
	extend: 'Ext.data.Store',
	
	config: {
		//autoLoad: true,		
		model: 'grants.model.Entity',
		
		proxy: {
			type: 'jsonp',
			url: 'http://roegnc801a.mayo.edu/MIRISDev/PublicCustomLayouts/Service/Data/Lookup',
			callbackKey: 'callbackKey',
			extraParams: {
				type: 'ent',
				entity: '_FundingProposal',
				id: '',
				path: 'activities'
			},
			reader: {
				type: 'json',
				rootProperty: 'nodes'
			}
		}
	},
	
	filterBy: function(record, id){
		return false;
		var displayName = record.get('displayName');
		//filter on state transitions and admin activities
		if(displayName.match(/^State Transition/) || displayName.indexOf('(Administrator, System') != -1){
			return false;
		}
		return true;
	}
});