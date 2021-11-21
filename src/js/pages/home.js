import logo from '../icons/logo'
import header from '../components/heading/header'
import makeElement from '../utils/makeElement'
import tagline from '../components/tag/tagline'
import link from '../components/link/links'


const home = function() {

    const pageHeader =document.createElement('header')
    const homeLink = link("GET STARTED", "/todo")
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('PROJECT MANAGER')))
    pageHeader.appendChild(makeElement(tagline('manage your projects in electrfying way')))
    pageHeader.append(homeLink)

    return pageHeader
}

export default home