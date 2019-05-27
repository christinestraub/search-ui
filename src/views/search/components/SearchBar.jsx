import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Input, ListGroup, ListGroupItem } from 'reactstrap'
import { getSearchTerms, search } from '../../../business/search/action-creators'
import { setSearchTermsOut } from '../../../business/search/actions'

class SearchBar extends Component {
  state = {
    keyword: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    const { fetchSearchTerms } = this.props

    this.setState({ [name]: value })

    fetchSearchTerms(value)
  }

  handleSearchClick = () => {
    const { search, termsOut } = this.props
    
    search(termsOut)
  }

  handleTermAddClick = (category, term) => {
    const { termsOut, setSearchTermsOut } = this.props

    termsOut.push({ type: category, term })

    setSearchTermsOut(termsOut.slice())
  }

  handleTermRemoveClick = index => {
    const { termsOut, setSearchTermsOut } = this.props
    termsOut.splice(index, 1)
    setSearchTermsOut(termsOut.slice())
  }

  renderSearchForm () {
    const { keyword } = this.state

    return (
      <Form>
        <FormGroup>
          <Input
            type='text'
            name='keyword'
            id='keyword'
            placeholder='Search...'
            value={keyword}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <Button onClick={this.handleSearchClick}>Search</Button>
      </Form>
    )
  }

  renderTermsOut () {
    const { termsOut } = this.props

    if (!termsOut) {
      return null
    }

    return (
      <div>
        {
          termsOut.map((item, index) => (
            <div key={index}>
              { item.term }
              <a
                style={{ float: 'right', cursor: 'pointer' }}
                onClick={() => this.handleTermRemoveClick(index)}
              >
                <i className="fa fa-minus-square"/>
              </a>  
            </div>
          ))
        }
      </div>  
    )
  }

  renderSearchTerms () {
    const { terms } = this.props

    const lists = []
    for (let category in terms) {
      lists.push((
        <ListGroup key={category}>
          <ListGroupItem active tag="a" href="#" action>
            {category}
          </ListGroupItem>
          { 
            terms[category].map(item => (
              <ListGroupItem href="#" action key={item}>
                {item}
                <a
                  style={{ float: 'right', cursor: 'pointer' }}
                  onClick={() => this.handleTermAddClick(category, item)}
                >
                  <i className="fa fa-plus-square"/>
                </a>  
              </ListGroupItem>
            ))
          }
        </ListGroup>
      ))
    }
    
    return lists
  }

  render () {
    return (
      <div>
        { this.renderSearchForm() }
        { this.renderTermsOut() }
        <hr />
        <div style={{ fontSize: '12px' }}>
          { this.renderSearchTerms() }
        </div>  
      </div>
    )
  }
}

const mapStateToProps = state => ({
  terms: state.search.terms,
  termsOut: state.search.termsOut,
})

const mapDispatchToProps = dispatch => ({
  fetchSearchTerms: params => dispatch(getSearchTerms(params)),
  setSearchTermsOut: params => dispatch(setSearchTermsOut(params)),
  search: params => dispatch(search(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
