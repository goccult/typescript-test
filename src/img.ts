class Img extends Shape{
  constructor(canvasId: string, location?: {x: number, y: number}) {
    super(canvasId, location) // super()方法访问父类的构造函数
    this.appendElement()
  }

  public appendElement() {
    this.dom.style.position = 'absolute';
    this.dom.style.width = '80px';
    this.dom.style.height = '80px';
    const img = document.createElement('img')
    this.dom.style.top = `${this.location.y}px`;
    this.dom.style.left = `${this.location.x}px`;
    this.dom.style.cursor = 'move';
    img.src = 'https://store-tg1.cvte.com/easinote5_public/74e235aed00f44228f5e4a05617174f2';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.userSelect = 'none';
    this.dom.appendChild(img);
    (this.canvasDom as HTMLDivElement).appendChild(this.dom);
  }
}