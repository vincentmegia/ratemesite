function SupplierService() {
    this._suppliersJsonUrl = "rateme/details/suppliers.json";
}

SupplierService.prototype = {
    getSuppliers: function(callback) {
        $.ajax({
            url: "/rateme/details/suppliers.json",
            success: function(data, textStatus, jqXHR) {
                var suppliers = new Array();
                $.each(data, function(index, value){
                    var supplier = new Supplier();
                    supplier.setRating(value.fields["rating"]);
                    supplier.setName(value.fields["name"]);
                    supplier.setCreatedate(value.fields["createdate"]);
                    suppliers.push(supplier);
                });
                callback(suppliers);
            }
        });
    }
}