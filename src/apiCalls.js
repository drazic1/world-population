class WorldApi {
  getPopulationTodayFor(countryName) {
    return new Promise((resolve, reject) => {
      const url =
        'http://api.population.io:80/1.0/population/' +
        countryName +
        '/today-and-tomorrow/';
      const req = new XMLHttpRequest();
      req.onload = () =>
        resolve(JSON.parse(req.responseText).total_population[0].population);
      req.onerror = () => reject(req.statusText);
      req.open('GET', url);
      req.send();
    });
  }

  getPopulationThisYearFor(countryName) {
    return new Promise((resolve, reject) => {
      const url =
        'http://api.population.io:80/1.0/population/2017/' +
        countryName +
        '/18/';
      const req = new XMLHttpRequest();
      req.onload = () => resolve(JSON.parse(req.responseText)[0]);
      req.onerror = () => reject(req.statusText);
      req.open('GET', url);
      req.send();
    });
  }

  getRankingFor(dob, sex) {
    return new Promise((resolve, reject) => {
      const url =
        'http://api.population.io:80/1.0/wp-rank/' +
        dob +
        '/' +
        sex +
        '/World/today/';
      const req = new XMLHttpRequest();
      req.onload = () => resolve(JSON.parse(req.responseText).rank);
      req.onerror = () => reject(req.statusText);
      req.open('GET', url);
      req.send();
    });
  }

  getShortestCountryNames() {
    return new Promise((resolve, reject) => {
      const url = 'http://api.population.io:80/1.0/countries/all';
      const req = new XMLHttpRequest();
      req.onload = () => {
        return resolve(JSON.parse(req.responseText).countries);
      };
      req.onerror = () => reject(req.statusText);
      req.open('GET', url);
      req.send();
    });
  }
}

export default WorldApi;
