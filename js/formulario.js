// C R U D - Create Read Update Delete

// Global
var row = null;
var msg = document.getElementById("msg");

// CREATE
// Submit function
function Enviar() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = `<h3 style = "color: red;">Insertar datos !</h3>`;
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = `<h3 style = "color: yellow;">Ensertar datos !</h3>`;
    } else {
      update();
      msg.innerHTML = `<h3 style = "color: orange;">Insertar datos !</h3>`;
    }
  }

  document.getElementById("form").reset();
}

// READ
// Retrieve data
function retrieveData() {
  var email = document.getElementById("email").value;
  var numero = document.getElementById("numero").value;
  var haztupedido = document.getElementById("haztupedido").value;

  var arr = [email, numero, haztupedido];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

//Data in Local Storage
function readingDataFromLocalStorage(dataEntered) {
  // Storing data in local storage
  var n = localStorage.setItem("email", dataEntered[0]);
  var j = localStorage.setItem("numero", dataEntered[1]);
  var e = localStorage.setItem("haztupedido", dataEntered[2]);

  // Show data in table (Getting item from localStorage)
  var n1 = localStorage.getItem("email", n);
  var j1 = localStorage.getItem("numero", j);
  var e1 = localStorage.getItem("haztupedido", e);

  var arr = [n1, j1, e1];
  return arr;
}

// INSERT
function insert(readData) {
  var table = document.getElementById("table");
  var i = table.rows.length;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  // row.insertCell(4).innerHTML = "JJJ"
  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
  cell3.innerHTML = readData[2];
  cell4.innerHTML = `<button onclick="edit(this)"><a href="script.js:void(0)" style="text-decoration: none;">Enviar</a></button> &nbsp
<button onclick="remove(this)"><a href="script.js:void(0)" style="text-decoration: none;">Delete</a></button>`;
}

//EDIT
function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("email").value = row.cells[0].innerHTML;
  document.getElementById("numero").value = row.cells[1].innerHTML;
  document.getElementById("haztupedido").value = row.cells[2].innerHTML;
}

// UPDATE
function update(td) {
  row = td.parentElement.parentElement;
  row.cells[0].innerHTML = document.getElementById("email").value;
  row.cells[1].innerHTML = document.getElementById("numero").value;
  row.cells[2].innerHTML = document.getElementById("haztupedido").value;
  row = null;
}

// DELETE
function remove(td) {
  var ans = confirm("Estas seguro de eliminar?");
  if (ans == true) {
    var row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    msg.innerHTML = `<h3 style = "color: red;">Data Deleted !</h3>`;
  }
}