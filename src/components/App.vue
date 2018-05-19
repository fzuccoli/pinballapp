<template>
    <div>
      <ul class="movieList">
        <li :class="`movies ${' item'+movie.id}`" v-for="movie in movies" :key="`movie+${movie.id}`">
            <div class="img">
                <img v-bind:src="movie.imgDesk" class="thumbs"/>
            </div>
            <div class="container">
              <div class="title">
                  {{ movie.title }}
              </div>
              <div class="categopry">
                  {{ movie.category }}
              </div>
              <div class="description">
                  {{ cutDescrition(movie.description) }}
              </div>
              <div class="rating">
                  {{ movie.rating }}
              </div>
            </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'Pinball',
    data () {
            return {
                // Simulating API consumption
                movies: [
                    { id: 0, title: "Animation films", category: "Movies", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-01.jpg", imgMobile: "/static/img/movie-01.jpg" },
                    { id: 1, title: "Animation films", category: "Movies", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-02.jpg", imgMobile: "/static/img/movie-01.jpg" },
                    { id: 2, title: "Animation films", category: "Animations", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-03.jpg", imgMobile: "/static/img/movie-01.jpg" },
                    { id: 3, title: "Animation films", category: "Animations", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-04.jpg", imgMobile: "/static/img/movie-01.jpg" },
                    { id: 4, title: "Animation films", category: "Movies", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-01.jpg", imgMobile: "/static/img/movie-01.jpg" },
                    { id: 5, title: "Animation films", category: "Movies", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-02.jpg", imgMobile: "/static/img/movie-01.jpg" },
                    { id: 6, title: "Animation films", category: "Animations", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-03.jpg", imgMobile: "/static/img/movie-01.jpg" },
                    { id: 7, title: "Animation films", category: "Animations", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2, imgDesk: "/static/img/movie-04.jpg", imgMobile: "/static/img/movie-01.jpg" },
                ],
            }
    },
    methods: {
      cutDescrition: function (string) {
        return string.substr(0,74);
      }
    },
    created: function () {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  
  .movieList {
    max-width: 1024px;
    margin: 0 auto;
  }
  ul {
    display: grid;
    flex-direction: row;
    flex-wrap: wrap;
    grid-template-columns: repeat(4,auto);
  }
  li {
    list-style: none;
  }
  .movies {
    text-align: left;
    margin: 0 auto;
    -webkit-box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
    -moz-box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
    box-shadow: 0 0 5px 1px rgba(0,0,0,0.1);
    height: fit-content;
  }
  .thumbs {
    width: 100%;
  }
  .container {
    padding: 20px;
  }
  .title {
    font-size: 26px;
    color: #717171;
  }
</style>
