import { Module } from "@nestjs/common";
import { WorkspaceController } from "@workspace/workspace.controller";
import { WorkspaceService } from "@workspace/workspace.service";

@Module({
  controllers: [WorkspaceController],
  providers: [WorkspaceService],
})
export class WorkspaceModule {}
