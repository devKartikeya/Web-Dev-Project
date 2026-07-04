(async () => {
  await require('enquirer').prompt({
    type: 'confirm',
    name: 'go',
    message: 'Want to hear a random joke?'
  });

  console.log(require('one-liner-joke').getRandomJoke().body);
})();