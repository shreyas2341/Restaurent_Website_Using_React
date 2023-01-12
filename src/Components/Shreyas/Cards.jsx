import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({name,img,desc}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img className='card_img' variant="top" src={img} />
      <Card.Body className='bg-black text-white'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button style={{backgroundColor:'#f5efdb',color:'black'}} variant="primary"> <b>Order Now</b></Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;