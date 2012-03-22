Ext.define("grants.view.DetailPanel", {
	extend: 'Ext.Container',
	xtype: 'detailpanel',
	
	requires: [
		'grants.view.detail.Budgets',
		'grants.view.detail.History',
		'grants.view.detail.Attachments'
	],
	
	config: {
		layout: 'vbox',
		
		items: [
			{
				docked : 'top',
				xtype: 'titlebar',
				title: 'Details',
				items: [
					{
						text: 'back',
						ui: 'back',
						xtype: 'button',
						id: 'detailBackButton',
						align: 'left'
					},
					{
						text: 'Go to Website',
						ui: 'confirm',
						xtype: 'button',
						id: 'detailWebsiteButton',
						align: 'right'
					}
				]
			}
			,
			{
				xtype: 'component',
				tpl: [
					'<tpl for=".">',
						'<div class="detail">',
							'<div class="clear">',
								'<label class="label2 topleft">Title</label>',
								'<span class="span2 topright">{title}</span>',
							'</div>',
							'<div class="clear">',
								'<label class="label2">PI</label>',
								'<span class="span2">{piWithCompany}</span>',
							'</div>',
							'<div class="clear">',
								'<label class="label2">Status</label>',
								'<span class="span2">{status}</span>',
							'</div>',
							'<div class="clear">',
								'<label class="label2">Funding Type</label>',
								'<span class="span2">{fundType}</span>',
							'</div>',
							'{% if(values.fundAgency) { %}',
								'<div class="clear">',
									'<label class="label2">Funding Agency</label>',
									'<span class="span2">{fundAgency}</span>',
								'</div>',
							'{% } %}',
							'{% if(values.primTheme) { %}',
								'<div class="clear">',
									'<label class="label2">Primary Theme</label>',
									'<span class="span2">{primTheme}</span>',
								'</div>',
							'{% } %}',
							'<div class="clear">',
								'<label class="label2 bottomleft">Site</label>',
								'<span class="span2 bottomright">{site}</span>',
							'</div>',
							'<div class="clear"></div>',
						'</div>',
					'</tpl>'
				]
			},
			{
				xtype: 'tabpanel',
				flex: 1,
				ui: 'light',
				
				defaults: {
					styleHtmlContent: true,
					padding: 0
				},
		
				items: [
					{	xtype: 'budgets'	},
					{	xtype: 'history'	},
					{	xtype: 'attachments'	}
				]
			}
		]
	},
	
	//pass data to child components
	updateData: function(){
		console.log('detail panel data updated');
		var childComps = this.query('component[tpl]');
		for(var i=0; i<childComps.length; i++){
			childComps[i].setRecord(this.getRecord());
		}
	}
});