import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../Services/AllAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
 
function Landing({ insideRegister }) {

    const navigate = useNavigate()

    const [userInputs, setUserInputs] = useState({
        username: "", email: "", password: ""
    })
    console.log(userInputs);

    const handleRegister = async (e) => {
        e.preventDefault()
        if (userInputs.username && userInputs.email && userInputs.password) {
            try {
                const result = await registerAPI(userInputs)
                console.log(result);
                if (result.status == 200) {
                    toast.success(`Welcome.. ${result.data.username}...please login to explore our website!!`)
                    setUserInputs({ username: "", email: "", password: "" })
                    setTimeout(() => {
                        navigate('/')
                    }, 2000)
                } else {
                    toast.error(result.response.data)
                    setTimeout(() => {
                        setUserInputs({ username: "", email: "", password: "" })
                    }, 2000)
                }
            } catch (err) {
                console.log(err);
            }

        } else {
            toast.warning("Please fill the form completely!! ")
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (userInputs.email && userInputs.password) {
            // api call
            try {
                const result = await loginAPI(userInputs)
                if (result.status == 200) {
                    // store exisitingUser and token
                    if (result.data.existingUser.isAdmin == true) {
                        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                        sessionStorage.setItem("token", result.data.token)
                        toast.success(`Welcome..${result.data.existingUser.username}`)
                        setUserInputs({ username: "", email: "", password: "" })
                        setTimeout(() => {
                            navigate('/admindashbord')
                        }, 2000);
                    } else {
                        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                        sessionStorage.setItem("token", result.data.token)
                        toast.success(`Welcome..${result.data.existingUser.username}`)
                        setUserInputs({ username: "", email: "", password: "" })
                        setTimeout(() => {
                            navigate('/home')
                        }, 2000);
                    }

                } else {
                    toast.error(result.response.data)
                }

            } catch (err) {
                console.log(err);
            }
        } else {
            toast.warning("please fill the form completely!!")
        }
    }

    return (
        < >
            <div className='bgimg1'>
                <div className='row'>
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center align-items-center  ">
                            <div className=" text-warning   ">
                                <h1 style={{ fontSize: '50px', fontFamily: "cursive" }} className='fw-bolder text-white mt-2 '><span className='text-danger'>BIG BOY</span> TOYS</h1>
                                <p className='fw-bolder mt-2 '>Sign {insideRegister ? 'up' : 'in'} to your account</p>
                                <Form>
                                    {insideRegister ? <div>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="username"
                                            className="mb-3"
                                        >

                                            <Form.Control value={userInputs.username} onChange={e => setUserInputs({ ...userInputs, username: e.target.value })} type="text" placeholder="username" />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >

                                            <Form.Control value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control value={userInputs.password} onChange={e => setUserInputs({ ...userInputs, password: e.target.value })} type="password" placeholder="Password" />
                                        </FloatingLabel>
                                    </div> :
                                        <div>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email address"
                                                className="mb-3"
                                            >

                                                <Form.Control value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} type="email" placeholder="name@example.com" />
                                            </FloatingLabel>
                                            <FloatingLabel controlId="floatingPassword" label="Password">
                                                <Form.Control value={userInputs.password} onChange={e => setUserInputs({ ...userInputs, password: e.target.value })} type="password" placeholder="Password" />
                                            </FloatingLabel>
                                        </div>}
                                </Form>
                                {
                                    insideRegister ?
                                        <div className='mt-3'>
                                            <button onClick={handleRegister} className='btn btn-success'>Register</button>
                                            <p>Already have an account? Click here to <Link className='text-info' style={{ textDecoration: 'none' }} to={'/'}><span className='text-white fw-bolder'>Login</span></Link></p>
                                        </div> :
                                        <div className='mt-3'>
                                            <button onClick={handleLogin} className='btn btn-success'>Login</button>
                                            <p className='mt-2'>New user? Click here to <Link className='text-info' style={{ textDecoration: 'none' }} to={'/register'}><span className='text-white fw-bolder'>Register</span></Link></p>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            <Footer/>

        </>
    )
}

export default Landing