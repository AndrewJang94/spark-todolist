import makeElement from "../../utils/makeElement";
import editIcon from '../../icons/edit';
import deleteIcon from "../../icons/delete";


const todoitem = function ({id,title,category,isCompleted}) {

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
     <p class="controls"><button>${editIcon()}</button><button>${deleteIcon()}</button></p>      
  </li>        
  `;
  return makeElement(template)
};

export default todoitem ;
