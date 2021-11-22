import makeElement from "../../utils/makeElement";
import editIcon from '../../icons/edit';
import deleteIcon from "../../icons/delete";


const todoitem = function ({id,title,category,isCompleted, endDate}) {

  if(isCompleted == true) {
    isCompleted = "Completed";
  }
  else {
    isCompleted = "";
  }
  const template = `       
  <li class="todoitem" data-key="${id}">
     <p class="category">${category}</p>
     <p class="title">${title}</p>
     <p class="isCompleted">${isCompleted}</p>
     <p class="endDate">Due Date: ${endDate}</p>
     <p class="controls" data-key="${id}"><button id=edit data-key="${id}">${editIcon()}</button><button id="delete" data-key="${id}">${deleteIcon()}</button></p>      
  </li>        
  `;
  return makeElement(template)
};

export default todoitem ;
