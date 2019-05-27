import {
  getSearchTermsRequest,
  getSearchTermsFailure,
  getSearchTermsSuccess,
  searchRequest,
  searchSuccess,
  searchFailure,
  getResourceRequest,
  getResourceFailure,
  getResourceSuccess,
  putResourceRequest,
  putResourceFailure,
  putResourceSuccess,
} from './actions'
import api from '../common/api'

export function getSearchTerms (params) {
  return dispatch => {
    dispatch(getSearchTermsRequest())

    api.getSearchTerms()
      .then(res => dispatch(getSearchTermsSuccess(res)))
      .catch(err => dispatch(getSearchTermsFailure(err)))
  }
}

export function search (searchterms, pagination) {
  return dispatch => {
    dispatch(searchRequest(pagination))

    api.search({ searchterms }, pagination)
      .then(res => dispatch(searchSuccess(res)))
      .catch(err => dispatch(searchFailure(err)))
  }
}

export function getResource (params) {
  return dispatch => {
    dispatch(getResourceRequest())

    api.getResource(params)
      .then(res => dispatch(getResourceSuccess(res)))
      .catch(err => dispatch(getResourceFailure(err)))
  }
}

export function putResource (resource) {
  return dispatch => {
    dispatch(putResourceRequest())

    api.putResource(resource)
      .then(res => dispatch(putResourceSuccess(res)))
      .catch(err => dispatch(putResourceFailure(err)))
  }
}
