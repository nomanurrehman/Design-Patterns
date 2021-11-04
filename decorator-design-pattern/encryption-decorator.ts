import { DataSourceDecorator } from './data-source-decorator';

export class EncryptionDecorator extends DataSourceDecorator {
  write(data: string): void {
    const encryptedData: string = this.encrypt(data);
    return super.write(encryptedData);
  }

  read(): string {
    const encryptedData: string = super.read();
    return this.decrypt(encryptedData);
  }
  
  encrypt(data: string): string {
    return `Encrypted ${data}`;
  }

  decrypt(data: string): string {
    return `Decrypted ${data}`;
  }
}
