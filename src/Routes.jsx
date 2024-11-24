import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import NewContact from './pages/NewContact/NewContact.jsx';
import EditContact from './pages/EditContact/EditContact.jsx';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
