export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        console.log("Se crea el player");

        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(0.2);
        this.anims.play("turn")
    }
    runRight(){
        this.setVelocityX(160)
        this.anims.play("right", true);
    }
    runLeft(){
        this.setVelocityX(-160)
        this.anims.play("left", true);
    }
    jump(){
        this.setVelocityY(-330);
    }
}