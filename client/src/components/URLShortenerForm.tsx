import axios from "axios"
import React, {useState} from "react";
import {Input, Button, Box, Heading, InputGroup} from "@chakra-ui/react";
import {SERVER_ENDPOINTS} from '../config'

//@ts-ignore
function URLShortenerForm(){

    const [destination, setDestination] = useState();
    const [shortUrl, setShortUrl] = useState<{shortId: string;} | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()


        const result = await axios.post(`${SERVER_ENDPOINTS}/api/url`,{"destination":destination}).then((resp) => resp.data);

        setShortUrl(result)
        console.log(result);
    }

    return <Box position={"relative"} zIndex="2" backgroundColor={"white"} padding="6">
        <div >
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <Input onChange={(e: any) => setDestination(e.target.value)}
                placeholder="https//:example.com"/>
                <Button type="submit" >CREATE</Button>
            </InputGroup>
        </form>

        {shortUrl && (
            <a href={`http://localhost:4000/${shortUrl?.shortId}`}>
              {window.location.origin}/{shortUrl?.shortId}
            </a>
          )}
          </div>
    </Box>
}

export default URLShortenerForm;