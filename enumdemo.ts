enum WEEKDAYS{
    MONDAY="monday",
    TUESDAY="tuesday",
    WEDNESDAY="mid of the week",
    THURSDAY="moving to the weekend",
    FRIDAY="last working day",
    SATURDAY="weekend starts",
    SUNDAY="holiday"
}

console.log(WEEKDAYS.SUNDAY);

let showType = (choice:WEEKDAYS)=>{
    console.log(choice);
}
showType(WEEKDAYS.FRIDAY); // resturns the value