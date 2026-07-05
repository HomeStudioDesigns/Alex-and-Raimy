var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8564457053399579,
          "pitch": 0.40816102554316025,
          "rotation": 0,
          "target": "1-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3808583630744735,
          "pitch": 0.4445466406597891,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -0.012824459271747912,
          "pitch": 0.5460136547749705,
          "rotation": 0,
          "target": "2-wash"
        },
        {
          "yaw": -0.02124666327540936,
          "pitch": 0.15839829066704425,
          "rotation": 0,
          "target": "5-stair-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash",
      "name": "Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6959388592942428,
          "pitch": 0.6167827995674511,
          "rotation": 0,
          "target": "1-passage"
        },
        {
          "yaw": -1.487175891949672,
          "pitch": 0.17027516498144024,
          "rotation": 0,
          "target": "5-stair-bottom"
        },
        {
          "yaw": -1.1490892608093723,
          "pitch": 0.5577729725795795,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8219536502567628,
          "pitch": 0.27827777036827683,
          "rotation": 0,
          "target": "5-stair-bottom"
        },
        {
          "yaw": 0.36882732233270943,
          "pitch": 0.17274682791869012,
          "rotation": 0,
          "target": "4-dining-2"
        },
        {
          "yaw": -0.046123278507556265,
          "pitch": 0.015341563167176275,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 2.4186397226797016,
          "pitch": 0.7695568229016114,
          "rotation": 0,
          "target": "2-wash"
        },
        {
          "yaw": 2.4925957489292134,
          "pitch": 0.3996296872771765,
          "rotation": 0,
          "target": "1-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-2",
      "name": "Dining 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20999570457851569,
          "pitch": 0.20789682478908134,
          "rotation": 0,
          "target": "3-dining"
        },
        {
          "yaw": 1.9152743601255589,
          "pitch": 0.5277204970352436,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stair-bottom",
      "name": "Stair bottom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1280884388881791,
          "pitch": 0.28291671989736855,
          "rotation": 0,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7057564462268253,
          "pitch": 0.5146413205847598,
          "rotation": 0,
          "target": "4-dining-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Alex and Raimy",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
