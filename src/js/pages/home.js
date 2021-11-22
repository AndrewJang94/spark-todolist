
import header from '../components/heading/header'
import makeElement from '../utils/makeElement'
import tagline from '../components/tag/tagline'
import link from '../components/link/links'


const home = function() {

    const pageHeader =document.createElement('header')
    const homeLink = link("GET STARTED", "/todo")
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(header('SPARKS')))
    pageHeader.appendChild(makeElement(tagline('Take charge of your Todos')))
    pageHeader.append(homeLink)

    return pageHeader
}

export default home