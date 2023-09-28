# Reflektion

## Kapitel 2 Meaningful Names

### Tabell

| Namn och Förklaring                          | Reflektion och regler från Clean Code |
|----------------------------------------------|---------------------------------------|
| x variabel i draw(), står för x axeln    |  Avoid Mental Mapping x kan vara lite förvirrande och bör därför vara xAxis eller liknande   Use Intention Revealing Names: Namnet x kanske tolkas som x axeln men annars finns det stor chans att det inte betyder något  Use Searchable Names:  Namnet x är inte lätt att hitta i ett flöde av text vilket gör koden svårare att läsa.                                     |
| clear metod i alla klasser               |   Method Names Metoder borde till skillnad från klasser ha verb som namn  Add Meaningful Context: Namnet clear gör det tydligt att något rensas men för att vara tydligare så kunde namnet clearCanvas användas för att visa vad som rensas                                    |
| BarChart Klass namn                      |       Class Names  Klasser borde ha substantiv som namn, aldrig verb.     Use problem domain names:   Även om många vet vad en "BarChart" är så är den ändå inom problem domänen                                |
| currentAngle variabel i PieChart klassen |   Use Intention Revealing Names  i currentAngle framgår det tydligt att det är den aktuella vinkeln som sparas i den variabeln.                                    |
| context property i alla klasser          |    Add Meaningful Context  context kan betyda mycket men så det kanske kunnat heta dimensionalContext eller 2dContext för att tyda  vilket sammanhang det är i.   Use Intention Revealing Names:  context i det är fallet avslöjar inte jättemycket då det kan tolkas på många olika sätt.                                   |

### Reflektion Kapitel 2

Tidigare har jag inte givit särskilt mycket tanke på det här med namngivning så förutom att det så klart inte ska vara misledande namn. Däremot faller jag snabbt in i fällan att namnge för mig själv istället för andra. Många av mina namn på variabler som x samt y döpte jag först till  x och y för att jag själv förstod att det var x och y axeln det handlade om och sedan efter att jag läste kapitel 2 insåg jag att dessa tydligt borde ändras för att ge en läsare ett lättare sätt att koppla x till sitt sammanhang. 

Vissa saker som jag trodde var självklara bra namn som t.ex State kanske inte är så tydliga egentligen, handlar det om en adress ? eller om state i en applikation. För författaren är detta tydligt men inte för den som läser koden. 

Att namnge klasser som substantiv och metoder som namn var något jag hade lärt mig att göra utan att tänka på att just detta var en "regel". När jag läste detta i boken så fick jag nu veta just varför det "låter rätt" att namnge på detta sätt.

## Kapitel 3 Functions

### Tabell

Innan tabellen vill jag bara göra det tydligt att jag har flera metoder men bara två olika namn, draw och clear. Efter att ha läst kapitel 2 samt tre inser jag att de både borde heta draw(specifik diagram) t.ex drawPieChart och att dessa är alldeles för stora och borde delas up. Jag bestämde mig för att ha kvar dessa metoder som de är eftersom jag inte vill ändra saker i efterhand och eftersom det blir en bra lärdom för nästa laboration. 

| Metodnamn                             | Reflektion | antal rader |
|---------------------------------------|------------|-------------|
| draw (LineChart klassen)          | **Do One Thing** Detta passar in på alla draw metoder så jag nämner det bara här. Metoden draw validerar användarens data property, den hittar maxmimum samt minimum värdet i data propertyn, den ritar ut ett diagram m.m. Detta hade kunnat delas upp i olika metoder t.ex en för InputHandling en för att hitta maxvärdet m.m. Sedan hade den metoden kunnat ärvts till de andra klasserna för att återanvända koden så att alla klasser inte hade behövt en InputHandling metod och en findMaxNumber metod.           | 32          |
| draw (HorizontalBarChart klassen) |  **Small** Även om det inte är några jätte metoder hade det fortfarande hjälpt läsbarheten samt underhållbarheten att dela upp dem i mindre metoder. Use Descriptive Names: Detta kanske går in på samma sak som i kapitel 2 men draw hade kunnat heta draw + diagrammet som används för att visa tydligare på vad som händer.          | 31          |
| draw (Barchart klassen)           |  **One Level of Abstraction per Function** Eftersom simpla operationer som att hitta det största värdet i en array genomförs innan en lite mer komplex matematisk operation genomförs för att rita ut en stor cirkel så hade det behövts här igen att metoden delades upp i flera mindre metoder som har samma abstraktions nivå.         | 30          |
| draw ( PieChart klassen)          |  **Function Arguments** Dem ända metoderna som har argument är mina konstruktörer. Alla andra draw metoder är niladic och därför gör det metoderna lättare att förstå då argument kan vara väldigt konceptuella speciellt när dem är dåligt namngivna. Command Query Separation: Trots att mina draw metoder gör för mycket olika saker lyckas dem med att ändra på ett objekt utan att också returnera information.          | 30          |
| clear (alla klasser)              | **Small** Funktionen är bara en rad lång. Do One Thing: Funktionen rensar bara ett canvas. Function Arguments: Funktionen tar inga argument.           | 1           |






### Reflektion
Efter att jag har läst kapitel 3 har jag hittat många brister i mina funktioner / metoder. Oftast gör jag funktioner som är både för långa samtidigt som de gör flera olika saker samtidigt ofta i olika abstraktions nivåer. 

I denna laboration hade jag stort kunnat förbättra koden genom att bryta ut draw metoderna i flera mindre metoder som sedan kunde ärvas ner från en super class till mina diagram klasser. På så sätt hade jag kunnat ha mindre funktioner som fokuserade på en grej samtidigt som jag lyckas återanvända kod. 

Min inställning till hur man skriver funktioner har helt ändrats då jag tidigare inte la mycket tanke alls till vad som skulle i en funktion men nu ser jag hur mycket mer läsbar samt underhållbar koden blir när man delar upp den mer.

## Reflektion av kodkvalitén i denna laboration.

Min kodkvalitet innan denna laboration samt i denna laboration har varit lite svag. Metoder har haft operationer med olika abstraktionsnivå, de har fokuserat på mer än en uppgift, de har varit allt förutom små och de har ofta haft för många argument. Utöver det som jag har nämnt i tabellerna så har jag också lärt mig att extrahera try catch satser till egna funktioner eftersom ofta gör strukturen av koden mer komplex. 

Jag ser nu hur jag kunnat förbättra denna laboration. Dela upp draw metoderna i en InputHandling metod, en funktion som sätter alla värden och sedan en funktion som faktiskt ritat diagrammen. Då hade jag kunnat använda inheritance för att återanvända kod för de metoder som förekommer i alla de 4 klasserna. På så sätt hade min kod blivit lättare att läsa samt förstå, lättare att underhålla samt mindre kod som hade behövts repeteras.

Jag skulle personligen säga att namngivningen inte hade lika stora brister som funktionerna (förutom x och y variablerna). Men ändå har jag mycket att förbättra. Visa namn på variabler som clear är inte dåliga men de berättar inte hela historien medan andra som x och y kanske förstås av mig men inte någon som läser koden för första gången. Efter denna laboration samt efter att jag läst dessa kapitel har jag nu en större förståelse för hur man skriver kod med hög kodkvalité.