document.addEventListener("DOMContentLoaded", function() {
  const projectsContainer = document.getElementById("projects-container");

  // Sample projects data
  const projects = [
    { 
      title: "Weather App",
      description: "A simple weather app that makes use of the free weather API to display the weather information making use of location data.",
      imageUrl: "WeatherAppPic.jpg",
      projectUrl: "https://github.com/RobotNinja15/SimpleWeatherApp"
    },
    { 
      title: "Project 2",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imageUrl: "https://via.placeholder.com/300",
      projectUrl: "#"
    },
    { 
      title: "Project 3",
      description: "Nulla facilisi. Duis ultricies elit non nunc laoreet fermentum.",
      imageUrl: "https://via.placeholder.com/300",
      projectUrl: "#"
    },
    // Add more projects below
    { 
      title: "Project 4",
      description: "Cras nec massa non nulla vestibulum faucibus. Sed id nisi aliquam, bibendum est sit amet, suscipit eros.",
      imageUrl: "https://via.placeholder.com/300",
      projectUrl: "#"
    },
    { 
      title: "Project 5",
      description: "Vivamus vitae quam hendrerit, fermentum nulla nec, auctor tortor.",
      imageUrl: "https://via.placeholder.com/300",
      projectUrl: "#"
    },
    { 
      title: "Project 6",
      description: "Ut ullamcorper dui vel libero maximus, in tristique nulla consectetur.",
      imageUrl: "https://via.placeholder.com/300",
      projectUrl: "#"
    }
  ];

  // Create project cards
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const image = document.createElement("img");
    image.src = project.imageUrl;
    card.appendChild(image);

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h2");
    title.textContent = project.title;
    content.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    content.appendChild(description);

    const link = document.createElement("a");
    link.href = project.projectUrl;
    link.textContent = "View Project";
    content.appendChild(link);

    card.appendChild(content);

    projectsContainer.appendChild(card);
  });
});
