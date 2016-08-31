'use strict';

/**
 * React is an implicit dependency of the JSX transpiled code.
 * We need to make it globally available by default.
 */
import React from 'react';
global.React = React;
