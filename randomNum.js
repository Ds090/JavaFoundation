const getRandomNumber = () => {
    // Generate a random number between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
  };
  
  const randomNum = getRandomNumber();
  console.log(`Random Number: ${randomNum}`);
  