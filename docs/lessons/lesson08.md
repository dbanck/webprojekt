---
title: "Lektion 08: Responsive Webdesign"
sidebar_label: "08: Responsive Webdesign"
sidebar_position: 8
sidebar_class_name: none
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Make it fit" />

import ProminentLink from '@site/src/components/Docs/ProminentLink';

<ProminentLink link="https://docs.google.com/presentation/d/1GqGce81iVDWo6ehpFVKvPp4TFT7EGsvnmoy4oCLUAC4">Folien</ProminentLink>

## Weekly 🔥 tips

_Geräte simulieren_

In den letzten Wochen haben wir bereits ein paar Funktionen der Chrome Developer Tools kennengelernt. Heute schauen wir uns noch eine andere wichtige Funktion an: die Simulation von anderen Geräten. Dies ist insbesondere nützlich, wenn ihr eure Website für verschiedene Bildschirmbreiten und damit Geräte optimieren wollt.

![Responsive Mode in Chrome](/img/lessons/08/responsive-mode.png)

Über einen Button (oben rechts im Screenshot blau) aktiviert und deaktiviert ihr dieses Feature. Danach könnt ihr zwischen einem flexiblen Modus ("responsive") und fixen Geräten wie in diesem Beispiel dem iPhone X wählen. Die Website wird dann in dieser Breite dargestellt.

## Responsive Webdesign

![Schematische Darstellung von responsivem Webdesign](/img/lessons/08/responsive_webdesign.svg)
Quelle: https://aundo.de/webdesign-agentur-bremen/

### Begriffsklärung

> "Beim Responsive Webdesign handelt es sich um ein gestalterisches und technisches Paradigma zur Erstellung von Websites, so dass diese auf Eigenschaften des jeweils benutzten Endgeräts, vor allem Smartphones und Tabletcomputer, reagieren können."

https://de.wikipedia.org/wiki/Responsive_Webdesign

Nach dieser Definition ist "responsives Webdesign" also eine Herangehensweise an die Entwicklung unserer Website, die im Design beginnt und durch eine bestimmte technische Lösung umgesetzt wird.

Die Unterschiede im Design werden in der obigen [Grafik](https://aundo.de/webdesign-agentur-bremen/) gut deutlich: auf einem breiten Bildschirm gibt es drei Spalten für den Inhalt, auf mittleren Breiten nur noch zwei und auf einem Smartphone wird der Inhalt in einer Spalte dargestellt.

Diese Designunterschiede müssen auch durch uns Entwickler umgesetzt werden. Hierfür bietet CSS Funktionalitäten an, über die wir unsere Website **responsive** - also reagierend - entwickeln können. So entwickeln wir eine Website, die auf allen Endgeräten die gleichen Inhalte enthält und diese lediglich unterschiedlich darstellt. Ein Umleiten von Benutzern, die über ein Smartphone eine Website besuchen, wird heute in der Regel nicht mehr gemacht. Früher war dies noch üblich, Nutzer auf bspw. eine **m**.heute.de Domain umzuleiten.

### Breakpoints

Zur Anpassung werden meistens zwei Breakpoints, also Bildschirmbreiten, an denen das Design umbricht/sich verändert, festgelegt. In der Regel unterscheidet man durch die zwei Breakpoints dann drei Ansichten wie in der obigen Grafik zu sehen: **Desktop**, **Tablet** und **Smartphone**. Diese Trennung ist aber nicht festgelegt und kann beliebig erweitert werden!

Neben der Bildschirmbreite können auch noch etliche andere Eigenschaften der Geräte abgefragt und zur Unterscheidung des genutzten CSS herangezogen werden. Hierzu zählen unter anderem die Ausrichtung (Hochformat, Querformat), die Pixeldichte oder das Seitenverhältnis des Bildschirms. Diese wollen wir aber nicht weiter betrachten.

### Live-Coding

Wie setzen wir nun ein einfaches responsives Design um? Das haben wir uns in dieser kurzen Live-Coding Session angesehen.

Wir haben uns zunächst eine vorbereitete Navigation angeschaut, die noch nicht responsive angepasst ist und daher auf kleineren Bildschirmen nicht richtig funktioniert und das Design zerstört.

![Nicht an die Viewport-Breite angepasste Navigation](/img/lessons/08/live-broken.png)

Anschließend haben wir mit Hilfe von [Media Queries](https://developer.mozilla.org/de/docs/Web/CSS/Media_Queries/Using_media_queries) weitere CSS Regeln hinzugefügt, die die Gestaltung auf diesen kleinen Bildschirmen korrigieren und so das folgende Ergebnis ergaben.

![Abhängig von der Viewport-Breite korrigierte Navigation](/img/lessons/08/live-fixed.png)

Den Code dafür findet ihr auch wieder auf GitHub. Da wir hier moderne Layout-Eigenschaften von CSS (Flexbox) nutzen, müssen wir hier tatsächlich relativ wenig anpassen. Das ist auch der festzustellende Trend der letzten Jahre. CSS wird immer flexibler, so dass viele Dinge bereits out-of-the-box auf unterschiedlichen Gerätebreiten funktioniert. An einigen Stellen muss oder will man aber gezielt nachhelfen.

### Container Queries

Abschließend haben wir noch einen kurzen Ausblick in die Zukunft gewagt und uns [CSS Container-Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) angeschaut. Diese Art der Queries ist noch nicht stabil und daher nicht veröffentlicht. Sie sollen aber die Anpassung von Gestaltung nicht wie wir heute abhängig von der **Bildschirmbreite** sondern in Bezug auf die **Containerbreite** (also die Breite des umgebenden Elements) ermöglichen. Dies entspricht der modernen Denkweise von **Komponenten**, die an unterschiedlichen Stellen der Website eingebunden werden können und daher verschiedene Breiten einnehmen können.

Einen ersten Einblick könnt ihr hier gewinnen: https://www.youtube.com/watch?v=JsN_iE3prm0

## Fragen und Antworten und Freie Projektarbeit

Dieser Teil kann hier nicht zusammengefasst werden. Ihr hattet die Möglichkeit im Rahmen der Live-Session Fragen zu stellen, die ihr konkret zu euren Projekten habt. Wir haben hier versucht möglichst viele zu beantworten.

## Hausaufgabe

Arbeitet bitte weiter an euren Projekten. Sollten hier Fragen auftauchen, versucht diese selber zu klären, stellt sie im Channel, falls sie euch komplett blockieren, oder sammelt sie sonst für diese nächste Lektion. Hier werden wir wieder in Breakout-Rooms an unseren Projekten arbeiten.
