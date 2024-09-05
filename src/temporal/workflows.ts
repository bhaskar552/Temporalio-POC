import { proxyActivities } from '@temporalio/workflow';

// Define activity interface
const { exampleActivity } = proxyActivities({
  startToCloseTimeout: '1 minute',
});

export async function exampleWorkflow(name: string): Promise<string> {
  return await exampleActivity(name);
}
