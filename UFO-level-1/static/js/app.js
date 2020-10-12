// from data.js
let tableData = data;

let tbody = d3.select("tbody");
console.log(tableData);

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    let row = tbody.append('tr');
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);
        let cell = row.append('td');
        cell.text(value);
    });
});

let button = d3.select("#filter-btn");