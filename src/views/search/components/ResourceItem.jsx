import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { setResource, setTimestamp } from '../../../business/search/actions'
import models from '../../../business/common/models'

const styles = {
  resourceItem: {
    borderRadius: '5px',
    border: 'solid 1px grey',
    margin: '0.5rem',
    padding: '0.5rem',
  }
}

class ResourceItem extends Component {
  handleRemoveClick = () => {
    const { resource, index, setResource } = this.props

    resource.allocations.splice(index, 1)

    const newResource = {
      total: resource.total,
      allocations: resource.allocations
    }

    setResource(newResource)
  }

  handleTypeToggle = () => {
    const { item, setTimestamp } = this.props

    item.ValType = item.ValType === models.resource.valTypes.num ? 
      models.resource.valTypes.per : models.resource.valTypes.num
    
    setTimestamp()
  }

  handleInputChange = event => {
    const { item, setTimestamp } = this.props
    const { value } = event.target
    let v = 0
    try {
      v = parseInt(value, 10)
    } catch (_) {
      v = 0
    }

    item.Value = v
    setTimestamp()
  }

  render() {
    const { item } = this.props
    const icon = item.ValType === models.resource.valTypes.num ? '%' : '$'

    return (
      <div style={styles.resourceItem}>
        <Form>
          <FormGroup row>
            <Label for='value' sm={4}>{ item.Title }</Label>
            <Col sm={4}>
              <Input
                type='text'
                name='value'
                id='value'
                placeholder='value'
                value={item.Value}
                onChange={this.handleInputChange}
                style={{ padding: 0, apddingRight: '0.1rem', textAlign: 'right' }}
              />
            </Col>
            <Col sm={2}>
              <a onClick={this.handleTypeToggle} style={{ cursor: 'pointer' }}>
                {icon}
              </a>
            </Col>
            <Col sm={2}>
              <a onClick={this.handleRemoveClick} style={{ cursor: 'pointer' }}>
                <i className='fa fa-minus' style={{ float: 'right' }} />
              </a>
            </Col>
          </FormGroup>
        </Form>
      </div>  
    )
  }
}

const mapStateToProps = state => ({
  resource: state.search.resource,
  timestamp: state.search.timestamp
})

const mapDispatchToProps = dispatch => ({
  setResource: params => dispatch(setResource(params)),
  setTimestamp: () => dispatch(setTimestamp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ResourceItem)

