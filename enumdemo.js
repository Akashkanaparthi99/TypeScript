var WEEKDAYS;
(function (WEEKDAYS) {
    WEEKDAYS["MONDAY"] = "monday";
    WEEKDAYS["TUESDAY"] = "tuesday";
    WEEKDAYS["WEDNESDAY"] = "mid of the week";
    WEEKDAYS["THURSDAY"] = "moving to the weekend";
    WEEKDAYS["FRIDAY"] = "last working day";
    WEEKDAYS["SATURDAY"] = "weekend starts";
    WEEKDAYS["SUNDAY"] = "holiday";
})(WEEKDAYS || (WEEKDAYS = {}));
console.log(WEEKDAYS.SUNDAY);
var showType = function (choice) {
    console.log(choice);
};
showType(WEEKDAYS.FRIDAY); // resturns the value
