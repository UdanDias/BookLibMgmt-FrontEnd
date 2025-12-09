import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface Staff{
    staffId:string;
    firstName:string;
    lastName:string;
    email:string;
    joinDate:string;
    lastUpdateDate:string;
    lastUpdateTime:string;
    phone:string;
    role:string;
}
interface EditStaffProps{
    show:boolean;
    selectedRow:Staff|null;
    handleClose:()=>void;
    handleUpdate:(updatedStaff:Staff)=>void
}
export const EditStaff=({show,selectedRow,handleClose,handleUpdate}:EditStaffProps)=>{
    const [newStaff,SetNewStaff]=useState<Staff>({
        staffId:"",
        firstName:"",
        lastName:"",
        email:"",
        joinDate:"",
        lastUpdateDate:"",
        lastUpdateTime:"",
        phone:"",
        role:"",
    })

    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        SetNewStaff((prev=>({...prev,[name]:value})))
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Staff</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}