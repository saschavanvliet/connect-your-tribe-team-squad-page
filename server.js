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
  // const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')
  // const squadResponseJSON = await squadResponse.json()
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}')
  const personResponseJSON = await personResponse.json()

  response.render('index.liquid', {
    teamName: teamName,
    messages: messagesResponseJSON.data,
    squads: squadResponseJSON.data
    // squads: squadResponseJSON.data
  })
})

// Ik maak een API-variabele aan om makkelijker aan de slag te kunnen gaan.
const API =  'https://fdnd.directus.app/items/person/'

app.get('/squad1H/', async function (request, response) {
  const personResponse = await fetch(API + '?fields=*,squads.squad_id.name&filter={"squads":{"squad_id":{"name":"1H"}}}&sort=name')
  // En daarvan haal ik de JSON op
  const personResponseJSON = await personResponse.json()
  response.render('squad1H.liquid', {persons: personResponseJSON.data})
})

app.get('/squad1G/', async function (request, response) {
  const personResponse = await fetch(API + '?fields=*,squads.squad_id.name&filter={"squads":{"squad_id":{"name":"1G"}}}&sort=name')
  // En daarvan haal ik de JSON op
  const personResponseJSON = await personResponse.json()
  response.render('squad1G.liquid', {persons: personResponseJSON.data})
})


app.get('/squad1G/teams/:team', async function (request, response) {
  const teamResponse = await fetch(API + '?filter={"team":{"_contains":"' + request.params.team + '"}}')
  // En daarvan haal ik de JSON op
  const teamResponseJSON = await teamResponse.json()
  console.log(teamResponseJSON)

  response.render('teamleden.liquid', {persons: teamResponseJSON.data, team_name: request.params.team})
})

app.get('/squad1H/teams/:team', async function (request, response) {
  const teamResponse = await fetch(API + '?filter={"team":{"_contains":"' + request.params.team + '"}}')
  // En daarvan haal ik de JSON op
  const teamResponseJSON = await teamResponse.json()
  console.log(teamResponseJSON)

  response.render('teamleden.liquid', {persons: teamResponseJSON.data, team_name: request.params.team})
})

app.get('/detail/:id', async function (request, response) {
  const studentDetailResponse = await fetch(API + request.params.id)
  const studentDetailResponseJSON = await studentDetailResponse.json()
  console.log(studentDetailResponseJSON)
  
  response.render('detail_student.liquid', {person: studentDetailResponseJSON.data})
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

  app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })

  // De links naar alle teampagina's gaan hier staan
  app.get('/teams/:team', async function (request, response) {
    console.log(request.params.team)
  
    const teamResponse = await fetch ('https://fdnd.directus.app/items/person/?filter={"team":{"_contains":"' + request.params.team + '"}}')
    const teamResponseJSON = await teamResponse.json()
  
    console.log(teamResponseJSON)
  
    // Als de data 'leeg', laat dan een andere pagina zien...
    if (teamResponseJSON.data.length == 0) {
  
    } else 
      response.render('teamleden.liquid', {persons: teamResponseJSON.data, squads: squadResponseJSON.data, team_name: request.params.team})
  })
  
  

//   app.get('/detail:id', async function (request, response) {
//     const personDetailResponse = await fetch('https://fdnd.directus.app/items/person/' + request.params.id)
//     const personDetailResponseJSON = await personDetailResponse.json()
//     const squadResponseJSON = await squadResponseJSON.json()

//   response.render('detail_student.liquid', {person: personDetailResponseJSON.data, squads: squadResponseJSON.data})
// })