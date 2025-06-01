require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const formSubmitRoutes = require('./routes/formData')

// express app
const mernApp = express();

// middlewares
mernApp.use(express.json());

// for allowing multiple origins:
const allowedOrigins = ['http://localhost:5173', 'https://deepakmadhurdev.netlify.app/'];
mernApp.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));

// to allow all origins in development or even in production if needed, use this:
// mernApp.use(cors());


mernApp.use((req, res, next) => {
    console.log(req.path + ' ' + req.method);
    next();
})

// routes
mernApp.use('/api/form-submit', formSubmitRoutes);

mernApp.get('/', (req, res) => {
    res.send({
        activeStatus: true,
        error: false,
    })
})

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        if (process.env.NODE_ENV !== 'serverless') {
            mernApp.listen(process.env.PORT, () => {
                console.log("connected to db & listening to port", process.env.PORT, "!!");
    })} else {
            console.log("✅ Connected to Database.");
        }
    })
    .catch((error) => {
        console.log("❌ Database error:", error);
    });

module.exports = mernApp;