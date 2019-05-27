// import axios from 'axios'
import res1 from './data/res1.json'
import res2 from './data/res2.json'
import res3 from './data/res3.json'
import resource from './data/resource.json'
import searchterms from './data/searchterms.json'
// import searchtermsout from './data/searchtermsout.json'

const results = {
  res1,
  res2,
  res3
}

function parsePage (page) {
  if (page) {
    const p = /localhost\/(\w+)\.json/g.exec(page)
    return p.length === 2 ? p[1] : null
  } else {
    return null
  }
}

function getSearchTerms () {
  return new Promise((resolve, reject) => {
    resolve(searchterms)
  })
}

function search (searchTermsOut, page) {
  return new Promise((resolve, reject) => {
    if (!page) {
      resolve(results['res1'])
    } else {
      const p = parsePage(page)
      if (p) {
        resolve(results[p] || [])
      } else {
        resolve([])
      }
    }
  })
}

function getResource (item) {
  return new Promise((resolve, reject) => {
    resolve(resource)
  })
}

function putResource (resource) {
  return new Promise((resolve, reject) => {
    resolve(resource)
  })
}

export default {
  getSearchTerms,
  search,
  getResource,
  putResource,
}
