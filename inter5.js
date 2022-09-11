var MobileImpl = /** @class */ (function () {
    function MobileImpl() {
        this.charging = function () { return console.log("Charging"); };
        this.call = function () { return console.log("Calling"); };
    }
    ;
    return MobileImpl;
}());
var gadgetDet = function () {
    return new MobileImpl();
};
var mob = gadgetDet();
mob.charging();
mob.call();
var itemDetails = function () {
    return {
        charging: function () { return console.log("cahrging............."); },
        call: function () { return console.log("cahrging............."); },
        work: function () { return console.log("cahrging............."); }
    };
};
var mob1 = itemDetails();
mob1.call();
mob1.charging();
itemDetails();
