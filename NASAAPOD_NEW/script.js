console.log("hello")

//

function loadNASAData(){
  console.log("loadNASAData");

  let loadingimage = "https://yt3.googleusercontent.com/UgLHVJF0BRvC0-UGYHipHjxEmTs5GIKT2y16niUWe78S7JjGx1YZvxNYMUqPiIUKbRE3u3BaUQ=s900-c-k-c0x00ffffff-no-rj";
  document.getElementById("image").src = loadingimage;

  // fetch call
  // MY API KEY = VVOMKPEUWEvPS5RpbUQYChKG5d9CrxjndE4EIx8X
  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

  let apikey = "VVOMKPEUWEvPS5RpbUQYChKG5d9CrxjndE4EIx8X";
  let url = "https://api.nasa.gov/planetary/apod?api_key=" + apikey;

  console.log(url);

  // fetch(url2).
  //   then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  // })
  // .catch((error) => {
  //   console.log(error)
  // });

  fetch(url).then(function(response){
    return response.json();
   }
  ).then(function(json){
    //console.log(json);

    let title = json.title;
    let date = json.date;
    let explanation = json.explanation;
    let url = json.url;
    let media_type = json.media_type;
    let hdurl = json.hdurl;

    console.log(`title: ${title}`);
    console.log(`date: ${date}`);
    console.log(`explanation: ${explanation}`);
    console.log(`url: ${url}`);
    console.log(`media_type: ${media_type}`);
    console.log(`hdurl: ${hdurl}`);

    document.getElementById("title").innerHTML = title;
    document.getElementById("date").innerHTML = date;
    document.getElementById("explanation").innerHTML = explanation;

    // document.getElementById("image").src = url; // image di etla scr ani url vatale
    document.getElementById("image").src = hdurl ; // edi pan image di unde hdurl


    // let html = `<h1>${title}</h1>
    //             <p>${date}</p>
    //             <p>${explanation}</p>
    //             <img src="${url}" alt="${title}">`

    // document.getElementById("nasa").innerHTML = html;

  }).catch(function(error) {
    console.log(error);
  });

}