sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel){
    "use strict";

    return Controller.extend("myNamespace.controller.App", {
        onInit: function() {
            var oData1 = {
                recipient : {
                    name : "Nitin"
                }
            };

            var oData2 = {
                recipient : {
                    name : "Kumar"
                }
            };

            var oModel1 = new JSONModel(oData1);
            this.getView().setModel(oModel1, "modelAlias1");

            var oModel2 = new JSONModel(oData2);
            this.getView().setModel(oModel2, "modelAlias2");

            console.log(this.getView().getModel("modelAlias1"));
            console.log(this.getView().getModel("modelAlias2"));

        },
        onShowHello : function() {
            MessageToast.show("Hello World");
        }
    });
});