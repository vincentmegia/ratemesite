/* how to simply passing the elements to view */
function SupplierView(elements) {
    this._elements = (elements != null || elements != undefined)
        ? elements
        : new Array();
}

SupplierView.prototype = {
    addElement: function(element) {
        if (!this._elements.contains(element))
            this._elements.addElement(element);
    },
    removeElement: function(element) {
        if (this._elements.contains(element))
            this._elements.remove(element);
    },
    getElement: function(name) {
        var control = null;
        for (var index = 0; index <= this._elements.length; index++) {
            if (this._elements[index].name == name) {
                control = this._elements[index];
                break;
            }
        }
        return control;
    }
}

/* initialize view */
var searchAutocomplete = document.getElementById("searchAutocomplete");
var supplierView =  new SupplierView();
supplierView.addElement(searchAutocomplete);