import axios from "axios";

const updateBooksUrl="http://localhost:8081/booklib/api/v1/book";

export const UpdateBooks=async(updatedBook:any)=>{
    try {
        const response=await axios.patch(
            `${updateBooksUrl}?bookId=${updatedBook.bookId}`,updatedBook
        );
        console.log("book updated",updatedBook);
        return response.data;
        
    } catch (error) {
        console.error("failed to update book",error)
        throw error
    }
    


}