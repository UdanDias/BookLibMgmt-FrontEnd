import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetBooks } from "../service/GetBooks";
import { EditBook } from "./EditBook";
import { DeleteBook } from "../service/DeleteBook";
import { AddNewBook } from "./AddNewBook";
import { AddBook } from "../service/AddBook";

const tHeads=[
    "Book Id",
    "Book Name",
    "Author",
    "Edition",
    "Publisher",
    "Isbn",
    "Price",
    "Total Quantity",
    "Available Quantity",
    "Last Update Date",
    "Last Update Time"
]
interface Book{
    bookId:string;
    bookName:string;
    author:string;
    edition:string;
    publisher:string;
    isbn:string;
    price:string;
    totalQty:string;
    availableQty:string;
    // lastUpdateDate:string;
    // lastUpdateTime:string;
}
export const BookConsole=()=>{
    const[book,SetBook]=useState<Book[]>([])
    const [selectedRow,SetSelectedRow]=useState<Book|null>(null);
    const [showEditBookForm,SetShowEditBookForm]=useState(false);
    const [showAddBookForm,SetShowAddBookForm]=useState(false)

    const loadData=async()=>{
            const bookDetails=await GetBooks()
            console.log("Book data loaded");
            SetBook(bookDetails)

    }
    useEffect(()=>{
        
        loadData();
        
    },[])
    const handleEdit=(row:Book)=>{
        SetSelectedRow(row);
        SetShowEditBookForm(true);

    }
    const handleEditClose=()=>{
        SetShowEditBookForm(false)
        
    }
    const handleAddClose=()=>{
        SetShowAddBookForm(false)
        
    }

    const handleUpdate=(updatedBook:Book)=>{
        const updatedBooksDetails=book.map((row)=>(
            row.bookId===updatedBook.bookId?updatedBook:row
        ))
        SetBook(updatedBooksDetails)
        SetShowEditBookForm(false)
        SetSelectedRow(null)
        loadData()

    }
    const handleDelete=async(bookId:string)=>{
        try {
            await DeleteBook(bookId)
            console.log("book deleted successfully")
            SetBook(book.filter((book)=>book.bookId!==bookId))
            
        } catch (error) {
            console.error("error deleteing book",error)
        }
    }
    const handleAdd=(newBook:Book)=>{
        SetBook((prevData)=>[...prevData,newBook])
        loadData()
        SetShowAddBookForm(false);
        
        
    }
    


    return(
        <>
        <div className="d-flex justify-content-end p-3">
            <Button variant="outline-success" onClick={()=>SetShowAddBookForm(true)}>Add</Button>

        </div>
        <Table striped bordered hover>
        <thead>
            <tr>
                {tHeads.map((tHead)=>(
                    <th>{tHead}</th>
                ))
                }
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {book.map((row)=>(
                <tr key={row.bookId}>{
                    Object.values(row).map((cell,index)=>(
                        <td key={index}>{cell}</td>
                    ))}
                    <div className="d-flex gap-2">
                        <td><Button variant="outline-secondary"onClick={()=>handleEdit(row)}>Edit</Button></td>
                        <td><Button variant="outline-danger" onClick={()=>handleDelete(row.bookId)}>Delete</Button></td>

                    </div>
                </tr>
            ))}
              
        </tbody>
        </Table>
        <EditBook
        show={showEditBookForm}
        selectedRow={selectedRow}
        handleOnClose={handleEditClose}
        handleUpdate={handleUpdate}
        />
        <AddNewBook
        show={showAddBookForm}
        handleOnClose={handleAddClose}
        handleAdd={handleAdd}
        loadData={loadData}
        
        />
        </>
        
    );
}