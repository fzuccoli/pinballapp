<template>
    <div>
      <div class="search-wrapper">
        <input type="text" v-model="search" class="search" placeholder=""/>
      </div>
      <div class="content">
        <ul class="movieList">
          <li :class="`movies ${' item'+movie.id}`" v-for="movie in filteredMovies" :key="`movie+${movie.id}`">
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
            </div>
            <div class="rating" :rating="movie.rating">
              <div v-for="( star, index ) in 4" class="stars">
                <img v-bind:src="checkRating(index, movie.rating)" class="star"/>
              </div>
              <div class="facebook">
                <img src="static/img/facebook.jpg" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "Pinball",
  data() {
    return {
      windowWidth: 2000,
      search: "",
      // Simulating API consumption
      movies: [
        {
          id: 0,
          title: "Animation films",
          category: "Movies",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-01.jpg",
          imgMobile: "/static/img/movie-01.jpg"
        },
        {
          id: 1,
          title: "Enrolados",
          category: "Movies",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-02.jpg",
          imgMobile: "/static/img/movie-02.jpg"
        },
        {
          id: 2,
          title: "Animation films",
          category: "Animations",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-03.jpg",
          imgMobile: "/static/img/movie-03.jpg"
        },
        {
          id: 3,
          title: "Animation films",
          category: "Animations",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-04.jpg",
          imgMobile: "/static/img/movie-04.jpg"
        },
        {
          id: 4,
          title: "Animation films",
          category: "Movies",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-04.jpg",
          imgMobile: "/static/img/movie-04.jpg"
        },
        {
          id: 5,
          title: "Animation films",
          category: "Movies",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-03.jpg",
          imgMobile: "/static/img/movie-03.jpg"
        },
        {
          id: 6,
          title: "Animation films",
          category: "Animations",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-01.jpg",
          imgMobile: "/static/img/movie-01.jpg"
        },
        {
          id: 7,
          title: "Animation films",
          category: "Animations",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          rating: 2,
          imgDesk: "/static/img/movie-02.jpg",
          imgMobile: "/static/img/movie-02.jpg"
        }
      ]
    };
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        return movie.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    responsive() {
      return this.windowWidth < 1024 ? true : false;
    }
  },
  methods: {
    cutDescrition: function(string) {
      return this.windowWidth < 600 ? string : string.substr(0, 74);
    },
    randomRating: function() {
      // Created a random function to simulate rating instead of setting it in JSON manually.
      this.movies.forEach(movie => {
        movie.rating = Math.floor(Math.random() * 4);
      });
    },
    checkRating: function(index, rating) {
      return index < rating ? '/static/img/star_active.jpg' : '/static/img/star.jpg'
    }
  },
  mounted: function() {
    let that = this;
    that.windowWidth = window.innerWidth;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.windowWidth = window.innerWidth;
      });
    })
    // Turn off the function below to get ratings set on JSON instead of randomize it.
    this.randomRating();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.movieList {
  max-width: 1024px;
  margin: 0 auto;
}
.search {
  width: 300px;
  height: 30px;
  background: url('/static/img/lens.jpg') no-repeat;
  background-position: 97%;
}
.content {
  background: #f0efee;
}
ul {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, auto);
}
li {
  max-width: 240px;
  list-style: none;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}
li:hover .thumbs{
  opacity: 0.8;
}
.movies {
  text-align: left;
  margin: 0 auto;
  -webkit-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  height: fit-content;
}
.thumbs {
  width: 100%;
}
.rating {
  display: flex;
  border-top: 1px solid #e9e9e9;
  padding: 10px 20px;
}
.star {
  width: 17px;
  height: 17px;
  margin: 0 2px;
}
.facebook {
  margin: 0 0 0 100px;
}
.container {
  padding: 20px;
}
.title {
  font-size: 26px;
  color: #717171;
}
</style>
