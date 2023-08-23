import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({name, population, currency, Country, image}){

    return(
        <>
        <Card style={{ width: '18rem' }} className='card-fetch'>
        <Card.Img variant="top" src={image} alt='image' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <div>
            Country: {Country}
            </div>
            <div>
            Population: {population}
            </div>
            <div>
            Currency: {currency}
            </div>
          </Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
          </Card>
        </>
    )
}
export default CardComponent
