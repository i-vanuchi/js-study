'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const writeOptions = options => {
      let output = '';
      for (const option of options) output += `${option}\n`;
      return output;
    };

    let answer = Number(
      prompt(
        `${this.question}\n${writeOptions(this.options)}(Write option number)`
      )
    );

    while (isNaN(answer) || answer < 0 || answer > 3) {
      answer = Number(
        prompt(
          `Invalid answer! Please, make sure to choose between 0 and 3.\n${writeOptions(
            this.options
          )}(Write option number)`
        )
      );
    }

    this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    }
    if (type === 'string') {
      console.log(`Poll resuts are ${this.answers.join(', ')}.`);
    }
  },
};

// poll.registerNewAnswer();

function isNaN(value) {
  return value !== value;
}

document
  .getElementById('answer-btn')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 5 - BONUS

// test data

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: data1 });
poll.displayResults.call({ answers: data2 }, 'string');
poll.displayResults.call({ answers: data1 });
