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