// Function to calculate Payee (Tax) based on income
function calculatePayee(income) {
    const payeRates = [
      { minIncome: 0, maxIncome: 288000, rate: 10.0 },
      { minIncome: 288001, maxIncome: 388000, rate: 25.0 },
      { minIncome: 388001, maxIncome: 6000000, rate: 30.0 },
      { minIncome: 6000001, maxIncome: 9600000, rate: 32.5 },
      { minIncome: 9600001, maxIncome: Infinity, rate: 35.0 },
    ];
  
    let payee = 0;
    let remainingIncome = income;
  
    for (const slab of payeRates) {
      if (remainingIncome <= 0) {
        break;
      }
  
      const slabIncome = Math.min(slab.maxIncome, remainingIncome) - slab.minIncome;
      payee += (slabIncome * slab.rate) / 100;
      remainingIncome -= slabIncome;
    }
  
    return payee;
  }
  
  // Function to calculate NHIF Deductions
  function calculateNHIF(income) {
    const nhifRates = [
      { minIncome: 0, maxIncome: 5999, deduction: 150 },
      { minIncome: 6000, maxIncome: 7999, deduction: 300 },
      { minIncome: 8000, maxIncome: 11999, deduction: 400 },
      { minIncome: 12000, maxIncome: 14999, deduction: 500 },
      { minIncome: 15000, maxIncome: 19999, deduction: 600 },
      { minIncome: 20000, maxIncome: 24999, deduction: 750 },
      { minIncome: 25000, maxIncome: 29999, deduction: 850 },
      { minIncome: 30000, maxIncome: 34999, deduction: 900 },
      { minIncome: 35000, maxIncome: 39999, deduction: 950 },
      { minIncome: 40000, maxIncome: 44999, deduction: 1000 },
      { minIncome: 45000, maxIncome: 49999, deduction: 1100 },
      { minIncome: 50000, maxIncome: 59999, deduction: 1200 },
      { minIncome: 60000, maxIncome: 69999, deduction: 1300 },
      { minIncome: 70000, maxIncome: 79999, deduction: 1400 },
      { minIncome: 80000, maxIncome: 89999, deduction: 1500 },
      { minIncome: 90000, maxIncome: Infinity, deduction: 1700 },
    ];
  
    for (const rate of nhifRates) {
      if (income >= rate.minIncome && income <= rate.maxIncome) {
        return rate.deduction;
      }
    }
  
    return 0;
  }
  
  // Function to calculate NSSF Deductions
  function calculateNSSF(income) {
    // Assuming fixed NSSF rate for Tier I
    const nssfRate = 0.06; // 6% for Tier I
    const nssfMaxIncome = 6000; // Monthly limit for Tier I
    const nssfDeduction = Math.min(income, nssfMaxIncome) * nssfRate;
  
    return nssfDeduction;
  }
  
  // Function to calculate Housing Levy
  function calculateHousingLevy(income) {
    const housingLevyRate = 0.015; // 1.5% for Affordable Housing Levy
    const housingLevyDeduction = income * housingLevyRate;
  
    return housingLevyDeduction;
  }
  
  // Function to calculate Net Salary
  function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate Deductions
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);
    const housingLevy = calculateHousingLevy(grossSalary);
  
    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhif - nssf - housingLevy;
  
    return {
      grossSalary,
      payee,
      nhif,
      nssf,
      housingLevy,
      netSalary,
    };
  }
  
  // Example usage:
  const basicSalary = 60000; // Replace with the actual basic salary
  const benefits = 10000;   // Replace with the actual benefits
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Payee (Tax):", salaryDetails.payee);
  console.log("NHIF Deductions:", salaryDetails.nhif);
  console.log("NSSF Deductions:", salaryDetails.nssf);
  console.log("Housing Levy:", salaryDetails.housingLevy);
  console.log("Net Salary:", salaryDetails.netSalary);