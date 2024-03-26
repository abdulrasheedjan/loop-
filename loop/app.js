
   //print from 1 to 10
for (var i = 1; i <= 10; i++) {
    console.log( i)
}
  //write a loop to print even number from 1 to 20
  for (var i = 1; i <= 20; i++) {
       if (i % 2 == 0) 
         console.log(i);
       }

     //write a loop to print even number from 1 to 15 
       for (var i = 1; i <= 15; i++) {
           if (i % 2 == 1) 
             console.log(i);
           }

   // write a loop toprint square number from 1 to 10
 for (var i = 1; i <= 10; i++) {
   console.log(i * i);
}

var num = 0;
//  1 3 6 10 15 21 28 36 45
 for (var i = 0; i < 10; i++) {
  console.log("num=>", num, "i=>", i);
   num = num + i;
  console.log(num);
 }

  
// write a loop toprint table of  from 7 to 10
for (var i = 1; i <= 10; i++) {
  console.log(i * 7);
}
for (var i = 1; i <= 10; i++) {
     console.log("Hello " + i);
   }
  
  
// print a loop to find and print the largest elementin array {3,7,9,5}

var nums = [20, 3, 12, 34, 21, 25, 6, 2];
var largestNum = 0;
for (var i = 0; i < nums.length; i++) {
  console.log(
    "index->",
    i,
    "arr value=>",
    nums[i],
    "largest number=>",
    largestNum,
    "condition=>",
    nums[i] > largestNum
  );
  if (nums[i] > largestNum) {
    largestNum = nums[i];
  }
}
console.log("Largest number is-> ", largestNum);





