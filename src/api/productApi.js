import axiosClient from './axiosClient';

const categoryApi = {
  getAll(params) {
    const url = '/products/';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/products/';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = '/products/';
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;