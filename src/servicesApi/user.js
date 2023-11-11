import { httpAxios } from "@/helper/httpsaxious";

export async function User(getdatainparameter) {
    const result = await httpAxios.post('/api/user',getdatainparameter).then((res) => res.data)
    return result
}