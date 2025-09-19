import { getOneHikeData, getHikesData } from "../data/index.js"

function showError(res, error) {
  res.send(`
            <h1>Andmete lugemisel tuli viga</h1>
              ${error.message}

              <a href="/">Tagasi</a>
            `)
}

export function getIndexView(req, res) {
  try {
    const hikes = getHikesData()
    res.render("index", { hikes })
  } catch (error) {
    showError(res, error)
  }
}

export function getContactView(req, res) {
  res.render("kontakt")
}

export function getHikeView(req, res) {
  //TODO - loe andmed data kihist etteantud matka id järgi ning renderda malli abil
  try {
    const hike = getOneHikeData(req.query.id)
    res.render("hike", { matk: hike })
  } catch (error) {
    showError(res, error)
  }
}

export function getAdminView(req, res) {
  res.render("admin")
}
