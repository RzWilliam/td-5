function fetchUrl(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

async function getAllFestivals() {
  try {
    const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=';
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals :', error);
    throw error;
  }
}

async function getFestivalsByRegion(region) {
  try {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.region=${region}`;
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals par région :', error);
    throw error;
  }
}

async function getFestivalsByDepartement(departement) {
  try {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.departement=${departement}`;
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals par département :', error);
    throw error;
  }
}

async function getFestivalsByDomaine(domaine) {
  try {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.domaine=${domaine}`;
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals par domaine :', error);
    throw error;
  }
}


module.exports = { getAllFestivals, getFestivalsByRegion, getFestivalsByDepartement, getFestivalsByDomaine };
