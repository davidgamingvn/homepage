const particleOptions = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        area: 1500,
      },
    },
    color: {
      value: ["#A4161A", "#FFC300", "#D3D3D3", "#FFFFFF"],
    },
    shape: {
      type: ["triangle", "circle", "edge", "polygon"],
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    links: {
      enable: true,
      distance: 300,
      color: "#808080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"],
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 10,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
};

export default particleOptions;
