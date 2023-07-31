import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


import router from './Routes/ether-route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/ethers",router)

const PORT = process.env.PORT || 8086;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

//  0x1DaedEd0AAa73aF942b3B17aa6b7D7EBacAf41A4