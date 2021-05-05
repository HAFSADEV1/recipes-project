import {React,useState,useEffect} from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import Menu from './Menu';

export default function Favorite() {
    
    let [data,setData]=useState(JSON.parse(localStorage.getItem("data")));
    return (
        <div className="parent">
            <Container>
            <Menu/>
             <h2 className="titleRes2">Your Favorite Food</h2>
                <Row>
                {
                data.map(el => (
                    <Col md={4}>
                        <Card m={4} style={{ width: '18rem'}} id="favCard">
                            <Card.Img variant="top" src={el.strMealThumb} id="imgTop" key={el.idMeal}/>
                            <Card.Body>
                                <Card.Title>{el.strMeal}</Card.Title>
                                <Card.Text>
                                 <a href={el.strYoutube} id="lnk">Watch it in youtube!</a>
                                  <FaTrashAlt id="deleteIcon" onClick={()=>{
                                      let arr=[];
                                       arr=data.filter(x=> x.idMeal !== el.idMeal);
                                       setData(arr);
                                       localStorage.setItem("data",JSON.stringify(arr));
                                  }
                                  } />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>   
                ))}
                </Row>
        </Container>
    </div>
    )
}
