const produceDrivingRange = function(blockRange){
  return function withinRange(num1, num2){
    a = parseInt(num1.replace("th", ""))
    b = parseInt(num2.replace("th", ""))
    let blocks = Math.abs(a-b)
    if (blocks < 0){blocks *= -1}
    if (blocks > blockRange){
      let over = blocks - blockRange
      return over + " blocks out of range"
    } else 
    if (blocks <= blockRange){
      let within = blockRange - blocks
      return "within range by " + within
    }
  }
}

const produceTipCalculator = function(fare){
  return function calcTip(tipRate){
    return fare * tipRate
  }
}

const Driver = createDriver()

function createDriver() {
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
