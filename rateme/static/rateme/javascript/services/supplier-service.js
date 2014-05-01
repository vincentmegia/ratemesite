function SupplierService() {
    this._suppliersJsonUrl = "rateme/details/suppliers.json";
}

SupplierService.prototype = {
    getSuppliers: function(keyword, callback) {
        $.ajax({
            url: "/rateme/details/suppliers.json",
            data: { keyword: keyword },
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