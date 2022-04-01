---
title: "Lektion 05: Webentwicklung"
sidebar_label: "05: Webentwicklung"
sidebar_position: 5
sidebar_class_name: hidden
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Wissen wird Website" />

[Folien](https://docs.google.com/presentation/d/14EoCps17dZHYhCic13CM6KHBDhbAWhxDDTiuiPZs7M4)

## Weekly 🔥 tips

_Google Fonts_

Da nicht sichergestellt werden kann, dass die Nutzer unserer Website alle notwendigen Schriftarten auf ihrem Gerät installiert haben, werden heute meist Schriftarten mit der Website ausgeliefert und auf das Gerät geladen. So erhalten alle Anwender das gleiche Ergebnis unserer Website. Diese eingebundenen Schriften können lokal neben anderen Inhalten wie Bildern liegen, oder von einem WebService geladen werden.

Ein solcher WebService ist bspw. [Google Fonts](https://fonts.google.com/). Hier finden sich etliche Schriftarten, die wir auf unserer Website verwenden können. Das Interface lässt uns die passendste Schriftart finden und auswählen.

Eingebunden wird die Schriftart dann über ein `<link>`-Element (genau wie unsere CSS-Dateien) und eine entsprechende Regel im CSS. Hier setzen wir die `font-family` auf den entsprechenden Namen der Schrift. Wir sind diese Schritte gemeinsam durchgegangen, aber die Google Fonts Seite beschreibt das notwendige Vorgehen sehr gut und macht es auch sehr einfach.

## CSS

In diesem Block der heutigen Lektion haben wir die Inhalte der letzten Woche noch einmal wiederholt. Unter anderem haben wir unser Wissen über verschiedene Selektoren in CSS aufgefrischt.

Die Inhalte möchte ich hier nicht noch einmal aufführen. Ihr könnt sie in der letzten Lektion nachlesen.

Abschließend haben wir unser Wissen noch in ein paar kleinen Tests erneut getestet. Diese Tests findet ihr wieder auf GitHub, wo ihr sie gerne noch einmal nachvollziehen könnt.

## Figma

Gemeinsam haben wir noch einmal in [Figma](https://www.figma.com/) geschaut, wo wir sehen konnten, dass wir hier nicht nur unsere Website designen können, sondern auch etliche CSS Eigenschaften direkt nachschauen und so in unseren Code übernehmen können. So ist sichergestellt, dass wir bspw. exakt die gleiche Farbe verwenden, wie der Designer - in diesem Fall wir selbst - ausgesucht hat.

Außerdem können wir in Figma auch einige CSS Eigenschaften kennenlernen, ohne diese zu googlen und Dokumentation zu lesen. Dies haben wir am Beispiel von Schlagschatten `(box-shadow)` und Drehungen `(transform: rotate())` gesehen.

**Aber eine Warnung!** Übernehmt nicht alle CSS-Anweisungen blind. Das Tool funktioniert grundlegend anders, als eure Website. Vor allem die Positionierung von Elementen ist komplett anders, da diese per Drag’n’Drop platziert werden und nicht abhängig von anderen Elementen ausgerichtet werden. Daher: keine Positionsangaben übernehmen; Farben, Schriftgrößen, Abstände, Größen, etc. gerne dort ablesen und übernehmen.

## Live-Coding

_Webentwicklung am Beispiel einer Navigation_

![Fertige Navigation](/img/lessons/05/navi.png)

Wie immer ist es sehr schwer, das Live Coding hier zusammenzufassen. Wir haben diese Woche gemeinsam eine Navigation entwickelt, die ich vorher in Figma gestaltet habe. Wir konnten dabei das Wissen der vorherigen Sessions geballt anwenden und das erste Mal einen realistischen Ablauf der Entwicklung vollziehen.

Hauptsächlich haben wir dabei gelernt, wie man ein Layout in HTML und CSS umsetzt. Dieser Workflow besteht grundlegend aus drei Schritten:

1. Vorlage ansehen - Wo will ich hin?
2. Umsetzung im Code - Wie komme ich dort hin?
3. Kontrolle im Browser - Bin ich angekommen?

Diese drei Schritte werden immer wieder durchlaufen, so dass sich eine sehr kleinteilige, iterative Arbeitsweise ergibt und am Ende die Vorlage umgesetzt wurde. Ich benötige also drei verschiedene Fenster: meine Vorlage (kann ein Bild, ein Tab mit Figma, ein Foto, … sein), meinen Editor, in dem mein Projektordner geöffnet ist, und meinen Browser, in dem die Website geöffnet ist, an der ich aktuell arbeite.

### 1. Vorlage ansehen

Zuerst schaue ich mir die Vorlage genau an. Welche Elemente existieren? Welche HTML-Elemente muss ich dafür nutzen? Wie muss das entsprechende HTML aufgebaut sein?
Sobald ich einen groben Plan habe, wähle ich mir einen Teil aus, den ich umsetzen will, und gehe zu Schritt 2 über.

Bspw. habe ich in der Vorlage erkannt, dass meine Navigation im Header der Seite platziert sein soll, dieser über die ganze Breite der Seite geht und eine bestimmte Hintergrundfarbe hat.

### 2. Umsetzung im Code

Ich füge meinem Dokument also die benötigten HTML-Elemente für meine kleine Teilaufgabe der gesamten Umsetzung hinzu. In diesem Beispiel füge ich einen `<header>` hinzu, in dem ich zunächst nur das Wort “Navigation” einfüge.

Im CSS erzeuge ich eine dazu passende Regel, die über den Elementtyp den `<header>` anspricht und füge eine Hintergrundfarbe hinzu.

```css
header {
  background: #55ffd6;
}
```

### 3. Kontrolle

Als letzten der drei Schritte wechsel ich wieder in meinen Browser und lade die Website neu, um zu kontrollieren, ob das Ergebnis dem entspricht, wie ich mir es in Schritt 1 vorgestellt habe. Wenn ja, gehe ich zum nächsten Element über, wenn nicht, beginnt der Prozess von vorne und ich muss schauen, wo ich einen Fehler gemacht habe, bzw. welche zusätzlichen CSS-Anweisungen noch fehlen.

### Hinweis

So schnell und zielgerichtet, wie wir im Live-Coding gearbeitet haben, werdet ihr (wahrscheinlich) noch nicht arbeiten können. Ich habe jahrelange Erfahrung, das Live-Coding schriftlich vorbereitet und auf meinem zweiten Monitor die ganze Zeit geguckt, was ich schreiben muss. Damit entspricht das in keinster Weise der Realität. Die Umsetzung eines Layouts ist wie beschrieben ein kleinteiliger, iterativer Prozess, der manchmal sehr lange dauern kann.

Da ihr auch die meisten Befehle noch nicht kennt, müsst ihr zusätzlich diese auch erstmal googlen und kennenlernen. Also seid nicht frustriert, wenn die Umsetzung in der Hausaufgabe nicht so flüssig von der Hand geht.

## Hausaufgabe

Als Hausaufgabe für diese Woche sollt ihr bitte eine eigene Navigation erzeugen. Da die meisten von euch in ihrem Projekt eine Website mit mehreren Seiten umsetzen wollen, bietet es sich an, diese dann auch in eurem Projekt zu verwenden.

_Für alle, die bereits eine Navigation zur letzten Session umgesetzt hatten, und alle, die noch weiter arbeiten wollen, schaut euch bitte `:hover` an und versucht eure Navigation so zu erweitern, dass die Menüpunkte sich beim Überfahren mit der Maus verändern._

Bitte sendet mir eure Abgabe wieder bis Sonntag, 10:00 Uhr zu, damit ihr Feedback erhalten könnt. Wenn ihr die Navigation in eurem Projekt verwendet, kann es auch bereits ein Link zu eurem Projekt sein.

### Hinweise

Ihr habt hierbei keine Vorgaben, also überlegt, in welcher Form euer Projekt eine Navigation nutzen soll, wie diese aufgebaut sein soll und welches Styling sie haben soll. Nutzt auch Inspiration bspw. von [CodePen](https://codepen.io/search/pens?q=navigation). Aber entwickelt das bitte selber, kein stumpfes Copy-Paste.

Schaut euch auch nochmal das Ergebnis des Live-Codings heute auf GitHub an und schaut euch dort etwas ab. Es gibt bei CSS kein richtig oder falsch, das visuelle Ergebnis zählt. Es kann Unterschiede bspw. in der Wartbarkeit des Codes geben; das ist für euch aber aktuell kein Kriterium.

Und bitte validiert euren Code (HTML und CSS) vor der Abgabe wieder! Denkt dran, dass ihr jetzt mehrere Dokumente habt und diese alle prüft.
