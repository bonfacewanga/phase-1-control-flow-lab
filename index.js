function scuberGreetingForFeet(feet){
  //write your code here
  let message ;
  if (feet<=400) {
    message='This one is on me!'
    return message;
  }else if(feet >2000 && feet<2500) {
  message= 'I will gladly take your thirty bucks.'
  }else if (feet>2500){
message ='No can do.'
}
return message;
}

function ternaryCheckCity(City){
  // Write your code here!
if(City=== 'NYC'){
  return"Ok, sounds good."
}else {
  return "No go."
}
}
function switchOnCharmFromTip(tip){
  switch (tip){
case 'generous':
return 'Thank you so much.'
break;
case 'not as generous':
return'Thank you.'
break;
default:
  return 'Bye.'
  }
}