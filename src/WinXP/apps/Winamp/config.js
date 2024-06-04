// from Webamp demo

const album = 'netBloc Vol. 24: tiuqottigeloot';
function getRandomDuration(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const initialTracks = [
  {
    url: 'ChantsOiseaux/Bergeronnette_grise.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Bergeronnette grise',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Bouvreuil_pivoine.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Bouvreuil pivoine',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Bruant_des_roseaux.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Bruant des roseaux',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Buse-variable.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Buse variable',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Canard-colvert.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Canard colvert',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Etourneau.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Etourneau',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Fauvette_a_tete_noire.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Fauvette à tête noire',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/faucon crécerelles.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Faucon crécerelles',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Geai.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Geai',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Grande-aigrette.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Grande aigrette',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Grive_musicienne.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Grive musicienne',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Heron-cendre.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Héron cendré',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/linotte.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Linotte',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Merle_noir.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Merle noir',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Mesange_bleue.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Mésange bleue',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Mesange_charbonniere.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Mésange charbonnière',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Moineau-domestique.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Moineau domestique',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/mouettes.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Mouettes',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Pic-vert.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Pic vert',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Pic_epeiche.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Pic épeiche',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Pie-bavarde.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Pie bavarde',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Pigeon_ramier.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Pigeon ramier',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Pinson_des_arbres.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Pinson des arbres',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Pouillot_veloce.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Pouillot véloce',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/rossignol.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Rossignol',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Rouge_gorge.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Rouge gorge',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Rouge_queue_noir.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Rouge queue noir',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Tourterelle-turque.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Tourterelle turque',
      artist: 'Claude Conseil',
      album,
    },
  },
  {
    url: 'ChantsOiseaux/Verdier.mp3',
    album,
    duration: getRandomDuration(40, 60),
    metaData: {
      title: 'Verdier',
      artist: 'Claude Conseil',
      album,
    },
  },
];
