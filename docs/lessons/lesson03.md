---
title: "Lektion 03: HTML & CSS"
sidebar_label: "03: HTML & CSS"
sidebar_position: 3
sidebar_class_name: hidden
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Wie wird das jetzt schön?" />

import ProminentLink from '@site/src/components/Docs/ProminentLink';

<ProminentLink link="https://docs.google.com/presentation/d/1-k-FIIybRUgFufQQh4YVpDepWf3IbzKAy7AKQB4dTao">Folien</ProminentLink>

## Feedback Hausaufgaben

- Ihr habt alle individuelles Feedback erhalten
- Insgesamt habt ihr das aber sehr gut gemacht, wir hoffen es hat euch auch Spaß gemacht und ihr habt dabei besser verstehen können, wie man HTML schreibt
- Noch ein paar Hinweise
  - Prettier ist auch nützlich zum Prüfen, ob man einen Fehler im Code hat (nicht valides HTML). In diesem Fall kann Prettier den Code nicht automatisch formatieren und gibt eine Fehlermeldung aus.
  - **Bitte beachtet für künftige Hausaufgaben und euer Projekt**: Nutzt die Validatoren für HTML und CSS, um fehlerfreien Code zu erzeugen. Wir möchten das nicht für jede Hausaufgabe von euch machen müssen.
  - Wir werden jetzt nicht mehr explizit weitere HTML-Elemente kennenlernen. Für euer Projekt und ggf. auch Hausaufgaben, seid ihr selbst gefordert durch die zur Verfügung gestellten Links zu MDN oder auch durch Google selber euch die entsprechenden Element beizubringen und anzuwenden.

## Weekly 🔥 tips

_Arbeiten mit Tabs (bspw. im Browser, aber auch in VS Code)_

| Funktion                                              | Tastenkürzel       |
| ----------------------------------------------------- | ------------------ |
| Wechsel zwischen Tabs                                 | Strg + Tab         |
| Wechsel zwischen Tabs (rückwärts)                     | Strg + Shift + Tab |
| Aktiven Tab schließen                                 | Strg + w           |
| neuen Tab erzeugen (nur im Browser)                   | Strg + t           |
| zuletzt geschlossenen Tab wieder öffnen               | Strg + Shift + t   |
| fokussiert dritten Tab im Browser (Zahl austauschbar) | Strg + 3           |
| schließt Tab unter dem Mauszeiger                     | Mausradklick       |

Testet das für euch wieder und versucht es, bei der Bearbeitung eurer Hausaufgabe anzuwenden.

## Projekt

Im Rahmen des Kurses sollt ihr ein eigenes Projekt in Form einer Website entwickeln. Hierfür gibt es eine Reihe an Formalitäten, die ihr erfüllen müsst, um ein Zertifikat und die ECTS erhalten zu können.

[Weitere Informationen zur Form, Abgabe und den Bewertungskriterien, findet ihr auf der Projektseite](../project.md).

## HTML - Live-Coding & Theorie

_Dieser Abschnitt des Kurses ist schwer wiederzugeben. Wir wollen nur die wichtigsten Erkenntnisse zusammenfassen._

Als erstes haben wir die Datei `rezept.html` in `index.html` umbenannt. Dies ist eine Konvention, der unsere Hausaufgaben und auch euer Projekt folgen sollte, da Webserver immer die Seite in einem Ordner, die `index.html` heißt, als erstes anzeigen. Es ist also der Einstieg in euer Projekt: eure Homepage.

### Ordnerstruktur

Als weiteren Schritt haben wir eine zu empfehlende Ordnerstruktur für euer Projekt betrachtet und die Vorteile, durch das Hinzufügen von lokalen Bildern, einer CSS-Datei und Links zu anderen HTML-Dateien (Seiten eurer Website), herausgestellt.

Unsere Empfehlung wäre folgende Struktur, ihr könnt aber auch davon abweichen.

![Empfohlene Ordnerstruktur](/img/lessons/03/folder.png)

### Styling-Vorbereitung

Wir wollen das Rezept ein wenig anders gestalten; hauptsächlich wollen wir einen Bereich anpassen: den Header. So soll er aussehen:

