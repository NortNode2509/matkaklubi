import {
  getHikesData,
  addHikeData,
  getOneHikeData,
  deleteOneHikeData,
  addParticipantToHikeData,
  getAllHikeParticipantsData
} from "../data/index.js"

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

export function getOneHike(req, res) {
  const hikeId = req.params.id
  if (!hikeId) {
    res.status(404).json({
      error: "Hike not found"
    })
    return
  }

  try {
    const hikeData = getOneHikeData(hikeId)
    res.json(hikeData)
  } catch (e) {
    res.status(404).json({
      error: "Hike id is not valid"
    })
  }
}

export function deleteOneHike(req, res) {
  const hikeId = req.params.id
  if (!hikeId) {
    res.status(404).json({
      error: "Hike not found"
    })
    return
  }

  try {
    deleteOneHikeData(hikeId)
    res.status(200).end()
  } catch (e) {
    res.status(404).json({
      error: "Error deleting hike - " + e.message
    })
  }
}

export function getAllHikeParticipants(req, res) {
  const hikeId = req.params.hikeId
  const participants = getAllHikeParticipantsData(hikeId)
  return res.json(participants)
}

export function addParticipantToHike(req, res) {
  if (!req.body.name || !req.body.email) {
    res.status(406).json({
      error: "fields name and email are mandatory"
    })
    return
  }

  addParticipantToHikeData({
    hikeId: req.params.hikeId,
    name: req.body.name,
    email: req.body.email
  })

  res.status(201).end()
}
