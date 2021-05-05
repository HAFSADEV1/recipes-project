import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap';
export default class PopularRecipes extends Component {
    render() {
        return (
            <div id="resp">
                <h2 className="titleRes">Our Popular Recipes</h2>
                <Row>
                    <Col md={3}><img src="../../images/pexels-daniel-reche-3616956.jpg" alt=""  className="pupularImg"/> </Col>
                    <Col md={3}><img src="../../images/pexels-jill-wellington-257816.jpg" alt="" className="pupularImg "/></Col>
                    <Col md={3}><img src="../../images/pexels-klaus-nielsen-6287555.jpg" alt="" className="pupularImg "/></Col>
                    <Col md={3}><img src="../../images/pexels-sydney-troxell-708587.jpg" alt="" className="pupularImg "/></Col>
                </Row>
            </div>
        )
    }
}
