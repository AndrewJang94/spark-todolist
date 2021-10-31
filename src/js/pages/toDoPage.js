import makeElement from "../utils/makeElement"
import todolist from "../components/cards/todolist"
import { getStore } from "../redux/store"
import todoitem from "../components/cards/todoitem"
import logo from '../icons/logo'
import header from '../components/heading/header'
import tagline from '../components/tag/tagline'




const todoListDirectory = function(){
    const todoList = getStore()
    const pageHeader =document.createElement('header')
    pageHeader.classList.add('page-header-todo')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('PROJECT MANAGER','ui-small-header')))
    pageHeader.appendChild(makeElement(tagline('manage your projects in electrfying way')))
    const page = document.createElement('div')
    const container = todolist() 
    // assume data is not null
    if(todoList !== null){
        // getting refer to the ul
      const ul = container.querySelector('ul')
      // creating the emply cards from data
      const elements = todoList.map(emp => todoitem(emp))
      // looping emp li adding the
      elements.forEach(element=> ul.append(element))
      page.append(container)
      pageHeader.append(page)
    }
    
    return pageHeader
}

export default todoListDirectory


