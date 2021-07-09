export const options = {
  iterations: 1,
  iterationStart: 0,
  direction: 'alternate',
  duration: 20000,
  fill: 'both',
  // iterations: Infinity,
  // delay: 1000,
  // endDelay: 1000,
}

export const keyframes = [
  {
    transform: 'translateX(0) translateY(0) scaleY(0.20) scaleX(0.20)',
    transformOrigin: '0 0',
    easing: 'ease-in-out',
  },
  {
    transform: 'translateY(-80%) translateX(-68%) scaleY(1.01) scaleX(1.01)',
    easing: 'ease-in-out',
    offset: 0.15,
  },
  {
    transform: 'translateY(-79%) translateX(-67%) scaleY(1.01) scaleX(1.01)',
    easing: 'ease',
    offset: 0.3,
  },
  {
    transform: 'translateY(-36%) translateX(-26%) scaleY(0.70) scaleX(0.70)',
    // filter: "blur(0)",
    // filter: "saturate(100%)",
    filter: 'hue-rotate(0)',
    easing: 'ease-in-out',
    offset: 0.45,
  },
  {
    transform: 'translateY(-31%) translateX(-20%) scaleY(0.6) scaleX(0.6)',
    // filter: "blur(2px)",
    // filter: "saturate(300%)",
    filter: 'hue-rotate(-180deg)',
    // easing: "ease-in-out",
    easing: 'linear',
    offset: 0.55,
  },
  {
    transform: 'translateY(-30%) translateX(-20%) scaleY(0.6) scaleX(0.6)',
    // filter: "blur(0)",
    // filter: "saturate(100%)",
    filter: 'hue-rotate(0)',
    easing: 'ease-in-out',
    offset: 0.65,
  },
  {
    transform: 'translateY(-35%) translateX(-80%) scaleY(1) scaleX(1)',
    easing: 'ease-in-out',
    offset: 0.75,
  },
  {
    transform: 'translateY(-32%) translateX(-76%) scaleY(0.95) scaleX(0.95)',
    easing: 'ease-in-out',
    offset: 0.85,
  },

  {
    transform: 'translateX(0) translateY(0) scaleY(0.20) scaleX(0.20)',
    transformOrigin: '0 0',
    easing: 'ease-in-out',
  },
]
