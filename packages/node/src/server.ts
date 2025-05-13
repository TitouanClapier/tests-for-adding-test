import express from 'express';
import userRouter from './users';

export const app = express();

app.use(express.json());            // pour parser JSON dans body
app.use('/users', userRouter);     // ✅ ici on branche un `Router`

if (require.main === module) {
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
}
