const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const experienceRoutes = require('./routes/experienceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// aktivera cors så att andra domäner kan anropa apiet
app.use(cors());

// middleware för att tolka json i inkommande requests
app.use(express.json());

// använda api-rutterna för experiences
app.use('/api/experiences', experienceRoutes);

// anslut till mongodb och starta servern först när kopplingen är klar
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('ansluten till mongodb');
    app.listen(PORT, () => {
      console.log(`servern körs på http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('fel vid anslutning till mongodb:', err);
  });