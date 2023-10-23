# Test Rapport

## Hur Testas Modulen?

Modulen testas genom testappen (index.html + index.js) där de olika diagramen skapas i ett HTML canvas element. Först kallas konstruktorn med ett objekt som argument. Objektet  måste ha två fält, canvasId samt data. Men kan också ha fält som colors, padding och labels beroende på vilken av sub-modulerna det är. Sedan kallas respektive draw() metod på det instansierade objektet för att observera om något diagram målas upp på canvas elementet och om färgerna matchar / om det är rätt labels etc. 

Utöver att testa de 4 olika typer av diagram genom att mata in rätt indata testas det även att mata in fel indata för att bestämma att rätt fel kastas etc. 

## TestFall

### BarChart.js

#### TC 1.1 Ritning av diagram med korrekt indata

##### Test genomgång

* Se till att ett HTML element med id:et myCanvas finns i filen index.html
* Skriv in följande kod:
```JavaScript
const chart = new BarChart({
    canvasId: 'myCanvas',
    data: [1, 4, 5, 6],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'],
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']
});

chart.draw();

```
* Anropa draw metoden på det instansierade objektet samt observera om ett diagram ritas ut på canvas elementet. Diagrammet ska se ut som nedan

[Stapeldiagram](./img/barChart.png)

#### TC 1.2 Felaktig indata

##### Test genomgång

* Instansiera ett nytt BarChart objekt genom att anropa konstruktorn med ett objekt som argument. Det ska se ut så här:
```JavaScript
const chart = new BarChart({
    canvasId: '',
    data: [1, 4, 5, 6],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4']
});

```
* Ta upp web konsolen i din webläsare sedan anropa draw metoden på det instansierade objektet.
* Ett felmeddelande borde komma upp som säger: Need a valid reference to a canvas element.

### HorizontalBarchart.js

#### TC 2.1 Ritning av diagram med korrekt indata

##### Test genomgång

* Se till att ett HTML element med id:et myCanvas finns i filen index.html
* Skriv in följande kod:
```JavaScript
const chart = new HorizontalBarChart({
    canvasId: 'myCanvas',
    data: [1, 4, 5, 6],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4']
});

chart.draw();

```
* Anropa draw metoden på det instansierade objektet samt observera om ett diagram ritas ut på canvas elementet. Diagrammet ska se ut som nedan

[Horisontellt Stapeldiagram](./img/horizontalBarChart.png)

#### TC 2.2 Felaktig Indata

##### Test genomgång

* Instansiera ett nytt HorizontalBarChart objekt genom att anropa konstruktorn med ett objekt som argument. Objektet ska ha fyra properties: canvasId: (empty), data: [1, 4, 5, 6], labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'] samt colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'].
* Ta upp web konsolen i din webläsare sedan anropa draw metoden på det instansierade objektet.
* Ett felmeddelande borde komma upp som säger: Need a valid reference to a canvas element.

### LineChart.js

#### TC 3.1 Ritning av diagram med korrekt indata

##### Test genomgång

* Se till att ett HTML element med id:et myCanvas finns i filen index.html
* Skriv in följande kod:
```JavaScript
const chart = new LineChart({
    canvasId: 'myCanvas',
    data: [1, 4, 5, 6],
    colors: '#FF0000'
});

chart.draw();

```
* Anropa draw metoden på det instansierade objektet samt observera om ett diagram ritas ut på canvas elementet. Diagrammet ska se ut som nedan

[Linjediagram](./img/lineChart.png)

#### TC 3.2 Felaktig Indata

##### Test genomgång

* Instansiera ett nytt LineChart objekt genom att anropa konstruktorn med ett objekt som argument. Objektet ska ha tre properties: canvasId: (empty), data: [1, 4, 5, 6],  samt color: '#FF0000'.
* Ta upp web konsolen i din webläsare sedan anropa draw metoden på det instansierade objektet.
* Ett felmeddelande borde komma upp som säger: Need a valid reference to a canvas element.

### PieChart.js

#### TC 4.1 Ritning av diagram med korrekt indata

##### Test genomgång

* Se till att ett HTML element med id:et myCanvas finns i filen index.html
* Skriv in följande kod:
```JavaScript
const chart = new PieChart({
    canvasId: 'myCanvas',
    data: [1, 4, 5, 6],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'],
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4']
});

chart.draw();

```
* Anropa draw metoden på det instansierade objektet samt observera om ett diagram ritas ut på canvas elementet. Diagrammet ska se ut som nedan

[Pajdiagram](./img/pieChart.png)
#### TC 4.2 Felaktig Indata

##### Test genomgång

* Instansiera ett nytt PieChart objekt genom att anropa konstruktorn med ett objekt som argument. Objektet ska ha tre properties: canvasId: (empty), data: [1, 4, 5, 6], samt colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'].
* Ta upp web konsolen i din webläsare sedan anropa draw metoden på det instansierade objektet.
* Ett felmeddelande borde komma upp som säger: Need a valid reference to a canvas element.

## Test Resultat

| Test Case | Test Metod | Resultat |
|-----------|------------|----------|
| TC 1.1    | Manuellt   | ✔️        |
| TC 1.2    | Manuellt   | ✔️        |
| TC 2.1    | Manuellt   | ✔️        |
| TC 2.2    | Manuellt   | ✔️        |
| TC 3.1    | Manuellt   | ✔️        |
| TC 3.2    | Manuellt   | ✔️        |
| TC 4.1    | Manuellt   | ✔️        |
| TC 4.2    | Manuellt   | ✔️        |