---
title: "Lektion 01: Auftakt"
sidebar_label: "01: Auftakt"
sidebar_position: 1
sidebar_class_name: none
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Wer bin ich und was mache ich eigentlich hier?" />

import ProminentLink from '@site/src/components/Docs/ProminentLink';

<ProminentLink link="https://docs.google.com/presentation/d/1T1VxoPsMRBB2l_o2H6wj5UjW_iJ-cHuaJOs3A_DF2IM">Folien</ProminentLink>

## Hinweise zum Ablauf

Ziel: Grundlagen erlernen und in einem einfachen Projekt direkt umsetzen

Hier möchten wir euch ein paar Verhaltensweisen nahelegen, so dass der Ablauf möglichst problemlos ist

- Wir nutzen Zoom für die Durchführung der wöchentlichen Sessions

  - Das Zoom-Meeting startet ~10 Minuten vor offiziellem Beginn der Session, damit sich jeder einwählen kann und wir rechtzeitig anfangen können. Nutzt die Zeit aber gerne schon, um zu chatten.
  - Jeder sollte die Möglichkeit haben per Audio und Video teilzunehmen. Ihr seid in den Lektionen auch gefordert, wir entwickeln vieles gemeinsam und wir wollen uns austauschen
  - Wir werden mit Webcam streamen und euch auch unseren Bildschirminhalt teilen, eine Teilnahme über das Handy ist also aufgrund der geringen Bildschirmgröße schwierig
  - Nutzt Zoom auch gerne, um euch zu connecten, wenn ihr Fragen habt oder ähnliches

- Vor und nach einer Session

  - Mattermost als Plattform für Austausch jeglicher Art es gibt einen eigenen Kurschannel **Webprojekt – Einstieg in die Webentwicklung**; dieser ist nur euch vorbehalten. Also seid offen; wir sind unter uns
  - nutzt private Nachrichten nur für Dinge, die nicht auch für andere Teilnehmende relevant sein könnten, bspw. individuelle Fragen zum Projekt/einem Problem
  - helft euch gegenseitig, wir versuchen möglichst viel auch außerhalb der Kurszeiten zu beantworten, aber vielleicht hat jemand anderes aus dem Kurs bereits das gleiche Problem gehabt. Dann unterstützt euch und traut euch ruhig, zu fragen!

- Während der Session:

  - gerne immer Fragen stellen, wie wenn wir im gleichen Raum wären. Wie ein “Handheben” funktionieren kann, müssen wir gemeinsam herausfinden
  - nicht “verstecken”: vor allem in unserem Beruf ist es sehr wichtig, asynchron und remote arbeiten zu können
  - Wie bereits weiter oben geschrieben, wollen wir während der Sessions gemeinsam etwas erarbeiten. Seid also aktiv dabei, denkt mit, gebt Input und stellt viele Fragen
  - Umfragen als “Test” nach Theorie-Teil, anonym, nur für euch um euch selbst zu überprüfen und die vorherigen Inhalte noch einmal zu festigen

- Ablauf einer Lektion

  - ggf. Review ausgewählter Hausaufgaben (Fragen beantworten)
  - Theoretischer Input und/oder Live-Coding, zusammen mit euch
  - Hausaufgabe vorstellen; Material wird zur Verfügung gestellt

- Zusammenfassend: Nutzt die Tools intensiv, wir versuchen auf alles zu antworten, vernetzt euch untereinander, tauscht euch aus, stellt Fragen und seid neugierig

- Zusätzliches Material, aber hauptsächlich Codebeispiele, werden wir euch auf GitHub zur Verfügung stellen. Eine genauere Einführung erhaltet ihr zu gegebener Zeit.

- Abgabe von Hausaufgaben

  - kleine Aufgaben, zu dem Thema der Lektion (ihr sollt weiter genug Zeit haben, am eigenen Projekt zu arbeiten)
  - freiwillig, aber Kurs lebt von Teilnahme und so kriegt ihr Feedback
  - bis spätestens Sonntag vor einer Session, 10:00 Uhr morgens
  - Abgabe per Nachricht im Channel in Mattermost; Form kann sich im Laufe des Kurses ändern
  - Ggf. Vorstellung/Besprechung im nächsten Termin (anonym; wenn es deine Abgabe ist, kannst du gerne in der Session Fragen stellen, musst es aber nicht)

- **Was dieser Kurs nicht ist**

  - in diesem Kurs lernt ihr keine serverseitge Programmierung (z.B. PHP oder Python)
  - kein Einstieg in die Bedienung von Content Management oder Shop Systemen (Wordpress, Drupal)

