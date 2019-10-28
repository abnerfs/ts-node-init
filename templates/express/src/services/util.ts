import { NODE_ENV } from "./config"

export const LOG = (text: string) => {
    if(NODE_ENV === 'development')
        console.log(text);
}