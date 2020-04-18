<template>
    <div class="wrapper">
        <div class="outside-circle is-active">
            <div class="inside-circle anim-third">      
                <img class="home-icon " :src="homeIcon" />
            </div>    
        </div>
        <div class="vertical-line anim-fourth"></div>
    </div>
</template>

<script>
export default {
    name: "HouseAnimation",

    data(){
        return {
            homeIcon: require('~/assets/home-run.svg')
        }
    },

    mounted() {
        var wrapper = document.querySelector('.wrapper');

        setInterval(function () {   
        wrapper.classList.add('animate');  
        }, 1000);

        setInterval(function () {  
        wrapper.classList.remove('animate');   
        }, 8500);
    }
}
</script>

<style scoped>

.home-icon {
    width: 65px !important;
    max-width: 65px !important;
    height: 76px !important;
}

.wrapper {
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;  
}

.outside-circle {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 80px;
  overflow: hidden;
}
.outside-circle.is-active {
  box-shadow: 0 0 0 20px rgba(0, 159, 223, 0.3);
}

.inside-circle {
  position: relative;
  margin: 10px auto;
  border-radius: 80px;
  width: 80px;
  height: 80px;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0px 0px 150px #CCCCCC;
}
.animate .inside-circle {
  -webkit-animation: eclipse 2s linear forwards;
          animation: eclipse 2s linear forwards;
}

@-webkit-keyframes eclipse {
  0% {
    box-shadow: 0px -240px 0px 150px #009FDF, 0px 0px 0px 150px #CCCCCC;
  }
  100% {
    box-shadow: 0px 0px 0px 150px #009FDF, 0px 0px 0px 150px #CCCCCC;
  }
}

@keyframes eclipse {
  0% {
    box-shadow: 0px -240px 0px 150px #009FDF, 0px 0px 0px 150px #CCCCCC;
  }
  100% {
    box-shadow: 0px 0px 0px 150px #009FDF, 0px 0px 0px 150px #CCCCCC;
  }
}
.vertical-line {
  background: #CCCCCC;
  width: 10px;
  height: 150px;
  margin: 0 auto;
}
.vertical-line::before {
  content: "";
  display: block;
  background: #009FDF;
  width: 100%;
  height: 0;
  margin: auto;
}
.animate .vertical-line::before {
  -webkit-transition: height 1s linear;
  transition: height 1s linear;
  height: 150px;
}

.horizontal-line {
  background: #CCCCCC;
  height: 10px;
  width: 290px;
  margin: 80px auto;
  position: relative;
  left: 225px;
}
.horizontal-line::before {
  content: "";
  position: absolute;
  background: #009FDF;
  width: 0;
  height: 10px;
  margin: auto;
  left: 5px;
}
.animate .horizontal-line::before {
  -webkit-transition: width 0.5s linear;
  transition: width 0.5s linear;
  width: 290px;
}

.corner {
  position: absolute;
  width: 90px;
  height: 90px;
}
.corner__left {
  top: -80px;
  left: -85px;
}
.corner__right {
  bottom: -80px;
  right: -85px;
}
.corner path {
  stroke-width: 11px;
  fill: none;
}
.corner .grey-path {
  stroke: #CCCCCC;
}
.corner .blue-path {
  stroke: #009FDF;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
}
.animate .corner .blue-path {
  -webkit-animation: corner-fill linear 0.5s forwards;
          animation: corner-fill linear 0.5s forwards;
}

@-webkit-keyframes corner-fill {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes corner-fill {
  to {
    stroke-dashoffset: 0;
  }
}
.animate .anim-first {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
.animate .anim-first .icon {
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}
.animate .anim-second::before {
  -webkit-transition-delay: 1s !important;
          transition-delay: 1s !important;
}
.animate .anim-third {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
.animate .anim-third .icon {
  -webkit-transition-delay: 2s;
          transition-delay: 2s;
}
.animate .anim-fourth::before {
  -webkit-transition-delay: 3s !important;
          transition-delay: 3s !important;
}
.animate .anim-fifth {
  -webkit-animation-delay: 4s !important;
          animation-delay: 4s !important;
}
.animate .anim-6th::before {
  -webkit-transition-delay: 4.4s !important;
          transition-delay: 4.4s !important;
}
.animate .anim-7th {
  -webkit-animation-delay: 4.9s !important;
          animation-delay: 4.9s !important;
}

.icon {
  display: block;
  width: 100%;
  height: 0%;
  overflow: hidden;
}
.animate .icon {
  -webkit-transition: height 1s linear;
  transition: height 1s linear;
  height: 100%;
}
.icon::before {
  content: "";
  display: inline-block;
  position: relative;
  font-size: 40px;
  top: 40px;
  margin-top: -25px;
  color: #009FDF;
  overflow: hidden;
}

.icon_checkmark::before {
  content: "\2714";
}

.icon_whistle::before {
  display: block;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9IiMwMDlGREYiPiAgPHRpdGxlPndoaXN0bGU8L3RpdGxlPiAgPHBhdGggZD0iTTguMjEzIDE3LjQxYzAuNjk3LTIuNTQyIDMuMDI0LTQuNDEgNS43ODctNC40MWgxdjJoM3YtMmgxMHYzbC04LjEzMiAxLjc0M2MwLjA4NiAwLjQwNSAwLjEzMiAwLjgyNiAwLjEzMiAxLjI1NyAwIDMuMzE0LTIuNjg2IDYtNiA2LTIuNzYzIDAtNS4wOTAtMS44NjgtNS43ODctNC40MS0wLjMzNiAwLjI1Ny0wLjc1NyAwLjQxLTEuMjEzIDAuNDEtMS4xMDUgMC0yLTAuODk1LTItMnMwLjg5NS0yIDItMmMwLjQ1NiAwIDAuODc3IDAuMTUzIDEuMjEzIDAuNDF2MCAwek03IDE4Yy0wLjU1MiAwLTEgMC40NDQtMSAxIDAgMC41NTIgMC40NDQgMSAxIDEgMC41NTIgMCAxLTAuNDQ0IDEtMSAwLTAuNTUyLTAuNDQ0LTEtMS0xdjB6TTE2IDd2NGgxdi00aC0xek0yMS4xMiA4LjAyMWwtMi4xMiAzLjM5MiAwLjg0OCAwLjUzIDIuMTItMy4zOTItMC44NDgtMC41M3pNMTEuODQ4IDguMDIxbDIuMTIgMy4zOTItMC44NDggMC41My0yLjEyLTMuMzkyIDAuODQ4LTAuNTN6Ij48L3BhdGg+PC9zdmc+);
}

</style>