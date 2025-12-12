import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap"
import { DeleteStaff, GetStaff } from "../../service/StaffData";
import { EditStaff } from "./EditStaff";
import { AddStaffForm } from "./AddStaffForm";

const tHeads=[
    "Staff Id",
    "First Name",
    "Last Name",
    "Email",
    "join Date",
    "Last Update Date",
    "Last Update Time",
    "Phone",
    "Role"
]
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
export const StaffConsole=()=>{
    const [staff,SetStaff]=useState<Staff[]>([])
    const [showEditStaffForm,SetShowEditStaffForm]=useState(false)
    const [selectedRow,SetSelectedRow]=useState<Staff|null>(null)
    const [showAddStaffForm,SetShowAddStaffForm]=useState(false);

    const loadData=async()=>{
        try {
            const staffDetails=await GetStaff();
            console.log("successfully loaded data",staffDetails)
            SetStaff(staffDetails);
        } catch (error) {
            console.error("Error occured while loading data ",error)
        }
    }
    const handleEditClose=()=>{
        SetSelectedRow(null);
        SetShowEditStaffForm(false)
    }
    const handleAddClose=()=>{
        SetSelectedRow(null);
        SetShowAddStaffForm(false)
    }
    const handleUpdate=(updatedStaff:Staff)=>{
        
        const updatedStaffDetails=staff.map((staff)=>(
            staff.staffId===updatedStaff.staffId?updatedStaff:staff
        ))
        SetStaff(updatedStaffDetails);
        handleEditClose();

    }
    const handleEdit=(row:Staff)=>{
        SetSelectedRow(row)
        SetShowEditStaffForm(true); 
    }
    const handleDelete=async(staffId:string)=>{
        try {
            await DeleteStaff(staffId);
            console.log("successfully deleted");
            SetStaff(()=>(staff.filter((staffMember)=>(staffMember.staffId!==staffId))))
        } catch (error) {
            console.error("error while deleting staff member",error)
        }
        
    }
    const handleAdd=(newStaff : Staff)=>{
        SetStaff((prev)=>([...prev,newStaff]))
        loadData();
        handleAddClose()
    }

    useEffect(()=>{
        loadData();
    },[])
    return(
        <>
        <div className="d-flex justify-content-end p-3">
            <Button variant="outline-success" onClick={()=>SetShowAddStaffForm(true)}>Add</Button>
        </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {tHeads.map((heading,index)=>(
                            <th key={index}>{heading}</th>
                        ))
                        }
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staff.map((row)=>(
                            <tr key={row.staffId}>
                                {Object.values(row).map((cell,index)=>(
                                    <td key={index}>{cell}</td>
                                ))
                                }
                                <td>
                                    <div className="d-flex gap-2 p-3">
                                    <Button variant="outline-secondary" onClick={()=>handleEdit(row)}>Edit</Button>
                                    <Button variant="outline-danger" onClick={()=>handleDelete(row.staffId)}>Delete</Button>
                                    </div>
                                </td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <EditStaff
            show={showEditStaffForm}
            selectedRow={selectedRow}
            handleClose={handleEditClose}
            handleUpdate={handleUpdate}/>

            <AddStaffForm
            show={showAddStaffForm}
            handleClose={handleAddClose}
            handleAdd={handleAdd}/>
        </>
        
    )
}