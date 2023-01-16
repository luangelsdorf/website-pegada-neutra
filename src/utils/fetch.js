import { dataSrc } from "./env";

export default async function fetchAPI(endpoint = '', queryString = '', populateDeep = true) {
  if (dataSrc === 'local') {
    /* console.log(`../data/${endpoint}.json`); */
    return require(`../data/${endpoint}.json`);
    /* console.log(data); */
  }

  else {
    const populate = populateDeep ? 'deep' : '*';
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}?populate=${populate}${queryString}`);
    const result = await response.json();

    if (result.data.attributes) {
      let { data: { attributes: data } } = result;
      return data;
    }

    else {
      let { data: data } = result;
      return data;
    }
  }
}

export async function getLayoutContent() {
  const footer = await fetchAPI('footer');

  const info = await fetchAPI('info');

  return { footer, info };
}