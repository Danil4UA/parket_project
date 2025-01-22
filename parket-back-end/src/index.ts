import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db';
import productsRoutes from './routes/productsRoutes';

connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [`http://localhost:3000`],
  })
);

app.use('/api/products', productsRoutes);

app.get('/', (req: Request, res: Response) => {

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
