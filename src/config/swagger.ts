import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const options = new DocumentBuilder()
  .setTitle('DevOps')
  .setDescription('DevOps Api Document')
  .setVersion('1.0')
  .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'jwt')
  .build();

const startSwagger = (app) => {
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
};

export default startSwagger;
