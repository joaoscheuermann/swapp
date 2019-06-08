<template>
  <div class="login">
    <div class="header"> 
      <img class="logo" src="/images/logo.svg" alt="">
    </div>

    <div class="road">
      Av. Escola Politécnica
    </div>

    <div class="speedometer">
      <div class="current-speed">
        <div class="speed">
          <div class="max-speed"> 40 </div>
          {{ Math.min(Math.max(parseInt(Math.trunc(speed)), 0), 50) }}
        </div>
        <div class="unit">KM/h</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      geolocationPermitionState: null,
      geolocationWatcherID: null,
      
      currentPosition: {
        timestamp: null,
        lat: null,
        lng: null,
      },
      lastPosition: {
        timestamp: null,
        lat: null,
        lng: null
      },

      speed: 0,
      deltaTime: 0,
      distance: 0
    }
  },

  methods: {
    startGeolocationWatch () {
      const GEOLOCATION_OPTIONS = {enableHighAccuracy: true}
  
      this.geolocationWatcherID = navigator.geolocation.watchPosition(this.watchPositionSucces, this.watchPositionError, GEOLOCATION_OPTIONS)
    },

    calculateSpeed (last, current) {
      function timestampInSeconds (timestamp) {
        return timestamp / 1000
      }

      function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
      }

      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }

      let deltaTime = Math.trunc(timestampInSeconds(current.timestamp) - timestampInSeconds(last.timestamp))
      let distanceBetweenPoints = getDistanceFromLatLonInKm(last.lat, last.lng, current.lat, current.lng) * 1000 // in meters
      
      this.deltaTime = deltaTime
      this.distance = distanceBetweenPoints
      this.speed = ((distanceBetweenPoints / deltaTime) * 3.6).toFixed(1)
    },

    watchPositionSucces (data) {
      const { coords, timestamp } = data
      const { latitude, longitude } = coords

      this.lastPosition = Object.assign(this.lastPosition, this.currentPosition)

      this.currentPosition.lat = latitude
      this.currentPosition.lng = longitude
      this.currentPosition.timestamp = timestamp

      if (!this.lastPosition.timestamp) Object.assign(this.lastPosition, this.currentPosition)

      this.calculateSpeed(this.lastPosition, this.currentPosition)
    },

    watchPositionError (error) {

    },
  },
  
  mounted () {
    this.startGeolocationWatch()
  }
}

</script>

<style lang="scss">
@import "../styles/modules/typography.module";

.login {
  display: flex;
  flex-direction: column;
}
.header {
  padding: 14px;
  background: #F3F3F3;
  text-align: center;

  >.logo {
    width: 98px;
    height: 38px;
  }
}

.road {
  padding: 17px 24px 15px;
  background-color: #091D3B;
  color: #F3F3F3;
  @include typography-base('Poppins', 16px, 500)
}

.speedometer {
  flex-grow: 1;
  display: flex;
  background-color: #0B2449;

  justify-content: center;
  align-items: center;

  >.current-speed {
    @include typography-base('Poppins', unset, 600);
    color: #ffffff;
    width: 100%;
    text-align: center;

    >.speed {
      position: relative;
      font-size: 84px;
    }

    >.unit {
      font-size: 36px;
    }
  }
}

.max-speed {
  position: absolute;
  padding: 24px 26px;
  top: calc(-100% + 60px);
  right: calc(50% - 150px);
  font-size: 24px;
  border: 5px solid white;
  border-radius: 50px;
}
</style>