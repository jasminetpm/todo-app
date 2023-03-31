import { API_BASE } from "./config";

export default (token) => {
    return fetch(`${API_BASE}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json()) 
}