const urlParams = new URLSearchParams(location.search);
	// location.search returns the query string part of the URL
let cid = -1;
if (urlParams.has("cid") === true)
{
   cid = urlParams.get("cid")
   // call a method that fetches this course
   getCourse(cid);
}

function getCourse(cid) {
    fetch('http://localhost:8081/api/courses/' + cid)
     .then(response => response.json())
     .then(course => {
        // this returns a single course!
        const container = 
           document.getElementById('courseContainerDiv');
  
        // display one course property in a <p>
        const deptP = document.createElement('p');
        deptP.textContent = `Dept: ${course.dept}`;
        container.appendChild(deptP);
    
        // repeat for each field you want to display
        const numberp = document.createElement('p');
        numberp.textContent = `Course Number: ${course.courseNum}`;
        container.appendChild(numberp);

        const namep = document.createElement('p');
        namep.textContent = `Course Name: ${course.courseName}`;
        container.appendChild(namep);

        const instructorp = document.createElement('p');
        instructorp.textContent = `Instructor: ${course.instructor}`;
        container.appendChild(instructorp);

        const startDatep = document.createElement('p');
        startDatep.textContent = `StartDate: ${course.startDate}`;
        container.appendChild(startDatep);
  
        const numDaysp = document.createElement('p');
        numDaysp.textContent = `numDays: ${course.numDays}`;
        container.appendChild(numDaysp);
  
      })
  
     .catch(error => {
        // handle errors that occurred during the fetch request
      });
  }
  