import React, { Component } from 'react'
import axios from 'axios'
import {Card,Row,Col} from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
export default class Blog extends Component {

    state={
        recipes:[],
    }
        
    componentDidMount(){
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=").then(res=>{
            let recps=[];
            for(let i=0;i<6;i++){
                recps.push(res.data.meals[i]);
            }
            this.setState({recipes:recps});
        });
    }
    
    render() {
        return (
            <div className="parent" >
                <h2 className="titleRes1">Explore Our Foods</h2>
                <Row>
                {this.state.recipes.map(el => (
                <React.Fragment key={el.idMeal}>
                    <Col md={4}>
                        <Card m={4} style={{ width: '18rem'}} id="card">
                            <Card.Img variant="top" src={el.strMealThumb} id="imgTop"/>
                            <Card.Body>
                                <Card.Title>{el.strMeal}</Card.Title>
                                <Card.Text>
                                 <a href={el.strYoutube} id="lnk">Watch it in youtube!</a>
                                  <FaHeart id="fav" onClick={()=>{
                                         let all=JSON.parse(localStorage.getItem("data"));
                                         let obj={idMeal:el.idMeal,strMealThumb:el.strMealThumb,strMeal:el.strMeal,strYoutube:el.strYoutube};
                                         all.push(obj);
                                         localStorage.setItem("data",JSON.stringify(all));
                                  }}/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>   
                </React.Fragment>))}
                </Row>
                <button className="explorButton">Explore all food</button>
            </div>
        )
    }
}
