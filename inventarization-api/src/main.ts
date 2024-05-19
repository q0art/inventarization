import { AppModule } from "@app";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });

  await app.listen(3000);
};

bootstrap();
