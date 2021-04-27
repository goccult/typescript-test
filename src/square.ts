class Square extends Shape{  // extends关键字指定继承的父类函数
  constructor(canvasId: string, location?: {x: number, y: number}) {
    super(canvasId, location) // super()方法访问父类的构造函数
    this.appendElement()
  }

  public appendElement() {
    this.dom.style.position = 'absolute';
    this.dom.style.width = '60px';
    this.dom.style.height = '60px';
    this.dom.style.background = 'red';
    this.dom.style.top = `${this.location.y}px`;
    this.dom.style.left = `${this.location.x}px`;
    this.dom.style.cursor = 'move';
    (this.canvasDom as HTMLDivElement).appendChild(this.dom);
  }
}