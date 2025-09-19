async function registrationToHike(hikeId) {
  const nameEl = document.getElementById("participantName")
  const emailEl = document.getElementById("participantEmail")

  const newParticipant = { name: nameEl.value, email: emailEl.value }

  if (!hikeId) {
    hikeId = new URLSearchParams(window.location.search).get("id")
  }

  const response = await fetch(
    `http://localhost:3700/api/matkad/${hikeId}/osalejad`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newParticipant)
    }
  )

  if (!response.ok) {
    //TODO halda viga
    return
  }

  nameEl.value = ""
  emailEl.value = ""

  alert("Salvestatud")
}
