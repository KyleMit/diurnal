import { ThemeProvider } from "@mui/material";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import { theme } from "./app/theme";
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
