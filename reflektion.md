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