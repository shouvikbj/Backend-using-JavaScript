// const express = require("express");
import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Math Joke",
            content: "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else."
        },
        {
            id: 2,
            title: "Programming Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 3,
            title: "Dad Joke",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 4,
            title: "Coffee Joke",
            content: "Why did the coffee file a police report? It got mugged!"
        },
        {
            id: 5,
            title: "Animal Joke",
            content: "What do you call a fish wearing a crown? A kingfish!"
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})