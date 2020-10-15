// from data.js
let tableData = data;

let tbody = d3.select("tbody");
console.log(tableData);

function buildTable(data){

    tbody.html("");

    data.forEach(function(ufoSightings) {
        console.log(ufoSightings);
        let row = tbody.append('tr');
        Object.entries(ufoSightings).forEach(([key, value]) => {
            console.log(key, value);
            let cell = row.append('td');
            cell.text(value);
        });
    });
}

function filterTable() {

    const date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
  }
  
  d3.selectAll("#filter-btn").on("click", filterTable);
  
  buildTable(tableData);

  