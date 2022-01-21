sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel){
    "use strict";

    return Controller.extend("myNamespace.controller.App", {
        onInit: function() {
            var oData1 = {
                recipient : {
                    name : "Nitin"
                }
            };

            var oModel1 = new JSONModel(oData1);
            this.getView().setModel(oModel1);

            console.log(this.getView().getModel());

            var i18nModel = new ResourceModel({
                bundleName: "myNamespace.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");

            console.log(this.getView().getModel("i18n"));
        },
        onShowHello : function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        }
    });
});