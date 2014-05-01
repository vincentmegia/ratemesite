function SupplierController(view, supplierService) {
    this._view = view;
    this._supplierService = supplierService;
}

SupplierController.prototype = {
    registerAutocomplete: function() {
        var searchAutoComplete = this._view.getElement("searchAutoComplete");
        var supplierService = this._supplierService;
        $("#searchAutocomplete").autocomplete({
            source : function(request, callback) {
                supplierService.getSuppliers(request.term, callback);
            }
        });
    }
}

$(document).ready(function(){
    var view = new SupplierView();
    view.addElement("searchAutocomplete");
    var supplierService = new SupplierService();
    var supplierController = new SupplierController(view, supplierService);
    supplierController.registerAutocomplete();
});