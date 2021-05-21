import { Request, Response } from 'express';

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_ASSISTANT_APIKEY
    }),
    serviceUrl: process.env.WATSON_ASSISTANT_URL,
});

const sessionWatson = async (req: Request, res: Response) => {
    try {
        const session = await assistant.createSession({
            assistantId: process.env.WATSON_ASSISTANT_ID
        });

        return res.json(session['result']);
    } catch (err) {
        return res.status(400).json({
            message: 'An error occurred when starting a session',
            error: err,
        });
    }

}

const sendMessageWatson = async (req: Request, res: Response) => {
    const { session_id, input } = req.body;

    const payload = {
        assistantId: process.env.WATSON_ASSISTANT_ID,
        sessionId: session_id,
        input,
    }

    try {
        const message = await assistant.message(payload)
        return res.json(message['result']);
    }
    catch (err) {
        return res.status(400).json({
            message: 'An error occurred while sending the message',
            error: err
        });
    }
}

export default {
    sessionWatson: sessionWatson,
    sendMessageWatson: sendMessageWatson
}

