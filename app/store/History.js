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
				path: 'activities'
			},
			reader: {
				type: 'json',
				rootProperty: 'nodes'
			}
		},
	
		listeners: {
		   load: function(s){
				s.filterBy(function(record, id){
					var displayName = record.get('displayName');
					//filter on state transitions and admin activities
					if(displayName.match(/^State Transition/) || displayName.indexOf('(Administrator, System') != -1 || displayName.match(/^Change Log \(/)){
						return false;
					}
					return true;
				});
			}
		}
	}
});