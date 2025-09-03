const allHikes = [
    {
        name: 'Kanuumatk Hiiumaal',
        startDate: '10.05.2026',
        maxParticipants: 10,
        urlToPicture: '' 
    },
    {
        name: 'Suusamatk Otepääl',
        startDate: '10.02.2026',
        maxParticipants: 10,
        urlToPicture: '' 
    },
    {
        name: 'Jalgsimatk Kõrvemaal',
        startDate: '15.07.2026',
        maxParticipants: 10,
        urlToPicture: '' 
    },

]

export function getHikesData(filter) {
    return allHikes
}

export function addHikeData({ 
        name, 
        startDate, 
        maxParticipants, 
        urlToPicture
    }
) {
    allHikes.push({ 
        name, 
        startDate, 
        maxParticipants, 
        urlToPicture
    })
}