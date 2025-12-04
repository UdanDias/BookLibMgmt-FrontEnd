import { useEffect, useState } from "react";
import  Table  from "react-bootstrap/Table";
import { GetBooks } from "../service/GetBooks";
import Button from "react-bootstrap/Button";
import { EditBook } from "./EditBook";

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
        avaiableQty:number;
        lastUpdateDate:string;
        lastUpdateTime:string;

    }
    const [books,SetBooks]=useState<Book[]>([]);
    const[bookEdit,SetBookEdit]=useState<Book | null>(null);
    const [showEditBookForm,SetShowEditBookForm]=useState(false);

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
        alert("edited")
        SetBookEdit(row);
        SetShowEditBookForm(true)
    }
    const handleOnClose=()=>SetShowEditBookForm(false);
    const handleUpdate=(updatedBook:Book)=>{
        alert("updated successfully")
        console.log("updated book",updatedBook)
    }
        
    return (
        <>
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
                                <Button variant="outline-danger">Delete</Button>
                            </div>
                                
                            
                            
                        </td>
                        
                    </tr>
                    
                ))}
            </tbody>
        </Table>
        <EditBook
        show={showEditBookForm}
        selectedRow={bookEdit}
        handleOnClose={handleOnClose}
        handleUpdate={handleUpdate}
        />
        </>   
    );
}