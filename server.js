import "dotenv/config";
import express from "express";
import queryRoutes from "./src/routes/queryRoutes.js";

// express instance
const app = express();

// enabling json requests
app.use(express.json());

// enabling queryRoutes 
app.use("/query", queryRoutes);

// listening server on port 3000
app.listen(3000, () => {
  console.log("server runs", `http://localhost:3000`);
});
