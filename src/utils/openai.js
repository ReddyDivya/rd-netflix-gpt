import OpenAI from "openai";
import {OPENAI_KEY} from "./constants";

const openai = new OpenAI({
    apiKey : OPENAI_KEY,

    //We should make OpenAI api calls through server from backend, but we are doing from client which is not a right practice, that's the reason we are configuring.
    dangerouslyAllowBrowser: true,
})

export default openai;
