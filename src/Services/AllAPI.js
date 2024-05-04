import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// register api 
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, reqBody)
}

// login api 
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, reqBody)
}

// add car 
export const addCarsAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-cars`, reqBody, reqHeader)
}

// get all car
export const getAllCarAPI = async (seacrchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-cars?search=${seacrchKey}`, "", reqHeader)
}

// remove car
export const removeCarAPI = async (carId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/remove-car/${carId}`, {}, reqHeader)
}

//add testdrive
export const alltestDriveAPI = async (details) => {
    return await commonAPI("POST", `${SERVER_URL}/testdrive`, details)
}

// add testdrive
export const addtestdriveAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-testdrive`, reqBody, reqHeader)
}

// user testdrive
export const getUserTestdriveAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-testdrive`, "", reqHeader)
}

// book cars
export const getBookCarsAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/book-cars`, "", reqHeader)
}

// remove project
export const removeTestdriveAPI = async (testdriveId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/remove-testdrive/${testdriveId}`, {}, reqHeader)
}

// admin testdrive
export const getAdminTestdriveAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-testdrive`, "", reqHeader)
}



