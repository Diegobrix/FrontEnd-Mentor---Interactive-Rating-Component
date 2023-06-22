const formElem = document.getElementById("form");
const resultDisplay = document.getElementById("rating-display");

formElem.addEventListener("submit", handleSubmit);

function handleSubmit(event)
{
   event.preventDefault();
   const selectedVal = document.querySelector("input[name='rating']:checked");
   
   if(selectedVal == null)
   {
      return window.alert("It is necessary to select at least 1 value");
   }
   
   changeStatus(formElem.getAttribute('data-sent'));
   updateValues(selectedVal);
} 

function changeStatus(current)
{
   return current == "false"?formElem.setAttribute("data-sent", "true"):formElem.setAttribute("data-sent", "false");
}

function updateValues(valSelected)
{
   return resultDisplay.innerText = valSelected.value;
}