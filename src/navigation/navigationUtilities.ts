import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Navigates to a specified route with optional parameters.
 *
 * @param routeName - The name of the route to navigate to.
 * @param params - Optional parameters to pass to the route.
 * @returns A promise that resolves when the navigation is complete.
 */
export async function navigate(routeName: string, params?: object) {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

/**
 * Replaces the current route with a new one.
 *
 * @param routeName - The name of the route to navigate to.
 * @param params - Optional parameters to pass to the route.
 * @returns A promise that resolves when the navigation action is complete.
 */
export async function replace(routeName: string, params?: object) {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(routeName, params));
  }
}

/**
 * Resets the navigation state and navigates to the specified route.
 *
 * This function checks if the navigation reference is ready, and if so,
 * it dispatches a reset action to the navigation state with the given route name.
 *
 * @param routeName - The name of the route to navigate to after resetting the navigation state.
 * @returns A promise that resolves when the navigation action is complete.
 */
export async function resetAndNavigate(routeName: string) {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
}

/**
 * Navigates back to the previous screen if the navigation reference is ready.
 *
 * This function checks if the navigation reference is ready, and if so,
 * it dispatches a `goBack` action to navigate back to the previous screen.
 *
 * @async
 * @function
 */
export async function goBack() {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

/**
 * Navigates to a new screen by pushing it onto the navigation stack.
 *
 * @param routeName - The name of the route to navigate to.
 * @param params - Optional parameters to pass to the route.
 * @returns A promise that resolves when the navigation action is complete.
 */
export async function push(routeName: string, params?: object) {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}

export async function prepareNavigation() {
  navigationRef.isReady();
}
