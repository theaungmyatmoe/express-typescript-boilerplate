import express, {Request, Response} from 'express';
import "dotenv/config"

export interface User {
    name: string
}


const app = express();
const port = process.env.PORT ?? 8000

app.get('/', async (req: Request, res: Response) => {
    const user: User = {
        name: "Mg Mg"
    }
    return res.json(user);
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});