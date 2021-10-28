/*import home from "../pages/home"; 

const routes = {
    "/": home,
    "/todo":home
}

const Router =  function (pathname)   {

const isValidRoute = Object.keys(routes).find(key => key===pathname)

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
        // app.appendChild(routes[window.location.pathname]())
        if(isValidRoute === undefined){
            app.appendChild(home)
        }else{
            app.appendChild(routes[isValidRoute]()) 
        
}
}

export {Router} */