---
title: "Lektion 05: Webentwicklung"
sidebar_label: "05: Webentwicklung"
sidebar_position: 5
sidebar_class_name: none
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Wissen wird Website" />

import ProminentLink from '@site/src/components/Docs/ProminentLink';

<ProminentLink link="https://docs.google.com/presentation/d/14EoCps17dZHYhCic13CM6KHBDhbAWhxDDTiuiPZs7M4">Folien</ProminentLink>

## Video

<ProminentLink link="https://www.youtube.com/watch?v=hgHqdIEhaQk">Lesson 05</ProminentLink>

## Weekly 🔥 tips

_Web Fonts_

Da nicht sichergestellt werden kann, dass die Nutzer unserer Website alle notwendigen Schriftarten auf ihrem Gerät installiert haben, werden heute meist Schriftarten mit der Website ausgeliefert und auf das Gerät geladen. So erhalten alle Anwender das gleiche Ergebnis unserer Website. Diese eingebundenen Schriften können lokal neben anderen Inhalten wie Bildern liegen, oder von einem WebService geladen werden.

Ein solcher WebService ist bspw. [Bunny Fonts](https://fonts.bunny.net/). Hier finden sich etliche Schriftarten, die wir auf unserer Website verwenden können. Das Interface lässt uns die passendste Schriftart finden und auswählen.

Eingebunden wird die Schriftart dann über ein `<link>`-Element (genau wie unsere CSS-Dateien) und eine entsprechende Regel im CSS. Hier setzen wir die `font-family` auf den entsprechenden Namen der Schrift. Wir sind diese Schritte gemeinsam durchgegangen, aber die Bunny Fonts Seite beschreibt das notwendige Vorgehen sehr gut und macht es auch sehr einfach.

## CSS

In diesem Block der heutigen Lektion haben wir die Inhalte der letzten Woche noch einmal wiederholt. Unter anderem haben wir unser Wissen über verschiedene Selektoren in CSS aufgefrischt.

Die Inhalte möchten wir hier nicht noch einmal aufführen. Ihr könnt sie in der letzten Lektion nachlesen.

Abschließend haben wir unser Wissen noch in ein paar kleinen Tests erneut getestet. Diese Tests findet ihr wieder auf GitHub, wo ihr sie gerne noch einmal nachvollziehen könnt.

## Figma

Gemeinsam haben wir noch einmal in [Figma](https://www.figma.com/) geschaut, wo wir sehen konnten, dass wir hier nicht nur unsere Website designen können, sondern auch etliche CSS Eigenschaften direkt nachschauen und so in unseren Code übernehmen können. So ist sichergestellt, dass wir bspw. exakt die gleiche Farbe verwenden, wie der Designer - in diesem Fall wir selbst - ausgesucht hat.

Außerdem können wir in Figma auch einige CSS Eigenschaften kennenlernen, ohne diese zu googlen und Dokumentation zu lesen. Dies haben wir am Beispiel von Schlagschatten `(box-shadow)` und Drehungen `(transform: rotate())` gesehen.

**Aber eine Warnung!** Übernehmt nicht alle CSS-Anweisungen blind. Das Tool funktioniert grundlegend anders, als eure Website. Vor allem die Positionierung von Elementen ist komplett anders, da diese per Drag’n’Drop platziert werden und nicht abhängig von anderen Elementen ausgerichtet werden. Daher: keine Positionsangaben übernehmen; Farben, Schriftgrößen, Abstände, Größen, etc. gerne dort ablesen und übernehmen.

## Live-Coding

_Webentwicklung am Beispiel einer Navigation_

![Fertige Navigation](/img/lessons/05/navi.png)

Wie immer ist es sehr schwer, das Live Coding hier zusammenzufassen. Wir haben diese Woche gemeinsam eine Navigation entwickelt, die wir vorher in Figma gestaltet habe. Wir konnten dabei das Wissen der vorherigen Sessions geballt anwenden und das erste Mal einen realistischen Ablauf der Entwicklung vollziehen.

Hauptsächlich haben wir dabei gelernt, wie man ein Layout in HTML und CSS umsetzt. Dieser Workflow besteht grundlegend aus drei Schritten:

1. Vorlage ansehen - Wo wolllen wir hin?
2. Umsetzung im Code - Wie kommen wir dort hin?
3. Kontrolle im Browser - Sind wir angekommen?

Diese drei Schritte werden immer wieder durchlaufen, so dass sich eine sehr kleinteilige, iterative Arbeitsweise ergibt und am Ende die Vorlage umgesetzt wurde. Wir benötigen also drei verschiedene Fenster: unsere Vorlage (kann ein Bild, ein Tab mit Figma, ein Foto, … sein), unseren Editor, in dem mein Projektordner geöffnet ist, und unseren Browser, in dem die Website geöffnet ist, an der wir aktuell arbeiten.

### 1. Vorlage ansehen

Zuerst schauen wir uns die Vorlage genau an. Welche Elemente existieren? Welche HTML-Elemente müssen wir dafür nutzen? Wie muss das entsprechende HTML aufgebaut sein?
Sobald wir einen groben Plan haben, wählen wir uns einen Teil aus, den wir umsetzen wollen, und gehen zu Schritt 2 über.

Bspw. haben wir in der Vorlage erkannt, dass unsere Navigation im Header der Seite platziert sein soll, dieser über die ganze Breite der Seite geht und eine bestimmte Hintergrundfarbe hat.

### 2. Umsetzung im Code

Wir fügen in unserem Dokument also die benötigten HTML-Elemente für unsere kleine Teilaufgabe der gesamten Umsetzung hinzu. In diesem Beispiel fügen wir einen `<header>` hinzu, in dem wir zunächst nur das Wort “Navigation” einfügen.

Im CSS erzeugen wir eine dazu passende Regel, die über den Elementtyp den `<header>` anspricht und fügen eine Hintergrundfarbe hinzu.

```css
header {
  background: #55ffd6;
}
```

### 3. Kontrolle

Als letzten der drei Schritte wechseln wir wieder in unseren Browser und laden die Website neu, um zu kontrollieren, ob das Ergebnis dem entspricht, wie wir es uns in Schritt 1 vorgestellt haben. Wenn ja, gehen wir zum nächsten Element über, wenn nicht, beginnt der Prozess von vorne und wir müssen schauen, wo wir einen Fehler gemacht haben, bzw. welche zusätzlichen CSS-Anweisungen noch fehlen.

### Hinweis

So schnell und zielgerichtet, wie wir im Live-Coding gearbeitet haben, werdet ihr (wahrscheinlich) noch nicht arbeiten können. Wir haben jahrelange Erfahrung, das Live-Coding schriftlich vorbereitet und auf unserem zweiten Monitor die ganze Zeit geguckt, was wir schreiben müssen. Damit entspricht das in keinster Weise der Realität. Die Umsetzung eines Layouts ist wie beschrieben ein kleinteiliger, iterativer Prozess, der manchmal sehr lange dauern kann.

Da ihr auch die meisten Befehle noch nicht kennt, müsst ihr zusätzlich diese auch erstmal googlen und kennenlernen. Also seid nicht frustriert, wenn die Umsetzung in der Hausaufgabe nicht so flüssig von der Hand geht.

## Hausaufgabe

Als Hausaufgabe für diese Woche sollt ihr bitte eine eigene Navigation erzeugen. Da die meisten von euch in ihrem Projekt eine Website mit mehreren Seiten umsetzen wollen, bietet es sich an, diese dann auch in eurem Projekt zu verwenden.

_Für alle, die bereits eine Navigation zur letzten Session umgesetzt hatten, und alle, die noch weiter arbeiten wollen, schaut euch bitte `:hover` an und versucht eure Navigation so zu erweitern, dass die Menüpunkte sich beim Überfahren mit der Maus verändern._

Bitte sendet mir eure Abgabe wieder bis Sonntag, 10:00 Uhr zu, damit ihr Feedback erhalten könnt. Wenn ihr die Navigation in eurem Projekt verwendet, kann es auch bereits ein Link zu eurem Projekt sein.

### Hinweise

Ihr habt hierbei keine Vorgaben, also überlegt, in welcher Form euer Projekt eine Navigation nutzen soll, wie diese aufgebaut sein soll und welches Styling sie haben soll. Nutzt auch Inspiration bspw. von [CodePen](https://codepen.io/search/pens?q=navigation). Aber entwickelt das bitte selber, kein stumpfes Copy-Paste.

Schaut euch auch nochmal das Ergebnis des Live-Codings heute auf GitHub an und schaut euch dort etwas ab. Es gibt bei CSS kein richtig oder falsch, das visuelle Ergebnis zählt. Es kann Unterschiede bspw. in der Wartbarkeit des Codes geben; das ist für euch aber aktuell kein Kriterium.

Und bitte validiert euren Code (HTML und CSS) vor der Abgabe wieder! Denkt dran, dass ihr jetzt mehrere Dokumente habt und diese alle prüft.
