import React from "react"
import {Card, Button} from "react-bootstrap"


const ParkCard = () => {

  const images = [
    "https://i.ytimg.com/vi/m9M30ch_OvQ/maxresdefault.jpg",
    "https://i.pinimg.com/originals/32/e6/93/32e6932f61d94dff872fa3da2c55b160.png",
    "https://images.squarespace-cdn.com/content/v1/58ec77f33a0411e543af417f/1492159508398-EQH5VJHQOJSDEJUBT7OM/ke17ZwdGBToddI8pDm48kIwlFV-98rCEmTMsHXX4Zqh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uaw3WO4ZwBLod77OSsPxeGMjWdbySoq2Zjo4gbUqKKSjrGX9FoDs3WeWy9fjPO04vA/image-asset.jpeg",
    "https://thesportsdaily.com/wp-content/uploads/sites/95/2019/09/screen-shot-2019-09-05-at-4.26.00-pm.png"
  ]

  const cardInfo = [
      {image: "https://i.ytimg.com/vi/m9M30ch_OvQ/maxresdefault.jpg", title: "Park 1", text: "Description"},
      {image: "https://i.pinimg.com/originals/32/e6/93/32e6932f61d94dff872fa3da2c55b160.png", title: "Curry", text: "Splash"},
      {image: "https://images.squarespace-cdn.com/content/v1/58ec77f33a0411e543af417f/1492159508398-EQH5VJHQOJSDEJUBT7OM/ke17ZwdGBToddI8pDm48kIwlFV-98rCEmTMsHXX4Zqh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uaw3WO4ZwBLod77OSsPxeGMjWdbySoq2Zjo4gbUqKKSjrGX9FoDs3WeWy9fjPO04vA/image-asset.jpeg", title: "Harden", text: "Stepback"},
      {image: "https://thesportsdaily.com/wp-content/uploads/sites/95/2019/09/screen-shot-2019-09-05-at-4.26.00-pm.png", title: "Caruso", text: "GOAT"},
  ]

  const renderCard = (card, index) => {
      return (
        <Card style={{ width: '100%'}} key={index}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                </Card.Text>
                <Button variant="primary">4-6</Button>
            </Card.Body>
        </Card>
      )
  }

  return (
    <div>
        {cardInfo.map(renderCard)}
    </div>
  );
}

export default ParkCard;