## Wie funktioniert das Internet?

- HTTP - Hypertext Transfer Protocol als Basis der Kommunikation zwischen Computern (Client - Server)
  - standardisiert Kommunikation zwischen beteiligten Maschinen
  - Besteht grundlegend aus Anfrage (Request) und Antwort (Response)

![Internet](/img/lessons/01/internet.jpg)

1. Browser erzeugt Request: “bitte gib mir das Dokument XYZ”
1. Server sucht passendes Dokument, erstellt Inhalte ggf. dynamisch, ...
1. Server sendet eine Text-Antwort (enthält HTML, CSS, JS)
1. Browser erhält Antwort und erzeugt grafische Ansicht des Texts

## Sprachen des Internets

![Einhorn](/img/lessons/01/unicorn.png)

Quelle: https://giphy.com/gifs/dance-crazy-rainbow-ZJlesIV8TnabS

Die drei Sprachen HTML, CSS und JS stellen die essentiellen Sprachen dar, die eine Website ausmachen. Jeder Browser versteht sie, kann sie interpretieren und erzeugt daraus ein für uns Menschen verständliches Dokument.
Jede dieser Sprachen hat eine ganz spezifische Aufgabe, die wir im Laufe des Kurses genau erkunden und kennenlernen werden.

Interaktive Beispiele zum Herumspielen:

- https://codepen.io/Anna_Batura/pen/QEAqyE
- https://codepen.io/VoloshchenkoAl/pen/dMWxoL
- https://codepen.io/zuraizm/pen/vGDHl

### HTML

_Hyper Text Markup Language_

Strukturiert Inhalte (Überschrift, Text, Bild, Video, Tabelle, Liste, …) einer Website.

```html
<div class="content">
  <h2>My HTML example</h2>
  <p>
    Find more info at
    <a href="www.bastibuck.de">www.bastibuck.de</a>
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ex optio
    molestiae deleniti accusantium nobis hic, quia, quaerat ipsa numq eius
    expedita odit earum. Dolores dolore iusto est earum praesentium?
  </p>
</div>
```

Die erste Website der Geschichte: http://info.cern.ch/hypertext/WWW/TheProject.html

### CSS

_Cascading Style Sheets_

Gestaltung (Textfarbe, Position, Hintergrundfarbe, Größe, Rahmen, …) einer Website.

```css
html {
  border-top: 5px solid #fff;
  background: #58ddaf;
  color: #2a2a2a;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
}
```

### JS

_JavaScript_

Bringt Bewegung/Interaktivität (Reagiert auf Benutzereingaben, verändert Inhalte, unendliche Möglichkeiten, ...) in eine Website.

```js
function goNext() {
  loop++;
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform =
      "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
  }
}
```

## Tools

Wir werden einige Werkzeuge benötigen, um unsere eigene Website zu programmieren. Die verlinkten Tools werden wir nutzen und empfehlen wir euch auch. So fällt es euch leichter uns zu folgen und selber tätig zu werden.

- Editor
  - [VS Code](https://code.visualstudio.com/)
  - Sublime Text
  - Atom
  - Vim
- Browser mit Entwicklerwerkzeugen
  - Chrome
  - Firefox
- Suchmaschinen
  - (Fast) alle Probleme wurden bereits gelöst, nutzt dieses Wissen

## Hausaufgabe

Bitte richtet euch euren Rechner so ein, dass ihr

1. einen Editor installiert habt
1. einen Browser mit Entwicklertools installiert habt

Macht euch bitte außerdem Gedanken (Thema, Name, Umfang, Inhalte, offene Fragen, Probleme, …), welches **Projekt** ihr im Rahmen des Kurses entwickeln wollt.
Schreibt eure Gedanken im neuen Editor in ein Dokument, speichert es und schickt es uns über den Chat zu. Bereitet euch auch vor, im kommenden Termin eure Idee kurz den anderen vorzustellen.

**Hinweise**:
Bei der Wahl der Form (Prosa, Stichpunkte, Mindmap, …) seid ihr vollkommen frei. Es sollte lediglich ein Textdokument sein, das Dateiformat ist aber (relativ) egal. Bitte verwendet ein Format, das im Klartext im Editor geschrieben und gelesen werden kann (kein Word etc.).

In den Materialien findet ihr ein Beispiel, das in **Markdown** geschrieben ist. Dies ist ein sehr verbreitetes Format zum schnellen, vereinfachten Erzeugen von Textdokumenten mit strukturierten Inhalten (eben wie HTML). Wie ihr so ein Format nutzen könnt, haben wir euch in eben diesem File beschrieben.
