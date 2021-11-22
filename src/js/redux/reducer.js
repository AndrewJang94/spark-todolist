
import todo from '../components/cards/todolist';
import {getStore, updateStore} from './store'

function reducer (action){

switch(action.type){
case "delete":
// grabing the current store
const store = getStore();
const index = action.payload.index;
const newStore = [...store.slice(0,index), ...store.slice(index+1)]
updateStore(newStore)
action.cb()
return "delete todo";
case "edit": 
const storeName = getStore();
const test = action.payload.newTodo
const indexNewName = action.payload.index
const testStore = [...storeName.slice(0, indexNewName), test, ...storeName.slice(indexNewName+1)]
updateStore(testStore)
action.cb()
return "edit todo";
case "add": 
const addStore = getStore();
const addedTodo = action.payload.newTodo
const addNewStore = [...addStore, addedTodo]
updateStore(addNewStore)
action.cb()
return "add new employee";
default: return store
}

}
/*const toggleTodo = (store) => {
    return {
        ...store, 
        id: payload.id,
        category: payload.category,
        title: payload.title,
        isCompleted: payload.isCompleted,
        startDate: payload.startDate,
        startTime: payload.startTime,
        endDate: payload.endDate,
        endTime: payload.endTime,
    }
}*/

export default reducer