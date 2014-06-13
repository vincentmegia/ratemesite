/* how to simply passing the elements to view */
function SupplierView() {
    this._elements = new Object();
}

SupplierView.prototype = {
    addElementById: function(name) {

        if (!this._elements.hasOwnProperty(name)) {
            this._elements[name] = document.getElementById(name);
            alert("setting value");
            alert(this._elements[name]);
        }
    },
    removeElement: function(element) {
        if (this._elements[element.id])
            this._elements[element] = undefined;
    },
    getElement: function(name) {
        alert(this._elements["searchAutoComplete"]);
        if (!this._elements[name])
            alert("do something with error later");
        return this._elements[name];
    }
}