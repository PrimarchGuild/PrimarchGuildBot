import { Client, ClientOptions } from 'discord.js';
import ready from './listeners/Ready';
import dotenv from 'dotenv';

dotenv.config();

const token: string = process.env.TOKEN || '';

const client: Client = new Client({
    intents: []
});

ready(client);

client.login(token);