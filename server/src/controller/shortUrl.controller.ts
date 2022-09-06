import { Request,Response } from "express";
import analytics from "../models/analytics.model";
import shortUrl  from "../models/shortUrl.model";


export async function createShortUrl(req: Request, res: Response) {
    
    // get the destination url
    const {destination} = req.body;

    //create a short url
    const newUrl = await shortUrl.create({destination});

    // return the short url
    return res.send(newUrl);
}


export async function handleRedirect(req: Request, res: Response)
{
    console.log("Short Request Received")
    
    const {shortId} = req.params

    const short = await shortUrl.findOne({shortId}).lean()

    if(!short){
        return res.sendStatus(404)
    }

    analytics.create({shortUrl: short._id})

    console.log("URL Short:",shortUrl)

    return res.redirect(short.destination)
}


export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.find({}).lean();
  
    return res.send(data);
  }