import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.load();

export default {
    connect: function() {
        mongoose
            .connect(
                process.env.CosmosDBConnectionString + "?ssl=true&replicaSet=globaldb",
                {
                    useCreateIndex: true,
                    useNewUrlParser: true,
                    auth: {
                        user: process.env.CosmosDBUser,
                        password: process.env.CosmosDBPassword
                    }
                }
            )
            .then(() => console.log("Connection to CosmosDB successful"))
            .catch(err => console.error(err));
    }
};
