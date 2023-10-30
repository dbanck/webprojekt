---
title: "Lektion 02: HTML"
sidebar_label: "02: HTML"
sidebar_position: 2
sidebar_class_name: none
---

import Subline from '@site/src/components/Docs/Subline';

<Subline text="Inhalte strukturieren" />

import ProminentLink from '@site/src/components/Docs/ProminentLink';

<ProminentLink link="https://docs.google.com/presentation/d/1m137bsw10cKx1GSohQsVWfy7AH5kgn0SkSAr8g_1LSY">Folien</ProminentLink>

## Feedback Hausaufgaben

- wirklich schöne, unterschiedliche Ideen, die sich aber in gewissen Teilen doch überschneiden. **Nutzt diese Überschneidungen zum Austausch und zur Zusammenarbeit**
- Projekte sind teilweise ein unrealistisches Ziel für uns Neueinsteiger; ohne Erfahrung ist die Umsetzung einer modern gestalteten und technisch sauber umgesetzten Website in der kurzen Zeit m.M.n. nicht möglich. Aber ihr solltet ja auch nur ein Projekt erdenken, auf das ihr hinarbeiten wollt _(think big!)_.
  - Daher: kein Grund für Enttäuschung, wenn am Ende der Kurszeit, nicht das heute gedachte Ergebnis steht. Wir lernen noch die absoluten Basics.
    - das Ergebnis hängt natürlich stark von eurer Vorerfahrung, eurem Einsatz und der zur Verfügung stehenden Zeit ab. Daher auch nicht vergleichbar
    - aber: das ist nur eine erste Einschätzung - **proof me wrong**

## VS Code - Vorstellung und Einrichtung

- Wichtige Bestandteile des Editors sind
  - Sidebar mit Filetree - hier navigiert ihr eure Dateien im Projekt
  - Hauptbereich zum Bearbeiten von Files
  - Tabs (bei mehreren offenen Dateien)
  - Minimap zur schnelleren Navigation einer Datei
- Um den Editor einzurichten, müssen wir im Prinzip nichts tun, da dieser bereits sehr gut vordefiniert installiert wurde
- über Erweiterungen und unendliche viele Einstellungen können wir uns den Editor aber nach und nach an eigene Bedürfnisse anpassen
  - eine Erweiterung empfehlen wir: **Prettier**
    - Installation über die Sidebar
    - in den Settings `Format on save` anhaken
    - Default Formatter: `esbenp.prettier-vscode`
    - [eine Anleitung mit Bildern findet ihr hier](../notes/editors.md)
- Weitere Quellen zu VS Code:
  - Intro to VSCode https://www.youtube.com/watch?v=EUJlVYggR1Y
  - ausführliche Playlist: https://www.youtube.com/playlist?list=PLLnpHn493BHHkdpK8E37x_d5cOZBr4GlL
    - Video #2 sollte reichen, die anderen Videos behandeln teilweise fortgeschrittene Themen. #3, #5 und #7 könnt ihr auch auf jeden Fall noch anschauen wenn ihr mögt

## Weekly 🔥 tips

_Wir versuchen euch neben den Inhalten zum Webprojekt auch jede Woche noch ein paar Tipps vorzubereiten, die die Arbeit am Computer beschleunigen oder einfacher machen.
Wenn ihr hier gezielt Wünsche habt, meldet euch gerne bei uns. Diese weekly 🔥 tips werden wir jede Session kurz einstreuen. Die Tastaturkürzel beziehen sich immer auf Windows, sind aber für Mac OS meistens gleich._

### Basics

| Funktion                | Tastenkürzel     |
| ----------------------- | ---------------- |
| Website neuladen        | Strg + R oder F5 |
| Datei speichern         | Strg + S         |
| zwei Fenster umschalten | Alt + Tab        |

Testet das selber mal, ihr werdet merken, dass ihr diese Tastenkürzel sehr schnell verinnerlicht und es euch die Arbeit im Studium, bei der Arbeit oder in der Freizeit erleichtert.

## HTML - Hypertext Markup Language

Erinnert euch nochmal an das bunte Einhorn und wie es tanzt. HTML, CSS und JS sind die drei Sprachen des Internets. Erinnert euch an die jeweilige Aufgabe der Sprache. Sonst les das gerne nochmal nach: [Lektion 01](/lessons/lesson01.md)

![Sprachen des Internets erklärt an Hand der Grammatik](/img/lessons/02/languages-unicorn.png)
Quelle: https://giphy.com/gifs/dance-crazy-rainbow-ZJlesIV8TnabS

### Begriffsklärung

