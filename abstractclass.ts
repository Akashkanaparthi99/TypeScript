abstract class Sports{
    constructor( public name:string, public noOfPlayers:number){}

    printDetails = ()=>{
        console.log(`Name : ${this.name}`);
        console.log(`No.of Players : ${this.noOfPlayers}`);
    }

    abstract groundtype():void;
}

class Cricket extends Sports{

    constructor( public name:string, public noOfPlayers:number , public coachName:string, public tournamentName:TOURNAMENT){
        super(name,noOfPlayers);
    }

    groundtype(): void {
        console.log(` It is a Cricket Ground`);
    }

    print=()=>{
        console.log(`Coach name : ${this.coachName}`);
        console.log(`Tournament type : ${this.tournamentName}`);
    }
}

class FootBall extends Sports{

    constructor( public name:string, public noOfPlayers:number , public sponsor:string, public tournamentName:TOURNAMENT){
        super(name,noOfPlayers);
    }


    groundtype(): void {
        console.log(` It is a Football Ground`);
    }

    print=()=>{
        console.log(`Sponsors name : ${this.sponsor}`);
        console.log(`Tournament type : ${this.tournamentName}`);
    }
    
}

enum TOURNAMENT{
    IPL="IPL Tournament",
    T20="T20 championship",
    ONEDAY="One day worldcup",
    FIFA="Fifa tournament",

}

const cricket:Cricket = new Cricket('India',11,'VVS laxman',TOURNAMENT.ONEDAY);
cricket.groundtype();
cricket.printDetails();
cricket.print();

const football:FootBall = new FootBall('Germany',15,'COCO COLA',TOURNAMENT.FIFA);
football.groundtype();
football.printDetails();
football.print();