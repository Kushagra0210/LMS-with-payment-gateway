import express from 'express'
import dotenv from "dotenv"
dotenv.config();
console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running at ${PORT} in ${process.env.PORT}`);

})
