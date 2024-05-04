import React, { useEffect } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import homeimage from '../assets/hom1.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

 
function Home() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        < >
            <Header />
            <Carousel fade >
                <Carousel.Item>
                    <img width={"100%"} height={"650px"} src="https://img.freepik.com/free-photo/view-wheel-car-running-high-speed_23-2150635399.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713225600&semt=ais" alt="" />
                    <Carousel.Caption>
                        <h2 style={{ fontSize: "80px" }} className='text-white fw-bolder ' >LET'S KEEP IT SIMPLE.</h2>
                        <h2 style={{ fontSize: "40px" }} className='text-white fw-bolder ' >We are the best when it comes to Exotic Cars.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={"100%"} height={"650px"} src="https://uhdwallpapers.org/uploads/cache/1518948380/bmw-i8_600x338-mm-90.jpg" alt="" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={"100%"} height={"650px"} src="https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?size=626&ext=jpg&ga=GA1.1.1292351815.1712188800&semt=ais" alt="" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='bg-white p-5'>
                <div className="row p-5 ">
                    <div className="col-lg-5 p-2 fw-bolder">
                        <h1 className='fw-bolder'>PLANNING TO SELL?</h1>
                        <h1 className='fw-bolder'>SELL US YOUR CAR</h1>
                        <h1 className='fw-bolder'>IN 29 MINUTES.</h1>
                        <div className='d-flex justify-content-between mt-5' style={{ fontSize: "30px" }}>
                            <p>  Outright  <br /><span >Sale</span> </p>
                            <p>  Best Offerin <br /> <span  >29 Minutes</span></p>
                        </div>
                        <div className='d-flex justify-content-between mt-5' style={{ fontSize: "30px" }}>
                            <p>7600+ Satisfied <br /> <span>Customers</span></p>
                            <p>Hassle Free <br /> <span>Processing</span></p>
                        </div>
                        <button className='btn-1 ms-3 rounded mt-5'>KNOW MORE <i className="fa-solid fa-arrow-right ms-5"></i></button>
                    </div>
                    <div className="col-lg-7 p-5">
                        <img height={"500px"} src={homeimage} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-black'>
                <div className="row container ms-5 p-5 mb-5">
                    <h3 className='mb-5 fw-bolder text-white'>DISCOVER BY <span className='text-danger'>STYLE</span></h3>
                    <div className="col-lg-2 mb-5">
                        <Card data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='p-3 rounded ' style={{ height: "130px" }} >
                            <Card.Img className='mt-3' variant="top" src="https://cdn.bigboytoyz.com/newcar/images/submenu-sports.png" />
                            <Card.Body>
                                <Card.Title><b>Sports</b></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="col-lg-2">
                        <Card className='p-3 rounded' style={{ height: "130px" }} >
                            <Card.Img variant="top" src="https://cdn.bigboytoyz.com/newcar/images/submenu-muv.png" />
                            <Card.Body>
                                <Card.Title><b>MUV-MPV</b></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="col-lg-2">
                        <Card className='p-3 rounded' style={{ height: "130px" }} >
                            <Card.Img className='mt-3' variant="top" src="https://cdn.bigboytoyz.com/newcar/images/submenu-sedan.png" />
                            <Card.Body>
                                <Card.Title><b>Sedan</b></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="col-lg-2">
                        <Card className='p-3 rounded' style={{ height: "130px" }}>
                            <Card.Img className='mt-2' variant="top" src="https://cdn.bigboytoyz.com/newcar/img/hybrid.png" />
                            <Card.Body>
                                <Card.Title><b>Hybrid</b></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="col-lg-2">
                        <Card className='p-3 rounded' style={{ height: "130px" }} >
                            <Card.Img variant="top" src="https://cdn.bigboytoyz.com/newcar/images/submenu-suv.png" />
                            <Card.Body>
                                <Card.Title><b>SUV</b></Card.Title>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-lg-2">
                        <Card data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='p-3 rounded' style={{ height: "130px" }}>
                            <Card.Img className='mt-2' variant="top" src="https://cdn.bigboytoyz.com/newcar/images/submenu-convertible.png" />
                            <Card.Body>
                                <Card.Title><b>Convertible</b></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <div  >
                <div className="row container ms-5 p-5 mb-5">
                    <h3 className='mb-5 fw-bolder text-black'>DISCOVER BY <span className='text-danger'>BRAND</span></h3>
                    <div className="col-lg-2 mb-3">
                        <Card className='p-3 rounded ' style={{ height: "150px" }} >
                            <Card.Img className='mt-3' variant="top" src="https://cdn.bigboytoyz.com/newcar/files/upload/brand/1600063328042-brandLogo.png" />
                        </Card>
                    </div>
                    <div className="col-lg-2">
                        <Card className='py-3 rounded' style={{ height: "150px" }} >
                            <Card.Img variant="top" src="https://cdn.bigboytoyz.com/newcar/files/upload/brand/1599125363117-image.png" />
                        </Card>
                    </div>
                    <div className="col-lg-2">
                        <Card className='p-3 rounded' style={{ height: "150px" }} >
                            <Card.Img className='mt-3' variant="top" src="https://cdn.bigboytoyz.com/newcar/files/upload/brand/1599125455406-image.png" />
                        </Card>
                    </div>
                    <div className="col-lg-2">
                        <Card className='p-3 rounded' style={{ height: "150px" }}>
                            <Card.Img className='mt-2' variant="top" src="https://cdn.bigboytoyz.com/newcar/files/upload/brand/1599125439675-image.png" />
                        </Card>
                    </div>
                    <div className="col-lg-2">
                        <Card className='py-3 rounded' style={{ height: "150px" }} >
                            <Card.Img variant="top" src="https://cdn.bigboytoyz.com/newcar/files/upload/brand/1599125415812-image.png" />
                        </Card>

                    </div>
                    <div className="col-lg-2">
                        <Card className='p-3 rounded' style={{ height: "150px" }}>
                            <Card.Img className='mt-2' variant="top" src="https://cdn.bigboytoyz.com/newcar/files/upload/brand/1599125532896-image.png" />
                        </Card>
                    </div>
                </div>
                <div className='bg-black text-white p-5'>
                    <div className='text-center fw-bolder'>
                        <h1 style={{ fontSize: "50px", fontFamily: "fantasy" }}>HOW IT WORKS</h1>
                        <p className='mt-3'>Buying used luxury cars in India was never this easy. You can now own your dream luxury car in just 4 simple <br /> <span>steps at Big Boy Toyz, India's trusted used car portal.</span></p>
                    </div>
                    <div className="row container ms-5 mt-5 p-5">
                        <div data-aos="zoom-in-right" className="col-lg-3  ">
                            <img src="https://cdn.bigboytoyz.com/new-version/assets/images/howitworks-img1.png" alt="" />
                            <h6 className='mt-5 '>BROWSE FROM OUR COLLECTION</h6>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-3 ">
                            <img src="https://cdn.bigboytoyz.com/new-version/assets/images/howitworks-img2.png" alt="" />
                            <h6 className='mt-5 '>GET TO KNOW YOUR RIDE</h6>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-3  ">
                            <img src="https://cdn.bigboytoyz.com/new-version/assets/images/howitworks-img3.png" alt="" />
                            <h6 className='mt-5 '>PAY & BOOK ONLINE OR VISIT SHOWROOM</h6>
                        </div>
                        <div data-aos="zoom-in-left" className="col-lg-3  ">
                            <img src="https://cdn.bigboytoyz.com/new-version/assets/images/howitworks-img4.png" alt="" />
                            <h6 className='mt-5 '>INSTANT PAYMENT & TRANSFER</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row container ms-5 p-5 mb-5">
                        <h3 className='mb-5 fw-bolder text-black'>DISCOVER BY <span className='text-danger'>LIFESTYLE</span></h3>
                        <div data-aos="zoom-in-right" className="col-lg-3 bg-da rk p-3 ">
                            <img className='mb-5 ms-5' src="https://cdn.bigboytoyz.com/newcar/img/performance-icon.png" alt="" />
                            <h3 className='mb-5 ms-5'><b>Perfomance</b></h3>
                            <img src="https://cdn.bigboytoyz.com/newcar/img/performance-car-icon.png" alt="" />
                        </div>
                        <div data-aos="zoom-in-up" className="col-lg-3 p-3">
                            <img className='mb-5 ms-5' src="https://cdn.bigboytoyz.com/newcar/img/ecofriendly-icon.png" alt="" />
                            <h3 className='mb-5 ms-5'><b>Eco-friendly</b></h3>
                            <img src="https://cdn.bigboytoyz.com/newcar/img/ecofriendly-car-icon.png" alt="" />
                        </div>
                        <div data-aos="zoom-in-up" className="col-lg-3 p-3">
                            <img className='mb-5 ms-5' src="https://cdn.bigboytoyz.com/newcar/img/supercar-icon.png" alt="" />
                            <h3 className='mb-5 mt-4 ms-5'><b>Sports</b></h3>
                            <img className='mt-3' src="https://cdn.bigboytoyz.com/newcar/img/supercar-car-icon.png" alt="" />
                        </div>
                        <div data-aos="zoom-in-left" className="col-lg-3">
                            <img className='mb-5 ms-5' src="https://cdn.bigboytoyz.com/newcar/img/familycar-icon.png" alt="" />
                            <h3 className='mb-5 ms-4'><b>Family Cars</b></h3>
                            <img src="https://cdn.bigboytoyz.com/newcar/img/familycar-car-icon.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>

        </>
    )
}

export default Home