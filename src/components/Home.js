import React, { Component } from 'react'
import About from './About'
import Back from './Back'
import Blog from './Blog'
import Footer from './Footer'
import Hero from './Hero'
import PopularRecipes from './PopularRecipes'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <About/>
                <Back/>
                <Blog/>
                <PopularRecipes/>
                <Footer/>
            </div>
        )
    }
}
