import React from "react";
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps{
  isPrivate?: boolean,
  component: React.ComponentType,
}

const Route:React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
  }) => {


  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return <Component/>
      }}
    />
  );
}

export default Route;