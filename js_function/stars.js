import {player, enemies, scene, loader, initialize, camera, player_bullet_list, renderer, enemy_bullet_list,stars_list} from "./init.js";
import { GLTFLoader } from "../js/GLTFLoader.js";
export function handle_stars(){
    // update star position
    for(var iter = 0; iter<stars_list.length;iter++){
        stars_list[iter].position.x -= 1;
    }
    // remove extra stars
    for(var iter2 = 0; iter2<stars_list.length; iter2++){
        if(stars_list[iter2].position.x<-400){
            scene.remove(stars_list[iter2]);
            stars_list.splice(iter2,1);
        }
    }
    // generate stars
    if(Math.random() < 0.05){
        var i = Math.floor(Math.random() * 300) -150 ;
      // console.log(enemies.length)
        var bulletloader = new GLTFLoader();
        var star;
        loader.load('../monkey_star.gltf', function (gltf) {
            // console.log(enemies[i])
            star = gltf.scene;

            star.position.x = 200
            star.position.y = 0
            star.position.z = i
            star.rotation.y = -1*Math.PI/2;
            var scale = 3;
            star.scale.set(scale, 1, scale)
            scene.add(star);
            stars_list.push(star);
        });
      }
}