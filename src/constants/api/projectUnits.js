import axios from 'configs/axios'
const projectUnits = {
    getAll: (options = { params: {} }) =>
        axios.get('/project/units/v1/user/pic-onsite/', options),
    get: (id) => axios.get(`/project/units/v1/user/pic-onsite/${id}/show`),
    update: (form) =>
        axios.put(`/project/units/v1/user/pic-onsite/${form.id}`, form),
    create: (form) => axios.post(`/project/units/v1/user/pic-onsite/`, form),
    delete: (id) => axios.delete(`/project/units/v1/user/pic-onsite/${id}`),
    getVariant: (options = { params: {} }) =>
        axios.get('project/units/v1/user/pic-onsite/variant-units'),
    getProperties: (id) =>
        axios.get(`project/units/v1/user/pic-onsite/variant-units/${id}`),
    updateStatus: (form) =>
        axios.post(`project/units/v1/user/pic-onsite/change-status`, form),
    getProgress: (options = { params: {} }) =>
        axios.get('project/units/v1/user/pic-onsite/get-progress', options),
}
export default projectUnits
