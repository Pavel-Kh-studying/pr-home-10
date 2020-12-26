//1
function isAdult(userAge) {
  if (typeof userAge !== 'number') {
    return null
  }
  
  if (userAge >= 18) {
    return true;
  }
  return false
}

const result1 = isAdult('99');
console.log(result1);


//2
function checkMultiplicity(numFirst, numSecond) {
  if (
    typeof numFirst !== 'number' ||
    typeof numSecond !== 'number'
    ) {
    return null
  }

  const divisionReminder = numFirst % numSecond;

  if (divisionReminder == 0) {
    return true
  } 
  return false
}

const result2 = checkMultiplicity(8, -4);
console.log(result2);


//3
function isTriangleReal(sideOne, sideTwo, sideThree) {
  if (
    typeof sideOne !== 'number' ||
    typeof sideTwo !== 'number' ||
    typeof sideThree !== 'number'
    ) {
    return null
  }

  if (
    sideOne > 0 & 
    sideTwo > 0 & 
    sideThree > 0 &
    sideOne + sideTwo > sideThree & 
    sideOne + sideThree > sideTwo & 
    sideThree + sideTwo > sideOne 
    ) {
    return true
  } 
  return false
}

const result3 = isTriangleReal(2, 1, 2);
console.log(result3);


//4.1(rhombus)
function rhombusSquare(rhombusDiagonal_1, rhombusDiagonal_2) {
  if (
    rhombusDiagonal_1 > 0 &
    rhombusDiagonal_2 > 0
  ) {
    return((rhombusDiagonal_1 * rhombusDiagonal_2) / 2)
  }
  return null
}

const result4_1 = rhombusSquare(2, 1);
console.log(result4_1);


//4.2(cylinder)
function cylinderSquare(cylinderRadius, cylinderHeight) {
  if (
    cylinderRadius > 0 &
    cylinderHeight > 0
  ) {
    return(2 * Math.PI * cylinderRadius * (cylinderHeight + cylinderRadius))
  }
  return null
}

const result4_2 = cylinderSquare(2, 1);
console.log(result4_2);


//4.3(triangle)
function triangleSquare(sideFirst, sideSecond, sideThird) {
  const triangleCheck = isTriangleReal(sideFirst, sideSecond, sideThird);
  if (!triangleCheck) {
    return null
  }
  const halfPerimeter = (sideFirst + sideSecond + sideThird) / 2;
  return(
    ((halfPerimeter - sideFirst) * 
    (halfPerimeter - sideSecond) * 
    (halfPerimeter - sideThird) *
    halfPerimeter) ** (1 / 2)
    )
}

const result4_3 = triangleSquare(7, 5, 6);
console.log(result4_3);


//4.4(rectangle)
function rectangleSquare(rectangleSideFirst, rectangleSideSecond) {
  if (
    rectangleSideFirst > 0 &
    rectangleSideSecond > 0
  ) {
    return(rectangleSideFirst * rectangleSideSecond)
  }
  return null
}

const result4_4 = rectangleSquare(2, 8);
console.log(result4_4);