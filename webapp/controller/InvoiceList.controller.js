sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("myNamespace.controller.InvoiceList", {
        format: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "INR"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
});