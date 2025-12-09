import { useEffect, useState } from "react";
import { Modal, Form, FloatingLabel, Button } from "react-bootstrap"
import { Prev } from "react-bootstrap/esm/PageItem";
import { AddMember } from "../../service/MemberData";
interface Member{
    memberId:string;
    name:string;
    email:string;
    
}
interface AddMemberProps{
   show:boolean;
   handleOnClose:()=>void;
   handleAdd:(member:Member)=>void
}
export const AddNewMember=({show,handleOnClose,handleAdd}:AddMemberProps)=>{
  
    const [newMember,SetNewMember]=useState<Member>({
        memberId:"",
        name:"",
        email:"",
       
    })

    useEffect(()=>{
      SetNewMember({
        memberId:"",
      name:"",
      email:"",
      })
    },[show])
    const handleOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        SetNewMember((prev)=>({...prev,[name]:value}
        ))
    }
    const handleSave=async()=>{
      try {
        await AddMember(newMember);
        console.log("Successfully added a new member",newMember);
        handleAdd(newMember);
        handleOnClose()
      } catch (error) {
        console.error("error occurred while adding a member",error)
      }
      

    }
    return (
        <>
        <Modal show={show} onHide={handleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <FloatingLabel controlId="floatingInput" label="Member Id" className="mb-3" >
              <Form.Control
                type="text"
                name="memberId"
                value={newMember.memberId}
                onChange={handleOnChange}
                readOnly
              />
            </FloatingLabel> */}
          
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3" >
              <Form.Control
                type="text"
                name="name"
                value={newMember.name}
                onChange={handleOnChange}
                
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="email" className="mb-3" >
              <Form.Control
                type="text"
                name="email"
                value={newMember.email}
                onChange={handleOnChange}
                
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