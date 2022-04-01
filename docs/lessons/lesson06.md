---
title: "Lektion 06: JS I"
sidebar_label: "06: JS I"
sidebar_position: 6
sidebar_class_name: hidden
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Wenn dies, dann das" />

[Folien](https://docs.google.com/presentation/d/1CS1gnl6RS-2Y5-K7RTI0qde6tK7UvRoESxMygHTqZ64)

## Weekly 🔥 tips

_spielend lernen_

In dieser Woche haben wir uns nicht gezielt Tastenkürzel oder Bedienkonzepte angeschaut, sondern verschiedene Websites angeschaut, auf denen man spielend die Inhalte der vergangenen Wochen lernen kann.

Ein Spiel zur Positionierung mit FlexBox ist [Flexbox Froggy](https://flexboxfroggy.com/#de). Hier müssen Frösche auf den Seerosenblättern der gleichen Farbe positioniert werden. Hierfür stehen nur die CSS-Eigenschaften aus dem Flexbox-Umfeld zur Verfügung. Diese werden spielerisch erklärt und vermittelt.

Ein weiteres CSS-Spiel ist [CSS Diner](http://flukeout.github.io/). Hierbei muss man die korrekten CSS-Selektoren schreiben, um auf einem Tisch platzierte Gegenstände auszuwählen. Neben den Selektoren, die wir bereits gelernt haben, werden hier auch fortgeschrittene Selektoren spielerisch vermittelt, so dass man am Ende “CSS rockt”.

Darüber hinaus habe ich euch noch drei weitere Spiele ganz kurz vorgestellt. Diese nutzen und vermitteln alle JavaScript, daher bin ich vor der heutigen Session da auch nicht viel mehr drauf eingegangen. Schaut euch das bei Interesse gerne an. Leider ist kein Spiel dabei, was gezielt Manipulation des HTML vermittelt, wie wir es heute gelernt haben.

In [WarriorJS](https://warriorjs.com/campaigns/wnLTRH_K6VP) muss eine einfache Spielfigur ebenfalls ans Ende eines Ganges gelenkt werden, ohne dabei zu sterben. Hier geht es aber eher darum ein Problem zu lösen, als die Grundlagen zu lernen. Gleiches gilt für [Elevator Saga](http://play.elevatorsaga.com/#challenge=1), wo die Software eines Fahrstuhls optimiert werden muss, um in möglichst wenig Zeit möglichst viele Passagiere zu befördern.

## JavaScript

Anschließend haben wir die dritte der drei essentiellen Sprachen der Webentwicklung kennengelernt: JavaScript.

![Sprachen des Internets erklärt an Hand der Grammatik](/img/lessons/06/languages-unicorn.png)

Quelle: https://giphy.com/gifs/dance-crazy-rainbow-ZJlesIV8TnabS

Wie eingangs gesagt, bildet JavaScript die Verben, da wir diese Sprache dazu nutzen können, um Bewegung/Dynamik in unsere Website zu bringen.

JavaScript ist eine gezielt für den Browser entwickelte Programmiersprache, die die Möglichkeiten von HTML und CSS erweitern sollte. In der obigen Folie wird JS daher auch als die Verben des Satzes beschrieben: wir tun etwas mit den Inhalten oder der Gestaltung der Website.

Ein kurze, nicht vollständige Liste von möglichen Einsatzzwecken kann sein:

- dynamische Manipulation von Webseiten über das Document Object Model
- Plausibilitätsprüfung (Datenvalidierung) von Formulareingaben noch vor der Übertragung zum Server
- Anzeige von Dialogfenstern
- Senden und Empfangen von Daten, ohne dass der Browser die Seite neu laden muss
- Vorschlagen von Suchbegriffen während der Eingabe
- Werbebanner oder Laufschriften
- Verschleierung von E-Mail-Adressen zur Bekämpfung von Spam
- Schreib- und Lesezugriff auf Cookies und den Web Storage innerhalb des Browsers
  Diese Liste kann keinesfalls als vollständig betrachtet werden, da die Möglichkeiten schier unbegrenzt sind. Alles was man im Browser machen kann, kann man mit JS auch tun.

## JavaScript ist eine “echte” Programmiersprache

Anschließend haben wir einige der für eine Programmiersprache spezifischen Bestandteile wie Variablen, Funktionen, Operatoren, Schleifen, Bedingungen, etc. in JavaScript kennengelernt. Darüber hinaus gibt es aber noch weitere, die wir teilweise am nächsten Termin kennenlernen bzw. die ihr am besten problemspezifisch lernen und anwenden solltet. Ein guter Einstieg ist wie so oft [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction).

### Variablen

In [Variablen](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/var) können Werte gespeichert und an anderen Stellen referenziert oder auch noch geändert werden. Sie werden in JS mit dem Wort `let` deklariert und ggf. direkt initialisiert, also mit einem initialen Wert belegt. Außerdem gibt es noch das Keyword `const`, mit dem konstante Werte erzeugt werden können. Diese können später nicht verändert werden.

```js
const daysInAWeek = 7;

let name = "Basti";
// name ist hier "Basti"

name = "Basti Buck";
// name ist hier "Basti Buck"
```

### Datentypen

In JavaScript gibt es sieben [Datentypen](https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen). Fünf (primitive) Datentypen haben wir bereits kennengelernt: **String**, **Number**, **Boolean**, **Undefined** und **Null**.

```js
let string = "Basti";
let number = 3.1415;
let boolean = true;
let undef = undefined;
let nothing = null;
```

Daneben gibt es noch **Symbol** als primitven Datentyp, sowie **Object** als komplexen Datentyp. Diese haben wir zunächst nicht betrachtet, aber schaut euch gerne die entsprechende Dokumentation an.

### Operatoren

Wir haben außerdem einfache [Operatoren](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) in JavaScript kennengelernt. Die meisten kennt ihr bereits aus der Mathematik. Operatoren erhalten in echten Programmen deutlich mehr Sinn, als wir es heute kennengelernt haben. Aber es ist wichtig, dass ihr diese bereits kennt.

```js
3 + 2;		// 5
3 - 2;		// 1
3 * 2;		// 6
8 / 2;		// 4
3 < 2;		// false
3 > 2;		// true
3 <= 3;	    // true
4 >= 3;	    // true
4 === 3;	// false
4 !== 3;	// true

2 == “2”;	// true		ACHTUNG! lockerer Vergleich
```

Ggf. unbekannte Operatoren sind `===` (gleich) und `!==` (ungleich). Verwendet bitte immer diese strengen Vergleichsoperatoren, da diese (mit drei Zeichen) auch die Datentypen vergleichen und nicht nur den Wert.

Als Abschluss des Theorieteils zu JavaScript haben wir noch die Möglichkeit der Ausgabe von Inhalten in die Konsole des Browsers über `console.log(“Hallo Welt”)` kennengelernt. Dieser Befehl eignet sich hervorragend, um ein Programm zu debuggen und zu entwickeln. Dies werden wir aber in der kommenden Lektion vermehrt kennenlernen.
Außerdem haben wir noch zwei Möglichkeiten der Einbindung von JavaScript in unsere HTML-Seite kennengelernt. An einem einfachen Beispiel haben wir gelernt, wie man JavaScript in eine Seite einbindet, so dass es jedem Besucher unserer Seite ausgeliefert und ausgeführt wird. Hier gibt es genau wie bei CSS auch verschiedene Möglichkeiten:

- `<script>`...`</script>` Tag im `<head>` des Dokuments
- als externe Datei, die über `<script src="func.js"></script>` geladen wird
  - dies ist die empfohlene Einbindungsform

Diese zwei Methoden der Einbindung von JS hat die gleichen Vor- und Nachteile wie das Einbinden von CSS: In einem Script-Tag im Head des Dokuments ist JavaScript isoliert vom restlichen Inhalt, aber wir müssen es in jedem Dokument wieder einbinden und ggf. an mehreren Stellen anpassen. Eine zentrale, externe Datei, die wir einbinden, ermöglicht hingegen Anpassungen an einer zentralen Stelle und eine zusätzliche Trennung von Inhalt und Logik. Daher ist letztere die empfohlene Form der Einbindung.

## Hausaufgabe

Als Hausaufgabe arbeitet bitte an eurer eigenen Website. In den nächsten Terminen werden wir nur noch wenig neuen Inhalt erarbeiten und vielmehr eure konkreten Fragen beantworten. Daher bereitet Fragen, die sich ergeben sollten, für die nächsten Sessions vor. Stellt aber auch gerne weiter vorab Fragen im Channel, ihr werdet jetzt alle über ähnliche Probleme stolpern.

Außerdem solltet ihr die heutigen Inhalte vor der nächsten Session nochmal selbstständig vertiefen, am einfachsten über Online Tutorials wie

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
- https://www.youtube.com/watch?v=x2RNw4M6cME erste Hälfte

Die Wiederholung wäre gut, da wir in der nächsten Session direkt darauf aufbauen, weitere Theorie lernen und dann möglichst schnell eigene JS-Logik programmieren wollen.
