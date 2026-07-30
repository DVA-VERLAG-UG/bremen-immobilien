const EDIT_MODE = false;

const sceneList = [
  { id: "stock1_entranceHall01", title: "Eingangshalle 1", panorama: "assets/panos/1Stock/01_Entrance_Hall.jpg" },
  { id: "stock1_entranceHall02", title: "Eingangshalle 2", panorama: "assets/panos/1Stock/02_Entrance_Hall.jpg" },
  { id: "stock1_entranceHallToHallway", title: "Eingangshalle → Diele", panorama: "assets/panos/1Stock/03_Entrance_Hall to Hallway_1.jpg" },

  { id: "stock1_kitchen", title: "Küche", panorama: "assets/panos/1Stock/Kitchen_2.jpg" },
  { id: "stock1_room02", title: "Zimmer 2", panorama: "assets/panos/1Stock/Room_2.jpg" },
  { id: "stock1_room04ToHall", title: "Zimmer 4 → Flur", panorama: "assets/panos/1Stock/Room_4 to Hall2_2.jpg" },

  { id: "stock1_bathroom", title: "Bad", panorama: "assets/panos/1Stock/Bathroom_2.jpg" },
  { id: "stock1_bathroomToRoom1", title: "Bad → Zimmer 1", panorama: "assets/panos/1Stock/Bathroom_3 to Room1_1.jpg" },

  { id: "stock1_entranceOutside", title: "Eingang außen", panorama: "assets/panos/1Stock/Entrance_1.jpg" },
  { id: "stock1_entranceToGarden", title: "Eingang → Garten", panorama: "assets/panos/1Stock/Entrance_3 to Garden_1.jpg" },

  { id: "stock1_garden03", title: "Garten 3", panorama: "assets/panos/1Stock/Garden_3.jpg" },
  { id: "stock1_garden07", title: "Garten 7", panorama: "assets/panos/1Stock/Garden_7.jpg" },
  { id: "stock1_garden10", title: "Garten 10", panorama: "assets/panos/1Stock/Garden_10.jpg" },
  { id: "stock1_garden16", title: "Garten 16", panorama: "assets/panos/1Stock/Garden_16.jpg" },
  { id: "stock1_garden21", title: "Garten 21", panorama: "assets/panos/1Stock/Garden_21.jpg" },
  { id: "stock1_garden23", title: "Garten 23", panorama: "assets/panos/1Stock/Garden_23.jpg" },
  { id: "stock1_garden25", title: "Garten 25", panorama: "assets/panos/1Stock/Garden_25.jpg" },
  { id: "stock1_garden27", title: "Garten 27", panorama: "assets/panos/1Stock/Garden_27.jpg" },

  { id: "stock2_bathroom", title: "Bad", panorama: "assets/panos/2Stock/Bathroom2_2.jpg" },
  { id: "stock2_bathroomToBalcony", title: "Bad → Balkon", panorama: "assets/panos/2Stock/Bathroom2_4 to Balcony_1.jpg" },
  { id: "stock2_room1_a", title: "Zimmer 1", panorama: "assets/panos/2Stock/Room1_2.jpg" },
  { id: "stock2_room1_b", title: "Zimmer 1 (2)", panorama: "assets/panos/2Stock/Room1_5.jpg" },
];

// Kuratierte Liste für die "Alle Räume"-Schnellauswahl (Besucher-Navigation).
// Noch unverändert 1:1 aus sceneList übernommen (22 Einträge) — bei Bedarf
// später auf eine kleinere Auswahl kürzen, sobald die Wege feststehen.
const roomMenu = sceneList.map(s => ({ id: s.id, label: s.title }));

