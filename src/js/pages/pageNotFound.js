import makeElement from "../utils/makeElement"
import link from "../components/link/links"
import logo from '../icons/logo'
import header from '../components/heading/header'
import makeElement from '../utils/makeElement'
import tagline from '../components/tag/tagline'
import body from '../components/body/content'

const notFound = function() {

    const pageHeader =document.createElement('header')
    const homeLink = link("RETURN HOME", "/" ,"ui-link-notfound")
    pageHeader.classList.add('page-header-notfound')
    pageHeader.appendChild(makeElement(header('SPARKS')))
    pageHeader.appendChild(makeElement(tagline('Take charge of your Todos')))
    const pageBody = document.createElement('div')
    pageBody.classList.add('woops')
    pageBody.appendChild(makeElement(body('OOPS','ui-small-notfound')))
    pageBody.appendChild(makeElement(body('the page you are trying to reach does not exist', "ui-tagline-notfound")))
    pageBody.appendChild(homeLink)
    pageHeader.append(pageBody)

    return pageHeader
}

export default notFound