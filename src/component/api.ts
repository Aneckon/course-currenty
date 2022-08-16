export const FetchCurrenty = (
  setRates: (data: any) => void,
  setIsLoading: (data: boolean) => void,
) => {
  fetch('https://cdn.cur.su/api/latest.json')
    .then((res) => res.json())
    .then((json) => {
      setRates(json.rates);
      setIsLoading(false);
    })
    .catch((err) => alert('Помилка при пыдключенню валюти'));
};
