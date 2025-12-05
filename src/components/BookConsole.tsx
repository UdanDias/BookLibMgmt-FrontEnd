import { useEffect, useState } from "react";
import  Table  from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { EditBook } from "./EditBook";
import { GetBooks } from "../service/GetBooks";
import { DeleteBook } from "../service/DeleteBook";
import { AddBook } from "../service/AddBook";
import {  AddBookForm } from "./AddBookForm";
{}
 
export function BookConsole(){
    interface Book{
        bookId:string;
        bookName:string;
        author:string;
        edition:string;
        publisher:string;
        isbn:string;
        price:number;
        totalQty:number;
        availableQty:number;
        lastUpdateDate:string;
        lastUpdateTime:string;

    }
   
    const [books,SetBooks]=useState<Book[]>([]);
    const [bookEdit,SetBookEdit]=useState<Book | null>(null);
    const [bookAdd,SetBookAdd]=useState(null)
    const [showEditBookForm,SetShowEditBookForm]=useState(false);
    const [showAddBookForm,SetShowAddBookForm]=useState(false);
    
    
    const tHeads:String[]=[
        "Book Id",
        "Name",
        "Author",
        "Edition",
        "Publisher",
        "ISBN",
        "Price",
        "Total Qty",
        "Available Qty",
        "Last Update Date",
        "Last Update Time",
        "Action"
    ]
    useEffect(()=>{
        const loadData= async ()=>{
            const bookDetails=await GetBooks();
            SetBooks(bookDetails)
            console.log("book edited successfullly",bookDetails);
        }
        loadData();

    },[])

    const handleEdit=(row:Book)=>{
        
        SetBookEdit(row);
        SetShowEditBookForm(true)
    }
    const handleOnEditClose=()=>{
        SetShowEditBookForm(false)
        SetBookEdit(null);
    };
    const handleOnAddClose=()=>{
        SetShowAddBookForm(false)
        SetBookEdit(null);
    };
    const handleUpdate=(updatedBook:Book)=>{
        const updatedBooks=books.map((book)=>
            book.bookId===updatedBook.bookId?updatedBook:book
        );
        SetBooks(updatedBooks);
        SetShowEditBookForm(false);
        SetBookEdit(null)
        refreshTable();
    }
    const handleDelete= async(bookId:string)=>{
        try {
            await DeleteBook(bookId);
            SetBooks(books.filter((book)=>book.bookId!==bookId))
            // refreshTable()
        } catch (error) {
            console.error("failed to delete book",error)
        }
        
    }
    const refreshTable=async()=>{
        const refreshedBooks=await GetBooks();
        SetBooks(refreshedBooks);

    }
    const handleAdd = (newBook: Book) => {
    SetBooks([...books, newBook]);  // update table UI
    SetShowAddBookForm(false);      // close modal
};


        
    return (
        <>
        <Button onClick={() => SetShowAddBookForm(true) } style={{marginRight:"10px"}} variant="outline-success">Add</Button>

        <Table striped bordered hover>
            <thead>
                <tr>
                    {tHeads.map((headings,index)=>(
                        <th key={index}>{headings}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {books.map((rows)=>(
                    <tr key={rows.bookId}>
                        {Object.values(rows).map((cell,index)=>(
                            <td key={index}>{cell}</td>
                        ))}
                        <td>
                            <div className="d-flex gap-1">
                                <Button onClick={() => handleEdit(rows) } style={{marginRight:"10px"}} variant="outline-secondary">Edit</Button>
                                <Button variant="outline-danger" onClick={()=>handleDelete(rows.bookId)}>Delete</Button>
                            </div>
                                
                            
                            
                        </td>
                        
                    </tr>
                    
                ))}
            </tbody>
        </Table>
        <EditBook
        show={showEditBookForm}
        selectedRow={bookEdit}
        handleOnClose={handleOnEditClose}
        handleUpdate={handleUpdate}
        />
        <AddBookForm
        show={showAddBookForm}
        handleOnClose={handleOnAddClose}
        handleAdd={handleAdd}/>
        </>   
    );
}