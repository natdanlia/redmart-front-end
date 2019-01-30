
import React from "react";
import { Card, Image } from "semantic-ui-react";
import {Redirect} from 'react-router-dom'
/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = () =>  {
  return (<div id='kocho' class="ui link cards">
  <div class="card">
    <div class="image">
      <img src="https://www.udiscovermusic.com/wp-content/uploads/2017/12/Best-Christmas-country-songs-featued-image-web-optimised-1000.jpg"/>
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://cdn.wonderfulengineering.com/wp-content/uploads/2014/09/Best-Wallpapers-20.jpg"/>
    </div>
    <div class="content">
      <div class="header">Molly</div>
      <div class="meta">
        <span class="date">Coworker</span>
      </div>
      <div class="description">
        Molly is a personal assistant living in Paris.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2011
      </span>
      <span>
        <i class="user icon"></i>
        35 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="http://www.kiplinger.com/slideshow/investing/T018-S001-the-9-best-dividend-growth-stocks-in-the-dow-jones/images/intro.jpg"/>
    </div>
    <div class="content">
      <div class="header">Elyse</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        Elyse is a copywriter working in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://www.udiscovermusic.com/wp-content/uploads/2017/12/Best-Christmas-country-songs-featued-image-web-optimised-1000.jpg"/>
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://www.udiscovermusic.com/wp-content/uploads/2017/12/Best-Christmas-country-songs-featued-image-web-optimised-1000.jpg"/>
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://www.udiscovermusic.com/wp-content/uploads/2017/12/Best-Christmas-country-songs-featued-image-web-optimised-1000.jpg"/>
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://www.udiscovermusic.com/wp-content/uploads/2017/12/Best-Christmas-country-songs-featued-image-web-optimised-1000.jpg"/>
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://www.udiscovermusic.com/wp-content/uploads/2017/12/Best-Christmas-country-songs-featued-image-web-optimised-1000.jpg"/>
    </div>
    <div class="content">
      <div class="header">Matt Giampietro</div>
      <div class="meta">
        <a>Friends</a>
      </div>
      <div class="description">
        Matthew is an interior designer living in New York.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2013
      </span>
      <span>
        <i class="user icon"></i>
        75 Friends
      </span>
    </div>
  </div>
</div>
)
}

export default Profile;
