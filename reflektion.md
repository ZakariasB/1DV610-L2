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
| draw (HorizontalBarChart klassen) |            | 31          |
| draw (Barchart klassen)           |            | 30          |
| draw ( PieChart klassen)          |            | 30          |
| clear (alla klasser)              |            | 1           |






### Reflektion