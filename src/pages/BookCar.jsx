import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card, Carousel, Col, Row } from 'react-bootstrap'
import { getBookCarsAPI, removeCarAPI } from '../Services/AllAPI'
import { SERVER_URL } from '../Services/serverURL'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer'
 
function BookCar() {

  const [bookCars, setBookCars] = useState([])
  console.log(bookCars);

  useEffect(() => {
    getBookCars()
  }, [])

  const getBookCars = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getBookCarsAPI(reqHeader)
      console.log(result);
      if (result.status == 200) {
        setBookCars(result.data)
        getBookCars()
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeletecar = async (carId) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      // api call
      const result = await removeCarAPI(carId, reqHeader)
      if (result.status == 200) {
        toast.success("Car Booked Succesfull ")
        // getAllcar()
      } else {
        console.log(result);
      }
    }
  }

  return (
    < >
      <Header />
      <div className='container '>
        <Row>
          {
            bookCars?.length > 0 ?
              bookCars?.map(cars => (
                <Col>
                  <Card className='mb-5 mt-5 ms-5' style={{ width: '550px', }}>
                    <div className='p-3 rounded '>
                      <div >
                        <Carousel >
                          <Carousel.Item>
                            <img height={'420px'} width={"100%"} src={`${SERVER_URL}/uploads/${cars?.carImage[0]}`} alt="" />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img height={'420px'} width={"100%"} src={`${SERVER_URL}/uploads/${cars?.carImage[1]}`} alt="" />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img height={'420px'} width={"100%"} src={`${SERVER_URL}/uploads/${cars?.carImage[2]}`} alt="" />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                    <Card.Body className='shadow  '>
                      <Card.Title className='text-center bolder fs-3 text-primary' >{cars?.carname} </Card.Title>
                      <hr />
                      <div className="row  ">
                        <div className="col-lg-6 py-3  p-2">
                          <h5>{`FUEL TYPE : ${cars?.fuel} `}</h5>
                          <h5>{`REG YEAR : ${cars?.year}`}</h5>
                          <h5>{`PHONE NO : ${cars?.phoneNo}`}</h5>
                        </div>
                        <div className="col-lg-6 py-3 bg-">
                          <h5>{`KM DRIVE : ${cars?.kmdrive} `}</h5>
                          <h5>{`GEAR TYPE : ${cars?.geartype} `}</h5>
                          <h5>{`MODEL : ${cars?.model}`}</h5>
                        </div>
                        <hr />
                        <div className='text-center p-2 d-flex justify-content-between'>
                          <h2>{`PRICE : ${cars?.price}`} </h2>
                          <button onClick={() => handleDeletecar(cars?._id)} className='btn btn-danger rounded'>BOOKING</button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
              :
              <div className='fw-bolder text-danger p-5 text-center'>cars not Found!!</div>
          }
        </Row>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

      <Footer />

    </>
  )
}

export default BookCar