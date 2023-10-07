// Function to calculate demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints >= maxDemeritPoints) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
  
  // Use readline to get user input for car speed
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Enter car speed (km/h): ", (userInput) => {
    const userSpeed = parseFloat(userInput);
  
    // Check if the input is valid
    if (!isNaN(userSpeed)) {
      const result = calculateDemeritPoints(userSpeed);
      console.log(result);
    } else {
      console.log("Invalid input. Please enter a valid speed.");
    }
  
    rl.close(); 
  });

// Second Option

  // Function to calculate demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints >= maxDemeritPoints) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
  
  // Assign a fixed value to userSpeed (e.g., 120)
  const userSpeed = 120;
  
  // Check if the input is valid
  if (!isNaN(userSpeed)) {
    const result = calculateDemeritPoints(userSpeed);
    console.log(result);
  } else {
    console.log("Invalid input. Please enter a valid speed.");
  }