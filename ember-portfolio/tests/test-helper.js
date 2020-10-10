import Application from 'ember-portfolio/app';
import config from 'ember-portfolio/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