const savedConfig = {
  "views": {},
  "hotspots": {
    "stock1_entranceHallToHallway": [
      {
        "id": "hs_1785412148975",
        "pitch": -10.21,
        "yaw": 105.79,
        "type": "scene",
        "text": "Garten 25",
        "sceneId": "stock1_garden25",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412156465",
        "pitch": -17.4,
        "yaw": 144.53,
        "type": "scene",
        "text": "Eingangshalle 1",
        "sceneId": "stock1_entranceHall01",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412162683",
        "pitch": -17.7,
        "yaw": -178.64,
        "type": "scene",
        "text": "Eingangshalle 2",
        "sceneId": "stock1_entranceHall02",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412240066",
        "pitch": -26.83,
        "yaw": -42.11,
        "type": "scene",
        "text": "Zimmer 4 → Flur",
        "sceneId": "stock1_room04ToHall",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_entranceHall01": [
      {
        "id": "hs_1785411903698",
        "pitch": -18.56,
        "yaw": -2.82,
        "type": "scene",
        "text": "Eingangshalle 2",
        "sceneId": "stock1_entranceHall02",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412055058",
        "pitch": -24.29,
        "yaw": 145.63,
        "type": "scene",
        "text": "Garten 25",
        "sceneId": "stock1_garden25",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412125921",
        "pitch": -15.85,
        "yaw": 42.86,
        "type": "scene",
        "text": "Eingangshalle → Diele",
        "sceneId": "stock1_entranceHallToHallway",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_garden25": [
      {
        "id": "hs_1785412072930",
        "pitch": -16.18,
        "yaw": -94.28,
        "type": "scene",
        "text": "Eingangshalle 1",
        "sceneId": "stock1_entranceHall01",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412968622",
        "pitch": -15.63,
        "yaw": -127.9,
        "type": "scene",
        "text": "Garten 23",
        "sceneId": "stock1_garden23",
        "targetYaw": -7.17,
        "targetPitch": -28.95,
        "targetHfov": 120
      },
      {
        "id": "hs_1785413030267",
        "pitch": -16.36,
        "yaw": 9.44,
        "type": "scene",
        "text": "Garten 27",
        "sceneId": "stock1_garden27",
        "targetYaw": -7.17,
        "targetPitch": -28.95,
        "targetHfov": 120
      }
    ],
    "stock1_entranceHall02": [
      {
        "id": "hs_1785412093294",
        "pitch": -22.28,
        "yaw": 73.25,
        "type": "scene",
        "text": "Eingangshalle → Diele",
        "sceneId": "stock1_entranceHallToHallway",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412102453",
        "pitch": -25.53,
        "yaw": 161.73,
        "type": "scene",
        "text": "Eingangshalle 1",
        "sceneId": "stock1_entranceHall01",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412114757",
        "pitch": -10.47,
        "yaw": 154,
        "type": "scene",
        "text": "Garten 25",
        "sceneId": "stock1_garden25",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_room04ToHall": [
      {
        "id": "hs_1785412262167",
        "pitch": -20.31,
        "yaw": -167.84,
        "type": "scene",
        "text": "Zimmer 2",
        "sceneId": "stock1_room02",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412290476",
        "pitch": -23.78,
        "yaw": -137.89,
        "type": "scene",
        "text": "Küche",
        "sceneId": "stock1_kitchen",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412306535",
        "pitch": -27.35,
        "yaw": -109.59,
        "type": "scene",
        "text": "Eingangshalle → Diele",
        "sceneId": "stock1_entranceHallToHallway",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412477249",
        "pitch": -29.69,
        "yaw": -59.6,
        "type": "scene",
        "text": "Bad",
        "sceneId": "stock1_bathroom",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412533512",
        "pitch": -22.6,
        "yaw": -20.34,
        "type": "scene",
        "text": "Bad → Zimmer 1",
        "sceneId": "stock1_bathroomToRoom1",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412727456",
        "pitch": -0.3,
        "yaw": -20.33,
        "type": "scene",
        "text": "Zimmer 1",
        "sceneId": "stock2_room1_a",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_room02": [
      {
        "id": "hs_1785412276643",
        "pitch": -24.64,
        "yaw": -165.38,
        "type": "scene",
        "text": "Zimmer 4 → Flur",
        "sceneId": "stock1_room04ToHall",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_bathroomToRoom1": [
      {
        "id": "hs_1785412550004",
        "pitch": -17.94,
        "yaw": -13.98,
        "type": "scene",
        "text": "Zimmer 2",
        "sceneId": "stock1_room02",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412557498",
        "pitch": -18.26,
        "yaw": 0.39,
        "type": "scene",
        "text": "Küche",
        "sceneId": "stock1_kitchen",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412568905",
        "pitch": -33.54,
        "yaw": -23.97,
        "type": "scene",
        "text": "Zimmer 4 → Flur",
        "sceneId": "stock1_room04ToHall",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412579720",
        "pitch": -44.33,
        "yaw": 29.83,
        "type": "scene",
        "text": "Bad",
        "sceneId": "stock1_bathroom",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412696664",
        "pitch": -17.52,
        "yaw": 141.36,
        "type": "scene",
        "text": "Zimmer 1",
        "sceneId": "stock2_room1_a",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_bathroom": [
      {
        "id": "hs_1785412600128",
        "pitch": -23.43,
        "yaw": -176.8,
        "type": "scene",
        "text": "Bad → Zimmer 1",
        "sceneId": "stock1_bathroomToRoom1",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_kitchen": [
      {
        "id": "hs_1785412614629",
        "pitch": -24.48,
        "yaw": -139.38,
        "type": "scene",
        "text": "Zimmer 4 → Flur",
        "sceneId": "stock1_room04ToHall",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock2_room1_a": [
      {
        "id": "hs_1785412715565",
        "pitch": -60.3,
        "yaw": 31.09,
        "type": "scene",
        "text": "Bad → Zimmer 1",
        "sceneId": "stock1_bathroomToRoom1",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412776869",
        "pitch": -11.61,
        "yaw": 122.58,
        "type": "scene",
        "text": "Zimmer 1 (2)",
        "sceneId": "stock2_room1_b",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock2_room1_b": [
      {
        "id": "hs_1785412785019",
        "pitch": -22.63,
        "yaw": -60.25,
        "type": "scene",
        "text": "Zimmer 1",
        "sceneId": "stock2_room1_a",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412821806",
        "pitch": -17.63,
        "yaw": -85.43,
        "type": "scene",
        "text": "Bad",
        "sceneId": "stock2_bathroom",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412855445",
        "pitch": -26.36,
        "yaw": 155.48,
        "type": "scene",
        "text": "Bad → Balkon",
        "sceneId": "stock2_bathroomToBalcony",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock2_bathroom": [
      {
        "id": "hs_1785412832615",
        "pitch": -18.17,
        "yaw": 168.48,
        "type": "scene",
        "text": "Zimmer 1 (2)",
        "sceneId": "stock2_room1_b",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock2_bathroomToBalcony": [
      {
        "id": "hs_1785412864036",
        "pitch": -13.21,
        "yaw": -51.04,
        "type": "scene",
        "text": "Bad",
        "sceneId": "stock2_bathroom",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412872112",
        "pitch": -27.9,
        "yaw": 1.72,
        "type": "scene",
        "text": "Zimmer 1 (2)",
        "sceneId": "stock2_room1_b",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1785412892595",
        "pitch": -13.79,
        "yaw": -32.68,
        "type": "scene",
        "text": "Zimmer 1",
        "sceneId": "stock2_room1_a",
        "targetYaw": -21.72,
        "targetPitch": -3.99,
        "targetHfov": 120
      }
    ],
    "stock1_garden23": [
      {
        "id": "hs_1785413004284",
        "pitch": -20.78,
        "yaw": -38.77,
        "type": "scene",
        "text": "Garten 25",
        "sceneId": "stock1_garden25",
        "targetYaw": -7.17,
        "targetPitch": -28.95,
        "targetHfov": 120
      },
      {
        "id": "hs_1785413067561",
        "pitch": -15.18,
        "yaw": 175.87,
        "type": "scene",
        "text": "Garten 21",
        "sceneId": "stock1_garden21",
        "targetYaw": -175.22,
        "targetPitch": -18.96,
        "targetHfov": 120
      }
    ],
    "stock1_garden27": [
      {
        "id": "hs_1785413038158",
        "pitch": -15.3,
        "yaw": -121.42,
        "type": "scene",
        "text": "Garten 25",
        "sceneId": "stock1_garden25",
        "targetYaw": -7.17,
        "targetPitch": -28.95,
        "targetHfov": 120
      }
    ],
    "stock1_garden21": [
      {
        "id": "hs_1785413109849",
        "pitch": -13.16,
        "yaw": 163,
        "type": "scene",
        "text": "Garten 16",
        "sceneId": "stock1_garden16",
        "targetYaw": -175.22,
        "targetPitch": -18.96,
        "targetHfov": 120
      },
      {
        "id": "hs_1785413135153",
        "pitch": -8.46,
        "yaw": -0.88,
        "type": "scene",
        "text": "Garten 23",
        "sceneId": "stock1_garden23",
        "targetYaw": -175.22,
        "targetPitch": -18.96,
        "targetHfov": 120
      }
    ],
    "stock1_garden16": [
      {
        "id": "hs_1785413378636",
        "pitch": -4.39,
        "yaw": -135.73,
        "type": "scene",
        "text": "Garten 3",
        "sceneId": "stock1_garden03",
        "targetYaw": -175.22,
        "targetPitch": -18.96,
        "targetHfov": 120
      },
      {
        "id": "hs_1785413653728",
        "pitch": -9.08,
        "yaw": 0.41,
        "type": "scene",
        "text": "Garten 21",
        "sceneId": "stock1_garden21",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      }
    ],
    "stock1_garden03": [
      {
        "id": "hs_1785413395255",
        "pitch": -5.04,
        "yaw": 85.94,
        "type": "scene",
        "text": "Garten 16",
        "sceneId": "stock1_garden16",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      },
      {
        "id": "hs_1785413426541",
        "pitch": -8.96,
        "yaw": 177.08,
        "type": "scene",
        "text": "Eingang → Garten",
        "sceneId": "stock1_entranceToGarden",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      },
      {
        "id": "hs_1785413533184",
        "pitch": -8.55,
        "yaw": -16.89,
        "type": "scene",
        "text": "Garten 7",
        "sceneId": "stock1_garden07",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      }
    ],
    "stock1_entranceToGarden": [
      {
        "id": "hs_1785413437116",
        "pitch": -2.54,
        "yaw": 57.55,
        "type": "scene",
        "text": "Garten 16",
        "sceneId": "stock1_garden16",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      },
      {
        "id": "hs_1785413468160",
        "pitch": -11.18,
        "yaw": 164.88,
        "type": "scene",
        "text": "Eingang außen",
        "sceneId": "stock1_entranceOutside",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      },
      {
        "id": "hs_1785413496668",
        "pitch": -25.87,
        "yaw": -3.22,
        "type": "scene",
        "text": "Garten 3",
        "sceneId": "stock1_garden03",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      },
      {
        "id": "hs_1785413512802",
        "pitch": -3.83,
        "yaw": -25.72,
        "type": "scene",
        "text": "Garten 7",
        "sceneId": "stock1_garden07",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      }
    ],
    "stock1_entranceOutside": [
      {
        "id": "hs_1785413478718",
        "pitch": -12.47,
        "yaw": 12.04,
        "type": "scene",
        "text": "Eingang → Garten",
        "sceneId": "stock1_entranceToGarden",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      }
    ],
    "stock1_garden07": [
      {
        "id": "hs_1785413521336",
        "pitch": -12.52,
        "yaw": 154.72,
        "type": "scene",
        "text": "Garten 3",
        "sceneId": "stock1_garden03",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      },
      {
        "id": "hs_1785413545927",
        "pitch": 6.8,
        "yaw": 5.58,
        "type": "scene",
        "text": "Garten 10",
        "sceneId": "stock1_garden10",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      }
    ],
    "stock1_garden10": [
      {
        "id": "hs_1785413553262",
        "pitch": -24.01,
        "yaw": 155.91,
        "type": "scene",
        "text": "Garten 7",
        "sceneId": "stock1_garden07",
        "targetYaw": 46.33,
        "targetPitch": -7.75,
        "targetHfov": 103.59
      }
    ]
  }
};

const tourScenes = buildScenes();

const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "stock1_entranceHall01",
    sceneFadeDuration: 0,
    autoLoad: true,
    showControls: true,
    compass: false
  },
  scenes: tourScenes
});

let navigationHistory = [];

document.getElementById("tour-title").innerText = tourScenes.stock1_entranceHall01.title;

viewer.on("scenechange", function (sceneId) {
  document.getElementById("tour-title").innerText = tourScenes[sceneId].title;
  updateSimplePanelLabels();
  updateRoomNavActive(sceneId);
  updateBackButtonState();
  updateHallwayShortcutVisibility(sceneId);
});

// Pannellum feuert "scenechange" nicht zuverlässig für die allererste Szene
// beim initialen Laden — "load" fängt diesen Fall zusätzlich ab.
viewer.on("load", function () {
  updateHallwayShortcutVisibility(viewer.getScene());
});

// Scenen der großen Eingangshalle, aus denen die Verbindungstür zur Diele
// (entranceHallToHallway01) nicht im Bild sichtbar ist — dafür gibt es den
// permanenten Kurzweg-Button statt eines (dort unsichtbaren) Foto-Pfeils.
const ENTRANCE_HALL_SCENE_IDS = new Set(
  sceneList.map(s => s.id).filter(id => /^stock1_entranceHall\d/.test(id))
);

function updateHallwayShortcutVisibility(sceneId) {
  const btn = document.getElementById("tour-hallway-shortcut");
  if (btn) btn.style.display = ENTRANCE_HALL_SCENE_IDS.has(sceneId) ? "flex" : "none";
}

// ── Besucher-Navigation: "Zurück" + "Alle Räume" (unabhängig von EDIT_MODE) ──
const scenesById = Object.fromEntries(sceneList.map(s => [s.id, s]));

function createTourNavControls() {
  const controls = document.createElement("div");
  controls.id = "tour-nav-controls";

  const backBtn = document.createElement("button");
  backBtn.id = "tour-back-btn";
  backBtn.disabled = true;
  backBtn.innerHTML = `
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M12.5 4.5L6 10l6.5 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Zurück
  `;
  backBtn.addEventListener("click", goPreviousHotspot);
  controls.appendChild(backBtn);

  const hallwayBtn = document.createElement("button");
  hallwayBtn.id = "tour-hallway-shortcut";
  hallwayBtn.innerHTML = `
    Weiter zur Diele
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7.5 4.5L14 10l-6.5 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  hallwayBtn.addEventListener("click", function () {
    loadSceneSafe("stock1_entranceHallToHallway", null, null, null, true);
  });
  controls.appendChild(hallwayBtn);
  updateHallwayShortcutVisibility(viewer.getScene());

  document.body.appendChild(controls);
  createRoomNavPanel(controls);
}

function updateBackButtonState() {
  const backBtn = document.getElementById("tour-back-btn");
  if (backBtn) backBtn.disabled = navigationHistory.length === 0;
}

function createRoomNavPanel(controls) {
  const wrap = document.createElement("div");
  wrap.id = "room-nav";
  wrap.innerHTML = `
    <button id="room-nav-toggle" aria-expanded="false">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/>
        <rect x="11.5" y="2.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/>
        <rect x="2.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/>
        <rect x="11.5" y="11.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/>
      </svg>
      Alle Räume
    </button>
    <div id="room-nav-panel">
      <div id="room-nav-list"></div>
    </div>
  `;
  controls.appendChild(wrap);

  const list = wrap.querySelector("#room-nav-list");
  roomMenu.forEach(room => {
    const scene = scenesById[room.id];

    const btn = document.createElement("button");
    btn.className = "room-nav-item";
    btn.dataset.sceneId = room.id;
    btn.innerHTML = `
      <span class="room-nav-thumb">
        <img data-src="${scene.panorama}" alt="" />
        <svg class="room-nav-check" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7.5" fill="#fff"/>
          <path d="M4.8 8.2l2.1 2.1 4.3-4.5" stroke="#000" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="room-nav-label">${room.label}</span>
    `;
    btn.addEventListener("click", function () {
      loadSceneSafe(room.id, null, null, null, true);
      wrap.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
    list.appendChild(btn);
  });

  const toggle = wrap.querySelector("#room-nav-toggle");
  let thumbsLoaded = false;
  toggle.addEventListener("click", function () {
    const isOpen = wrap.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen && !thumbsLoaded) {
      // Vorschaubilder erst laden, sobald das Menü tatsächlich geöffnet wird
      list.querySelectorAll("img[data-src]").forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
      thumbsLoaded = true;
    }
  });

  document.addEventListener("click", function (e) {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  updateRoomNavActive(viewer.getScene());
}

function updateRoomNavActive(sceneId) {
  document.querySelectorAll(".room-nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sceneId === sceneId);
  });
}

createTourNavControls();

function loadSceneSafe(sceneId, pitch = null, yaw = null, hfov = null, saveHistory = false) {
  const currentScene = viewer.getScene();

  if (saveHistory && currentScene && currentScene !== sceneId) {
    navigationHistory.push({
      sceneId: currentScene,
      yaw: Number(viewer.getYaw().toFixed(2)),
      pitch: Number(viewer.getPitch().toFixed(2)),
      hfov: Number(viewer.getHfov().toFixed(2))
    });
  }

  viewer.loadScene(
    sceneId,
    pitch ?? undefined,
    yaw ?? undefined,
    hfov ?? undefined
  );
}

function goPreviousHotspot() {
  if (navigationHistory.length === 0) {
    return;
  }

  const previous = navigationHistory.pop();

  loadSceneSafe(
    previous.sceneId,
    previous.pitch,
    previous.yaw,
    previous.hfov,
    false
  );
}

function buildScenes() {
  const scenes = {};

  sceneList.forEach(scene => {
    const view = getSceneDefaultView(scene.id);

    scenes[scene.id] = {
      title: scene.title,
      type: "equirectangular",
      panorama: scene.panorama,
      yaw: view.yaw,
      pitch: view.pitch,
      hfov: view.hfov,
      hotSpots: (savedConfig.hotspots[scene.id] || []).map(hs =>
        createHotspotForViewer(hs)
      )
    };
  });

  return scenes;
}

function createHotspotForViewer(hs) {
  return {
    ...hs,
    type: "info",
    clickHandlerFunc: function () {
      loadSceneSafe(
        hs.sceneId,
        hs.targetPitch ?? 0,
        hs.targetYaw ?? 0,
        hs.targetHfov ?? 120,
        true
      );
    }
  };
}

function getSceneDefaultView(sceneId) {
  return savedConfig.views[sceneId] || {
    yaw: 0,
    pitch: 0,
    hfov: 120
  };
}

const editorPanelStyle = document.createElement("style");
editorPanelStyle.innerHTML = `
  #editor-panel {
    position: fixed !important;
    top: 110px !important;
    right: 20px !important;
    width: 390px !important;
    max-width: calc(100vw - 40px) !important;
    max-height: calc(100vh - 130px) !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    z-index: 999999 !important;
    box-sizing: border-box !important;
    padding: 16px !important;
    border-radius: 10px !important;
    background: rgba(0, 0, 0, 0.82) !important;
    color: #fff !important;
    font-family: Arial, sans-serif !important;
  }

  #editor-panel * {
    box-sizing: border-box !important;
  }

  #editor-panel h3 {
    margin: 0 0 12px 0 !important;
    font-size: 18px !important;
  }

  #editor-panel label {
    display: block !important;
    margin-top: 10px !important;
    margin-bottom: 5px !important;
  }

  #editor-panel select,
  #editor-panel button,
  #editor-panel textarea {
    width: 100% !important;
    margin: 4px 0 !important;
    padding: 8px !important;
    border-radius: 5px !important;
    border: 0 !important;
    font-size: 14px !important;
  }

  #editor-panel button {
    cursor: pointer !important;
    font-weight: bold !important;
  }

  #editor-panel textarea {
    height: 90px !important;
    resize: vertical !important;
  }

  #editor-panel hr {
    border: 0 !important;
    border-top: 1px solid rgba(255,255,255,0.45) !important;
    margin: 10px 0 !important;
  }

  #editor-panel .editor-info,
  #editor-panel .step-box,
  #editor-panel .editor-warning {
    background: rgba(255,255,255,0.08) !important;
    padding: 8px !important;
    border-radius: 6px !important;
    margin: 8px 0 !important;
  }

  #editor-panel .row-buttons {
    display: flex !important;
    gap: 8px !important;
  }

  #editor-panel .row-buttons button {
    flex: 1 !important;
  }
