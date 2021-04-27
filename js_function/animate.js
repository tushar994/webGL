import {player, enemies, scene,collect_star, loader, initialize,stars_list, camera, player_bullet_list, renderer,enemy_pos, enemy_bullet_list,player_health, decrease_player_health, enemy_vel, player_score} from "./init.js";
var rotate_speed = Math.PI/180;
import { GLTFLoader } from "../js/GLTFLoader.js";
import {enemy_with_bullet, player_with_bullet} from "./collide.js";
import {handle_enemy_bullets} from "./enemy_bullets.js";
import {handle_player_bullets} from "./player_bullets.js";
import {handle_stars} from "./stars.js";

export function animate(){
    requestAnimationFrame(animate);
        if(player){
          if(player.rotation.x!=0){
            if(player.rotation.x<0){
              player.rotation.x += rotate_speed;
            }
            if(player.rotation.x>0){
              player.rotation.x -= rotate_speed;
            }
          }
          if(player.rotation.z!=0){
            if(player.rotation.z<0){
              player.rotation.z += rotate_speed;
            }
            if(player.rotation.z>0){
              player.rotation.z -= rotate_speed;
            }
          }
        }
        
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        renderer.render(scene, camera);
        
        handle_player_bullets();
        handle_enemy_bullets();
        handle_stars()
        
        

        // worry about enemy with player bullet
        for(var iter=0; iter<enemies.length;iter++){
            // console.log(iter)
            for(var iter2 = 0; iter2<player_bullet_list.length; iter2++){
                if(enemy_with_bullet(enemies[iter], player_bullet_list[iter2])){
                    scene.remove(enemies[iter]);
                    scene.remove(player_bullet_list[iter2]);
                    player_bullet_list.splice(iter2,1);
                    enemies.splice(iter,1);
                    enemy_vel.splice(iter,1);
                    enemy_pos.splice(iter,1);
                }
            }
        }
        // worry about player with enemy bullet
          // console.log(iter)
          for(var iter2 = 0; iter2<enemy_bullet_list.length; iter2++){
              if(player_with_bullet(player, enemy_bullet_list[iter2])){
                  decrease_player_health();
                  if(player_health<=0){
                    scene.remove(player);
                  }
                  scene.remove(enemy_bullet_list[iter2]);
                  enemy_bullet_list.splice(iter2,1);
              }
          }
        // worry about player with  star
          // console.log(iter)
          for(var iter2 = 0; iter2<stars_list.length; iter2++){
            if(player_with_bullet(player, stars_list[iter2])){
                collect_star();
                scene.remove(stars_list[iter2]);
                stars_list.splice(iter2,1);
            }
          }


        // move enemies around
        var enemy_speed = 0.1;
        var div_const = 10;
        for(var iter=0; iter<enemies.length;iter++){
          if(Math.random()<0.005){
            enemy_vel[iter] *=-1;
          }
          var new_z = enemies[iter].position.z + enemy_speed*enemy_vel[iter];
          if((new_z<=-150 && enemy_vel[iter]==-1) || (new_z>=150 && enemy_vel[iter]==1)){
            enemy_vel[iter] *=-1;
            new_z = enemies[iter].position.z + enemy_speed*enemy_vel[iter];
          }
          var new_x = div_const*(Math.sin(new_z) - Math.sin(enemy_pos[iter][1])) + enemy_pos[iter][0];

          enemies[iter].position.set(new_x,0,new_z);
        }
        document.getElementById("health").innerText = "health : "+ player_health;
        document.getElementById("score").innerText = "score : "+ player_score;
}