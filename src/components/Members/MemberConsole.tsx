import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap"
import { GetAllMembers } from "../../service/MemberData";

interface Member{
    memberId:string;
    name:string;
    email:string;
    memberShipDate:string;
}
export const MemberConsole=()=>{
    
    const [member,SetMember]=useState<Member[]>([])
    const tHeads=[
        "Member Id",
        "Name",
        "Email",
        "MemberShip Date"
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
    return(
        <>
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
                            <div className="d-flex gap-2 ">
                                <Button variant="outline-secondary">Edit</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </div>
                            
                        </tr>
                    ))}
                    <tr>

                    </tr>
                </tbody>
            </Table>
        </>
    )
}