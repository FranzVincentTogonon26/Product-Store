import concurrently from 'concurrently';

concurrently([
   {
      name: 'server',
      command: 'npm run dev',
      cwd: 'backend/src/server',
      prefixColor: 'cyan',
   },
   {
      name: 'client',
      command: 'npm run dev',
      cwd: 'frontend',
      prefixColor: 'green',
   },
]);
