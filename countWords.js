// 1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.




const countWords = (paragraph, str1, str2 ) => {
  
   const findTheWord =(string) =>{
        return  paragraph.split(/[ ., " "]/).filter((word) => word == string) 
        }
  

   const word1 = findTheWord(str1).length;
    const word2 = findTheWord(str2).length;
    
    if (word1 > word2) {
        const output1 = (str1 + " occur more frequent than " + str2);
        console.log(output1);
        return output1;
    }
    if (word1 == word2) {
        console.log(str1 + " and " + str2 + " occurs equal times. ");
    }
    else {
        const output2 = (str2 + " occur more frequent than " + str1);
        console.log(output2);
        return output2;
    }
        

}

const paragraph = 'I love teaching. if you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'

countWords(paragraph, 'do', 'not');

