/**
 * Question: Write a program that generates a multiplication table for a given number using a for loop.
 * Solved By: Md Shakhawat Hossen
 * Date: 22-03-2023
 */

/**
 * 
 * Create multiplicationTable function to Write a program that generates a multiplication table for a given number using a for loop.
 * 
 * @param {Number} num 
 */
function multiplicationTable(num) {
    // Use for loop to iterates 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Calculate the given number and the iteration number
        const results = `${num} * ${i} = ${num * i}`;
        // Show results in console
        console.log(results);
    }
}

// Invoke the multiplication function
multiplicationTable(5);