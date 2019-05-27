import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { SearchView } from '../views'
import { RoutesNames } from '../constants'

class Home extends Component {
  render() {
    return (
      <div style={{ padding: '1rem' }}>
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route exact path={RoutesNames.index} component={SearchView} />
              </Switch>
            </Col>
          </Row>
        </Container>  
      </div>  
    )
  }
}

export default Home
