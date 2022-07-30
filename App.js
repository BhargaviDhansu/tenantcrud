import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import TenantList from './components/TenantList';
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import EditTenantForm from './components/EditTenantForm';
import AddTenantForm from './components/AddTenantForm';

function App() {
  
const [tenants,setTenants]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/tenant/viewAllTenant').then((response)=>{
      setTenants(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);

const initialFormState = {
  
    
    tenantName: '',
    tenant_age: 0,
  
    user: {
      
      userId: 0
    
    }
  }
    
  



const [currentTenant,setCurrentTenant] 
     =useState(initialFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addTenant(tenant){
  try{
  const response=await apiClient.post('/Admin/addTenant',tenant);
    setTenants([...tenants,response.data]);
    console.log(tenants);
    
  }catch(err){
    //console.log(err)
  }
  
}



async function deleteTenant(tenant_id){
  await apiClient.delete(`/Admin/deleteTenant/${tenant_id}`);
    setTenants(tenants.filter(tenant=>tenant.tenant_id !== tenant_id));
  }
  
  const editTenant=(tenant)=>{

    setEditing(true);
      setCurrentTenant
      ({tenant_id:tenant.tenant_id,tenant_age:tenant.tenant_age,tenantName:tenant.tenantName})
     
  }
  
  const updateTenant= (tenant_id,updatedTenant)=>{
  
    setEditing(false);
    apiClient.put(`/Admin/updateTenant/${tenant_id}`,updatedTenant).then((response)=>
    {
  
      console.log('tenant updated');
      setTenants(tenants.map((tenant)=>
    (tenant.tenant_id === tenant_id ? updatedTenant : tenant)));

    })
    
  }
  
  
  
  
  return (<div>
    <div className='container'>
    <h1>Tenant Crud app with hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        {editing ? (
        <div>
          <h2>Edit Tenant Form </h2>
          <EditTenantForm
           setEditing={setEditing}
           currentTenant={currentTenant}
           updateTenant={updateTenant}
           />
           </div>):(

    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tenants" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tenants"} className="nav-link">
              Tenants
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addTenant"} className="nav-link">
              Add Tenant
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<TenantList 
    tenantData={tenants} 
         editTenant={editTenant}
         deleteTenant={deleteTenant} />} ></Route>
          <Route exact path="addTenant" element={<AddTenantForm addTenant={addTenant}/>} />
         
         <Route path='/tenants' element={<TenantList 
    tenantData={tenants} 
         editTenant={editTenant}
         deleteTenant={deleteTenant} />}>

         </Route>
         <Route path="/tenants/:tenant_id" element={<EditTenantForm /> }></Route>
        </Routes>
      </div>
    
    </BrowserRouter>
    )}</div></div></div></div>
)}

export default App;