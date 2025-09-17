import {
  getAllHikeParticipantsData,
  addParticipantToHikeData
} from "./participants.js"
let allHikes = [
  {
    id: 1,
    name: "Kanuumatk Hiiumaal",
    startDate: "10.05.2026",
    maxParticipants: 10,
    urlToPicture: "/assets/syst1.jpg"
  },
  {
    id: 2,
    name: "Suusamatk Otepääl",
    startDate: "10.02.2026",
    maxParticipants: 10,
    urlToPicture: "/assets/magimatk.png"
  },
  {
    id: 3,
    name: "Jalgsimatk Kõrvemaal",
    startDate: "15.07.2026",
    maxParticipants: 10,
    urlToPicture: ""
  }
]

export function getHikesData() {
  return allHikes
}

export function getOneHikeData(id) {
  const hike = allHikes.find((elem) => {
    return elem.id == id
  })

  if (!hike) {
    throw new Error("Hike with id " + id + " does not exist")
  }

  return hike
}

export function addHikeData({
  name,
  startDate,
  maxParticipants,
  urlToPicture
}) {
  const id = allHikes.length + 1
  allHikes.push({
    id,
    name,
    startDate: startDate,
    maxParticipants,
    urlToPicture
  })
}

export function deleteOneHikeData(id) {
  allHikes = allHikes.filter((hike) => Number(id) !== hike.id)
}

export { addParticipantToHikeData, getAllHikeParticipantsData }
