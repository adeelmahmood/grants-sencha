Ext.define('grants.store.Attachments', {
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
				path: 'customAttributes._FP_Documents'
			},
			reader: {
				type: 'json',
				rootProperty: 'nodes'
			}
		}
	}	
});