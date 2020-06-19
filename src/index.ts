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
const APP_VERSION_LABEL = process.env.APP_VERSION_LABEL || '';
const DEPLOYMENT_ID = process.env.DEPLOYMENT_ID || '';
const SERIAL = process.env.SERIAL || '';

// Configurations
// ========================================
app.use(cors());

// Endpoints
// ========================================
app.get('/', (_req, res) =>
  res.send({
    version: VERSION,
    environment: ENVIRONMENT,
    appVersionLabel: APP_VERSION_LABEL,
    deploymentId: DEPLOYMENT_ID,
    serial: SERIAL
  })
);

// Server
// ========================================
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
