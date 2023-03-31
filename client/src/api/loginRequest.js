import { API_BASE } from "./config"

export default (password) => {
    return fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            password,
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Login failed')
            }
        })
}