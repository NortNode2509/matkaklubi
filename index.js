import express from "express"
import dotenv from "dotenv"
import * as path from "path"

import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import {
  getHikes,
  addHike,
  getOneHike,
  deleteOneHike,
  getAllHikeParticipants,
  addParticipantToHike
} from "./api_controller/index.js"
import {
  getIndexView,
  getContactView,
  getHikeView
} from "./controller/index.js"

const __dirname = dirname(fileURLToPath(import.meta.url))

dotenv.config()

const app = express()

app.use("/", express.static("public"))
app.use(express.json())

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/api/matkad", getHikes)
app.get("/api/matkad/:id", getOneHike)
app.delete("/api/matkad/:id", deleteOneHike)
app.post("/api/matkad", addHike)

app.get("/api/matkad/:hikeId/osalejad", getAllHikeParticipants)
app.post("/api/matkad/:hikeId/osalejad", addParticipantToHike)

app.get("/", getIndexView)
app.get("/kontakt", getContactView)
app.get("/matk", getHikeView)

//TODO - kõigil muudel aadressidel näita 404 lehte

const PORT = process.env.PORT || 3300

app.listen(PORT, () => {
  console.log("Listening on port " + PORT)
})
