function fetchUrl(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

async function getAllFestivals(row = 10) {
  try {
    const url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q='+'&rows='+ row;
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals :', error);
    throw error;
  }
}

async function getFestivalsByRegion(region, row = 10) {
  try {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.region=${region}`+'&rows='+ row;
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals par région :', error);
    throw error;
  }
}

async function getFestivalsByDepartement(departement, row = 10) {
  try {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.departement=${departement}`+'&rows='+ row;
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals par département :', error);
    throw error;
  }
}

async function getFestivalsByDomaine(domaine, row = 10) {
  try {
    const url = `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&refine.domaine=${domaine}`+'&rows='+ row;
    const data = await fetchUrl(url);
    const festivals = data.records.map(record => record.fields);
    return festivals;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des festivals par domaine :', error);
    throw error;
  }
}


module.exports = { getAllFestivals, getFestivalsByRegion, getFestivalsByDepartement, getFestivalsByDomaine };
