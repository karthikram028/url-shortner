
import {Express, Request, Response} from "express"
import {createShortUrl, handleRedirect, getAnalytics} from "../controller/shortUrl.controller"
import validateResource from "../middleware/validateResource";
import shortUrl from "../models/shortUrl.model";
import createShortUrlSchema from "../schemas/createShortUrl.schema";


function routes(app : Express){

    app.get('/healthcheck', (req:Request, res:Response) =>{
        return res.send("App is Healthy");
    });

    app.post("/api/url", validateResource(createShortUrlSchema),createShortUrl);

    app.get("/:shortId",handleRedirect);

    app.get("/api/analytics", getAnalytics);


}

export default routes;