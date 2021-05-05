import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer" style={{ backgroundImage: "url('../images/footerBack.jpg')" }}>
                <img alt="" src="../images/points.jpg" id="imgp1" />
                <img alt="" src="../images/points.jpg" id="imgp2"/>
                
                <img aly="" src="../images/44.png" id="imgp3"/>
                
                <nav>
                <img src="images/output.png" width="100"  height="90"></img>
                    <ul id="footerList">
                        <li><a href="#Hero" active>Home</a></li>
                        <li><a href="#About">About</a> </li>
                        <li><a href="#parent">Menu</a></li>
                        <li><a href="#resp">Popular</a></li>
                    </ul>
                </nav>
                <h6 id="cpy">Copyright &copy; koutarizi and hafsa chentouf 2021,All rights reserved</h6>
            </div>
        )
    }
}
