function myFunc() {
  let x = 10;
  if (true) {
    let x = 20; // This x is different from the one declared outside
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 10
}