- Hintergrundfarbe
- Einrückung des Textes
- das Wort "American" in den Farben der Nationalflagge der USA

![Kopfzeile der Website](/img/lessons/03/header.png)

### Strukturierende Elemente

Um dieses Ziel zu erreichen, mussten wir zunächst neue Elemente kennenlernen:
`<div>` und `<span>`. Sie sind beide strukturierende Element ohne eine zugeordnete Bedeutung. Dies unterscheidet sie grundlegend von bspw. `<p>` (Absatz), `<h1>` (Überschrift) oder `<a>` (Anker/Link).

Wir nutzen diese Elemente, um unserem Dokument weitere Struktur hinzuzufügen, ohne den Fluss des Inhalts zu verändern. Wir haben uns hierfür zunächst noch einmal den Unterschied zwischen Block- und Inline-Elementen aus Lektion 02: HTML angeschaut.

Die beiden neuen Elemente sind in genau dieser Eigenschaft unterschiedlich:

- `<div>` ist ein Block-Element ohne zugeordnete Bedeutung
- `<span>` ist ein Inline-Element ohne zugeordnete Bedeutung

Beide Elemente sind also Elemente, ohne Bedeutung. Sie zeichnen Inhalt also nicht als bspw. Überschrift aus. Vielmehr erhalten sie eine Bedeutung im Zusammenspiel mit CSS, was wir nachfolgend und nächste Woche lernen werden.

Neben diesen bedeutungslosen HTML-Elemente gibt es seit HTML5 noch weitere strukturierende Elemente, die allerdings eine Bedeutung haben. Hierzu zählen u.a. `<header>`, `<footer>`, `<main>`. Ihr müsst euch diese nicht merken, aber ihr sollt zumindest mal davon gehört haben.

Um unser Styling-Ziel zu erreichen haben wir anschließend unserem Dokument mittels der neugelernten Elemente `<div>` und `<span>` zusätzliche Struktur hinzugefügt. Zunächst sieht die Seite ohne zusätzliches CSS genau so aus wie vorher. Wir haben nur weitere Struktur hinzugefügt, die aber nichts am Fluss der Elemente ändert.
Das Ergebnis dieser Live-Coding Session findet ihr wieder auf GitHub.

## CSS

Wir haben uns erneut ins Gedächtnis gerufen, dass CSS für die Gestaltung von Inhalten zuständig ist, während HTML die Inhalte strukturiert.

![Dinosaurier](/img/lessons/03/rex.jpg)
_Wir erkennen anhand der Struktur (dem Skelett) worum es geht, aber schöner und ansprechender ist es doch mit Farbe, Form und Größe._

