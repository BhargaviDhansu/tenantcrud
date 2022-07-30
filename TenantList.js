import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    retrieveTenants,

}from '../actions/tenants'

export default function TenantList(props){

    const dispatch=useDispatch();
          
          
          const [currentTenant,setCurrentTenant]=useState({});
          const [currentIndex,setCurrentIndex]=useState(-1);
         
          const tenants = useSelector((state)=>state.tenants);
           
      
          useEffect(()=>{
              dispatch(retrieveTenants());
            },[]);
      
          
          const refreshData=()=>{
              setCurrentTenant(null);
              setCurrentIndex(-1);
          }
       
      
          const setActiveTenant = (tenant,index)=>{
              setCurrentTenant(tenant);
              setCurrentIndex(index);
      
          }
      
        
   

    return(
        <table border='5'>
            <thead>
                <tr>
                    <th>tenant_id</th>
                    <th>tenant_age</th>
                    <th>tenantName</th>
                    <th>userId</th>
                   
                </tr>
            </thead>
        <tbody>
        {tenants?.length >0 ? (
            tenants.map((tenant)=>(
                <tr key = {tenant.tenant_id}>
                <td>{tenant.tenant_id}</td>
                <td>{tenant.tenant_age}</td>
                <td>{tenant.tenantName}</td>
                <td>{tenant.user.userId}</td>
              
                <td><button
    _        onClick={()=>props.editTenant(tenant)}
                className='button muted-button'>Edit</button></td>

               <td><button
                onClick={()=>props.deleteTenant(tenant.tenant_id)}
                className='button muted-button'>Delete</button></td>
             </tr>))):(
                <tr>
                   <td colSpan={4}>No Tenant</td>
                </tr>   
             )}
        </tbody>
        </table>
            
    )
             }                
    
