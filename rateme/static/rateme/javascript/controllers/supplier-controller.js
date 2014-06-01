function SupplierController(view, supplierService) {
    this._view = view;
    this._supplierService = supplierService;
}

SupplierController.prototype = {
    initialize: function() {
        this.registerAutocomplete();
        this.registerSlider()
    },
    registerAutocomplete: function() {
        var searchAutoComplete = this._view.getElement("searchAutoComplete");
        var supplierService = this._supplierService;
        $("#searchAutocomplete").autocomplete({
            source : function(request, callback) {
                supplierService.getSuppliers(request.term, callback);
            }
        });
    },
    registerSlider: function() {
        $(document).ready(function($){
            var options = { $AutoPlay: true };
            var slider = new $JssorSlider$("sliderContainer", options);
        });
    }
}

$(document).ready(function(){
    var view = new SupplierView();
    view.addElement("searchAutocomplete");
    view.addElement("sliderContainer");
    var supplierService = new SupplierService();
    var supplierController = new SupplierController(view, supplierService);
    supplierController.initialize();
});