import { API_BASE, token } from "./config"

export default (todo) => {
    return fetch(`${API_BASE}/todos/${todo._id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
    })
}