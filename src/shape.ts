abstract class Shape {
  protected location: {x: number, y: number};
  protected dom: HTMLDivElement;
  protected canvasDom: HTMLDivElement | null;
  protected move: boolean = false; // 判断是否处于移动状态
  protected offsetY: number = 0;  // 记录鼠标按下形状时鼠标在形状X轴方向的偏移量
  protected offsetX: number = 0;  // 记录鼠标按下形状时鼠标在形状Y轴方向的偏移量
  protected canvasOffsetLeft: number = 0;  // 记录画布相对于整个浏览器视口区域X轴方向的偏移量
  protected canvasOffsetTop: number = 0;   // 记录画布相对于整个浏览器视口区域Y轴方向的偏移量

  constructor(canvasId: string, location?: {x: number, y: number}) {
    this.location = location ? location : { x:0, y:0 };
    this.dom = document.createElement('div')
    this.canvasDom = document.querySelector(canvasId);
    this.addMoveFn() // 构造函数中执行addMoveFn()方法让元素带有可拖动功能
  }

  get Location() {
    return this.location
  }

  set Location(obj: {x: number, y: number}) {
    if (!obj.x || !obj.y) {
      throw new Error('Invalid location')
    }
    this.location = obj
  }

  protected abstract appendElement(): void

  private addMoveFn() {
    this.dom.addEventListener('pointerdown', (e) => {
      this.move = true
      this.offsetX = e.offsetX
      this.offsetY = e.offsetY
      const {left = 0, top = 0} = (this.canvasDom as HTMLDivElement).getBoundingClientRect()
      this.canvasOffsetLeft = left
      this.canvasOffsetTop = top
    })
  
    this.canvasDom?.addEventListener('pointerup', () => {
      this.move = false
    })
    this.canvasDom?.addEventListener('pointermove', (e) => {
      if (this.move) {
        this.dom.style.left = `${e.clientX - this.offsetX - this.canvasOffsetLeft }px`
        this.dom.style.top = `${e.clientY - this.offsetY - this.canvasOffsetTop }px`
      }
    })
    this.canvasDom?.addEventListener('mouseleave', (e) => {
      if (this.move) {
        this.move = false
      }
    })
  }
}