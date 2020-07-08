// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);

// const context = require.context('./', true, /add-to-bag.service\.spec\.ts$/);
// const context1 = require.context('./', true, /add-to-wishlist.service\.spec\.ts$/);
// const context2 = require.context('./', true, /auth.service\.spec\.ts$/);
// const context3 = require.context('./', true, /cart-order-summary.service\.spec\.ts$/);
// const context4 = require.context('./', true, /http.service\.spec\.ts$/);
// const context5 = require.context('./', true, /user.service\.spec\.ts$/);
// const context6 = require.context('./', true, /activate.service\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
// context1.keys().map(context1);
// context2.keys().map(context2);
// context3.keys().map(context3);
// context4.keys().map(context4);
// context5.keys().map(context5);
// context6.keys().map(context6);