In der heutigen Lektion geht es um HTML. HTML steht für **Hypertext Markup Language**.

Wir können den Begriff einmal auseinander nehmen:

- **Hypertext** - Text, der über HTTP verschickt wurde - erinnert euch an letzte Woche, wo wir diesen Text, den Quelltext einer Website, angeschaut haben
- **Markup Language** - "Auszeichnungssprache"
  - sagt aus, dass es sich bei HTML um eine Sprache (Language) handelt
    - folgt also gewissen Regeln, wie unsere Sprache auch (Vokabeln, Grammatik, etc.)
  - diese Sprache ermöglicht Auszeichnung (Markup) von Inhalten
    - wir "markieren" also Inhalte und erzeugen so Struktur und Bedeutung
- _Sprache, um Inhalte zu strukturieren_

Übersetzen lässt sich der sperrige Begriff **Hypertext Markup Language** zu einem noch sperrigeren Begriff als "Auszeichnungssprache für Inhalte, die über HTTP verschickt wurden" - wir bleiben also lieber bei "**HTML**".

Ihren Ursprung hat diese Sprache im wissenschaftlichen Umfeld. Universitäten weltweit waren neben dem Militär die ersten Nutzer des Internets, um Paper schneller auszutauschen und zu veröffentlichen.

### Beispiel wissenschaftliches Paper

