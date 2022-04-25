import { createServer } from './server'

const main = async () => {
  const port = 4000
  try {
    const app = await createServer()
    app.listen(port, () => console.log(`'Server is running: ${port}`))
  } catch (error) {
    console.log(error)
  }
}

main()
