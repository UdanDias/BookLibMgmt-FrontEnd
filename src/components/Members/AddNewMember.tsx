import { useState } from "react";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap"
interface Member{
    memberId:string;
    name:string;
    email:string;
    
}
export const AddNewMember=()=>{
    const [newMember,SetNewMember]=useState<Member>({
        memberId:"",
        name:"",
        email:"",
       
    })
    return (
        <>
        <Modal show={show} onHide={handleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingInput" label="Member Id" className="mb-3" >
              <Form.Control
                type="text"
                name="memberId"
                value={member.memberId}
                onChange={handleOnchange}
                readOnly
              />
            </FloatingLabel>
          
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3" >
              <Form.Control
                type="text"
                name="name"
                value={member.name}
                onChange={handleOnchange}
                
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="email" className="mb-3" >
              <Form.Control
                type="text"
                name="email"
                value={member.email}
                onChange={handleOnchange}
                
              />
            </FloatingLabel> 
            {/* <FloatingLabel controlId="floatingInput" label="MemberShip Date" className="mb-3" >
              <Form.Control
                type="text"
                name="membershipDate"
                value={member.membershipDate}
                onChange={handleOnchange}
                
              />
            </FloatingLabel>   */}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOnClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleSave()}>
            Add Member
          </Button>
        </Modal.Footer>
      </Modal>
        
        </>
    )
}