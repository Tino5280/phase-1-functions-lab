// Code your solution in this file!
function distanceFromHqInBlocks(blockNum) {
    if (blockNum > 42) {
        return blockNum - 42;
    }
    else {
        return 42 - blockNum;
    }
}

function distanceFromHqInFeet(blockNum) {
    return distanceFromHqInBlocks(blockNum) * 264
}

function distanceTravelledInFeet(blockNum1, blockNum2) {
    if (blockNum1 > blockNum2) {
        return (blockNum1 - blockNum2) * 264
    }
    else 
    return (blockNum2 - blockNum1) * 264
}

function calculatesFarePrice(blockNum1, blockNum2){
    let distance = distanceTravelledInFeet(blockNum1, blockNum2);
    if (distance <= 400) {
        return 0
    }
    if (distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance >= 2000 && distance <=2500) {
        return 25
    }
    else if (distance > 2500){
        return "cannot travel that far"
    }
}