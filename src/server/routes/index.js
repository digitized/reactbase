import express from 'express';
import homepage from '../home.js';

const router = express.Router();

router.get('/posts', (req, res) => {
  
});

// Client
router.get('*', (req, res) => { res.send(homepage); });

export default router;
