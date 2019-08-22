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
              <i class="fa fa-angle-double-down animated" />
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
              <strong>「∇」という記号をご存じでしょうか？</strong>
              <br >
              <br >「∇」は、ナブラ演算子といい、数学、物理、化学などで使う微分演算子です。
              <br >このように聞くと、難しく感じられる方も多いかも知れませんが、この演算子を気楽に楽しめるゲームがあるとしたらどうでしょう。
              <br >
              <br >それが「ナブラ演算子ゲーム」です。ルールはいたってシンプル。基底を微分して相手を0次元にするだけです。
              <br >
              <br >一度遊び方を覚えれば、いつでもこの刺激的なゲームをプレイすることができます。
              <br >
              <br >是非とも「ナブラ演算子ゲーム」の世界に足を踏み入れてみて下さい。
              <br >
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
                allowfullscreen
              />
            </div>
            <ul class="list-inline banner-social-buttons pdf">
              <li>
                <a 
                  href="/how_to_play.pdf" 
                  target="_blank" 
                  class="btn btn-default btn-lg">
                  <i class="fa fa-file-pdf-o fa-fw" />
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
            <h2>店舗</h2>
            <p>
              <strong>東京大学生協購買部</strong>
              <br >- 本郷キャンパス第二購買部
              <br >- 駒場キャンパス購買部
              <br >
            </p>
            <p>
              <strong>東京理科大学生協購買部</strong>
              <br >- 神楽坂店
              <br >- 野田店
              <br >
            </p>
            <p>
              <strong>
                <a 
                  href="https://sugorokuya.jp/" 
                  target="_blank">すごろくや</a>
              </strong>
              <br >
            </p>
            <h2>オンラインショップ</h2>
            <p>
              <strong>
                <a 
                  href="https://sugorokuya.jp/gamelist?s=m:ナブラ演算子ゲーム製作委員会" 
                  target="_blank">すごろくや</a>
              </strong>
              <br >
            </p>
            <p>
              現在「ナブラ演算子ゲーム」は、定価1,400円＋税のところ、各大学生協では特別価格1,200円＋税で販売しております。
              <br >在庫状況や今後のイベントなどの最新情報については、随時公式Twitterでも掲載いたします。
              <br >
            </p>
            <ul class="list-inline banner-social-buttons twitter">
              <li>
                <a
                  href="https://twitter.com/nablagame"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <i class="fa fa-twitter fa-fw" />
                  <span class="network-name">Twitter</span>
                </a>
              </li>
            </ul>
            <p>
              ナブラ演算子ゲームについてのお問い合わせはこちらまで
              <br >
              <a href="mailto:nablaoperatorgame@gmail.com">nablaoperatorgame@gmail.com</a>
              <br >
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
