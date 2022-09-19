const inputTag = document.getElementsByClassName("input")[0];
const buttonTag = document.querySelector(".button");
const resultcontainerTag = document.getElementsByClassName("resultcontainer")[0];
const orderDate = new Date(2022,9,30,3);

let localget;
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
let inputValue;
let commentId = 1 ;
const commentFunction = () => {
  orderDate.getTime();
 const neworder = orderDate.toLocaleDateString()
console.log("order" , orderDate.getTime())
  
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
  const todayDate = new Date();
  const currentTime = todayDate.toLocaleTimeString();


   

  const newDiv = document.createElement("div");
  newDiv.classList.add("newdiv");

   addnumber = commentId.toString() + ". "+ inputValue;

  dateCOntainer.append(newDate , currentTime)
  newDiv.append(`Your order is successfully. if would you like to cancel your items you can do it before arrive in 24hours.
  Your items arrive time is ${neworder}`);
  dateDisappear(orderDate)

  commentCOntainer.append(dateCOntainer ,newDiv,addnumber,deleteButton);
  resultcontainerTag.append(commentCOntainer );

  inputTag.value ="";
  

  commentId += 1 ;

}

buttonTag.addEventListener("click" , () => {
  if(inputTag.value === ""){
    return;
}
  newaddNrm = localStorage.setItem(commentId , inputValue );
  commentFunction();

});



window.addEventListener("load" , () => {


   for(let i = 1; i <= localStorage.length; i++){
    localget =  localStorage.getItem(i);
    inputValue = localget;
    storeItems(localget);
   }
  
})

const storeItems = (x) => {
  inputValue = x ;
  orderDate.getTime();
 const neworder = orderDate.toLocaleDateString()
console.log("order" , orderDate.getTime())

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


const todayDate = new Date();
const currentTime = todayDate.toLocaleTimeString();

const newDate = userDate.toLocaleDateString();


 

const newDiv = document.createElement("div");
newDiv.classList.add("newdiv");

 addnumber = commentId.toString() + ". "+ inputValue;

dateCOntainer.append(newDate ,currentTime)
newDiv.append(`Your order is successfully. if would you like to cancel you can do it but before arrive in 24hours.
Your items arrive time is ${neworder}`);
dateDisappear(orderDate)

commentCOntainer.append(dateCOntainer ,newDiv,addnumber,deleteButton);
resultcontainerTag.append(commentCOntainer );



commentId += 1 ;

}
