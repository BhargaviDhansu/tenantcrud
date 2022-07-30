import http from "../http-common";
const getAll = () => {
  return http.get("/tenant/viewAllTenant");
};
const get = tenant_id => {
  return http.get(`/tenant/viewTenant/${tenant_id}`);
};
const create = data => {
  return http.post("/Admin/addTenant", data);
};
const update = (tenant_id,data) => {
  return http.put(`/Admin/updateTenant/${tenant_id}`,data);
};
const remove = tenant_id => {
  return http.delete(`/Admin/deleteTenant/${tenant_id}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const TenantService = {
  getAll,
  get,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default TenantService;