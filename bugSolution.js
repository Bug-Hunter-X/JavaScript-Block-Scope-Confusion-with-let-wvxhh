// To avoid confusion, use descriptive variable names and be mindful of block scope.
function myFunc() {
  let outerX = 10;
  if (true) {
    let innerX = 20;
    console.log(innerX); // Outputs 20
  }
  console.log(outerX); // Outputs 10
}

// Alternatively, if you intend to modify the outer variable from within the block,
// don't redeclare it using let.  Only declare it once outside the block.
function myFunc2() {
  let x = 10;
  if (true) {
    x = 20; 
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 20
} 