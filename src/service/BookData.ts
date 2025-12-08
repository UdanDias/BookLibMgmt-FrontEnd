import axios from "axios";

const baseUrl="http://localhost:8081/booklib/api/v1/book";
const AddBook=async(newBook:any)=>{
    
    try {
        const response=await axios.post(
        baseUrl,newBook
        );
        console.log("new Book Data sent successfully");
    return response.data;
    } catch (error) {
        console.error("failed to add Book data ", error)
        throw error;
    }
}
const DeleteBook = async(bookId:string)=>{
    try {
        const response=await axios.delete(
        `${baseUrl}?bookId=${bookId}`
        );
        return response.data;
    } catch (error) {
        console.error("failed to delete Data ",error)
        
    }
    
}
const GetBooks= async()=>{
    try {
        const response=await axios.get(`${baseUrl}/getallbooks`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("failed to get the book data",error);
        throw error;
        
    }
}
const UpdateBooks=async(updatedBook:any)=>{
    try {
        const response=await axios.patch(
            `${baseUrl}?bookId=${updatedBook.bookId}`,updatedBook
        );
        console.log("book updated",updatedBook);
        return response.data;
        
    } catch (error) {
        console.error("failed to update book",error)
        throw error
    }
  
}
export {AddBook,DeleteBook,GetBooks,UpdateBooks}