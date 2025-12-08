import { useState } from "react";
import { Button, Modal } from "react-bootstrap"
interface Member{
    memberId:string;
    name:string;
    email:string;
    memberShipDate:string;
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
        memberShipDate:""
    })
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
          <Button variant="primary" onClick={()=>handleUpdate(member)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}