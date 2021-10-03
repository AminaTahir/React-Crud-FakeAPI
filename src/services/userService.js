import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

const remove = id => {
  
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const create = (data) => {
  return http.post(`/users`, data);
};

const update = (id, data)=> {
  return http.put(`/users/${id}`, data);
}

export default {
  getAll,
  remove,
  removeAll,
  create,
  update
};
