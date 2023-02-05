var ss = "i am reshma";
var str = ss.split(" ");
var s = "";

for (var i = str.length - 1; i >= 0; i--) {
  s += str[i] + " ";
}
console.log(s);
