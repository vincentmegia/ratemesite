function SupplierService() {
    this._suppliersJsonUrl = "suppliers.json";
}

SupplierService.prototype = {
    getSuppliers: function(keyword, callback) {
        //rateme/details/suppliers.json?keyword=em
        var url = this._suppliersJsonUrl;
        $.ajax({
            url: url,
            data: { keyword: keyword },
            success: function(data, textStatus, jqXHR) {
                var suppliers = new Array();
                $.each(data, function(index, value){
                    var supplier = new Supplier();
                    supplier.setRating(value.rating);
                    supplier.setName(value.name);
                    supplier.setCreatedate(value.createdate);
                    suppliers.push(supplier);
                });
                callback(suppliers);
            }
        });
    }
}