import axios, { AxiosResponse } from "axios"
import { CarResponse } from "../types/Car"
import { useQuery } from "react-query"

const instance = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
})

const fetchData = async (): Promise<AxiosResponse<CarResponse>> => {
  const response = instance.get('/23/modelos')

  return response
}

export function useFetch() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['car-data'],
    retry: false
  })

  return {
    ...query,
    data: query.data?.data.data
  }
}