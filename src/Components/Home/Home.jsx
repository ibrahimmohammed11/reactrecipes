import React, { Component, Fragment } from 'react'
import axios from 'axios';
import cooking from "../../images/Cooking-bro.svg"
import kitchen from "../../images/Deconstructed-food.gif"
import TypeWriterEffect from 'react-typewriter-effect';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import cooking1 from "../../images/Cooking.gif"
import Footer from '../Footer/Footer';

export default class Home extends Component {
    state = {
        recipe: [],
        loading: false,
        search: '',
    };

    getAll = async (recipe) => {
        this.setState({ loading: false })
        let { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
        this.setState({
            recipe: data.recipes,
            loading: true,
        })
    }
    componentDidMount() {
        this.getAll("cake")
    }
    getRecipe = (e) => {
        this.getAll(e.target.value)
    }
    getRecipe1 = (e) => {
        this.getAll(e.target.value)
    }
    updateSearch = (e) => {
        this.setState({ search: e.target.value })
    }
    goToRecipeDetails = (id) => {
        this.props.history.push(`/recipedetails/${id}`);
    }
    render() {
        if (this.state.loading) {
            let filerData = this.state.recipe.filter(
                (value) => {
                    return value.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
            return (
                <Fragment>
                    <div className="container my-5 py-5">
                        <div className="ml-5">
                            <TypeWriterEffect
                                textStyle={{ color: '#17a2b8' }}
                                startDelay={100}
                                cursorColor="#17a2b8"
                                text={"Welcome to The Best Food and Cooking Website"}
                                loop={true}
                                nextTextDelay={1000}
                                typeSpeed={100}
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <img src={cooking} alt=".." className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <img src={kitchen} alt=".." className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="py-4">
                                    <select className="form-control" onChange={this.getRecipe} defaultValue="">
                                        <option value="" disabled hidden>Choose a Meal</option>
                                        <option value="steak">steak</option>
                                        <option value="hamburger">hamburger</option>
                                        <option value="chicken">chicken</option>
                                        <option value="beef">beef</option>
                                        <option value="seafood">seafood</option>
                                        <option value="bbq">bbq</option>
                                        <option value="kebab">kebab</option>
                                        <option value="lasagna">lasagna</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="py-4">
                                    <select className="form-control" onChange={this.getRecipe} defaultValue="">
                                        <option value="" disabled hidden>Choose a Sweet</option>
                                        <option value="pudding">pudding</option>
                                        <option value="chocolate">chocolate</option>
                                        <option value="croissant">croissant</option>
                                        <option value="cake">cake</option>
                                        <option value="ice cream">ice cream</option>
                                        <option value="sweet potato">sweet potato</option>
                                        <option value="cinnamon">cinnamon</option>
                                        <option value="raspberry">raspberry</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="py-4">
                                    <select className="form-control" onChange={this.getRecipe} defaultValue="">
                                        <option value="" disabled hidden>Choose a Fruit</option>
                                        <option value="raspberry">raspberry</option>
                                        <option value="blackberry">blackberry</option>
                                        <option value="blueberry">blueberry</option>
                                        <option value="mango">mango</option>
                                        <option value="apple">apple</option>
                                        <option value="banana">banana</option>
                                        <option value="coconut">coconut</option>
                                        <option value="lemon">lemon</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 text-center m-auto">
                                <button value="seafood" onClick={this.getRecipe1} className="btn btn-info mx-3 mb-4">seafood</button>
                                <button value="hamburger" onClick={this.getRecipe1} className="btn btn-info mx-3 mb-4">hamburger</button>
                                <button value="chicken" onClick={this.getRecipe1} className="btn btn-info mx-3 mb-4">chicken</button>
                                <button value="ice cream" onClick={this.getRecipe1} className="btn btn-info mx-3 mb-4">ice cream</button>
                                <button value="pudding" onClick={this.getRecipe1} className="btn btn-info mx-3 mb-4">pudding</button>
                                <button value="sweet potato" onClick={this.getRecipe1} className="btn btn-info mx-3 mb-4">sweet potato</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center m-auto">
                                <input type="text" onChange={this.updateSearch.bind(this)} value={this.state.search} placeholder='Serach by Recipe' className='form-control my-5 text-center' />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 pb-4">
                                <div>
                                    <div className="w-25 brbr"></div>
                                    <h3 className="my-2 py-2 space">Best Recipes<br /> of The day</h3>
                                    <p className="my-2 secondFontColor">Best Recipes Ever</p>
                                    <div className="w-100 brbr"></div>
                                </div>
                            </div>
                            {filerData.map((value, index) => {
                                return <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <div>
                                        <img src={value.image_url} className="w-100 brRadius mb-3" height='250' alt=" " />
                                        <div>
                                            <button className="btn btn-outline-info btn-block" onClick={() => this.goToRecipeDetails(value.recipe_id)}>Ingredients</button>
                                            <a href={value.source_url} className="btn btn-outline-info btn-block" target="_blank" rel="noreferrer">Get Recipe</a>
                                            <h4 className="py-2 h5 secondFontColor">{value.title.split(" ").splice(0, 3).join(" ")}</h4>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <h2 className="secondFontColor text-center mt-5">
                            Best Recipes of The day
                            <i className="fas fa-utensils mx-3"></i>
                            <i className="fas fa-cookie-bite mr-3"></i>
                            <i className="fas fa-award"></i>
                        </h2>
                        <div className="row py-5">
                            <div className="col-xl-6 col-lg-6">
                                <div className="text-center">
                                    <Carousel fade>
                                        {this.state.recipe.slice(0, 7).map((value, index) => {
                                            return <CarouselItem key={index} interval={2000}>
                                                <h4 className="py-2 h5 secondFontColor">{value.title.split(" ").splice(0, 3).join(" ")}</h4>
                                                <img src={value.image_url} height="500px" className="brRadius1 w-75" alt=" " />
                                            </CarouselItem>
                                        })}
                                    </Carousel>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <img src={cooking1} alt=" " className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </Fragment>
            )
        }
        else {
            return (
                <Fragment>
                    <div className="load">
                        <div className="loader">Loading...</div>
                    </div>
                </Fragment>
            )
        }
    }
}
