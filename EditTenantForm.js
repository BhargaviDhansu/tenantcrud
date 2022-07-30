import React , {useContext, useEffect, useState} from 'react'

export default function EditTenantForm(props){
     const [tenant,setTenant] =useState(props.currentTenant)
    
     console.log(JSON.stringify(tenant)+"from edit form")
     
     
    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setTenant({...tenant,[name]:value});
     }
     console.log(JSON.stringify(tenant)+"from handle form")

     const submitHandler=(event)=>{event.preventDefault();
       props.updateTenant(tenant.tenant_id,tenant);
    }
    console.log(JSON.stringify(tenant)+"from submit form")
    
   

     return (
        <form onSubmit={submitHandler}>
         
<label>tenant_id</label>
<h1>{props.currentTenant.tenant_id}</h1>



<label>tenant_age</label>
<input 
type='number'
name='tenant_age'
value={tenant.tenant_age}
onChange={handleInputChange}/>

<label>tenantName</label>
<input 
type='text'
name='tenantName'
value={tenant.tenantName}
onChange={handleInputChange}/>


<button>Update Tenant</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )
}