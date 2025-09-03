import { getHikesData, addHikeData } from "../data/index.js"

export function getHikes(req, res) {
    const rawData = getHikesData([]);
    const result = rawData.map(e => {
        return {
            name: e.name, 
            start_date: e.startDate, 
            urlToPicture: e.urlToPicture 
        }
    })
    res.json({hikes: result})
}

