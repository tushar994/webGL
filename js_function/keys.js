import {player, enemies, scene, loader, initialize, camera, player_bullet_list, renderer, enemy_bullet_list} from "./init.js";
import { GLTFLoader } from "../js/GLTFLoader.js";

function onKeyDown(event) {
    var speed = 10;
    var rotate_till = Math.PI/5;
    var rotate_speed = Math.PI/20;
    if (event.key == "w") {
        player.position.x += speed;
        while(player.rotation.z < rotate_till){
            player.rotation.z += rotate_speed;
        }
    } if (event.key == "s") {
        player.position.x -= speed;
        if(player.rotation.z > -1*rotate_till){
            // console.log("aaaaa")
            player.rotation.z -= rotate_speed;
        }
    }  if (event.key == "a") {
        player.position.z -= speed;
        if(player.rotation.x > -1*rotate_till){
            // console.log("aaaaa")
            player.rotation.x -= rotate_speed;
        }
    }  if (event.key == "d") {
        player.position.z += speed;
        // console.log(rotate_till);
        if(player.rotation.x < rotate_till){
            // console.log("aaaaa")
            player.rotation.x += rotate_speed;
        }
    }
        if (event.key == "i") {
        camera.position.x += speed;
    }  if (event.key == "k") {
        camera.position.x -= speed;
    }  if (event.key == "j") {
        camera.position.z -= speed;
    }  if (event.key == "l") {
        camera.position.z += speed;
    }
        if (event.key == 'p') {
        camera.lookAt(player.position)
        console.log(camera.rotation)
    }
        if(event.key == 'n'){
        camera.position.y -=speed
    }
        if(event.key == 'm'){
        camera.position.y +=speed
    }
    if(event.key == ';'){
        // add player bullet
        var bulletloader = new GLTFLoader();
        var player_bullet;
        bulletloader.load('../plane_bullet.gltf', function (gltf) {
            player_bullet = gltf.scene;
            player_bullet.position.x = player.position.x
            player_bullet.position.y = player.position.y
            player_bullet.position.z = player.position.z
            scene.add(player_bullet);
            player_bullet_list.push(player_bullet);
          });

    }
}
export { onKeyDown };