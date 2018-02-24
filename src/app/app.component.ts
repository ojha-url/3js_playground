import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import './js/EnableThreeExamples';
import 'three/examples/js/controls/TrackballControls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, // FoV
    window.innerWidth / window.innerHeight, // Aspect ratio
    0.1, // Near clip distance
    1000 // Far clip distance
  );
  controls: THREE.TrackballControls;
  renderer = new THREE.WebGLRenderer();

  constructor() {
  }

  render() {
    // const self: AppComponent = this;
    // requestAnimationFrame( self.render );

    this.controls.update();
    this.renderer.render( this.scene, this.camera );
  }

  ngAfterViewInit() {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );

    this.renderer.setSize( window.innerWidth, window.innerHeight );

    document.getElementById('canvasWrapper')
    .appendChild( this.renderer.domElement );

    this.scene.add( cube );
    this.camera.position.z = 5;

    this.controls = new THREE.TrackballControls( this.camera, this.renderer.domElement );
    // this.controls.rotateSpeed = 1.0;
    // this.controls.zoomSpeed = 1.2;
    // this.controls.panSpeed = 0.8;
    // this.controls.noZoom = false;
    // this.controls.noPan = false;
    // this.controls.staticMoving = true;
    // this.controls.dynamicDampingFactor = 0.3;

    this.controls.update();
    this.render();
    // this.controls.addEventListener('change', this.render);
  }
}
