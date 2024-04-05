import express, { Request, Response } from 'express';
import multer from 'multer';

// Create a Multer instance with a destination folder for file uploads
const upload = multer({ dest: 'uploads/' });

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
  }

  private routes(): void {
      this.express.post('/upload', upload.single('files'), (req: Request, res: Response) => {
            // Define a POST route for file uploads using Multer middleware
            console.log("entrooooooooooooo-------------------")
            try {
                console.log(req)
            if (!req.files) {
              return res.status(400).json({ error: 'No file uploaded' });
            }
            return res.json({ message: 'File uploaded successfully' });
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                return res.json({ message: error.message})
            }
        }
          });
  }
}

export default new App().express;