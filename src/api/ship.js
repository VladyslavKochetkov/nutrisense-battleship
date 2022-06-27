export class Ship {
  slots = [];
  length = 0;

  constructor(length) {
    this.slots = [...new Array(length)];
    this.length = length;
  }

  hit(index) {
    this.slots[index] = true;
  }

  isDestroyed() {
    return this.slots.every((index) => !!index);
  }

  positionIsHit(index) {
    return !!this.slots[index];
  }
}
