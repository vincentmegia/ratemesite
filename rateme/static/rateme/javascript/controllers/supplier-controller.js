function SupplierController(view, supplierService) {
    this._view = view;
    this._supplierService = supplierService;
}

SupplierController.prototype = {
    initialize: function() {
        this.registerAutocomplete();
        this.registerCarousel();
    },
    registerAutocomplete: function() {
        /*var searchAutoComplete = this._view.getElement("searchAutoComplete");*/
        /*todo use a MVC javascript framework*/
        var supplierService = this._supplierService;
        $("searchAutoComplete").autocomplete({
            source : function(request, callback) {
                supplierService.getSuppliers(request.term, callback);
            }
        });
    },
    registerCarousel: function() {
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                center: true,
                items: 1,
                stagePadding: 50,
                smartSpeed: 700,
                URLhashListener: true,
                startPosition: "URLHash"
            });
        });
    }
}

$(document).ready(function(){
    var view = new SupplierView();
    view.addElementById("searchAutocomplete");
    var supplierService = new SupplierService();
    var supplierController = new SupplierController(view, supplierService);

    supplierController.initialize();
});