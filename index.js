function returnFirstTwoDrivers(array){
    const newArray = array.slice(0,2)
    return newArray
}

function returnLastTwoDrivers(array){
    const lastTwo = array.slice(-2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(event){
        return integer * event
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
}
