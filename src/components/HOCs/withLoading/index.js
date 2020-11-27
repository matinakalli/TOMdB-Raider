import React from "react";
import LaraIsSearching from "./LaraIsSearching";

const withLoading = (Component) => ({ isLoading, ...otherProps }) => isLoading ? <LaraIsSearching /> : <Component {...otherProps} />

export { withLoading }
