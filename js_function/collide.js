import {player, enemies, scene, loader, initialize, camera, player_bullet_list, renderer, player_health} from "./init.js";

export function enemy_with_bullet(enemy, bullet){
    // x,y
    var enemy_box = [5*3, 3*3 + 0.3];
    var bullet_box = [1,1];
    // console.log(bullet.position.x);
    // console.log(bullet.position.z);
    if((enemy_box[0] + bullet_box[0]) > Math.abs(enemy.position.x - bullet.position.x) && (enemy_box[1] + bullet_box[1]) > Math.abs(enemy.position.z - bullet.position.z)){
        return 1;
    }
    return 0;
}

export function player_with_bullet(player, bullet){
    // x,y
    var enemy_box = [5*3, 3*3 + 0.1];
    var player_box = [4*2.5, 2.5*2.5 + 0.1];
    var bullet_box = [3,0.2];
    // console.log(bullet.position.x);
    // console.log(bullet.position.z);
    if((player_box[0] + bullet_box[0]) > Math.abs(player.position.x - bullet.position.x) && (player_box[1] + bullet_box[1]) > Math.abs(player.position.z - bullet.position.z)){
        return 1;
    }
    return 0;
}

export function player_with_star(player, star){
    // x,y
    var player_box = [4*2.5, 3*2.5 + 0.1];
    var star_box = [4*3,5*3];
    // console.log(bullet.position.x);
    // console.log(bullet.position.z);
    if((player_box[0] + star_box[0]) > Math.abs(player.position.x - star.position.x) && (player_box[1] + star_box[1]) > Math.abs(player.position.z - star.position.z)){
        return 1;
    }
    return 0;
}