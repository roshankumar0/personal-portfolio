export async function Getusers(id) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if (!data.ok) {
        throw new Error("failed to fetch")
    }
    return data.json()
}