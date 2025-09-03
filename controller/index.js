export function getIndexView(req, res) {
    res.render('index')
}

export function getContactView(req, res) {
    res.render('kontakt')
}

export function getHikeView(req, res) {
    //TODO - loe andmed data kihist etteantud matka id järgi ning renderda malli abil
    const hike = {name: 'Test'}
    res.render('hike', { matk: hike } )
}