// Imports
// ========================================
import express from 'express';
import cors from 'cors';

// Variables
// ========================================
const app = express();
const PORT = process.env.PORT || 80;
const VERSION = process.env.VERSION || '1.0.0';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

// Configurations
// ========================================
app.use(cors());

// Endpoints
// ========================================
app.get('/', (_req, res) => res.send({ version: VERSION, environment: ENVIRONMENT }));

// Server
// ========================================
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
