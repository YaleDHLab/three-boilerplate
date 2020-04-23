import * as THREE from 'three';

export default class Cube {
  constructor() {
    this.geometry = new THREE.BoxGeometry(1,1,1);
    this.material = new THREE.MeshBasicMaterial( {color: 0x792f2f });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
}