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
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
                >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
    );
}