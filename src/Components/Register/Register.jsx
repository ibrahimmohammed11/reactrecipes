import React, { Component, Fragment } from 'react'
import signupImg from "../../images/Design tools-amico.svg";
import axios from "axios";
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Register extends Component {

    render() {
        return (
            <Fragment>
                <ToastContainer />

                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h2 className="text-center mt-5">Register</h2>
                                <p className="text-center mt-3">Welcome</p>
                                <Formik
                                    initialValues={{
                                        first_name: "",
                                        last_name: "",
                                        email: "",
                                        password: "",
                                        age: ""
                                    }}
                                    validationSchema={yup.object().shape({
                                        first_name: yup.string().required(),
                                        last_name: yup.string().required(),
                                        email: yup.string().required().email(),
                                        password: yup
                                            .string()
                                            .required('Please Enter your password')
                                            .matches(
                                                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                            ),
                                        age: yup.number().required().positive().integer(),
                                    })}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        setTimeout(async () => {
                                            // alert(JSON.stringify(values, null, 2));
                                            let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signup", values);
                                            if (data.message === "success") {
                                                this.props.history.replace("/login")
                                            } else {
                                                // this.props.history.replace("/register")
                                                toast.error("Email is already exist")
                                            }
                                            console.log(data.message);
                                            setSubmitting(false);
                                            // resetForm();
                                        }, 400);
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="form-group">
                                                <Field type="text" name="first_name" placeholder="First Name" className="form-control" />
                                                <ErrorMessage name="first_name" component="div" className="alert-danger p-2 mt-1" />
                                            </div>
                                            <div className="form-group">
                                                <Field type="text" name="last_name" placeholder="Last Name" className="form-control" />
                                                <ErrorMessage name="last_name" component="div" className="alert-danger p-2 mt-1" />
                                            </div>
                                            <div className="form-group">
                                                <Field type="email" name="email" placeholder="Your Email" className="form-control" />
                                                <ErrorMessage name="email" component="div" className="alert-danger p-2 mt-1" />
                                            </div>
                                            <div className="form-group">
                                                <Field type="number" name="age" placeholder="Your Age" className="form-control" />
                                                <ErrorMessage name="age" component="div" className="alert-danger p-2 mt-1" />
                                            </div>
                                            <div className="form-group">
                                                <Field type="password" name="password" placeholder="Password" className="form-control" />
                                                <ErrorMessage name="password" component="div" className="alert-danger p-2 mt-1" />
                                            </div>


                                            <div className="form-group">
                                                <button type="submit" disabled={isSubmitting} className="btn btn-info rounded-pill px-5" >
                                                    Register
                                                </button>
                                            </div>

                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src={signupImg} alt=".." className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
