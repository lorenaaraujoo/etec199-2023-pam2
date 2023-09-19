import { StyleSheet, Text, View, FlatList } from 'react-native';
import style from '../../components/header/style';
import Header from '../../components/header/index';
import Search from '../../components/searchBar/index';
import BannerFilmes from '../../components/bannerFilmes/index';
import Card from '../../components/cardFilmes';
import filmes from '../../data/movies';
import series from '../../data/series';
import titulo from '../../components/bannerFilmes/style';
import React, {useState, useEffect} from 'react';
import { set } from 'react-native-reanimated';

export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies(){
      try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=8870ed7a4542697642a534a65c19203a")
      const data = await response.json();

       console.log(data.results)
       setMovies(data.results)
    }
    
    catch(error){
      console.error("Requisão Falhou!",error);
    }
  }
    getMovies();
  }, [])

  return (
    <View style={style.container}>
      
      <Header/>
      <Search/>
      <BannerFilmes/>

      <Text style={titulo.textoBanner}>Filmes</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {movies}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
              nome = {item.title}
              nota = {item.vote_average}
              imagem = {item.poster_path}
            />

          )}
        
        />
      </View>  

      <Text style={titulo.textoBanner}>Séries</Text>
      <View style ={{width: '90%'}}>
        <FlatList
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          data = {series}
          keyExtractor = {(item) => item.id}
          renderItem = { ({item}) => (

            <Card
              nome = {item.nome}
              nota = {item.nota}
              imagem = {item.imagem}
            />
          )}
        />
      </View>  
    </View>
  );
}
