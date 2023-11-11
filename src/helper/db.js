import mongoose from "mongoose"

export const connectDBS = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Work_manager"
        },
        )
        console.log(`connected with ${connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
