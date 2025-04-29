# noSQL arbetserfarenheter – api

Detta är en node.js-baserad rest webbtjänst som hanterar arbetserfarenheter. Projektet är skapat som en skoluppgift i kursen backend baserad webbutveckling och använder en nosql databas (mongodb atlas) tillsammans med express och mongoose.

## live länk till api

du kan nå apiet här:  
https://nosql3-production.up.railway.app/api/experiences

## tekniker som använts

- node.js  
- express  
- mongodb atlas  
- mongoose  
- cors  
- dotenv  
- railway (för publicering)  

## funktionalitet

apiet hanterar crud operationer (create, read, update, delete) för arbetserfarenheter.

varje dokument innehåller följande fält:

- companyname (string)  
- jobtitle (string)  
- location (string)  
- startdate (date)  
- enddate (date)  
- description (string)  

## kör lokalt

1. klona repot:

   ```bash
   git clone https://github.com/arlaspresident/nosql3.git
   cd nosql3

2. installera beroenden

```bash
    npm install
```
3. skapa en .env fil med detta:
MONGO_URI=mongodb+srv://andjela:andjela4901@moment3.u2ck6er.mongodb.net/moment3?retryWrites=true&w=majority&appName=moment3

4. starta serverm
```bash
npm start
