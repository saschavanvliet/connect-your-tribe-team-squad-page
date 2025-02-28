# Squad Page
Ontwerp en maak samen met je team een website met NodeJS, Express, JSON en Liquid

## FDND team filter

## Beschrijving

  ### Safae: 

Voor deze opdracht heb ik de indexpagina gemaakt, waarop je twee cards kunt vinden. Met deze cards kun je kiezen welke squad je wilt bekijken. Daarnaast heb ik een like-button toegevoegd waarmee je een squad kunt liken. Wanneer je de like-button indrukt wordt het aantal likes verhoogd en verandert het hartje, zodat het duidelijk is dat je de squad hebt geliket.


https://github.com/user-attachments/assets/d45fdb3c-d6ca-47d6-9c0d-70e7a6188a48

Feedforward:

Naast het hartje staat altijd een cijfer, beginnend bij 0. Dit geeft aan dat de button nog niet is geklikt, waardoor het duidelijk is dat de gebruiker de mogelijkheid heeft om de like uit te brengen door op de button te klikken.

Feedback:

Ik heb ervoor gekozen om het hartje volledig rood te maken nadat er op geklikt wordt, zodat het duidelijk zichtbaar is dat de knop geactiveerd is. Daarnaast wordt het cijfer naast het hartje automatisch verhoogd om het aantal keren dat er op de like-button is geklikt weer te geven.


 
  ### Renzo:

  #### Beschrijving werkzaamheden
  Voor deze opdracht heb ik de taak opgenomen om met de squad pagina's aan de gang te gaan. Deze ga ik samen met Sascha bouwen en hebben we onderling de taken verdeeld binnen de pagina's. Mijn taken zijn het maken van de profilecards en de hamburger menu, met de links naar de verschillende teams. 

  Om de profilecards te bouwen heb ik het ontwerp aangehouden die we hebben geschetst tijdens de les van afgelopen maandag. We hebben er toen voor gekozen om de profilecards zo op te bouwen dat ze overeen komen met een Instagram post. Zo hebben we er dus voor gekozen om de namen van de studenten met zijn/haar studentnummer linksboven in te delen (zoals Instagram dat ook heeft maar dan met een kleine twist). Onder de "username" hebben we de avatar geplaatst en daaronder de mogelijkheid om de student een 'like' te geven.

  Tijdens het bouwen van de hamburger menu heb ik ervoor gezorgd dat de linkjes in het menu als het ware onder de hamburger zitten en die tevoorschijn komen wanneer er op het icoontje wordt geklikt. De linkjes van het menu heb ik een z-index: 9 gegeven en het hamburger icoontje zelf heb ik een z-index: 10 gegeven zodat deze onder elkaar komen te staan.

  https://github.com/saschavanvliet/connect-your-tribe-team-squad-page/blob/dcd6c8d82fd3696f2847a4618cb96716c37db328/public/squadpage.css#L7-L16

  https://github.com/saschavanvliet/connect-your-tribe-team-squad-page/blob/dcd6c8d82fd3696f2847a4618cb96716c37db328/public/squadpage.css#L60-L66

  Ook heb ik hiervoor een interactie ontworpen. Wanneer er op het icoontje wordt geklikt 'schuift' het menu naar buiten, en kan weer naar binnen worden geschoven door overal op de pagina te klikken. Op mobiel schuift het menu over het hele scherm, op grotere schermen gebruikt het uitgeschoven menu 20% van het hele scherm.
  

Mobiele versie:



Desktop versie:
https://github.com/user-attachments/assets/39ce6e05-fd0b-4819-9221-aaa036913641



  

  #### JSON data
  Om de profilecards op te bouwen heb ik ervoor gekozen om zo veel mogelijk JSON data te gebruiken. Voor de 'username met studentnummer' en 'post' is JSON data gebruikt. 
  https://github.com/saschavanvliet/connect-your-tribe-team-squad-page/blob/dcd6c8d82fd3696f2847a4618cb96716c37db328/views/squad1H.liquid#L25-L27
  
  Ook heb ik er voor gezorgd dat als een student geen avatar heeft dat er dan een placeholder image daarvoor in de plaats kwam. Dit heb ik gedaan met:
  https://github.com/saschavanvliet/connect-your-tribe-team-squad-page/blob/dcd6c8d82fd3696f2847a4618cb96716c37db328/views/squad1H.liquid#L29-L40

  Hier zie je dus dat als een student geen avatar heeft, een verkeerde waarde heeft ingevuld of dat deze om een andere reden de avatar niet laat zien, de placeholder in de plaats komt.


  #### Server.js
  Om ervoor te zorgen dat de linkjes in de hamburger menu naar de juiste teams gaan heb ik een route aangemaakt naar de teams en teamleden pagina. Dit heb ik met de app.get functie gedaan om deze pagina te 'getten' en op te halen uit de database door de link uit directus te pakken naar alle teams.

  https://github.com/saschavanvliet/connect-your-tribe-team-squad-page/blob/62dd33f231949a47fac9d705dfcd4ba0c54a26d7/server.js#L52-L64

  Ook heb ik ervoor gezorgd dat de juiste teams uit de database worden gehaald wanneer er op een linkje wordt geklikt in het menu. Dit heb ik met fetch gedaan. Om /teams/:team te typen wordt zo het juiste team opgehaald uit de database. 

  https://github.com/saschavanvliet/connect-your-tribe-team-squad-page/blob/62dd33f231949a47fac9d705dfcd4ba0c54a26d7/server.js#L89-L102

  
  
  

  ### Sascha:

  ### Sidney:

