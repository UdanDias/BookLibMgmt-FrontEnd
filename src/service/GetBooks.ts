import axios from "axios"


const getBooksUrl="http://localhost:8081/booklib/api/v1/book/getallbooks"

export const GetBooks= async()=>{
    try {
        const response=await axios.get(getBooksUrl);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("failed to get the book data",error);
        throw error;
        
    }
} 