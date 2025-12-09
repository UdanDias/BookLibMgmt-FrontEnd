import { useEffect, useState } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";

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
    const [staff,SetStaff]=useState<Staff>({
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
        SetStaff((prev)=>({...prev,[name]:value}))
    }
    useEffect(()=>{
        if(selectedRow){
            SetStaff({...selectedRow})
        }
        
},[selectedRow])
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Staff</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FloatingLabel controlId="floatingInput" label="Staff Id" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="staffId"
                            value={staff.staffId}
                            onChange={handleOnChange}
                            readOnly
                        />
                        </FloatingLabel>
                    
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={staff.firstName}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={staff.lastName}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="email"
                            value={staff.email}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        <FloatingLabel controlId="floatingInput" label="Joined Date" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="joinDate"
                            value={staff.joinDate}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        <FloatingLabel controlId="floatingInput" label="Last Update Date" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="lastUpdateDate"
                            value={staff.lastUpdateDate}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="phone"
                            value={staff.phone}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        <FloatingLabel controlId="floatingInput" label="Role" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="role"
                            value={staff.role}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
            
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    update
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}