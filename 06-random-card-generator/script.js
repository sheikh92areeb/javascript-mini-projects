// Function to format views (convert number to K, M format)
function formatViews(views) {
    if (views >= 1_000_000) {
        return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M"; // 1M+
    } else if (views >= 1_000) {
        return (views / 1_000).toFixed(1).replace(/\.0$/, '') + "K"; // 1K+
    }
    return views.toString(); // Less than 1000 remains unchanged
}

function createCard(videoTitle, creatorName, views, publishDate, duration, thumbnail) {
    let formattedViews = formatViews(views);

    // Select the container where cards will be added
    let container = document.querySelector(".container");

    // Create the card div
    let card = document.createElement("div");
    card.classList.add("card");

    // Create the thumbnail container (for overlay effect)
    let thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbnail-container");

    // Create the thumbnail image
    let img = document.createElement("img");
    img.src = thumbnail;
    img.classList.add("thumbnail");

    // Create the duration overlay
    let durationTag = document.createElement("span");
    durationTag.classList.add("duration");
    durationTag.innerText = duration;

    // Append the duration tag to the thumbnail container
    thumbnailContainer.appendChild(img);
    thumbnailContainer.appendChild(durationTag);

    // Create content div
    let cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Title
    let title = document.createElement("p");
    title.classList.add("title");
    title.innerText = videoTitle;

    // Creator Name
    let creator = document.createElement("p");
    creator.classList.add("creator");
    creator.innerText = "By " + creatorName;

    // Views & Publish Date
    let info = document.createElement("p");
    info.classList.add("info");
    info.innerText = `${formattedViews.toLocaleString()} views • ${publishDate} days ago`;

    // Append everything to card content
    cardContent.appendChild(title);
    cardContent.appendChild(creator);
    cardContent.appendChild(info);

    // Append elements to the card
    card.appendChild(thumbnailContainer);
    card.appendChild(cardContent);

    // Append card to container
    container.appendChild(card);
}

// Function to add a random video card when the button is clicked
function addRandomCard() {
    let videos = [
        { title: "Learn JavaScript", creator: "Code Academy", views: 250000, days: 5, duration: "15:30", thumbnail: "javascript.jpg" },
        { title: "CSS Grid Tutorial", creator: "Web Dev", views: 340000, days: 12, duration: "22:45", thumbnail: "CSS-Grid.webp" },
        { title: "React Basics", creator: "Tech Guru", views: 560000, days: 20, duration: "18:15", thumbnail: "react.jpg" }
    ];

    let randomVideo = videos[Math.floor(Math.random() * videos.length)];
    createCard(randomVideo.title, randomVideo.creator, randomVideo.views, randomVideo.days, randomVideo.duration, randomVideo.thumbnail);
}

// Initial Card Example
createCard("Video 1", "Dev", 560000, 7, "31:22", "react.jpg");
