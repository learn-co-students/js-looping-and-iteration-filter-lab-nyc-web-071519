// Code your solution in this file
function findMatching(driversArr, string){
    return driversArr.filter(function (driverName){
        return driverName.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(driversArr, string){
    let length = string.length
    return driversArr.filter(function (driverName){
        return driverName.slice(0, length) === string
    })
}

function matchName(driversArr, string){
    return driversArr.filter(function (driver){
        return driver.name.toLowerCase() === string.toLowerCase()
    })
}