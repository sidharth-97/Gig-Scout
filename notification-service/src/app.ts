import { winstonLogger } from "@sidharth-97/gigscout-helper";
import { Logger } from "winston";
import {config} from '@notifications/config'
import { start } from '@notifications/server';
import express,{Express} from 'express';

const log:Logger=winstonLogger(`${config.ELASTICSEARCH_URL}`,'notificationApp','debug')

function initialize():void {
    const app:Express = express();
    start(app);
    log.info('Notification service started');
}

initialize();