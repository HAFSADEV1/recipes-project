

import {Row,Container,Col,Button} from 'react-bootstrap';


function About() {


  return (
    <div id="About" className='about' style={{ backgroundImage: "url('../images/lcz9nxhoslo-brooke-lark.jpg')" }}>


<Container className=' mt-5'>
<Row >

    

        <Col  sm={7} className='d-flex flex-column justify-content-center'>
          <img width={485}height={675}  src="images/jaifv4nk.png" className="img-fluid"  alt="Food logo"/>
        </Col>
      

      <Col sm={5} ml={5} className='text d-flex flex-column justify-content-center'>
            <h2 className="mb-3">The best comfort food will always be greens, cornbread, and fried chicken.Automation products.</h2>
            <p className="mb-5">
            .Part of the secret of success in life is to eat what you like
            And for that, we offer you the best recipes for success that inspire you to move forward with your dreams. The mind cannot think and the stomach is empty. <br></br>
            <Button className='mt-3 btn-get-started '>see more</Button> </p>
      </Col>     
                            
                               
</Row>
</Container>








<Container className=' mt-5'>


<Row >

      
<Col sm={5} className='text d-flex flex-column justify-content-center'>
            <h2 className="mb-3">The best comfort food will always be greens, cornbread, and fried chicken.Automation products.</h2>
            <p className="mb-5">
            .Part of the secret of success in life is to eat what you like
            And for that, we offer you the best recipes for success that inspire you to move forward with your dreams. The mind cannot think and the stomach is empty.<br></br>
            <Button className='mt-3 btn-get-started '>see more</Button> </p>
</Col>     

 <Col  sm={7} className='d-flex flex-column justify-content-center'>
   <img width={485}height={675}src="images/image4.png" className="img-fluid mb-5 ml-5"alt="Food logo"   />      
</Col>                                     
</Row>
</Container>

          </div>
  );
}

export default About;
