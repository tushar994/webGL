import {player, enemies, scene, loader, initialize, camera, player_bullet_list, renderer, enemy_bullet_list} from "./init.js";
export function handle_player_bullets(){
    // update player bullet position
    for(var iter = 0; iter<player_bullet_list.length;iter++){
        player_bullet_list[iter].position.x += 1;
    }
    // remove extra player bullets
    for(var iter2 = 0; iter2<player_bullet_list.length; iter2++){
        if(player_bullet_list[iter2].position.x>400){
            scene.remove(player_bullet_list[iter2]);
            player_bullet_list.splice(iter2,1);
        }
    }
}