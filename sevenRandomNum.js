const arr = [];

let Uni = [];

const sevenRandonNum = () => {
  while (Uni.length < 7) {
    getRandomNumbers();
  }
  console.log(Uni);
};

sevenRandonNum();

function getRandomNumbers() {
  for (i = 0; i < 7; i++) {
    let r = Math.ceil(Math.random() * 9);
    arr.push(r);
  }
  let unique = arr.filter((num, pos, array) => {
    return array.indexOf(num) == pos;
  });
  if (unique.length > 7) {
    const slicedUnique = unique.slice(0, 7);
    Uni = [...slicedUnique];
  }
}
