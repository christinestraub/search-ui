import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import { SearchBar, ResultsView } from './components'
import { uiToggleSearchBar } from '../../business/ui/actions'

class SearchView extends Component {
  handleToggleClick = () => {
    const { uiToggleSearchBar } = this.props
    uiToggleSearchBar()
  }

  renderSearchBar () {
    const { searchBarMinimized } = this.props

    if (searchBarMinimized) {
      return (
        <div style={{ height: '100%' }}>
          <div style={{ marginTop: 'auto' }}>
            <a style={{ cursor: 'pointer' }} onClick={this.handleToggleClick}>
              <i className="fa fa-arrow-right"/>
            </a>  
          </div>
        </div>
      )
    } else {
      return (
        <SearchBar />
      )
    }
  }

  render() {
    const { searchBarMinimized } = this.props

    return (
      <Container>
        <Row>
          <Col xs={searchBarMinimized ? 1 : 3}>
            { this.renderSearchBar() }
          </Col>
          <Col>
            <ResultsView />
          </Col>
        </Row>  
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  searchBarMinimized: state.ui.searchBarMinimized,
})

const mapDispatchToProps = dispatch => ({
  uiToggleSearchBar: (params) => dispatch(uiToggleSearchBar(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