`;
document.head.appendChild(editorPanelStyle);

if (EDIT_MODE) {
  startSimpleEditor();
}

let selectedHotspotPosition = null;
let selectedSourceScene = null;
let selectedTargetView = {
  yaw: 0,
  pitch: 0,
  hfov: 120
};
let editorHistory = [];

function startSimpleEditor() {
  createSimpleEditorPanel();
  updateSimplePanelLabels();

  viewer.on("scenechange", function () {
    updateSimplePanelLabels();
  });

  viewer.on("mousedown", function (event) {
    if (event.target.closest("#editor-panel")) return;

    const coords = viewer.mouseEventToCoords(event);
    if (!coords) return;

    selectedSourceScene = viewer.getScene();
    selectedHotspotPosition = {
      pitch: Number(coords[0].toFixed(2)),
      yaw: Number(coords[1].toFixed(2))
    };

    document.getElementById("hotspot-status").innerHTML =
      "Selected: <b>" + getSceneTitle(selectedSourceScene) + "</b><br>" +
      "Pitch: " + selectedHotspotPosition.pitch + " / Yaw: " + selectedHotspotPosition.yaw;
  });
}

function createSimpleEditorPanel() {
  const panel = document.createElement("div");
  panel.id = "editor-panel";

  panel.innerHTML = `
  <h3>Scene Control Panel</h3>

  <div class="editor-info">
    <b>Current Scene:</b><br>
    <span id="current-scene-label">-</span>
  </div>

  <label>Go To Scene</label>
  <select id="scene-select"></select>

  <div class="row-buttons">
    <button id="prev-scene">← Previous Scene</button>
    <button id="next-scene">Next Scene →</button>
  </div>

  <button id="previous-hotspot">Go To Previous Hotspot</button>

  <hr>

  <label>Hotspot List</label>
  <select id="hotspot-list-select"></select>
  <button id="go-hotspot">Go To Selected Hotspot</button>

  <hr>

  <div class="step-box">
    <b>1.</b> Click where you want to place the hotspot
    <div id="hotspot-status">Nothing selected yet</div>
  </div>

  <div class="step-box">
    <b>2.</b> Select Target Scene
    <select id="target-scene-select"></select>
    <button id="go-target-scene">Go To Target Scene</button>
  </div>

  <div class="step-box">
    <b>3.</b> Rotate the camera to the desired angle<br>
    <button id="save-angle">Save Current View</button>
    <div id="angle-status">
      Yaw: 0<br>
      Pitch: 0<br>
      Zoom: 120
    </div>
  </div>

  <button id="add-hotspot">Add Hotspot</button>
  <button id="undo-last-change">Delete Last Hotspot</button>
  <button id="export-config">Copy Config</button>

  <textarea id="export-output" readonly></textarea>
