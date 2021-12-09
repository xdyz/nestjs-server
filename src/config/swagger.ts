import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
const config = new DocumentBuilder()
  .setTitle('DevOps')
  .setDescription('DevOps Api Document')
  .setVersion('1.0')
  .setBasePath('/api/v1')   // 与设置的全局前缀一致
  .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'jwt')
  .build();

// 设置出来的url 不会带controoler 名字 不过这个其实设置不设置都无所谓了
const options: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey
}
  
const startSwagger = (app) => {
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger', app, document);
};

export default startSwagger;
