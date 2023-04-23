import { DirExecuter } from './commands/dir/dir.executor'
import { ConsoleLogger } from './out/console-logger/console-logger'


export class App {
  async run() {
     await new DirExecuter(ConsoleLogger.getInstance()).execute()
  }
}

const app = new App()
app.run()