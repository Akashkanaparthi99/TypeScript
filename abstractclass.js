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
var Sports = /** @class */ (function () {
    function Sports(name, noOfPlayers) {
        var _this = this;
        this.name = name;
        this.noOfPlayers = noOfPlayers;
        this.printDetails = function () {
            console.log("Name : ".concat(_this.name));
            console.log("No.of Players : ".concat(_this.noOfPlayers));
        };
    }
    return Sports;
}());
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket(name, noOfPlayers, coachName, tournamentName) {
        var _this = _super.call(this, name, noOfPlayers) || this;
        _this.name = name;
        _this.noOfPlayers = noOfPlayers;
        _this.coachName = coachName;
        _this.tournamentName = tournamentName;
        _this.print = function () {
            console.log("Coach name : ".concat(_this.coachName));
            console.log("Tournament type : ".concat(_this.tournamentName));
        };
        return _this;
    }
    Cricket.prototype.groundtype = function () {
        console.log(" It is a Cricket Ground");
    };
    return Cricket;
}(Sports));
var FootBall = /** @class */ (function (_super) {
    __extends(FootBall, _super);
    function FootBall(name, noOfPlayers, sponsor, tournamentName) {
        var _this = _super.call(this, name, noOfPlayers) || this;
        _this.name = name;
        _this.noOfPlayers = noOfPlayers;
        _this.sponsor = sponsor;
        _this.tournamentName = tournamentName;
        _this.print = function () {
            console.log("Sponsors name : ".concat(_this.sponsor));
            console.log("Tournament type : ".concat(_this.tournamentName));
        };
        return _this;
    }
    FootBall.prototype.groundtype = function () {
        console.log(" It is a Football Ground");
    };
    return FootBall;
}(Sports));
var TOURNAMENT;
(function (TOURNAMENT) {
    TOURNAMENT["IPL"] = "IPL Tournament";
    TOURNAMENT["T20"] = "T20 championship";
    TOURNAMENT["ONEDAY"] = "One day worldcup";
    TOURNAMENT["FIFA"] = "Fifa tournament";
})(TOURNAMENT || (TOURNAMENT = {}));
var cricket = new Cricket('India', 11, 'VVS laxman', TOURNAMENT.ONEDAY);
cricket.groundtype();
cricket.printDetails();
cricket.print();
var football = new FootBall('Germany', 15, 'COCO COLA', TOURNAMENT.FIFA);
football.groundtype();
football.printDetails();
football.print();
