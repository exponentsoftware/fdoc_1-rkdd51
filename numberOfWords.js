const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

const countWords = (para) => {
    const words = para.split(" ").filter((word) => word.length > 1);
    console.log(words.length);
};

countWords(sentence);
