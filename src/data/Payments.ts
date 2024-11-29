import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

import { Payment } from '@/interfaces';

const config: Config = {
  dictionaries: [names]
};

const randomStatus = () => {
  const statuses = ['pending', 'processing', 'success', 'failed'] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const randomEmail = (clientName: string) => {
  const domains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'hotmail.com'
  ] as const;
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${clientName}@${randomDomain}`;
};

export const payments = (dataLength: number): Payment[] => {
  return Array.from({ length: dataLength }, (_) => {
    const randomName = uniqueNamesGenerator(config);

    return {
      id: crypto.randomUUID(),
      amount: Math.floor(Math.random() * 10000) / 100,
      status: randomStatus(),
      clientName: randomName,
      email: randomEmail(randomName.toLowerCase())
    };
  });
};
