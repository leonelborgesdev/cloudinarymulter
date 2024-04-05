import {upload, uploadToCloudinary } from '../cloudinary/cloudinary'; //the file path where you had written this functions in earlier

import { Request, Response, Router } from "express";

const router=Router()

router.post("/upload", upload.array('images', 5),  uploadToCloudinary, async (req: Request, res: Response) => {
    try {
        const cloudinaryUrls = req.body.cloudinaryUrls;
        if (cloudinaryUrls.length === 0) {
            console.error('No Cloudinary URLs found.');
            return res.status(500).send('Internal Server Error');
        }
       const images = cloudinaryUrls;
       return res.send(images)

    } catch (error) {
        return res.status(500).json({ error});
    }
});

export default router