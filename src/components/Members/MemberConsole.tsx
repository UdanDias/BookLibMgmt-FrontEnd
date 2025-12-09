import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap"
import { DeleteMember, GetAllMembers } from "../../service/MemberData";
import { EditMember } from "./EditMember";


interface Member{
    memberId:string;
    name:string;
    email:string;
    
}
export const MemberConsole=()=>{
    
    const [member,SetMember]=useState<Member[]>([])
    const [selectedRow,SetSelectedRow]=useState<Member|null>(null);
    const [showEditMemberForm,SetShowEditMemberForm]=useState(false);
    const[showAddMemberForm,SetShowAddMemberForm]=useState(false);

    const tHeads=[
        "Member Id",
        "Name",
        "Email",
        "Membership Date"
    ]
    const loadData=async()=>{
        const loadedMembers=await GetAllMembers();
        console.log("successfully received all member data")
        SetMember(loadedMembers);
    }
    useEffect(()=>{
            loadData();    
        }
    ,[])
    const handleEdit=(row:Member)=>{
        SetSelectedRow(row);
        SetShowEditMemberForm(true)
    }
    const hanldeOnClose=()=>{
        SetSelectedRow(null)
        SetShowEditMemberForm(false)
    }
    const handleOnUpdate=(updatedMember:Member)=>{
        {
           const afterUpdateMember=member.map((member)=>(
                member.memberId===updatedMember.memberId?updatedMember:member
           ))
           SetMember(afterUpdateMember)
           hanldeOnClose()
           loadData()
        }
    }
    const handleDelete=async(memberId:string)=>{
        try {
            await DeleteMember(memberId)
            console.log("deleted member successfully")
            SetMember(member.filter((memb)=>memb.memberId!==memberId))
        } catch (error) {
            console.error("Error deleting the member",error)
        }
        
        
    }
    const handleAdd=()=>{

    }
    return(
        <>
        <Button variant="outline-secondary" onClick={()=>SetShowAddMemberForm} >Add</Button>
            <Table striped bordered hover>
                <thead>
                    <tr >
                        {tHeads.map((tHead,index)=>(
                            <th key={index}>{tHead}</th>
                        ))
                        }
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {member.map((row)=>(
                        <tr key={row.memberId}>
                            {
                                Object.values(row).map((cell,index)=>(
                                    <td key={index}>{cell}</td>
                                ))
                            }
                            <div className="d-flex gap-2 justify-content-center">
                                <Button variant="outline-secondary" onClick={()=>handleEdit(row)}>Edit</Button>
                                <Button variant="outline-danger" onClick={()=>handleDelete(row.memberId)}>Delete</Button>
                            </div>
                            
                        </tr>
                    ))}
                    <tr>

                    </tr>
                </tbody>
            </Table>
            <EditMember
                show={showEditMemberForm}
                selectedRow={selectedRow}
                handleOnClose={hanldeOnClose}
                handleUpdate={handleOnUpdate}
            />
        </>
    )
}