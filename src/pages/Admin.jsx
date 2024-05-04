import React, { createContext, useEffect, useState } from 'react'
import { getAdminTestdriveAPI, removeTestdriveAPI } from '../Services/AllAPI'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Admin() {

 

    const [testdrive, setTestdrive] = useState([])

    useEffect(() => {
        getAdminTestdrive()
    }, [testdrive])


    const handleDeleteTestdrive = async (testdriveId) => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            // api call
            const result = await removeTestdriveAPI(testdriveId, reqHeader)
            if (result.status == 200) {
                getUserTesdrive()
            } else {
                console.log(result);
            }
        }
    }

    const getAdminTestdrive = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getAdminTestdriveAPI(reqHeader)
            console.log(result);
            if (result.status == 200) {
                setTestdrive(result.data)

            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        < >
            <div>
                <div className='bg-black text-center p-4'>
                    <h3 className='text-white'> ADMIN PAGE </h3>
                    <h1 style={{ fontFamily: "fantasy", fontSize: "50px" }} className='text-white '><span className='text-danger'>BIG BOY</span> TOYZ</h1>
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
                                <th>REMOVE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                testdrive?.length > 0 ?
                                    testdrive?.map(test => (
                                        <tr>
                                            <td>{test?.name}</td>
                                            <td>{test?.phone}</td>
                                            <td>{test?.carmodel}</td>
                                            <td>{test?.carname}</td>
                                            <td>{test?.confdate}</td>
                                            <td><span className='text-success' ><b>CONFIRMED</b></span></td>
                                            <td> <button onClick={() => handleDeleteTestdrive(test?._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                                            </td>
                                        </tr>
                                    )) :
                                    <div className='fw-bolder text-danger m-5 text-center'>NO Test Drive yet!!</div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </>
    )
}

export default Admin