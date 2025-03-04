import Card from 'react-bootstrap/Card';

function Mascota(props){
   return(
       <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
           <Card.Img style={{ height: '14rem' }}  variant="top" src={props.mascota.foto} alt={props.mascota.descripcion} />
           <Card.Body>
               <Card.Title>{props.mascota.nombre}</Card.Title>
               <Card.Text>
                   {props.mascota.descripcion}
               </Card.Text>
           </Card.Body>
       </Card>
   );
}

export default Mascota;