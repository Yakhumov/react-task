

export interface IWeather {
    location: string,
    temperature:number,
    humidity: number,
    windSpeed: number
    icon: string
}

export interface IWeatherData {  
    data: IWeather | null,
    saavedHistory: string[] 
    error?: string, 
    loading: boolean 
}
 