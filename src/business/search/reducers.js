import {
  GET_SEARCH_TERMS_REQUEST,
  GET_SEARCH_TERMS_FAILURE,
  GET_SEARCH_TERMS_SUCCESS,
  SET_SEARCH_TERMS_OUT,
  SEARCH_REQUEST,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  GET_RESOURCE_REQUEST,
  GET_RESOURCE_FAILURE,
  GET_RESOURCE_SUCCESS,
  PUT_RESOURCE_REQUEST,
  PUT_RESOURCE_FAILURE,
  PUT_RESOURCE_SUCCESS,
  SET_RESOURCE,
  SET_TIMESTAMP
} from './actions'

const initialState = {
  loading: false,
  terms: null,
  results: [],
  pagination: null,
  resource: null,
  termsOut: [],
  timestamp: Date.now(),
  error: ''
}

export function search (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_TERMS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_SEARCH_TERMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_SEARCH_TERMS_SUCCESS:
      return {
        ...state,
        loading: false,
        terms: action.payload,
        termsOut: []
      }

    case SET_SEARCH_TERMS_OUT:
      return {
        ...state,
        termsOut: action.payload
      }

    case SEARCH_REQUEST:
      if (action.payload) {
        return {
          ...state,
          loading: true,
        }
      } else {
        return {
          ...state,
          loading: true,
          results: [],
          pagination: null,
          resource: null,
        }
      }
  
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload
      }
  
    case SEARCH_SUCCESS:
      const res = action.payload
      return {
        ...state,
        results: state.results.concat(res.results),
        pagination: res.pagination,
      }

    case GET_RESOURCE_REQUEST:
      return {
        ...state,
        resource: null,
        loading: true,
        error: ''
      }
  
    case GET_RESOURCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
  
    case GET_RESOURCE_SUCCESS:
      return {
        ...state,
        loading: false,
        resource: action.payload
      }

    case PUT_RESOURCE_REQUEST:
      return {
        ...state,
        loading: true,
      }
  
    case PUT_RESOURCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case PUT_RESOURCE_SUCCESS:
      return {
        ...state,
        loading: false,
        resource: action.payload
      }
  
    case SET_RESOURCE:
      return {
        ...state,
        resource: action.payload
      }

    case SET_TIMESTAMP:
      return {
        ...state,
        timestamp: Date.now()
      }
    
    default:
      return state
  }
}