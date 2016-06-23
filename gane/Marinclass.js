function CreateMarin() {
    var self = this;
    this.weapon = makeWeapon();
    this.damage = makeMarinDamage(self);
    this.health = makeMarinHealth();
}