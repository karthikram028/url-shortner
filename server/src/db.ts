import mongoose from "mongoose";
import config from "config";

async function db() {
    const dbUri = config.get("dbUri") as string;
    console.log(dbUri);
    try{
        await mongoose.connect(dbUri,).then(() =>{console.log(`DB connected to ${dbUri}`);
        });
    }
    catch(err){
        console.error(err);
    }
    
}
export default db;