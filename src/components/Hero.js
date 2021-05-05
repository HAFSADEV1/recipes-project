import {React, useState }from 'react';
import {Row,Container,Form ,InputGroup,FormControl ,Button,Nav,Navbar} from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Hero() {

  const [name, setName] = useState("");
  function getValue(e) {
    setName(e.target.value);
  }

  return (
    <div className="hero-container" style={{ backgroundImage: "url('../images/style\ 3.jpg')" }}>
      {/************ start Navbar Conntainer **************/}
          <Container className="dd d-flex justify-content-between">
            <Navbar.Brand className='img'>
              <img src="images/output.png" width="100"  height="90"  className="d-inline-block align-top" alt="Food logo"/>
            </Navbar.Brand>
                    <Nav className="dd  Navbar  mx-ml mr-5">
                        <Nav.Link  className="Navbari" href="#Hero">Home</Nav.Link>
                        <Nav.Link  className="Navbari" href="#About">About</Nav.Link>
                        <Nav.Link  className="Navbari" href="#parent">Menu</Nav.Link>
                        <Nav.Link  className="Navbari" href="#resp">Popular</Nav.Link>
                        <Nav.Link  className="Navbari"  ><Link to="/favorite" style={{color: "#F98169"}}  ><BsFillHeartFill/></Link></Nav.Link>
                      </Nav>
          </Container>
      {/************ end Navbar Conntainer **************/}


      {/************ start Hero Conntainer **************/}
            <Container className='mt-5'>
                <Row className="col-lg-6 d-flex flex-column justify-content-center">
                      <h1 >Good food choices are   good investments. </h1>
                      <p className="mt-3">There is a powerful need for symbolism, and that means the architecture must have something that appeals to the human heart.</p>
                      <InputGroup className="mb-3 Serch "  onChange={getValue} >
                        <FormControl placeholder="Serch" id="serchh"/>
                          <InputGroup.Prepend id="basic-addon2">
                          <InputGroup.Text id="basic-addon1"><Link to={`/search/${name}`} style={{color: "#F98169"}}><BsSearch/></Link></InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                    <Form inline>
                    <Button className='mt-3 btn-get-started '>Menu</Button> 
                    <p className='ml-5 mt-4 '>Watch our Menu</p>
                    </Form>
              </Row>
            </Container>
      {/************ end Hero Conntainer **************/}

</div>
  );
}

export default Hero;