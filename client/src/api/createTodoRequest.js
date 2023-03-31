import { API_BASE } from "./config"

export default (todo, token) => {
    return fetch(`${API_BASE}/todos`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            text: todo.text,
            complete: false
        })
    })
        .then(res => res.json(), console.log(todo))
}