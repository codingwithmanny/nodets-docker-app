// Imports
// ========================================
import express from 'express';
import cors from 'cors';

// Variables
// ========================================
const app = express();
const PORT = process.env.PORT || 80;
const VERSION = process.env.VERSION || '1.0.0';

// Configurations
// ========================================
app.use(cors());

// Endpoints
// ========================================
app.get('/', (req, res) => res.send({ version: VERSION }));

// Server
// ========================================
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
