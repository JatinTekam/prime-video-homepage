let studios = [
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER.png",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal.png",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Amc.png",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Vrott.png",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/Channels/Stingray.png",
  },
  {
    logo: "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg",
  }
];

function showStudios() {
  let allStudio = ``;
  for (let i = 0; i < studios.length; i++) {
    allStudio = allStudio +
      `

        <div class="box">
           <a href=""><img src="${studios[i].logo}" alt=""></a>
        </div>

        `;

      document.getElementById('box-right').innerHTML=allStudio;
    
  }
}

showStudios();


