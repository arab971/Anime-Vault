'use server'

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";


const FetchAnime = async (page: number) => {
    const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
    const data = await res.json();
    return data.map((item: AnimeProp, index: number) => {
      return <AnimeCard key={item.id} anime={item} index={index} />;
    });
}
export default FetchAnime;