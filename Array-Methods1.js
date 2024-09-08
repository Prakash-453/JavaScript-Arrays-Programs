1. Join
Task: You have an array of words: ["Hello", "world", "this", "is", "JavaScript"]. Join these words into a single sentence with spaces between them.
Hint: Use the join() method.

PROGRAM:
let arr = ["Hello", "world", "this", "is", "JavaScript"]
let res = arr.join(' ')
console.log(res)

OUTPUT:
Hello world this is JavaScript

2. Delete
Task: You have an array of numbers: [1, 2, 3, 4, 5]. Delete the number at index 2.
Hint: Use the delete operator.

PROGRAM:
arr=[1, 2, 3, 4, 5]
delete arr[2]
console.log(arr)

OUTPUT:
[ 1, 2, <1 empty item>, 4, 5 ]




3. Concat
Task: You have two arrays, arr1 = [1, 2, 3] and arr2 = [4, 5, 6]. Merge these two arrays into a single array.
Hint: Use the concat() method.

PROGRAM:
arr1=[1,2,3]
arr2=[4,5,6]
res=arr1.concat(arr2)
console.log(res)

OUTPUT:
[ 1, 2, 3, 4, 5, 6 ]

4. Flat
Task: You have a nested array: [[1, 2], [3, 4], [5, [6, 7]]]. Flatten this array into a single-level array.
Hint: Use the flat() method.

PROGRAM:
arr=[[1, 2], [3, 4], [5, [6, 7]]]
res=arr.flat(2)
console.log(res)

OUTPUT:
[ 1, 2, 3, 4, 5, 6 ,7]




5. Splice
Task: You have an array of fruits: ["apple", "banana", "orange", "grape"]. Remove "banana" and add "kiwi" and "mango" in its place.
Hint: Use the splice() method.

PROGRAM:
fruits=["apple", "banana", "orange", "grape"]
res=fruits.splice(1,1,"kiwi","mango")
console.log(fruits)

OUTPUT:
[ 'apple', 'kiwi', 'mango', 'orange', 'grape' ]

6. ToSpliced
Task: You have an array of colors: ["red", "blue", "green"]. Create a new array that removes "blue" and adds "yellow" without modifying the original array.
Hint: Use the toSpliced() method.

PROGRAM:
colours=["red", "blue", "green"]
res=colours.toSpliced(1,1,'yellow')
console.log(res)

OUTPUT:
[ 'red', 'yellow', 'green' ]



7. Slice
Task: You have an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8]. Extract the numbers from index 2 to index 5 (inclusive of index 2 but not 5).
Hint: Use the slice() method.

PROGRAM:
arr=[1,2,3,4,5,6,7,8]
res=arr.slice(2,5)
console.log(res)

OUTPUT:
[ 3, 4, 5 ]


