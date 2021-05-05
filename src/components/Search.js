import {React,useState,useEffect} from 'react'
import { useParams ,Link} from 'react-router-dom';
import {Row,Container,Col} from 'react-bootstrap';
import axios from 'axios'

import { BsFillHeartFill } from "react-icons/bs";
import Menu from './Menu';
export default function Search() {

    let [recipes, setRecipes] = useState([]);
    let [found,setFound]=useState(false);
    const {name}=useParams();
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then(res=>{
                if(res.data.meals !== null){
                    setRecipes(res.data.meals);
                    setFound(true);
                }
                
        }).catch(error => {console.log(error)})
    }, [])

    return (
        <div>
        <Container >
         <Menu/>
           {
            found
            ?  recipes.map(x=> (
                <Row >
                  <Col  sm={5} className='d-flex flex-column justify-content-center'>
                  <img  src={x.strMealThumb}  className="img-fluid imgRes"  alt="Food logo"/>
                  </Col>
                  <Col sm={7} ml={7} className='text d-flex flex-column justify-content-center'>
                       <h2 className="mb-3">{x.strMeal} &ensp;<BsFillHeartFill className="icns" onClick={()=>{
                                            let all=JSON.parse(localStorage.getItem("data"));
                                            let obj={idMeal:x.idMeal,strMealThumb:x.strMealThumb,strMeal:x.strMeal,strYoutube:x.strYoutube};
                                            all.push(obj);
                                            localStorage.setItem("data",JSON.stringify(all));
                                     }}/></h2>
                       <p className="mb-5">
                           {x.strInstructions}
                        <br></br>
                       <Link to={`/details/${x.idMeal}`} className="linkM">View Details</Link> </p>
                   </Col>  
                  </Row>
               )) 
            : <h1>Recipe Not Exists !</h1>
           }
        </Container>
        </div>

    )
}
