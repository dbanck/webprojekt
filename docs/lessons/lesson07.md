---
title: "Lektion 07: JS II"
sidebar_label: "07: JS II"
sidebar_position: 7
sidebar_class_name: hidden
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Wenn dies, dann das" />

import ProminentLink from '@site/src/components/Docs/ProminentLink';

<ProminentLink link="https://docs.google.com/presentation/d/1nYr8Eq0vkfwCLHqhGweGLxXr1c7Xq-fPF_vrB7ID06Q">Folien</ProminentLink>

## JavaScript Theorie

Wir sind mit einer Zusammenfassung der letzten Lektion eingestiegen. Diese werde ich hier nicht wieder aufführen, lest euch dazu einfach das Dokument der letzten Lektion nochmal durch, wenn etwas unklar ist.

### Weitere Datentypen

Neben den primitiven Datentypen der letzten Woche haben wir heute noch zwei weitere komplexe Datentypen kennengelernt.

#### Array

Ein [Array](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array) kann als Schrank mit nummerierten Schubladen verstanden werden. In jeder Schublade ist ein Element enthalten. Dieses Element kann in JS von jedem Datentyp sein. So können bspw. Lieblingsfarben, die Teilnehmer eines Kurses oder eine CD Sammlung in einem Array gespeichert werden.

```js
let array = ["red", "blue", "green"];
```

Achtung: Arrays sind in JS keine echten Datentypen, da diese unter der Haube auch Objects sind!

#### Object

