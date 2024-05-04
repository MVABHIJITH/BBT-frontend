import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        < >
            <div style={{ backgroundColor:'#3D3834' }}>
                <div className="row text-white p-4 " >
                    <div className="col-lg-4 d-flex">
                        <h4 className='ms-3'> FOLLOW US </h4>
                        <div className='text -center mt-1'>
                            <i className="fa-brands fa-instagram ms-5"></i>
                            <i className="fa-brands fa-facebook  ms-4"></i>
                            <i className="fa-brands fa-youtube  ms-4"></i>
                        </div>
                    </div>
                    <div className="col-lg-8 text-end">
                        <input className='rounded' style={{ width: '250px', height: '40px' }} type="text" placeholder='  Enter your email for updates' />
                        <button className='btn btn-primary rounded ms-4'>SUBMIT</button>
                    </div>
                </div>
            </div>
            <div className=' p-4' style={{ backgroundColor: 'black' }}>
                <div className="row text-white mt-2">
                    <div className="col-lg-3 p-3">
                        <h5 className='fw-bolder'>BBT WORLD</h5>
                        <hr />
                        <h6>Why Us</h6>
                        <h6>About US</h6>
                        <h6>The Team</h6>
                        <h6>Career</h6>
                        <h6>BBT Squad</h6>
                    </div>
                    <div className="col-lg-3  p-3">
                        <h5 className='fw-bolder'>GENERAL</h5>
                        <hr />
                        <h6>Sell Car</h6>
                        <h6>FAQs</h6>
                        <h6>Videos</h6>
                        <h6>Blogs</h6>
                        <h6>Finance & Insurance</h6>
                        <h6>Auto Guide</h6>
                    </div>
                    <div className="col-lg-3 p-3 ">
                        <h5 className='fw-bolder'>BRANDS</h5>
                        <hr />
                        <h6>Used BMW</h6>
                        <h6>Used Benz</h6>
                        <h6>Used Ferrari</h6>
                        <h6>Used Jaguar</h6>
                        <h6>Used Jeep</h6>
                        <h6>Used Land Rover</h6>
                    </div>
                    <div className="col-lg-3 p-3 ">
                        <h5 className='fw-bolder'>STYLE</h5>
                        <hr />
                        <h6>Used SUV</h6>
                        <h6>Used Sedan</h6>
                        <h6>Used Sports</h6>
                        <h6>Used MUV-MPV</h6>
                        <h6>Used Coupe</h6>
                        <h6>Used Convertible</h6>
                    </div>
                </div>
                <p className='text-center text-white mt-3 fw-bolder' >Copyright © 2024 Big Boy Toyz</p>
            </div>
        </>
    )
}

export default Footer