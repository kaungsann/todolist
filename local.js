const inputTag = document.getElementsByClassName("input")[0];
const buttonTag = document.querySelector(".button");
const resultcontainerTag = document.getElementsByClassName("resultcontainer")[0];
const orderDate = new Date(2022,1,26,3);
orderDate.getTime();
 const neworder = orderDate.toLocaleDateString()
console.log("order" , orderDate)

let deleteButton ;
let addnumber;
const dateDisappear = (date) => {
   const todayDate = new Date();
   todayDate.getHours();
   const newsDate = todayDate.setHours(todayDate.getHours()+24);
   console.log(newsDate)
   if(newsDate > date){
     deleteButton.style.display = "none";
   }
   if(newsDate < date){
       return;
   }
}

let commentId = 1 ;
const commentFunction = (e) => {
    if(inputTag.value === ""){
        return;
    }
  const inputValue =   inputTag.value;
  const commentCOntainer = document.createElement("div");
  commentCOntainer.classList.add("commentCONtianer");

   deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.append("CANCEL");
  deleteButton.addEventListener("click" , () => {
  commentCOntainer.remove();
  })

  const dateCOntainer = document.createElement("div");
  dateCOntainer.classList.add("date")
  const userDate = new Date();
  userDate.getTime();
  
  const newDate = userDate.toLocaleDateString();


   

  const newDiv = document.createElement("div");
  newDiv.classList.add("newdiv");

   addnumber = commentId.toString() + ". "+ inputValue;

  dateCOntainer.append(newDate)
  newDiv.append(`Your order is successfully. if would you like to cancel your items you can do it before arrive in 24hours.
  Your items arrive time is ${neworder}`);
  dateDisappear(orderDate)

  commentCOntainer.append(dateCOntainer ,newDiv,addnumber,deleteButton);
  resultcontainerTag.append(commentCOntainer );

  inputTag.value ="";
   newaddNrm = localStorage.setItem(addnumber , "1" );

  commentId += 1 ;

}

buttonTag.addEventListener("click" , commentFunction);
window.addEventListener("load" , () => {

    if(localStorage.length < 0){
       return;
    }

    newaddNrm = localStorage.length +1;
        const newadd = localStorage.getItem(addnumber);
})