Ein [Object](https://developer.mozilla.org/de/docs/Glossary/Objekt) ist die einzige komplexe Datenstruktur in JavaScript. Sie enthält Key-Value Paare - also die Zuordnung eines Wertes zu einem Schlüssel. So können in einem Objekt verschiedene Eigenschaften definiert und später ausgelesen oder verändert werden.

```js
let person = {
  firstname: "Basti",
  lastname: "Buck",
  age: 31,
  role: "Teacher",
};
```

### Bedingungen

Mit [Bedingungen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/if...else) können wir beim Durchlauf unseres Codes Weichen einbauen. An diesen Stellen wird dann aufgrund einer Bedingung entschieden, welche Richtung genommen wird.

```js
let age = 31;

if (age < 8) {
  console.log("4€ Eintritt");
} else if (age > 67) {
  console.log("4€ Eintritt");
} else {
  console.log("10€ Eintritt");
}

// 10€ Eintritt
```

### Logische Operatoren

Wir haben drei logische Operatoren kennengelernt: `&&` ([AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)), `||` ([OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)) und `!` ([NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)). Mit diesen können bspw. Bedingungen vereinfacht werden, so dass obiges Beispiel wie folgt vereinfacht wird.

```js
let age = 7;

if (age < 8 || age > 67) {
  console.log("4€ Eintritt");
} else {
  console.log("10€ Eintritt");
}

// 4€ Eintritt
```

### Schleifen

Mit Schleifen kann ein definierter Codeabschnitt mehrfach durchlaufen werden, bevor der normale Programmablauf weitergeht. Wir haben heute zwei Möglichkeiten kennengelernt, es gibt aber noch weitere Schleifen in JS, die ihr euch bei Bedarf auch gerne mal anschauen könnt.

Beide nachfolgenden Schleifen erzeugen das gleiche Ergebnis, das nur einmal als Kommentar angezeigt wird.

```js
for (let i = 0; i < 5; i++) {
  console.log("Run " + i);
}

let count = 0;
while (count < 5) {
  console.log("Run " + count);
  count++;
}

// Run 0
// Run 1
// Run 2
// Run 3
// Run 4
```

**Vorsicht!** Schleifen bergen auch immer die Gefahr, eine Endlosschleife zu erzeugen. Das ist immer der Fall, wenn das Abbruchkriterium niemals erreicht wird. Das Programm durchläuft dann unendlich lange die Schleife und führt nachfolgenden Code niemals aus. Dies kann auch zum Aufhängen des Gerätes führen.

### Funktionen

Dann haben wir uns noch Funktionen in JavaScript angeschaut. Funktionen sind wiederverwendbare Code-Teile, die von anderen Stellen aufgerufen werden können. So können wir wie in dem unten stehenden Beispiel verschiedene Teilnehmer grüßen, ohne den Grußanteil zu duplizieren.

```js
function sayHello(name) {
  alert("Hello " + name);
}

sayHello("Basti");
sayHello("World");
```

Die vorgestellten Bestandteile zeigen nur einen kleinen Ausschnitt aus den Möglichkeiten der Sprache. Weitere lernt ihr durch das Lösen spezifischer Probleme.

## Live-Coding

Wie in jeder Woche ist dieser Teil schwer zu beschreiben.
Als Einstieg in das Live-Coding haben wir direkt in der Console der Developertools im Browser ein wenig JavaScript geschrieben und gesehen, dass diese temporären Anpassungen (ähnlich wie CSS) direkt ausgeführt und in der Darstellung der Website sichtbar werden. So haben wir bspw. den Titel unserer Website sowie die Worte der Überschrift ausgelesen und geändert. Die Überschrift haben wir außerdem über JS entfernt, so dass diese nicht nur über CSS ausgeblendet, sondern komplett aus dem HTML verschwunden ist.
Nach einem Neuladen der Seite sind diese Änderung allerdings wieder da. Daher liefert man mit seiner Website auch eine JS-Datei aus, die wie wir letzte Lektion gelernt haben, eingebunden wird. So wird das enthaltene JavaScript bei jedem Nutzer unserer Website ausgeführt.

Als nächstes haben wir einen einfachen Button in seiner Größe geändert, wenn er geklickt wird. Dies haben wir zunächst durch eine direkte Veränderung des Styles (CSS), das auf den Button wirkt, erreicht. Dies erwies sich aber als unpraktisch und wir haben anschließend die Unterscheidung der beiden Stile (groß, klein) durch das einfache Hinzufügen und Entfernen einer Klasse gelöst. Beide Zustände sind mit einem Klassen-Selektor im CSS hinterlegt. So wirkt je nach Existenz der Klasse eine andere CSS-Regel.

```js
function changeSize() {
  document.getElementById("my-cool-btn").classList.toggle("larger");
}
```

Als nächstes haben wir uns ein Beispiel angeschaut, wo eine Website mit einem Modal überlagert ist. Ihr kennt diese Art der Inhalte von sehr vielen Websites, die auf etwas ganz besonders hinweisen wollen (Newsletter, Rabatte, Warnungen, …).
In diesem Beispiel haben wir die vorher gelernte Methode des Hinzufügen und Entfernens einer Klasse, die mit einer bestimmten CSS-Regel verknüpft ist, erweitert. Haben wir vorher die Klasse beim Klick immer “getoggelt” (also entfernt, wenn sie existiert, und ansonsten hinzugefügt), haben wir in diesem Beispiel zwei einzelne Funktionen erzeugt; die eine fügt die Klasse hinzu, die andere entfernt sie wieder.

Dies ist notwendig, da der Button nach öffnen des Modals nicht mehr sichtbar ist und wir ein anderes Element nutzen müssen, das bei Klick die entsprechende Funktion zum Schließen ausführt.

```js
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.querySelector(".overlay").classList.add("hidden");
}
```

Als drittes Beispiel haben wir uns noch mit der direkten Manipulation der HTML-Elemente in einer ungeordneten Liste beschäftigt. Über einen Button konnten wir bei Klick weitere Listeneinträge erzeugen, die dann direkt unserer Liste hinzugefügt wurden.

```js
function addItem() {
  var items = document.querySelectorAll("li").length; // get all items and count them
  console.log(items); // log amount of items to console

  if (items === 6) {
    return; // we return nothing from this function, so it ends here
  }

  var newItem = document.createElement("li"); // create new list item

  // add different item text depending on count
  if (items === 3) {
    newItem.textContent = "Rust";
  }

  if (items === 4) {
    newItem.textContent = "Python";
  }

  if (items === 5) {
    newItem.textContent = "C#";
  }

  // add item to list
  document.querySelector("#coding-languages").appendChild(newItem);
}
```

Alle Ergebnisse dieser Live-Coding-Session findet ihr wieder auf GitHub. Schaut euch das gerne nochmal an und spielt damit herum.

## State of JS

Ihr habt heute den Einstieg in eine der weitverbreitesten und meistgenutzten Programmiersprachen der Welt gemacht. Ich schreibe fast nur noch JavaScript, da Frontend-Frameworks wie [React](https://reactjs.org/) existieren, mit denen komplette Websites in JS erzeugt und dynamisch durch Nutzereingaben, neuen Daten vom Server o.Ä. verändert werden.
Hier wird allerdings weiterhin eine Syntax verwendet, die sehr nah an HTML und CSS ist, wie wir es gelernt haben.

Auch wenn das nächste Frontend-Framework nicht in JS geschrieben sein sollte, HTML und CSS sind und bleiben die Basis aller Webentwicklung! Damit fundierte Basis für die Zukunft.

Neben der Nutzung im Browser wie wir JavaScript genutzt haben, habe ich euch außerdem noch kurz einen Ausflug in die Welt von [NodeJS](https://nodejs.org/en/) gezeigt. NodeJS ist ein aus dem Browser “herausgerissenes” JavaScript, das auf dem Server laufen kann. Auch Node gewinnt immer weiter an Zuspruch. Wenn ihr also Frontend-JS schreiben könnt, ist der Umstieg oder die Erweiterung des Portfolios auf Backend-Code nicht mehr weit.

## Hausaufgabe

Als Hausaufgabe arbeitet bitte an eurer eigenen Website. In den nächsten Terminen werden wir nur noch wenig neuen Inhalt erarbeiten und vielmehr eure konkreten Fragen beantworten. Daher bereitet Fragen, die sich ergeben sollten, für die nächste Session vor. Stellt aber auch gerne weiter vorab Fragen im Channel, ihr werdet jetzt alle über ähnliche Probleme stolpern.

Außerdem kann ich euch noch folgende drei Video-Tutorials empfehlen. Sie behandeln alle JavaScript und vertiefen bzw. erweitern auch das heute Gelernte.

- https://www.youtube.com/watch?v=W6NZfCO5SIk
- https://www.youtube.com/watch?v=5OCrKVNqCcs
- https://www.youtube.com/watch?v=zPHerhks2Vg
