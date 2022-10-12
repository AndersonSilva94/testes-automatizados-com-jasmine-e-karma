import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UniqueIdService {

  constructor() { }

  private numberOfGenerateIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix) {
      throw new Error("Prefix can not be empty");
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGenerateIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGenerateIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
