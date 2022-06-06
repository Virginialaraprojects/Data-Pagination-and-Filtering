/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//@param{string} list- the student data
//@param{number} page- the page number
const studentsPerPage= 9;
function showPage(list, page){
   // variable to store startIndex and endIndex of list items for given page.
   const startIndex =(page * studentsPerPage)- studentsPerPage;
   const endIndex =page *studentsPerPage;
   //select ul element with the classname 'student-list' and store in variable.
   const studentList = document.querySelector('.student-list');
   //set studentList varaible html content to an empty string 
   studentList.innerHTML='';
   // loop over list parameter
   for(let i = 0; i < list.length; i++){
      //conditional statement checks if the current index is within the condition
      if(i>= startIndex && i< endIndex){
         //using a template literal to attach all the elements on to the page
            const html =`<li class="student-item cf">
            <div class="student-details">
            <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
            <h3> ${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
           </div>
           </li>`;
   //using .insertAdjacentHtml method to attach the html to ul 
   studentList.insertAdjacentHTML('beforeend',html);
         
      }  

   }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
//@param{string} list- the student data
function addPagination(list){
//created a varaible to store the number pagination button needed.
   const pagButton=Math.floor(list.length /studentsPerPage);
 //select ul element with the classname 'link-list' and store in variable.
   const linkList=document.querySelector('.link-list');
    //set linkList varaible html content to an empty string 
   linkList.innerHTML='';
   //for loop to create the number of pages needed
   for (let i =0; i< pagButton; i++){
      //create the li element 
         const li=document.createElement('li');
      //create a button element
         const button= document.createElement('button');
      // use.appendChild method to append 'button' to 'li'
         li.appendChild(button);
         //using a template literal to display the button as you  iterate over the number of pages
         const html= `<li>
         <button type="button">${i +1}</button>
         </li>`;
   //using .insertAdjacentHtml method to attach the html to ul 
   linkList.insertAdjacentHTML('beforeend',html);
   li.firstElementChild.className='active';
   }
   //use .addEventListner to fire only when the user clicks 
   linkList.addEventListener('click',(e)=>{
         if(e.target.tagName ==='BUTTON'){
           const activeClass =document.getElementsByClassName('active');
           for(let i=0; i< activeClass.length; i++) 
         e.target.className='active';
         showPage(list, e.target.textContent);
         }
   })
   
}



// Call functions
showPage(data, 1);//will start on page one and show the students information data list 
addPagination(data);//uses data list to caculate the pagination buttons