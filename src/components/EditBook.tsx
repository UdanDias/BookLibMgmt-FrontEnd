import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

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
interface BookEditProps{
    show:boolean;
    selectedRow:Book|null;
    handleOnClose :() => void;
    handleUpdate :(updatedBook:Book) => void;


}
export const EditBook=({show,selectedRow,handleOnClose,handleUpdate}:BookEditProps)=>{
    const[book,SetBook]=useState<Book>({
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
    });

    useEffect(()=>{
        if(selectedRow){
            SetBook({...selectedRow})
        }
    },[selectedRow]);

    const handleOnChange = ((e :React.ChangeEvent<HTMLInputElement>)=>{
        SetBook({...book,[e.target.name]:e.target.value})
    })

    const handleSave=()=>{
        console.log("successfully updated data")
    }


    return (
        <>
      

      <Modal show={show} onHide={handleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
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
                        name="availabaleQty"
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
          <Button variant="primary" onClick={handleSave}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}