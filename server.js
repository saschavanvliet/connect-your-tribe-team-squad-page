import express from 'express'

import { Liquid } from 'liquidjs';


// Vul hier jullie team naam in
const teamName = 'Cool';

const app = express()

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

app.use(express.urlencoded({extended: true}))


app.get('/', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName}"}`)
  const messagesResponseJSON = await messagesResponse.json()

  const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')
  const squadResponseJSON = await squadResponse.json()

  response.render('index.liquid', {
    teamName: teamName,
    messages: messagesResponseJSON.data,
    squads: squadResponseJSON.data
  })
})
 
app.get('/squad1H/', async function (request, response) {
  response.render('squad1H.liquid')
})

app.get('/squad1G/', async function (request, response) {
  response.render('squad1G.liquid')
})

app.post('/', async function (request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      for: `Team ${teamName}`,
      from: request.body.from,
      text: request.body.text
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  response.redirect(303, '/')
})

app.set('port', process.env.PORT || 8000)

if (teamName == '') {
  console.log('Voeg eerst de naam van jullie team in de code toe.')
} else {
  app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })
}app.get('/detail', async function (request, response) {
  const personDetailResponse = await fetch('https://fdnd.directus.app/items/person/' + request.params.id)
  const personDetailResponseJSON = await personDetailResponse.json()
 
  response.render('detail_student.liquid', {person: personDetailResponseJSON.data, squads: squadResponseJSON.data})
})