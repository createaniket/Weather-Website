// console.log('my name is skhan')
const forecast = require ('./utils/forecast')

const geocode = require('./utils/geocode')
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000

console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '/public'))
const express = require('express')
const app = express()

const viewspath = path.join(__dirname, '/Templates/views')

const partialspath = path.join(__dirname, '/Templates/Partials')

const partialspathfooter = path.join(__dirname, '/Templates/Partials')

app.set('views', viewspath)


app.set('view engine', 'hbs')

hbs.registerPartials(partialspath)



hbs.registerPartials(partialspathfooter)




const rootsrc = path.join(__dirname, '/resources')
app.use(express.static(rootsrc))
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        type: 'Hbs',
        
    })
})










app.get('/about', (req, res) => {
    res.render('about',{

        title: 'Aniket Pratap Singh'
    } )
})





app.get('/product', (req, res) => {

    if (!req.query.search){

        return res.send({
            error:'Please provide something search'
        })
    }
   
   console.log(req.query.search);
   
    res.send({

        products : []
    })
})




app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Home Page',
        type: 'Hbs',
        name: 'Kapoor help'
    })
})


















// app.get('/weather', (req, res) => {


//     res.send([{
//         forecast: 'Today is so hot '
//     },{
//         place: 'noida'
//     }])




// })



app.get('/weather', (req, res) => {

    if (!req.query.address) {

        return res.send({
            error: 'Please provide Address'
        })
    }

    

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {

        if (error) {
            return res.send({error})
        }
        // else {
        //     return res.send({
        //         latitude, longitude, location
        //     })
        // }

    

    forecast(latitude, longitude, (error, data ) => {


        if (error) {

            return res.send({error})
        }

         return res.send({
            forecast: data,
            location,
            address: req.query.address
        })
    })
})







})





app.get('/*', (req, res) => {
    res.render('404', {

        name: '404 ERROR'
    })
})



app.listen(port, () => {

    console.log('port has been up at port no.' + port)
})