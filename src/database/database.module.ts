import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { appEnvironment } from 'src/env/app.environment';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [appEnvironment.KEY],
      useFactory: async (env: ConfigType<typeof appEnvironment>) => ({
        uri: `${env.mongodb.HOST}/${env.mongodb.DBNAME}`,
        useNewUrlParser: true,
      }),
    }),
  ],
  providers: [],
  exports: [MongooseModule],
})
export class DatabaseModule {}
