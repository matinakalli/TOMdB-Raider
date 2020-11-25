import React from "react";
import { MobXProviderContext } from "mobx-react";

/**
 * @typedef {object} Stores
 * @property {import("./moviesStore").default} moviesStore
 * /

/**
 * Hook to provide easier access to a Mobx store without needing for 'inject'
 *
 * @returns {Stores} stores provided
 */
function useStores() {
	return React.useContext(MobXProviderContext);
}

export { useStores };
