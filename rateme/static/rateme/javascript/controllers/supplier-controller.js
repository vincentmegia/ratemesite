function SupplierController(view, model) {
    this._view = view;
    this._model = model;
}

SupplierController.prototype = {
    registerAutocomplete: function() {
        var autoComplete = this._view.getElement("searchAutocomplete");

    }
}