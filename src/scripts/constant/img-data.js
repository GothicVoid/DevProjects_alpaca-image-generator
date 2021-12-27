function getImgSrc(category, name) {
  return `static/alpaca/${category}/${name}.png`;
}

const backgroundImgNames = [
  'blue50',
  'blue60',
  'blue70',
  'darkblue30',
  'darkblue50',
  'darkblue70',
  'green50',
  'green60',
  'green70',
  'grey40',
  'grey70',
  'grey80',
  'red50',
  'red60',
  'red70',
  'yellow50',
  'yellow60',
  'yellow70',
];

export const BACKGROUNDS = backgroundImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('backgrounds', name),
  layer: 1,
}));

const earsImgNames = ['default', 'tilt-backward', 'tilt-forward'];

export const EARS = earsImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('ears', name),
  layer: 2,
}));

const legImgNames = [
  'default',
  'bubble-tea',
  'cookie',
  'game-console',
  'tilt-backward',
  'tilt-forward',
];

export const LEG = legImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('leg', name),
  layer: 2,
}));

const neckImgNames = ['default', 'bend-backward', 'bend-forward', 'thick'];

export const NECK = neckImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('neck', name),
  layer: 3,
}));

export const NOSE = [
  {
    name: 'nose',
    index: 0,
    src: getImgSrc('nose', 'nose'),
    layer: 4,
  },
];

const mouthImgNames = ['default', 'astonished', 'eating', 'laugh', 'tongue'];

export const MOUTH = mouthImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('mouth', name),
  layer: 5,
}));

const hairImgNames = [
  'default',
  'bang',
  'curls',
  'elegant',
  'fancy',
  'quiff',
  'short',
];

export const HAIR = hairImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('hair', name),
  layer: 5,
}));

const eyesImgNames = ['default', 'angry', 'naughty', 'panda', 'smart', 'star'];

export const EYES = eyesImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('eyes', name),
  layer: 6,
}));

const accessoriesImgNames = ['earings', 'flower', 'glasses', 'headphone'];

export const ACCESSORIES = accessoriesImgNames.map((name, index) => ({
  name,
  index,
  src: getImgSrc('accessories', name),
  layer: 6,
}));
