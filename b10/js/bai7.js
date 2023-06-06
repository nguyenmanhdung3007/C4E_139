let sportss = [
  {
      name: 'Bơi lội',
      gold: 11
  },
  {
      name: 'Boxing',
      gold: 3
  },
  {
      name: 'Đạp xe',
      gold: 4
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
]

function getTotalGold(array) {
  let totalGold = 0;
  for (let index = 0; index < array.length; index++) {
    totalGold += array[index].gold;
  }
  return totalGold;
  
}

console.log(getTotalGold(sportss));