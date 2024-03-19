// app.js
import dbConnect from './config/connectDB.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import Routes from './Routes/routes.js'
const app = express();

app.use(morgan('dev'));
dbConnect();

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({ extended: true, limit:"50mb" }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
// Routes setup
app.use('/',Routes)

// Start the server
const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
