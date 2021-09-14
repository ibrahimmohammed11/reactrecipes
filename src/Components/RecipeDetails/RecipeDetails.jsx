import React, { Component, Fragment } from 'react';
import axios from 'axios';
import recipeee from "../../images/Street-Food-pana.svg";
import Styles from "./RecipeDetails.module.css";
export default class RecipeDetails extends Component {
    state = {
        ingredients: [],
        image: '',
        title: '',
        loading: false,
    };

    getRecipeDetails = async (id) => {
        this.setState({ loading: false })
        let { data } = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        this.setState({
            ingredients: data.recipe.ingredients,
            image: data.recipe.image_url,
            title: data.recipe.title,
            loading: true,
        })
    }
    componentDidMount() {
        let { id } = this.props.match.params;
        this.getRecipeDetails(id)
    }

    render() {
        if (this.state.loading) {
            return (
                <Fragment>
                    <div className="container">
                        <h2 className="my-5 pt-5 text-center">Ingredients:</h2>
                        <h4 className="text-info mt-3 mb-2">{this.state.title.split(" ").splice(0, 3).join(" ")} :</h4>
                        <div className="row">
                        <div className="col-lg-4 col-md-6">
                                <div>
                                    <img src={this.state.image} className={`w-100 mt-5 ${Styles.detRadius}`} alt=" " />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5">
                                {this.state.ingredients.map((value, index) => {
                                    return <div key={index} >
                                        <li>{value}</li>
                                    </div>
                                })}
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div>
                                    <img src={recipeee} alt=".." className="w-100"/>
                                </div>
                            </div>
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
