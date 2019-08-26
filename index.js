// Code your solution in this file
function findMatching(drivers, name){
    const new_array = drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase();});
    return new_array;
}

function fuzzyMatch(drivers, str){
    const new_array = drivers.filter(function (driver) {return driver.startsWith(str);});
    return new_array;
}

function matchName(drivers, string){
    const new_array = drivers.filter(function (driver) {return driver[name] === name;});
    return new_array;
}