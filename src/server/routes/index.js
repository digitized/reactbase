import express from 'express';
import homepage from '../home';

const router = express.Router();

// Example
// router.get('/route', (req, res) => {});

// Client
router.get('*', (req, res) => { res.send(homepage); });

export default router;
