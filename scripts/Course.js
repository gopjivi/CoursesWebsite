

    // Specify the API endpoint for user data
const apiUrl = 'http://localhost:8081/api/courses';
let li="";
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for(let i=0; i<data.length; i++) {
        li += `<tr>
        <td>${data[i].dept}</td>
        <td>${data[i].courseNum} </td>
        <td>${data[i].courseName}</td>
      
      </tr>`;
    }

    document.getElementById("tablebody").innerHTML = li;
    })

  .catch(error => {
    console.error('Error:', error);
  });


