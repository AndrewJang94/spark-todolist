import home from "../pages/home";
import notFound from "../pages/pageNotFound";
import deletePage from "../pages/delete/delete";
import todo from "../pages/Todo"
import editPage from "../pages/edit";
import addPage from "../pages/add"

const routes = {
    "/": home,
     "/todo": todo,
     "/delete":deletePage,
     "/edit":editPage,
     "/add":addPage
   
}

const Router =  function (pathname, params=null)  {

const isValidRoute = Object.keys(routes).find(key => key===pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
        
        if(isValidRoute === undefined || isValidRoute ==='')
        {
            app.appendChild(notFound())
        }else
        {
            app.appendChild(routes[isValidRoute](params)) 
        }
}

export {Router}