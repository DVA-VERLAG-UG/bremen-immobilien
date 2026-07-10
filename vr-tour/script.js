const EDIT_MODE = false;

const sceneList = [
  { id: "entranceHall01", title: "Entrance Hall 1", panorama: "assets/panos/01_Entrance_Hall.jpg" },
  { id: "entranceHall02", title: "Entrance Hall 2", panorama: "assets/panos/02_Entrance_Hall.jpg" },
  { id: "entranceHall03", title: "Entrance Hall 3", panorama: "assets/panos/03_Entrance_Hall.jpg" },
  { id: "entranceHall04", title: "Entrance Hall 4", panorama: "assets/panos/04_Entrance_Hall.jpg" },
  { id: "entranceHall05", title: "Entrance Hall 5", panorama: "assets/panos/05_Entrance_Hall.jpg" },
  { id: "entranceHall06", title: "Entrance Hall 6", panorama: "assets/panos/06_Entrance_Hall.jpg" },
  { id: "entranceHall07", title: "Entrance Hall 7", panorama: "assets/panos/07_Entrance_Hall.jpg" },
  { id: "entranceHall08", title: "Entrance Hall 8", panorama: "assets/panos/08_Entrance_Hall.jpg" },
  { id: "entranceHall09", title: "Entrance Hall 9", panorama: "assets/panos/09_Entrance_Hall.jpg" },
  { id: "entranceHall10", title: "Entrance Hall 10", panorama: "assets/panos/010_Entrance_Hall.jpg" },
  { id: "entranceHallToHallway01", title: "Entrance Hall to Hallway 1", panorama: "assets/panos/011_Entrance_Hall to Hallway_1.jpg" },

  { id: "hallwayToKitchen01", title: "Hallway to Kitchen 1", panorama: "assets/panos/Hallway_1 to Kitchen_1.jpg" },
  { id: "kitchen02", title: "Kitchen 2", panorama: "assets/panos/Kitchen_2.jpg" },
  { id: "kitchen03", title: "Kitchen 3", panorama: "assets/panos/Kitchen_3.jpg" },
  { id: "kitchenToHall02", title: "Kitchen to Hall 2", panorama: "assets/panos/Kitchen_3 to Hall2_1.jpg" },

  { id: "hall02ToRoom01", title: "Hall 2 to Room 1", panorama: "assets/panos/Hall_2_1 to Room_1.jpg" },
  { id: "room02", title: "Room 2", panorama: "assets/panos/Room_2.jpg" },
  { id: "room03", title: "Room 3", panorama: "assets/panos/Room_3.jpg" },
  { id: "room04", title: "Room 4", panorama: "assets/panos/Room_4.jpg" },
  { id: "room04ToHall02", title: "Room 4 to Hall 2", panorama: "assets/panos/Room_4 to Hall2_2.jpg" },
  { id: "hall02_3", title: "Hall 2-3", panorama: "assets/panos/Hall2_3.jpg" },
  { id: "hall02ToBathroom01", title: "Hall 2 to Bathroom 1", panorama: "assets/panos/Hall2_3 to Bathroom_1.jpg" },

  { id: "bathroom02", title: "Bathroom 2", panorama: "assets/panos/Bathroom_2.jpg" },
  { id: "bathroom03", title: "Bathroom 3", panorama: "assets/panos/Bathroom_3.jpg" },
  { id: "bathroom03ToRoom01", title: "Bathroom 3 to Room 1", panorama: "assets/panos/Bathroom_3 to Room1_1.jpg" },

  { id: "room01_2", title: "Room 1-2", panorama: "assets/panos/Room1_2.jpg" },
  { id: "room01_3", title: "Room 1-3", panorama: "assets/panos/Room1_3.jpg" },
  { id: "room01_4", title: "Room 1-4", panorama: "assets/panos/Room1_4.jpg" },
  { id: "room01_5", title: "Room 1-5", panorama: "assets/panos/Room1_5.jpg" },
  { id: "room01_6", title: "Room 1-6", panorama: "assets/panos/Room1_6.jpg" },
  { id: "room01_7", title: "Room 1-7", panorama: "assets/panos/Room1_7.jpg" },
  { id: "room01ToBathroom02", title: "Room 1 to Bathroom 2", panorama: "assets/panos/Room1_7 to Bathroom2_1.jpg" },

  { id: "bathroom02_2", title: "Bathroom 2-2", panorama: "assets/panos/Bathroom2_2.jpg" },
  { id: "bathroom02_3", title: "Bathroom 2-3", panorama: "assets/panos/Bathroom2_3.jpg" },
  { id: "bathroom02_4", title: "Bathroom 2-4", panorama: "assets/panos/Bathroom2_4.jpg" },
  { id: "bathroom02ToBalcony01", title: "Bathroom 2 to Balcony 1", panorama: "assets/panos/Bathroom2_4 to Balcony_1.jpg" },

  { id: "balcony02", title: "Balcony 2", panorama: "assets/panos/Balcony_2.jpg" },
  { id: "balcony03", title: "Balcony 3", panorama: "assets/panos/Balcony_3.jpg" },

  { id: "entrance01", title: "Entrance 1", panorama: "assets/panos/Entrance_1.jpg" },
  { id: "entrance02", title: "Entrance 2", panorama: "assets/panos/Entrance_2.jpg" },
  { id: "entrance03", title: "Entrance 3", panorama: "assets/panos/Entrance_3.jpg" },
  { id: "entranceToGarden01", title: "Entrance to Garden 1", panorama: "assets/panos/Entrance_3 to Garden_1.jpg" },

  { id: "garden02", title: "Garden 2", panorama: "assets/panos/Garden_2.jpg" },
  { id: "garden03", title: "Garden 3", panorama: "assets/panos/Garden_3.jpg" },
  { id: "garden04", title: "Garden 4", panorama: "assets/panos/Garden_4.jpg" },
  { id: "garden05", title: "Garden 5", panorama: "assets/panos/Garden_5.jpg" },
  { id: "garden06", title: "Garden 6", panorama: "assets/panos/Garden_6.jpg" },
  { id: "garden07", title: "Garden 7", panorama: "assets/panos/Garden_7.jpg" },
  { id: "garden08", title: "Garden 8", panorama: "assets/panos/Garden_8.jpg" },
  { id: "garden09", title: "Garden 9", panorama: "assets/panos/Garden_9.jpg" },
  { id: "garden10", title: "Garden 10", panorama: "assets/panos/Garden_10.jpg" },
  { id: "garden11", title: "Garden 11", panorama: "assets/panos/Garden_11.jpg" },
  { id: "garden12", title: "Garden 12", panorama: "assets/panos/Garden_12.jpg" },
  { id: "garden13", title: "Garden 13", panorama: "assets/panos/Garden_13.jpg" },
  { id: "garden14", title: "Garden 14", panorama: "assets/panos/Garden_14.jpg" },
  { id: "garden15", title: "Garden 15", panorama: "assets/panos/Garden_15.jpg" },
  { id: "garden16", title: "Garden 16", panorama: "assets/panos/Garden_16.jpg" },
  { id: "garden17", title: "Garden 17", panorama: "assets/panos/Garden_17.jpg" },
  { id: "garden18", title: "Garden 18", panorama: "assets/panos/Garden_18.jpg" },
  { id: "garden19", title: "Garden 19", panorama: "assets/panos/Garden_19.jpg" },
  { id: "garden20", title: "Garden 20", panorama: "assets/panos/Garden_20.jpg" },
  { id: "garden21", title: "Garden 21", panorama: "assets/panos/Garden_21.jpg" },
  { id: "garden22", title: "Garden 22", panorama: "assets/panos/Garden_22.jpg" },
  { id: "garden23", title: "Garden 23", panorama: "assets/panos/Garden_23.jpg" },
  { id: "garden24", title: "Garden 24", panorama: "assets/panos/Garden_24.jpg" },
  { id: "garden25", title: "Garden 25", panorama: "assets/panos/Garden_25.jpg" },
  { id: "garden26", title: "Garden 26", panorama: "assets/panos/Garden_26.jpg" },
  { id: "garden27", title: "Garden 27", panorama: "assets/panos/Garden_27.jpg" },
  { id: "garden28", title: "Garden 28", panorama: "assets/panos/Garden_28.jpg" }
];

