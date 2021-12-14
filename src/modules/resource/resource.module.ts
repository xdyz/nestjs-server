import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./category/controllers/category.controller";
import { CategoryService } from "./category/services/category.service";
import { InstanceController } from "./instance/controllers/instance.controller";
import { InstanceService } from "./instance/services/instance.service";

// 如何将多个前缀相同的模块放在一起？ 并且模块之间可以相互引用 通过RootModule 来整合模块


@Module({
  imports: [
    RouterModule.register([
      {
        path: "resource",
        module: ResourceModule
      }
    ]),
    TypeOrmModule.forFeature([])
  ],
  controllers: [
    CategoryController,
    InstanceController
  ],
  providers: [
    CategoryService,
    InstanceService
  ]
})

export class ResourceModule {}