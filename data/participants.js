let allParticipants = [
  {
    id: 1,
    hikeId: 2,
    name: "Mati Matkaja",
    email: "mati@matk.ee"
  },
  {
    id: 2,
    hikeId: 2,
    name: "Kati Matkaja",
    email: "kati@matk.ee"
  },
  {
    id: 3,
    hikeId: 3,
    name: "Mati Matkaja",
    email: "mati@matk.ee"
  }
]

export function getAllHikeParticipantsData(hikeId) {
  return allParticipants.filter((e) => e.hikeId === Number(hikeId))
}

export function addParticipantToHikeData({ hikeId, name, email }) {
  const newParticipantRecord = {
    id: allParticipants.length + 1,
    hikeId: Number(hikeId),
    name,
    email
  }

  allParticipants.push(newParticipantRecord)
}
