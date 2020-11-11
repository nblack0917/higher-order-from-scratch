let array = [1, 2, 3, 4, 5, 6, 12]

const mapFromScratch = (arr, func) => {
  let newArr = [];
  for(elem of arr) {
    newArr.push(func(elem))
  }
  console.log("mapFromScratch: " + newArr)
}

const addTwo = (num) => {
  return num + 2
}
const addTen = (num) => {
  return num + 10
}

mapFromScratch(array, addTwo)
mapFromScratch(array, addTen)

