const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
];

function flattenPlaylists(array) {
  const flatArray = [];
  if (!Array.isArray(array)) return flatArray;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const newTrack = {
        ...array[i][j],
        source: [i, j],
      };
      flatArray.push(newTrack);
    }
  }
  return flatArray;
}

// console.log(flattenPlaylists(playlists));
const cleanArray = flattenPlaylists(playlists);

function scoreTracks(array) {
  const scoredArray = [];
  for (let i = 0; i < array.length; i++) {
    const newTrack = {
      ...array[i],
      score: array[i].votes * 10 - Math.abs(array[i].bpm - 120),
    };
    scoredArray.push(newTrack);
  }
  return scoredArray;
}

// console.log(scoreTracks(cleanArray));
const ratedArray = scoreTracks(cleanArray);

function dedupeTracks(array) {
  const reducedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!reducedArray.some((track) => track.trackId === array[i].trackId)) {
      reducedArray.push(array[i]);
    }
  }
  return reducedArray;
}

// console.log(dedupeTracks(ratedArray));
const dedupeArray = dedupeTracks(ratedArray);

function enforceArtistQuota(array, num) {
  const artistArray = [];
  const artistCounts = {};

  for (let i = 0; i < array.length; i++) {
    const artist = array[i].artist;
    const currentCount = artistCounts[artist] || 0;

    if (currentCount < num) {
      artistArray.push(array[i]);
      artistCounts[artist] = currentCount + 1;
    }
  }
  return artistArray;
}

// console.log(enforceArtistQuota(dedupeArray,1));
const limitArray = enforceArtistQuota(dedupeArray, 1);

function buildSchedule(array) {
  const schedule = [];

  for (let i = 0; i < array.length; i++) {
    const track = {
      trackId: array[i].trackId,
      slot: i + 1,
    };
    schedule.push(track);
  }
  return schedule;
}

// console.log(buildSchedule(limitArray));

function remixPlaylist(array, num) {
  const cleanArray = flattenPlaylists(array);
  const ratedArray = scoreTracks(cleanArray);
  const dedupeArray = dedupeTracks(ratedArray);
  const limitArray = enforceArtistQuota(dedupeArray, num);
  return buildSchedule(limitArray);
}

console.log(remixPlaylist(playlists, 1));
