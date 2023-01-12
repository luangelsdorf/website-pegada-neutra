export default async function fetchAPI(endpoint = '', queryString = '', populateDeep = true) {
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

export async function getLayoutContent() {
  const footer = await fetchAPI('footer');

  const info = await fetchAPI('info');

  return { footer, info };
}