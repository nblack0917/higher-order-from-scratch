let array = [1, 2, 3, 6, 4, 5, 6, 12]

const mapFromScratch = (arr, func) => {
  let newArr = [];
  for(elem of arr) {
    newArr.push(func(elem))
  }
  console.log("mapFromScratch: " + newArr)
  return newArr
}

const addTwo = (num) => {
  return num + 2
}
const addTen = (num) => {
  return num + 10
}

mapFromScratch(array, addTwo)
mapFromScratch(array, addTen)

const addArray = (arr => {
  let value = 0;
  for(elem of arr) {
    value += elem
  }
  console.log("Total sum of array: " + value)
})

addArray(array)
addArray(mapFromScratch(array, addTen))

const filterFromScratch = (arr, searchTerm) => {
  let newArr = []
  for(elem of arr) {
    if (elem == searchTerm) {
      newArr.push(elem)
    }
  }
  console.log("Found results: " + newArr)
}

filterFromScratch(array, 6)