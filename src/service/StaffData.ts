import axios from "axios"

const baseUrl="http://localhost:8081/booklib/api/v1/staff"
const GetStaff= async ()=>{
    
    try {
        const response=await axios.get(`${baseUrl}/getallstaff`)
        return response.data;
    } catch (error) {
        console.error("Error fetching data from backend",error)
    }
}
const UpdateStaff= async (updatedStaff:any)=>{
    
    try {
        const response=await axios.patch(`${baseUrl}?staffId=${updatedStaff.staffId}`,updatedStaff)
        return response.data;
    } catch (error) {
        console.error("Error updating data to backend",error)
    }
}
export{GetStaff}