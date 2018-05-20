<template>
    <div>
      <div class="top">
        <div class="topContent">
          <div class="logo">
            <img src="static/img/logo.jpg" alt="Pinball Grid Theme">
          </div>
          <div class="menuContent">
            <div class="menu">
              <div class="menuToggle">
                <input class="menuHamburguer" type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="searcContent">
            <input type="text" v-model="search" class="search" placeholder=""/>
          </div>
          <div class="profile">
            <img src="static/img/profile.jpg" alt="">
            <p>Welcome John</p>
          </div>
        </div>
      </div>
      <div class="content">
        <ul class="movieList">
          <li :class="`movies ${' item'+movie.id}`" v-for="movie in filteredMovies" :key="`movie+${movie.id}`">
            <div class="img">
              <img v-bind:src="movie.img" class="thumbs"/>
            </div>
            <div class="container">
              <div class="title">
                {{ movie.title }}
              </div>
              <div class="categopry">
                <img src="static/img/location.jpg" alt="Location">
                {{ movie.category }}
              </div>
              <div class="description">
                {{ cutDescrition(movie.description) }}
              </div>
            </div>
            <div class="rating" :rating="movie.rating">
              <div v-for="( star, index ) in 4" class="stars" :key="`star-${index}`">
                <img v-bind:src="checkRating(index, movie.rating)" class="star"/>
              </div>
              <div class="facebook">
                <img src="static/img/facebook.jpg" alt="Facebook">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Pinball',
  data () {
    return {
      windowWidth: 2000,
      search: '',
      // Simulating API consumption
      movies: [
        {
          id: 0,
          title: 'Animation films',
          category: 'Movies',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-01.jpg'
        },
        {
          id: 1,
          title: 'Enrolados',
          category: 'Movies',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-02.jpg'
        },
        {
          id: 2,
          title: 'Animation films',
          category: 'Animations',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-03.jpg'
        },
        {
          id: 3,
          title: 'Animation films',
          category: 'Animations',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-04.jpg'
        },
        {
          id: 4,
          title: 'Animation films',
          category: 'Movies',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-04.jpg'
        },
        {
          id: 5,
          title: 'Animation films',
          category: 'Movies',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-03.jpg'
        },
        {
          id: 6,
          title: 'Animation films',
          category: 'Animations',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-01.jpg'
        },
        {
          id: 7,
          title: 'Animation films',
          category: 'Animations',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          rating: 2,
          img: '/static/img/movie-02.jpg'
        }
      ]
    }
  },
  computed: {
    filteredMovies () {
      return this.movies.filter(movie => {
        return movie.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    responsive () {
      return this.windowWidth < 1024
    }
  },
  methods: {
    cutDescrition: function (string) {
      return this.windowWidth < 600 ? string : string.substr(0, 74)
    },
    randomRating: function () {
      // Created a random function to simulate rating instead of setting it in JSON manually.
      this.movies.forEach(movie => {
        movie.rating = Math.floor(Math.random() * 4)
      })
    },
    checkRating: function (index, rating) {
      return index < rating
        ? '/static/img/star_active.jpg'
        : '/static/img/star.jpg'
    }
  },
  mounted: function () {
    let that = this
    that.windowWidth = window.innerWidth
    this.$nextTick(function () {
      window.addEventListener('resize', function (e) {
        that.windowWidth = window.innerWidth
      })
    })
    // Turn off the function below to get ratings set on JSON instead of randomize it.
    this.randomRating()
  }
}
</script>

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.top {
    width: 100%;
    height: 97px;
    border-bottom: 1px solid #d6d5d4;
}
.topContent {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
}
.logo {
  display: flex;
}
.logo img {
  margin: auto;
}
.menuContent {
  display: flex;
  width: 370px;
}
.menu {
  width: 48px;
  height: 32px;
  border: 1px solid #e7e7e7;
  background: linear-gradient(white, #f5f5f5);
  border-radius: 4px;
  padding: 0px 0 0 0;
  margin: auto;
}
.menuToggle {
  display: block;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  margin: 5px 0 0 7px;
}
.menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}
.menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #bbbbbb;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}
.menuToggle span:first-child {
  transform-origin: 0% 0%;
}
.menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
.menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-8px, -15px);
}
.menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
.menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(-4px, 12px);
}
.movieList {
  max-width: 1024px;
  margin: 0 auto;
}
.searcContent {
  display: flex;
  width: 80%;
  padding: 30px;
}
.search {
  margin: auto;
  max-width: 420px;
  width: 100%;
  height: 34px;
  color: #acaaaa;
  font-size: 14px;
  background: #f7f6f6 url("/static/img/lens.jpg") no-repeat;
  background-position: 97%;
  border-radius: 4px;
  border: 1px solid #e7e7e7;
  -moz-appearance: none;
  -webkit-appearance: none;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.profile {
  display: flex;
  width: 360px;
  color: #8c8c8c;
  font-size: 16px;
}
.profile img, .profile p {
  margin: auto;
}
.content {
  background: #f0efee;
}
ul {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, auto);
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  max-width: 230px;
}
li:hover .thumbs {
  opacity: 0.8;
}
.movies {
  text-align: left;
  margin: 10px;
  -webkit-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  height: fit-content;
  color: #acaaaa;
  font-size: 14px;
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

@media only screen and (max-width: 1024px) and (min-width: 769px) {
  ul {
    grid-template-columns: repeat(3, auto);
  }
  .logo {
    margin-left: 10px;
  }
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
  ul {
    grid-template-columns: repeat(2, auto);
  }
}

@media only screen and (max-width: 599px) {
  .topContent {
    display: inline-block;
  }
  .logo {
    margin: 20px 0;
  }
  .menuContent {
    float: left;
    margin: -64px 0 0 10px;
    width: auto;
  }
  .searcContent {
    width: 37px;
    float: right;
    margin: -94px -10px 0 0;
  }
  .search {
    background-position: center;
  }
  .profile {
    display: none;
  }
  ul {
    grid-template-columns: repeat(1, auto);
  }
  li {
    max-width: 100%;
  }
}
</style>
