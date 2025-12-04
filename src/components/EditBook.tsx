import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

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
        avaiableQty:0,
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
                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInput" type="text" placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Book Id</label>
                </Form.Floating>
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