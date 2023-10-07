// Function to calculate student grade
function calculateGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 50 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else {
    return "E";
  }
}

// Assign a fixed value to userMarks (e.g., 79)
const userMarks = 80;

// Check if the input is valid
if (!isNaN(userMarks) && userMarks >= 0 && userMarks <= 100) {
  const grade = calculateGrade(userMarks);
  console.log(`Grade: ${grade}`);
} else {
  console.log("Invalid input. Marks should be between 0 and 100.");
}

//Option two

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate student grade
function calculateGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 50 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks <= 49) {
    return "D";
  } else {
    return "E";
  }
}

// Use readline to get user input
rl.question("Enter student marks (0-100): ", (userInput) => {
  const userMarks = parseFloat(userInput);

  // Check if the input is valid
  if (!isNaN(userMarks) && userMarks >= 0 && userMarks <= 100) {
    const grade = calculateGrade(userMarks);
    console.log(`Grade: ${grade}`);
  } else {
    console.log("Invalid input. Marks should be between 0 and 100.");
  }

  rl.close(); // Close the readline interface
});