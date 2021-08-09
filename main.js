console.log("Hello ");

  // Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log("Q1. make a string out of an array");
    console.log(fruits.join());
}
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log("Q2. make an array out of a string");
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    console.clear();
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    console.clear();
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(0,2);
    console.log(result);
    console.log(array);
}
    
  // Q5. find a student with the score 90
  {
    console.log(students.find((student) => student.score === 90));
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      console.clear();
      const result = students.map((student) =>student.score);
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.clear();
      
      //조건에 맞는 요소가 있는지 검사
      console.log((students.some((student) => student.score < 50)));
      console.clear();
      // 모든 요소를 비교
      console.log((students.every((student) => student.score < 50)));
      

  }
  
  // Q9. compute students' average score
  {
      console.clear();
      const result = students.reduce((prev,curr) => prev + curr.score, 0);
      console.log(result/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      console.clear();
      const result = students
                    .map((student) => student.score)
                    .filter((score) => score > 50)
                    .join();
      console.log(result);
      

  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      console.clear();
      const result = students
                    .map((student) => student.score)
                    .sort() // desc sort((a ,b) => a - b) or asc sort((a ,b) => b - a)
                    .join();
    console.log(result);
  }
  