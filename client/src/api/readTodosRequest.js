import { API_BASE, token } from "./config";

export default () => {
    return fetch(`${API_BASE}/todos`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json()) 
}