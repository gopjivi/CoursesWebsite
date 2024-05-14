"use Strict"

window.onload=init;

function init()
{
       // Find the addBtn
       const form = document.querySelector('form');
       form.addEventListener('submit', onsubmitbtnClicked);
      

   
}



function onsubmitbtnClicked(event)
{

    // Create JSON object to include in the request body
let bodyData = {
    id: "",
    dept: document.getElementById("deptvalue").value,
    courseNum: document.getElementById("numbervalue").value,
    courseName: document.getElementById("namevalue").value,
    instructor: document.getElementById("instructorvalue").value,
    startDate: document.getElementById("startDatevalue").value,
    numDays: document.getElementById("numdaysvalue").value,
}

// Send the request
fetch("http://localhost:8081/api/courses", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {"Content-type": 
              "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
    // If the POST finishes successfully, display a message
    // with the newly assigned id
    let message = "Course " + json.id + " added";
    let confirmationMessage = 
       document.getElementById("messageid");
    confirmationMessage.innerHTML = message;
    
    window.location.href="index.html";
  })

  .catch(err => {
    // If the POST returns an error, display a message
    let confirmationMessage = 
       document.getElementById("messageid");
    confirmationMessage.innerHTML = "Unexpected error";
  });
  event.preventDefault();
}