## Kenmerken

  ### Safae:

  ### Renzo:

  ### Sascha:

  ### Sidney:

## Installatie
In ons project hebben nu gewerkt met nieuwe concepten. We hebben gewerkt met: Node, NPM, Express, Liquid en Render.

- Om ons project te bekijken EN te bewerken heb je dit nodig om aan de slag te gaan. Laten we eerst beginnen met Node.js. Node is een software die je helpt met een server opzetten zodat je zelf kan testen op je eigen lokale server. <a href="https://nodejs.org/en">Node.js</a> is vanaf hier te downloaden en na installeren van Node.js begint een ander deel zich voort te doen.

- NPM is een zogehete 'package manager.' NPM zorgt er dus voor dat alle bestanden mooi in een pakketje worden gezet en worden ge'managed' zodat alles netjes gedownload kan worden (NPM staat daarom ook voor Node Package Manager.) Met NPM kan je een aantal commandos in je terminal (Gebruik ctrl+` om je terminal te openen) voeren zodat je Node op de juiste manier kan gebruiken. 
  Gebruik <code>npm init</code> zodat er een pakketje wordt gemaakt van je applicatie (nu is er een package.json aangemaakt.)
  Nadat je applicatie een pakketje is geworden gebruik je <code>npm install</code> om je pakketje te kunnen installeren. 
  Als je pakketje is geïnstalleerd gebruik je <code>npm start</code> om je huidige applicatie uit te voeren. Nu kan je lokaal je eigen server hosten.

- Express. Hoe je express <a href="https://expressjs.com/en/starter/installing.html">download</a> zie je hier. Express zorgt ervoor dat je een behapbare API applicatie kan maken en hoe je het installeert heb je net gedaan bij de npm init. Met express kan je gemakkelijk <a href="https://expressjs.com/en/guide/routing.html">routes</a> maken en geleiden naar andere pagina's. 

- Liquid

- Render


## Teamafspraken
- Goed communiceren via Teams. Als je aan iets gaat werken waar anderen ook aan werken, communiceer je dat!
- Iedereen die een issue aanmaakt bespreekt het en 'assigned' iemand of zichzelf aan die issue.
- Je geeft jezelf een start en een eind datum bij je issue

### Canvas
<img src="https://github.com/user-attachments/assets/f9d3510d-0879-4f83-b3ae-81f553a6bc98">


## Standup 26 februari 2025
Op 26 februari hadden we een standup met alle leden van het team. Er zijn een aantal punten besproken die ik nu zal noteren van elk teamlid.

### Renzo: 
- Wat heeft Renzo gedaan?:'ik heb aan de HTML gewerkt, nog niet aan de CSS. Ik was bezig met een opzet voor de detailpagina.' 
- Wat gaat Renzo doen?: 'Ik ga verder werken aan de squadpagina en CSS toepassen. Ook ga ik nu in de juiste repo werken.' 
- Waar heeft Renzo hulp bij nodig?: 'Ik heb hulp nodig bij de profilecards in HTMl optimaliseren met de JSON data die beschikbaar is.' 

### Safae:
- Wat heeft Safae gedaan?: 'Ik heb gewerkt aan de HMTL, maar nog niet aan de CSS. Ik heb gewerkt aan de keuze pagina voor de squads en aan de like knop.' 
- Wat gaat Safae doen?: 'Ik ga verder werken aan de Squadpagina en ervoor zorgen dat de profiel foto van de squads van de bijbehorende squad-leader.'
- Waar heeft Safae hulp bij nodig?: 'Bij de like button kijken hoe je het aantal likes kan laten weergeven.'

### Sascha:
- Wat heeft Sascha gedaan?: 'Ik heb HTMl opgezet, routes aangemaakt en een algemene CSS aangemaakt voor de website.'
- Wat gaat Sascha doen?: 'Ik ga verder werken aan de Javascript filter zodat het werkt om op teams te filteren binnen de squad.'
- Waar heeft Sascha hulp bij nodig?: 'Ik heb hulp nodig bij het Javascript filter, omdat ik niet helemaal goed weet hoe ik het moet neerzetten.' 

### Sidney:
- Wat heeft Sidney gedaan?: 'Ik heb een HTML opzet gedaan en aan de server.js gewerkt zodat de juiste route erbij staat. Ook meer zelfstudie gedaan over hoe de for loop werkt.'
- Wat gaat Sidney doen?: 'Door hetzelfde misverstand als Renzo moet ik ook alles klonen vanuit de repo die ik eerst had en nu zal ik moeten kopiëren wat ik eerst had. Ook zal ik aan de CSS moeten werken.'
- Waar heeft Sidney hulp bij nodig?: 'Ik heb hulp nodig bij de CSS als ik er niet aan toe komen door het studeren van liquid en node.'
