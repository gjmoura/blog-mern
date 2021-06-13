import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Buttons from '../components/buttons/button'

const ViewComponents = () => {
  return (
    <>
      <Container fluid>
        <h1>Botões</h1>
        <hr/>
        <Row>
          <Col>
            <Buttons identity="button-pattern" text="Botão Padrão"/>
          </Col>
          <Col>
            <Buttons identity="button-success"text="Botão Success"/>
          </Col>
          <Col>
            <Buttons identity="button-decline"text="Botão Decline"/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ViewComponents;