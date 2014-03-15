/*
 * lodash
 *
 * Copyright(c) 2014  <>
 * MIT Licensed
 *
 */
'use strict';


// lodash.com/docs
var _   = require('lodash');


// https://github.com/epeli/underscore.string
_.mixin(require('underscore.string').exports());

// https://gist.github.com/FGRibreau/4e26e5314496f834d0a6
_.mixin({
  filterObject: function(obj, f, ctx) {
    return Object.keys(obj).reduce(function(m, k) {
      return f.call(ctx, obj[k], k, obj) ? (m[k] = obj[k], m) : m;
    }.bind(obj), {});
  }
});

module.exports = _;
