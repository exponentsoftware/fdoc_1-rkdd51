const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

const varietyOfWords = (para) => {
  const words = para
    .split(" ")
    .filter((word) => word.length > 1)
    .filter((word, pos, self) => {
      return self.indexOf(word) == pos;
    });
  console.log(words.length);
};

varietyOfWords(sentence);
