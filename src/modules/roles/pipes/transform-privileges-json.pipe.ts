import { Injectable } from "@nestjs/common";

@Injectable()
export default class TransformPrivilegesJsonPipe {
  transform(value: any) {
    const { privileges, ...rest } = value;
    return {
      ...rest,
      privileges: JSON.stringify(privileges)
    }
  }
}