`;

  document.body.appendChild(panel);

  const sceneSelect = document.getElementById("scene-select");
  const targetSelect = document.getElementById("target-scene-select");

  sceneList.forEach(scene => {
    const option1 = document.createElement("option");
    option1.value = scene.id;
    option1.textContent = scene.title;
    sceneSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = scene.id;
    option2.textContent = scene.title;
    targetSelect.appendChild(option2);
  });

  sceneSelect.value = viewer.getScene();

  sceneSelect.addEventListener("change", function () {
    loadSceneSafe(this.value);
  });

  document.getElementById("prev-scene").addEventListener("click", function () {
    goSceneByStep(-1);
  });

  document.getElementById("next-scene").addEventListener("click", function () {
    goSceneByStep(1);
  });

  document.getElementById("previous-hotspot").addEventListener("click", goPreviousHotspot);

  document.getElementById("go-target-scene").addEventListener("click", function () {
    loadSceneSafe(targetSelect.value);
  });

  document.getElementById("go-hotspot").addEventListener("click", goToSelectedHotspot);

  document.getElementById("save-angle").addEventListener("click", saveCurrentAngle);
  document.getElementById("add-hotspot").addEventListener("click", addSimpleHotspot);
  document.getElementById("undo-last-change").addEventListener("click", undoLastChange);
  document.getElementById("export-config").addEventListener("click", exportConfig);

  updateHotspotList();
}

function goSceneByStep(direction) {
  const currentSceneId = viewer.getScene();
  const currentIndex = sceneList.findIndex(scene => scene.id === currentSceneId);

  if (currentIndex === -1) return;

  let nextIndex = currentIndex + direction;

  if (nextIndex < 0) nextIndex = sceneList.length - 1;
  if (nextIndex >= sceneList.length) nextIndex = 0;

  loadSceneSafe(sceneList[nextIndex].id);
}

function updateHotspotList() {
  const select = document.getElementById("hotspot-list-select");
  if (!select) return;

  select.innerHTML = "";

  let count = 0;

  Object.keys(savedConfig.hotspots).forEach(sourceSceneId => {
    const hotspots = savedConfig.hotspots[sourceSceneId] || [];

    hotspots.forEach(hs => {
      count++;

      const option = document.createElement("option");
      option.value = sourceSceneId + "|" + hs.id;
      option.textContent =
        count + ". " +
        getSceneTitle(sourceSceneId) +
        " → " +
        getSceneTitle(hs.sceneId);

      select.appendChild(option);
    });
  });

  if (count === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Hotspot yok";
    select.appendChild(option);
  }
}

function goToSelectedHotspot() {
  const select = document.getElementById("hotspot-list-select");
  if (!select || !select.value) return;

  const parts = select.value.split("|");
  const sourceSceneId = parts[0];
  const hotspotId = parts[1];

  const hotspot = (savedConfig.hotspots[sourceSceneId] || []).find(
    hs => hs.id === hotspotId
  );

  if (!hotspot) {
    alert("Hotspot not found.");
    return;
  }

  loadSceneSafe(
    sourceSceneId,
    hotspot.pitch,
    hotspot.yaw,
    90,
    false
  );
}

function saveCurrentAngle() {
  selectedTargetView = {
    yaw: Number(viewer.getYaw().toFixed(2)),
    pitch: Number(viewer.getPitch().toFixed(2)),
    hfov: Number(viewer.getHfov().toFixed(2))
  };

  document.getElementById("angle-status").innerHTML =
    "Yaw: " + selectedTargetView.yaw + "<br>" +
    "Pitch: " + selectedTargetView.pitch + "<br>" +
    "Zoom: " + selectedTargetView.hfov;

  alert("View saved.");
}

function addSimpleHotspot() {
  if (!selectedHotspotPosition || !selectedSourceScene) {
    alert("First click where you want to place the hotspot.");
    return;
  }

  const targetSceneId = document.getElementById("target-scene-select").value;
  const sourceSceneId = selectedSourceScene;

  const hotspot = {
    id: "hs_" + Date.now(),
    pitch: selectedHotspotPosition.pitch,
    yaw: selectedHotspotPosition.yaw,
    type: "scene",
    text: getSceneTitle(targetSceneId),
    sceneId: targetSceneId,
    targetYaw: selectedTargetView.yaw,
    targetPitch: selectedTargetView.pitch,
    targetHfov: selectedTargetView.hfov
  };

  if (!savedConfig.hotspots[sourceSceneId]) {
    savedConfig.hotspots[sourceSceneId] = [];
  }

  savedConfig.hotspots[sourceSceneId].push(hotspot);
  viewer.addHotSpot(createHotspotForViewer(hotspot), sourceSceneId);

  editorHistory.push({
    action: "addHotspot",
    sceneId: sourceSceneId,
    hotspotId: hotspot.id
  });

  updateHotspotList();

  alert(getSceneTitle(sourceSceneId) + " sahnesine hotspot eklendi.");
}

function undoLastChange() {
  if (editorHistory.length === 0) {
    alert("Nothing to undo.");
    return;
  }

  const lastAction = editorHistory.pop();

  if (lastAction.action === "addHotspot") {
    const sceneId = lastAction.sceneId;
    const hotspotId = lastAction.hotspotId;

    savedConfig.hotspots[sceneId] = savedConfig.hotspots[sceneId].filter(
      hs => hs.id !== hotspotId
    );

    viewer.removeHotSpot(hotspotId, sceneId);
    updateHotspotList();

    alert("Last hotspot removed.");
  }
}

function exportConfig() {
  const output = document.getElementById("export-output");

  const configText =
    "const savedConfig = " +
    JSON.stringify(savedConfig, null, 2) +
    ";";

  output.value = configText;
  output.select();
  navigator.clipboard.writeText(configText);

  alert("Config copied.");
}

function updateSimplePanelLabels() {
  const currentLabel = document.getElementById("current-scene-label");
  const sceneSelect = document.getElementById("scene-select");

  if (currentLabel) {
    currentLabel.innerText = getSceneTitle(viewer.getScene());
  }

  if (sceneSelect) {
    sceneSelect.value = viewer.getScene();
  }
}

function getSceneTitle(sceneId) {
  const scene = sceneList.find(s => s.id === sceneId);
  return scene ? scene.title : sceneId;
}