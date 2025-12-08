import axios from "axios"


const baseUrl="http://localhost:8081/booklib/api/v1/member"
const GetAllMembers=async()=>{
    try {
        const response=await axios.get(`${baseUrl}/getallmembers`)
        return response.data
    } catch (error) {
        console.error("failed to get member data",error)
    }    
}
export {GetAllMembers}