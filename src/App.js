import "./App.css"
import { AddSocialLink } from "./components/addLinks/addLinks";
import { RemoveLinks } from "./components/removeLinks/removeLinks";
import { SocialLink } from "./components/links/Links";

import {SocialLinkProvider} from "./context/LinkContext"

function App() {
  return (
    <div className="App">
      <SocialLinkProvider>
        <SocialLink/>
        <AddSocialLink/>
        <RemoveLinks/>
      </SocialLinkProvider>
    </div>
  );
}

export default App;
