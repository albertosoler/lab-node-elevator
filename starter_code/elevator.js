class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "";
    this.waitingList = [];
    this.passenger = [];
    this.clean = 0;
  }

  start() {
    this.clean = setInterval(() => { this.update() }, 1000);
  }
  stop() {
    clearInterval(this.clean);
  }
  update() {
    if (this.direction == "up") {
      this.floorUp();
      this._passengersEnter();
      this._passengersLeave();
    } else {
      this.floorDown();
      this._passengersLeave();
      this._passengersEnter();
    }
    this.log();
  }
  _passengersEnter() {
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor == this.floor) {
        this.passenger.push(this.waitingList[i]);
        this.requests.push(this.waitingList[i].destinationFloor);
        console.log(`${this.waitingList[i].name} entro en el ascensor `);
        this.waitingList.splice(i, 1);
      }
    }
  }
  _passengersLeave() {
    let i = 0;
    for (; i < this.passenger; i++) {
      if ((this.passenger[i].destinationFloor = thisFloor)) {
        console.log(this.passenger[i].name + "has left the elevator");
        this.passenger.splice(i, 1);
      }
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    } else {
      this.direction = "down";
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    } else {
      this.direction = "up";
    }
  }
  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    // console.log(this.request);
    // console.log(this.waitingList);
  }
  log() {
    console.log(`Direction :${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
