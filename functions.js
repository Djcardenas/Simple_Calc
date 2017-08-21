function appendKeyValuePressed(value){
  document.getElementById("input-only").value += value;
}

function specialButtons(argument) {
  n = ((document.getElementById("input-only").value).toString()).length;
  switch (argument) {
    case "return":
    document.getElementById("input-only").value = document.getElementById("input-only").value.substring(0, (n-1));
      break;
    case "erase":
    document.getElementById("input-only").value = "";
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

// function get_result(text) {
//   var init = 0;
//   // var end = 0;
//   for (var i = 0; i < text.length; i++) {
//     if ((text[i] =="+" || text[i] =="-" || text[i] =="*" ||
//     text[i] =="/" ||text[i] =="%" || text[i] =="²" || text[i] =="√" ||
//     text[i] =="(" || text[i] ==")" ||) && (text[i+1] =="+" || text[i+1] =="-" || text[i+1] =="*" ||
//     text[i+1] =="/" ||text[i+1] =="%" || text[i+1] =="²" || text[i+1] =="√" ||
//     text[i+1] =="(" || text[i+1] ==")" ||)) {
//       document.getElementById("read-only").value = "Wrong writting";
//     }
//     text[i]
//   }
//   for (var i = 0; i < text.length; i++) {
//     if (text[i] =="+" || text[i] =="-" || text[i] =="*" ||
//     text[i] =="/" ||text[i] =="%" || text[i] =="²" || text[i] =="√" ||
//     text[i] =="(" || text[i] ==")" ||) {
//       var numbers = [numbers, text.substring(init, i-1)]
//     }
//
//   }
// }
