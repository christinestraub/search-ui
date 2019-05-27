import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink, Container, Row, Col, Button } from 'reactstrap';
import ResultNav from './ResultNav'
import ResultDetail from './ResultDetail'
import { search, getResource } from '../../../business/search/action-creators'

class ResultsView extends Component {
  state = {
    item: null
  }

  componentWillReceiveProps(nextProps) {
    const { results } = nextProps

    if (results.length) {
      this.setState({ item: results[0] })
    }
  }

  handleNavClick = item => {
    this.setState({ item })
  }

  handleMoreClick = () => {
    const { termsOut, pagination, search } = this.props

    search(termsOut, pagination ? pagination.after : null)
  }

  renderResults () {
    const { results, pagination } = this.props

    return (
      <div>
        <div style={{ maxHeight: '500px', overflowY: 'scroll'}}>
          <Nav vertical>
            {
              results.map((item, index) => (
                <NavItem key={index} onClick={() => this.handleNavClick(item)}>
                  <NavLink href="#">
                    {item.title}
                  </NavLink>
                </NavItem>
              ))
            }
          </Nav>
        </div>
        <hr/>
        <div style={{ textAlign: 'center' }}>
        {
          pagination && pagination.after ? 
            <Button onClick={this.handleMoreClick} size="sm">
              More ...
            </Button>
            : null
        }
        </div>
      </div>  
    )
  }

  renderDetail() {
    const { item } = this.state

    if (item) {
      return (
        <ResultDetail item={item} />
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <div>
        <ResultNav />
        <Container>
          <Row>
            <Col xs="3">
              { this.renderResults() }
            </Col>
            <Col>
              { this.renderDetail() }
            </Col>
          </Row>  
        </Container>
      </div>  
    )
  }
}

const mapStateToProps = state => ({
  results: state.search.results,
  pagination: state.search.pagination,
  termsOut: state.search.termsOut,
})

const mapDispatchToProps = dispatch => ({
  search: (termsOut, pagination) => dispatch(search(termsOut, pagination)),
  getResource: params => dispatch(getResource(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsView)