Als Beispiel haben wir die Einleitung eines [wissenschaftliches Papers](https://docs.google.com/document/d/13Vo2cjvfwVmbJDnoQXPgYpoStHB0mkMbUY9Rz4iOpUI) zur Evolution von HTML zunächst ohne, dann mit minimaler und dann mit korrekter Auszeichnung (Markup) betrachtet.

- Es wurde sehr deutlich, dass ein Text ohne jegliche Formatierung schlecht zu lesen ist
  - Formatierung von Texten findet sich überall und strukturiert Inhalte: Zeitung, wissenschaftliche Arbeiten, Websites, Werbung, …
  - diese Formatierung basiert auf der _Bedeutung (also der Auszeichnung)_ des Inhalts
    - eine Überschrift wird bspw. größer dargestellt; ein Absatz hat einen gewissen Abstand zu vorherigen Absätzen, usw.
- Merkt euch: die Auszeichnung hat **nichts** mit der Gestaltung zu tun! Die Gestaltung basiert lediglich auf der Auszeichnung (**Auszeichnung: HTML, Gestaltung: CSS**)

### Auszeichnung mit HTML

In HTML gibt es einen standardisierten Satz an Elementen, die der Browser kennt. Er weiß, welche Bedeutung der Inhalt eines Elements hat. Abhängig von dieser Bedeutung weisen Browser dem Inhalt eines Tags ein gewisses Styling zu, was nicht Teil von HTML ist. Der Browser tut es einfach nach einem Schema, was die Entwickler des jeweiligen Browsers zugewiesen haben (es kann daher auch kleine Unterschiede geben). So werden Überschriften bspw. größer und fett dargestellt.

Hier findet ihr eine Liste aller erlaubten HTML-Elemente: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

Diese Liste wirkt auf den ersten Blick sehr erdrückend, man nutzt in der Praxis aber nur einen Bruchteil dessen täglich. Die meisten sind Nischen-Elemente, die nur für ganz bestimmte Inhalte benötigt werden; diese müssen wir dann auch erstmal googlen, wie diese verwendet werden. Die häufig verwendeten Elemente lernt man über die Zeit wie Vokabeln und kennt deren Verwendung genau.

HTML-Elemente werden durch **Tags** gekennzeichnet. Ein HTML-Element besteht (meistens) aus einem **öffnenden** und einem **schließenden Tag**. Dazwischen wird der Inhalt platziert.

![Beispiel eines Tags](/img/lessons/02/tag.jpg)

Es gibt jedoch Ausnahmen und ihr habt eines bereits im Kurs kennengelernt; das Tag zum Erzeugen eines Bildes `<img />`. Diese Art von Tags nennt sich **selbst schließendes Tag**, da sie keinen Inhalt annehmen, werden sie direkt wieder geschlossen (der / zeigt das schließen eines Tags an). Wo sollte bspw. Textinhalt eines Bildes angezeigt werden? Der Inhalt eines Bildes ist ein Bild.

## Live Coding: Genug Theorie

:::info

**Was ist Live Coding?**

- Wir coden, denken laut und erklären
- Ihr hört zu, denkt mit und stellt Fragen
- Ihr braucht nicht mitzutippen
- Wir stellen das Ergebnis und auch die Startdateien danach zur Verfügung, sodass ihr alles in Ruhe nachvollziehen könnt

:::

_Dieser Teil hat live stattgefunden und ist nur sehr schwer zusammenzufassen. Wir versuchen es aber mal. Ihr findet das Ergebnis aber auf GitHub im Kurs-Projekt. Hinweis: wir führen hier oft nur das öffnende Tag auf, es gehört aber IMMER auch ein schließendes Tag dazu._

### Einstieg HTML-Elemente

Zunächst haben wir eine neue Datei erzeugt, die wir als `rezept.html` gespeichert haben. Die Dateiendung sagt dem Browser, dass es sich um ein HTML-Dokument handelt und er weiß somit, wie er damit umgehen soll. Öffnen können wir das Dokument über unterschiedliche Wege, der einfachste ist jedoch ein Doppelklick auf die Datei.

Schrittweise haben wir dann das Dokument mit Inhalt gefüllt.

1.  einfacher Text "Hallo Welt" wird im Browser als Text dargestellt
1.  Überschriften (`<h1>`, `<h2>`, ... , `<h6>`) zeigen unterschiedlich große Überschriften an
1.  Absätze ohne Markup enthalten keine Abstände
1.  Absätze mit `<p>` als Paragraph-Auszeichnung rutschen untereinander und erhalten einen Abstand
1.  Links zu anderen HTML-Dokumenten erzeugten wir über `<a href="http://www.bastibuck.de">Basti</a>`
    - hier haben wir das erste **Attribut** eines Tags kennengelernt: `href=""`

> _Damit haben wir genug HTML-Elemente kennengelernt, um das vorher gezeigte Paper als HTML-Dokument zu erzeugen. Diesen Schritt haben wir gemeinsam gemacht und das Ergebnis findet ihr ebenfalls auf GitHub._

6. Außerdem haben wir noch zwei weitere HTML-Elemente kennengelernt
   - `<strong>` - wichtig
   - `<em>` - betont
7. Zuletzt haben wir unserem Rezept noch ein Bild hinzugefügt, so dass einem das Wasser im Munde zusammenläuft
   - hierfür haben wir das erste selbstschließende Tag `<img />` kennengelernt
   - es benötigt mindestens zwei Attribute: `src=""""` und `alt=""`
     - `src` gibt die URL zu dem Bild an, wo der Browser es finden kann
     - `alt` beschreibt den alternativen Text, der blinden Menschen vorgelesen wird oder der angezeigt wird, wenn ein Bild nicht geladen werden kann

### Nesting von Elementen

Wir haben bereits wie selbstverständlich Elemente ineinander verschachtelt. Bspw. haben wir Links in einem Absatz eingefügt oder einzelne Worte dieses Absatzes als wichtig (fettgedruckt) markiert.

HTML-Elemente lassen sich also ineinander verschachteln! Der Inhalt eines Elements kann wiederum ein weiteres Element sein. So ergeben sich weit verschachtelte Strukturen.

```html
<ul>
  <li>Nudeln</li>
  <li><strong>Tomaten</strong></li>
  <li>Zwiebeln</li>
</ul>
```

- Nudeln
- **Tomaten**
- Zwiebeln

Ein weiteres Beispiel, das wir kennengelernt haben, sind geordnete (`<ol>`) und ungeordnete Listen (`<ul>`). Diese enthalten ein umschließendes Element, das die Art der Liste definiert (geordnet, ungeordnet) und Listeneinträge (`<li>`), die dann untereinander aufgeführt werden. In diesem Beispiel ist außerdem noch ein `<strong>` Element in einem der List-Items geschachtelt.

### Validierung unserer Codes und HTML-Skelett

Abschließend haben wir unseren Code noch auf der [Website des W3C](https://validator.w3.org/#validate_by_input) (World Wide Web Consortium) - dem offiziellen Konsortium zur Standardisierung des World Wide Web - validiert und festgestellt, dass der Browser unsere Eingaben zwar korrekt dargestellt hat, wir aber gegen grundlegende Regeln der Sprache HTML verstoßen haben.

Die Entwickler von Browsern verzeihen uns Fehler, in dem sie interpretieren, was wir wohl meinten. Ihnen ist wichtiger, dass der Inhalt dargestellt wird, als dass ein Fehler angezeigt wird. Es kann bei fehlerhaften HTML-Code aber natürlich zu fehlerhafter Darstellung kommen, so dass wir unseren Code immer validieren sollten.

Wir mussten also noch die grundlegende Struktur eines jeden HTML-Dokuments ergänzen. Dieses wird auch Skelett genannt, weil die Website ohne dieses Skelett nicht “stehen” kann. Das Skelett besteht sprechender Weise aus Kopf (`<head>`) und Körper (`<body>`).

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <title>Mein Dokument</title>
  </head>

  <body>
    <h1>Hallo Welt</h1>
    <p>Hier steht ein Absatz</p>
  </body>
</html>
```

Alle Inhalte, die wir vorher geschrieben haben, werden im `<body>` des Dokument eingefügt. Der Body einer Website ist der Bereich, der im unteren Bereich des Browserfenster dargestellt wird.
Alle Angaben im Head einer Website dienen unterschiedlichsten Zwecken und werden nicht direkt (im unteren Bereich) dargestellt.

Als Beispiel für ein Element im `<head>` haben wir kurz das `<title>` Tag betrachtet, dass es erlaubt, den Namen des Dokuments anzugeben, der im Browser im jeweiligen Tab angezeigt wird.

### Auszeichnung steuert NICHT die Gestaltung

Alle vorherigen Auszeichnung haben dafür gesorgt, dass wir im Browser unterschiedliche Darstellungen der Inhalte sehen. Diese Darstellung kommt aber nicht aus unserem HTML. Erinnert euch noch einmal an das bunte Einhorn. Es wird durch CSS bunt, nicht durch HTML.

Der Grund für die unterschiedliche Darstellung ist, dass die Browserhersteller eigenes CSS in die Browser “brennen”, das immer geladen wird. Es folgt dabei sinnvollen Defaults, kann aber zwischen einzelnen Browser _minimal_ unterschiedlich sein.

Wichtig ist nur, dass wir durch Schreiben von HTML heute **keine** Gestaltung beeinflusst haben. HTML ist lediglich für die Auszeichnung von Inhalten zuständig. Es enthält **keine** Informationen zur Gestaltung.

## Hausaufgabe

> Abgabe bis Sonntag, 10 Uhr

Bitte installiert euch in eurem VS Code ebenfalls die **Prettier-Extension** und richtet es so ein, dass das Dokument beim Speichern automatisch formatiert wird. Wenn ihr einen anderen Editor verwenden solltet, kann es sein, dass es eine ähnliche Erweiterung für Prettier gibt.
Stellt so oder so sicher, dass eure Formatierung leserlich bleibt, es hilft nicht nur euch bei der Entwicklung, Fehler zu vermeiden und schneller zu arbeiten, sondern hilft auch anderen Entwicklern, sich schnell zurecht zu finden, wenn ihr mal Hilfe benötigt oder wir eure Hausaufgaben anschauen.

Entwickelt ein HTML-Dokument, das euer Lieblingsrezept darstellt. Hierbei sind der Kreativität keine Grenzen gesetzt. Orientiert euch an eurem Lieblings-Food-Blog, nutzt 1-zu-1 die Inhalte aus einem Chefkoch-Rezept oder denkt euch ein eigenes abgefahrenes Rezept aus. Es muss gar nicht eine klassische Anleitung zum Nachkochen sein; ihr könnt auch die Geschichte, die Herkunft oder ähnliches eines Rezepts darstellen.
Wichtig ist nur, dass **alle heute gelernten HTML-Elemente** vorhanden sind. Ihr könnt aber auch gerne mit Hilfe der Liste von HTML-Elementen weitere Inhalte einfügen.

### Hinweise

- Auf GitHub findet ihr hier eine Musterlösung für mein Rezept. Dieses dient aber nur als Hilfestellung. Startet bitte mit einer leeren HTML-Datei und erarbeitet euch nach und nach den Inhalt selber (kein einfaches ersetzen der Inhalte!). Nutzt eure eigenen Ideen zu Reihenfolge, Auswahl und Struktur der Inhalte. Seid kreativ!
- nutzt in euren HTML-Dateien bitte keine Links zu lokalen Bildern - alle müssen über das Internet erreichbar sein - sonst können wir diese bei uns nicht sehen
  - nutzt bspw. [Unsplash](https://unsplash.com/s/photos/pasta)
- Sendet uns eure HTML-Datei bitte als Nachricht im Channel in Mattermost
- In diesem Video findet ihr die Inhalte der ersten beiden Lektionen noch einmal gut zusammengefasst https://youtu.be/SF_Xl5TOGlY - schaut es euch gerne an, wenn ihr einige Dinge noch einmal wiederholen und vertiefen wollt
- Wer will, kann auch zusätzlich die Aufgabe von Colt (Tutor aus dem Video) machen, die er am Ende stellt und ebenfalls mit abgeben. Wir werden uns beides anschauen und kurzes Feedback geben
- Wenn ihr Fragen haben solltet, stellt sie frühzeitig im Channel
