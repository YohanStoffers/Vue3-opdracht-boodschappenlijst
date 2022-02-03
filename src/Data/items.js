class Item {
    constructor(name, price, amount){
        this.Name = name;
        this.Price = price;
        this.Amount = amount;
    }

    get name() {
        return this.Name;
    }
    get price() {
        return this.Price.toFixed(2);
    }
    get amount() {
        return this.Amount;
    }
    get subTotal() {
        return (this.Price * this.Amount).toFixed(2);
    }
    set amount(amount) {
        this._amount = amount
    }

    get message() {
        return 'hello world'
    }
}

export default [
    new Item("Cola", 2.50, 4),
    new Item("Beans", 1.20, 2),
    new Item("Candy", 0.70, 6),
    new Item("Steak", 4.55, 2),
    new Item("Pizza", 5, 1),
];