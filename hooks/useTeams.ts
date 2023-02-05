import { useQuery } from '@tanstack/react-query'
import axiosInstance from 'hooks/axios'

export const getTeams = async () => {
  const { data } = await axiosInstance.get('https://api-formula-1.p.rapidapi.com');
  return data
}

const useTeams = () => {
  return useQuery(['teams'], () => getTeams())
}

export default useTeams;
