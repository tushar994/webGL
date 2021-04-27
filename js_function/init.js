import { GLTFLoader } from "../js/GLTFLoader.js";
export var player;
export var player_health = 3;
export var player_score = 0;
export var enemies = [];  
export var enemy_vel = [];
export var enemy_pos = [];
export var scene = new THREE.Scene();
export var loader = new GLTFLoader();
export var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );
export var player_bullet_list = [];
export var enemy_bullet_list = [];
export var stars_list = [];
export var renderer = new THREE.WebGLRenderer();
var background;
export function initialize(){
    loader.load("../plane.gltf", function (gltf) {
        player = gltf.scene;
        scene.add(gltf.scene);
        player.rotation.y = Math.PI;
        player.scale.set(2.5, 2.5, 2.5)
    });
    loader.load("../background4.gltf", function (gltf) {
      background = gltf.scene;
      scene.add(gltf.scene);
      // background.rotation.y = 3*Math.PI/2;
      background.position.set(0,-100,-40)
      var scale = 70;
      background.scale.set(scale, scale, scale)
  });
    loader.load("../evil.gltf", function (gltf) {
        enemies.push(gltf.scene);
        var vel = Math.floor(Math.random() * 2)
        if(vel==0){
          enemy_vel.push(-1)
        }
        else{
          enemy_vel.push(1)
        }
        scene.add(gltf.scene);
        var pos = Math.floor(Math.random() * 300) -150;
        enemies[0].position.set(190,0,pos);
        enemy_pos.push([190, pos])
        enemies[0].rotation.x= Math.PI;
        enemies[0].scale.set(3, 3, 3)
      });
      loader.load("../evil.gltf", function (gltf) {
        enemies.push(gltf.scene);
        var vel = Math.floor(Math.random() * 2)
        if(vel==0){
          enemy_vel.push(-1)
        }
        else{
          enemy_vel.push(1)
        }
        scene.add(gltf.scene);
        var pos = Math.floor(Math.random() * 300) -150;
        enemies[1].position.set(140,0,pos);
        enemy_pos.push([140, pos])
        // enemies[0].rotation.x= Math.PI;
        enemies[1].scale.set(3, 3, 3)
        // enemies[1].rotation.y = 3*Math.PI/2;
      });
      loader.load("../evil.gltf", function (gltf) {
        enemies.push(gltf.scene);
        var vel = Math.floor(Math.random() * 2)
        if(vel==0){
          enemy_vel.push(-1)
        }
        else{
          enemy_vel.push(1)
        }
        scene.add(gltf.scene);
        var pos = Math.floor(Math.random() * 300) -150;
        enemies[2].position.set(90,0,pos);
        enemy_pos.push([90, pos])
        // enemies[0].rotation.x= Math.PI;
        enemies[2].scale.set(3,3, 3)
        // enemies[2].rotation.z = -1*Math.PI/4;
        // enemies[2].rotation.y = -1*Math.PI/2;
      });
      loader.load("../evil.gltf", function (gltf) {
        enemies.push(gltf.scene);
        var vel = Math.floor(Math.random() * 2)
        if(vel==0){
          enemy_vel.push(-1)
        }
        else{
          enemy_vel.push(1)
        }
        scene.add(gltf.scene);
        var pos = Math.floor(Math.random() * 300) -150;
        enemies[3].position.set(40,0,pos);
        enemy_pos.push([40, pos])
        // enemies[0].rotation.x= Math.PI;
        enemies[3].scale.set(3,3, 3)
        // enemies[2].rotation.z = -1*Math.PI/4;
        // enemies[2].rotation.y = -1*Math.PI/2;
      });
}
export function decrease_player_health(){
  player_health -=1;
}
export function collect_star(){
  player_score +=10;
}
// export {player, enemies, scene, loader, initialize};