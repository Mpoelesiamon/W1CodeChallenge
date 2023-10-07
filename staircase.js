//Staircase problem function

function printStairs(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      const steps = '#'.repeat(i);
      console.log(spaces + steps);
    }
  }
  
  printStairs(3);
