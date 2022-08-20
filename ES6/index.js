
// const api = "AIzaSyB3Z5XJ51y6nsfU4Cv4YuB8ez9AEdIuFns";
const api = "AIzaSyCPBAV4ZUr_mr3sZ8zjNYUinMfcY5xmGy0"

const searchbutton = async () => {
    try {

        const q = document.querySelector("#query").value

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${api}`);

        const data = await res.json();

        console.log(data.items);
        append(data.items);
    } catch (err) {
        console.log(err)
    }
};


window.addEventListener("load", async function () {
    // document.querySelector("#query").innerText = null
    try {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=most-popular-youtube-video-in-india%202&key=${api}`);

        const data = await res.json();
        // console.log(data.items)
        append(data.items);
    } catch (err) {
        console.log(err)
    }
});


//*************


const append = (videos) => {
    // console.log(videos)

    let show_video = document.getElementById("show_video");

    show_video.innerHTML = null;
    // q.innerText = null;

    videos.forEach(({ id: { videoId }, snippet: { title }, snippet: { thumbnails: { medium: { url } } } }) => {
        console.log(videos)


        let box = document.createElement("div")
        let box_link = document.createElement("a")
        // let iframe = document.createElement("iframe");
        // iframe.src = `https://www.youtube.com/embed/${videoId}`;

        // iframe.width = "100%";
        // iframe.hight = "100%";
        // iframe.allow = "fullscreen";
        box_link.href = `https://www.youtube.com/embed/${videoId}`;
        box_link.target = '_blank';

        let name = document.createElement("h5");
        name.innerText = title;

        // console.log(`https://www.youtube.com/embed/${videoId}`);

        let image = document.createElement("img");
        image.src = url;
        image.setAttribute("id", "picture")


        box_link.append(image);
        box.append(box_link, name);
        show_video.append(box)

    });
}


function side_btn() {
    let button = document.getElementById("show_side")
    // alert("working")
    if (button.style.display === "none") {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

let num = 1;
function notification() {

    if (num == 1) {
        alert("Notifications are turn ON !")
        console.log(num)
        num++;
    }
    else {
        console.log(num)
        alert("Notifications are turn OFF !")
        num--;
    }
}




