import 'babel-polyfill'
import './assets/styles/style'
import { app } from './app'

function render() {
  requestAnimationFrame(render);

  app.stats.begin();
  app.renderer.render(app.scene, app.camera);
  app.controls.update();
  app.stats.end();

  if (app.cube) {
    app.cube.rotation.x += 0.01;
    app.cube.rotation.y += 0.01;
  }
}

render();