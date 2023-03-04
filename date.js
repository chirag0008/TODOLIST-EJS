exports.getDate=getDate;
exports.getDay=getDay;
function getDate(){
let today=new Date();
let options={
    weekday:"long",
    day:"numeric",
    month:"long"
}
var day=today.toLocaleDateString("en-us",options);
return day;
}
function getDay(){
    let today=new Date();
    let options={
        weekday:"long",
    }
    var day=today.toLocaleDateString("en-us",options);
    return day;
    }
