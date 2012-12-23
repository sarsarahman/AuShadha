function(urlObj /* URL Object */){
	require([
					"dojo/dom",
					"dojo/dom-style",
					"dojo/dom-construct",

					"dijit/registry",
					"dijit/form/Button",
					"dojox/layout/ContentPane",
					"dijit/layout/TabContainer",
					"dijit/layout/BorderContainer",
	], 
	function(dom, 
					 domStyle, 
					 domConstruct, 
					 registry, 
					 Button,
					 ContentPane, 
					 TabContainer, 
					 BorderContainer){
		
		function makeDoms(){
			domConstruct.create('div',
													{id: "patientObstetricsPreventivesTab"},
													"patientPreventivesTabs",
													"last"
			);

					domConstruct.create('div',
															{id: "obstetric_history_detail"},
															"patientObstetricsPreventivesTab",
															"first"
					);
		}

		function makeDijits(){
		  var preventiveHealthTabs  =  registry.byId('patientPreventivesTabs');
			var patientObstetricsPreventivesTab = new ContentPane({id:"patientObstetricsPreventivesTab",
                                                        title:"Obstetrics History",
																												 closable:true,
																												 doLayout:true
                                                        },
                                                        "patientObstetricsPreventivesTab"
                                                        );
      preventiveHealthTabs.addChild(patientObstetricsPreventivesTab);

					var patientObstetricsHistoryDetail = new ContentPane({id:"obstetric_history_detail",
																											},
																											"obstetric_history_detail"
																											);
					patientObstetricsPreventivesTab.addChild(patientObstetricsHistoryDetail);
					registry.byId('obstetric_history_detail').set('href', urlObj.obstetricHistoryUrl);
					registry.byId('patientContextTabs').
						selectChild( registry.byId('patientPreventiveHealthTab') )
					registry.byId('patientPreventivesTabs').
						selectChild( registry.byId('patientObstetricsPreventivesTab') )
			
		}

		makeDoms();
		makeDijits();

});

}