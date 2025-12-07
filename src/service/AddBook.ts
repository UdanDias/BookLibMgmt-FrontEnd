import axios from "axios";

const addUrl="http://localhost:8081/booklib/api/v1/book";
export const AddBook=async(newBook:any)=>{
    
    try {
        const response=await axios.post(
        addUrl,newBook
        );
        console.log("new Book Data sent successfully");
    return response.data;
    } catch (error) {
        console.error("failed to add Book data ", error)
        throw error;
    }
}