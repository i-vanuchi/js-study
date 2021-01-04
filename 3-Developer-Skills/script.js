'use strict';

// ---------- Lecture: Learning how to code ----------

/*  

    1) Have a clear goal at the beginning of the journey

    - Set a SPECIFIC, MEASURABLE, REALISTIC and TIME-BASED goal.
    Answer: Be a FrontEnd developer until 2021 June.
    - Know exactly WHY you are learning to code: Switching careers? Finding a better job?
    Answer: Both. Switching area inside the IT universe and find a better job alway from IT support.
    - Imagine a big project you want to be able to build.
    Answer: An entire e-commerce or bank-like app.
    - Research technologies you need and then learn them.
    Answer: HTML, CSS, JS, React, React Native, Node.js.

    2) DO NOT copy the code without caring how it works.

    - Understand the code that you are studying and typing.
    - Always type the code. Don't copy-paste.
    
    3) Reinforce what you are learning by doing small challenges or taking notes.

    - After you learn a new feature or concept, use it immediately.
    - Take notes.
    - Challenge yourself and practice with small coding exercises and challenges (e.g. codewars.com).
    - Dont be in a hurry to complete the course fast!

    4) Practice coding and come up with your own project ideas.

    - Practicing on your own is the most important thing to do.
    - This is NOT optional! Without practice outside of courses, you won't go anywhere!
    - Come up with your own project ideas or copy popular sites or applications, or just parts of them in the beginning.
    - Don't be stuck in "tutorial hell".

    5) Don't get frustrated quickly when your code is not perfectly clean or efficient.

    - Don't get stuck trying to write the perfect code!
    - Just write tons of code, no matter the quality!
    - Clean and efficient code will come with time.
    - You can always refactor code later.

    6) Dont lose motivation thinking that you can never know everything.

    - Embrace the fact that you will NEVER know everything.
    - Just focus on what you need to achieve your goal!

    7) Dont learn in isolation.

    - Explain new concepts to other people. If you can explain it, you truly understand it!
    - Share your goals to make yourself accountable.

*/

// Lecture: How to think like a Developer: Become a Problem Solver!

/*
    1) Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.

    2) Divide and conquer: Break a big problem into smaller sub-problems.

    3) Don't be afraid to do as much research as you have to.

    4) For bigger problems, write pseudo-code before writing the actual code.

*/

// Lecture: Using Google, StackOverflow and MDN

const temps1 = [3, -2, -6, -1, 'error', 9, 13, 16, 15, 14, 9, 5];
const temps2 = [1, -2, -5, -9, -12, -22, 0, 1, 15, 9, 10, 11];


// find the max temperature
// find the min temperature
// check how to deal with the errors
// calculate the amplitude temperature

const calcTempAmplitude = function(t1, t2) {
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    }

    console.log(`The maximum temperature is ${max}.`);
    console.log(`The minimum temperature is ${min}.`);

    return max - min;
}

console.log(`The temperature amplitude is ${calcTempAmplitude(temps1, temps2)}.`);

