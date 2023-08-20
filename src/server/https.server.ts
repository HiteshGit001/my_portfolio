import axios from "axios"

export const axiosGet = (
  url: string,
  headers: any,
) => {
  return axios.get(url, { headers })
}

export const axiosPost = (
  url: string,
  body: any,
) => {
  return axios.post(url, body)
}