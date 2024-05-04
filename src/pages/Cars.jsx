import React, { createContext, useContext, useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import uploadimg from '../assets/add-img.jpg'
import DisplayCar from '../components/DisplayCar';
import Header from '../components/Header';
import { addCarsAPI, getAllCarAPI } from '../Services/AllAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'


function Cars() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    const [searchKey, setSearchKey] = useState("");

    const [allCars, setAllCars] = useState([]);

    const [previews, setPreviews] = useState([]);

    const [carDetails, setCarDetails] = useState({
        carname: "",
        fuel: "",
        year: "",
        kmdrive: "",
        geartype: "",
        model: "",
        phoneNo: "",
        price: "",
        carImages: []
    });

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setCarDetails({
            carname: "",
            fuel: "",
            year: "",
            kmdrive: "",
            geartype: "",
            model: "",
            phoneNo: "",
            price: "",
            carImages: []
        });
        setPreviews([]);
    };

    const handleShow = () => setShow(true);

    useEffect(() => {
        getAllCar();
    }, [searchKey]);

    const getAllCar = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        };
        try {
            const result = await getAllCarAPI(searchKey, reqHeader);
            if (result.status === 200) {
                setAllCars(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setCarDetails({
            ...carDetails,
            carImages: files
        });

        // Update previews for image files
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviews(previews);
    };

    const handleUploadcar = async () => {
        const { carname, fuel, year, kmdrive, geartype, model, phoneNo, price, carImages } = carDetails;

        if (!carname || !fuel || !year || !kmdrive || !geartype || !model || !phoneNo || !price || carImages.length === 0) {
            toast.warning("Please fill the form completely!");
            return;
        }

        const reqBody = new FormData();
        reqBody.append("carname", carname);
        reqBody.append("fuel", fuel);
        reqBody.append("year", year);
        reqBody.append("kmdrive", kmdrive);
        reqBody.append("geartype", geartype);
        reqBody.append("model", model);
        reqBody.append("phoneNo", phoneNo);
        reqBody.append("price", price);

        // Loop through the carImages array and append each file to the reqBody
        carImages.forEach((image, index) => {
            reqBody.append(`carImage`, image);
        });

        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            };

            try {
                const result = await addCarsAPI(reqBody, reqHeader);
                if (result.status === 200) {
                    handleClose();
                    getAllCar();
                    toast.success("Car uploaded successfully!");
                } else {
                    toast.warning(result.response.data);
                }
            } catch (err) {
                console.log(err);
                toast.error("An error occurred while uploading the car.");
            }
        }
    };


    return (
        < >
            <Header />
            <div className="row   p-5">
                <div className="col-lg-6">
                    <img style={{ borderRadius: '80px 30px ' }} height={"400px"} width={"100%"} src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/11/big-boy-toyz-1604696970.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                    <img style={{ borderRadius: '30px 80px' }} height={"400px"} width={"100%"} src="https://timesnext.com/content/images/wp-content/uploads/2020/04/BigBoyToyz-timesnext.jpg" alt="" />
                </div>
            </div>

            <div>

                <div className='bg-secondary py-2'>
                    <h1 className='text-center text-white mt-5 fw-bolder'>Sell your car at the <span className='text-success'>best price</span></h1>
                    <div className='text-center  mt-3'>
                        <button onClick={handleShow} className='btn btn-danger rounded mb-5'>Sell Your Car</button>
                    </div>
                    <Modal className='shadow-lg' size='lg' centered
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>ADD YOUR CAR</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div >
                                        <label>
                                            <input type="file" multiple style={{ display: 'none' }} onChange={handleFileChange} />
                                            <img style={{ height: "200px" }} className='img-fluid' src={uploadimg} alt="" />
                                        </label>

                                    </div>

                                </div>
                                <div className="col-lg-4 py-3">
                                    <div className='mb-3'>
                                        <input value={carDetails.carname} onChange={(e) => setCarDetails({ ...carDetails, carname: e.target.value })} type="text" className='form-control' placeholder='Car Name' />
                                    </div>
                                    <div className='mb-3'>
                                        <select value={carDetails.fuel} onChange={(e) => setCarDetails({ ...carDetails, fuel: e.target.value })} className='form-control text-balck'
                                            name="Fuel Type" id="Fuel Type"    >
                                            <option>Select your Fuel type</option>
                                            <option value="Petrol">Petrol</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Electric">Electric</option>
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        <input value={carDetails.year} onChange={(e) => setCarDetails({ ...carDetails, year: e.target.value })} type="text" className='form-control' placeholder='registation year' />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={carDetails.kmdrive} onChange={(e) => setCarDetails({ ...carDetails, kmdrive: e.target.value })} type="number" className='form-control' placeholder='KM driven' />
                                    </div>
                                </div>
                                <div className="col-lg-4 p-3">
                                    <div className='mb-3'>
                                        <select value={carDetails.geartype} onChange={(e) => setCarDetails({ ...carDetails, geartype: e.target.value })} className='form-control text-balck'
                                            name="Gear Type" id="Gear Type"    >
                                            <option> Select Gear Type</option>
                                            <option value="Autometic">Autometic</option>
                                            <option value="Manual">Manual</option>
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        <input value={carDetails.model} onChange={(e) => setCarDetails({ ...carDetails, model: e.target.value })} type="text" className='form-control' placeholder='model' />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={carDetails.phoneNo} onChange={(e) => setCarDetails({ ...carDetails, phoneNo: e.target.value })} type="text" className='form-control' placeholder='phone no' />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={carDetails.price} onChange={(e) => setCarDetails({ ...carDetails, price: e.target.value })} type="text" className='form-control' placeholder='price' />
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose}>
                                CLOSE
                            </Button>
                            <Button onClick={handleUploadcar} variant="primary">CONFIRM</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className='bg-black text-white p-5'>
                    <div  data-aos="zoom-in-up" className='text-center fw-bolder'>
                        <h1 style={{ fontSize: "50px", fontFamily: "fantasy" }}>HOW TO SELL YOUR USED CARS</h1>
                        <p className='mt-3'>At BBT, we strive to provide the quickest and most hassle free car selling service available. Getting a great deal on your vehicle can often be tricky, that’s why at Big Boys Toyz we’ll value your vehicle based on its condition and current market value.</p>
                    </div>
                    <div className="row container ms-5 mt-5 p-5">
                        <div data-aos="zoom-in" className="col-lg-4 p-2 ">
                            <img src="https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-instantvaluation-img.png" alt="" />
                            <h6 className='mt-5 '>INSTANT VALUATION</h6>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-4 p-2 ">
                            <img src="https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-bookappointment-img.png" alt="" />
                            <h6 className='mt-5 '>BOOK AN APPOINTMENT</h6>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-4 p-3 ">
                            <img src="https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-sllyrcarmeeting-img.png" alt="" />
                            <h6 className='mt-5 p-4 ms-5 '>SELL YOUR CAR</h6>
                        </div>
                    </div>
                </div>
                <div className='bg-secondary p-5 text-center text-white'>
                    <div>
                        <h1><b>Search Your <span className='text-success'>Cars</span></b> </h1>
                    </div>
                    <div className=' d-flex align-items-center justify-content-center  p-3 '>

                        <input style={{ width: '300px', borderRadius: "20px" }} onChange={e => setSearchKey(e.target.value)} type="text" placeholder="Search your car" className='form-control text-center'></input>
                    </div>
                </div>
                <Row className='ms-5'>
                    {allCars?.length > 0 ?
                        allCars?.map(car => (
                            <Col key={car} sm={8} md={6} lg={6}>
                                <DisplayCar displaydata={car} />
                            </Col>
                        )) :
                        <div className='fw-bolder text-danger p-5 text-center'>cars not Found!!</div>
                    }
                </Row>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

            <Footer />
        </>
    )
}

export default Cars