import React, { createContext, useEffect, useState } from 'react'
import { Card, Carousel, Modal } from 'react-bootstrap'
import { SERVER_URL } from '../Services/serverURL';
import { removeCarAPI } from '../Services/AllAPI';
import { addResponseContext } from '../Context/ContextAPI';
import { toast } from 'react-toastify';


function DisplayCar({ displaydata }) {

    const { addresponse, setAddResponse } = createContext(addResponseContext)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        // getAllcar()
    }, [addresponse])




    return (
        < >
            <Card className='mb-5 mt-5 ms-5 shadow-lg' style={{ width: '500px', }}>
                <div className='p-3'>
                    <Card.Img onClick={handleShow} width={"200px"} height={'250px'} variant="top" src={`${SERVER_URL}/uploads/${displaydata?.carImage[0]}`} />
                </div>
                <Card.Body>
                    <Card.Title className='text-center bolder fs-1 text-danger' >{displaydata?.carname} </Card.Title>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6 py-3">
                            <h5>{`FUEL TYPE :${displaydata?.fuel}`}</h5>
                            <h5>{`REG YEAR :${displaydata?.year}`}</h5>
                            <h5>{`PHONE NO :${displaydata?.phoneNo}`}</h5>
                        </div>
                        <div className="col-lg-6 py-3">
                            <h5>{`KM DRIVE :${displaydata?.kmdrive}`}</h5>
                            <h5>{`GEAR TYPE :${displaydata?.geartype}`}</h5>
                            <h5>{`MODEL :${displaydata?.model}`}</h5>
                        </div>
                        <hr />
                        <div className='text-center p-2 d-flex justify-content-between'>
                            <h2>{`PRICE :${displaydata?.price}`} </h2>
                            <a href="https://web.whatsapp.com/"> <button style={{ borderRadius: '15px' }} className='btn btn-success'><i className="fa-brands fa-square-whatsapp"></i>
                            </button>
                            </a>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Modal size='lg' show={show} onHide={handleClose}   >
                <Modal.Header closeButton>
                    <Modal.Title>{displaydata?.carname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img height={'500px'} width={"100%"} src={`${SERVER_URL}/uploads/${displaydata?.carImage[0]}`} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img height={'500px'} width={"100%"} src={`${SERVER_URL}/uploads/${displaydata?.carImage[1]}`} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img height={'500px'} width={"100%"} src={`${SERVER_URL}/uploads/${displaydata?.carImage[2]}`} alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="float-start mt-2 me-auto ">
                        <h1></h1>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DisplayCar