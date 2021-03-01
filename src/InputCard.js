import {React, useState, useRef} from "react"
import {Card, Button, Dropdown, DropdownButton, Overlay} from "react-bootstrap"


const InputCard = () => {

  const renderCard = () => {
      return (
        <Card style={{ width: '100%', marginTop:'5%'}}>
            <Card.Body>
                <Card.Title>Input Card</Card.Title>
                <Card.Text>
                    Input text here
                </Card.Text>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{paddingTop:'20px'}}>
                        Starting City
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button" style={{marginTop:'5px'}}>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div style={{paddingTop:'20px', paddingBottom:'20px', display:'flex'}}>
                        <div style={{paddingRight:'5px'}}>
                            Max. Driving Distance
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button" style={{marginTop:'5px'}}>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                                <Dropdown.Item>Something else2</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div style={{paddingLeft:'5px'}}>
                            Units
                            <DropdownButton id="dropdown-basic-button" title="km" style={{marginTop:'5px'}}>
                                <Dropdown.Item>km</Dropdown.Item>
                                <Dropdown.Item>mi</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>

                    <div style={{paddingTop:'20px', paddingBottom:'20px'}}>
                        Max. Driving Distance
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button" style={{marginTop:'5px'}}>
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

                
            </Card.Body>

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