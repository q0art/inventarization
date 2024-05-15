import { AppModule } from "@app";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
  });

  await app.listen(3000);
};

bootstrap();
