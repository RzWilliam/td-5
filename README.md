# Festival Data Retrieval

This library provides functions to retrieve festival data from the French government's Panorama des Festivals API. It offers a convenient way to fetch festival information based on different criteria such as region, department, or domain.

## Installation

```bash
npm install rzwilliam-td5
```

## Usage

Import the library and use the available functions to retrieve festival data.

```javascript
const { getAllFestivals, getFestivalsByRegion, getFestivalsByDepartement, getFestivalsByDomaine } = require('festivals-library');
```
### getAllFestivals()

Retrieves information about all festivals.

- row (optional, number): The number of festivals to retrieve (default: 10).

```javascript
getAllFestivals(12)
  .then(festivals => {
    // Use the festivals data
    console.log(festivals);
  })
  .catch(error => {
    console.error('An error occurred while retrieving festivals:', error);
});
```

### getFestivalsByRegion(region)

Retrieves information about festivals in a specific region.

- region (string): The name of the region.
- row (optional, number): The number of festivals to retrieve (default: 10).

```javascript
const region = 'Provence-Alpes-Côte d\'Azur';
getFestivalsByRegion(region, 3)
  .then(festivals => {
    // Use the festivals data for the specific region
    console.log(festivals);
  })
  .catch(error => {
    console.error('An error occurred while retrieving festivals by region:', error);
});
```

### getFestivalsByDepartement(departement)

Retrieves information about festivals in a specific department.

- departement (string): The code of the department.
- row (optional, number): The number of festivals to retrieve (default: 10).

```javascript
const departement = '75';
getFestivalsByDepartement(departement, 20)
  .then(festivals => {
    // Use the festivals data for the specific departement
    console.log(festivals);
  })
  .catch(error => {
    console.error('An error occurred while retrieving festivals by departement:', error);
});
```

### getFestivalsByDomaine(domaine)
Retrieves information about festivals in a specific domain.

- domaine (string): The domain of the festivals (e.g., "Musiques actuelles", "Cinéma et audiovisuel").
- row (optional, number): The number of festivals to retrieve (default: 10).

```javascript
const domaine = 'Musiques actuelles';
getFestivalsByDomaine(domaine, 8)
  .then(festivals => {
    // Use the festivals data for the specific domaine
    console.log(festivals);
  })
  .catch(error => {
    console.error('An error occurred while retrieving festivals by domaine:', error);
  });
```

Feel free to use these functions to fetch festival data based on your requirements.