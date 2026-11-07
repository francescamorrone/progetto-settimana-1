# 💼 Portfolio Personale v1.0

Prima versione del mio portfolio personale, realizzata per il primo progetto settimanale del Master in Full-Stack AI Developer di EPICODE. Usa solo **HTML e CSS**.

> 🔁 **Esiste una versione 2.0** di questo progetto, con nuove funzionalità e un design rivisto: https://github.com/francescamorrone/portfolio-flex-v2.0.

## Anteprima

🔗 **Demo live:** https://francescamorrone.github.io/progetto-settimana-1/

## Pagine e sezioni

### `index.html`

| Sezione | Contenuto |
| --- | --- |
| **Chi Sono** | Foto profilo e presentazione, con capolettera decorativo |
| **Competenze** | Tabella con le tecnologie studiate nella prima settimana: HTML5 semantico, CSS3, Git e GitHub, linea di comando, Markdown e documentazione |
| **Esperienze** | Tabella con percorso formativo e lavorativo, scorrevole in orizzontale su schermi piccoli |
| **Progetti** | Card dei lavori svolti, con link ai repository GitHub e badge "NEW" |
| **Contatti** | Pulsante "Scrivimi" che apre un modulo di contatto in modale |

### `tutti-i-progetti.html`

Pagina di approfondimento che descrive ogni progetto della settimana: tecnologie usate, contenuto dell'esercizio e cosa ho imparato. Ha un link per tornare alla home.

## Cosa ho imparato

- **HTML semantico:** scegliere il tag in base al significato del contenuto e non all'aspetto, form con validazione, attributi di accessibilità di base.
- **CSS3:** selettori, pseudo-classi e pseudo-elementi, box model, `float`, Google Fonts, `position: sticky`, media query.
- **Git e GitHub:** `init`, `add`, `commit`, `push`, repository remoti e pubblicazione su GitHub Pages.
- **Linea di comando:** navigazione tra cartelle e comandi base di shell.
- **Documentazione:** scrivere README chiari per altri sviluppatori.

## Dettagli di design

- **Header sticky** con immagine di sfondo e bordo dorato.
- **Rombo decorativo** davanti ai titoli delle sezioni, creato con `::before`.
- **Capolettera** nel primo paragrafo di "Chi Sono", con `::first-letter`.
- **Badge "NEW"** sulla prima card dei progetti, creato con `::after`.
- **Card progetto** con stili alternati (dispari e pari) tramite `:nth-of-type`.
- **Pulsante "Torna in cima"** fisso in basso a destra.
- **Scrollbar personalizzata** e palette coordinata in blu e oro.
- **Design responsive** con breakpoint a 768px e 1200px.

## Tecnologie

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Struttura semantica, tabelle, form |
| CSS3 | Layout, pseudo-elementi, media query, animazioni di base |
| [Font Awesome 6.5](https://fontawesome.com/) | Icone, caricate da CDN |
| [Google Fonts](https://fonts.google.com/) | Playfair Display per titoli e intestazioni |
| Git e GitHub Pages | Versionamento e pubblicazione |



## Come avviarlo

Non servono installazioni né build.

1. Clona il repository:
   ```bash
   git clone https://github.com/francescamorrone/<nome-repo>.git
   ```
2. Apri `index.html` nel browser, oppure usa un server locale (ad esempio l'estensione **Live Server** di VS Code).

## Palette

| Colore | Valore |
| --- | --- |
| Blu principale | `#193366` |
| Oro (accenti) | `hsl(45, 90%, 60%)` |
| Sfondo pagina | `#f4f1ec` |
| Sfondo modale | `#ECE6D8` |
| Footer | `#172136` |

## Dalla v1.0 alla v2.0

| Aspetto | v1.0 | v2.0 |
| --- | --- | --- |
| **Layout** | Flusso normale dei blocchi e `float`, senza Flexbox | Flexbox (`display: flex`, `flex-wrap`, `gap`) |
| **Navigazione** | Voci in linea (`display: inline`) distanziate con `margin-right` | Lista flex con `flex-wrap` e `gap` |
| **Chi Sono** | Avatar con `float: left` da 768px in su | Avatar e testo affiancati con Flexbox |
| **Competenze** | Tabella con una descrizione per ogni tecnologia | "Pillole" interattive con checkbox nascoste e `:checked`, senza JavaScript |
| **Card progetti** | Card impilate una sotto l'altra | Griglia flessibile che va a capo (`flex: 1 1 260px`), con effetto hover |
| **Header** | Sticky, sempre uguale | Sticky, si compatta dopo 50px di scroll e la tagline scompare |
| **Animazioni** | Nessuna | Transizioni su navigazione, avatar e card, badge e pulsante "Torna in cima" animati |
| **Modale di contatto** | Compare senza animazione | Compare con dissolvenza e scorrimento verso l'alto |
| **Breakpoint** | nessuno | 768px |
| **Tecnologie principali** | HTML e CSS | HTML, CSS e JavaScript |
