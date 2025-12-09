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
const UpdateMember=async(updatedMember:any)=>{
   try {
        const response=await axios.patch(`${baseUrl}?memberId=${updatedMember.memberId}`,updatedMember)
        console.log("successfully fetched updated payload")
        return response.data
   } catch (error) {
        console.error("failed to update member",error)
   } 
}
const DeleteMember=async(memberId:string)=>{
   try {
        const response=await axios.delete(`${baseUrl}?memberId=${memberId}`)
        console.log("successfully deleted  member")
        return response.data
   } catch (error) {
        console.error("failed to delete member",error)
   } 
}
const AddMember=async(member:any)=>{
     try {
          const response=await axios.post(baseUrl)
          return response.data;
          
     } catch (error) {
          console.error("Error sending post request",error)
     }
     
}
export {GetAllMembers,UpdateMember,DeleteMember,AddMember}