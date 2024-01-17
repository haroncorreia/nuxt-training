export default defineNuxtRouteMiddleware((to, from) => {
  
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return abortNavigation('Unauthorized.')
  }

  // Getting params example
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }
  
})

function isAuthenticated() {
  return true;
  // throw new Error("Function not implemented.")
}

