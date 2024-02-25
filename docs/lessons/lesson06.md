---
title: "Lektion 06: JS I"
sidebar_label: "06: JS I"
sidebar_position: 6
sidebar_class_name: hidden
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Wenn dies, dann das" />

import ProminentLink from '@site/src/components/Docs/ProminentLink';

<ProminentLink link="https://docs.google.com/presentation/d/1CS1gnl6RS-2Y5-K7RTI0qde6tK7UvRoESxMygHTqZ64">Folien</ProminentLink>

## Weekly 🔥 tips

_spielend lernen_

In dieser Woche haben wir uns nicht gezielt Tastenkürzel oder Bedienkonzepte angeschaut, sondern verschiedene Websites angeschaut, auf denen man spielend die Inhalte der vergangenen Wochen lernen kann.

Ein Spiel zur Positionierung mit FlexBox ist [Flexbox Froggy](https://flexboxfroggy.com/#de). Hier müssen Frösche auf den Seerosenblättern der gleichen Farbe positioniert werden. Hierfür stehen nur die CSS-Eigenschaften aus dem Flexbox-Umfeld zur Verfügung. Diese werden spielerisch erklärt und vermittelt.

Ein weiteres CSS-Spiel ist [CSS Diner](http://flukeout.github.io/). Hierbei muss man die korrekten CSS-Selektoren schreiben, um auf einem Tisch platzierte Gegenstände auszuwählen. Neben den Selektoren, die wir bereits gelernt haben, werden hier auch fortgeschrittene Selektoren spielerisch vermittelt, so dass man am Ende “CSS rockt”.

Darüber hinaus haben wir euch noch drei weitere Spiele ganz kurz vorgestellt. Diese nutzen und vermitteln alle JavaScript, daher sind wir vor der heutigen Session da auch nicht viel mehr drauf eingegangen. Schaut euch das bei Interesse gerne an. Leider ist kein Spiel dabei, was gezielt Manipulation des HTML vermittelt, wie wir es heute gelernt haben.

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

## Live Coding

Wie immer ist es sehr schwer, das Live Coding hier zusammenzufassen. Wir haben gemeinsam die ersten Schritte in JavaScript gemacht und dabei die Basics kennengelernt.

Dabei haben wir die Einbindung von JavaScript in unsere HTML-Seite kennengelernt. An einem einfachen Beispiel haben wir gelernt, wie man JavaScript in eine Seite einbindet, so dass es jedem Besucher unserer Seite ausgeliefert und ausgeführt wird.

- als externe Datei, die über `<script src="func.js"></script>` geladen wird

Eine zentrale, externe Datei, die wir einbinden, ermöglicht hingegen Anpassungen an einer zentralen Stelle und eine zusätzliche Trennung von Inhalt und Logik.

Weitere Themen waren:

- [Codestruktur](https://javascript.info/structure)
- [Variablen](https://javascript.info/variables)
- [Einfache Operatoren](https://javascript.info/operators)
- [Bedingungen](https://javascript.info/ifelse)
- [Funktionen](https://javascript.info/function-basics)
- [Interaktion mit HTML](https://javascript.info/searching-elements-dom)

## Hausaufgabe

Als Hausaufgabe arbeitet bitte an eurer eigenen Website. In den nächsten Terminen werden wir nur noch wenig neuen Inhalt erarbeiten und vielmehr eure konkreten Fragen beantworten. Daher bereitet Fragen, die sich ergeben sollten, für die nächsten Sessions vor. Stellt aber auch gerne weiter vorab Fragen im Channel, ihr werdet jetzt alle über ähnliche Probleme stolpern.

Außerdem solltet ihr die heutigen Inhalte vor der nächsten Session nochmal selbstständig vertiefen, am einfachsten über Online Tutorials wie

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
- https://javascript.info/

Die Wiederholung wäre gut, da wir in der nächsten Session direkt darauf aufbauen, weitere Theorie lernen und dann möglichst schnell eigene JS-Logik programmieren wollen.
