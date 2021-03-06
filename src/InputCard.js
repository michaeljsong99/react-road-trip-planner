import { React, useState, useRef } from "react"
import { Card, Button, Form, Col } from "react-bootstrap"
import Zoom from 'react-reveal/Zoom';
import './InputCard.css'


const InputCard = ({ updateCity, updateDistance, updateUnits, submitAction, allCities }) => {

    const citiesList = (cities) => (
        cities.map(city => <option key={city}> {city} </option>)
    );

    const renderCard = () => {
        return (
            <Zoom>
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
                                        onChange={(event) => { updateCity(event.target.value) }}
                                        onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
                                        defaultValue="Randomize">

                                        {citiesList(allCities)}

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
                                        onKeyUp={(event) => { updateDistance(event.target.value) }}
                                        onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
                                        placeholder="Distance" />
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
                                        onChange={(event) => { updateUnits(event.target.value) }}
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
                                    <Button variant="primary" onClick={submitAction}>
                                        Submit
                            </Button>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                    </Form>
                </Card>
            </Zoom>
        )
    }

    return (
        <div>
            {renderCard()}
        </div>
    );
}

export default InputCard;