import { dispatch as d3_dispatch } from 'd3-dispatch';
import { select as d3_select } from 'd3-selection';

import { utilRebind } from '../../util/rebind';
import { utilGetDimensions } from '../../util/dimensions';


export function uiFieldOpeningHours(field, context) {
    var dispatch = d3_dispatch('change'),
        input = d3_select(null);


    function hours(selection) {

    }

    hours.tags = function() {};
    hours.focus = function() {};
    hours.off = function() {};

    return utilRebind(hours, dispatch, 'on');
}
