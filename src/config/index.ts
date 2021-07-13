import { ConfigNotFoundException } from 'exceptions/ConfigurationNotFoundException';
import { Configuration } from './Configuration';

export const Config: Configuration = { ApiEndpoint: null };

export const readConfig = async (): Promise<void> => {
  try {
    const jsonResponse = await fetch('/config.json');
    const deserializedConfig = await jsonResponse.json();
    Object.assign(Config, deserializedConfig);
  } catch (err) {
    throw new ConfigNotFoundException('Please provide a valid config file');
  }
};
