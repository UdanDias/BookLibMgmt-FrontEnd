import { Button, Modal } from "react-bootstrap";

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
export const EditBook :React.FC<BookEditProps>=({show,selectedRow,handleOnClose,handleUpdate})=>{

    return (
        <>
      

      <Modal show={show} onHide={handleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOnClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}