# Taaskasutatav HTML Projekt

See projekt on loodud HTML-komponentide taaskasutamiseks Vite raamistikul. Projekti eesmärk on pakkuda lihtsasti hallatavat veebirakenduse struktuuri, kus komponente (nagu navigatsiooniriba ja jalus) saab mitmes failis taaskasutada.

## Funktsioonid

- HTML-komponentide taaskasutamine erinevatel lehtedel
- Mitmekeelne tugi (eesti ja inglise keel)
- Vite arenduskeskkond kiireks arenduseks
- PostCSS tööriistad CSS-i optimeerimiseks

## Alustamine

### Eeltingimused

- Node.js (versioon 14 või uuem)
- npm (kaasas Node.js-iga)

### Paigaldamine

1. Klooni repositoorium
   ```
   git clone [repositooriumi-url]
   ```

2. Paigalda sõltuvused
   ```
   npm install
   ```

3. Käivita arendusserver
   ```
   npm run dev
   ```

4. Ava brauseris `http://localhost:5173`

### Koostamine tootmiseks

```
npm run build
```

Koostatud failid leiad `dist` kaustast.

## Projekti struktuur

- `src/html/components/` - Taaskasutatavad HTML-komponendid (navigatsiooniriba, jalus jne)
- `src/css/` - CSS-stiilid
- `src/js/` - JavaScript failid
- `en/` - Ingliskeelsed lehed

## Komponentide kasutamine

Komponente saab lisada HTML-lehtedele kasutades `<load>` silti:

```html
<load src="/src/html/components/navbar.html" />
```

## Litsents

See projekt on litsentseeritud MIT litsentsi all. 