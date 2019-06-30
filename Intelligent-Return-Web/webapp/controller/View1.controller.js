sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
], function (Controller, ODataModel) {
	"use strict";

	return Controller.extend("Intelligent-Return-Web.Intelligent-Return-Web.controller.View1", {
		onInit: function () {
			var oModel = new ODataModel("/IR_Test/xsodata/Retailer.xsodata/");
			var oJsonModel = new sap.ui.model.json.JSONModel();
			oModel.read("/Segment", null, null, true, function (oData, repsonse) {
				oJsonModel.setData(oData);
			});
			this.getView().setModel(oModel);
			sap.ui.getCore().setModel(oJsonModel);
			var oVizFrame = this.byId('DueDateGridFrame');
			var oVizPopover = this.byId('vizPopover');
			oVizPopover.connect(oVizFrame.getVizUid());
		}
	});
});