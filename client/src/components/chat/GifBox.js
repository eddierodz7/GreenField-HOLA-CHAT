import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class GifBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      GIFs: [],
      offset: 0,
      message: 'Input a query to search related gif results'
    }
  }

  onChange(e){
    this.setState({
      query: e.target.value
    })
  }

  onKeyUp(e){
    if(e.key === 'enter'){
      if(this.state.query.length){
        this.setState({
          GIFs: [],
          offset: 0
        });
        this.getGIFs();
      }else{
        alert('Please enter a search term to find gif');
      }
    }
  }

  registerScrollEvent(){
    let $gifs = $('.gifs')[0];
    $($gifs).on('scroll', function(){
       if($($gifs).scrollTop() + $($gifs).innerHeight() >= $($gifs).prop('scrollHeight')){
         this.setState({
           offset: this.state.offset + 10
         }, () => {
             this.getgIFs();
         });
       }
    }.bind(this));
  }

  removeScrollEvent(){
    $('.gifs').off('scroll');
  }

  getGIFs(){
    this.removeScrollEvent();
    this.setState({
      message: ''
    });
    axios.get('https://api.giphy.com/v1/gifs/search',{
      params: {
        api_key: 'ln9tgm0RCZiGOcD5D6Gm3Wr8JYXLq4Zh',
        q: this.state.query,
        limit: 10,
        offset: this.state.offset
      }
    })
    .then(function(response){
      let results = response.data.data;
      if(result.length){
          let gifs = results.map((gif) =>{
            return{
              original
            }
          })
      }
    })
  }
}
