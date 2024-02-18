import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://food-env.eba-vpsi9hzm.sa-east-1.elasticbeanstalk.com';

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}