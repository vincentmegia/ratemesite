function Supplier(id, name, createdate, rating) {
    this._id = id;
    this._name = name;
    this._createdate = createdate;
    this._rating = rating;
    /* exception for jquery autocomplete */
    this.label = null;
    this.value = null;
}

Supplier.prototype = {
    setId: function(id) {
        if (isNaN(id))
            this._id = id;
    },
    setName: function(name) {
        if (name.length <= 0 || !name)
            throw "Name is null, undefined or empty";

        this._name = name;
        this.label = name;
        this.value = name;
    },
    setCreatedate: function(createdate) {
        this._createdate = createdate;
    },
    setRating: function(rating) {
        if (isNaN(rating))
            throw "Rating is expecting a number";
        this._rating = rating;
    }
}