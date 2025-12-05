import { useState } from "react";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import { AddBook } from "../service/AddBook";

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
    interface addBookProps{
        show:boolean;
        handleOnClose:()=>void;
        handleAdd:(newBook:Book)=>void;

    }
    
export const AddBookForm=({show,handleOnClose,handleAdd}:addBookProps)=>{
    const [newBook,SetNewBook]=useState<Book>({
        bookId:"",
        bookName:"",
        author:"",
        edition:"",
        publisher:"",
        isbn:"",
        price:0,
        totalQty:0,
        availableQty:0,
        lastUpdateDate:"",
        lastUpdateTime:""
    })

    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        SetNewBook({...newBook,[e.target.name]:e.target.value})

    }
    const handleOnSubmit=async()=>{
        const newBookDetails=await AddBook(newBook);
        handleAdd(newBookDetails);
        handleOnClose()

    }

    return(
        <>
        
            <Modal show={show} onHide={handleOnClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FloatingLabel controlId="floatingInput" label="Book Id" className="mb-3">
                            <Form.Control
                                type="text"
                                name="bookId"
                                value={newBook.bookId}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Book Name" className="mb-3">
                            <Form.Control
                                type="text"
                                name="bookName"
                                value={newBook.bookName}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Author" className="mb-3">
                            <Form.Control
                                type="text"
                                name="author"
                                value={newBook.author}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Edition" className="mb-3">
                            <Form.Control
                                type="text"
                                name="edition"
                                value={newBook.edition}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Publisher" className="mb-3">
                            <Form.Control
                                type="text"
                                name="publisher"
                                value={newBook.publisher}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Isbn" className="mb-3">
                            <Form.Control
                                type="text"
                                name="isbn"
                                value={newBook.isbn}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                            <Form.Control
                                type="number"
                                name="price"
                                value={newBook.price}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Total Quantity" className="mb-3">
                            <Form.Control
                                type="text"
                                name="totalQty"
                                value={newBook.totalQty}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Available Quantity" className="mb-3">
                            <Form.Control
                                type="text"
                                name="availableQty"
                                value={newBook.availableQty}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Last Update Date" className="mb-3">
                            <Form.Control
                                type="text"
                                name="lastUpdateDate"
                                value={newBook.lastUpdateDate}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Last Update Time" className="mb-3">
                            <Form.Control
                                type="text"
                                name="lastUpdateTime"
                                value={newBook.lastUpdateTime}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleOnClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleOnSubmit}>
                    Add
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}