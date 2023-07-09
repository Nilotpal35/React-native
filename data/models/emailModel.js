export class emailConstructor {
  constructor(id, title, message, time) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.time = time;
  }

  emailObj() {
    return {
      id: this.id,
      title: this.title,
      message: this.message,
      time: this.time,
    };
  }
}
