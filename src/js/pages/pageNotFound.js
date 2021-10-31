import makeElement from "../utils/makeElement"
import link from "../components/button/links"
import logo from '../icons/logo'
import header from '../components/heading/header'
import makeElement from '../utils/makeElement'
import tagline from '../components/tag/tagline'
import body from '../components/body/content'


/*const notFound = function(){
    const page = document.createElement('div')  
    let headerTemplate = `
        <header class="page-not-found center-in-page">
        <h1><span>404</span> <span>page not found</span></h1>
        </header>
    `
    const pageHeader = makeElement(headerTemplate)
    const homeLink = link("HOME", "/todo", "ui-link-notfound")

    pageHeader.append(homeLink)
    page.append(pageHeader)

    return page
}

export default notFound */

const notFound = function() {

    const pageHeader =document.createElement('header')
    const homeLink = link("RETURN HOME", "/" ,"ui-link-notfound")
    pageHeader.classList.add('page-header-notfound')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('PROJECT MANAGER','ui-small-header')))
    pageHeader.appendChild(makeElement(tagline('manage your projects in electrfying way')))
    const pageBody = document.createElement('div')
    pageBody.classList.add('woops')
    pageBody.appendChild(makeElement(body('OOPS','ui-small-notfound')))
    pageBody.appendChild(makeElement(body('the page you are trying to reach does not exist', "ui-tagline-notfound")))
    pageBody.appendChild(homeLink)
    pageHeader.append(pageBody)

    return pageHeader
}

export default notFound