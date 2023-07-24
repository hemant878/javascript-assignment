function countEvenOddZero(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
  
      if (num === 0) {
        zeroCount++;
      } else if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return {
      even: evenCount,
      odd: oddCount,
      zero: zeroCount,
    }
  }
  
  const numbers = [1, 2, 3, 4, 0, 6, 7, 8, 0, 9];
  const result = countEvenOddZero(numbers);
  console.log('Even count:', result.even);
  console.log('Odd count:', result.odd);
  console.log('Zero count:', result.zero);