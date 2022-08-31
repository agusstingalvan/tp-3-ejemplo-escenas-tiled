export default class Bombs extends Phaser.Physics.Arcade.Group{
    constructor(scene){
        super(scene.physics.world, scene)
    }
}