import { httpAxios } from "@/helper/httpsaxious";

export async function signUp(data) {
    const result = await httpAxios.post('/api/user', data).then((res) => res.data)
    return result
}
export async function login(data) {
    const result = await httpAxios.post('/api/login', data).then((res) => res.data)
    return result
}
export async function currentUser(data) {
    const result = await httpAxios.get('/api/currentuser', data).then((res) => res.data)
    return result
}
export async function logout(data) {
    const result = await httpAxios.post('/api/logout', data).then((res) => res.data)
    return result
}