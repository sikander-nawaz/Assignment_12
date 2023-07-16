// Write a js program to count total number of duplicate elements in an array.

// SOLUTION:

function countDuplicates(array) {
    let duplicates = {};
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if (duplicates[element]) {
        duplicates[element]++;
      } else {
        duplicates[element] = 1;
      }
    //   console.log(element);
    }

    // console.log(duplicates);
  
    // Count duplicates
    for (let key in duplicates) {
      if (duplicates[key] > 1) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  let arr = [2, 2, 3, 4, 3];
  let totalDuplicates = countDuplicates(arr);
  console.log(totalDuplicates);
  