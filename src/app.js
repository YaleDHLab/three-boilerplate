import * as THREE from 'three';
import Lights from './lights/Lights';
import Cube from './models/Cube';
import * as Stats from 'stats-js';
import * as TrackballControls from 'three-trackballcontrols';

class App {
  constructor(selector) {
    this.selector = selector;
    this.container = null;
    this.h = 0;
    this.w = 0;
    this.updateContainer();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.w, this.h);
    this.container.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;
    this.stats = new Stats();
    this.stats.dom.id = 'stats';
    this.container.append(this.stats.dom);
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);
    this.controls.target = new THREE.Vector3(0,0,0);
    window.addEventListener('resize', this.onResize.bind(this));
  }

  updateContainer() {
    this.container = document.querySelector(this.selector);
    this.h = this.container.clientHeight;
    this.w = this.container.clientWidth;
  }

  onResize() {
    this.updateContainer();
    this.camera.aspect = this.w/this.h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.w, this.h);
  }

  add(name, object) {
    this[name] = object.mesh;
    this.scene.add(object.mesh);
  }
}

export const app = window.world = new App('#gl');

app.add('cube', new Cube());
app.add('lights', new Lights());