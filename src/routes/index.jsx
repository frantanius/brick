// Packages
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
// Components
const CreditCard = loadable(() => import('pages/CreditCard'))
const Assesment2 = loadable(() => import('pages/Assesment2'))

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CreditCard} />
        <Route path="/assesment2" component={Assesment2} />
      </Switch>
    </BrowserRouter>
  )
}
