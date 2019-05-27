import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Row, Col } from 'reactstrap'
import InputItem from './InputItem'
import ResourceItem from './ResourceItem'
import { putResource } from '../../../business/search/action-creators'
import { setResource } from '../../../business/search/actions'
import { uiToggleSearchBar } from '../../../business/ui/actions'
import models from '../../../business/common/models'

class ResourceView extends Component {
  state = {}

  handleToggleClick = () => {
    const { uiToggleSearchBar } = this.props

    uiToggleSearchBar()
  }

  handleSaveClick = () => {
    const { resource, putResource } = this.props
    putResource(resource)
  }

  renderItem () {
    const { item } = this.props

    return (
      <InputItem item={item} />
    )
  }

  renderResources () {
    const { resource } = this.props

    if (!resource) {
      return null
    }

    return (
      <div style={{ overflowY: 'scroll' }}>
        { 
          resource.allocations.map((item, index) => (
            <ResourceItem
              key={index}
              item={item}
              index={index}
            />
          ))
        }
      </div>
    )
  }

  renderActions () {
    const { resource } = this.props

    if (!resource) {
      return null
    }

    const total = resource.allocations.reduce((total, item) => {
      if (item.ValType === models.resource.valTypes.num) {
        total += item.Value
      } else {
        total += item.Value * resource.total / 100
      }
      return total
    }, 0)

    const disabled = total > resource.total

    return (
      <Container>
        <Row>
          <Col>
            <Button
              color="primary"
              disabled={disabled}
              onClick={this.handleSaveClick}
            >
              Save
            </Button>
          </Col>
          <Col>
            Total: { resource ? `${resource.total}$` : '' }
          </Col>
        </Row>
      </Container>  
    )
  }

  render () {
    return (
      <div>
        <div>
          { this.renderItem() }
        </div>
        <div>
          { this.renderResources() }
        </div>
        <div>
          { this.renderActions() }
        </div>    
      </div>
    )
  }
}

const mapStateToProps = state => ({
  resource: state.search.resource,
  timestamp: state.search.timestamp,
})

const mapDispatchToProps = dispatch => ({
  setResource: params => dispatch(setResource(params)),
  putResource: params => dispatch(putResource(params)),
  uiToggleSearchBar: params => dispatch(uiToggleSearchBar(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceView)
