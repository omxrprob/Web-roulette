document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('goButton').addEventListener('click', function() {
    const websites = [
      "https://oskarstallberg.com/Townscraper",
      "https://tv.garden",
      "https://lostgamer.io",
      "https://pointerpointer.com",
      "https://drivenlisten.com",
      "https://medoob.com",          // Assumed URL for "me doob"
      "https://slowroads.io",
      "https://virtualvacation.us",
      "https://emulatorgames.online",
      "https://ocearch.org",
      "https://planyourroom.com",
      "https://huggingface.com",
      "https://timemap.org",
      "https://spottyedrowingchild.com",
      "https://whatsmystarbucksname.com",
      "https://lookingatsomething.com",
      "https://screamintothevoid.com",
      "https://geo-fs.com",
      "https://yarn.co",
      "https://sites.google.com/view/nextbitgames/home",
      "https://playglenn.com",
      "https://kickassapp.com",
      "https://ismycomputeron.com",
      "https://dood.al/pinktrombone/",
      "https://retrogames.on",
      "https://zty.pe"
    ];
    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    chrome.tabs.create({ url: randomWebsite });
  });
});
