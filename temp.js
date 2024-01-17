
import Comment from "./Models/commentModel.js";
import wishList from "./Models/wishListModel.js";
import Package from "./Models/packageModel.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()




async function connectToDb() {
    try {
        mongoose.set('strictQuery', false);
        
        await mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true });
        await wishList.create({user:"abel",packages:[ 2,3]})
        // await Package.create([{name:"arbaminsh full tour",location:"arba minch",pricePerAdult:300,rating:3, customID: 1},{name:"adiss full tour",location:"sheger",pricePerAdult:300,rating:3,customID: 2},{name:"markos full tour",location:"amarkos",pricePerAdult:300,rating:3, customID: 3}])
        process.exit(0)    
    } catch (error) {
        console.log(error.message);
    }
}
connectToDb()