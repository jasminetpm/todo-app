import { API_BASE} from "./config"

export default (todo, token) => {
    return fetch(`${API_BASE}/todos/${todo._id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
    })
}