var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.getInfo = function () {
        console.log("".concat(this.make, "'s model: ").concat(this.model));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year) {
        var _this = _super.call(this, make, model) || this;
        _this.year = year;
        return _this;
    }
    Car.prototype.getFullInfo = function () {
        console.log("".concat(this.make, "'s model: ").concat(this.model, " made in ").concat(this.year));
    };
    return Car;
}(Vehicle));
var newObject = new Vehicle("Bonvi", "M5");
newObject.getInfo();
var newCar = new Car("BMW", "M5", 2024);
newCar.getFullInfo();
