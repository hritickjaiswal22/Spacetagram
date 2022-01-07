import React from "react";

import Card from "./Card";

import styles from "./Grid.module.scss";

function Grid() {
  return (
    <article className={styles.gridContainer}>
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/1712/qso2237_wiyn_960.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="Most galaxies have a single nucleus -- does this galaxy have four?  The strange answer leads astronomers to conclude that the nucleus of the surrounding galaxy is not even visible in this image.  The central cloverleaf is rather light emitted from a background quasar.  The gravitational field of the visible foreground galaxy breaks light from this distant quasar into four distinct images.  The quasar must be properly aligned behind the center of a massive galaxy for a mirage like this to be evident.  The general effect is known as gravitational lensing, and this specific case is known as the Einstein Cross.  Stranger still, the images of the Einstein Cross vary in relative brightness, enhanced occasionally by the additional gravitational microlensing effect of specific stars in the foreground galaxy.     Free Download: The 2018 APOD Calendar"
      />
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/0002/chimney1_cgps.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="A huge chimney venting hot clouds of gas out from the plane of our Milky Way Galaxy has recently been imaged in radio waves.  The Canadian Galactic Plane Survey team used an array of radio telescopes to survey an ionized gas region known as W4.  At the bottom of W4 and in the center of the above image is a very young open cluster of stars known as OCl 352.  Research continues into how these stars created the W4 superbubble.  Possible explanations include supernova explosions or strong stellar winds from these stars.  It does appear clear, however, that hot gas is expanding outwards, being funneled by relatively cool and dense gas in a chimney-like fashion.  The W4 chimney, which lies 6500 light-years from Earth and spans 250 light-years across, is visible as the comparatively dark area extending toward the top of the above image."
      />
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/2004/ISS002-E-7377_1024c.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="No sudden, sharp boundary marks the passage of day into night in this gorgeous view of ocean and clouds over our fair planet Earth. Instead, the shadow line or terminator is diffuse and shows the gradual transition to darkness we experience as twilight. With the Sun illuminating the scene from the right, the cloud tops reflect gently reddened sunlight filtered through the dusty troposphere, the lowest layer of the planet's nurturing atmosphere. A clear high altitude layer, visible along the dayside's upper edge, scatters blue sunlight and fades into the blackness of space. This picture was taken in June of 2001 from the International Space Station orbiting at an altitude of 211 nautical miles. Of course from home, you can check out the Earth Now.  Celebrate: Today is Earth Day"
      />
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/1712/qso2237_wiyn_960.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="Most galaxies have a single nucleus -- does this galaxy have four?  The strange answer leads astronomers to conclude that the nucleus of the surrounding galaxy is not even visible in this image.  The central cloverleaf is rather light emitted from a background quasar.  The gravitational field of the visible foreground galaxy breaks light from this distant quasar into four distinct images.  The quasar must be properly aligned behind the center of a massive galaxy for a mirage like this to be evident.  The general effect is known as gravitational lensing, and this specific case is known as the Einstein Cross.  Stranger still, the images of the Einstein Cross vary in relative brightness, enhanced occasionally by the additional gravitational microlensing effect of specific stars in the foreground galaxy.     Free Download: The 2018 APOD Calendar"
      />
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/0002/chimney1_cgps.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="A huge chimney venting hot clouds of gas out from the plane of our Milky Way Galaxy has recently been imaged in radio waves.  The Canadian Galactic Plane Survey team used an array of radio telescopes to survey an ionized gas region known as W4.  At the bottom of W4 and in the center of the above image is a very young open cluster of stars known as OCl 352.  Research continues into how these stars created the W4 superbubble.  Possible explanations include supernova explosions or strong stellar winds from these stars.  It does appear clear, however, that hot gas is expanding outwards, being funneled by relatively cool and dense gas in a chimney-like fashion.  The W4 chimney, which lies 6500 light-years from Earth and spans 250 light-years across, is visible as the comparatively dark area extending toward the top of the above image."
      />
      <Card
        date="2017-12-17"
        media_type="image"
        url="https://apod.nasa.gov/apod/image/2004/ISS002-E-7377_1024c.jpg"
        title="The Einstein Cross Gravitational Lens"
        explanation="No sudden, sharp boundary marks the passage of day into night in this gorgeous view of ocean and clouds over our fair planet Earth. Instead, the shadow line or terminator is diffuse and shows the gradual transition to darkness we experience as twilight. With the Sun illuminating the scene from the right, the cloud tops reflect gently reddened sunlight filtered through the dusty troposphere, the lowest layer of the planet's nurturing atmosphere. A clear high altitude layer, visible along the dayside's upper edge, scatters blue sunlight and fades into the blackness of space. This picture was taken in June of 2001 from the International Space Station orbiting at an altitude of 211 nautical miles. Of course from home, you can check out the Earth Now.  Celebrate: Today is Earth Day"
      />
    </article>
  );
}

export default Grid;
