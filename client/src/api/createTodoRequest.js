import { API_BASE, token } from "./config"

export default (todo) => {
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