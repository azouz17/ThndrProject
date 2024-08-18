import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { Carousel } from 'antd';

const Movie = () => {
    
    const { Meta } = Card;

    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    type MovieType = {
        Title: string,
        Year: string,
        imdbID: string,
        Type: string,
        Poster: string   
    }

    type Search = {
        Search: MovieType[],
        TotalResults: number,
        Response: boolean
    } 


    const [loading, setLoading] = useState(false)
    const [movie,setMovie] = useState("")
    const DEFAULT_SEARCH = {
        Search:[],
        TotalResults: 0,
        Response: false,
    } 
    const [data, setdata]:[Search , any] = useState(DEFAULT_SEARCH)
      useEffect(() => {
        const fetchData = async () =>{
            setLoading(true)
            try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=8bdf708a&s=hangover`)
            if(response.ok){
                const json = await response.json()
                setdata(json)
                console.log(data)
            }
        }
            catch(error){
                console.log(error)
            }
            setLoading(false)
        }
        fetchData();
    },[])
    function renderMovies() {
        return data.Search.map((movie: MovieType,key:number)=>{
            return(
                <Card
                key={key}
                hoverable
                style={{width:240}}
                cover={<img alt="example" src={movie.Poster}/>}
                >
                    <Meta title={movie.Title}  description={movie.Year} />
                </Card>
            )
        })
    }

  return (
        <>
        {loading ? <h1>Loading.....</h1> : renderMovies()}
        </>
    )
}

export default Movie