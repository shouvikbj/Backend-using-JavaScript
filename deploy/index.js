require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 4000

const githubData = {
    "login": "shouvikbj",
    "id": 30182097,
    "node_id": "MDQ6VXNlcjMwMTgyMDk3",
    "avatar_url": "https://avatars.githubusercontent.com/u/30182097?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shouvikbj",
    "html_url": "https://github.com/shouvikbj",
    "followers_url": "https://api.github.com/users/shouvikbj/followers",
    "following_url": "https://api.github.com/users/shouvikbj/following{/other_user}",
    "gists_url": "https://api.github.com/users/shouvikbj/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shouvikbj/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shouvikbj/subscriptions",
    "organizations_url": "https://api.github.com/users/shouvikbj/orgs",
    "repos_url": "https://api.github.com/users/shouvikbj/repos",
    "events_url": "https://api.github.com/users/shouvikbj/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shouvikbj/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shouvik Bajpayee",
    "company": "Avionics Software Engineer @ Airbus",
    "blog": "https://shouvikbajpayee.pythonanywhere.com",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": "Gold Medalist in M.Tech in Distributed and Mobile Computing || Web apps developer || Android apps developer || Data Science and Machine Learning engineer",
    "twitter_username": null,
    "public_repos": 96,
    "public_gists": 0,
    "followers": 9,
    "following": 6,
    "created_at": "2017-07-14T16:27:25Z",
    "updated_at": "2023-12-27T08:02:36Z"
}

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/twitter", (req, res) => {
    res.send("@shouvikbajpayee")
})

app.get("/login", (req, res) => {
    res.send("<h1>Please login at chai aur code!</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai Aur Code</h2>")
})

app.get("/github", (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})