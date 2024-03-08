const express = require('express');
const connectDB = require('./config/db');
const errorMiddleware = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());


app.use('/api/users', userRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
