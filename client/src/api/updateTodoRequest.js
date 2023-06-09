import { API_BASE } from "./config"

export default (todo, token) => {
    return fetch(`${API_BASE}/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            text: todo.text,
            complete: todo.complete
        })
    })
        .then(res => res.json(), console.log(todo))
}