Cascading Style Sheets (“mehrstufige Formatvorlagen”) “beschreibt, wie ein **strukturiertes Element** am Bildschirm [...] dargestellt wird” ([MDN](https://developer.mozilla.org/de/docs/Web/CSS), 2020). Wir können mit CSS also die durch HTML strukturierten Elemente stylen.

### CSS-Regeln

```css
a {
  color: red;
  background: green;
}
```

Auch CSS ist eine Sprache und folgt damit festen Regeln zu Syntax, Vokabeln und Grammatik. Ihr seht hier ein Beispiel für eine solche Regel. Sie besteht immer aus einem **Selektor**, einer oder mehreren **Eigenschaften**, die jeweils einen **Wert** zugeteilt bekommen.

Getrennt werden die Eigenschaften vom Selektor durch geschwungene Klammern. Der Wert einer Eigenschaft steht hinter einem Doppelpunkt und die Kombination aus Eigenschaft und Wert wird durch ein Semikolon beendet. Diese Syntax muss zwingend eingehalten werden. Sonst kann es sein, dass der Browser unsere Angaben nicht versteht.

Ein **Selektor** selektiert kein, ein oder mehrere Elemente in einem HTML-Dokument anhand verschiedener Möglichkeiten. Hierzu zählen bspw. der Typ des Elements (`a`, `h1`, `div`, etc.), Klassen oder IDs. Zu den letzteren kommen wir in der nächsten Session.

Wenn kein Element zu dem Selektor gefunden wird, passiert nichts. Wenn jedoch ein passendes Element gefunden wird, werden diesem Element die Eigenschaften und Werte zugeschrieben und so die Darstellung verändert.

CSS stellt ein [Standardsatz](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Referenz) an **Eigenschaften** bereits, die wir verwenden können. Diese Liste ist super lang und ihr müsst die nicht auswendig lernen; genau wie bei HTML lernt man die Eigenschaften nach und nach kennen. Im nachfolgenden Live-Coding haben wir bereits einige kennengelernt und weitere werden in der nächsten Woche folgen.

Die **Werte**, die Eigenschaften annehmen sollen, sind ebenfalls vorgegeben und müssen zur jeweiligen Eigenschaft passen. Eine Farbeigenschaft kann bspw. keine Größenangabe annehmen.

## Live-Coding - CSS

_Dieser Abschnitt des Kurses ist schwer wiederzugeben. Wir wollen nur die wichtigsten Erkenntnisse zusammenfassen._

Als erstes haben wir gelernt, über welchen Weg man einer HTML-Seite Gestaltung mittels CSS hinzuzufügen kann.

- Als eingebundene Datei
  - CSS-Regeln in separater Datei, die dann in alle HTML-Dateien eingebunden wird
  - ermöglicht gleichen Stil über verschiedene Seiten hinweg

Anschließend haben wir noch einige einfache CSS-Eigenschaften/-Properties kennengelernt.

| Eigenschaft        | Beschreibung                 |
| ------------------ | ---------------------------- |
| `color`            | Textfarbe                    |
| `background-color` | Hintergrundfarbe             |
| `font-size`        | Schriftgröße                 |
| `height`           | Höhe                         |
| `width`            | Breite                       |
| `border`           | Rahmen                       |
| `border-width`     | Rahmendicke                  |
| `border-style`     | Rahmenstil                   |
| `border-color`     | Rahmenfarbe                  |
| `display`          | Änderung der Darstellungsart |

Das Ergebnis findet ihr auch wieder in der entsprechenden CSS-Datei auf GitHub.

Zusammenfassend kann man zu diesem Abschnitt sagen, dass die Gestaltung einer Website immer ein zusammenspiel aus HTML und CSS ist. Mit **HTML** bestimmen wir und erzeugen ggf. zusätzliche Struktur, die wir dann mit **CSS** gestalten können. Hierfür wird in CSS ein Element selektiert und anschließend mit bestimmten Eigenschaften versehen.

### Validierung

Auch für CSS gibt es einen Validator vom W3C: https://jigsaw.w3.org/css-validator/#validate_by_input Bitte nutzt diesen ebenfalls vor Abgabe von Hausaufgaben und eurem Projekt. Bei CSS ist der Browser auch nicht so verzeihend wie bei HTML. Wenn ihr euch hier vertippt oder eine schließende Klammer vergesst, kann es sein, dass alle nachfolgenden Regeln nicht mehr betrachtet werden.

## Hosting

Da ihr in diesem Projekt Websites entwickeln sollt, kommen wir um dieses Thema nicht komplett herum. Es gibt aber heutzutage sehr einfache und sogar kostenfreie Lösungen, um statische Websites wie unsere zu hosten.

Hierzu zählt unter anderem [Netlify](https://www.netlify.com/). Unser Vorschlag wäre, dass ihr diesen Anbieter nutzt, um eure Hausaufgaben und euer Projekt zu hosten. Das macht die Abgabe einfacher, und ihr könnt es auch sehr einfach mit Freunden oder anderen Teilnehmern des Kurses teilen, wenn ihr mal Hilfe benötigt.

Ihr könnt aber auch einen anderen Hoster nutzen. Wichtig ist nur, dass ihr am Ende eine Website im Internet aufrufen könnt.

### Beispiel Website in Netlify

In diesem Segment haben wir euch gezeigt, wie man eine Website auf [Netlify](https://www.netlify.com/) errichtet. Nach dem Login kann man einfach per Drag and Drop einen **Ordner** vom eigenen Computer auf die entsprechende Fläche in Netlify ziehen. Netlify kopiert diesen dann auf einen Webserver und stellt uns eine URL zur Verfügung unter welcher diese Seite nun erreichbar ist.

Ihr könnt auch vorhandene Seiten durch erneutes Drag and Drop aktualisieren. Das ist besonders für euer Projekt sinnvoll.

### Hinweis: Urheberrecht und Impressumspflicht

Eure Websites sind damit für jeden, der die URL kennt, sichtbar. Damit ist eure Website öffentlich und sollte den Mindestanforderungen an eine Website folgen. Dass ihr keine Urheberrechtsverstöße begeht, sollte selbstverständlich sein. Darüber hinaus gibt es aber eine [Impressumspflicht](https://www.abmahnung.org/impressum-private-homepage/) für Websites. Auf der Website findet ihr ein einfaches Beispiel, das ihr für eure Seite auch nutzen könnt. Wir haben bisher oft [e-Recht24](https://www.e-recht24.de/impressum-generator.html) genutzt, um ein Impressum zu generieren.

Das Impressum macht deutlich, wer der Betreiber einer Website ist. In diesem Fall seid ihr das als Privatpersonen, daher gibt es auch nur wenige Informationen, die ihr angeben müsst. Verlinkt einfach auf jeder Seite euer Impressum, dann seid ihr auf jeden Fall auf der sicheren Seite.

## Hausaufgabe

Neben der eigentlichen Hausaufgabe benötigen wir von euch **euren Namen** und den **Titel eures Projektes**. Schickt uns dies bitte einfach als kurze Nachricht zu.

In dieser Woche solltet ihr aber bitte noch das Rezept, das ihr in der letzten Woche erzeugt habt oder ihr nehmt unser Beispielrezept aus Lektion 01, erweitern und mit ein wenig Styling versehen. Daher

- nennt euer Rezept bitte in `index.html` um
- fügt eurer Seite **lokale Bilder** hinzu
- fügt eurem Rezept ein **Impressum** als neue Seite hinzu
- fügt eine **CSS-Datei** hinzu, über die ihr das Rezept nach eigenem Geschmack styled
  - seid kreativ und wild; nutzt dieses Rezept gerne zum Testen und rumspinnen
- erweitert das HTML gerne um weitere Inhalte und/oder strukturierende Elemente zur besseren Gestaltung mittels CSS

Abgabe erfolgt diese Woche das erste Mal als URL über Mattermost. Seht dies als ersten Test auch für eure Projektabgabe an.

### Hinweise

Darüber hinaus empfehlen wir euch, mit eurem **eigenen Projekt anzufangen**. Legt euch bspw. die Ordnerstruktur an, erzeugt eine `index.html` und ggf. weitere Seiten, die euer Projekt benötigt. Bindet bereits eine CSS-Datei ein, in der ihr bspw. schon die Hintergrundfarbe der Seiten definiert.

In den kommenden Terminen wird es weiter Inhalte geben, die ihr dann auch in euer eigenes Projekt einfließen lassen könnt. Es wird auch weiter Hausaufgaben geben, die das gelernte der jeweiligen Lektion vertiefen. Aber denkt an das Abgabedatum des Projektes.

Wenn ihr Fragen habt, stellt diese wie in der ersten Lektion beschrieben über Mattermost im Channel. Tauscht euch aus, arbeitet zusammen an etwas, was ihr dann in euren Projekten nutzt (macht das aber dann in der Dokumentation deutlich) und nutzt die Möglichkeiten des Internets.

Wir empfehlen euch hier auch die anderen Videos von Colt Steele.

- Day 2 - https://www.youtube.com/watch?v=L1h--yeMbZc
- Day 3 - https://www.youtube.com/watch?v=ZEHRyN6y71M
- Day 4 - https://www.youtube.com/watch?v=sPStRhWqNMg
- Day 5 - https://www.youtube.com/watch?v=naha1DIHK4E

In diesen Videos stellt er noch viel mehr HTML-Elemente dar. Nutzt diese gerne auch in euren Projekten oder auch den Hausaufgaben. Webentwicklung lernt man nur durch’s machen: Übung macht den Meister!

Fügt bspw. diese Woche eurem Rezept ein Feedback-Formular hinzu, dass einen Namen, die Bewertung als Select-Feld mit 1-5 Punkten und ein Freitext-Feld beinhaltet. Siehe dazu **Day 4**.
