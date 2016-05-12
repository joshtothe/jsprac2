//First new car
function car (year, make, paint){//begin first function
  var modelYear = year;//local var for modelyear
  var make = make;//local var for make
  var currentSpeed = 0; //local var for speed
  var maxSpeed = 85; //local var for maxspeed
  return {//begin the return
    color: paint,// public color variable
    getCarInfo: function() {//begin the carinfo function
      return modelYear + " " + make + " " + this.color;//returns newcar values
    },//end carinfo function
    speedUp: function() {//begin accelrate function
      while(currentSpeed < 80) { //begin while loop for speed
        currentSpeed = currentSpeed + 10;//grab local var and increase by number
      }//end while loop for speed
      while(currentSpeed < maxSpeed) {//star while loop if current speed is less than max speed
        currentSpeed = currentSpeed + 1;//increases speed by 1
      }//end while loop
      return currentSpeed; //return the new value
    },//end accelrate function
    brake: function() {//begin brake function
      while (currentSpeed > 7) {//begin while loop for decrease
        currentSpeed = currentSpeed - 7;//reduce speed by 7
      }//end while loop
      while (currentSpeed <= 7 && currentSpeed > 0) {//begin while loop if speed is less than 7
        currentSpeed = currentSpeed - 1;//decrease speed by 1
      }//end while loop
      return currentSpeed;//return speed
    },//end brake function
    rainBrake: function() {//begin rainbrake
      while (currentSpeed > 0) {
        var randomSpeed = Math.floor(Math.random() * (40 - 1)) + 1;
          currentSpeed = currentSpeed - randomSpeed
        }
        return currentSpeed;
      }//end rainbrake function
  }//end the return obj
}//end the first function

//list of global variables
var rainCar = car().rainBrake();
console.log(rainCar);
var speedCar = car().speedUp();
console.log(speedCar);
var slowCar = car().brake();
console.log(slowCar);
var newCar = car().getCarInfo("green");
console.log(newCar);

//Password Checker

//Length Checker
function checkUserIdLength(userId) {
  if (userId.length >= 6) {
    return { valid: true };
  }
  else {
    return { valid: false, reason: "User ID must be six characters"};
  }
}
//Check password length
function checkPasswordLength(pw) {
  if (pw.length >= 6) {
    return { valid: true };
  }
  else {
    return { valid: false, reason: "Password must be six characters"};
  }
}

//Verify pass and userid are unique
function checkUserIdPassword(userId, pw) {
  if (userId != pw) {
    return { valid: true };
  }
  else {
    return { valid: false, reason: "User ID and Password cannot be the same"};
  }
}

//User Id cannot contain !#$
function containsSymbol(userId) {
  if (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")) {
    return { valid: true };
  }
  else {
    return { valid: false, reason: "Those characters are not valid for the user ID"};
  }
}

//Password must contain !#$
function pwSymbol(pw) {
  if (pw.includes("!") || pw.includes("#") || pw.includes("$")) {
    return { valid: true };
  }
  else {
    return { valid: false, reason: "There must be a special character in the password"};
  }
}

//Password != Password
function pwSame(pw) {
  if (pw != "password") {
    return { valid: true };
  }
  else {
    return { valid: false, reason:"Password cannot be Password"}
  }
}

function checker(userId, pw) {
  // Check user ID length
  var userIdLength = checkUserIdLength(userId);
  if (userIdLength.valid === false){
    alert(userIdLength.reason);
  }
  // Check password length
  var passwordLength = checkPasswordLength(pw);
  if (passwordLength.valid === false){
    alert(passwordLength.reason);
  }
  // Check userId != Pw
  var userIdPassword = checkUserIdPassword(userId, pw);
  if (userIdPassword.valid === false){
    alert(userIdPassword.reason);
  }
  // User Id cannot contain !#$
  var cSymbol = containsSymbol(userId);
  if (cSymbol.valid === false) {
    alert(cSymbol.reason);
  }
  // Password must contain !#$
  var passSymbol = pwSymbol(pw);
  if (passSymbol.valid === false) {
    alert(passSymbol.reason);
  }
  // Pw != Password
  var passwordSame = pwSame(pw);
  if (passwordSame.valid === false) {
    alert(passwordSame.reason);
  }
  else {
    alert("good")
  }
}
