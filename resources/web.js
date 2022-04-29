console.log("You are Right");



// fetch("http://puzzle.mead.io/puzzle").then( (response)=> {

// response.json().then(  (data) => {

//     console.log(data)
// })
// })









const weather = document.querySelector('form')
const search = document.querySelector('input') 

const M1 = document.querySelector('#msg-1')
const M2 = document.querySelector('#msg-2')






weather.addEventListener('submit', (e) => {

   
    e.preventDefault()
    const location = search.value

    M1.textContent = 'Loading...'
    M2.textContent = ''



    fetch("weather?address="+ location ).then( (response)=> {

response.json().then(  (data) => {


    if (data.error) {
        // console.log(data.error)
        M1.textContent = data.error


        // return message-1(data.error)
    }

    else {

        // console.log(data.location)
        // console.log(data.forecast)

        M1.textContent = data.location
        M2.textContent = data.forecast 


    }
})
})
    // console.log(location)
})
