sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
        name: "myNamespace",
        settings: {
            id: "walkthrough"
        },
        async: true
    }).placeAt("content");
});