import express from "express";

import { queryController } from "../controllers/queryController.js";

// router instance
const router = express.Router();

// sets up /ask route and maps queryController to handle req, res
router.post("/ask", queryController);

export default router;
