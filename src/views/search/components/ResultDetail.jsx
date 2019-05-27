import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import ResourceView from './ResourceView'
import { getResource } from '../../../business/search/action-creators'
import { uiToggleSearchBar } from '../../../business/ui/actions'
import models from '../../../business/common/models'

class ResultDetail extends Component {
  state = {
    view: models.ui.resultView.simple
  }

  toggleView (view) {
    if (view === models.ui.resultView.simple) {
      return models.ui.resultView.expand
    } else {
      return models.ui.resultView.simple
    }
  }

  handleToggleClick = () => {
    const { uiToggleSearchBar, getResource } = this.props
    const { view } = this.state

    uiToggleSearchBar()
    getResource()

    this.setState({ view: this.toggleView(view) })
  }

  renderCard () {
    const { item } = this.props

    return (
      <Card>
        <CardImg
          top
          width='100px'
          src={`https://placeholdit.imgix.net/~text?txtsize=20&txt=${item.title}&w=100&h=100`}
          alt={item.title}
        />
        <CardBody>
          <CardTitle>{ item.title }</CardTitle>
          <CardSubtitle>{ item.location }</CardSubtitle>
          <CardText>{ item.description }</CardText>
        </CardBody>
      </Card>
    )
  }

  renderResourceView () {
    const { item } = this.props
    const { view } = this.state

    return (
      <Container>
        <Row>
          <Col>
            <Button color="primary" style={{ float: 'right' }} onClick={this.handleToggleClick}>
              Resource
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            { view === models.ui.resultView.expand ? <ResourceView item={item} /> : null }
          </Col>
        </Row>
      </Container> 
    )
  }

  render () {
    return (
      <div style={{ margin: '1rem' }}>
        <Container>
          <Row>
            <Col>
              { this.renderCard() }
            </Col>
            <Col>
              { this.renderResourceView() }
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.search.results,
})

const mapDispatchToProps = dispatch => ({
  uiToggleSearchBar: params => dispatch(uiToggleSearchBar(params)),
  getResource: params => dispatch(getResource(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultDetail)
