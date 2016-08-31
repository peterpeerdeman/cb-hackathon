'use strict';

import { intersection } from 'mout/array';

export default intersection([

    /**
     * Gulp cli arguments enabling the watcher
     */
    'serve',
    '--watch'

], process.argv || []).length > 0;
