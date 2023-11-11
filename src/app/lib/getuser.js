export async function Getuser(id) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!data.ok) {
        throw new Error("failed to fetch")
    }
    return data.json()
}