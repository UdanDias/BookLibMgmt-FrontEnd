import axios from "axios";

const deleteUrl="http://localhost:8081/booklib/api/v1/book";
export const DeleteBook = async(bookId:string)=>{
    try {
        const response=await axios.delete(
        `${deleteUrl}?bookId=${bookId}`
        );
        return response.data;
    } catch (error) {
        console.error("failed to delete Data ",error)
        
    }
    
}