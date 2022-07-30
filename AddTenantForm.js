import React,{useEffect,useState} from 'react'
/* import { useDispatch } from 'react-redux' */
import { addTenant } from '../actions/tenants';



export default function AddTenantForm(props){
  /* const dispatch=useDispatch();  */

   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
  tenantName: '',
  tenant_age: 0,

  user: {
    
    userId: 0
  
  }

   
    
}
const initialUserFormState={
userId:0
}


const [user,setUser] =useState(initialUserFormState);
const handleUserIdChange=(event)=>{
   const{name,value}=event.target;
   setUser({...user,[name]:value});
   setTenant({...tenant,...user});
}

/* const [flataddress,setFlatAddress] =useState(initialFlatAddressFormState);
const handleFlatAddressIdChange=(event)=>{
   const{name,value}=event.target;
   setFlatAddress({...flataddress,[name]:value});
   setTenant({...tenant,...flataddress});
} */
 
const [tenant,setTenant]=useState(initialFormState);

const handleInputChange = (event)=>{
const {name,value} =event.target;

setTenant({...tenant,[name]:value});
}
useEffect(()=>{
   setTenant({...tenant,user})
},[user])


 
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}
const handleNameChange = (event)=>{
   setName(event.target.value)
}
const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}
const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}
*/
const submitHandler=(event)=>{event.preventDefault();

 console.log(JSON.stringify(tenant)+'from addtenantform')

props.addTenant(tenant); 
setTenant(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

{/* <label>tenant_id</label>
<input 
type='number'
name='tenant_id'
value={tenant.tenant_id}
onChange={handleInputChange}/><br/> */}

<label>tenant_age</label>
<input 
type='number'
name='tenant_age'
value={tenant.tenant_age}
onChange={handleInputChange}/><br/>

<label>tenantName</label>
<input 
type='text'
name='tenantName'
value={tenant.tenantName}
onChange={handleInputChange}/><br/>

<label>userId</label>
<input 
type='number'
name='userId'
value={user.userId}
onChange={handleUserIdChange}/><br/>






<button type='submit'>Add New Tenant</button>

</form>


</>
)


}
