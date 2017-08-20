function inputs(argument){
  // var output = document.getElementById("input-only");
  switch (argument) {
    case 0:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("0");
      break;
    case 1:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("1");
      break;
    case 2:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("2");
      break;
    case 3:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("3");
      break;
    case 4:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("4");
      break;
    case 5:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("5");
      break;
    case 6:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("6");
      break;
    case 7:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("7");
      break;
    case 8:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("8");
      break;
    case 9:
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("9");
      break;
    default:
    case ".":
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat(".");
      break;
    case "%":
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("%");
      break;
  };
  // console.log(((document.getElementById("input-only").value).toString()).length);

}

function operands(argument) {
  n = ((document.getElementById("input-only").value).toString()).length;
  switch (argument) {
    case "/":
    document.getElementById("input-only").value = document.getElementById("input-only").value.concat("/");
      break;
    case "return":
    document.getElementById("input-only").value = document.getElementById("input-only").value.substring(0, (n-1));
      break;
    case "erase":
    document.getElementById("input-only").value = "";
      break;
    case "*":
    document.getElementById("input-only").value = document.getElementById("input-only").value.concat("*");
      break;
    case "(":
    document.getElementById("input-only").value = document.getElementById("input-only").value.concat("(");
      break;
    case ")":
    document.getElementById("input-only").value = document.getElementById("input-only").value.concat(")");
      break;
    case "-":
    get_result(getElementById("input-only").value);
      break;
    case "2":
    document.getElementById("input-only").value = document.getElementById("input-only").value.concat("²");
      break;
    case "root":
    document.getElementById("input-only").value = document.getElementById("input-only").value.concat("√");
      break;
    case "+":
    document.getElementById("input-only").value = document.getElementById("input-only").value.concat("+");
      break;
    case "=":
    get_result(document.getElementById("input-only").value);
      break;
    case "CE":
    document.getElementById("read-only").value = "";
      break;
    // console.log(document.getElementById("input-only").value);
  }
}
function get_result(text) {
  var init = 0;
  // var end = 0;
  for (var i = 0; i < text.length; i++) {
    if ((text[i] =="+" || text[i] =="-" || text[i] =="*" ||
    text[i] =="/" ||text[i] =="%" || text[i] =="²" || text[i] =="√" ||
    text[i] =="(" || text[i] ==")" ||) && (text[i+1] =="+" || text[i+1] =="-" || text[i+1] =="*" ||
    text[i+1] =="/" ||text[i+1] =="%" || text[i+1] =="²" || text[i+1] =="√" ||
    text[i+1] =="(" || text[i+1] ==")" ||)) {
      document.getElementById("read-only").value = "Wrong writting";
    }
    text[i]
  }
  for (var i = 0; i < text.length; i++) {
    if (text[i] =="+" || text[i] =="-" || text[i] =="*" ||
    text[i] =="/" ||text[i] =="%" || text[i] =="²" || text[i] =="√" ||
    text[i] =="(" || text[i] ==")" ||) {
      var numbers = [numbers, text.substring(init, i-1)]
    }

  }
}
