import { getHikesData, addHikeData } from "../data/index.js"

export function getHikes(req, res) {
  const rawData = getHikesData([])
  const result = rawData.map((e) => {
    return {
      id: e.id,
      name: e.name,
      startDate: e.startDate,
      urlToPicture: e.urlToPicture
    }
  })
  res.json({ hikes: result })
}

export function addHike(req, res) {
  //TODO validate input
  addHikeData({
    name: req.body.name,
    startDate: req.body.startDate,
    maxParticipants: 10,
    urlToPicture: req.body.urlToPicture || "/assets/magimatk.png"
  })
  res.status(201).end()
}
