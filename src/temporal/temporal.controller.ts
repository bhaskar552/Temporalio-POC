import { Controller, Get } from '@nestjs/common';
import { Connection, WorkflowClient } from '@temporalio/client';
import { exampleWorkflow } from './workflows';
import { v4 as uuidv4 } from 'uuid'; // Import a UUID generator for unique workflowId

@Controller('temporal')
export class TemporalController {
  private client: WorkflowClient;

  constructor() {
    this.initializeClient();
  }

  private async initializeClient() {
    const connection = await Connection.connect();
    this.client = new WorkflowClient({ connection });
  }

  @Get()
  async startWorkflow() {
    const workflowHandle = await this.client.start(exampleWorkflow, {
      taskQueue: 'my-task-queue',
      args: ['Temporal'],  // Pass arguments here
      workflowId: uuidv4(), // Generate a unique workflowId
    });

    const result = await workflowHandle.result();
    return { result };
  }
}
