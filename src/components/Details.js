import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import Menu from './Menu';
import {Row,Container,Col} from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { BsHouseDoorFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Details() {

    const {id}=useParams();
    let [recipe,setRecipe]=useState({});
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>{
           let obj=res.data.meals[0];
           setRecipe(obj);
           console.log(recipe);
        });
    }, [])

    return (
        <div  className='dtls' style={{ backgroundImage: "url('../images/header-bg.png')" }}>
              <Container className='' >
             

               <Col  className=' d-flex flex-column justify-content-center'>
                   <h1 style={{ color: "white" }} className=' mt-5 d-flex  justify-content-center'> OUR RECIPE </h1>
               <img className='imghr'  width={700}height={50}  src='../images/image9.png'    alt="hr"/>
               </Col>
               
              </Container>
        <Container >
             <Row >

               <Col  sm={5} className='d-flex flex-column mt-5'>
               <img  src={recipe.strMealThumb}  className=" mr-5 img-fluid rend"  alt="Food"/>
               </Col>
               
               <Col sm={7} ml={8} className='text d-flex flex-column justify-content-center'>
               <h2 id='titlercp' >{recipe.strMeal} 
               TRY PREPARING THE DISH FOLLOWING OUR RECIPE  <Link to="/favorite" style={{ color: "#f98169" }}><FaRegHeart className="icns"/> </Link><Link to="/" style={{ color: "#f98169" }}>< BsHouseDoorFill/></Link></h2>
               <br></br>

                  <h3 id="ingr">Ingredients</h3>
                  <table id="ingr1" style={{ color:' white' }}>
                      <tr>
                          <td>{recipe.strMeasure1}  {recipe.strIngredient1}</td>
                          <td>{recipe.strMeasure2} {recipe.strIngredient2}</td>
                          <td>{recipe.strMeasure3} {recipe.strIngredient3}</td>
                          <td>{recipe.strMeasure4} {recipe.strIngredient4}</td>
                          
                      </tr>
                      <tr>
                         <td>{recipe.strMeasure5} {recipe.strIngredient5}</td>
                          <td>{recipe.strMeasure6} {recipe.strIngredient6}</td>
                          <td>{recipe.strMeasure7}{recipe.strIngredient7}</td>
                          <td>{recipe.strMeasure8}{recipe.strIngredient8}</td>
                      </tr>
                      <tr>
                           <td>{recipe.strMeasure9}{recipe.strIngredient9}</td>
                          <td>{recipe.strMeasure10}{recipe.strIngredient10}</td>
                          <td>{recipe.strMeasure11}{recipe.strIngredient11}</td>
                          <td>{recipe.strMeasure12} {recipe.strIngredient12}</td>
                      </tr>
                      <tr>
                          <td>{recipe.strMeasure13} {recipe.strIngredient13}</td>
                          <td>{recipe.strMeasure14}{recipe.strIngredient14}</td>
                          <td>{recipe.strMeasure15} {recipe.strIngredient15}</td>
                          <td>{recipe.strMeasure16}{recipe.strIngredient16}</td>
                      </tr>
                      <tr>
                         <td>{recipe.strMeasure17}{recipe.strIngredient17}</td>
                          <td>{recipe.strMeasure18}{recipe.strIngredient18}</td>
                          <td>{recipe.strMeasure19}{recipe.strIngredient19}</td>
                          <td>{recipe.strMeasure20}{recipe.strIngredient20}</td>
                      </tr>
                  </table>
            
                   <h3 class="mr-5" id="ins">Instructions</h3>
                   <p class="mb-5 mr-5"  id="ingr1" style={{ color:' white' }}>
                        {recipe.strInstructions}
                     <br></br>
                    </p>
                   </Col>
               </Row>
     </Container>




{/* <Container>
    <Row>
    <Col  sm={4} className='d-flex flex-column mt-5'>
    <img src="../images/output.png" width="200"  height="140"  className="d-inline-block align-top" alt="Food logo"/>
    </Col>
    <Col  sm={4} className='d-flex flex-column mt-5'>
    <img src="../images/image6.png" width="170"  height="140"  className="d-inline-block align-top" alt="Food logo"/>
    </Col>
    <Col  sm={4} className='d-flex flex-column mt-5'>
    <img src="../images/Lalapng.png" width="170"  height="140"  className="d-inline-block align-top" alt="Food logo"/>
    </Col>
    </Row>
</Container> */}
        </div>
    )
}
