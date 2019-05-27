import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { setResource } from '../../../business/search/actions'
import models from '../../../business/common/models'

const styles = {
  inputItem: {
    borderRadius: '5px',
    border: 'solid 1px grey',
    margin: '0.5rem',
    padding: '0.5rem',
  }
}

const valueTypes = [
  models.resource.valTypes.num,
  models.resource.valTypes.per,
]

class InputItem extends Component {
  state = {
    value: 10,
    valType: 0
  }

  handleAddClick = () => {
    const { resource, item, setResource } = this.props
    const { value, valType } = this.state
    let v = 0
    try {
      v = parseInt(value, 10)
    } catch (_) {
      v = 0
    }
    
    const newItem = {
      ID: item.ID,
      Title: item.title,
      Value: v,
      ValType: valueTypes[valType]
    }

    resource.allocations.push( newItem )

    const newResource = {
      total: resource.total,
      allocations: resource.allocations
    }

    setResource(newResource)
  }

  handleTypeToggle = () => {
    const { valType } = this.state

    this.setState({ valType: 1 - valType })
  }

  handleInputChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { item } = this.props
    const { value, valType } = this.state
    const icon = valType ? '%' : '$'

    return (
      <div style={styles.inputItem}>
        <Form>
          <FormGroup row>
            <Label for='value' sm={4}>{ item.title }</Label>
            <Col sm={4}>
              <Input
                type='text'
                name='value'
                id='value'
                placeholder='value'
                value={value}
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
              <a onClick={this.handleAddClick} style={{ cursor: 'pointer' }}>
                <i className='fa fa-plus' style={{ float: 'right' }} />
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
})

const mapDispatchToProps = dispatch => ({
  setResource: params => dispatch(setResource(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputItem)

