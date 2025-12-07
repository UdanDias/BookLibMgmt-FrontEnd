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
interface BookAddProps{
    show:boolean;
    handleOnClose:()=>void;
    handleAdd:(newBook:Book)=>void;
}
export const AddNewBook=({show,handleOnClose,handleAdd}:BookAddProps)=>{
    const[book,SetBook]=useState<Book>({}as Book);

    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        SetBook({...book,[e.target.name]:e.target.value})
    }
    const handleSave=async()=>{
        const response=await AddBook(book)
        handleAdd(book)
        handleOnClose();
    }

    return (
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
                                value={book.bookId}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Book Name" className="mb-3">
                            <Form.Control
                                type="text"
                                name="bookName"
                                value={book.bookName}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Author" className="mb-3">
                            <Form.Control
                                type="text"
                                name="author"
                                value={book.author}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Edition" className="mb-3">
                            <Form.Control
                                type="text"
                                name="edition"
                                value={book.edition}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Publisher" className="mb-3">
                            <Form.Control
                                type="text"
                                name="publisher"
                                value={book.publisher}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Isbn" className="mb-3">
                            <Form.Control
                                type="text"
                                name="isbn"
                                value={book.isbn}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                            <Form.Control
                                type="number"
                                name="price"
                                value={book.price}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Total Quantity" className="mb-3">
                            <Form.Control
                                type="text"
                                name="totalQty"
                                value={book.totalQty}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Available Quantity" className="mb-3">
                            <Form.Control
                                type="text"
                                name="availableQty"
                                value={book.availableQty}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Last Update Date" className="mb-3">
                            <Form.Control
                                type="text"
                                name="lastUpdateDate"
                                value={book.lastUpdateDate}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Last Update Time" className="mb-3">
                            <Form.Control
                                type="text"
                                name="lastUpdateTime"
                                value={book.lastUpdateTime}
                                onChange={handleOnChange}
                            />
                            
                        </FloatingLabel>

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleOnClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>handleSave()}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}