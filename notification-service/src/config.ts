import dotenv from 'dotenv';

dotenv.config({});

class Config {
  public NODE_ENV: string;
  public CLIENT_URL: string;
  public RABBITMQ_ENDPOINT: string;
  public SENDER_EMAIL: string;
  public SENDER_EMAIL_PASSWORD: string;
  public ELASTICSEARCH_URL: string;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.RABBITMQ_ENDPOINT = process.env.RABBITMQ_ENDPOINT || '';
    this.SENDER_EMAIL = process.env.SENDER_EMAIL || '';
    this.SENDER_EMAIL_PASSWORD = process.env.SENDER_EMAIL_PASSWORD || '';
    this.ELASTICSEARCH_URL = process.env.ELASTICSEARCH_URL || '';
  }
}

export const config: Config = new Config();
