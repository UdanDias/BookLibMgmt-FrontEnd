import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"
import { UpdateBooks } from "../../service/BookData";
import { UpdateMember } from "../../service/MemberData";
interface Member{
    memberId:string;
    name:string;
    email:string;
    
}
interface MemberEditProps{
    show:boolean;
    selectedRow:Member|null;
    handleOnClose:()=>void;
    handleUpdate:(member:Member)=>void
}

export const EditMember=({show,selectedRow,handleOnClose,handleUpdate}:MemberEditProps)=>{
    const[member,SetMember]=useState<Member>({
        memberId:"",
        name:"",
        email:"",
       
    })
    useEffect(()=>{if(selectedRow){
        SetMember({...selectedRow})
      }}
    ,[selectedRow])

    const handleOnchange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=e.target;
      SetMember((prev)=>({...prev,[name]:value}))
    }
    const handleSave=async()=>{
      try {
        await UpdateMember(member)
        handleUpdate(member);
        handleOnClose();
      } catch (error) {
        console.error("error updating the backend",error)
      }
      
      
    }
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}