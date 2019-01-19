//business logic

var balance;
var newerBalance;
function User(first, last,phone,email,dateOfBirth,initialDeposit,userBalance) {
  this.firstName = first;
  this.lastName = last;
  this.userEmail=email;
  this.dateOfBirth=dateOfBirth;
  this.phonenumber=phone;
  this.userInitial=initialDeposit;
  this.userBalance=userBalance;

}

User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

User.prototype.deposit= function(newDeposit){

  var num1=parseInt(newDeposit);
   var amount1=parseInt(this.userBalance);
  this.userBalance= amount1+ num1;
  return this.userBalance;
}


User.prototype.withdraw= function(newDeposit){
  var num1=newDeposit;
  console.log(typeof num1)
   var amount2=parseInt(this.UserBalance);
   console.log(typeof amount1)
   if(this.userBalance<=0){
     alert("Can't withdraw.Your have minimum balance")
   }
  else if(this.userBalance<=num1){
     alert("Withdrawal amount is greater than your account balance")
   }
   else{
  this.userBalance= this.userBalance- num1;
   }
  return this.userBalance;
}

User.prototype.userNumber=function(){
  var num= Math.random()*10000000000;
  return num.toFixed();
}




//user interface logic
$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#firstName").val();
    console.log(inputtedFirstName);
    var inputtedLastName = $("input#lastName").val();
    var inputtedPhone=$("input#phoneNumber").val();
    var inputtedDate=$("#dob").val();
    var inputtedEmail=$("input#email").val();
    var inputtedInitialDeposit=$("input#initialDeposit").val();
    // var newDeposit=$("input#depositAmount").val();
    
    var newUser=new User(inputtedFirstName, inputtedLastName,inputtedPhone,inputtedEmail,inputtedDate, inputtedInitialDeposit,inputtedInitialDeposit);
    console.log(newUser.userBalance);
   $(".accountBalance h3").text(newUser.userBalance);
   balance=newUser.userBalance;
    
  
  $("a#myAccount").click(function(){
    $("#myAccount1").show()
    $("#new-account").hide()
    $("#deposit").hide()
    $("#withdrawal").hide()
    $("#homeh2").hide();
    $(".accountBalance h3").hide()

    $("#myAccount1 h2").text(newUser.fullname);
    $(".first-name").text(newUser.firstName);
    $(".last-name").text(newUser.lastName);
    $(".phone").text(newUser.phonenumber);
    $(".email").text(newUser.userEmail);
    $(".dob").text(newUser.dateOfBirth);

     $(".number").text(newUser.userNumber);
    $(".balance").text(newUser.userBalance);
    


  });

  $("a#deposit1").click(function(){
    $("#deposit").show();
    $("#home").hide();
    $("#withdrawal").hide()
    $("#myAccount1").hide()
    $("#deposit h3").text(newUser.userBalance)
   $(".accountBalance").hide();
    
  });
   $("a#withdraw").click(function(){
    $("#withdrawal").show()
    $("#home").hide()
   $("#deposit").hide();
   $("#myAccount1").hide()
   $("#withdrawal h3").text(balance)
   $(".accountBalance h3").hide();
 
 })
  
 
  $("form#deposit3").submit(function(event){
    event.preventDefault();
    var newAmount=$("input#depositAmount").val();
    // newAmount=parseInt(newAmount);
   newerBalance= newUser.deposit(newAmount);
    console.log(newUser.deposit(newAmount));
    $("#deposit h3").text(newerBalance);
    newAmount=$("input#depositAmount").val("");

  })

  $("form#withdraw").submit(function(event){
    event.preventDefault();
    var amount= $("input#withdrawalAmount").val();
    console.log(amount)
   newerBalance= newUser.withdraw(amount);
    console.log(newUser.withdraw(amount));
    $("#withdrawal h3").text(newerBalance);
    amount= $("input#withdrawalAmount").val("");
    // balance=newerBalance;


  })
 
});



})

