<template>
  <div id="fullpage">
    <section class="section intro">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h1 class="brand-heading">Nabla Game</h1>
            <p class="intro-text">ナブラ演算子ゲーム</p>
            <a 
              href="#about" 
              class="btn btn-circle page-scroll">
              <i class="fa fa-angle-double-down animated"/>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section about">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
            <h1>About</h1>
            <p>
              <strong>「∇」という記号をご存じでしょうか？</strong><br>
              <br>
              「∇」は、ナブラ演算子といい、数学、物理、化学などで使う微分演算子です。<br>
              このように聞くと、難しく感じられる方も多いかも知れませんが、この演算子を気楽に楽しめるゲームがあるとしたらどうでしょう。<br>
              <br>
              それが「ナブラ演算子ゲーム」です。ルールはいたってシンプル。基底を微分して相手を0次元にするだけです。<br>
              <br>
              一度遊び方を覚えれば、いつでもこの刺激的なゲームをプレイすることができます。<br>
              <br>
              是非とも「ナブラ演算子ゲーム」の世界に足を踏み入れてみて下さい。<br>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section play">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
            <h1>How to Play</h1>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/kf0DAygsXAU" 
                frameborder="0" 
                allowfullscreen/>
            </div>
            <ul class="list-inline banner-social-buttons pdf">
              <li>
                <a 
                  href="/how_to_play.pdf" 
                  target="_blank" 
                  class="btn btn-default btn-lg">
                  <i class="fa fa-file-pdf-o fa-fw"/>
                  <span class="network-name">PDF</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section buy">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
            <h1>How to Buy</h1>
            <p>
              現在「ナブラ演算子ゲーム」は、東京大学生協第二購買部（本郷キャンパス）および<a 
                href="http://www.utcoop-netshop.jp/249_732.html" 
                target="_blank">東京大学生協通販サイト</a>にて販売しております。<br>
              今後の一般販売やイベントなどの最新情報については、随時公式Twitterでも掲載いたします。<br>
            </p>
            <ul class="list-inline banner-social-buttons twitter">
              <li>
                <a 
                  href="https://twitter.com/nablagame" 
                  target="_blank" 
                  class="btn btn-default btn-lg">
                  <i class="fa fa-twitter fa-fw"/>
                  <span class="network-name">Twitter</span>
                </a>
              </li>
            </ul>
            <p>
              ナブラ演算子ゲームについてのお問い合わせはこちらまで<br>
              <a href="mailto:nablaoperatorgame@gmail.com">nablaoperatorgame@gmail.com</a><br>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import fullpage from 'fullpage.js'

export default {
  mounted() {
    $(document).ready(() => {
      $('#fullpage').fullpage({
        lockAnchors: true,
        anchors: ['intro', 'about', 'play', 'buy'],
        navigation: true,
        paddingTop: '0px',
        paddingBottom: '0px'
      })
    })
  }
}
</script>

<style lang="scss">
@import 'fullpage.js/dist/jquery.fullpage.css';
@import '~assets/_grayscale.scss';

body {
  color: $black;
  background-color: $white;
}

.intro {
  color: $black;
  font-weight: bold;
  background: url('~assets/math.png') repeat;
  background-color: $white;
}

.btn-circle {
  border: 2px solid $black;
  color: $black;
  &:focus {
    color: $black;
    background: rgba($black, 0.1);
  }
}

.pdf {
  margin-top: 50px;
}

.twitter {
  margin-top: 30px;
  margin-bottom: 30px;
}

.brand-heading {
  font-size: 40px;
  @media (min-width: 768px) {
    font-size: 100px;
  }
}

.intro-text {
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 26px;
  }
}

.buy {
  background: url('~assets/congruent_pentagon.png') repeat;
}
</style>
