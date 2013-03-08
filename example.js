/**
 * @class Item
 * @constructor
 * @param name {String} Item name
 * @param price {Number} Item price
 * @param quantity {Number} Item quantity (the number available to buy)
 * @param newParam {Number} New parameter, just for test!
 */
Store.Item = function (name, price, quantity, newParam) {
  
    var boo = 1;
    /**
     * @property name
     * @type String
     */
    this.name = name;
    /**
     * @property price
     * @type String
     */
    this.price = price * 100;
    /**
     * @property quantity
     * @type Number
     */
    this.quantity = quantity;
    /**
     * @property id
     * @type Number
     */
    this.id = Store.Item._id++;
    Store.Item.list[this.id] = this;
};
