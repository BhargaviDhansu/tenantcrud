import {
    ADD_TENANT,
  RETRIEVE_TENANTS,
  UPDATE_TENANT,
  DELETE_TENANT,
  } from "../actions/types";
  const initialState = [];
  function tenantReducer(tenants = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_TENANT:
        return [...tenants, payload];
      case RETRIEVE_TENANTS:
        return payload;
      case UPDATE_TENANT:
        return tenants.map((tenant) => {
          if (tenant.tenant_id === payload.tenant_id) {
            return {
              ...tenant,
              ...payload,
            };
          } else {
            return tenant;
          }
        });
      case DELETE_TENANT:
        return tenants.filter(({ tenant_id }) => tenant_id !== payload.tenant_id);
      
      default:
        return tenants;
    }
  };
  export default tenantReducer;