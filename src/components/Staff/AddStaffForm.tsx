import { useEffect, useState } from "react";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import { AddStaff } from "../../service/StaffData";

interface Staff{
    staffId:string;
    firstName:string;
    lastName:string;
    email:string;
    joinDate:string;
    // lastUpdateDate:string;
    // lastUpdateTime:string;
    phone:string;
    role:string;
}
interface AddStaffFormProps{
    show:boolean;
    handleClose:()=>void;
    handleAdd:(newStaff:Staff)=>void
}
export const AddStaffForm=({show,handleClose,handleAdd}:AddStaffFormProps)=>{
    const [newStaff,SetNewStaff]= useState<Staff>({
        staffId:"",
        firstName:"",
        lastName:"",
        email:"",
        joinDate:"",
        phone:"",
        role:"",
    })

    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        SetNewStaff((prev)=>({...prev,[name]:value}));
          
    }
    const handleSave=async()=>{
        try {
            await AddStaff(newStaff);
            console.log("successfully saved staff member");
            handleAdd(newStaff);
            handleClose()
        } catch (error) {
            console.error("error while saving staff member details",error)
            throw error;
        }
        


    }
    useEffect(()=>{
        SetNewStaff({
            staffId:"",
            firstName:"",
            lastName:"",
            email:"",
            joinDate:"",
            phone:"",
            role:"",
        })
    },[show])
    return (
        <>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Staff</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                       
                    
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={newStaff.firstName}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={newStaff.lastName}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="email"
                            value={newStaff.email}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        {/* <FloatingLabel controlId="floatingInput" label="Joined Date" className="mb-3" >
                        <Form.Control
                            type="date"
                            name="joinDate"
                            value={newStaff.joinDate}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel>  */}
                        
                        <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="phone"
                            value={newStaff.phone}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
                        <FloatingLabel controlId="floatingInput" label="Role" className="mb-3" >
                        <Form.Control
                            type="text"
                            name="role"
                            value={newStaff.role}
                            onChange={handleOnChange}
                            
                        />
                        </FloatingLabel> 
            
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        
        </>
    )
    

}