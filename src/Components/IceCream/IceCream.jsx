import React, { Component, Fragment } from 'react';
import getAll from "../../Services/Recipe";
import cooking1 from "../../images/Cooking-bro.svg";
import kitchen1 from "../../images/Deconstructed-food.gif";
export default class IceCream extends Component {
    state = {
        recipe: [],
        loading: false,
    }
    async componentDidMount() {
        this.setState({ loading: false })
        let data = await getAll("ice cream")
        this.setState({
            recipe: data.recipes,
            loading: true,
        })
    }
    goToRecipeDetails = (id) => {
        this.props.history.push(`/recipedetails/${id}`);
    }
    render() {
        if (this.state.loading) {
            return (
                <Fragment>
                    <div className="container my-5 py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <img src={cooking1} alt=".." className="w-100"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <img src={kitchen1} alt=".." className="w-100"/>
                                </div>
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
                            {this.state.recipe.map((value, index) => {
                                return <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                    <div>
                                        <img src={value.image_url} className="w-100 brRadius mb-3" height='250' alt=" " />
                                        <button className="btn btn-outline-info btn-block" onClick={() => this.goToRecipeDetails(value.recipe_id)}>Ingredients</button>
                                        <a href={value.source_url} className="btn btn-outline-info btn-block" target="_blank" rel="noreferrer">Get Recipe</a>
                                        <h4 className="py-2 h5 secondFontColor">{value.title.split(" ").splice(0, 3).join(" ")}</h4>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
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
