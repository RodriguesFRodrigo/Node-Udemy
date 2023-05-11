/*
    Abstração da entrada de dados
    Inquirer
    Baseado em promisses
*/

import inquirer from "inquirer";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: "question_one",
      message: "Qual o seu time do coração?",
    },
    {
      name: "question_two",
      message: "Qual o jogador que você mais gosta do seu time do coração?",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
