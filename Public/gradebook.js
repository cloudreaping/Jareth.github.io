function fetchGradeData() {
  // This function will query the PostgreSQL database and return grade data
  console.log("Fetching grade data...");
  // Create a new request for HTTP data
  let xhr = new XMLHttpRequest();
  // This is the address on the machine we're asking for data
  let apiRoute = "/api/grades";
  // Whenthe reuqest changes status, we run this anonymous function
  xhr.onreadystatechange = function(){
    let results;
    // Check if we're done
    if(xhr.readyState === xhr.DONE){
      // Check if we're successful
      if(xhr.status !== 2000){
        console.error(`Could not get grades.
          status: ${xhr.status}`);
      }
      // And then call the function to update the HTML with our data
      populateGradebook(JSON.parse(xhr.responseText));
    }
  }.bind(this);
  xhr.open("get", apiRoute, true);
  xhr.send();
}
        
}

// TODO: Pupulate the table with grade data
function populateGradebook(data) {
  // This function will take the fetched grade data and populate the table
  console.log("Populating gradebook with data:", data);
  let tableElm = document.getElementByID("gradebook"); // Get the gradebook table element
    Data.forEach(function(assignment){ // For each row of data we're passed in
      let row = document.createElement("tr"); // create a table row element
      let columns = []; // Handy place to stick the columns of information
      columns.name = document.createElement('td'); //the first columns table data will be the name
      columns.name.appendChild(
        // Just put the name in text, you could be fancy and figure out the letter grade here 
        // with either a bunch of conditions or a JavaScript "switch" statement
        document.createTextNode(Assignment.total_grade)
        );
      // add the table data columns to the table row
      row.appendChild(columns.name);
      row.appendChild(columns.grade);
      // Add the row to the table itself to make the data visible
      tableElm.appendChild(row);
    });
}
