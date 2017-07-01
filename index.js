class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }

  get created() {
    return this._created;
  }

  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error('Invalid created');
    }
    this._created = created;
  }

  toString() {
    return `Message\'s created at: ${this.created}, text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(), url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `Photo ${super.toString()}, url: ${this.url}, thumbnail: ${this.thumbnail}`;
  }
}

var emptyMessage = new Message();
var message = new Message('oláaaaa!', Date.now() - 86400);
var photoMessage = new ImageMessage();

console.log(String(emptyMessage),  emptyMessage instanceof Message);
console.log(String(message), message instanceof Message);
console.log(String(photoMessage), photoMessage instanceof ImageMessage);