import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./category/controllers/category.controller";
import { CategoryEntity } from "./category/entities/category.entity";
import { CategoryService } from "./category/services/category.service";
import { InstanceController } from "./instance/controllers/instance.controller";
import { InstanceEntity } from "./instance/entities/instance.entity";
import { InstanceService } from "./instance/services/instance.service";

// 如何将多个前缀相同的模块放在一起？ 并且模块之间可以相互引用 通过RootModule 来整合模块


@Module({
  imports: [
    RouterModule.register([
      {
        path: "resource",  // 前缀
        module: ResourceModule  // 模块
      }
    ]),
    TypeOrmModule.forFeature([
      CategoryEntity,
      InstanceEntity
    ])
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