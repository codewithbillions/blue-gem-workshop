import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Men from './../Assets/pexels-pixabay-220453.jpg'


const user = {
    name: 'clinton',
    age: 18
}

function Card1({school, amount}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Men} />
      <Card.Body>
        <Card.Title>About clinton {amount}</Card.Title>
        <Card.Text>
          my name is {user.name} i am {user.age}
        </Card.Text>

        <Button variant="primary">{school}</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Card1;