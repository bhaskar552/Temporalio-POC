import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
import { exampleActivity } from './activities';

@Injectable()
export class TemporalService implements OnModuleInit, OnModuleDestroy {
  private worker: Worker;

  async onModuleInit() {
    this.worker = await Worker.create({
      workflowsPath: require.resolve('./workflows'),
      activities: {
        exampleActivity,
      },
      taskQueue: 'my-task-queue',
    });
    await this.worker.run();
  }

  async onModuleDestroy() {
    await this.worker.shutdown();
  }
}