const savedConfig = {
  "views": {},
  "hotspots": {
    "entranceHall01": [
      {
        "id": "hs_1780406083245",
        "pitch": -33.08,
        "yaw": -11.89,
        "type": "scene",
        "text": "Entrance Hall 2",
        "sceneId": "entranceHall02",
        "targetYaw": 0,
        "targetPitch": 0,
        "targetHfov": 120
      },
      {
        "id": "hs_1780688579010",
        "pitch": -28.16,
        "yaw": 86.28,
        "type": "scene",
        "text": "Entrance Hall 9",
        "sceneId": "entranceHall09",
        "targetYaw": -106.32,
        "targetPitch": -2.97,
        "targetHfov": 120
      },
      {
        "id": "hs_1780964120800",
        "pitch": -29.78,
        "yaw": -175.36,
        "type": "scene",
        "text": "Garden 25",
        "sceneId": "garden25",
        "targetYaw": -129.4,
        "targetPitch": -5.1,
        "targetHfov": 120
      },
      {
        "id": "hs_1780964131696",
        "pitch": -17.54,
        "yaw": 108.34,
        "type": "scene",
        "text": "Garden 27",
        "sceneId": "garden27",
        "targetYaw": -129.4,
        "targetPitch": -5.1,
        "targetHfov": 120
      }
    ],
    "entranceHall02": [
      {
        "id": "hs_1780406105701",
        "pitch": -32.89,
        "yaw": -177.84,
        "type": "scene",
        "text": "Entrance Hall 1",
        "sceneId": "entranceHall01",
        "targetYaw": 172.59,
        "targetPitch": -6.36,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406148293",
        "pitch": -34.82,
        "yaw": -7.74,
        "type": "scene",
        "text": "Entrance Hall 3",
        "sceneId": "entranceHall03",
        "targetYaw": -19.79,
        "targetPitch": -3.61,
        "targetHfov": 120
      }
    ],
    "entranceHall03": [
      {
        "id": "hs_1780406171757",
        "pitch": -44.32,
        "yaw": 174.37,
        "type": "scene",
        "text": "Entrance Hall 2",
        "sceneId": "entranceHall02",
        "targetYaw": 175.84,
        "targetPitch": -0.24,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406244957",
        "pitch": -35.37,
        "yaw": -32.09,
        "type": "scene",
        "text": "Entrance Hall 4",
        "sceneId": "entranceHall04",
        "targetYaw": -17,
        "targetPitch": -22.33,
        "targetHfov": 120
      }
    ],
    "entranceHall04": [
      {
        "id": "hs_1780406269333",
        "pitch": -37.46,
        "yaw": 149.06,
        "type": "scene",
        "text": "Entrance Hall 3",
        "sceneId": "entranceHall03",
        "targetYaw": 162.55,
        "targetPitch": -6.37,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406333534",
        "pitch": -37.18,
        "yaw": 41.49,
        "type": "scene",
        "text": "Entrance Hall 5",
        "sceneId": "entranceHall05",
        "targetYaw": -15.04,
        "targetPitch": -3.04,
        "targetHfov": 120
      }
    ],
    "entranceHall05": [
      {
        "id": "hs_1780406352853",
        "pitch": -39.42,
        "yaw": 164.98,
        "type": "scene",
        "text": "Entrance Hall 4",
        "sceneId": "entranceHall04",
        "targetYaw": -37.26,
        "targetPitch": -9.99,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406490269",
        "pitch": -46.85,
        "yaw": 60.31,
        "type": "scene",
        "text": "Entrance Hall 6",
        "sceneId": "entranceHall06",
        "targetYaw": 2.35,
        "targetPitch": -3.48,
        "targetHfov": 120
      }
    ],
    "entranceHall06": [
      {
        "id": "hs_1780406518253",
        "pitch": -45.35,
        "yaw": 168.92,
        "type": "scene",
        "text": "Entrance Hall 5",
        "sceneId": "entranceHall05",
        "targetYaw": -106.27,
        "targetPitch": -6.35,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406558805",
        "pitch": -42.51,
        "yaw": -34.14,
        "type": "scene",
        "text": "Entrance Hall 7",
        "sceneId": "entranceHall07",
        "targetYaw": 33.86,
        "targetPitch": -0.35,
        "targetHfov": 120
      }
    ],
    "entranceHall07": [
      {
        "id": "hs_1780406576669",
        "pitch": -40.22,
        "yaw": -163.41,
        "type": "scene",
        "text": "Entrance Hall 6",
        "sceneId": "entranceHall06",
        "targetYaw": 174.15,
        "targetPitch": -10.11,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406638133",
        "pitch": -39.45,
        "yaw": 3.06,
        "type": "scene",
        "text": "Entrance Hall 8",
        "sceneId": "entranceHall08",
        "targetYaw": 34.13,
        "targetPitch": -5.83,
        "targetHfov": 120
      },
      {
        "id": "hs_1780707184298",
        "pitch": -33.77,
        "yaw": -79.71,
        "type": "scene",
        "text": "Entrance Hall 10",
        "sceneId": "entranceHall10",
        "targetYaw": 7.73,
        "targetPitch": -6.49,
        "targetHfov": 120
      }
    ],
    "entranceHall08": [
      {
        "id": "hs_1780406664380",
        "pitch": -47.42,
        "yaw": 171.33,
        "type": "scene",
        "text": "Entrance Hall 7",
        "sceneId": "entranceHall07",
        "targetYaw": -172.64,
        "targetPitch": -10.41,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406702085",
        "pitch": -41.73,
        "yaw": 42.77,
        "type": "scene",
        "text": "Entrance Hall 9",
        "sceneId": "entranceHall09",
        "targetYaw": 0.2,
        "targetPitch": -3.82,
        "targetHfov": 120
      },
      {
        "id": "hs_1780406790508",
        "pitch": -34.27,
        "yaw": -141.33,
        "type": "scene",
        "text": "Entrance Hall 10",
        "sceneId": "entranceHall10",
        "targetYaw": -15.93,
        "targetPitch": -9.52,
        "targetHfov": 120
      }
    ],
    "entranceHall09": [
      {
        "id": "hs_1780406719717",
        "pitch": -47.79,
        "yaw": -146.7,
        "type": "scene",
        "text": "Entrance Hall 8",
        "sceneId": "entranceHall08",
        "targetYaw": -110.3,
        "targetPitch": -6.38,
        "targetHfov": 120
      },
      {
        "id": "hs_1780688454224",
        "pitch": -33.91,
        "yaw": 71.5,
        "type": "scene",
        "text": "Entrance Hall 1",
        "sceneId": "entranceHall01",
        "targetYaw": -0.88,
        "targetPitch": -0.66,
        "targetHfov": 120
      }
    ],
    "entranceHall10": [
      {
        "id": "hs_1780406821012",
        "pitch": -40.08,
        "yaw": 118.67,
        "type": "scene",
        "text": "Entrance Hall 9",
        "sceneId": "entranceHall09",
        "targetYaw": 0,
        "targetPitch": 0,
        "targetHfov": 120
      },
      {
        "id": "hs_1780695656675",
        "pitch": -59.64,
        "yaw": 0.46,
        "type": "scene",
        "text": "Entrance Hall to Hallway 1",
        "sceneId": "entranceHallToHallway01",
        "targetYaw": -12.08,
        "targetPitch": -8.87,
        "targetHfov": 120
      }
    ],
    "entranceHallToHallway01": [
      {
        "id": "hs_1780695719504",
        "pitch": -51.84,
        "yaw": -6.36,
        "type": "scene",
        "text": "Hallway to Kitchen 1",
        "sceneId": "hallwayToKitchen01",
        "targetYaw": -3.1,
        "targetPitch": -6.49,
        "targetHfov": 120
      }
    ],
    "hallwayToKitchen01": [
      {
        "id": "hs_1780695751443",
        "pitch": -33.77,
        "yaw": 2.46,
        "type": "scene",
        "text": "Kitchen 2",
        "sceneId": "kitchen02",
        "targetYaw": 37.24,
        "targetPitch": 0.76,
        "targetHfov": 120
      },
      {
        "id": "hs_1780696050583",
        "pitch": -50.83,
        "yaw": -153.54,
        "type": "scene",
        "text": "Kitchen to Hall 2",
        "sceneId": "kitchenToHall02",
        "targetYaw": -157.26,
        "targetPitch": -5.42,
        "targetHfov": 120
      }
    ],
    "kitchen02": [
      {
        "id": "hs_1780695797468",
        "pitch": -40.34,
        "yaw": 29.23,
        "type": "scene",
        "text": "Kitchen 3",
        "sceneId": "kitchen03",
        "targetYaw": 66.76,
        "targetPitch": 0.55,
        "targetHfov": 120
      },
      {
        "id": "hs_1780695977572",
        "pitch": -42.21,
        "yaw": -151.45,
        "type": "scene",
        "text": "Hallway to Kitchen 1",
        "sceneId": "hallwayToKitchen01",
        "targetYaw": -174.79,
        "targetPitch": -5.16,
        "targetHfov": 120
      }
    ],
    "kitchen03": [
      {
        "id": "hs_1780695846960",
        "pitch": -41.58,
        "yaw": -150.84,
        "type": "scene",
        "text": "Kitchen 2",
        "sceneId": "kitchen02",
        "targetYaw": -151.38,
        "targetPitch": -10.93,
        "targetHfov": 120
      }
    ],
    "kitchenToHall02": [
      {
        "id": "hs_1780696120936",
        "pitch": -48.78,
        "yaw": -0.63,
        "type": "scene",
        "text": "Hall 2 to Room 1",
        "sceneId": "hall02ToRoom01",
        "targetYaw": 12.72,
        "targetPitch": -5,
        "targetHfov": 120
      }
    ],
    "hall02ToRoom01": [
      {
        "id": "hs_1780696146205",
        "pitch": -33.37,
        "yaw": 13.88,
        "type": "scene",
        "text": "Room 2",
        "sceneId": "room02",
        "targetYaw": 20.9,
        "targetPitch": -4.48,
        "targetHfov": 120
      }
    ],
    "room02": [
      {
        "id": "hs_1780696263655",
        "pitch": -30.58,
        "yaw": 21.15,
        "type": "scene",
        "text": "Room 3",
        "sceneId": "room03",
        "targetYaw": 89.97,
        "targetPitch": -10.23,
        "targetHfov": 120
      }
    ],
    "room03": [
      {
        "id": "hs_1780696296843",
        "pitch": -53.66,
        "yaw": -49.25,
        "type": "scene",
        "text": "Room 4",
        "sceneId": "room04",
        "targetYaw": 39.12,
        "targetPitch": -4.63,
        "targetHfov": 120
      }
    ],
    "room04": [
      {
        "id": "hs_1780707435511",
        "pitch": -22.67,
        "yaw": 10.18,
        "type": "scene",
        "text": "Room 4 to Hall 2",
        "sceneId": "room04ToHall02",
        "targetYaw": -24.79,
        "targetPitch": -6.31,
        "targetHfov": 120
      }
    ],
    "hall02_3": [
      {
        "id": "hs_1780707596660",
        "pitch": -42.94,
        "yaw": -69.44,
        "type": "scene",
        "text": "Bathroom 2",
        "sceneId": "bathroom02",
        "targetYaw": 136.7,
        "targetPitch": -19.37,
        "targetHfov": 120
      }
    ],
    "bathroom02": [
      {
        "id": "hs_1780707669667",
        "pitch": -34.33,
        "yaw": -173.78,
        "type": "scene",
        "text": "Bathroom 3 to Room 1",
        "sceneId": "bathroom03ToRoom01",
        "targetYaw": 178.97,
        "targetPitch": 0.41,
        "targetHfov": 120
      }
    ],
    "bathroom03ToRoom01": [
      {
        "id": "hs_1780707740392",
        "pitch": -18.76,
        "yaw": 152.47,
        "type": "scene",
        "text": "Room 1-2",
        "sceneId": "room01_2",
        "targetYaw": 126.95,
        "targetPitch": -11.04,
        "targetHfov": 120
      },
      {
        "id": "hs_1780709394680",
        "pitch": -27.32,
        "yaw": 3.61,
        "type": "scene",
        "text": "Entrance Hall to Hallway 1",
        "sceneId": "entranceHallToHallway01",
        "targetYaw": 170.14,
        "targetPitch": -11.72,
        "targetHfov": 120
      }
    ],
    "room01_2": [
      {
        "id": "hs_1780707889356",
        "pitch": -15.64,
        "yaw": 123.13,
        "type": "scene",
        "text": "Room 1-5",
        "sceneId": "room01_5",
        "targetYaw": 122.17,
        "targetPitch": -1.47,
        "targetHfov": 120
      }
    ],
    "room01_5": [
      {
        "id": "hs_1780708003167",
        "pitch": -23.65,
        "yaw": -97.75,
        "type": "scene",
        "text": "Room 1-7",
        "sceneId": "room01_7",
        "targetYaw": -47.96,
        "targetPitch": -9.8,
        "targetHfov": 120
      },
      {
        "id": "hs_1780709023004",
        "pitch": -24.69,
        "yaw": 167.54,
        "type": "scene",
        "text": "Bathroom 2 to Balcony 1",
        "sceneId": "bathroom02ToBalcony01",
        "targetYaw": -175.87,
        "targetPitch": -7.35,
        "targetHfov": 120
      },
      {
        "id": "hs_1780709284021",
        "pitch": -27.4,
        "yaw": -60.2,
        "type": "scene",
        "text": "Bathroom 3 to Room 1",
        "sceneId": "bathroom03ToRoom01",
        "targetYaw": 14.29,
        "targetPitch": -6.52,
        "targetHfov": 120
      }
    ],
    "room01_7": [
      {
        "id": "hs_1780708228086",
        "pitch": -47.68,
        "yaw": -30.02,
        "type": "scene",
        "text": "Bathroom 2-2",
        "sceneId": "bathroom02_2",
        "targetYaw": 9.54,
        "targetPitch": -6.24,
        "targetHfov": 120
      }
    ],
    "bathroom02_2": [
      {
        "id": "hs_1780708296306",
        "pitch": -36.28,
        "yaw": -159.94,
        "type": "scene",
        "text": "Room 1-7",
        "sceneId": "room01_7",
        "targetYaw": 132.64,
        "targetPitch": -16.29,
        "targetHfov": 120
      },
      {
        "id": "hs_1780708432666",
        "pitch": -18.26,
        "yaw": 170.47,
        "type": "scene",
        "text": "Room 1-5",
        "sceneId": "room01_5",
        "targetYaw": 122.71,
        "targetPitch": 0.85,
        "targetHfov": 120
      }
    ],
    "bathroom02ToBalcony01": [
      {
        "id": "hs_1780709095814",
        "pitch": -29.53,
        "yaw": 39.73,
        "type": "scene",
        "text": "Bathroom 2 to Balcony 1",
        "sceneId": "bathroom02ToBalcony01",
        "targetYaw": 153.38,
        "targetPitch": -8.37,
        "targetHfov": 120
      },
      {
        "id": "hs_1780709136473",
        "pitch": -29.24,
        "yaw": 3.83,
        "type": "scene",
        "text": "Room 1-5",
        "sceneId": "room01_5",
        "targetYaw": 14.29,
        "targetPitch": -6.52,
        "targetHfov": 120
      }
    ],
    "entrance01": [
      {
        "id": "hs_1780962570705",
        "pitch": -12.29,
        "yaw": 7.71,
        "type": "scene",
        "text": "Entrance to Garden 1",
        "sceneId": "entranceToGarden01",
        "targetYaw": 8.85,
        "targetPitch": 3.41,
        "targetHfov": 120
      }
    ],
    "entranceToGarden01": [
      {
        "id": "hs_1780962621415",
        "pitch": -11.8,
        "yaw": 171.06,
        "type": "scene",
        "text": "Entrance 1",
        "sceneId": "entrance01",
        "targetYaw": 0,
        "targetPitch": 0,
        "targetHfov": 120
      },
      {
        "id": "hs_1780962696603",
        "pitch": -11.52,
        "yaw": -27.93,
        "type": "scene",
        "text": "Garden 3",
        "sceneId": "garden03",
        "targetYaw": -15.49,
        "targetPitch": 9.49,
        "targetHfov": 120
      },
      {
        "id": "hs_1780963262943",
        "pitch": -10.66,
        "yaw": 35.64,
        "type": "scene",
        "text": "Garden 14",
        "sceneId": "garden14",
        "targetYaw": 16.03,
        "targetPitch": -4.39,
        "targetHfov": 120
      }
    ],
    "garden03": [
      {
        "id": "hs_1780962756640",
        "pitch": -15.98,
        "yaw": 169.05,
        "type": "scene",
        "text": "Entrance to Garden 1",
        "sceneId": "entranceToGarden01",
        "targetYaw": 176.48,
        "targetPitch": -3.2,
        "targetHfov": 120
      },
      {
        "id": "hs_1780962804441",
        "pitch": -8.08,
        "yaw": -18.81,
        "type": "scene",
        "text": "Garden 7",
        "sceneId": "garden07",
        "targetYaw": 0,
        "targetPitch": 0,
        "targetHfov": 120
      },
      {
        "id": "hs_1780963192986",
        "pitch": -10.55,
        "yaw": 78.44,
        "type": "scene",
        "text": "Garden 14",
        "sceneId": "garden14",
        "targetYaw": 16.03,
        "targetPitch": -4.39,
        "targetHfov": 120
      }
    ],
    "garden07": [
      {
        "id": "hs_1780962888104",
        "pitch": 6.22,
        "yaw": 4.38,
        "type": "scene",
        "text": "Garden 10",
        "sceneId": "garden10",
        "targetYaw": 13.85,
        "targetPitch": -10.07,
        "targetHfov": 120
      },
      {
        "id": "hs_1780962969654",
        "pitch": -13.89,
        "yaw": 161.26,
        "type": "scene",
        "text": "Garden 3",
        "sceneId": "garden03",
        "targetYaw": -172.95,
        "targetPitch": 1.31,
        "targetHfov": 120
      }
    ],
    "garden10": [
      {
        "id": "hs_1780962933925",
        "pitch": -34.39,
        "yaw": 154.84,
        "type": "scene",
        "text": "Garden 7",
        "sceneId": "garden07",
        "targetYaw": -172.77,
        "targetPitch": -2.07,
        "targetHfov": 120
      }
    ],
    "garden14": [
      {
        "id": "hs_1780963230745",
        "pitch": -17.72,
        "yaw": 175,
        "type": "scene",
        "text": "Garden 3",
        "sceneId": "garden03",
        "targetYaw": 16.03,
        "targetPitch": -4.39,
        "targetHfov": 120
      },
      {
        "id": "hs_1780963239195",
        "pitch": -6.49,
        "yaw": 118.71,
        "type": "scene",
        "text": "Entrance 1",
        "sceneId": "entrance01",
        "targetYaw": 16.03,
        "targetPitch": -4.39,
        "targetHfov": 120
      },
      {
        "id": "hs_1780963280410",
        "pitch": -7.05,
        "yaw": -141.75,
        "type": "scene",
        "text": "Garden 7",
        "sceneId": "garden07",
        "targetYaw": 16.03,
        "targetPitch": -4.39,
        "targetHfov": 120
      },
      {
        "id": "hs_1780963373910",
        "pitch": -6.77,
        "yaw": 9.59,
        "type": "scene",
        "text": "Garden 16",
        "sceneId": "garden16",
        "targetYaw": 0,
        "targetPitch": 0,
        "targetHfov": 120
      }
    ],
    "garden16": [
      {
        "id": "hs_1780963519030",
        "pitch": -10.13,
        "yaw": 3.9,
        "type": "scene",
        "text": "Garden 21",
        "sceneId": "garden21",
        "targetYaw": 7.37,
        "targetPitch": 0.89,
        "targetHfov": 120
      },
      {
        "id": "hs_1780964168231",
        "pitch": -6.97,
        "yaw": -134.32,
        "type": "scene",
        "text": "Entrance to Garden 1",
        "sceneId": "entranceToGarden01",
        "targetYaw": -129.4,
        "targetPitch": -5.1,
        "targetHfov": 120
      },
      {
        "id": "hs_1780964177997",
        "pitch": -7.21,
        "yaw": -107.41,
        "type": "scene",
        "text": "Garden 3",
        "sceneId": "garden03",
        "targetYaw": -129.4,
        "targetPitch": -5.1,
        "targetHfov": 120
      }
    ],
    "garden21": [
      {
        "id": "hs_1780963546679",
        "pitch": -10.09,
        "yaw": 0.95,
        "type": "scene",
        "text": "Garden 23",
        "sceneId": "garden23",
        "targetYaw": 7.37,
        "targetPitch": 0.89,
        "targetHfov": 120
      },
      {
        "id": "hs_1780963561968",
        "pitch": -21.9,
        "yaw": 158.54,
        "type": "scene",
        "text": "Garden 16",
        "sceneId": "garden16",
        "targetYaw": 7.37,
        "targetPitch": 0.89,
        "targetHfov": 120
      }
    ],
    "garden23": [
      {
        "id": "hs_1780963680882",
        "pitch": -15.76,
        "yaw": 174.98,
        "type": "scene",
        "text": "Garden 21",
        "sceneId": "garden21",
        "targetYaw": -172.51,
        "targetPitch": -5.05,
        "targetHfov": 120
      },
      {
        "id": "hs_1780963771668",
        "pitch": -21.92,
        "yaw": -36.2,
        "type": "scene",
        "text": "Garden 25",
        "sceneId": "garden25",
        "targetYaw": 172.11,
        "targetPitch": -9.18,
        "targetHfov": 120
      }
    ],
    "garden25": [
      {
        "id": "hs_1780963740756",
        "pitch": -17.57,
        "yaw": -130.64,
        "type": "scene",
        "text": "Garden 23",
        "sceneId": "garden23",
        "targetYaw": 172.11,
        "targetPitch": -9.18,
        "targetHfov": 120
      },
      {
        "id": "hs_1780964016004",
        "pitch": -15.9,
        "yaw": -98.76,
        "type": "scene",
        "text": "Entrance Hall 1",
        "sceneId": "entranceHall01",
        "targetYaw": 0,
        "targetPitch": 0,
        "targetHfov": 120
      },
      {
        "id": "hs_1780964085423",
        "pitch": -15.49,
        "yaw": 11.48,
        "type": "scene",
        "text": "Garden 27",
        "sceneId": "garden27",
        "targetYaw": -129.4,
        "targetPitch": -5.1,
        "targetHfov": 120
      }
    ],
    "garden27": [
      {
        "id": "hs_1780964096603",
        "pitch": -15.02,
        "yaw": -122.06,
        "type": "scene",
        "text": "Garden 25",
        "sceneId": "garden25",
        "targetYaw": -129.4,
        "targetPitch": -5.1,
        "targetHfov": 120
      }
    ]
  }
};

const tourScenes = buildScenes();

const viewer = pannellum.viewer("panorama", {
  default: {
    firstScene: "room04",
    sceneFadeDuration: 0,
    autoLoad: true,
    showControls: true,
    compass: false
  },
  scenes: tourScenes
});

let navigationHistory = [];

document.getElementById("tour-title").innerText = tourScenes.room04.title;

viewer.on("scenechange", function (sceneId) {
  document.getElementById("tour-title").innerText = tourScenes[sceneId].title;
  updateSimplePanelLabels();
});

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
    alert("No previous hotspot available.");
  
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