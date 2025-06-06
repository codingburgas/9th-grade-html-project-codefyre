function myFunction() {
  var input, filter, table, tr, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) { 
    let tds = tr[i].getElementsByTagName("td");
    let rowMatches = false;
    for (let j = 0; j < tds.length; j++) {
      let cellText = tds[j].textContent || tds[j].innerText;
      if (cellText.toUpperCase().indexOf(filter) > -1) {
        rowMatches = true;
        break;
      }
    }

    if (rowMatches) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}