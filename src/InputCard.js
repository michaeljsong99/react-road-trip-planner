import {React, useState, useRef} from "react"
import {Card, Button, Form, Col} from "react-bootstrap"
import './InputCard.css'


const InputCard = () => {

  const logCity = (city) => {
      console.log('City: ' + city)
  }

  const logDistance = (distance) => {
      console.log('Distance: ' + String(distance))
  }

  const onKeyUp = (event) => {
      if (event.charCode === 13) {
          console.log('ENTER')
      }
      else {
        console.log(event.target.value)
      }
  }

  const renderCard = () => {
      return (
        <Card className="mainCard">
            <Card.Body>
                <Card.Title>Road Trip Parameters</Card.Title>             
            </Card.Body>
            <Form>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Starting City</Form.Label>
                            <Form.Control 
                                as="select" 
                                onChange = { (event) => { console.log(event.target.value) } }
                                onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
                                defaultValue="Randomize">
                                
                                <option>Randomize</option>
                                <option>City1</option>
                                <option>City2</option>
                                <option>City3</option>
                                <option>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</option>
                            </Form.Control>
                            <Form.Text id="startingCityHelpBlock" muted>
                                Select the starting city for your trip, or choose one at random!
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Maximum Driving Distance </Form.Label>
                            <Form.Control 
                                type="distance" 
                                onKeyUp= { (event) => { onKeyUp(event) } }
                                onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
                                placeholder="Distance"/>
                            <Form.Text id="distanceHelpBlock" muted>
                                Input the maximum total distance you are willing to drive.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Form.Group as={Col} controlId="formGridUnits">
                            <Form.Label>Units</Form.Label>
                            <Form.Control 
                                as="select" 
                                onChange = { (event) => { console.log(event.target.value) } }
                                onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
                                defaultValue="mi">
                                    <option>mi</option>
                                    <option>km</option>
                            </Form.Control>
                            <Form.Text id="unitsHelpBlock" muted>
                                Miles or kilometers.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                    <Col xs="auto">

                        <Form.Group as={Col} controlId="submitButton">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        </Card>
      )
  }

  return (
    <div>
        {renderCard()}
    </div>
  );
}

export default InputCard;