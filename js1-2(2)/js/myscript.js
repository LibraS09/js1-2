var arrayName = [];
var n = 5;
var flag = 0;
for (var i = 0; i < n; i++) {
  arrayName[i] = prompt ('enter name - ');
}
// console.log ('array ',  arrayName);
var userName = prompt ('enter user name - ');
// console.log ('userName ', userName);
for (var i = 0; i < arrayName.length; i++) {
  if (userName == arrayName[i]) {
    flag++;
  }
}
// console.log ('array length ', arrayName.length, '\nflag ', flag);
if (flag) {
  alert (userName + ' you have successfully logged');
} else {
    alert ('error');
}
