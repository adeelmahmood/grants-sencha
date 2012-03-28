Ext.define('grants.store.Budgets', {
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
				path: 'customAttributes._attribute7'
			},
			reader: {
				type: 'json',
				rootProperty: 'nodes'
			}
		}
	}	
});