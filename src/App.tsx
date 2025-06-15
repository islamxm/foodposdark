import { AppRouter } from "./app/providers/router/ui/AppRouter/AppRouter"
import { ConfigProvider as AntConfigProvider } from "antd"
import { generateStyleVars } from "./shared/lib/generateStyleVars"
import { styleVars } from "./shared/const/styleVars"

const App = () => {
  generateStyleVars(styleVars)

  return (
    <AntConfigProvider
      theme={{ token: undefined, hashed: false }}

    >
      <AppRouter />
    </AntConfigProvider>

  )
}

export default App
