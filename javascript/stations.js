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
function tableadd(event) {
  event.preventDefault()
  let table = document.getElementById('myTable');
  let form = document.forms['incidentForm'];
  let newRow = document.createElement('tr');
  let incidenttime = document.createElement('td');
  incidenttime.innerText = form.incidenttime.value;
  newRow.appendChild(incidenttime);
  
  let typeOfIncident = document.createElement('td');
  typeOfIncident.innerText = form['type of incidents'].value;
  newRow.appendChild(typeOfIncident);

  let address = document.createElement('td');
  address.innerText = form.address.value;
  newRow.appendChild(address);

  let rescueTeam = document.createElement('td');
  rescueTeam.innerText = form['Rescue Team'].value;
  newRow.appendChild(rescueTeam);

  let typeOfVehicle = document.createElement('td');
  typeOfVehicle.innerText = form['Type of Vehicle'].value;
  newRow.appendChild(typeOfVehicle);

  let status = document.createElement('td');
  status.innerText = form['Status of the incident'].value;
  newRow.appendChild(status);

  table.appendChild(newRow);
}

  document.getElementById('submitButton').addEventListener('click', tableadd);
