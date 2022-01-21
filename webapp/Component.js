sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";

    return UIComponent.extend("myNamespace.Component", {

        metadata: {
            "interface": ["sap.ui.core.IAsyncCntentCreation"],
            "rootView": {
                "viewName": "myNamespace.view.App",
                "type": "XML",
                "id": "app"
            }
        },

        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            var i18nModel = new ResourceModel({
                bundleName: "myNamespace.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
});