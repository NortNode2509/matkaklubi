let hikes = []

function getPageHTML() {
  const vasakPaan = getLeftPaneHTML(hikes)
  return `
    <div class="row">
       <div class="col-4">
           ${vasakPaan}
       </div>
       <div id="parem-paan-sisu" class="col-8">
           siia tuleb parem paan
       </div>
    </div>
   `
}

function getLeftPaneHTML(matkad) {
  console.log(matkad)
  let vasakPaan = ""
  let index = 0
  for (matk of matkad) {
    vasakPaan += `
       <div class="vasak-paan-valik" onclick="naitaParemPaan(${index})">
           ${matk.name}
       </div>
       `
    index += 1
  }
  return vasakPaan
}

async function renderAllPage() {
  const adminEl = document.getElementById("admin-sisu")
  await fetchHikes()
  adminEl.innerHTML = getPageHTML()
  naitaParemPaan(0)
}

async function fetchHikes() {
  const response = await fetch("/api/matkad")
  if (!response.ok) {
    console.log("Viga andmete lugemisel")
    return
  }

  const result = await response.json()
  hikes = result.hikes
}

async function fetchParticipants(hikeId) {
  const response = await fetch(`/api/matkad/${hikeId}/osalejad`)
  if (!response.ok) {
    console.log("Viga andmete lugemisel")
    return
  }

  const participants = await response.json()
  console.log(participants)
  return participants
}

function getRegistrationHtml(hikeId) {
  const registrationHtml = `
     <div>
            <input 
                type="text"
                placeholder="Nimi"
                id="participantName"
            >
            <input
                type="email"
                placeholder="email"
                id="participantEmail"
            >
            <button onclick="registrationToHike(${hikeId})">
                Registreeru matkale
            </button>
        </div>
    `

  return registrationHtml
}

async function naitaParemPaan(index) {
  const paremPaan = document.getElementById("parem-paan-sisu")
  const hike = hikes[index]
  const participants = await fetchParticipants(hike.id)

  let osalejadHTML = ""
  participants.forEach(({ email }) => {
    osalejadHTML += `
       <li>${email}  </li>
       `
  })

  const registrationHtml = getRegistrationHtml(hike.id)

  const paremPaanHtml = `
   <h3>${hike.name}</h3>
   <ol>
       ${osalejadHTML}
   </ol>
   <div class="row">
        ${registrationHtml}
   </div>
   `
  paremPaan.innerHTML = paremPaanHtml
}

renderAllPage()
//ära lisa siia enam midagi
