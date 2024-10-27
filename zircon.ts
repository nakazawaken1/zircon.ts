class Zircon {
  run(source: string) {
    return new Parser().parse(source).evaluate()
  }
}
class Parser {
  parse(source: string) {
    return new ZrExpression(source)
  }
}
class ZrExpression {
  source: string
  constructor(source: string) {
    this.source = source
  }
  dump() {
    return this.source
  }
  evaluate() {
    return this
  }
}
console.log(new Zircon().run("echo 'Hello, World!'"))