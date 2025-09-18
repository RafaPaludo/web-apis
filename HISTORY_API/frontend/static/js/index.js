import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = url => {
  history.pushState(null, null, url)
  router();
}

const router = async () => {
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/settings', view: Settings }
  ]

  // Testing potencial routes
  const potencialMatches = routes.map(route => {
    return {
      route: route,
      isMatched: location.pathname === route.path
    }
  })

  let match = potencialMatches.find(potencialMatches => potencialMatches.isMatched)

  if(!match) {
    match = {
      route:  routes[0],
      isMatched: true
    }
  }

  const view = new match.route.view()

  document.querySelector('#app').innerHTML = await view.getHtml()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
      event.preventDefault()
      navigateTo(event.target.href)
    }
  })
  
  router()
})