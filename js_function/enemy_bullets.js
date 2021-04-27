import {player, enemies, scene, loader, initialize, camera, player_bullet_list, renderer, enemy_bullet_list} from "./init.js";
import { GLTFLoader } from "../js/GLTFLoader.js";
export function handle_enemy_bullets(){
    // update enemy bullet position
    for(var iter = 0; iter<enemy_bullet_list.length;iter++){
        enemy_bullet_list[iter].position.x -= 1;
    }
    // remove extra enemy bullets
    for(var iter2 = 0; iter2<enemy_bullet_list.length; iter2++){
        if(enemy_bullet_list[iter2].position.x<-400){
            scene.remove(enemy_bullet_list[iter2]);
            enemy_bullet_list.splice(iter2,1);
        }
    }
    // enemies shoot
    if(Math.random() < 0.05){
        var i = Math.floor(Math.random() * enemies.length);
      // console.log(enemies.length)
        var bulletloader = new GLTFLoader();
        var enemy_bullet;
        loader.load('../evil_bullet.gltf', function (gltf) {
            // console.log(enemies[i])
            enemy_bullet = gltf.scene;

            enemy_bullet.position.x = enemies[i].position.x
            enemy_bullet.position.y = enemies[i].position.y
            enemy_bullet.position.z = enemies[i].position.z
            scene.add(enemy_bullet);
            enemy_bullet_list.push(enemy_bullet);
        });
      }
}