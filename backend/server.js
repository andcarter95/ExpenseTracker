const express = require("express");
const session = require("express-session");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const categoriesRoutes = require("./routes/categoriesRoute")

const app = express();
const port = process.env.PORT || 5000;
const { prisma } = require("./constats/config");
const PrismaStore = require("./lib/index")(session);

//CORS
app.use(
    cors({
        origin: ["http://localhost:3000", "https://localhost:5000"],
        methods: ["POST", "PUT", "OPTIONS", "HEAD", "DELETE", "PATCH"],
        credentials: true,
    })
)

//SESSIONS
app.use(
    session({
        name: "postgres",
        secret: "postgres",
        resave: false,
        saveUninitialized: false,
        store: new PrismaStore({ client: prisma }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            secure: false,
        },
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", transactionRoutes)
app.use("/api", categoriesRoutes)

app.listen(port, () => {
    console.log(`SERVER STARTED : ${port}`);
})