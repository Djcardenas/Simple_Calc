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
    case ",":
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat(",");
      break;
    case "%":
      document.getElementById("input-only").value = document.getElementById("input-only").value.concat("%");
      break;

  };
}
