import express from "express";
import projectRoutes from "./routes/project.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Portfolio Playground API",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
