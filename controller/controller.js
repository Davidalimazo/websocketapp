module.exports.register_get = (req, res)=>{
    res.render('signup', {title:'Register'})
}
module.exports.register_post = (req, res)=>{
    console.log(req.body)
    res.send('signup')
}

module.exports.login_post = (req, res)=>{
    console.log(req.body)
    res.send('login')
}

module.exports.login_get = (req, res)=>{
    res.render('login',  {title:'Login'})
}

module.exports.dashboard_get = (req, res)=>{
    res.render('dashboard',  {title:'Login'})
}