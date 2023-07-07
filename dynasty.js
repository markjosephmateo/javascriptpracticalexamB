console.log ('connected')

function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestDuration = 0;
    let longestDynastyName = '';
  
    for (const dynasty of dynastyReign) {
      const startYear = convertYear(dynasty.start);
      const endYear = convertYear(dynasty.end);
  
      if (startYear === "Invalid" || endYear === "Invalid") {
        continue;
      }
  
      const duration = endYear - startYear;
  
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynastyName = dynasty.name;
      }
    }
  
    return longestDynastyName;
  }
  
  function convertYear(year) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = 0;
    let previousValue = 0;
  
    for (const numeral in romanNumerals) {
      while (year.startsWith(numeral)) {
        result += romanNumerals[numeral];
        year = year.slice(numeral.length);
  
        if (previousValue < romanNumerals[numeral]) {
          result -= 2 * previousValue;
        }
  
        previousValue = romanNumerals[numeral];
      }
    }
  
    if (year.length > 0) {
      return "Invalid";
    }
  
    return result;
  }
  
  // Example usage
  const dynastyReign = [
    { name: 'Dynasty A', start: 'MCMXC', end: 'MMXVIII' },
    { name: 'Dynasty B', start: 'MCMXCVII', end: 'MMXIV' },
    { name: 'Dynasty C', start: 'MCMXIV', end: 'Invalid' },
    { name: 'Dynasty D', start: 'MCMLXXXIX', end: 'MMXX' }
  ];
  
  const longestDynastyElement = document.getElementById('longestDynasty');
  longestDynastyElement.textContent = longestDynasty(dynastyReign);
  