import { winstonLogger } from '@sidharth-97/gigscout-helper';
import express, { Application } from 'express';
import { Logger } from 'winston';
import { config } from './config';

const SERVER_PORT = 4001

const log:Logger=winstonLogger(`${config.ELASTICSEARCH_URL}`,'notification-service','debug')
const app:Application = express();

export function start(app:Application):void {
   startServer(app)
   startQueues()
   startElasticSearch()
}

async function startQueues():Promise<void> {

}

function startElasticSearch():void {

}

function startServer(app:Application):void {
    try {
        app.listen(SERVER_PORT, () => {
          log.info(`Server started on port ${SERVER_PORT}`);
        });
    } catch (error) {
        log.log('error', error);
    }
}

start(app);