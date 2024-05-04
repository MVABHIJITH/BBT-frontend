import React, { createContext, useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Header from '../components/Header';
import { addtestdriveAPI, getUserTestdriveAPI } from '../Services/AllAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addResponseContext } from '../Context/ContextAPI';
import Footer from '../components/Footer';
 
function TestDrive() {

    const { addresponse, setAddResponse } = createContext(addResponseContext)


    const [userTestdrive, setuserTestdrive] = useState([])

    const [testdriveDetails, setTestDriveDetails] = useState({
        name: "", phone: "", carmodel: "", carname: "", confdate: ""
    })


    const [show, setShow] = useState(false);

    console.log(testdriveDetails);
    const handleClose = () => {
        setShow(false);
        setTestDriveDetails({
            name: "", phone: "", carmodel: "", carname: "", confdate: ""
        })

    }
    const handleShow = () => setShow(true);
    console.log(testdriveDetails);

    useEffect(() => {
        getUserTesdrive()
    }, [addresponse,userTestdrive])

    const handleuploadTestdrive = async () => {
        const { name, phone, carmodel, carname, confdate } = testdriveDetails
        if (!name || !phone || !carmodel || !carname || !confdate) {
            toast.warning("please fill the form completely!!")
        } else {
            const reqbBody = new FormData()
            reqbBody.append("name", name)
            reqbBody.append("phone", phone)
            reqbBody.append("carmodel", carmodel)
            reqbBody.append("carname", carname)
            reqbBody.append("confdate", confdate)

            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                // api call
                try {
                    const result = await addtestdriveAPI(reqbBody, reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        setuserTestdrive(result)
                        getUserTesdrive()
                        handleClose()
                        toast.success("TestDrive Confirm successfully!");

                    } else {
                        toast.warning(result.response.data)
                    }

                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    // console.log(userTestdrive);

    const getUserTesdrive = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getUserTestdriveAPI(reqHeader)
            console.log(result);
            if (result.status == 200) {
                setuserTestdrive(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        < >
            <Header />
            <div className=' '>
                <div className='testdrive row'>
                    <div className="col-lg-6"></div>
                    <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                        <button onClick={handleShow} style={{ height: "50px", width: "150px" }} className='btn btn-danger rounded btn2'>TEST DRIVE</button>
                    </div>
                </div>
                <div>
                    <Modal size='md' centered
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title> BOOk YOUR SLOT <span className='text-primary'>Test Drive</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className=" ">
                                <div className="  py-3">
                                    <div className='mb-3'>
                                        <input value={testdriveDetails.name} onChange={(e) => setTestDriveDetails({ ...testdriveDetails, name: e.target.value })} type="text" className='form-control' placeholder='Enter your Name' />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={testdriveDetails.phone} onChange={(e) => setTestDriveDetails({ ...testdriveDetails, phone: e.target.value })} type="text" className='form-control' placeholder='Phone No' />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={testdriveDetails.carmodel} onChange={(e) => setTestDriveDetails({ ...testdriveDetails, carmodel: e.target.value })} type="text" className='form-control' placeholder='Enter your carmodel' />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={testdriveDetails.carname} onChange={(e) => setTestDriveDetails({ ...testdriveDetails, carname: e.target.value })} type="text" className='form-control' placeholder='Car Name' />
                                    </div>
                                    <div className='mb-3'>
                                        <input value={testdriveDetails.confdate} onChange={(e) => setTestDriveDetails({ ...testdriveDetails, confdate: e.target.value })} type="text" className='form-control' placeholder='Conform your Date' />
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={handleuploadTestdrive} variant="success">CONFORM</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className='container'>
                    <h1 className='mt-5 text-center text-primary fw-bolder' ><span className='text-success'>Test Drive</span> Detailes </h1>
                    <table className='table shadow mt-5'>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>MOBILE NO</th>
                                <th>CAR MODEL</th>
                                <th>CAR NAME</th>
                                <th>DATE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                userTestdrive?.length > 0 ?
                                    userTestdrive?.map(test => (
                                        <tr>
                                            <td>{test?.name}</td>
                                            <td>{test?.phone}</td>
                                            <td>{test?.carmodel}</td>
                                            <td>{test?.carname}</td>
                                            <td>{test?.confdate}</td>
                                            <td><span className='text-success' ><b>CONFIRMED</b></span></td>
                                        </tr>
                                    )) :
                                    <div className='fw-bolder text-danger m-5 text-center'>NO Test Drive yet!!</div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            <Footer />

        </>
    )
}

export default TestDrive