const apiHost = 'https://bakesaleforgood.com';
// const apiHost = 'http://www.sillysnap.com//api/v1/galleryapis';


export default {
  async fetchInitialDeals() {
    try {
      let response = await fetch(apiHost + '/api/deals');
      // let response = await fetch(apiHost);
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
};