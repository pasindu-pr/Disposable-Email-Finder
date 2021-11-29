import axios from "axios";

export default async function isDisposableEmail(email) {
  let { data } = await axios(`https://disposable.debounce.io/?email=${email}`);
  return Boolean(data.disposable);
}
