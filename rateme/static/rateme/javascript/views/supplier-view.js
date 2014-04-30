/* how to simply passing the elements to view */
function SupplierView() {
    this._elements = new Object();
}

SupplierView.prototype = {
    addElement: function(element) {
        if (!this._elements[element.id])
            this._elements[element.id] = element;
    },
    removeElement: function(element) {
        if (this._elements[element.id])
            this._elements[element] = undefined;
    },
    getElement: function(name) {
        var control = null;
        $.each(this._elements, function(key, value) {
            if (name == key)
                control = this._elements[key];
        });
        return control;
    }
}