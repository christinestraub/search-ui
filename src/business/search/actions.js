export const GET_SEARCH_TERMS_REQUEST = 'GET_SEARCH_TERMS_REQUEST'
export const GET_SEARCH_TERMS_FAILURE = 'GET_SEARCH_TERMS_FAILURE'
export const GET_SEARCH_TERMS_SUCCESS = 'GET_SEARCH_TERMS_SUCCESS'

export const SET_SEARCH_TERMS_OUT = 'SET_SEARCH_TERMS_OUT'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const GET_RESOURCE_REQUEST = 'GET_RESOURCE_REQUEST'
export const GET_RESOURCE_FAILURE = 'GET_RESOURCE_FAILURE'
export const GET_RESOURCE_SUCCESS = 'GET_RESOURCE_SUCCESS'

export const PUT_RESOURCE_REQUEST = 'PUT_RESOURCE_REQUEST'
export const PUT_RESOURCE_FAILURE = 'PUT_RESOURCE_FAILURE'
export const PUT_RESOURCE_SUCCESS = 'PUT_RESOURCE_SUCCESS'

export const SET_RESOURCE = 'SET_RESOURCE'

export const SET_TIMESTAMP = 'SET_TIMESTAMP'

export function getSearchTermsRequest () {
  return {
    type: GET_SEARCH_TERMS_REQUEST
  }
}

export function getSearchTermsFailure (payload) {
  return {
    type: GET_SEARCH_TERMS_FAILURE,
    payload
  }
}

export function getSearchTermsSuccess (payload) {
  return {
    type: GET_SEARCH_TERMS_SUCCESS,
    payload
  }
}

export function setSearchTermsOut (payload) {
  return {
    type: SET_SEARCH_TERMS_OUT,
    payload
  }
}

export function searchRequest (payload) {
  return {
    type: SEARCH_REQUEST,
    payload
  }
}

export function searchFailure (payload) {
  return {
    type: SEARCH_FAILURE,
    payload
  }
}

export function searchSuccess (payload) {
  return {
    type: SEARCH_SUCCESS,
    payload
  }
}

export function getResourceRequest () {
  return {
    type: GET_RESOURCE_REQUEST
  }
}

export function getResourceFailure (payload) {
  return {
    type: GET_RESOURCE_FAILURE,
    payload
  }
}

export function getResourceSuccess (payload) {
  return {
    type: GET_RESOURCE_SUCCESS,
    payload
  }
}

export function putResourceRequest () {
  return {
    type: PUT_RESOURCE_REQUEST,
  }
}

export function putResourceFailure (payload) {
  return {
    type: PUT_RESOURCE_FAILURE,
    payload
  }
}

export function putResourceSuccess (payload) {
  return {
    type: PUT_RESOURCE_SUCCESS,
    payload
  }
}

export function setResource (payload) {
  return {
    type: SET_RESOURCE,
    payload
  }
}

export function setTimestamp () {
  return {
    type: SET_TIMESTAMP,
  }
}
