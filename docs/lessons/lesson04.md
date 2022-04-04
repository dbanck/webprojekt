---
title: "Lektion 04: CSS"
sidebar_label: "04: CSS"
sidebar_position: 4
sidebar_class_name: hidden
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Schönheit 2.0" />

[Folien](https://docs.google.com/presentation/d/1CGxDxY3hugHqQZCyG_fek_EufQo6onG3iPfX2Drrg0g)

## Feedback Hausaufgabe

Von der letzten Woche solltet ihr euer Rezept selber gestalten. Die Abgaben, die ich bekommen habe, haben bereits Feedback bekommen. Zusammenfassend: Sehr cool, dass ihr größtenteils auch schon rechts und links auf anderen Websites geguckt habt, was man noch so machen kann. Genau darum ging es auch ein bisschen: eure Neugierde zu wecken und die unendlichen Möglichkeiten von CSS zu erahnen.

Um diese Möglichkeiten zu vereinheitlichen haben wir im Kurs noch kurz [Normalize](https://necolas.github.io/normalize.css/) kennengelernt. Dies ist ein gutes Beispiel für Probleme, die jeder Frontendentwickler hat und durch eine Open-Source Lösung gelöst wird. Diese CSS-Datei, die wir in unsere Website einbinden können, stellt sicher, dass Unterschiede zwischen Browsern angeglichen werden.

Leider muss ich nochmal auf die Validatoren für [HTML](https://validator.w3.org/#validate_by_input) und [CSS](https://jigsaw.w3.org/css-validator/#validate_by_input) hinweisen, die ihr vor der Abgabe bitte benutzen sollt.

## Weekly 🔥 tips

_Mehr Produktivität in VS Code_

VS Code ist mit einer Menge sehr praktischer Shortcuts ausgestattet. Einige der von mir am häufigsten verwendeten Tastaturkürzel habe ich euch vorgestellt. Ihr findet im Web noch unzählige weitere Blogbeiträge zu diesem Thema, u.a. hier: https://jsmanifest.com/21-vscode-shortcuts-to-code-faster-and-funner/

### Aktuelle/markierte Zeilen auskommentieren (Toggle)

Manchmal möchte man schnell die Auswirkung einer bestimmten Zeile testen. Dafür kann man diese Zeile einfach selektieren oder mehrere Zeilen markieren und über `Strg + #` die Kommentierung der Zeilen hin- und herschalten.

### Zeile löschen

Um eine ganze Zeile komplett zu löschen, kann man diese einfach markieren oder mehrere selektieren und anschließend über `Strg + Shift + k` die ganze Zeile löschen.
Ein ähnliches Ergebnis mit einer einfachen Tastenkombination ist `Shift + Entf`. Dieser Shortcut schneidet die Zeile allerdings aus und speichert sie in der Zwischenablage. Wenn ihr da also gerade etwas gespeichert hattet, wird es überschrieben!

### Dateien öffnen

In immer größer werdenden Projekten ist man oftmals schneller, eine Datei direkt über ihren Namen zu öffnen (wählt also passende Dateinamen: `rezept.html` für ein Rezept bietet sich eher an als `datei2.html`). Über `Strg + p` öffnet sich ein Dialog, in dem ihr Dateinamen filtern und die Datei direkt öffnen könnt.

Hinweis: Die Suche in VS Code verzeiht Tippfehler sehr großzügig. Der Suchbegriff muss nicht am Anfang des Wortes sein. Der Suchbegriff kann auch zusammengesetzt sein.

### Command Palette

Alle Funktionen von VS Code können auch über die so genannte Command Palette (`Strg + Shift + p`) ausgeführt werden. So kann bspw. die aktuelle Datei formatiert (`Format`) werden, der Editor neugeladen (`Reload`) werden oder die Tastaturkürzel (`Shortcuts`) geöffnet werden.

### emmet

emmet ist ein in VS Code bereits integriertes Tool, dass es ermöglicht über eine bestimmte, CSS-ähnliche Syntax HTML Code zu erzeugen, ohne dass man die öffnenden und schließenden Tags selber schreiben muss. Einige Beispiele (`!`, `lorem`, `h2`) haben wir bereits gesehen. Es gibt aber auch weitaus umfangreichere Möglichkeiten. Bspw. kann eine Liste mit 3 Listeneinträgen, die jeweils ein betontes Element enthalten, über `ul>li\*3>strong` erzeugt werden.

Mehr Infos findet ihr in der offiziellen [Dokumentation](https://emmet.io/). Wenn ihr ein Highlight entdeckt habt, teilt es gerne im Channel mit den anderen und mir. Ich habe es auch gerade erst angefangen vermehrt zu nutzen.

## Theorie

### Weitere Selektoren

In der letzten Woche haben wir CSS-Selektoren kennengelernt, die über die Typen von HTML-Elementen eines oder mehrere solcher Elemente selektieren. Erinnert euch an eine Regel, die die Schriftfarbe einer Überschrift ändert.

```css
h1 {
  color: red;
}
```

Neben dieser Art der Selektion, Elemente über ihren **Elementtyp** zu selektieren, gibt es noch etliche weitere Möglichkeiten. Alle diese sind bei [MDN](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Selectors) sehr gut dokumentiert. Wir haben uns aber erstmal auf zwei einfache und fundamentale Möglichkeiten beschränkt: **Klassen** und **IDs**.

### Klassen

Eine Klasse können wir jedem HTML-Element einfach über das Attribut `class=""` hinzufügen. Eine Überschrift mit einer Klasse `text-red` sieht also so aus:

```html
<h1 class="text-red">Überschrift</h1>
```

Eine **Klasse** selektieren wir in CSS über eine besondere Syntax: einen **vorangestellten Punkt**.

```css
.text-red {
  color: red;
}
```

Klassen können beliebig oft vergeben werden. Wir können also mehrere Elemente mit der gleichen Klasse und einem damit verbundenen gleichen Styling versehen.

```html
<h1 class="text-red">Überschrift</h1>
<h2 class="text-red">Second Headline</h2>
<p class="text-red">Wörter in einem Absatz</p>
```

Alle diese drei Elemente erhalten mit der einen CSS-Regel das gleiche Styling, in diesem Fall die rote Textfarbe. Sprechende Klassennamen sind daher best-practice geworden.

Ein HTML-Element ist aber nicht auf eine Klasse beschränkt. Wir können ihm auch mehrere Klassen zuweisen und somit verschiedene Styling-Regeln auf ein Element anwenden. Dafür werden die einzelnen Klassen einfach mit einem Leerzeichen getrennt in das Attribut geschrieben. Ein Klassenname kann also keine Leerzeichen enthalten!

```html
<h1 class="text-red">Überschrift</h1>
<h2 class="text-red">Second Headline</h2>
<p class="text-red font-big">Wörter in einem Absatz</p>
```

So werden diese beiden Regeln auf den Absatz angewendet. Auf die beiden Überschriften wird nur die rote Textfarbe angewendet.

```css
.text-red {
  color: red;
}

.font-big {
  font-size: 30px;
}
```

Klassen sind die **empfohlene Art**, ein Element zu markieren und gezielt zu stylen. Vor allem Elemente ohne Bedeutung wie divs und spans benötigen eine Möglichkeit, wie sie angesprochen werden können.

### IDs

Eine weitere Möglichkeit ein Element zu markieren und über CSS zu selektieren ist eine **ID**. Wie der Begriff ID schon aussagt, darf diese in jedem HTML-Dokument nur einmal vorkommen. Hier zeigt sich also bereits die erste Einschränkung gegenüber Klassen.

Ein Element wird über ein bestimmtes Attribut mit einer ID versehen. Dieses lautet `id=""`.

```html
<h1 id="my-headline">Überschrift</h1>
```

Eine ID können wir in CSS über eine bestimmte Syntax selektieren: über eine **vorangestellte Raute**.

```css
#my-headline {
  color: red;
}
```

Neben der Einschränkung, dass eine ID global, also im gesamten Dokument nur einmal verwendet werden darf, kann auch nur - anders als bei Klassen - _eine_ ID vergeben werden. Eine Verknüpfung durch ein Leerzeichen ist also **nicht** erlaubt.

Besondere und einzigartige Elemente können mit einer ID versehen werden, ich empfehle aber größtenteils auf Klassen zu setzen, denn auch diese können eindeutig sein, müssen es aber nicht. Wenn ein weiteres Element ein bestimmtes Styling erhalten soll, füge ich einfach diese Klasse hinzu.

### Stufenförmige Formatvorlagen

Letzte Woche haben wir gelernt, dass CSS **stufenförmige** Gestaltungsbögen bedeutet. Heute wollen wir diesem Begriff einmal auf den Grund gehen. Wieso heißt die Sprache so und wieso können wir diese Eigenschaft für uns nutzen?

Angenommen wir wollen allen `<strong>` innerhalb von unseren ungeordneten Listen (`<ul>`) eine bestimmte Farbe geben. Alle weiteren `<strong>` Elemente sollen von dieser Regel unbeeinträchtigt bleiben. Letztes mal haben wir gelernt, wie wir Elemente diesen Typs ansprechen:

```css
strong {
  color: red;
}
```

Diese Regel verändert aber die Schriftarte **aller** Elemente diesen Typs auf unserer Seite, also auch in Absätzen, Überschriften, etc. In dem eingangs beschrieben Problem wollen wir das aber eben nicht. _ipsum dolor_ wäre im folgenden Beispiel auch rot.

```html
<ul>
  <li><strong>Text</strong></li>
  <li><strong>Text</strong></li>
</ul>
<p>
  Lorem, <strong>ipsum dolor</strong> sit amet consectetur adipisicing elit.
</p>
```

Eine Möglichkeit, dieses Ziel zu erreichen, haben wir heute bereits kennengelernt: wir könnten den `<strong class="is-now-red">` innerhalb unserer Liste eine Klasse zuweisen, die wir dann über CSS stylen. Das müssten wir aber überall tun. Wenn wir ganz allgemein unsere Vorlage bearbeiten wollen, so dass `<strong>`-Elemente in Listen **immer** rot sind, können wir weiterhin nur CSS-Selektoren auf Element-Typen verwenden, indem wir das eingangs genannte Feature der Sprache nutzen: Stufenförmig.

Selektoren sind nicht auf einen Teil beschränkt, sondern können auch aus mehreren Teilen zusammengesetzt sein. Ein solcher zusammengesetzter Selektor ist nachfolgend dargestellt.

```css
ul strong {
  color: red;
}
```

Diese Regel wird unser Problem lösen, ohne dass wir Klassen oder ähnliches verwenden. Warum?

Der Selektor selektiert zunächst alle `<ul>` - also den ersten Teil des Selektors. Das nachfolgende **Leerzeichen** sagt aus, dass von dort eine Stufe herabgestiegen werden soll. Es wird als nun nur innerhalb aller gefundenen `<ul>` nach dem zweiten Teil des Selektors `<strong>` gesucht. (Hier könnte bspw. auch ein Klassenselektor `.className-one` stehen).

Da sich in unserem HTML-Beispiel weiter oben die anderen `<strong>` innerhalb eines Absatzes (`<p>`) befinden, werden diese also nicht selektiert. Das vorangestellte ul dient also als Filter für die weitere Selektion.

Wir haben damit gelernt, dass man durch bestimmte Syntax die Elemente, die wir verändern wollen, noch gezielter einschränken kann. Viele weitere Beispiele für diese Syntax findet sich ebenfalls bei [MDN](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Selectors).

### Spezifität

Dieses schwer auszusprechende Wort, vor allem im Englischen "specificity", erklärt, warum eine CSS-Regel durch eine andere überschrieben wird. Es gibt fest definierte Regeln, wie die Bestimmung der einzelnen Spezifitätswerte funktioniert. Das ist [hier](https://dev.to/emmabostian/css-specificity-1kca) zig Mal besser erklärt, als ich es in unserer Kurszeit könnte. Daher lest gerne mal nach. Die grundlegenden Regeln haben wir aber gemeinsam kennengelernt:

- Regeln haben verschiedene Spezifität (Stärke)
- Die Stärke leitet sich von den verwendeten Selektortypen (Element, Klasse, ID, …) ab
  - Diese sind aufsteigend sortiert
    - Element
    - Klasse
    - Id
    - (inline)
  - Haben zwei Regeln die gleiche Spezifität, gewinnt die in der Reihenfolge zuletzt gelesene (der Browser liest von oben nach unten; auch über Dateien hinweg)

In dem oben verlinkten Blogbeitrag werden noch weitere Feinheiten erklärt, aber diese hier sind die wichtigsten. Das Beispiel aus dem Live-Coding findet sich wieder auf GitHub.

### Box Modell

Jedes HTML-Element ist in CSS eine Box, ist also rechteckig. Die Größe und Ausrichtung des Elements wird nach dem Box Modell berechnet. Dieses Modell sieht vier Bestandteile vor:

| Bereich      | CSS-Eigenschaft |
| ------------ | --------------- |
| Inhalt       | content         |
| Innenabstand | padding         |
| Rahmen       | border          |
| Außenabstand | margin          |

![Box Modell](/img/lessons/04/boxmodell.png)

Über diese Eigenschaften können wir also die Größe und den Abstand zu anderen Elementen steuern. Wir ändern also das Layout dieser Box und damit das gesamte Layout unserer Website.

Eine viel ausführliche Beschreibung findet ihr in der [MDN Dokumentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) oder in diesem Blog-Post https://hackernoon.com/the-box-model-44fc2c04a935.

Lest euch das gerne mal durch. Ihr entwickelt aber auch nach und nach ein genaueres Gefühl für die Boxes und deren Gestaltung.

## Figma

[Figma](http://figma.com/) ist ein kostenfreies, modernes Layouttool, dass im Browser oder als Desktop-Anwendung genutzt werden kann. Es ist daher plattformübergreifend nutzbar und nicht bspw. auf Mac OS beschränkt.

Ihr könnt darin eure Website vorab entwerfen und dann mit Code dieses Ziel verfolgen. Ich habe euch kurz gezeigt, wie ihr es benutzt. Online gibt es aber viele Tutorials.

## Hausaufgabe

Bitte setzt euch ein bisschen mit Figma auseinander und gestaltet bereits eure Projekt darin. Ihr findet online sicher etliche Tutorials. Wenn ihr etwas besonders Gutes gefunden habt, teilt es gerne mit den anderen im Channel.

Teilt gerne das Ergebnis eures Designs mit mir - oder auch den anderen - per Link. Ihr könnt in Figma dafür einfach euren Rahmen anklicken und dann die URL aus eurem Browserfenster kopieren und verschicken.

Darüber hinaus kann ich euch sehr empfehlen, die heute gelernten Selektor-Typen, die Specificity und die Stufenförmigkeit von CSS noch einmal zu vertiefen, in dem ihr die Beispiele nachvollzieht und selber einmal bspw. in eurem Rezept weitere Regeln hinzufügt oder die vorhandenen Regeln anpasst. Wir haben jetzt bereits viel mehr Möglichkeiten kennengelernt, um unser Dokument zu gestalten.
