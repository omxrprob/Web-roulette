document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('goButton').addEventListener('click', function() {
    const websites = [
      "https://oskarstallberg.com/Townscraper",
      "https://tv.garden",
      "https://lostgamer.io",
      "https://pointerpointer.com",
      "https://driveandlisten.herokuapp.com",
      "https://mrdoob.com/",
      "https://slowroads.io",
      "https://virtualvacation.us",
      "https://www.emulatorgames.online/",
      "https://www.ocearch.org/",
      "https://www.planyourroom.com/",
      "https://huggingface.co/",
      "https://timemap.org/",
      "https://spottyedrowingchild.com/",
      "https://whatsmystarbucksname.com/",
      "https://lookingatsomething.com/",
      "https://screamintothevoid.com/",
      "https://geo-fs.com/",
      "https://yarn.co/",
      "https://sites.google.com/view/nextbitgames/home",
      "https://playglenn.com/",
      "https://kickassapp.com/",
      "https://ismycomputeron.com/",
      "https://dood.al/pinktrombone/",
      "https://www.retrogames.cc/",
      "https://zty.pe/",
      "https://nzp.gay/",
      "https://heeeeeeeey.com/",
      "https://theuselessweb.com/",
      "https://staggeringbeauty.com/",
      "https://thispersondoesnotexist.com/",
      "https://mondrianandme.com/",
      "https://ncase.me/ballot/",
      "https://neal.fun/draw-perfect-circle/",
      "https://longdogechallenge.com/",
      "https://paint.toys/",
      "https://raining.fm/",
      "https://findtheinvisiblecow.com/",
      "https://dinosaurgame.io/",
      "https://koalastothemax.com/"
    ];

    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    chrome.tabs.create({ url: randomWebsite });
  });
});
