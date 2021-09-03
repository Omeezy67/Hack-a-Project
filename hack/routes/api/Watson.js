const express = require("express")
const router = express.Router()
const AssistantV2 = require("ibm-watson/assistant/v2")
const {IamAuthenticator} = require("ibm-watson/auth")

// auth
const authenticator = new IamAuthenticator({
    apikey: process.env.WATSON_ASSISTANT_APIKEY
})

// connect to assistant
const assistant = new AssistantV2({
    version: "2021-06-14",
    authenticator: authenticator,
    url: process.env.WATSON_ASSISTANT_URL
})

// route to handle session tokens
// GET /api/watson/session
router.get("/session", async (req, res) => {
    // if success
    try {
        const session = await assistant.createSession({
            assistantId: process.env.WATSON_ASSISTANT_ID
        })
        res.status(200).json(session['result'])

    // if fail
    } catch (err) {
        console.log(err)
        res.send("There was an error processing your request.")
    }
})


// hundle messages
// POST /api/watson/message
router.post("/message", async (req, res) => {

    // payload
    payload = assistant.message({
        assistantId: process.env.WATSON_ASSISTANT_ID,
        sessionId: req.headers.session_id,
        input: {
            message_type: "text",
            text: req.body.input
        }
    })

    // success
    try {
        const message = await assistant.message(payload)
        res.status(200).json(message["result"])

    // if fail
    } catch (err) {
        console.log(err)
        res.send("There was an error processing your request.")
    }
})



module.exports = router