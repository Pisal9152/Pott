import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import allDataRoute from "./routes/all_data.js";


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//middleware
app.use("/all_data", allDataRoute);

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
