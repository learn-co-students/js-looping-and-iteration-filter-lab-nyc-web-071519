// Code your solution in this file
function findMatching(drivers, name){
    const newArray = drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase();});
    return newArray;
}

function fuzzyMatch(drivers, str){
    const newArray = drivers.filter(function (driver) {return driver.startsWith(str);});
    return newArray;
}

function matchName(drivers, string){
    const newObj = drivers.filter(function (driver) {return driver["name"] === string;});
    return newObj;
}